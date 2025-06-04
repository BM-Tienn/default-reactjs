/**
 *
 * Wysiwyg
 *
 */
import React, {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  // useState,
} from 'react';
import { WysiwygWrapper } from './styled';
// import EditorJS from '@editorjs/editorjs';
// import { objectType } from 'types';
// import { TOOLS } from './utils';
// import { useDebounce } from 'utils/hooks/useDebounce';

export type Type_RefWYSIWYGFunc = {
  clear: () => void;
  destroy: () => void;
  getValue: () => void;
  setValue: (value: I_DataWYSIWYG[]) => void;
};
export interface I_DataWYSIWYG {
  type: string;
  data: object;
}

export interface I_Editorjs {
  id: string;
  value: I_DataWYSIWYG[];
  onChange: ({ value }) => any;
  placeholder?: string;
  minHeight?: number | string;
  maxHeight?: number | string;
  autofocus?: boolean;
  customEvent?: () => void;
  border?: boolean;
}

export const Wysiwyg = forwardRef(
  (
    { id, autofocus = true, onChange, ...props }: I_Editorjs,
    ref: Ref<Type_RefWYSIWYGFunc>,
  ) => {
    const editor = useRef<any>();
    // const isEdited = useRef<boolean>(false);
    // const [isReady, setIsReady] = useState<boolean>(false);
    // const [value, setValue] = useState<objectType[]>(props.value);
    // const valueDebounce = useDebounce({ value, delay: 500 });
    /**
     * NOTE: reflect change value to parent
     */
    // useEffect(() => {
    //   if (valueDebounce !== props.value && valueDebounce) {
    //     onChange({ value: valueDebounce });
    //     isEdited.current = true;
    //   }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [valueDebounce]);

    /**
     * NOTE: init editor instance
     */
    useEffect(() => {
      // if (!editor.current && id) {
      //   editor.current = new EditorJS({
      //     holder: id,
      //     placeholder: props.placeholder || 'Write something...',
      //     minHeight: 250,
      //     autofocus,
      //     tools: TOOLS,
      //     data: { blocks: props.value || [] },
      //     onReady: () => setIsReady(true),
      //     onChange: () =>
      //       editor.current &&
      //       editor.current.save().then((data: any) => {
      //         setValue(data.blocks);
      //       }),
      //   });
      // }
      return () => {
        editor.current && editor.current.destroy && editor.current.destroy();
        editor.current = null;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    /**
     * NOTE: set value initial when editor instance is ready
     */
    // useEffect(() => {
    //   if (props.value.length && !isEdited.current && isReady) {
    //     editor.current &&
    //       editor.current.render &&
    //       editor.current.render({ blocks: props.value });
    //   }
    // }, [props.value, isReady]);

    useImperativeHandle(ref, () => ({
      getValue() {
        return editor.current.save();
      },
      setValue(value: I_DataWYSIWYG[]) {
        editor.current &&
          editor.current.render &&
          editor.current.render({ blocks: value });
      },
      destroy() {
        editor.current && editor.current.destroy && editor.current.destroy();
        editor.current = null;
      },
      clear() {
        editor.current && editor.current.clear && editor.current.clear();
      },
    }));

    return (
      <WysiwygWrapper
        className="textEditorForm"
        id={id}
        minHeight={props.minHeight || '250px'}
        maxHeight={props.maxHeight || '500px'}
        border={props.border || false}
      />
    );
  },
);
