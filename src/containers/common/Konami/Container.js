import React, { useState, useEffect } from 'react';
import KonamiResponder from 'konami';
import DebugObject from '@george-gillams/webapp/components/DebugObject';
import ConfettiCanvas from './ConfettiCanvasLoadable';

const Konami = () => {
  const [konamiActivated, setKonamiActivated] = useState(false);

  useEffect(() => {
    new KonamiResponder(() => {
      setKonamiActivated(true);
    });
  }, []);

  return (
    <>
      {konamiActivated && <ConfettiCanvas />}
      <div>
        <DebugObject debugTitle="Konami" debugObject={{ konamiActivated }} />
      </div>
    </>
  );
};

export default Konami;
