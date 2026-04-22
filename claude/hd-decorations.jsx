/* Hand-drawn SVG decorations — thin pen strokes, organic curves.
   Style: #3E5A3A leaves, #C44536 rose/red, #E8B84A yellow.
   All use strokeLinecap="round" + slight wobble for hand-drawn feel.
*/

// Rose bloom (loose swirl)
function HdRose({ size = 40, color = '#C44536', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={style}>
      <g fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 20 12 C 15 11, 12 15, 13 19 C 14 23, 19 25, 23 23 C 27 21, 28 16, 25 13 C 22 10, 17 10, 15 14"/>
        <path d="M 17 17 C 18 15, 21 15, 22 17 C 23 19, 21 21, 19 20"/>
        <path d="M 19 19 C 20 18, 21 19, 20 20"/>
      </g>
    </svg>
  );
}

// Leaf sprig
function HdLeaf({ size = 30, color = '#3E5A3A', flip = false, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={{...style, transform: flip ? 'scaleX(-1)' : 'none'}}>
      <g fill="none" stroke={color} strokeWidth="1" strokeLinecap="round">
        <path d="M 5 25 Q 10 18, 14 14 Q 18 10, 25 6"/>
        {/* leaves */}
        <path d="M 10 19 Q 13 17, 15 19 Q 13 21, 10 19 Z" fill={color} fillOpacity="0.15"/>
        <path d="M 14 13 Q 17 11, 19 13 Q 17 15, 14 13 Z" fill={color} fillOpacity="0.15"/>
        <path d="M 19 8 Q 22 6, 24 8 Q 22 10, 19 8 Z" fill={color} fillOpacity="0.15"/>
      </g>
    </svg>
  );
}

// Vine border — horizontal
function HdVine({ width = 280, color = '#3E5A3A', rose = '#C44536', style = {} }) {
  return (
    <svg width={width} height="30" viewBox="0 0 280 30" style={style} preserveAspectRatio="none">
      <g fill="none" strokeLinecap="round">
        <path d="M 0 15 Q 40 8, 80 16 T 160 14 T 240 16 L 280 15"
              stroke={color} strokeWidth="1"/>
        {/* leaves dotted along */}
        {[30, 70, 120, 170, 215, 255].map((x, i) => (
          <g key={i}>
            <path d={`M ${x} ${i%2 ? 12 : 18} q 4 -3, 8 0 q -4 3, -8 0 z`} fill={color} fillOpacity="0.2" stroke={color} strokeWidth="0.8"/>
          </g>
        ))}
        {/* 2 mini roses */}
        <g transform="translate(95 8)"><circle r="3" fill="none" stroke={rose} strokeWidth="1"/><circle r="1" fill={rose}/></g>
        <g transform="translate(195 10)"><circle r="3" fill="none" stroke={rose} strokeWidth="1"/><circle r="1" fill={rose}/></g>
      </g>
    </svg>
  );
}

// Wine glass (cheers!)
function HdGlass({ size = 36, color = '#3E5A3A', fill = '#C44536', style = {} }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 36 50" style={style}>
      <g fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* bowl */}
        <path d="M 8 4 L 28 4 C 28 16, 24 22, 18 22 C 12 22, 8 16, 8 4 Z" fill={fill} fillOpacity="0.25"/>
        {/* wine surface line */}
        <path d="M 10 10 Q 18 12, 26 10" strokeWidth="0.8"/>
        {/* stem */}
        <path d="M 18 22 L 18 42"/>
        {/* base */}
        <path d="M 11 44 L 25 44"/>
        <path d="M 13 42 Q 18 46, 23 42"/>
      </g>
    </svg>
  );
}

// Rings (two interlocked)
function HdRings({ size = 46, color = '#E8B84A', style = {} }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 46 28" style={style}>
      <g fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round">
        <ellipse cx="16" cy="14" rx="9" ry="9"/>
        <ellipse cx="30" cy="14" rx="9" ry="9"/>
        {/* sparkle */}
        <path d="M 14 6 L 14 8 M 13 7 L 15 7" strokeWidth="0.8"/>
      </g>
    </svg>
  );
}

// Candle
function HdCandle({ size = 30, color = '#3E5A3A', flame = '#E8B84A', style = {} }) {
  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 30 48" style={style}>
      <g fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* flame */}
        <path d="M 15 6 C 12 10, 12 14, 15 16 C 18 14, 18 10, 15 6 Z" fill={flame} fillOpacity="0.6" stroke={flame}/>
        {/* wick */}
        <path d="M 15 16 L 15 19" stroke="#2a2a2a"/>
        {/* candle body */}
        <path d="M 11 19 L 11 40 L 19 40 L 19 19 Z" fill="#fff" fillOpacity="0.3"/>
        {/* holder */}
        <path d="M 8 40 L 22 40 L 20 44 L 10 44 Z"/>
        <path d="M 11 44 L 19 44 L 18 47 L 12 47 Z"/>
      </g>
    </svg>
  );
}

// Wine bottle
function HdBottle({ size = 26, color = '#3E5A3A', style = {} }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 26 52" style={style}>
      <g fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 11 3 L 15 3 L 15 13 C 19 15, 20 18, 20 22 L 20 44 C 20 47, 17 49, 13 49 C 9 49, 6 47, 6 44 L 6 22 C 6 18, 7 15, 11 13 Z" fill="#C44536" fillOpacity="0.18"/>
        <path d="M 11 3 L 15 3 L 15 8 L 11 8 Z" fill={color} fillOpacity="0.3"/>
        <path d="M 8 28 Q 13 30, 18 28" strokeWidth="0.7"/>
      </g>
    </svg>
  );
}

// Little house (like参考图)
function HdHouse({ size = 80, color = '#3E5A3A', accent = '#C44536', style = {} }) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 80 72" style={style}>
      <g fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* roof */}
        <path d="M 10 30 L 40 8 L 70 30"/>
        <path d="M 14 30 L 14 60 L 66 60 L 66 30" fill="#fff" fillOpacity="0.25"/>
        {/* chimney */}
        <path d="M 54 14 L 54 22 L 60 22 L 60 18"/>
        {/* door */}
        <path d="M 34 60 L 34 42 Q 34 38, 40 38 Q 46 38, 46 42 L 46 60" fill={accent} fillOpacity="0.3" stroke={accent}/>
        <circle cx="43" cy="52" r="0.8" fill={accent}/>
        {/* windows */}
        <rect x="18" y="38" width="10" height="10" rx="1"/>
        <path d="M 23 38 L 23 48 M 18 43 L 28 43" strokeWidth="0.7"/>
        <rect x="52" y="38" width="10" height="10" rx="1"/>
        <path d="M 57 38 L 57 48 M 52 43 L 62 43" strokeWidth="0.7"/>
        {/* steps */}
        <path d="M 28 60 L 28 65 L 52 65 L 52 60"/>
        {/* heart on roof */}
        <path d="M 40 22 C 38 20, 35 21, 35 24 C 35 26, 40 30, 40 30 C 40 30, 45 26, 45 24 C 45 21, 42 20, 40 22 Z" fill={accent} fillOpacity="0.4" stroke={accent}/>
      </g>
    </svg>
  );
}

// Bouquet / small rose cluster
function HdBouquet({ size = 60, style = {} }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 60 66" style={style}>
      <g fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* stems */}
        <path d="M 30 66 Q 28 54, 26 42" stroke="#3E5A3A"/>
        <path d="M 30 66 Q 30 54, 32 40" stroke="#3E5A3A"/>
        <path d="M 30 66 Q 34 54, 38 42" stroke="#3E5A3A"/>
        {/* leaves */}
        <path d="M 28 50 Q 22 48, 20 52 Q 26 52, 28 50 Z" fill="#3E5A3A" fillOpacity="0.2" stroke="#3E5A3A"/>
        <path d="M 34 48 Q 40 46, 42 50 Q 36 50, 34 48 Z" fill="#3E5A3A" fillOpacity="0.2" stroke="#3E5A3A"/>
        {/* three roses */}
        <g transform="translate(22 32)">
          <circle r="6" fill="#C44536" fillOpacity="0.18" stroke="#C44536"/>
          <circle r="3" fill="none" stroke="#C44536"/>
          <circle r="1" fill="#C44536"/>
        </g>
        <g transform="translate(38 30)">
          <circle r="7" fill="#E8B84A" fillOpacity="0.22" stroke="#C44536"/>
          <circle r="4" fill="none" stroke="#C44536"/>
          <circle r="1.2" fill="#C44536"/>
        </g>
        <g transform="translate(30 18)">
          <circle r="6" fill="#C44536" fillOpacity="0.15" stroke="#C44536"/>
          <circle r="3" fill="none" stroke="#C44536"/>
          <circle r="1" fill="#C44536"/>
        </g>
      </g>
    </svg>
  );
}

// Couple silhouette (line art, like参考图)
function HdCouple({ size = 90, style = {} }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 90 118" style={style}>
      <g fill="none" stroke="#3E5A3A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* Groom (left) */}
        <circle cx="30" cy="18" r="7"/>
        <path d="M 26 16 Q 27 13, 30 12 Q 33 13, 34 16" strokeWidth="0.7"/>
        {/* body */}
        <path d="M 22 26 L 22 55 L 38 55 L 38 26 Q 34 24, 30 24 Q 26 24, 22 26 Z" fill="#3E5A3A" fillOpacity="0.08"/>
        <path d="M 30 28 L 30 50" strokeWidth="0.8"/>
        {/* bowtie */}
        <path d="M 28 27 L 30 28 L 32 27 L 32 29 L 30 28 L 28 29 Z" fill="#C44536" stroke="#C44536"/>
        {/* arms + legs */}
        <path d="M 22 30 L 16 48"/>
        <path d="M 38 30 L 42 42"/>
        <path d="M 24 55 L 23 88"/>
        <path d="M 36 55 L 37 88"/>
        <path d="M 20 90 L 28 88"/>
        <path d="M 34 90 L 42 88"/>

        {/* Bride (right) */}
        <circle cx="62" cy="20" r="7"/>
        {/* hair */}
        <path d="M 55 18 Q 54 12, 62 10 Q 70 12, 70 18 Q 71 24, 68 26" strokeWidth="1"/>
        {/* veil */}
        <path d="M 55 18 Q 50 30, 52 50" strokeWidth="0.7" stroke="#3E5A3A" opacity="0.6"/>
        {/* dress — A-line */}
        <path d="M 55 28 L 50 58 L 58 70 L 66 70 L 74 58 L 69 28 Q 66 26, 62 26 Q 58 26, 55 28 Z" fill="#fff" fillOpacity="0.5"/>
        {/* waist line */}
        <path d="M 56 42 Q 62 44, 68 42" strokeWidth="0.7"/>
        {/* bouquet */}
        <g transform="translate(51 40)">
          <circle r="3" fill="#C44536" fillOpacity="0.3" stroke="#C44536" strokeWidth="0.8"/>
          <circle r="2" fill="#E8B84A" fillOpacity="0.5" stroke="#C44536" strokeWidth="0.7" transform="translate(2 2)"/>
        </g>
        {/* legs peek */}
        <path d="M 60 70 L 60 90"/>
        <path d="M 64 70 L 64 90"/>
      </g>
    </svg>
  );
}

// Cake
function HdCake({ size = 60, style = {} }) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 60 54" style={style}>
      <g fill="none" stroke="#3E5A3A" strokeWidth="1.1" strokeLinecap="round">
        {/* candle flame */}
        <path d="M 30 4 C 28 6, 28 9, 30 10 C 32 9, 32 6, 30 4 Z" fill="#E8B84A" stroke="#E8B84A"/>
        <path d="M 30 10 L 30 14" stroke="#C44536"/>
        {/* top tier */}
        <ellipse cx="30" cy="16" rx="12" ry="3" fill="#fff" fillOpacity="0.3"/>
        <path d="M 18 16 L 18 22 Q 18 24, 30 24 Q 42 24, 42 22 L 42 16"/>
        {/* decoration dots */}
        <circle cx="24" cy="20" r="0.8" fill="#C44536"/>
        <circle cx="30" cy="20" r="0.8" fill="#C44536"/>
        <circle cx="36" cy="20" r="0.8" fill="#C44536"/>
        {/* bottom tier */}
        <ellipse cx="30" cy="26" rx="20" ry="4" fill="#fff" fillOpacity="0.3"/>
        <path d="M 10 26 L 10 44 Q 10 48, 30 48 Q 50 48, 50 44 L 50 26"/>
        <path d="M 10 34 Q 20 38, 30 34 Q 40 38, 50 34" strokeWidth="0.7"/>
        {/* roses */}
        <circle cx="18" cy="40" r="2" fill="#C44536" fillOpacity="0.4" stroke="#C44536" strokeWidth="0.8"/>
        <circle cx="30" cy="42" r="2.5" fill="#E8B84A" fillOpacity="0.5" stroke="#C44536" strokeWidth="0.8"/>
        <circle cx="42" cy="40" r="2" fill="#C44536" fillOpacity="0.4" stroke="#C44536" strokeWidth="0.8"/>
      </g>
    </svg>
  );
}

// Ornate ribbon/banner (for "We're getting married")
function HdBanner({ width = 200, color = '#3E5A3A', style = {} }) {
  return (
    <svg width={width} height="30" viewBox="0 0 200 30" style={style} preserveAspectRatio="none">
      <g fill="none" stroke={color} strokeWidth="1" strokeLinecap="round">
        <path d="M 0 10 Q 20 4, 100 8 T 200 10 L 198 22 Q 100 18, 0 22 Z" fill="#fff" fillOpacity="0.25"/>
        <path d="M -4 10 L 4 6 L 0 10 L 4 14 Z" fill={color} fillOpacity="0.2"/>
        <path d="M 204 10 L 196 6 L 200 10 L 196 14 Z" fill={color} fillOpacity="0.2"/>
      </g>
    </svg>
  );
}

// Hand-drawn frame border (ornate vine rectangle)
function HdFrame({ width = 300, height = 400, style = {} }) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{position:'absolute', inset: 0, pointerEvents:'none', ...style}}>
      <g fill="none" stroke="#3E5A3A" strokeWidth="1" strokeLinecap="round">
        {/* wavy border */}
        <path d={`M 20 20 Q ${width/4} 16, ${width/2} 20 T ${width-20} 20 L ${width-20} ${height/2} Q ${width-16} ${height*0.7}, ${width-20} ${height-20} L ${width/2} ${height-20} Q ${width/4} ${height-16}, 20 ${height-20} L 20 ${height/2} Q 16 ${height/4}, 20 20 Z`}/>
      </g>
      {/* corner flourishes */}
      <g transform="translate(10 10)"><HdLeaf size={30}/></g>
      <g transform={`translate(${width-40} 10) scale(-1 1)`}><HdLeaf size={30}/></g>
      <g transform={`translate(10 ${height-40})`}><HdLeaf size={30}/></g>
      <g transform={`translate(${width-40} ${height-40}) scale(-1 1)`}><HdLeaf size={30}/></g>
    </svg>
  );
}

Object.assign(window, {
  HdRose, HdLeaf, HdVine, HdGlass, HdRings, HdCandle, HdBottle,
  HdHouse, HdBouquet, HdCouple, HdCake, HdBanner, HdFrame,
});
