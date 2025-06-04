/**
 *
 * DialogContainer
 *
 */
import React, { memo, CSSProperties } from 'react';
import { Modal } from 'antd';
import {
  DialogHeaderWrapper,
  DialogBodyWrapper,
  DialogFooterWrapper,
  DialogWrapper,
  DialogContainerWrapper,
  DialogLeftSidebarWrapper,
  DialogRightSidebarWrapper,
} from './styled';
// import DialogCreateRoomBg from 'assets/img/HomePageBg.jpg';

interface Props {
  visible: boolean;
  title?: string;
  width?: number | string;
  centered?: boolean;
  className?: string;
  maskClosable?: boolean;
  zIndex?: number;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
  height?: string;
  idBody?: string;
  hiddenCloseButton?: boolean;
  colorCloseIcon?: string;
  isShowMask?: boolean;
  keyboard?: boolean;
  maskStyle?: CSSProperties;
  dialogContainerStyle?: CSSProperties;
  dialogContentStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  children: React.ReactNode;
  leftSidebar?: React.ReactNode;
  rightSidebar?: React.ReactNode;
}

export const DialogContainer = memo(
  ({
    title = undefined,
    visible = false,
    width = '650px',
    centered = false,
    className = '',
    zIndex = 1000,
    maskClosable = false,
    isShowMask = true,
    hiddenCloseButton = false,
    dialogContainerStyle = {},
    maskStyle = {},
    dialogContentStyle = {},
    bodyStyle = {},
    colorCloseIcon = '#000000a6',
    children,
    keyboard = true,
    leftSidebar,
    rightSidebar,
    footer,
    header,
    onOk,
    onCancel,
  }: Props) => {
    return (
      <Modal
        title={title}
        open={visible}
        footer={null}
        width={width}
        centered={centered}
        className={className}
        zIndex={zIndex}
        maskClosable={maskClosable}
        onOk={onOk}
        onCancel={onCancel}
        closable={!hiddenCloseButton}
        keyboard={keyboard}
        style={dialogContainerStyle}
        styles={{ mask: maskStyle, body: bodyStyle }}
        mask={isShowMask}
        destroyOnClose
        transitionName=""
        maskTransitionName=""
      >
        <DialogWrapper className="h-full overflow-hidden">
          <DialogLeftSidebarWrapper>{leftSidebar}</DialogLeftSidebarWrapper>
          <DialogContainerWrapper
            className="dialogContainer flex flex-col h-full gap-3"
            style={{
              ...dialogContentStyle,
            }}
          >
            {!hiddenCloseButton && (
              <DialogHeaderWrapper colorCloseIcon={colorCloseIcon}>
                {header}
              </DialogHeaderWrapper>
            )}
            <DialogBodyWrapper className="h-full overflow-hidden">
              {children}
            </DialogBodyWrapper>
            <DialogFooterWrapper>{footer}</DialogFooterWrapper>
          </DialogContainerWrapper>
          <DialogRightSidebarWrapper>{rightSidebar}</DialogRightSidebarWrapper>
        </DialogWrapper>
      </Modal>
    );
  },
);
