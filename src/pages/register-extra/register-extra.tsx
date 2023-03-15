import React, { useEffect, useState } from 'react';
import First from './first.tsx';
import Second from './second.tsx';

export default function RegisterExtra() {
  const [type, setType] = useState('');
  return (
    <div>
      {/* <First type={type} handleTypeChange={(t) => setType(t)} /> */}
      <Second />
    </div>
  );
}
