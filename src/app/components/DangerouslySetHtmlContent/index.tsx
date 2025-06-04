import React, { useEffect, useRef } from 'react';

interface Props {
  html: string;
  className?: string;
}

// NOTE: execute Script code in html content instead string on natively dangerousSetHtml

function DangerouslySetHtmlContent({ html, ...rest }: Props) {
  const divRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if (!html) return;

    const slotHtml = document.createRange().createContextualFragment(html); // Create a 'tiny' document and parse the html string
    divRef.current.innerHTML = ''; // Clear the container
    divRef.current.appendChild(slotHtml); // Append the new content
  }, [html]);

  return <div {...rest} ref={divRef} />;
}

export default DangerouslySetHtmlContent;
