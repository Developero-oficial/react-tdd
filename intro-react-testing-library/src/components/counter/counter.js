import React, { useState } from 'react';

export default function Counter () {
  const [counts, setCounts] = useState(0);

  return (
    <>
      <button onClick={() => setCounts(counts + 1)}>Click</button>
      <p>Clicked times: {counts}</p>
    </>
  );
};
