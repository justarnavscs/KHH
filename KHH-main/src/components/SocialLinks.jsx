import { ACTIVE_SOCIAL_LINKS } from '../config/site';

function SocialIcon({ label }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[18px] w-[18px]">
      {label === 'GitHub' && (
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.2 3.26.92.1-.72.39-1.2.71-1.48-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.59 5.22-5.07 5.5.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      )}
      {label === 'X' && (
        <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-8.5-6.64 8.5H.48l8.6-11L0 1.15h7.59l5.24 7.77 6.07-7.77Zm-1.29 19.58h2.04L6.48 3.16H4.29l13.32 17.57Z" />
      )}
      {(label === 'The Studio ArnX on Instagram' || label === 'Arnav Agarwal on Instagram') && (
        <>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Z" />
          <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.6 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
        </>
      )}
      {label === 'LinkedIn' && (
        <path d="M5.2 3.2a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.7v11.8H3.4V9Zm5.9 0h3.5v1.6h.1a3.9 3.9 0 0 1 3.5-1.9c3.8 0 4.5 2.5 4.5 5.7v6.4h-3.7v-5.7c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.8H9.3V9Z" />
      )}
    </svg>
  );
}

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {ACTIVE_SOCIAL_LINKS.map(({ label, url }) => {
        return (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 text-current transition hover:border-[#98764e] hover:text-[#98764e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98764e]"
          >
            <SocialIcon label={label} />
          </a>
        );
      })}
    </div>
  );
}
