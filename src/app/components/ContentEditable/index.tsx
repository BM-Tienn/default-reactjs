import React, { useRef, useEffect } from 'react';
import { ContentEditableWrapper } from './styled';

interface EditableTitleProps {
  defaultValue: string;
  onChange: (value: { value: string }) => void;
}

const EditableTitle: React.FC<EditableTitleProps> = ({
  defaultValue,
  onChange,
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.innerText = defaultValue;
    }
  }, [defaultValue]);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    if (onChange && divRef.current) {
      onChange({ value: divRef.current.innerText });
    }
  };

  return (
    <ContentEditableWrapper>
      <div className="EditTableContent">
        <div
          ref={divRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          className="edit"
        />
      </div>
    </ContentEditableWrapper>
  );
};

export default EditableTitle;
