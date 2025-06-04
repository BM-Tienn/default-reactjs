/**
 *
 * SvgContainer
 *
 */
import React, { memo, useEffect, useState } from 'react';
import { SvgContainerWrapper } from './styled';

interface Props {
  src: string;
  name?: string;
  children?: React.ReactNode;
}

export const SvgContainer = memo(({ src, name, children }: Props) => {
  const [svg, setSvg] = useState('');

  useEffect(() => {
    fetch(src)
      .then(res => res.text())
      .then(text => setSvg(text));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return (
    <SvgContainerWrapper id={name || ''}>
      <div dangerouslySetInnerHTML={{ __html: svg }} />
      {children}
    </SvgContainerWrapper>
  );
});
