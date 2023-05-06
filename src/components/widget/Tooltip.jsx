import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';

function Tooltip({ text, children, isShow = true }) {
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
        {children}
      </div>
      <div className={`${showTooltip && isShow ? 'fadein' : 'fadeout'} animate-pulse absolute bg-site-400 text-gary-950 border border-gary-950 text-xs rounded w-max max-w-40 py-1 px-1`}
        style={{ top: '20%', right: 'calc(100%)', transform: 'translateY(-10%)', maxWidth: '30vw' }}>
        {t(text)}
      </div>
    </div>
  );
}
export default Tooltip;