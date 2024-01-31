import React from 'react';

export default function ConditionalRender({left, right}) {
  const condition = left >= right;  
  return (
    <div>
      {
        condition ?
        'bal oldal >= jobb oldal' :
        'Bal oldal < jobb oldal'
      }
    </div>
  );
}
