import { useEffect, useState } from 'react';

export function SpinningCoin({ className = '' }) {
  return (
    <div className={`brand-coin ${className}`} aria-hidden="true">
      <div className="brand-coin__spin">
        <div className="brand-coin__edge" />
        <div className="brand-coin__face brand-coin__face--front">
          <img src="/logo.png" alt="" />
        </div>
        <div className="brand-coin__face brand-coin__face--back">
          <img src="/logo.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export function BrandWatermark() {
  return <div className="brand-watermark" aria-hidden="true" />;
}

export function StartupIntro() {
  const [visible, setVisible] = useState(() => {
    try {
      return window.sessionStorage.getItem('arnx-startup-seen') !== 'true';
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!visible) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reducedMotion ? 350 : 3100;

    const dismiss = () => {
      try {
        window.sessionStorage.setItem('arnx-startup-seen', 'true');
      } catch {
        // The intro can still complete when storage is unavailable.
      }
      setVisible(false);
    };

    const timer = window.setTimeout(dismiss, duration);
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') dismiss();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible]);

  if (!visible) return null;

  const skipIntro = () => {
    try {
      window.sessionStorage.setItem('arnx-startup-seen', 'true');
    } catch {
      // Session storage is optional.
    }
    setVisible(false);
  };

  return (
    <div className="startup-intro" role="dialog" aria-label="The Studio ArnX brand introduction" aria-modal="true">
      <div className="startup-intro__ambient" aria-hidden="true" />
      <button className="startup-intro__skip" type="button" onClick={skipIntro}>
        Skip
      </button>

      <div className="startup-intro__stage">
        <div className="startup-intro__coin" aria-hidden="true">
          <div className="startup-intro__coin-spin">
            <div className="startup-intro__edge" />
            <div className="startup-intro__face startup-intro__face--front">
              <img src="/logo.png" alt="" />
              <span className="startup-intro__sheen" />
            </div>
            <div className="startup-intro__face startup-intro__face--back">
              <img src="/logo.png" alt="" />
              <span className="startup-intro__sheen" />
            </div>
          </div>
        </div>

        <div className="startup-intro__brand">
          <p>THE STUDIO ARNX</p>
          <span>Logic in every layer.</span>
        </div>
      </div>
    </div>
  );
}
