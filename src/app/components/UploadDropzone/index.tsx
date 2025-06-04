/**
 *
 * UploadDropzone
 *
 */
import React, { memo, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { LoadingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { UploadDropzoneWrapper } from './styled';
import { OverlayThumb } from '../OverlayThumb/Loadable';
import { openNotificationWithIcon } from 'utils/helper';

interface Props {
  text?: string;
  loading?: boolean;
  accept?: string | string[];
  onDrop: (files: File[]) => void;
  maxFileSize?: number;
  minFileSize?: number;
  inline?: boolean;
}

export const UploadDropzone = memo(
  ({
    loading = false,
    accept = ['image/*'],
    minFileSize = 0,
    maxFileSize = Infinity,
    onDrop,
    text = 'New Media',
    inline,
  }: Props) => {
    const { fileRejections, isDragActive, getRootProps, getInputProps } =
      useDropzone({
        noClick: loading,
        disabled: loading,
        noDrag: loading,
        noKeyboard: loading,
        onDrop: onDrop,
        accept: accept,
        maxSize: maxFileSize,
        minSize: minFileSize,
      });

    useEffect(() => {
      fileRejections.length &&
        fileRejections.forEach(({ errors, file }, index) => {
          openNotificationWithIcon(
            'error',
            file.name,
            errors[0].message,
            5 + index,
          );
        });
    }, [fileRejections]);

    return (
      <UploadDropzoneWrapper>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div
            className={
              inline
                ? ''
                : 'dropbox min-h-[70px] flex flex-col items-center justify-center rounded-[8px] p-[12px_0] bg-black/20 text-center'
            }
          >
            <Button
              type="primary"
              className="btn-theme rounded-full px-6 capitalize"
              icon={<i className="far fa-plus" />}
            >
              {text}
            </Button>
            {loading && (
              <OverlayThumb label={`Uploading...`} icon={<LoadingOutlined />} />
            )}
            {isDragActive && <OverlayThumb label={`Drop files here...`} />}
          </div>
        </div>
      </UploadDropzoneWrapper>
    );
  },
);
