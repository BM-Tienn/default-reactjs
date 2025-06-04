import { memo, useCallback, useEffect, useRef, useState } from 'react';
import Editor from 'suneditor-react';
import { SunEditorWrapper } from './styled';
import { CONFIG_SUN_EDITOR } from './constants';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

// ex) A command plugin to add "Range format element(util.isRangeFormatElement)" to selection

export const SunEditor = memo(({ value, onChange }: Props) => {
  const editorRef = useRef<any>(null!);
  const [pluginComamnd, setPluginCommand] = useState<any>(null!);

  const onOpenDialogMedia = useCallback(mimetype => {
    console.log('mimetype :', mimetype);
  }, []);

  // const onCloseDialogMedia = useCallback(() => {
  //   // consetVisibleDialogMedia(false);
  // }, []);

  useEffect(() => {
    setPluginCommand({
      name: 'customImage',
      display: 'command',
      title: 'Insert image',
      buttonClass: '',
      innerHTML: '<i class="fas fa-images"></i>',
      add: function (core, targetElement) {
        const context = core.context;
        const rangeTag = core.util.createElement('div');
        core.util.addClass(rangeTag, '__se__format__range_custom');
        context.customCommand = {
          targetButton: targetElement,
          tag: rangeTag,
        };
      },
      // @Override core
      // Plugins with active methods load immediately when the editor loads.
      // Called each time the selection is moved.
      active: function (element) {
        return true;
      },
      // @Required, @Override core
      // The behavior of the "command plugin" must be defined in the "action" method.
      action: function () {
        onOpenDialogMedia('image');
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = useCallback(sunEditor => {
    editorRef.current = sunEditor;
  }, []);

  // const onSubmitDialogMedia = useCallback(
  //   listMediaId => {
  //     console.log('listMediaId :', listMediaId);
  //     // let file = listMedia.filter(item => item.id === listMediaId[0])[0];
  //     // if (file)
  //     //   editorRef.current?.appendContents(
  //     //     `<img src="${file.src}" class="fr-fic fr-dib" alt="" data-proportion="true" data-align="center">`,
  //     //   );
  //     onCloseDialogMedia();
  //   },
  //   [onCloseDialogMedia],
  // );

  return (
    <SunEditorWrapper>
      {pluginComamnd && (
        <Editor
          autoFocus
          width="100%"
          height="100%"
          setAllPlugins
          lang={(window as any).SUNEDITOR_LANG.en}
          setOptions={{
            ...CONFIG_SUN_EDITOR,
            plugins: { pluginComamnd },
            minHeight: '400',
            maxHeight: 'calc(100vh - 190px)',
          }}
          placeholder="Typing here"
          setContents={value}
          onChange={onChange}
          getSunEditorInstance={getSunEditorInstance}
        />
      )}
    </SunEditorWrapper>
  );
});
