import React from 'react';
import logoDarkUrl from '../../assets/OPlusDojo-logo.final.png';


const Logo = ({ logo = logoDarkUrl }) => {
  return <img src={logo} alt="OPLUS DOJO" className="h-20 w-auto" />;
};

export default Logo;
