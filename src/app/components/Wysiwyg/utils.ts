import { objectType } from 'types';
// import Paragraph from '@editorjs/paragraph';
// import Delimiter from '@editorjs/delimiter';
// import Marker from '@editorjs/marker';
// import Table from '@editorjs/table';
// import InlineCode from '@editorjs/inline-code';
// import Warning from '@editorjs/warning';
// import SimpleImage from '@editorjs/simple-image';
// import Raw from '@editorjs/raw';
// import LinkTool from '@editorjs/link';
// import List from '@editorjs/list';
// import CodeTool from '@editorjs/code';
// import Checklist from '@editorjs/checklist';
// import Underline from '@editorjs/underline';
// import Header from '@editorjs/header';
// import Attaches from '@editorjs/attaches';
// import Quote from '@editorjs/quote';
// import ImageTool from '@editorjs/image';
// import Embed from '@editorjs/embed';

export const TOOLS = {
  // header: { class: Header, inlineToolbar: true },
  // simpleImage: SimpleImage,
  // image: {
  //   class: ImageTool,
  //   config: {
  //     endpoints: {
  //       byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
  //       byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
  //     },
  //   },
  // },
  // list: { class: List, inlineToolbar: true },
  // checklist: { class: Checklist, inlineToolbar: true },
  // quote: { class: Quote, inlineToolbar: true },
  // warning: { class: Warning, inlineToolbar: true },
  // marker: { class: Marker, inlineToolbar: true },
  // code: { class: CodeTool, inlineToolbar: true },
  // delimiter: { class: Delimiter, inlineToolbar: true },
  // inlineCode: { class: InlineCode, inlineToolbar: true },
  // linkTool: { class: LinkTool, inlineToolbar: true },
  // embed: { class: Embed, inlineToolbar: true },
  // table: { class: Table, inlineToolbar: true },
  // paragraph: { class: Paragraph, inlineToolbar: true },
  // attaches: { class: Attaches, inlineToolbar: true },
  // underline: { class: Underline, inlineToolbar: true },
  // raw: { class: Raw, inlineToolbar: true },
};

export function f_editorjs_convert_json_to_html(json: objectType[]): any {
  var output_HTML = '';
  output_HTML += '<div class="codex-editor">\n';
  output_HTML += '<div class="codex-editor__redactor">\n';
  json.forEach((obj: objectType) => {
    switch (obj.type) {
      case 'delimiter':
        output_HTML +=
          '<div class="ce-block"><div class="ce-block__content"><div class="ce-delimiter cdx-block"></div></div></div>\n';
        break;

      case 'checklist':
        var checklist = '';
        obj.data.items.forEach(function (item: objectType) {
          var checked_ext = '';
          if (item.checked) {
            checked_ext = '--checked';
          }
          checklist +=
            '<div class="cdx-checklist__item cdx-checklist__item' +
            checked_ext +
            '"><span class="cdx-checklist__item-checkbox"></span><div class="cdx-checklist__item-text">' +
            item.text +
            '</div></div>';
        });
        output_HTML +=
          '<div class="ce-block"><div class="ce-block__content"><div class="cdx-block cdx-checklist">' +
          checklist +
          '</div></div></div>\n';
        break;

      case 'header':
        output_HTML +=
          '<div class="ce-block"><div class="ce-block__content"><h' +
          obj.data.level +
          ' class="ce-header">' +
          obj.data.text +
          '</h' +
          obj.data.level +
          '></div></div>\n';
        break;

      case 'paragraph':
        output_HTML +=
          '<div class="ce-block"><div class="ce-block__content"><div class="ce-paragraph cdx-block">' +
          obj.data.text +
          '</div></div></div>\n';
        break;

      case 'table':
        var rows = '';
        obj.data.content.forEach(function (row: any) {
          let cells = '';
          row.forEach(function (cell: any) {
            cells +=
              '<td class="tc-table__cell"><div class="tc-table__area">' +
              cell +
              '</div></td>\n';
          });
          rows += '<tr>' + cells + '</tr>\n';
        });
        output_HTML +=
          '<div class="ce-block"><div class="ce-block__content"><div class="tc-editor cdx-block">' +
          '<div class="tc-table__wrap"><table class="tc-table"><tbody>' +
          rows +
          '</tbody></table></div></div></div></div>\n';
        break;

      case 'image':
        output_HTML += `<img class="img-fluid" src="${obj.data.file.url}" title="${obj.data.caption}" /><br /><em>${obj.data.caption}</em>`;
        break;

      case 'list':
        output_HTML += '<ul>';
        obj.data.items.forEach(function (li: any) {
          output_HTML += `<li>${li}</li>`;
        });
        output_HTML += '</ul>';
        break;

      case 'code':
        output_HTML +=
          "<div class='ce-block'><div class='ce-block__content'><div class='cdx-block ce-code'><div class='ce-code__textarea cdx-input'>" +
          obj.data.code +
          '</div></div></div></div>';
        break;

      case 'raw':
        output_HTML += obj.data.html;
        break;

      default:
        break;
    }
  });
  output_HTML += '</div>\n</div>\n';
  return output_HTML;
}
