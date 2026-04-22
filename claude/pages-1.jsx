/* Wedding Invitation — Pages 1-5 (hand-drawn style) */

function StatusBar({ light = false }) {
  return (
    <div className={`status-bar ${light ? 'light' : ''}`}>
      <span>9:41</span>
      <span className="right">
        <svg width="17" height="10" viewBox="0 0 17 10">
          <rect x="0" y="6" width="3" height="4" rx="0.5" fill="currentColor"/>
          <rect x="4.5" y="4" width="3" height="6" rx="0.5" fill="currentColor"/>
          <rect x="9" y="2" width="3" height="8" rx="0.5" fill="currentColor"/>
          <rect x="13.5" y="0" width="3" height="10" rx="0.5" fill="currentColor"/>
        </svg>
        <svg width="24" height="11" viewBox="0 0 24 11">
          <rect x="0.5" y="0.5" width="20" height="10" rx="2.5" fill="none" stroke="currentColor" strokeOpacity="0.4"/>
          <rect x="2" y="2" width="17" height="7" rx="1" fill="currentColor"/>
          <rect x="21.5" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor" opacity="0.4"/>
        </svg>
      </span>
    </div>
  );
}

function ScrollHint({ light = false, label = '向上滑动' }) {
  return (
    <div className={`scroll-hint ${light ? 'light' : ''}`}>
      <span>{label}</span>
      <svg width="12" height="14" viewBox="0 0 14 18" fill="none">
        <path d="M7 2v14M2 11l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function WelcomeBand() {
  return (
    <div className="welcome-band">
      <span className="line1">Welcome to</span>
      <span className="line2">our wedding</span>
      <svg style={{display:'block', height: 22, marginTop: -4, width: '100%'}} viewBox="0 0 260 24" preserveAspectRatio="none">
        <path d="M 8 14 Q 60 4, 120 14 T 240 14" stroke="#E8B84A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <circle cx="6" cy="14" r="2" fill="#E8B84A"/>
        <path d="M 240 14 l 8 -4 M 240 14 l 6 6" stroke="#E8B84A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function SectionHead({ en, cn }) {
  return (
    <div className="section-head">
      <div className="en">{en}</div>
      <div className="cn">{cn}</div>
      <svg className="underline" width="60" height="10" viewBox="0 0 60 10">
        <path d="M 2 5 Q 15 1, 30 5 T 58 5" stroke="#C44536" strokeWidth="1" fill="none" strokeLinecap="round"/>
        <circle cx="30" cy="5" r="1.2" fill="#C44536"/>
      </svg>
    </div>
  );
}

// ─── Page 1: Cover (uses reference image directly) ───
function CoverPage({ names, photos, onUpload }) {
  const custom = photos['cover-full'];
  return (
    <div className="page cover" onClick={() => onUpload('cover-full')}>
      <img
        src={custom || '../image%20final/page1.jpg'}
        className="kenburns"
        style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center center', display:'block', cursor:'pointer'}}
      />
      <StatusBar light />
      <ScrollHint light />
    </div>
  );
}

// ─── Page 2: Wedding Invitation header (Hi photo + greeting) ───
function StoryPage({ names, photos, onUpload }) {
  const [showInvite, setShowInvite] = React.useState(false);

  return (
    <div className="page paper-bg" style={{padding:'52px 0 70px', position:'relative', overflow:'hidden'}}>
      <StatusBar />

      {/* ── Top-left title ── */}
      <div style={{padding:'4px 32px 0', position:'relative', zIndex: 4}}>
        <div className="hand-en" style={{
          fontSize: 22, fontWeight: 600,
          color:'#B2423A', letterSpacing: 0.5,
          lineHeight: 1,
        }}>Wedding Invitation</div>
        <div className="serif-cn" style={{
          fontSize: 12, letterSpacing: 6,
          color:'#5A3A36', marginTop: 8,
          paddingLeft: 4,
        }}>婚 礼 邀 请 函</div>
      </div>

      {/* ── Photo + "Hi" overlay ── */}
      <div style={{marginTop: 28, padding:'0 32px', position:'relative', zIndex: 3}}>
        {/* big handwritten "Hi" — sits over top-right of photo */}
        <div className="hand-en-script" style={{
          position:'absolute',
          top: -34, right: 48,
          fontFamily:'Pinyon Script, cursive',
          fontSize: 86, color:'#C44536',
          lineHeight: 1,
          opacity: 0.92,
          zIndex: 4,
          pointerEvents:'none',
          textShadow:'0 1px 2px rgba(255,255,255,0.2)',
        }}>Hi</div>

        {/* photo frame: soft white mat + shadow */}
        <div onClick={() => onUpload('hi-photo')}
             style={{
               width: 220, margin: '0 auto',
               background:'#fff',
               padding: 5,
               boxShadow:'0 8px 28px rgba(120,60,55,0.18), 0 2px 6px rgba(120,60,55,0.1)',
               cursor:'pointer',
               position:'relative', zIndex: 2,
             }}>
          <div style={{aspectRatio:'3/4', overflow:'hidden', background:'#E9D4C7'}}>
            {photos['hi-photo'] ? (
              <img src={photos['hi-photo']}
                   style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
            ) : (
              <img src="../image%20final/page2.JPG"
                   style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
            )}
          </div>
        </div>
      </div>

      {/* ── Greeting lines ── */}
      <div style={{marginTop: 32, textAlign:'center', position:'relative', zIndex: 3}}>
        <div style={{
          fontFamily:'"Noto Serif SC", "Songti SC", serif',
          fontSize: 12, fontWeight: 300,
          letterSpacing: 1,
          color:'#5A3A36', lineHeight: 1.9,
          padding:'1px 0 6px 1px',
        }}>Hi 亲爱的朋友 好久不见</div>
        <div style={{
          fontFamily:'"Noto Serif SC", "Songti SC", serif',
          fontSize: 12, fontWeight: 300,
          letterSpacing: 1,
          color:'#5A3A36', lineHeight: 1.9,
          paddingLeft: 1,
        }}>敬启</div>
      </div>

      {/* ── Envelope trigger (hand-drawn) ── */}
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop: 24, position:'relative', zIndex: 3}}>
        <div onClick={() => setShowInvite(true)}
             className="envelope-wiggle"
             style={{
               cursor:'pointer', position:'relative',
               width: 96, height: 72,
               transition:'transform 0.2s',
             }}
             onMouseDown={e => e.currentTarget.style.transform = 'scale(0.92) rotate(-3deg)'}
             onMouseUp={e => e.currentTarget.style.transform = ''}
             onMouseLeave={e => e.currentTarget.style.transform = ''}
        >
          {/* hand-drawn envelope SVG (wobbly lines) */}
          <svg width="96" height="72" viewBox="0 0 96 72" fill="none" style={{overflow:'visible'}}>
            {/* envelope body fill — warm cream */}
            <path d="M 6 14 Q 5 13, 7 12 L 89 11 Q 91 12, 90 14 L 91 59 Q 90 61, 88 60 L 8 61 Q 6 60, 6 58 Z"
                  fill="#F8E8D4" stroke="none"/>

            {/* outer border — rough hand-drawn */}
            <path d="M 6 14 Q 5 13, 7 12 L 89 11 Q 91 12, 90 14 L 91 59 Q 90 61, 88 60 L 8 61 Q 6 60, 6 58 Z"
                  stroke="#3E2A24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

            {/* flap crease lines (V shape) */}
            <path d="M 7 13 Q 28 34, 48 44 Q 68 33, 90 13"
                  stroke="#3E2A24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

            {/* bottom flap lines going from corners up to center */}
            <path d="M 7 59 Q 27 49, 48 44"
                  stroke="#3E2A24" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <path d="M 90 59 Q 69 49, 48 44"
                  stroke="#3E2A24" strokeWidth="1.8" strokeLinecap="round" fill="none"/>

            {/* heart in the middle — red, hand-drawn */}
            <path d="M 48 39
                     C 44 33, 37 33, 37 39
                     C 37 43, 42 47, 48 52
                     C 54 47, 59 43, 59 39
                     C 59 33, 52 33, 48 39 Z"
                  fill="#E8433B" stroke="#3E2A24" strokeWidth="1.6" strokeLinejoin="round"/>

            {/* tiny sparkle dots */}
            <circle cx="16" cy="20" r="1.2" fill="#C44536"/>
            <circle cx="80" cy="22" r="1" fill="#3E5A3A"/>
            <circle cx="18" cy="54" r="1" fill="#3E5A3A"/>
            <circle cx="82" cy="52" r="1.2" fill="#C44536"/>
          </svg>
        </div>

        <div className="serif-cn" style={{
          marginTop: 10, fontSize: 11,
          color:'#C44536', opacity: 0.85, letterSpacing: 3,
        }}>点 击 查 看 邀 请 函</div>
      </div>

      <ScrollHint/>

      {/* ── Invitation Modal (MessagePage content) ── */}
      {showInvite && (
        <div onClick={() => setShowInvite(false)} style={{
          position:'fixed', inset: 0, zIndex: 9999,
          background:'rgba(20,12,10,0.55)', backdropFilter:'blur(4px)',
          display:'flex', alignItems:'center', justifyContent:'center',
          padding: '24px 16px', animation:'fadeIn 0.25s ease-out',
        }}>
          {/* flying hearts burst */}
          {[
            {x:-90,  y:-140, r:-18, d:0},
            {x: 80,  y:-160, r: 22, d:0.05},
            {x:-40,  y:-180, r:-6,  d:0.1},
            {x: 50,  y:-110, r: 14, d:0.15},
            {x:-120, y:-90,  r:-28, d:0.2},
            {x: 120, y:-80,  r: 30, d:0.08},
          ].map((h, i) => (
            <span key={i} className="heart-burst" style={{
              color: i % 2 ? '#E8433B' : '#FF8A80',
              ['--hx']: `${h.x}px`,
              ['--hy']: `${h.y}px`,
              ['--hr']: `${h.r}deg`,
              animationDelay: `${h.d}s`,
            }}>♥</span>
          ))}

          <div onClick={e => e.stopPropagation()} style={{
            background:'#FBF4E3',
            borderRadius: 14,
            maxWidth: 360, width:'100%', maxHeight: '85vh', overflowY:'auto',
            padding: '28px 22px 32px',
            boxShadow:'0 16px 48px rgba(20,10,8,0.35), 0 4px 12px rgba(0,0,0,0.15)',
            position:'relative',
            animation:'popBurst 0.55s cubic-bezier(.34,1.56,.64,1)',
          }}>
            <button onClick={() => setShowInvite(false)} aria-label="关闭"
              style={{
                position:'absolute', top: 10, right: 12,
                width: 28, height: 28, borderRadius:'50%',
                border:'1px solid rgba(196,69,54,0.35)',
                background:'transparent', color:'#C44536',
                fontSize: 16, lineHeight: 1, cursor:'pointer',
                opacity: 0.75,
              }}>✕</button>

            <div style={{textAlign:'center', marginBottom: 14}}>
              <div className="hand-en-script" style={{fontFamily:'Pinyon Script, cursive', fontSize: 34, color:'#3E5A3A', lineHeight: 1}}>
                Invitation
              </div>
              <div className="serif-cn" style={{fontSize: 12, letterSpacing: 6, color:'#C44536', marginTop: 6, paddingLeft: 6}}>
                邀 请 函
              </div>
            </div>

            <div style={{
              background:'white',
              border:'1px solid rgba(62,90,58,0.2)',
              padding: '26px 22px',
              position:'relative',
              boxShadow:'0 4px 18px rgba(62,90,58,0.1)',
            }}>
              <div style={{position:'absolute', inset: 8, border:'0.5px solid rgba(196,69,54,0.4)', pointerEvents:'none'}}/>
              <div style={{textAlign:'center', marginBottom: 16}}>
                <div className="hand-en" style={{color:'#C44536', fontSize: 20, fontStyle:'italic'}}>
                  Dear our beloved guest,
                </div>
                <div className="serif-cn" style={{fontSize: 11, letterSpacing: 5, color:'#3E5A3A', opacity: 0.7, marginTop: 4, paddingLeft: 5}}>
                  敬 启 者
                </div>
              </div>
              <div className="serif-cn" style={{
                fontSize: 13, lineHeight: 2, color:'#3E5A3A',
                textAlign:'justify', textIndent: 26, letterSpacing: 0.5,
              }}>
                我们将于 <span className="hand-en" style={{color:'#C44536', fontSize: 15}}>2026 年 9 月 26 日</span>
                {' '}于深圳麒麟山庄举办婚礼。一生相伴的路很长，但有你们的见证，便是最好的开始。诚挚地邀请您来到现场，与我们一同分享这份喜悦。
              </div>
              <div style={{textAlign:'right', marginTop: 18, paddingRight: 6}}>
                <div className="serif-cn" style={{fontSize: 11, color:'#3E5A3A', opacity: 0.7, letterSpacing: 2}}>此 致</div>
                <div className="hand-cn" style={{fontSize: 22, color:'#C44536', letterSpacing: 3, marginTop: 6}}>
                  {names.groom} &nbsp;·&nbsp; {names.bride}
                </div>
                <div className="hand-en" style={{fontSize: 13, color:'#3E5A3A', marginTop: 2, fontStyle:'italic', opacity: 0.8}}>
                  with all our love
                </div>
              </div>
              <div style={{position:'absolute', top: -14, left: -8}}><HdRose size={32}/></div>
              <div style={{position:'absolute', bottom: -14, right: -8, transform:'rotate(180deg)'}}><HdRose size={32}/></div>
            </div>

            <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap: 10, marginTop: 20}}>
              <div style={{width: 40, height: 1, background:'#C44536', opacity: 0.5}}/>
              <HdRings size={40}/>
              <div style={{width: 40, height: 1, background:'#C44536', opacity: 0.5}}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Page 3: Welcome to our wedding (intro prose + horizontal photo) ───
function WelcomePage({ photos, onUpload }) {
  return (
    <div className="page paper-bg" style={{padding:'52px 0 70px', position:'relative', overflow:'hidden'}}>
      <StatusBar />

      {/* Top-left title — same style as page 2 */}
      <div style={{padding:'4px 32px 0', position:'relative', zIndex: 4}}>
        <div className="hand-en" style={{
          fontSize: 22, fontWeight: 600,
          color:'#B2423A', letterSpacing: 0.5,
          lineHeight: 1,
        }}>Welcome to our wedding</div>
      </div>

      {/* Prose — matches page 4 style */}
      <div style={{marginTop: 44, textAlign:'center', position:'relative', zIndex: 3, padding:'0 32px'}}>
        <div style={{
          fontFamily:'"Noto Serif SC", "Songti SC", serif',
          fontSize: 12, fontWeight: 300,
          letterSpacing: 1,
          color:'#5A3A36', lineHeight: 1.9,
        }}>我们曾经纠结过</div>
        <div style={{
          fontFamily:'"Noto Serif SC", "Songti SC", serif',
          fontSize: 12, fontWeight: 300,
          letterSpacing: 1,
          color:'#5A3A36', lineHeight: 1.9,
        }}>两个绝世P人</div>
        <div style={{
          fontFamily:'"Noto Serif SC", "Songti SC", serif',
          fontSize: 12, fontWeight: 300,
          letterSpacing: 1,
          color:'#5A3A36', lineHeight: 1.9,
        }}>是否要筹办婚礼这个大项目</div>
      </div>

      {/* Two landscape photos stacked vertically, no frame — fits within page */}
      <div style={{marginTop: 32, padding:'0 28px', position:'relative', zIndex: 3,
                   display:'flex', flexDirection:'column', gap: 8}}>
        {[
          { k: 'welcome-photo-1', def: '../image%20final/page3_1.jpg' },
          { k: 'welcome-photo-2', def: '../image%20final/page3_2.jpg' },
        ].map(({ k, def }) => (
          <div key={k} onClick={() => onUpload(k)}
               style={{aspectRatio:'16/9', overflow:'hidden', background:'#E9D4C7', cursor:'pointer'}}>
            {photos[k] ? (
              <img src={photos[k]}
                   style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
            ) : (
              <img src={def}
                   style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
            )}
          </div>
        ))}
      </div>

      <ScrollHint/>
    </div>
  );
}

// ─── Page 4: More story (prose + triptych) ───
function StoryContinuedPage({ photos, onUpload }) {
  const proseStyle = {
    fontFamily:'"Noto Serif SC", "Songti SC", serif',
    fontSize: 12, fontWeight: 300,
    letterSpacing: 1,
    color:'#5A3A36', lineHeight: 1.9,
  };
  return (
    <div className="page paper-bg" style={{padding:'52px 0 70px', position:'relative', overflow:'hidden'}}>
      <StatusBar />

      {/* Top-left title — same style as pages 2 & 3 */}
      <div style={{padding:'4px 32px 0', position:'relative', zIndex: 4}}>
        <div className="hand-en" style={{
          fontSize: 22, fontWeight: 600,
          color:'#B2423A', letterSpacing: 0.5,
          lineHeight: 1,
        }}>Welcome to our wedding</div>
      </div>

      {/* Left-aligned prose block */}
      <div style={{marginTop: 44, padding:'0 32px', position:'relative', zIndex: 3, textAlign:'left'}}>
        <div style={proseStyle}>毕竟，我们在一起那么久</div>
        <div style={proseStyle}>认识彼此所有的朋友</div>
      </div>

      {/* Two landscape photos side-by-side, no frame */}
      <div style={{marginTop: 20, padding:'0 28px', position:'relative', zIndex: 3,
                   display:'grid', gridTemplateColumns:'1fr 1fr', gap: 8}}>
        {[
          { k: 'story-c-1', def: '../image%20final/page4_1.jpg' },
          { k: 'story-c-2', def: '../image%20final/page4_2.jpg' },
        ].map(({ k, def }) => (
          <div key={k} onClick={() => onUpload(k)}
               style={{aspectRatio:'4/3', overflow:'hidden', background:'#E9D4C7', cursor:'pointer'}}>
            {photos[k] ? (
              <img src={photos[k]}
                   style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
            ) : (
              <img src={def}
                   style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
            )}
          </div>
        ))}
      </div>

      {/* Landscape photo with prose overlay */}
      <div style={{marginTop: 40, padding:'0 28px', position:'relative', zIndex: 3}}>
        <div onClick={() => onUpload('story-c-wide')}
             style={{position:'relative', aspectRatio:'3/2', overflow:'hidden',
                     background:'#E9D4C7', cursor:'pointer'}}>
          {photos['story-c-wide'] ? (
            <img src={photos['story-c-wide']}
                 style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
          ) : (
            <img src="../image%20final/page4_3.jpg"
                 style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
          )}
          {/* gradient scrim for legibility */}
          <div style={{position:'absolute', inset: 0,
                       background:'linear-gradient(to right, rgba(20,10,8,0.55) 0%, rgba(20,10,8,0.25) 45%, rgba(20,10,8,0) 80%)',
                       pointerEvents:'none'}}/>
          {/* overlay text — left aligned */}
          <div style={{
            position:'absolute', left: 16, top:'50%', transform:'translateY(-50%)',
            textAlign:'left',
            fontFamily:'"Noto Serif SC", "Songti SC", serif',
            fontSize: 12, fontWeight: 300,
            letterSpacing: 1.2,
            color:'#fff', lineHeight: 1.7,
            textShadow:'0 1px 3px rgba(0,0,0,0.4)',
            pointerEvents:'none',
          }}>
            <div>上山下海</div>
            <div>吃饭睡觉</div>
            <div>在大大的世界</div>
            <div>和小小的被窝</div>
            <div>我们都已经是</div>
            <div>彼此最亲密的人</div>
          </div>
        </div>
      </div>

      <ScrollHint/>
    </div>
  );
}

// ─── Page 6: Reflection — "等到我们一百岁..." + friends blessing ───
function ReflectionPage({ photos, onUpload }) {
  const proseStyle = {
    fontFamily:'"Noto Serif SC", "Songti SC", serif',
    fontSize: 12, fontWeight: 300,
    letterSpacing: 1,
    color:'#5A3A36', lineHeight: 1.95,
  };
  return (
    <div className="page paper-bg" style={{padding:'52px 0 70px', position:'relative', overflow:'hidden'}}>
      <StatusBar />

      {/* Top-left title — same style as pages 2-5 */}
      <div style={{padding:'4px 32px 0', position:'relative', zIndex: 4}}>
        <div className="hand-en" style={{
          fontSize: 22, fontWeight: 600,
          color:'#B2423A', letterSpacing: 0.5,
          lineHeight: 1,
        }}>Welcome to our wedding</div>
      </div>

      {/* Row 1: text left (left-aligned) + vertical photo right */}
      <div style={{
        marginTop: 38, padding:'0 28px', position:'relative', zIndex: 3,
        display:'grid', gridTemplateColumns:'1fr 0.82fr', gap: 18, alignItems:'center',
      }}>
        <div style={{...proseStyle, textAlign:'left'}}>
          <div>后来我们想</div>
          <div>等到我们一百岁的时候</div>
          <div>回望人生</div>
          <div>我们总会想起来</div>
        </div>
        <div onClick={() => onUpload('reflect-v-1')}
             style={{aspectRatio:'3/4', overflow:'hidden', background:'#E9D4C7', cursor:'pointer'}}>
          {photos['reflect-v-1'] ? (
            <img src={photos['reflect-v-1']}
                 style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
          ) : (
            <img src="../image%20final/page6_1.jpg"
                 style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
          )}
        </div>
      </div>

      {/* Row 2: vertical photo left + text right (right-aligned) */}
      <div style={{
        marginTop: 36, padding:'0 28px', position:'relative', zIndex: 3,
        display:'grid', gridTemplateColumns:'0.82fr 1fr', gap: 18, alignItems:'center',
      }}>
        <div onClick={() => onUpload('reflect-v-2')}
             style={{aspectRatio:'3/4', overflow:'hidden', background:'#E9D4C7', cursor:'pointer'}}>
          {photos['reflect-v-2'] ? (
            <img src={photos['reflect-v-2']}
                 style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
          ) : (
            <img src="../image%20final/page6_2.jpg"
                 style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
          )}
        </div>
        <div style={{...proseStyle, textAlign:'right'}}>
          <div>在一个美丽的午后</div>
          <div>我们的朋友们</div>
          <div>从五湖四海</div>
          <div>来到我们身边</div>
          <div>给了我们最甜蜜的祝福</div>
        </div>
      </div>

      <ScrollHint/>
    </div>
  );
}

// ─── Page 7: Reminisce — big landscape photo + prose ───
function ReminiscePage({ photos, onUpload }) {
  const proseStyle = {
    fontFamily:'"Noto Serif SC", "Songti SC", serif',
    fontSize: 12, fontWeight: 300,
    letterSpacing: 1,
    color:'#5A3A36', lineHeight: 1.95,
  };
  return (
    <div className="page paper-bg" style={{padding:'52px 0 70px', position:'relative', overflow:'hidden'}}>
      <StatusBar />

      {/* Top-left title */}
      <div style={{padding:'4px 32px 0', position:'relative', zIndex: 4}}>
        <div className="hand-en" style={{
          fontSize: 22, fontWeight: 600,
          color:'#B2423A', letterSpacing: 0.5,
          lineHeight: 1,
        }}>Welcome to our wedding</div>
      </div>

      {/* Large horizontal photo — no border, shadow only */}
      <div style={{marginTop: 44, padding:'0 28px', position:'relative', zIndex: 3}}>
        <div onClick={() => onUpload('reminisce-wide')}
             style={{
               boxShadow:'0 8px 28px rgba(120,60,55,0.18), 0 2px 6px rgba(120,60,55,0.1)',
               cursor:'pointer',
               borderRadius: 4,
               overflow:'hidden',
             }}>
          <div style={{aspectRatio:'4/3', overflow:'hidden', background:'#E9D4C7'}}>
            {photos['reminisce-wide'] ? (
              <img src={photos['reminisce-wide']}
                   style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
            ) : (
              <img src="../image%20final/page7.jpg"
                   style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
            )}
          </div>
        </div>
      </div>

      {/* Prose below — four lines, alternating alignment */}
      <div style={{
        marginTop: 36, padding:'0 32px', position:'relative', zIndex: 3,
      }}>
        <div style={{...proseStyle, textAlign:'left'}}>白发苍苍的我们</div>
        <div style={{...proseStyle, textAlign:'left'}}>得以反复品味</div>
        <div style={{...proseStyle, textAlign:'right', marginTop: 14}}>那一天漫天的花瓣</div>
        <div style={{...proseStyle, textAlign:'right'}}>那一天的所有的欢笑和祝福</div>
      </div>

      {/* ── Hand-drawn floral bouquet (bottom) ── */}
      <div style={{
        position:'absolute', left: 0, right: 0, bottom: 52,
        display:'flex', justifyContent:'center',
        pointerEvents:'none', zIndex: 1,
      }}>
        <img
          src="../image%20final/dictation/%E8%8A%B1%E6%9D%9F-transparent.png"
          alt=""
          style={{
            width: 120, height: 'auto',
          }}
        />
      </div>

      <ScrollHint/>
    </div>
  );
}

// ─── Page 8: Invitation + video ───
function InviteVideoPage({ photos, onUpload }) {
  const proseStyle = {
    fontFamily:'"Noto Serif SC", "Songti SC", serif',
    fontSize: 12, fontWeight: 300,
    letterSpacing: 1,
    color:'#5A3A36', lineHeight: 1.95,
  };
  const videoRef = React.useRef(null);
  const [muted, setMuted] = React.useState(true);

  // Attempt autoplay (muted, required by browsers) once mounted
  React.useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      const tryPlay = () => v.play().catch(() => {});
      tryPlay();
    }
  }, [photos['invite-video']]);

  // Unmute on the first user interaction (click / touch / scroll / key).
  // Browsers block audio autoplay, so we need *any* user gesture first.
  React.useEffect(() => {
    const unmute = () => {
      const v = videoRef.current;
      if (v) {
        v.muted = false;
        v.volume = 1;
        v.play().catch(() => {});
      }
      setMuted(false);
      window.removeEventListener('click', unmute);
      window.removeEventListener('touchstart', unmute);
      window.removeEventListener('keydown', unmute);
      window.removeEventListener('scroll', unmute, true);
    };
    window.addEventListener('click', unmute);
    window.addEventListener('touchstart', unmute);
    window.addEventListener('keydown', unmute);
    window.addEventListener('scroll', unmute, true);
    return () => {
      window.removeEventListener('click', unmute);
      window.removeEventListener('touchstart', unmute);
      window.removeEventListener('keydown', unmute);
      window.removeEventListener('scroll', unmute, true);
    };
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    v.play().catch(() => {});
  };

  const fileRef = React.useRef(null);
  const handlePick = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    onUpload('invite-video', f);
  };

  return (
    <div className="page paper-bg" style={{padding:'52px 0 70px', position:'relative', overflow:'hidden'}}>
      <StatusBar />

      {/* Top-left title */}
      <div style={{padding:'4px 32px 0', position:'relative', zIndex: 4}}>
        <div className="hand-en" style={{
          fontSize: 22, fontWeight: 600,
          color:'#B2423A', letterSpacing: 0.5,
          lineHeight: 1,
        }}>Welcome to our wedding</div>
      </div>

      {/* Prose — four lines, centered column but left-aligned text */}
      <div style={{marginTop: 40, padding:'0 32px', position:'relative', zIndex: 3, textAlign:'center'}}>
        <div style={{...proseStyle, textAlign:'center'}}>所以</div>
        <div style={{...proseStyle, textAlign:'center'}}>亲爱的朋友们</div>
        <div style={{...proseStyle, textAlign:'center'}}>诚挚的邀请你</div>
        <div style={{...proseStyle, textAlign:'center'}}>来参与这场聚会</div>
      </div>

      {/* Video — white mat + shadow, matches page-2/7 frame */}
      <div style={{marginTop: 32, padding:'0 28px', position:'relative', zIndex: 3}}>
        <div
          onClick={() => {
            if (!photos['invite-video']) fileRef.current?.click();
          }}
          style={{
            background:'#fff',
            padding: 6,
            boxShadow:'0 8px 28px rgba(120,60,55,0.18), 0 2px 6px rgba(120,60,55,0.1)',
            cursor: photos['invite-video'] ? 'default' : 'pointer',
          }}>
          <div style={{aspectRatio:'4/3', overflow:'hidden', background:'#1a1815', position:'relative'}}>
            <video
              ref={videoRef}
              src={photos['invite-video'] || '../video/invitation.mp4'}
              autoPlay
              muted={muted}
              loop
              playsInline
              style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}
            />
            {/* Sound toggle */}
            <button onClick={toggleMute} aria-label={muted ? '打开声音' : '静音'}
              style={{
                position:'absolute', right: 10, bottom: 10,
                width: 34, height: 34, borderRadius:'50%',
                background:'rgba(0,0,0,0.55)', border:'1px solid rgba(255,255,255,0.25)',
                color:'#fff', cursor:'pointer',
                display:'flex', alignItems:'center', justifyContent:'center',
                backdropFilter:'blur(6px)',
              }}>
              {muted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="m22 9-6 6"/><path d="m16 9 6 6"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="video/*"
          style={{display:'none'}}
          onChange={handlePick}
        />
      </div>

      {/* Hand-drawn dining table vignette (from reference) */}
      <div style={{marginTop: 28, display:'flex', justifyContent:'center', position:'relative', zIndex: 3}}>
        <svg width="180" height="120" viewBox="0 0 180 120" fill="none"
             stroke="#B2423A" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">
          {/* Bouquet — many small rose-like blooms */}
          <g fill="#E8A5A0" stroke="#B2423A" strokeWidth="0.7">
            <circle cx="80" cy="24" r="5.5"/>
            <circle cx="90" cy="20" r="6"/>
            <circle cx="100" cy="24" r="5.5"/>
            <circle cx="85" cy="31" r="5"/>
            <circle cx="96" cy="31" r="5.5"/>
            <circle cx="75" cy="30" r="4.5"/>
            <circle cx="105" cy="30" r="4.5"/>
            <circle cx="90" cy="36" r="5"/>
            <circle cx="82" cy="38" r="4"/>
            <circle cx="98" cy="38" r="4"/>
          </g>
          {/* inner swirl details on blooms */}
          <g stroke="#B2423A" strokeWidth="0.5" fill="none" opacity="0.7">
            <path d="M 78 24 q 2 -1 4 0"/>
            <path d="M 88 20 q 2 -1 4 0"/>
            <path d="M 98 24 q 2 -1 4 0"/>
            <path d="M 83 31 q 2 -1 4 0"/>
            <path d="M 94 31 q 2 -1 4 0"/>
            <path d="M 88 36 q 2 -1 4 0"/>
          </g>
          {/* greenery sprigs */}
          <g stroke="#7A8A5A" strokeWidth="0.8" fill="none">
            <path d="M 70 34 Q 66 30, 63 26"/>
            <path d="M 110 34 Q 114 30, 117 26"/>
            <path d="M 72 40 Q 68 42, 65 44"/>
            <path d="M 108 40 Q 112 42, 115 44"/>
            <path d="M 80 42 Q 78 46, 76 50"/>
            <path d="M 100 42 Q 102 46, 104 50"/>
          </g>
          {/* Vase */}
          <path d="M 82 44 L 80 58 Q 80 62, 84 62 L 96 62 Q 100 62, 100 58 L 98 44 Z"
                fill="#F4E6D4" stroke="#B2423A"/>
          <path d="M 82 48 L 98 48" stroke="#B2423A" strokeWidth="0.5" opacity="0.5"/>

          {/* Table surface (long oval) */}
          <ellipse cx="90" cy="80" rx="74" ry="9" fill="#FBF4E3" stroke="#B2423A"/>
          <ellipse cx="90" cy="78" rx="74" ry="9" fill="none" stroke="#B2423A" opacity="0.4"/>

          {/* Left wine glass */}
          <g>
            <path d="M 32 64 Q 32 72, 38 74 Q 44 72, 44 64 Z" fill="#E8A5A0" opacity="0.85" stroke="#B2423A"/>
            <path d="M 38 74 L 38 82" stroke="#B2423A"/>
            <path d="M 34 82 L 42 82" stroke="#B2423A"/>
          </g>
          {/* Right wine glass */}
          <g>
            <path d="M 136 64 Q 136 72, 142 74 Q 148 72, 148 64 Z" fill="#E8A5A0" opacity="0.85" stroke="#B2423A"/>
            <path d="M 142 74 L 142 82" stroke="#B2423A"/>
            <path d="M 138 82 L 146 82" stroke="#B2423A"/>
          </g>

          {/* Plate left */}
          <ellipse cx="58" cy="80" rx="10" ry="2.5" fill="#fff" stroke="#B2423A"/>
          <ellipse cx="58" cy="79.5" rx="7" ry="1.6" fill="none" stroke="#B2423A" opacity="0.5"/>
          {/* Plate right */}
          <ellipse cx="122" cy="80" rx="10" ry="2.5" fill="#fff" stroke="#B2423A"/>
          <ellipse cx="122" cy="79.5" rx="7" ry="1.6" fill="none" stroke="#B2423A" opacity="0.5"/>

          {/* Small candles on table */}
          <g stroke="#B2423A" fill="none">
            <path d="M 24 78 L 24 84"/>
            <path d="M 22 78 L 26 78"/>
            <path d="M 156 78 L 156 84"/>
            <path d="M 154 78 L 158 78"/>
          </g>
          {/* Flame dots */}
          <circle cx="24" cy="76" r="1" fill="#E8B84A" stroke="none"/>
          <circle cx="156" cy="76" r="1" fill="#E8B84A" stroke="none"/>
        </svg>
      </div>

      <ScrollHint/>
    </div>
  );
}

// ─── Page 9: Date + Countdown ───
function DatePage({ photos, onUpload }) {
  return (
    <div className="page" style={{position:'relative', overflow:'hidden', background:'#1a1815'}}>
      <StatusBar light />

      {/* Full-bleed photo background */}
      <div onClick={() => onUpload && onUpload('date-bg')} style={{position:'absolute', inset: 0, cursor:'pointer'}}>
        {photos && photos['date-bg'] ? (
          <img src={photos['date-bg']} className="kenburns"
               style={{width:'100%', height:'100%', objectFit:'cover'}}/>
        ) : (
          <div className="photo-placeholder green" data-label="点击上传背景">&nbsp;</div>
        )}
      </div>
      {/* Darkening scrim for legibility */}
      <div style={{position:'absolute', inset: 0,
                   background:'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.75) 100%)',
                   pointerEvents:'none'}}/>

      {/* Title — top center */}
      <div style={{position:'absolute', top: 58, left: 0, right: 0, textAlign:'center', zIndex: 3, padding: '0 24px'}}>
        <div className="hand-en-script" style={{
          fontFamily:'Pinyon Script, cursive',
          fontSize: 44, color:'#E8B84A', lineHeight: 1,
          textShadow:'0 2px 10px rgba(0,0,0,0.6)',
        }}>Wedding Date</div>
      </div>

      {/* Wide date card — centered, styled like venue card on page 11 */}
      <div style={{
        position:'absolute', left: 22, right: 22, top: '50%',
        transform:'translateY(-50%)',
        zIndex: 3,
        background:'rgba(255,255,255,0.92)',
        padding: '20px 22px',
        boxShadow:'0 8px 24px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.1)',
        border:'1px solid rgba(232, 184, 74, 0.6)',
        position:'relative',
      }}>
        {/* inner hairline */}
        <div style={{position:'absolute', inset: 5, border:'0.5px solid rgba(196, 69, 54, 0.35)', pointerEvents:'none'}}/>

        {/* corner stamp */}
        <div className="hand-en" style={{
          position:'absolute', top: 12, right: 14,
          color:'#C44536', fontSize: 12, opacity: 0.8,
          transform:'rotate(-8deg)',
          border:'1px solid #C44536', padding:'2px 6px', borderRadius: 2,
        }}>DATE</div>

        <div style={{
          fontFamily:'"Noto Serif SC", "Songti SC", serif',
          fontSize: 22, fontWeight: 500,
          color:'#3E5A3A',
          letterSpacing: 2,
          lineHeight: 1.3,
        }}>
          2026 年 9 月 26 日
        </div>
        <div className="hand-en" style={{
          fontSize: 15, color:'#C44536', marginTop: 6,
          letterSpacing: 1,
        }}>
          Saturday · 周 六
        </div>
      </div>

      <ScrollHint light />
    </div>
  );
}

// ─── Page 4: Schedule ───
function SchedulePage() {
  const items = [
    { time: '10:30', en: 'Arrival', cn: '宾 客 入 场', note: '请于此前抵达，凭邀请函入场', icon: 'candle' },
    { time: '11:18', en: 'Ceremony', cn: '婚 礼 仪 式', note: '交换誓言 · 戒指 · 合影', highlight: true, icon: 'rings' },
    { time: '12:00', en: 'Luncheon', cn: '喜 宴 开 席', note: '敬酒环节 · 麒麟宴会厅', icon: 'cake' },
    { time: '14:00', en: 'Farewell', cn: '送 客 环 节', note: '伴手礼 · 合影留念', icon: 'glass' },
  ];
  const iconFor = (k) => {
    if (k === 'candle') return <HdCandle size={24}/>;
    if (k === 'rings') return <HdRings size={34}/>;
    if (k === 'cake') return <HdCake size={34}/>;
    if (k === 'glass') return <HdGlass size={24}/>;
    return null;
  };
  return (
    <div className="page paper-bg" style={{padding:'60px 24px 70px', overflow:'auto'}}>
      <StatusBar />

      <SectionHead en="Schedule" cn="婚 礼 流 程"/>

      <div style={{position:'relative', paddingLeft: 64, marginTop: 14}}>
        <div style={{position:'absolute', left: 60, top: 6, bottom: 6, width: 1, background:'#3E5A3A', opacity: 0.2}}/>
        {items.map((it, i) => (
          <div key={i} style={{marginBottom: 22, position:'relative', minHeight: 56}}>
            <div style={{position:'absolute', left: -64, top: 0, width: 50, textAlign:'right'}}>
              <div className="hand-en" style={{fontSize: 22, color: it.highlight ? '#C44536' : '#3E5A3A', lineHeight: 1}}>
                {it.time}
              </div>
            </div>
            <div style={{position:'absolute', left: -8, top: 6, width: 11, height: 11, borderRadius:'50%',
                         background: it.highlight ? '#C44536' : '#F4EDD8',
                         border: '2px solid #C44536'}}/>
            <div style={{paddingLeft: 6, display:'flex', gap: 10, alignItems:'flex-start'}}>
              <div style={{flex: 1}}>
                <div className="hand-cn" style={{fontSize: 22, letterSpacing: 3, color:'#3E5A3A'}}>{it.cn}</div>
                <div className="hand-en" style={{fontSize: 14, color:'#C44536', opacity: 0.85, marginTop: -1}}>{it.en}</div>
                <div className="serif-cn" style={{fontSize: 11.5, color:'#3E5A3A', opacity: 0.75, marginTop: 3, lineHeight: 1.6}}>
                  {it.note}
                </div>
              </div>
              <div style={{flexShrink: 0, opacity: 0.9}}>{iconFor(it.icon)}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{textAlign:'center', marginTop: 4}} className="hand-en">
        <span style={{fontSize: 16, color:'#C44536', opacity: 0.8, fontStyle:'italic'}}>see you there ·</span>
      </div>

      {/* corner ornaments */}
      <div style={{position:'absolute', top: 48, right: 6, opacity: 0.9, transform:'rotate(20deg)'}}><HdBouquet size={50}/></div>

      <ScrollHint/>
    </div>
  );
}

// ─── Page 5: Gallery Hero ───
function GalleryHero({ photos, onUpload }) {
  return (
    <div className="page" style={{background:'#1a1815', position:'relative', overflow:'hidden'}}>
      <StatusBar light />

      {/* Top-left title — same style as pages 2-4 (red, on dark so use gold variant) */}
      <div style={{position:'absolute', top: 52, left: 32, zIndex: 4}}>
        <div className="hand-en" style={{
          fontSize: 22, fontWeight: 600,
          color:'#E8B84A', letterSpacing: 0.5,
          lineHeight: 1,
          textShadow:'0 2px 8px rgba(0,0,0,0.5)',
        }}>Welcome to our wedding</div>
      </div>

      <div onClick={() => onUpload('gallery-hero')} style={{position:'absolute', inset: 0, cursor:'pointer'}}>
        {photos['gallery-hero'] ? (
          <img src={photos['gallery-hero']} className="kenburns" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
        ) : (
          <img src="../image%20final/page5.jpg" className="kenburns" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
        )}
      </div>
      <div style={{position:'absolute', inset: 0,
                   background:'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 28%, transparent 50%, rgba(0,0,0,0.8) 100%)',
                   pointerEvents:'none'}}/>

      <div style={{position:'absolute', left: 0, right: 0, bottom: 90, textAlign:'center', color:'white', padding: '0 32px'}}>
        <div style={{
          fontFamily:'"Noto Serif SC", "Songti SC", serif',
          fontSize: 18, fontWeight: 400,
          letterSpacing: 2,
          color:'#fff', lineHeight: 1.9,
          textShadow:'0 2px 8px rgba(0,0,0,0.6)',
        }}>那婚礼对于我们<br/>意味着什么呢？</div>
      </div>

      <ScrollHint light />
    </div>
  );
}

Object.assign(window, {
  StatusBar, ScrollHint, WelcomeBand, SectionHead,
  CoverPage, StoryPage, WelcomePage, StoryContinuedPage, DatePage, SchedulePage, GalleryHero, ReflectionPage, ReminiscePage, InviteVideoPage,
});
