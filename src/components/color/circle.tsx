"use client"

import React, { useState } from 'react';
import Circle from '@uiw/react-color-circle';

export default function Demo() {
  const [hex, setHex] = useState('#F44E3B');
  return (
    <Circle
      colors={[ '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00' ]}
      color={hex}
      onChange={(color) => {
        setHex(color.hex);
      }}
    />
  );
}
