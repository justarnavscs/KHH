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
