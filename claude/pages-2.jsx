/* Wedding Invitation — Pages 6-10 */

// ─── Page 6: Gallery Grid ───
function GalleryGrid({ photos, onUpload }) {
  const cells = [
    { k: 'g-1', h: 180, label: 'IMG · 01', cap: 'Morning light' },
    { k: 'g-2', h: 240, label: 'IMG · 02', cap: '' },
    { k: 'g-3', h: 140, label: 'IMG · 03', cap: '' },
    { k: 'g-4', h: 200, label: 'IMG · 04', cap: 'Rose garden' },
    { k: 'g-5', h: 160, label: 'IMG · 05', cap: '' },
    { k: 'g-6', h: 180, label: 'IMG · 06', cap: '' },
  ];
  return (
    <div className="page paper-bg" style={{padding:'60px 14px 70px', overflow:'auto'}}>
      <StatusBar />
      <div style={{textAlign:'center', marginBottom: 14}}>
        <div className="hand-en" style={{fontSize: 32, color:'#3E5A3A', lineHeight: 1}}>Album</div>
        <div className="serif-cn" style={{fontSize: 11, letterSpacing: 5, color:'#C44536', marginTop: 6, paddingLeft: 5}}>
          相 册 集
        </div>
      </div>

      <div style={{columnCount: 2, columnGap: 6}}>
        {cells.map((c) => (
          <div key={c.k} onClick={() => onUpload(c.k)}
               style={{breakInside:'avoid', marginBottom: 6, cursor:'pointer', position:'relative',
                       border:'1px solid rgba(62,90,58,0.2)', padding: 4, background:'white'}}>
            <div style={{height: c.h, overflow:'hidden'}}>
              {photos[c.k] ? (
                <img src={photos[c.k]} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              ) : (
                <div className="photo-placeholder" data-label={c.label} style={{height:'100%'}}>&nbsp;</div>
              )}
            </div>
            {c.cap && (
              <div className="hand-en" style={{
                textAlign:'center', fontSize: 14, color:'#C44536', paddingTop: 3,
              }}>{c.cap}</div>
            )}
          </div>
        ))}
      </div>

      <div style={{textAlign:'center', marginTop: 10, color:'#3E5A3A', opacity: 0.5,
                   fontFamily:'JetBrains Mono, monospace', fontSize: 9, letterSpacing: 2}}>
        — 6 / 120 frames —
      </div>
      <ScrollHint/>
    </div>
  );
}

// ─── Shared card helpers (Date / Venue pages) ───
const _cardStyle = {
  background:'white',
  padding: '16px 18px 18px',
  boxShadow:'0 4px 14px rgba(62,90,58,0.1), 0 1px 3px rgba(0,0,0,0.04)',
  position:'relative',
  border:'1px solid rgba(62,90,58,0.1)',
  display:'flex', flexDirection:'column',
};
const _cornerTag = (text) => (
  <div className="hand-en" style={{
    position:'absolute', top: 10, right: 14,
    color:'#C44536', fontSize: 12, opacity: 0.75,
    transform:'rotate(-8deg)',
    border:'1px solid #C44536', padding:'2px 6px', borderRadius: 2,
  }}>{text}</div>
);
const _sectionTitle = (en, cn) => (
  <div style={{marginBottom: 10}}>
    <div className="hand-en" style={{fontSize: 20, color:'#C44536', lineHeight: 1.1}}>{en}</div>
    <div className="serif-cn" style={{fontSize: 11, letterSpacing: 4, color:'#3E5A3A', opacity: 0.7, marginTop: 4, paddingLeft: 3}}>
      {cn}
    </div>
  </div>
);
const _photoSlot = (photos, onUpload, k, { ratio = '4/3', defaultSrc } = {}) => (
  <div onClick={() => onUpload(k)}
       style={{
         aspectRatio: ratio, width:'100%', overflow:'hidden',
         background:'#E9D4C7', cursor:'pointer', marginTop: 10, marginBottom: 10,
       }}>
    {photos[k] ? (
      <img src={photos[k]} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
    ) : defaultSrc ? (
      <img src={defaultSrc} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
    ) : (
      <div className="photo-placeholder" data-label="点击上传" style={{height:'100%'}}>&nbsp;</div>
    )}
  </div>
);

// ─── Page 9: Date ───
function LocationPage({ photos = {}, onUpload = () => {} } = {}) {
  return (
    <div className="page paper-bg" style={{padding:'60px 24px 70px', overflow:'hidden'}}>
      <StatusBar />
      <SectionHead en="Date" cn="婚 礼 日 期"/>

      <div style={_cardStyle}>
        {_cornerTag('DATE')}

        <div className="hand-cn" style={{fontSize: 26, color:'#3E5A3A', letterSpacing: 2, marginTop: 2}}>
          2026 年 9 月 26 日
        </div>
        <div className="hand-en" style={{fontSize: 14, color:'#C44536', marginTop: 4}}>
          Saturday · 周 六
        </div>

        {_photoSlot(photos, onUpload, 'date-photo', { ratio: '4/3' })}

        <div style={{
          borderTop:'0.5px dashed rgba(62,90,58,0.25)',
          paddingTop: 6, marginTop: 2,
          display:'flex', alignItems:'flex-start', gap: 6,
        }}>
          <div className="hand-en" style={{
            fontFamily:'Caveat, Dancing Script, cursive',
            fontSize: 18, color:'#C44536', lineHeight: 1,
            transform:'rotate(-4deg)', flexShrink: 0,
            paddingTop: 1,
          }}>Tips</div>

          <div className="serif-cn" style={{
            fontSize: 10.5, color:'#3E5A3A', opacity: 0.82,
            lineHeight: 1.6, letterSpacing: 0.3, flex: 1,
          }}>
            气温预计 24–30°C，建议穿着夏装
            <br/>夜间可增加薄外套
          </div>
        </div>
      </div>

      <div style={{position:'absolute', top: 48, right: 8, opacity: 0.8}}><HdLeaf size={40} flip/></div>

      <ScrollHint/>
    </div>
  );
}

// ─── Page 10: Venue ───
function VenuePage({ photos = {}, onUpload = () => {} } = {}) {
  return (
    <div className="page paper-bg" style={{padding:'60px 24px 70px', overflow:'hidden'}}>
      <StatusBar />
      <SectionHead en="Venue" cn="婚 礼 地 点"/>

      <div style={_cardStyle}>
        {_cornerTag('VENUE')}

        <div className="hand-cn" style={{fontSize: 24, color:'#3E5A3A', letterSpacing: 2, marginTop: 2}}>
          麒&nbsp;麟&nbsp;山&nbsp;庄
        </div>
        <div className="hand-en" style={{fontSize: 14, color:'#C44536', marginTop: 2}}>Kylin Villa</div>
        <div style={{marginTop: 6, fontSize: 11.5, color:'#3E5A3A', opacity: 0.85, lineHeight: 1.6}}>
          深圳市南山区沁园路 4599 号 · 麒麟山庄 · 9 号草坪 &amp; 凤凰厅
        </div>

        {_photoSlot(photos, onUpload, 'venue-photo', { ratio: '16/10' })}

        <div style={{display:'flex', gap: 8}}>
          <button style={{
            flex: 1, padding:'9px', background:'#3E5A3A', color:'#FBF4E3', border:'none',
            fontFamily:'Noto Serif SC, serif', fontSize: 11, letterSpacing: 3, cursor:'pointer',
          }} onClick={() => {
            const addr = encodeURIComponent('深圳市南山区沁园路4599号 · 麒麟山庄');
            window.location.href = `https://uri.amap.com/marker?position=113.971,22.582&name=${addr}&src=wedding&coordinate=gaode`;
          }}>导 航</button>
          <button style={{
            flex: 1, padding:'9px', background:'transparent', color:'#3E5A3A',
            border:'1px solid #3E5A3A',
            fontFamily:'Noto Serif SC, serif', fontSize: 11, letterSpacing: 3, cursor:'pointer',
          }} onClick={() => {
            navigator.clipboard?.writeText('深圳市南山区沁园路4599号 · 麒麟山庄');
            alert('已复制地址');
          }}>复 制 地 址</button>
        </div>
      </div>

      <div style={{position:'absolute', top: 48, right: 8, opacity: 0.8}}><HdLeaf size={40} flip/></div>
      <div style={{position:'absolute', bottom: 60, left: 8}}><HdBottle size={24}/></div>

      <ScrollHint/>
    </div>
  );
}

// ─── Page 8: Invitation Message ───
function MessagePage({ names }) {
  return (
    <div className="page paper-bg" style={{padding:'60px 26px 70px', overflow:'auto'}}>
      <StatusBar />
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

        {/* corner decorations */}
        <div style={{position:'absolute', top: -14, left: -8}}><HdRose size={32}/></div>
        <div style={{position:'absolute', bottom: -14, right: -8, transform:'rotate(180deg)'}}><HdRose size={32}/></div>
      </div>

      <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap: 10, marginTop: 20}}>
        <div style={{width: 40, height: 1, background:'#C44536', opacity: 0.5}}/>
        <HdRings size={40}/>
        <div style={{width: 40, height: 1, background:'#C44536', opacity: 0.5}}/>
      </div>

      <ScrollHint/>
    </div>
  );
}

// ─── Page 9: Wishes + Photo upload ───
function WishPage({ photos, onUpload }) {
  const [wish, setWish] = React.useState('');
  const [wishes, setWishes] = React.useState([
    { from: '张&nbsp;明', text: '愿你们一生顺遂，百年好合。' },
    { from: 'Sarah', text: 'So happy for you two! ♡' },
    { from: '小&nbsp;李', text: '恭喜！记得多吃糖 🍬' },
  ]);
  const fileRef = React.useRef(null);

  const submit = () => {
    if (!wish.trim()) return;
    setWishes([{ from: '你', text: wish }, ...wishes]);
    setWish('');
  };

  return (
    <div className="page paper-bg" style={{padding:'60px 22px 70px', overflow:'auto'}}>
      <StatusBar />
      <div style={{textAlign:'center', marginBottom: 16}}>
        <div className="hand-en" style={{color:'#3E5A3A', fontSize: 34, lineHeight: 1}}>Leave a wish</div>
        <div className="serif-cn" style={{fontSize: 11, letterSpacing: 5, color:'#C44536', marginTop: 6, paddingLeft: 5}}>
          写 一 句 祝 福 · 附 一 张 合 照
        </div>
      </div>

      <div style={{
        background:'white',
        padding: 14, border:'1px solid rgba(62,90,58,0.15)',
        boxShadow:'0 2px 10px rgba(62,90,58,0.06)',
      }}>
        <textarea
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          placeholder="写下你对我们的祝福..."
          style={{
            width:'100%', minHeight: 60, border:'none', outline:'none',
            fontFamily:'Noto Serif SC, serif', fontSize: 13, lineHeight: 1.7,
            resize:'none', color:'#3E5A3A', background:'transparent',
          }}
        />
        <div style={{display:'flex', gap: 8, alignItems:'center', marginTop: 4,
                     borderTop:'1px solid rgba(62,90,58,0.08)', paddingTop: 10}}>
          <button onClick={() => fileRef.current?.click()} style={{
            display:'flex', alignItems:'center', gap: 4,
            fontSize: 12, color:'#3E5A3A',
            background:'transparent', border:'none', cursor:'pointer',
            fontFamily:'Noto Serif SC, serif',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M3 17l5-4 4 3 4-5 5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            附上照片
          </button>
          <input ref={fileRef} type="file" accept="image/*" style={{display:'none'}}
                 onChange={(e) => onUpload('wish-photo', e.target.files?.[0])}/>
          <div style={{flex: 1}}/>
          <button onClick={submit} style={{
            background:'#C44536', color:'white', border:'none',
            padding:'7px 16px', borderRadius: 20,
            fontFamily:'Ma Shan Zheng, cursive', fontSize: 15, letterSpacing: 4,
            cursor:'pointer',
          }}>送 达</button>
        </div>
        {photos['wish-photo'] && (
          <div style={{marginTop: 10, overflow:'hidden', border:'1px solid rgba(62,90,58,0.15)', padding: 3}}>
            <img src={photos['wish-photo']} style={{width:'100%', display:'block'}}/>
          </div>
        )}
      </div>

      <div className="hand-en" style={{fontSize: 18, color:'#C44536', marginTop: 20, opacity: 0.9, textAlign:'center'}}>
        Wishes from friends
      </div>
      <div style={{marginTop: 10, display:'flex', flexDirection:'column', gap: 8}}>
        {wishes.map((w, i) => (
          <div key={i} style={{
            background:'rgba(255,255,255,0.7)',
            padding:'10px 14px',
            borderLeft:'2px solid #C44536',
          }}>
            <div className="hand-cn" style={{fontSize: 15, color:'#C44536', letterSpacing: 2}}
                 dangerouslySetInnerHTML={{__html: w.from}}/>
            <div className="serif-cn" style={{fontSize: 12.5, lineHeight: 1.7, marginTop: 2, color:'#3E5A3A', opacity: 0.85}}>
              {w.text}
            </div>
          </div>
        ))}
      </div>

      <ScrollHint/>
    </div>
  );
}

// ─── Page 10: RSVP ───
function RSVPPage() {
  const [form, setForm] = React.useState({ name: '', attend: null, guests: 1, note: '' });
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <div className="page paper-bg" style={{padding:'60px 24px 70px',
            display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <StatusBar />
        <div style={{textAlign:'center'}}>
          <HdBouquet size={90}/>
          <div className="hand-en" style={{fontSize: 36, color:'#3E5A3A', marginTop: 6}}>Thank you</div>
          <div className="hand-cn" style={{fontSize: 26, letterSpacing: 6, color:'#C44536', marginTop: 8}}>期 待 相 见</div>
          <div className="serif-cn" style={{fontSize: 12.5, color:'#3E5A3A', opacity: 0.8, marginTop: 12, lineHeight: 1.8}}>
            我们已收到你的回复<br/>
            2026.9.26 · 麒麟山庄 · 不见不散
          </div>
          <button onClick={() => setSubmitted(false)}
                  style={{marginTop: 22, background:'transparent', color:'#C44536', border:'1px solid #C44536',
                          padding:'8px 16px', borderRadius: 20, fontSize: 12, cursor:'pointer',
                          fontFamily:'Noto Serif SC, serif', letterSpacing: 2}}>
            修 改 回 复
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page paper-bg" style={{padding:'60px 24px 70px', overflow:'auto', display:'flex', flexDirection:'column'}}>
      <StatusBar />

      <div style={{textAlign:'center', marginBottom: 14}}>
        <div className="hand-en-script" style={{fontFamily:'Pinyon Script, cursive', fontSize: 36, color:'#3E5A3A', lineHeight: 1}}>
          R.S.V.P.
        </div>
        <div className="serif-cn" style={{fontSize: 11, letterSpacing: 5, color:'#C44536', marginTop: 6, paddingLeft: 5}}>
          请 回 复 出 席
        </div>
      </div>

      <div style={{display:'flex', flexDirection:'column', gap: 12}}>
        <div>
          <label style={{fontSize: 11, letterSpacing: 2, color:'#3E5A3A', opacity: 0.8, marginBottom: 5, display:'block'}}>
            姓 &nbsp; 名
          </label>
          <input className="rsvp-input" placeholder="你的名字" value={form.name}
                 onChange={(e) => setForm({...form, name: e.target.value})}/>
        </div>

        <div>
          <label style={{fontSize: 11, letterSpacing: 2, color:'#3E5A3A', opacity: 0.8, marginBottom: 6, display:'block'}}>
            是 否 出 席
          </label>
          <div style={{display:'flex', gap: 8}}>
            <button className={`rsvp-chip ${form.attend === true ? 'active' : ''}`}
                    onClick={() => setForm({...form, attend: true})}>
              ✿ 欣 然 赴 约
            </button>
            <button className={`rsvp-chip ${form.attend === false ? 'active' : ''}`}
                    onClick={() => setForm({...form, attend: false})}>
              抱 歉 缺 席
            </button>
          </div>
        </div>

        {form.attend === true && (
          <div>
            <label style={{fontSize: 11, letterSpacing: 2, color:'#3E5A3A', opacity: 0.8, marginBottom: 6, display:'block'}}>
              出 席 人 数
            </label>
            <div style={{display:'flex', alignItems:'center', gap: 12}}>
              <button onClick={() => setForm({...form, guests: Math.max(1, form.guests-1)})}
                      style={{width: 36, height: 36, borderRadius:'50%', border:'1px solid rgba(62,90,58,0.3)',
                              background:'transparent', color:'#3E5A3A', fontSize: 18, cursor:'pointer'}}>−</button>
              <div className="hand-en" style={{fontSize: 28, color:'#C44536', minWidth: 30, textAlign:'center'}}>
                {form.guests}
              </div>
              <button onClick={() => setForm({...form, guests: form.guests+1})}
                      style={{width: 36, height: 36, borderRadius:'50%', border:'1px solid rgba(62,90,58,0.3)',
                              background:'transparent', color:'#3E5A3A', fontSize: 18, cursor:'pointer'}}>+</button>
              <span style={{fontSize: 11, color:'#3E5A3A', opacity: 0.7, marginLeft: 4}}>位 (含你本人)</span>
            </div>
          </div>
        )}

        <div>
          <label style={{fontSize: 11, letterSpacing: 2, color:'#3E5A3A', opacity: 0.8, marginBottom: 5, display:'block'}}>
            留 言 (可选)
          </label>
          <textarea className="rsvp-input" placeholder="想对我们说的话..."
                    style={{minHeight: 52, resize:'none', fontFamily:'Noto Serif SC, serif'}}
                    value={form.note}
                    onChange={(e) => setForm({...form, note: e.target.value})}/>
        </div>

        <button className="rsvp-submit"
                disabled={!form.name || form.attend === null}
                style={{opacity: (!form.name || form.attend === null) ? 0.4 : 1}}
                onClick={() => setSubmitted(true)}>
          送 出 回 复
        </button>
      </div>

      <div style={{marginTop: 'auto', paddingTop: 16, textAlign:'center'}}>
        <div className="hand-en" style={{fontSize: 14, color:'#C44536', opacity: 0.85}}>— Li Zhipeng & Xu Yue —</div>
        <div style={{fontSize: 10, letterSpacing: 3, color:'#3E5A3A', opacity: 0.6, marginTop: 4}}>2 0 2 6 · 0 9 · 2 6</div>
      </div>

      <div style={{position:'absolute', top: 48, left: 8, opacity: 0.8}}><HdLeaf size={38}/></div>
      <div style={{position:'absolute', top: 48, right: 8, opacity: 0.8}}><HdLeaf size={38} flip/></div>
    </div>
  );
}

Object.assign(window, {
  GalleryGrid, LocationPage, VenuePage, MessagePage, WishPage, RSVPPage,
});
