import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';

interface Props {
  text: string;
  innerProps: React.ReactNode;
  isShow?: boolean;
}


const Tooltip : React.FC<Props & {children: React.ReactNode}> = ({ children, text, innerProps, isShow = false }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useTranslation();
  // Hide tooltip on unmount
  useEffect(() => {
    return () => {
      setShowTooltip(false);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="inline-block"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {innerProps}
      </div>
      <div className={`${showTooltip && isShow ? 'fadein' : 'fadeout'} 
      animate-pulse absolute bg-site-400 text-gary-950 border border-gary-950 text-xs bg-white tooltip
      md:max-w-40 max-w-40 rounded w-fit py-1 px-1 inline-block whitespace-nowrap`}
        style={{ top: '20%', right: 'calc(100%)', transform: 'translateY(-10%)'}}>
        {t(text)}
        {children}
      </div>
    </div>
  );
}
export default Tooltip;