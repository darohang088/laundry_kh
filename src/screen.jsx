import { useState } from "react";

const IMG = "https://www.movetocambodia.com/wp-content/uploads/modern-laundry-phnom-penh.jpg";

const BgImage = ({ height, style: s, children, overlayStyle }) => (
  <div style={{
    height, backgroundImage: `url(${IMG})`, backgroundSize: "cover",
    backgroundPosition: "center", backgroundColor: "#b8cfe8", position: "relative", ...s,
  }}>
    {overlayStyle && <div style={{ position: "absolute", inset: 0, ...overlayStyle }} />}
    {children}
  </div>
);

const C = {
  primary: "#1A6BE8", primaryLight: "#EBF2FF", primaryDark: "#1355C0",
  accent: "#00C48C", accentLight: "#E6FAF4",
  bg: "#F0F3FA", white: "#FFFFFF", text: "#0D1B35",
  textSub: "#5C6E8A", textMuted: "#A4ADBE", border: "#E2E8F5",
  red: "#FF4D4F", card: "#FFFFFF", surface: "#F7F9FE",
};

const Icon = ({ name, size = 20, color = C.textSub }) => {
  const icons = {
    home: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.55 5.45 21 6 21H9M19 10L21 12M19 10V20C19 20.55 18.55 21 18 21H15M9 21C9 21 9 15 12 15C15 15 15 21 15 21M9 21H15" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    search: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.8"/><path d="M20 20L16.65 16.65" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    orders: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2" stroke={color} strokeWidth="1.8"/><path d="M8 8H16M8 12H16M8 16H12" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    profile: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.8"/><path d="M4 20C4 17 7.58 15 12 15C16.42 15 20 17 20 20" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    location: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill={color}/></svg>,
    star: <svg width={size} height={size} viewBox="0 0 24 24" fill="#FFB800"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>,
    wash: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth="1.8"/><circle cx="12" cy="13" r="4" stroke={color} strokeWidth="1.8"/><circle cx="7" cy="7" r="1" fill={color}/></svg>,
    dry: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8"/><path d="M8 12C8 9.79 9.79 8 12 8" stroke={color} strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.8"/></svg>,
    iron: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 16H16L20 10H8L3 16Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/><path d="M3 16V18" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    pickup: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke={color} strokeWidth="1.8"/><path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke={color} strokeWidth="1.8"/><path d="M12 12V16M10 14H14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    back: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    check: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    phone: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill={color}/></svg>,
    settings: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.8"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    notification: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M18 8C18 6.4 17.37 4.88 16.24 3.76C15.12 2.63 13.59 2 12 2C10.41 2 8.88 2.63 7.76 3.76C6.63 4.88 6 6.4 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke={color} strokeWidth="1.8"/><path d="M13.73 21C13.55 21.3 13.3 21.55 12 21.73C10.7 21.9 10.45 21.3 10.27 21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    chevron: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    time: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8"/><path d="M12 7V12L15 15" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    heart: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    share: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="18" cy="5" r="3" stroke={color} strokeWidth="1.8"/><circle cx="6" cy="12" r="3" stroke={color} strokeWidth="1.8"/><circle cx="18" cy="19" r="3" stroke={color} strokeWidth="1.8"/><path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
  };
  return <span style={{ display: "inline-flex", alignItems: "center" }}>{icons[name] || null}</span>;
};

const Tag = ({ label, color = C.primary }) => (
  <span style={{ padding: "3px 9px", borderRadius: 20, background: color + "15", color, fontSize: 11, fontWeight: 700, letterSpacing: 0.2 }}>{label}</span>
);

const PrimaryBtn = ({ label, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled} style={{ width: "100%", padding: "15px", background: disabled ? C.textMuted : `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryDark} 100%)`, color: C.white, borderRadius: 16, border: "none", fontSize: 16, fontWeight: 700, cursor: disabled ? "default" : "pointer", boxShadow: disabled ? "none" : "0 8px 24px rgba(26,107,232,0.32)", letterSpacing: 0.2 }}>
    {label}
  </button>
);

const shops = [
  { id: 1, name: "CleanKing Laundry", nameKh: "ក្លែនគីង", rating: 4.8, reviews: 234, distance: "0.8 km", time: "25 min", status: "open", tags: ["24h", "Fast"], price: "$1.20", services: ["Wash", "Dry", "Iron", "Pickup"], desc: "Professional laundry in BKK1. Quick turnaround and great care for all fabrics." },
  { id: 2, name: "FreshNow Wash", nameKh: "ហ្វ្រេស្ណូ", rating: 4.6, reviews: 189, distance: "1.2 km", time: "35 min", status: "open", tags: ["Pickup", "Cheap"], price: "$0.90", services: ["Wash", "Dry", "Pickup"], desc: "Budget-friendly wash & fold. Pickup & delivery across Phnom Penh." },
  { id: 3, name: "SkyClean Express", nameKh: "ស្កាយគ្លែន", rating: 4.9, reviews: 312, distance: "2.1 km", time: "50 min", status: "closed", tags: ["Premium", "Iron"], price: "$1.80", services: ["Wash", "Dry", "Iron", "Pickup"], desc: "Premium dry cleaning. Trusted by expats and business professionals." },
  { id: 4, name: "Boeng Kak Fresh", nameKh: "បឹងកក់ហ្វ្រេស", rating: 4.4, reviews: 97, distance: "3.0 km", time: "60 min", status: "open", tags: ["24h", "Nearby"], price: "$1.00", services: ["Wash", "Dry"], desc: "Local favorite in Boeng Kak area. Open 24 hours with friendly staff." },
];

const orderHistory = [
  { id: "LG-2041", shop: "CleanKing Laundry", date: "Mar 28", price: "$6.50", kg: "5.4", services: "Wash + Iron" },
  { id: "LG-2038", shop: "FreshNow Wash", date: "Mar 22", price: "$3.60", kg: "4.0", services: "Wash + Pickup" },
  { id: "LG-2031", shop: "SkyClean Express", date: "Mar 15", price: "$9.00", kg: "5.0", services: "Wash + Iron + Dry" },
];

// ── SHOP CARD ─────────────────────────────────────────────────────────────────
const ShopCard = ({ shop, onClick }) => (
  <div onClick={onClick} style={{ background: C.card, borderRadius: 20, boxShadow: "0 3px 18px rgba(13,27,53,0.08)", border: `1px solid ${C.border}`, overflow: "hidden", cursor: "pointer" }}>
    <BgImage height={165}>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, rgba(13,27,53,0.65), transparent)" }} />
      <div style={{ position: "absolute", top: 12, left: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5, background: shop.status === "open" ? "rgba(0,196,140,0.88)" : "rgba(80,90,110,0.82)", borderRadius: 20, padding: "4px 10px" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "white" }} />
          <span style={{ fontSize: 11, color: "white", fontWeight: 700 }}>{shop.status === "open" ? "Open" : "Closed"}</span>
        </div>
      </div>
      <div style={{ position: "absolute", top: 12, right: 12, display: "flex", alignItems: "center", gap: 4, background: "rgba(255,255,255,0.95)", borderRadius: 20, padding: "4px 10px" }}>
        <Icon name="star" size={12} />
        <span style={{ fontSize: 12, fontWeight: 800, color: C.text }}>{shop.rating}</span>
        <span style={{ fontSize: 10, color: C.textMuted }}>({shop.reviews})</span>
      </div>
      <div style={{ position: "absolute", bottom: 12, left: 14, right: 14, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 800, color: "white", letterSpacing: -0.2 }}>{shop.name}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontStyle: "italic" }}>{shop.nameKh}</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.18)", borderRadius: 10, padding: "5px 10px", backdropFilter: "blur(4px)" }}>
          <span style={{ fontSize: 14, fontWeight: 800, color: "white" }}>{shop.price}<span style={{ fontSize: 10, fontWeight: 500 }}>/kg</span></span>
        </div>
      </div>
    </BgImage>

    <div style={{ padding: "13px 14px 15px" }}>
      {/* Meta */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 11, color: C.textSub, fontSize: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Icon name="location" size={12} color={C.textMuted} />
          <span style={{ fontWeight: 600 }}>{shop.distance}</span>
        </div>
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: C.border }} />
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Icon name="time" size={12} color={C.textMuted} />
          <span style={{ fontWeight: 600 }}>{shop.time}</span>
        </div>
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: C.border }} />
        <span style={{ fontWeight: 600, color: C.textSub }}>{shop.services.length} services</span>
      </div>

      {/* Tags + arrow */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {shop.tags.map(t => <Tag key={t} label={t} color={C.primary} />)}
          {shop.services.slice(0, 2).map(s => <Tag key={s} label={s} color={C.textSub} />)}
        </div>
        <div style={{ width: 30, height: 30, borderRadius: 10, background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginLeft: 8 }}>
          <Icon name="chevron" size={15} color={C.primary} />
        </div>
      </div>
    </div>
  </div>
);

// ── HOME ──────────────────────────────────────────────────────────────────────
const HomeScreen = ({ onSelectShop }) => {
  const [chip, setChip] = useState("All");
  const chips = ["All", "24h", "Cheap", "Top Rated", "Nearby"];
  return (
    <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
      {/* Header */}
      <div style={{ background: C.white, padding: "18px 20px 20px", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 5 }}>
              <Icon name="location" size={13} color={C.primary} />
              <span style={{ fontSize: 12, color: C.primary, fontWeight: 700 }}>Phnom Penh, BKK1</span>
              <Icon name="chevron" size={12} color={C.primary} />
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: C.text, letterSpacing: -0.5, lineHeight: 1.2 }}>Good morning, Daro 👋</div>
            <div style={{ fontSize: 13, color: C.textSub, marginTop: 3 }}>Find a trusted laundry near you</div>
          </div>
          <div style={{ position: "relative" }}>
            <button style={{ width: 44, height: 44, borderRadius: 14, background: C.primaryLight, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="notification" size={20} color={C.primary} />
            </button>
            <div style={{ position: "absolute", top: 9, right: 9, width: 8, height: 8, background: C.red, borderRadius: "50%", border: "2px solid white" }} />
          </div>
        </div>
        {/* Search */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: C.surface, borderRadius: 14, padding: "12px 16px", border: `1.5px solid ${C.border}` }}>
          <Icon name="search" size={17} color={C.textMuted} />
          <span style={{ fontSize: 14, color: C.textMuted, flex: 1 }}>Search shops, services...</span>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width={15} height={15} viewBox="0 0 24 24" fill="none"><path d="M4 6H20M7 12H17M10 18H14" stroke="white" strokeWidth="2.2" strokeLinecap="round"/></svg>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px 18px 28px" }}>
        {/* Promo */}
        <div style={{ marginBottom: 22 }}>
          <BgImage height={118} style={{ borderRadius: 18 }} overlayStyle={{ background: "linear-gradient(110deg, rgba(19,85,192,0.9) 0%, rgba(26,107,232,0.65) 55%, transparent 100%)" }}>
            <div style={{ position: "absolute", inset: 0, padding: "18px 20px", display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 1 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(255,255,255,0.18)", borderRadius: 20, padding: "3px 10px", width: "fit-content", marginBottom: 8 }}>
                <span style={{ fontSize: 12 }}>⚡</span>
                <span style={{ fontSize: 11, color: "white", fontWeight: 700, letterSpacing: 0.5 }}>LIMITED OFFER</span>
              </div>
              <div style={{ fontSize: 19, fontWeight: 800, color: "white", letterSpacing: -0.3 }}>First Order 30% OFF</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 3 }}>Code <span style={{ fontWeight: 800 }}>WASHGO30</span> · Exp Apr 5</div>
            </div>
          </BgImage>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 22 }}>
          {[{emoji:"⚡",label:"Fastest",val:"25 min"},{emoji:"💰",label:"From",val:"$0.90/kg"},{emoji:"🏪",label:"Nearby",val:"4 Shops"}].map(s => (
            <div key={s.label} style={{ background: C.white, borderRadius: 14, padding: "12px 8px", textAlign: "center", border: `1px solid ${C.border}`, boxShadow: "0 1px 8px rgba(13,27,53,0.04)" }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{s.emoji}</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: C.text }}>{s.val}</div>
              <div style={{ fontSize: 10, color: C.textMuted, marginTop: 1, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Chips */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto", scrollbarWidth: "none", marginBottom: 18, paddingBottom: 2 }}>
          {chips.map(c => (
            <button key={c} onClick={() => setChip(c)} style={{ padding: "7px 16px", borderRadius: 20, border: chip===c ? "none" : `1.5px solid ${C.border}`, background: chip===c ? C.primary : C.white, color: chip===c ? C.white : C.textSub, fontSize: 13, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", boxShadow: chip===c ? "0 4px 12px rgba(26,107,232,0.28)" : "none", flexShrink: 0 }}>{c}</button>
          ))}
        </div>

        {/* Shop list header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: C.text, letterSpacing: -0.3 }}>Nearby Shops</div>
          <div style={{ fontSize: 13, color: C.primary, fontWeight: 700 }}>See all →</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {shops.map(shop => <ShopCard key={shop.id} shop={shop} onClick={() => onSelectShop(shop)} />)}
        </div>
      </div>
    </div>
  );
};

// ── DETAIL ────────────────────────────────────────────────────────────────────
const DetailScreen = ({ shop, onBack, onBook }) => {
  const svcIcons = { Wash: "wash", Dry: "dry", Iron: "iron", Pickup: "pickup" };
  const svcColors = { Wash: "#1A6BE8", Dry: "#00C48C", Iron: "#FF8C00", Pickup: "#9B59B6" };
  return (
    <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
      <BgImage height={255} overlayStyle={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(13,27,53,0.65) 100%)" }}>
        <div style={{ position: "absolute", top: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between", zIndex: 2 }}>
          <button onClick={onBack} style={{ width: 40, height: 40, borderRadius: 13, background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="back" size={18} color={C.text} />
          </button>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={{ width: 40, height: 40, borderRadius: 13, background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="heart" size={17} color={C.text} /></button>
            <button style={{ width: 40, height: 40, borderRadius: 13, background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="share" size={17} color={C.text} /></button>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 18, left: 18, right: 18, zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "white", letterSpacing: -0.4 }}>{shop.name}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontStyle: "italic", marginTop: 2 }}>{shop.nameKh}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "white" }}>{shop.price}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>per kg</div>
            </div>
          </div>
        </div>
      </BgImage>

      {/* Status strip */}
      <div style={{ background: C.white, padding: "13px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: shop.status === "open" ? C.accent : C.textMuted }} />
          <span style={{ fontSize: 13, fontWeight: 700, color: shop.status === "open" ? C.accent : C.textMuted }}>{shop.status === "open" ? "Open Now" : "Closed"}</span>
        </div>
        <div style={{ width: 1, height: 14, background: C.border }} />
        <Icon name="star" size={13} />
        <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{shop.rating}</span>
        <span style={{ fontSize: 12, color: C.textMuted }}>({shop.reviews})</span>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4 }}>
          <Icon name="location" size={13} color={C.textMuted} />
          <span style={{ fontSize: 12, color: C.textSub, fontWeight: 600 }}>{shop.distance}</span>
        </div>
      </div>

      <div style={{ padding: "18px 18px 28px" }}>
        {/* About */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 8 }}>About</div>
          <div style={{ fontSize: 13, color: C.textSub, lineHeight: 1.75, background: C.white, borderRadius: 14, padding: "13px 15px", border: `1px solid ${C.border}` }}>{shop.desc}</div>
        </div>

        {/* Services */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 12 }}>Services Offered</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {shop.services.map(s => (
              <div key={s} style={{ background: C.white, borderRadius: 14, padding: "14px", display: "flex", alignItems: "center", gap: 11, border: `1px solid ${C.border}` }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: svcColors[s] + "14", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={svcIcons[s]} size={20} color={svcColors[s]} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{s}</div>
                  <div style={{ fontSize: 11, color: C.textMuted }}>Available</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price card */}
        <div style={{ background: `linear-gradient(135deg, ${C.primaryLight}, #daeeff)`, borderRadius: 16, padding: "16px 18px", marginBottom: 22, border: `1px solid ${C.primary}22`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 12, color: C.primary, fontWeight: 600, marginBottom: 2 }}>Starting from</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: C.primary, letterSpacing: -0.5 }}>{shop.price}<span style={{ fontSize: 14, fontWeight: 600 }}>/kg</span></div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: C.textSub }}>Minimum order</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: C.text }}>2 kg</div>
          </div>
        </div>

        <PrimaryBtn label="Book This Shop" onClick={onBook} />
      </div>
    </div>
  );
};

// ── BOOKING ───────────────────────────────────────────────────────────────────
const BookingScreen = ({ shop, onBack, onConfirm }) => {
  const [services, setServices] = useState({ Wash: true, Dry: false, Iron: false, Pickup: true });
  const [time, setTime] = useState("now");
  const [kg, setKg] = useState(3);
  const svcPrice = { Wash: 1.2, Dry: 0.8, Iron: 1.0, Pickup: 0.5 };
  const svcColors = { Wash: "#1A6BE8", Dry: "#00C48C", Iron: "#FF8C00", Pickup: "#9B59B6" };
  const svcIcons = { Wash: "wash", Dry: "dry", Iron: "iron", Pickup: "pickup" };
  const selected = Object.keys(services).filter(k => services[k]);
  const total = selected.reduce((s, k) => s + svcPrice[k] * kg, 0).toFixed(2);

  return (
    <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
      <div style={{ background: C.white, padding: "16px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={onBack} style={{ width: 38, height: 38, borderRadius: 12, background: C.bg, border: `1px solid ${C.border}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="back" size={18} color={C.text} />
        </button>
        <div>
          <div style={{ fontSize: 17, fontWeight: 800, color: C.text }}>Book Service</div>
          <div style={{ fontSize: 12, color: C.textSub }}>{shop.name}</div>
        </div>
      </div>

      <div style={{ padding: "18px 18px 28px" }}>
        {/* Services */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 12 }}>Select Services</div>
          {["Wash","Dry","Iron","Pickup"].filter(s => shop.services.includes(s)).map(s => (
            <div key={s} onClick={() => setServices(p => ({ ...p, [s]: !p[s] }))}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 14px", background: services[s] ? svcColors[s] + "0D" : C.white, border: `1.5px solid ${services[s] ? svcColors[s] + "55" : C.border}`, borderRadius: 14, marginBottom: 8, cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 11, background: services[s] ? svcColors[s] + "18" : C.surface, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={svcIcons[s]} size={19} color={services[s] ? svcColors[s] : C.textMuted} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{s}</div>
                  <div style={{ fontSize: 11, color: C.textMuted }}>${svcPrice[s]} per kg</div>
                </div>
              </div>
              <div style={{ width: 22, height: 22, borderRadius: 7, background: services[s] ? svcColors[s] : C.border, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {services[s] && <Icon name="check" size={13} color="white" />}
              </div>
            </div>
          ))}
        </div>

        {/* Weight */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 12 }}>Estimated Weight</div>
          <div style={{ background: C.white, borderRadius: 16, padding: "16px 20px", border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button onClick={() => setKg(Math.max(1, kg-1))} style={{ width: 42, height: 42, borderRadius: 12, background: C.bg, border: `1.5px solid ${C.border}`, fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: C.text }}>−</button>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 34, fontWeight: 800, color: C.primary, letterSpacing: -1, lineHeight: 1 }}>{kg}</div>
              <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>kilograms</div>
            </div>
            <button onClick={() => setKg(kg+1)} style={{ width: 42, height: 42, borderRadius: 12, background: C.primary, border: "none", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "white", boxShadow: "0 4px 14px rgba(26,107,232,0.35)" }}>+</button>
          </div>
        </div>

        {/* Time */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 12 }}>Pickup Time</div>
          <div style={{ display: "flex", gap: 10 }}>
            {[{val:"now",emoji:"⚡",label:"Right Now",sub:"~30 min"},{val:"schedule",emoji:"📅",label:"Schedule",sub:"Pick a time"}].map(t => (
              <div key={t.val} onClick={() => setTime(t.val)} style={{ flex: 1, padding: "14px", border: `1.5px solid ${time===t.val ? C.primary : C.border}`, borderRadius: 14, background: time===t.val ? C.primaryLight : C.white, cursor: "pointer", textAlign: "center" }}>
                <div style={{ fontSize: 22, marginBottom: 5 }}>{t.emoji}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: time===t.val ? C.primary : C.text }}>{t.label}</div>
                <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>{t.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Address */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 12 }}>Pickup Address</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: C.white, borderRadius: 14, padding: "14px", border: `1.5px solid ${C.border}` }}>
            <div style={{ width: 38, height: 38, borderRadius: 11, background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name="location" size={18} color={C.primary} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>BKK1, Street 51</div>
              <div style={{ fontSize: 12, color: C.textSub }}>Phnom Penh · Tap to change</div>
            </div>
            <Icon name="chevron" size={16} color={C.textMuted} />
          </div>
        </div>

        {/* Summary */}
        <div style={{ background: C.white, borderRadius: 16, padding: "16px", border: `1px solid ${C.border}`, marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 12 }}>Price Summary</div>
          {selected.map(s => (
            <div key={s} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: svcColors[s] }} />
                <span style={{ fontSize: 13, color: C.textSub }}>{s} × {kg} kg</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>${(svcPrice[s]*kg).toFixed(2)}</span>
            </div>
          ))}
          {selected.length === 0 && <div style={{ fontSize: 13, color: C.textMuted, textAlign: "center", padding: "8px 0" }}>No services selected</div>}
          <div style={{ height: 1, background: C.border, margin: "12px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: C.text }}>Total</span>
            <span style={{ fontSize: 24, fontWeight: 800, color: C.primary, letterSpacing: -0.5 }}>${total}</span>
          </div>
        </div>

        <PrimaryBtn label="Confirm Booking" onClick={onConfirm} disabled={selected.length === 0} />
      </div>
    </div>
  );
};

// ── TRACKING ──────────────────────────────────────────────────────────────────
const TrackingScreen = ({ onBack }) => {
  const steps = [
    { label: "Order Placed", sub: "09:00 AM", done: true },
    { label: "Picked Up", sub: "09:45 AM", done: true },
    { label: "Washing", sub: "In progress", done: false, active: true },
    { label: "Delivering", sub: "Est. 12:30 PM", done: false },
    { label: "Completed", sub: "—", done: false },
  ];
  return (
    <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
      <div style={{ background: C.white, padding: "16px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={onBack} style={{ width: 38, height: 38, borderRadius: 12, background: C.bg, border: `1px solid ${C.border}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="back" size={18} color={C.text} />
        </button>
        <div>
          <div style={{ fontSize: 17, fontWeight: 800, color: C.text }}>Order Tracking</div>
          <div style={{ fontSize: 12, color: C.textSub }}>Order #LG-2042 · Mar 31, 2026</div>
        </div>
      </div>

      <div style={{ padding: "18px 18px 28px" }}>
        {/* Map */}
        <div style={{ borderRadius: 18, overflow: "hidden", marginBottom: 18, boxShadow: "0 4px 20px rgba(13,27,53,0.10)" }}>
          <BgImage height={168} overlayStyle={{ background: "rgba(26,107,232,0.3)" }}>
            <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,0.95)", padding: "5px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, color: C.primary }}>🔴 Live Tracking</div>
            <div style={{ position: "absolute", bottom: 12, left: 12, right: 12, display: "flex", alignItems: "center", gap: 10, justifyContent: "space-between" }}>
              <div style={{ background: "rgba(255,255,255,0.97)", borderRadius: 14, padding: "10px 14px", flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: C.text }}>Sophea Mony 🛵</div>
                <div style={{ fontSize: 11, color: C.textSub, marginTop: 1 }}>ETA 12:30 PM · 2.1 km away</div>
              </div>
              <button style={{ width: 44, height: 44, borderRadius: 13, background: C.primary, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(26,107,232,0.4)", flexShrink: 0 }}>
                <Icon name="phone" size={18} color="white" />
              </button>
            </div>
          </BgImage>
        </div>

        {/* Progress */}
        <div style={{ background: C.white, borderRadius: 18, padding: "18px", marginBottom: 16, border: `1px solid ${C.border}` }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 16 }}>Order Progress</div>
          {steps.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 14 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: step.done ? C.accent : step.active ? C.primary : C.surface, border: `2px solid ${step.done ? C.accent : step.active ? C.primary : C.border}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: step.active ? `0 0 0 5px ${C.primary}1A` : "none", flexShrink: 0 }}>
                  {step.done ? <Icon name="check" size={14} color="white" /> : step.active ? <div style={{ width: 9, height: 9, borderRadius: "50%", background: "white" }} /> : null}
                </div>
                {i < steps.length-1 && <div style={{ width: 2, height: 26, background: step.done ? C.accent : C.border, borderRadius: 2, margin: "4px 0" }} />}
              </div>
              <div style={{ paddingBottom: i < steps.length-1 ? 12 : 0, paddingTop: 4 }}>
                <div style={{ fontSize: 13, fontWeight: step.active ? 800 : step.done ? 600 : 500, color: step.done||step.active ? C.text : C.textMuted }}>{step.label}</div>
                <div style={{ fontSize: 11, color: step.active ? C.primary : C.textMuted, marginTop: 1, fontWeight: step.active ? 700 : 400 }}>{step.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{ background: C.white, borderRadius: 18, padding: "16px 18px", border: `1px solid ${C.border}` }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 12 }}>Order Summary</div>
          {[["Shop","CleanKing Laundry"],["Services","Wash + Pickup · 3 kg"],["Date","Mar 31, 2026"]].map(([k,v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: C.textSub }}>{k}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{v}</span>
            </div>
          ))}
          <div style={{ height: 1, background: C.border, margin: "10px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Total Paid</span>
            <span style={{ fontSize: 22, fontWeight: 800, color: C.primary }}>$5.40</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── ORDERS ────────────────────────────────────────────────────────────────────
const HistoryScreen = ({ onTrack }) => (
  <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
    <div style={{ background: C.white, padding: "18px 20px 16px", borderBottom: `1px solid ${C.border}` }}>
      <div style={{ fontSize: 22, fontWeight: 800, color: C.text, letterSpacing: -0.5 }}>My Orders</div>
      <div style={{ fontSize: 13, color: C.textSub, marginTop: 3 }}>Track current & view past orders</div>
    </div>
    <div style={{ padding: "18px 18px 28px" }}>
      {/* Active */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.textMuted, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>Active Order</div>
        <div style={{ background: C.white, borderRadius: 18, overflow: "hidden", border: `1.5px solid ${C.primary}28`, boxShadow: "0 4px 20px rgba(26,107,232,0.1)" }}>
          <div style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: 600, letterSpacing: 0.5 }}>ORDER #LG-2042</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "white", marginTop: 2 }}>CleanKing Laundry</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.18)", borderRadius: 10, padding: "5px 12px" }}>
              <span style={{ fontSize: 12, color: "white", fontWeight: 700 }}>🔄 Washing</span>
            </div>
          </div>
          <div style={{ padding: "14px 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
              {[["Service","Wash + Pickup"],["Weight","3 kg"],["Total","$5.40"]].map(([k,v]) => (
                <div key={k}>
                  <div style={{ fontSize: 11, color: C.textMuted, marginBottom: 3, fontWeight: 500 }}>{k}</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: k==="Total" ? C.primary : C.text }}>{v}</div>
                </div>
              ))}
            </div>
            <button onClick={onTrack} style={{ width: "100%", padding: "11px", background: C.primaryLight, color: C.primary, border: `1.5px solid ${C.primary}30`, borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>📍 Track Order</button>
          </div>
        </div>
      </div>

      {/* Past */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.textMuted, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>Completed</div>
        {orderHistory.map(o => (
          <div key={o.id} style={{ background: C.white, borderRadius: 16, padding: "14px 16px", marginBottom: 10, border: `1px solid ${C.border}`, boxShadow: "0 1px 8px rgba(13,27,53,0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{o.shop}</div>
                <div style={{ fontSize: 12, color: C.textMuted, marginTop: 3 }}>#{o.id} · {o.date} · {o.kg}kg</div>
                <div style={{ fontSize: 12, color: C.textSub, marginTop: 2 }}>{o.services}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: C.text }}>{o.price}</div>
                <div style={{ fontSize: 11, color: C.accent, fontWeight: 700, marginTop: 4 }}>✓ Done</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={{ flex: 1, padding: "9px", background: C.surface, color: C.primary, border: `1px solid ${C.border}`, borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>↩ Reorder</button>
              <button style={{ flex: 1, padding: "9px", background: C.surface, color: C.textSub, border: `1px solid ${C.border}`, borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>⭐ Rate</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── PROFILE ───────────────────────────────────────────────────────────────────
const ProfileScreen = () => (
  <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
    <BgImage height={185} overlayStyle={{ background: `linear-gradient(160deg, ${C.primaryDark}E8 0%, ${C.primary}C0 100%)` }}>
      <div style={{ position: "absolute", inset: 0, padding: "28px 20px", display: "flex", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 64, height: 64, borderRadius: 20, background: "rgba(255,255,255,0.22)", border: "2.5px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>👤</div>
          <div>
            <div style={{ fontSize: 21, fontWeight: 800, color: "white", letterSpacing: -0.3 }}>Daro Hang</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", marginTop: 2 }}>+855 12 345 678</div>
            <div style={{ marginTop: 7, display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(255,255,255,0.18)", borderRadius: 20, padding: "3px 10px" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.accent }} />
              <span style={{ fontSize: 11, color: "white", fontWeight: 700 }}>Regular Member</span>
            </div>
          </div>
        </div>
      </div>
    </BgImage>

    <div style={{ padding: "18px 18px 28px" }}>
      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 18 }}>
        {[{emoji:"📦",val:"12",label:"Orders"},{emoji:"🏪",val:"3",label:"Shops"},{emoji:"⭐",val:"4.8",label:"Rating"}].map(s => (
          <div key={s.label} style={{ background: C.white, borderRadius: 16, padding: "14px 10px", textAlign: "center", border: `1px solid ${C.border}`, boxShadow: "0 1px 8px rgba(13,27,53,0.05)" }}>
            <div style={{ fontSize: 20, marginBottom: 4 }}>{s.emoji}</div>
            <div style={{ fontSize: 17, fontWeight: 800, color: C.primary, letterSpacing: -0.3 }}>{s.val}</div>
            <div style={{ fontSize: 11, color: C.textMuted, marginTop: 1 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Payment */}
      <div style={{ background: C.white, borderRadius: 18, padding: "16px", border: `1px solid ${C.border}`, marginBottom: 14, boxShadow: "0 1px 8px rgba(13,27,53,0.05)" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 14 }}>Payment Methods</div>
        {[{name:"ABA Pay",icon:"💳",sub:"****1234"},{name:"Wing Money",icon:"📱",sub:"****5678"}].map((p,i,arr) => (
          <div key={p.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 0", borderBottom: i<arr.length-1 ? `1px solid ${C.border}` : "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: C.surface, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, border: `1px solid ${C.border}` }}>{p.icon}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{p.name}</div>
                <div style={{ fontSize: 11, color: C.textMuted }}>Linked · {p.sub}</div>
              </div>
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, background: C.accentLight, borderRadius: 8, padding: "3px 9px" }}>Active</div>
          </div>
        ))}
        <button style={{ marginTop: 12, width: "100%", padding: "11px", background: C.surface, color: C.primary, border: `1.5px dashed ${C.primary}40`, borderRadius: 12, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>+ Add Payment Method</button>
      </div>

      {/* Menu */}
      <div style={{ background: C.white, borderRadius: 18, padding: "4px 16px", border: `1px solid ${C.border}`, marginBottom: 14, boxShadow: "0 1px 8px rgba(13,27,53,0.05)" }}>
        {[{emoji:"📍",label:"Saved Addresses",sub:"BKK1, Tuol Kork"},{emoji:"🔔",label:"Notifications",sub:"All alerts on"},{emoji:"⚙️",label:"Settings",sub:"Account & security"}].map((m,i,arr) => (
          <div key={m.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 0", borderBottom: i<arr.length-1 ? `1px solid ${C.border}` : "none", cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: C.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19 }}>{m.emoji}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{m.label}</div>
                <div style={{ fontSize: 12, color: C.textMuted, marginTop: 1 }}>{m.sub}</div>
              </div>
            </div>
            <Icon name="chevron" size={16} color={C.textMuted} />
          </div>
        ))}
      </div>

      <button style={{ width: "100%", padding: "14px", background: "#FFF2F2", color: C.red, border: `1.5px solid ${C.red}18`, borderRadius: 14, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>🚪 Sign Out</button>
    </div>
  </div>
);

// ── MAIN ──────────────────────────────────────────────────────────────────────
export default function LaundryGoKH() {
  const [tab, setTab] = useState("home");
  const [selectedShop, setSelectedShop] = useState(null);
  const [subScreen, setSubScreen] = useState(null);

  const handleBack = () => {
    if (subScreen === "tracking") { setSubScreen(null); setSelectedShop(null); setTab("orders"); }
    else if (subScreen === "booking") setSubScreen("detail");
    else if (subScreen === "detail") { setSubScreen(null); setSelectedShop(null); }
  };

  const renderScreen = () => {
    if (subScreen === "detail" && selectedShop) return <DetailScreen shop={selectedShop} onBack={handleBack} onBook={() => setSubScreen("booking")} />;
    if (subScreen === "booking" && selectedShop) return <BookingScreen shop={selectedShop} onBack={handleBack} onConfirm={() => setSubScreen("tracking")} />;
    if (subScreen === "tracking") return <TrackingScreen onBack={handleBack} />;
    if (tab === "orders") return <HistoryScreen onTrack={() => setSubScreen("tracking")} />;
    if (tab === "profile") return <ProfileScreen />;
    return <HomeScreen onSelectShop={s => { setSelectedShop(s); setSubScreen("detail"); }} />;
  };

  const navItems = [
    { id: "home", icon: "home", label: "Home" },
    { id: "search", icon: "search", label: "Explore" },
    { id: "orders", icon: "orders", label: "Orders" },
    { id: "profile", icon: "profile", label: "Profile" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { display: none; }
        html, body, #root { height: 100%; margin: 0; font-family: 'DM Sans', sans-serif; background: #D5DAE8; }
        button { font-family: inherit; }
      `}</style>
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: C.bg, height: "100vh", display: "flex", flexDirection: "column", width: "100%", maxWidth: 430, margin: "0 auto", overflow: "hidden" }}>
        {/* Status bar */}
        <div style={{ background: C.white, padding: "10px 22px 9px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, fontWeight: 700, color: C.text, borderBottom: `1px solid ${C.border}`, flexShrink: 0 }}>
          <span>9:41</span>
          <span style={{ fontSize: 14 }}>📶 🔋</span>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0, overflow: "hidden" }}>
          {renderScreen()}
        </div>

        {!subScreen && (
          <div style={{ width: "100%", height: 66, background: C.white, borderTop: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-around", flexShrink: 0, boxShadow: "0 -4px 24px rgba(13,27,53,0.07)" }}>
            {navItems.map(item => {
              const active = tab === item.id;
              return (
                <button key={item.id} onClick={() => { setTab(item.id); setSubScreen(null); setSelectedShop(null); }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: active ? C.primaryLight : "transparent", border: "none", cursor: "pointer", padding: "8px 18px", borderRadius: 14 }}>
                  <Icon name={item.icon} size={22} color={active ? C.primary : C.textMuted} />
                  <span style={{ fontSize: 11, fontWeight: active ? 800 : 500, color: active ? C.primary : C.textMuted }}>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}