export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`.trim()}>
      <svg className="logo__mark" viewBox="0 0 40 28" aria-hidden="true" focusable="false">
        <rect x="1" y="2" width="38" height="24" rx="9" fill="currentColor" />
        <circle cx="13" cy="14" r="3.4" fill="var(--logo-eye, #f5f0ea)" />
        <circle cx="27" cy="14" r="3.4" fill="var(--logo-eye, #f5f0ea)" />
      </svg>
      <span className="logo__word">Veyra</span>
    </span>
  );
}
