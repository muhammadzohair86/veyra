const common = {
  width: 28,
  height: 28,
  viewBox: '0 0 28 28',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
};

const ICONS = {
  visor: (
    <svg {...common}>
      <rect x="3" y="8" width="22" height="12" rx="5" />
      <path d="M12 20c.8-1.400 1.400-2 2-2s1.200.6 2 2" />
    </svg>
  ),
  cushion: (
    <svg {...common}>
      <path d="M4 10c0-1.700 1.300-3 3-3h14c1.700 0 3 1.300 3 3v6c0 1.700-1.300 3-3 3h-3.500c-1 0-1.800-.5-2.300-1.300L14 17l-1.200.7c-.5.800-1.300 1.300-2.300 1.300H7c-1.700 0-3-1.300-3-3v-6z" />
    </svg>
  ),
  strap: (
    <svg {...common}>
      <path d="M4 17c0-6 4.500-11 10-11s10 5 10 11" />
      <rect x="2" y="16" width="5" height="5" rx="1.500" />
      <rect x="21" y="16" width="5" height="5" rx="1.500" />
    </svg>
  ),
  pad: (
    <svg {...common}>
      <rect x="5" y="5" width="18" height="18" rx="5" />
      <rect x="10" y="10" width="8" height="8" rx="3" />
    </svg>
  ),
  arrow: (
    <svg {...common} width="20" height="20">
      <path d="M5 14h18M16 7l7 7-7 7" />
    </svg>
  ),
  plus: (
    <svg {...common} width="20" height="20">
      <path d="M14 5v18M5 14h18" />
    </svg>
  ),
  menu: (
    <svg {...common} width="24" height="24">
      <path d="M4 9h20M4 14h20M4 19h20" />
    </svg>
  ),
  close: (
    <svg {...common} width="24" height="24">
      <path d="M6 6l16 16M22 6L6 22" />
    </svg>
  ),
};

export default function Icon({ name }) {
  return ICONS[name] ?? null;
}
