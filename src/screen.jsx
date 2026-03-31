import { useState } from "react";

const LAUNDRY_IMG = "https://www.movetocambodia.com/wp-content/uploads/modern-laundry-phnom-penh.jpg";
const MAP_IMG = "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/3:2/w_2560%2Cc_limit/GoogleMapTA.jpg";

const BgImage = ({ height, style: s, children, overlayStyle }) => (
  <div style={{
    height, backgroundImage: `url(${LAUNDRY_IMG})`, backgroundSize: "cover",
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
    notification: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M18 8C18 6.4 17.37 4.88 16.24 3.76C15.12 2.63 13.59 2 12 2C10.41 2 8.88 2.63 7.76 3.76C6.63 4.88 6 6.4 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke={color} strokeWidth="1.8"/><path d="M13.73 21C13.55 21.3 13.3 21.55 12 21.73C10.7 21.9 10.45 21.3 10.27 21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    chevron: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    time: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8"/><path d="M12 7V12L15 15" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    heart: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    share: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><circle cx="18" cy="5" r="3" stroke={color} strokeWidth="1.8"/><circle cx="6" cy="12" r="3" stroke={color} strokeWidth="1.8"/><circle cx="18" cy="19" r="3" stroke={color} strokeWidth="1.8"/><path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    close: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round"/></svg>,
    layers: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    navigate: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 11L22 2L13 21L11 13L3 11Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    filter: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M4 6H20M7 12H17M10 18H14" stroke={color} strokeWidth="2" strokeLinecap="round"/></svg>,
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

const LAUNDRY_PIN_ICON = "https://www.creativefabrica.com/wp-content/uploads/2020/02/10/Laundry-Logo-Graphics-1-8.jpg";

// Pins spread across the CENTER of the screen — 25%–75% x, 40%–70% y
const allPins = [
  { id: 1,  x: "25%", y: "42%", shopId: 1 },
  { id: 2,  x: "55%", y: "38%", shopId: 2 },
  { id: 3,  x: "75%", y: "48%", shopId: 3 },
  { id: 4,  x: "40%", y: "58%", shopId: 4 },
  { id: 5,  x: "18%", y: "60%", name: "Toul Tom Poung Wash", nameKh: "ទួលទំពូង",   rating: 4.3, reviews: 54,  distance: "1.9 km", time: "40 min", status: "open",   price: "$1.10", services: ["Wash", "Dry"],         tags: ["Nearby"]    },
  { id: 6,  x: "68%", y: "55%", name: "Aeon Clean Hub",      nameKh: "អ៊ីអន ក្លែន", rating: 4.7, reviews: 143, distance: "2.5 km", time: "45 min", status: "open",   price: "$1.40", services: ["Wash", "Dry", "Iron"],  tags: ["Premium"]   },
  { id: 7,  x: "82%", y: "42%", name: "Daun Penh Fresh",     nameKh: "ដូនពេញ",       rating: 4.2, reviews: 38,  distance: "3.2 km", time: "55 min", status: "closed", price: "$0.95", services: ["Wash", "Pickup"],        tags: ["Cheap"]     },
  { id: 8,  x: "32%", y: "68%", name: "Olympic Laundry",     nameKh: "អូឡាំពិក",     rating: 4.5, reviews: 88,  distance: "2.8 km", time: "50 min", status: "open",   price: "$1.15", services: ["Wash", "Dry", "Pickup"], tags: ["Pickup"]    },
  { id: 9,  x: "60%", y: "68%", name: "Riverside Clean Co.", nameKh: "ជិតទន្លេ",     rating: 4.6, reviews: 211, distance: "3.5 km", time: "60 min", status: "open",   price: "$1.30", services: ["Wash", "Dry", "Iron"],  tags: ["Top Rated"] },
  { id: 10, x: "78%", y: "62%", name: "Sen Sok Sparkle",     nameKh: "សែនសុខ",       rating: 4.1, reviews: 29,  distance: "4.1 km", time: "70 min", status: "closed", price: "$0.85", services: ["Wash"],                  tags: ["Cheap"]     },
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
        <Icon name="star" size={12} /><span style={{ fontSize: 12, fontWeight: 800, color: C.text }}>{shop.rating}</span>
        <span style={{ fontSize: 10, color: C.textMuted }}>({shop.reviews})</span>
      </div>
      <div style={{ position: "absolute", bottom: 12, left: 14, right: 14, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 800, color: "white" }}>{shop.name}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontStyle: "italic" }}>{shop.nameKh}</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.18)", borderRadius: 10, padding: "5px 10px", backdropFilter: "blur(4px)" }}>
          <span style={{ fontSize: 14, fontWeight: 800, color: "white" }}>{shop.price}<span style={{ fontSize: 10, fontWeight: 500 }}>/kg</span></span>
        </div>
      </div>
    </BgImage>
    <div style={{ padding: "13px 14px 15px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 11, color: C.textSub, fontSize: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Icon name="location" size={12} color={C.textMuted} /><span style={{ fontWeight: 600 }}>{shop.distance}</span>
        </div>
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: C.border }} />
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Icon name="time" size={12} color={C.textMuted} /><span style={{ fontWeight: 600 }}>{shop.time}</span>
        </div>
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: C.border }} />
        <span style={{ fontWeight: 600, color: C.textSub }}>{shop.services.length} services</span>
      </div>
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

// ── MAP PIN ───────────────────────────────────────────────────────────────────
const MapPin = ({ pin, isActive, onClick }) => {
  const shopData = pin.shopId ? shops.find(s => s.id === pin.shopId) : pin;
  const isOpen = shopData.status === "open";
  const size = isActive ? 48 : 38;

  return (
    <div
      onClick={(e) => { e.stopPropagation(); onClick(pin.id); }}
      style={{ position: "relative", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Pulse ring */}
      {isOpen && (
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -55%)",
          width: size + 16, height: size + 16, borderRadius: "50%",
          background: isActive ? "rgba(26,107,232,0.18)" : "rgba(0,196,140,0.14)",
          animation: "pulse 2s infinite",
          pointerEvents: "none",
        }} />
      )}

      {/* Pin outer shell — teardrop shape */}
      <div style={{
        width: size,
        height: size,
        borderRadius: "50% 50% 50% 6px",
        background: isActive
          ? `linear-gradient(145deg, ${C.primary}, ${C.primaryDark})`
          : isOpen ? "#ffffff" : "#e8ecf5",
        border: `2.5px solid ${isActive ? "white" : isOpen ? C.primary : "#b0bace"}`,
        boxShadow: isActive
          ? `0 8px 24px rgba(26,107,232,0.55), 0 0 0 3px rgba(26,107,232,0.2)`
          : isOpen
            ? "0 4px 16px rgba(26,107,232,0.28)"
            : "0 3px 10px rgba(0,0,0,0.14)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
        transform: isActive ? "scale(1.12)" : "scale(1)",
        position: "relative",
      }}>
        {/* Laundry logo image */}
        <img
          src={LAUNDRY_PIN_ICON}
          alt="laundry"
          style={{
            width: isActive ? 32 : 24,
            height: isActive ? 32 : 24,
            objectFit: "cover",
            borderRadius: "50%",
            filter: isOpen ? "none" : "grayscale(60%) opacity(0.6)",
          }}
        />
        {/* Closed overlay tint */}
        {!isOpen && (
          <div style={{ position: "absolute", inset: 0, background: "rgba(160,173,190,0.3)", borderRadius: "inherit" }} />
        )}
      </div>

      {/* Price bubble — always visible on active, hidden otherwise */}
      <div style={{
        position: "absolute",
        top: -22,
        left: "50%",
        transform: "translateX(-50%)",
        background: isActive ? C.primary : "rgba(255,255,255,0.95)",
        color: isActive ? "white" : C.primary,
        fontSize: 10,
        fontWeight: 800,
        padding: "2px 7px",
        borderRadius: 8,
        whiteSpace: "nowrap",
        boxShadow: "0 2px 8px rgba(0,0,0,0.14)",
        border: isActive ? "none" : `1px solid ${C.border}`,
        opacity: isActive ? 1 : 0,
        transition: "opacity 0.18s",
        pointerEvents: "none",
      }}>
        {shopData.price}/kg
      </div>

      {/* Open/closed dot indicator */}
      <div style={{
        position: "absolute",
        bottom: -3,
        right: -3,
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: isOpen ? C.accent : "#a0a8b8",
        border: "2px solid white",
        boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
      }} />
    </div>
  );
};

// ── PIN POPUP ─────────────────────────────────────────────────────────────────
const PinPopup = ({ pin, onClose, onViewShop }) => {
  const shopData = pin.shopId ? shops.find(s => s.id === pin.shopId) : pin;
  const isOpen = shopData.status === "open";

  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      background: C.white,
      borderRadius: "22px 22px 0 0",
      boxShadow: "0 -8px 40px rgba(13,27,53,0.18)",
      padding: "0 0 20px",
      zIndex: 30,
      animation: "slideUp 0.28s cubic-bezier(0.34,1.56,0.64,1)",
    }}>
      {/* Drag handle */}
      <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 8px" }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: C.border }} />
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        style={{ position: "absolute", top: 12, right: 16, width: 32, height: 32, borderRadius: 10, background: C.surface, border: `1px solid ${C.border}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Icon name="close" size={14} color={C.textSub} />
      </button>

      <div style={{ padding: "0 18px" }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
          <div style={{ flex: 1, marginRight: 12 }}>
            <div style={{ fontSize: 17, fontWeight: 800, color: C.text, letterSpacing: -0.3 }}>{shopData.name}</div>
            <div style={{ fontSize: 12, color: C.textSub, fontStyle: "italic", marginTop: 1 }}>{shopData.nameKh}</div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.primary }}>{shopData.price}<span style={{ fontSize: 11, fontWeight: 600, color: C.textSub }}>/kg</span></div>
          </div>
        </div>

        {/* Status + Rating */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5, background: isOpen ? C.accentLight : "#F5F6FA", borderRadius: 20, padding: "4px 10px" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: isOpen ? C.accent : C.textMuted }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: isOpen ? C.accent : C.textMuted }}>{isOpen ? "Open Now" : "Closed"}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Icon name="star" size={13} />
            <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{shopData.rating}</span>
            <span style={{ fontSize: 11, color: C.textMuted }}>({shopData.reviews})</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: "auto" }}>
            <Icon name="location" size={12} color={C.textMuted} />
            <span style={{ fontSize: 12, fontWeight: 600, color: C.textSub }}>{shopData.distance}</span>
            <span style={{ fontSize: 11, color: C.textMuted }}>· {shopData.time}</span>
          </div>
        </div>

        {/* Services */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
          {shopData.services.map(s => <Tag key={s} label={s} color={C.primary} />)}
          {shopData.tags && shopData.tags.map(t => <Tag key={t} label={t} color={C.textSub} />)}
        </div>

        {/* CTA */}
        <button
          onClick={() => onViewShop(shopData)}
          style={{
            width: "100%", padding: "14px",
            background: `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryDark} 100%)`,
            color: "white", borderRadius: 14, border: "none",
            fontSize: 15, fontWeight: 700, cursor: "pointer",
            boxShadow: "0 6px 20px rgba(26,107,232,0.32)",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}
        >
          <Icon name="navigate" size={16} color="white" />
          View Shop Details
        </button>
      </div>
    </div>
  );
};

// ── EXPLORE (MAP) SCREEN ──────────────────────────────────────────────────────
const ExploreScreen = ({ onSelectShop }) => {
  const [activePin, setActivePin] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Open", "24h", "Cheap", "Premium"];

  const activePinData = activePin ? allPins.find(p => p.id === activePin) : null;

//   const getShopForPin = (pin) => {
//     if (pin.shopId) return shops.find(s => s.id === pin.shopId);
//     return pin;
//   };

  const handleViewShop = (shopData) => {
    // If it has a shopId, find the full shop object
    const fullShop = shops.find(s => s.name === shopData.name) || shopData;
    // For extra pins without full shop data, use shops[0] as fallback to navigate
    onSelectShop(fullShop.services ? fullShop : shops[0]);
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: C.bg, position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes pulse { 0%,100%{transform:translate(-50%,-50%) scale(1);opacity:0.6} 50%{transform:translate(-50%,-50%) scale(1.8);opacity:0} }
        @keyframes slideUp { from{transform:translateY(100%);opacity:0} to{transform:translateY(0);opacity:1} }
        @keyframes pinDrop { from{transform:translate(-50%,-80%);opacity:0} to{transform:translate(-50%,-100%);opacity:1} }
      `}</style>

      {/* Top search bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
        padding: "14px 16px 0",
      }}>
        <div style={{
          background: "rgba(255,255,255,0.97)",
          borderRadius: 18,
          boxShadow: "0 4px 24px rgba(13,27,53,0.14)",
          border: `1px solid ${C.border}`,
          overflow: "hidden",
        }}>
          {/* Search input row */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px" }}>
            <Icon name="search" size={17} color={C.textMuted} />
            <span style={{ fontSize: 14, color: C.textMuted, flex: 1 }}>Search in Phnom Penh...</span>
            <div style={{ width: 1, height: 18, background: C.border }} />
            <button style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
              <Icon name="filter" size={16} color={C.primary} />
              <span style={{ fontSize: 12, fontWeight: 700, color: C.primary }}>Filter</span>
            </button>
          </div>
          {/* Filter chips */}
          <div style={{ display: "flex", gap: 7, overflowX: "auto", scrollbarWidth: "none", padding: "0 14px 12px" }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                padding: "5px 14px", borderRadius: 20, border: "none", whiteSpace: "nowrap", flexShrink: 0, cursor: "pointer",
                background: activeFilter === f ? C.primary : C.surface,
                color: activeFilter === f ? "white" : C.textSub,
                fontSize: 12, fontWeight: 700,
                boxShadow: activeFilter === f ? "0 3px 10px rgba(26,107,232,0.3)" : "none",
                transition: "all 0.15s",
              }}>{f}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Map area — full screen behind everything */}
      <div
        style={{ position: "absolute", inset: 0, overflow: "hidden" }}
        onClick={() => setActivePin(null)}
      >
        {/* Map image fills entire screen */}
        <img
          src={MAP_IMG}
          alt="Map"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
          }}
        />

        {/* Subtle overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,53,0.03)" }} />

        {/* Pins — use px offsets so they land in the visible center regardless of search bar */}
        {allPins.map((pin, idx) => (
          <div key={pin.id} style={{
            position: "absolute",
            left: pin.x,
            top: pin.y,
            transform: "translate(-50%, -50%)",
            zIndex: activePin === pin.id ? 20 : 10,
            animation: `pinDrop 0.4s ${idx * 0.06}s ease both`,
          }}>
            <MapPin
              pin={pin}
              isActive={activePin === pin.id}
              onClick={(id) => setActivePin(activePin === id ? null : id)}
            />
          </div>
        ))}

        {/* "You are here" dot */}
        <div style={{ position: "absolute", left: "47%", top: "55%", transform: "translate(-50%,-50%)", zIndex: 15, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 30, height: 30, borderRadius: "50%", background: "rgba(26,107,232,0.15)", animation: "pulse 2s infinite" }} />
          <div style={{ width: 14, height: 14, borderRadius: "50%", background: C.primary, border: "3px solid white", boxShadow: "0 2px 8px rgba(26,107,232,0.5)" }} />
        </div>
      </div>

      {/* Bottom controls */}
      <div style={{
        position: "absolute", right: 14, bottom: activePinData ? 228 : 16,
        display: "flex", flexDirection: "column", gap: 8,
        transition: "bottom 0.3s ease",
        zIndex: 20,
      }}>
        {[
          { icon: "navigate", label: "My location" },
          { icon: "layers", label: "Layers" },
        ].map(btn => (
          <button key={btn.icon} style={{
            width: 44, height: 44, borderRadius: 14,
            background: "rgba(255,255,255,0.97)",
            border: `1px solid ${C.border}`,
            boxShadow: "0 4px 16px rgba(13,27,53,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
          }}>
            <Icon name={btn.icon} size={18} color={C.primary} />
          </button>
        ))}
      </div>

      {/* Shop count badge */}
      <div style={{
        position: "absolute", left: 14, bottom: activePinData ? 228 : 16,
        background: "rgba(255,255,255,0.97)",
        borderRadius: 14, padding: "8px 14px",
        boxShadow: "0 4px 16px rgba(13,27,53,0.12)",
        border: `1px solid ${C.border}`,
        display: "flex", alignItems: "center", gap: 7,
        transition: "bottom 0.3s ease",
        zIndex: 20,
      }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.accent }} />
        <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>10 Shops Found</span>
      </div>

      {/* Popup */}
      {activePinData && (
        <PinPopup
          pin={activePinData}
          onClose={() => setActivePin(null)}
          onViewShop={handleViewShop}
        />
      )}
    </div>
  );
};

// ── HOME ──────────────────────────────────────────────────────────────────────
const HomeScreen = ({ onSelectShop }) => {
  const [chip, setChip] = useState("All");
  const chips = ["All", "24h", "Cheap", "Top Rated", "Nearby"];
  return (
    <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
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
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: C.surface, borderRadius: 14, padding: "12px 16px", border: `1.5px solid ${C.border}` }}>
          <Icon name="search" size={17} color={C.textMuted} />
          <span style={{ fontSize: 14, color: C.textMuted, flex: 1 }}>Search shops, services...</span>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width={15} height={15} viewBox="0 0 24 24" fill="none"><path d="M4 6H20M7 12H17M10 18H14" stroke="white" strokeWidth="2.2" strokeLinecap="round"/></svg>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px 18px 28px" }}>
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

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 22 }}>
          {[{emoji:"⚡",label:"Fastest",val:"25 min"},{emoji:"💰",label:"From",val:"$0.90/kg"},{emoji:"🏪",label:"Nearby",val:"4 Shops"}].map(s => (
            <div key={s.label} style={{ background: C.white, borderRadius: 14, padding: "12px 8px", textAlign: "center", border: `1px solid ${C.border}`, boxShadow: "0 1px 8px rgba(13,27,53,0.04)" }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{s.emoji}</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: C.text }}>{s.val}</div>
              <div style={{ fontSize: 10, color: C.textMuted, marginTop: 1, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 8, overflowX: "auto", scrollbarWidth: "none", marginBottom: 18, paddingBottom: 2 }}>
          {chips.map(c => (
            <button key={c} onClick={() => setChip(c)} style={{ padding: "7px 16px", borderRadius: 20, border: chip===c ? "none" : `1.5px solid ${C.border}`, background: chip===c ? C.primary : C.white, color: chip===c ? C.white : C.textSub, fontSize: 13, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", boxShadow: chip===c ? "0 4px 12px rgba(26,107,232,0.28)" : "none", flexShrink: 0 }}>{c}</button>
          ))}
        </div>

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
              <div style={{ fontSize: 22, fontWeight: 800, color: "white" }}>{shop.name}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontStyle: "italic", marginTop: 2 }}>{shop.nameKh || ""}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "white" }}>{shop.price}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>per kg</div>
            </div>
          </div>
        </div>
      </BgImage>

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
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 8 }}>About</div>
          <div style={{ fontSize: 13, color: C.textSub, lineHeight: 1.75, background: C.white, borderRadius: 14, padding: "13px 15px", border: `1px solid ${C.border}` }}>{shop.desc || "Quality laundry service in Phnom Penh."}</div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 12 }}>Services Offered</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {(shop.services || []).map(s => (
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

        <div style={{ background: `linear-gradient(135deg, ${C.primaryLight}, #daeeff)`, borderRadius: 16, padding: "16px 18px", marginBottom: 22, border: `1px solid ${C.primary}22`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 12, color: C.primary, fontWeight: 600, marginBottom: 2 }}>Starting from</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: C.primary }}>{shop.price}<span style={{ fontSize: 14, fontWeight: 600 }}>/kg</span></div>
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
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 12 }}>Select Services</div>
          {["Wash","Dry","Iron","Pickup"].filter(s => (shop.services || []).includes(s)).map(s => (
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
            <span style={{ fontSize: 24, fontWeight: 800, color: C.primary }}>${total}</span>
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
            <div style={{ fontSize: 21, fontWeight: 800, color: "white" }}>Daro Hang</div>
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 18 }}>
        {[{emoji:"📦",val:"12",label:"Orders"},{emoji:"🏪",val:"3",label:"Shops"},{emoji:"⭐",val:"4.8",label:"Rating"}].map(s => (
          <div key={s.label} style={{ background: C.white, borderRadius: 16, padding: "14px 10px", textAlign: "center", border: `1px solid ${C.border}`, boxShadow: "0 1px 8px rgba(13,27,53,0.05)" }}>
            <div style={{ fontSize: 20, marginBottom: 4 }}>{s.emoji}</div>
            <div style={{ fontSize: 17, fontWeight: 800, color: C.primary }}>{s.val}</div>
            <div style={{ fontSize: 11, color: C.textMuted, marginTop: 1 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ background: C.white, borderRadius: 18, padding: "16px", border: `1px solid ${C.border}`, marginBottom: 14 }}>
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
      <div style={{ background: C.white, borderRadius: 18, padding: "4px 16px", border: `1px solid ${C.border}`, marginBottom: 14 }}>
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

  const handleSelectShop = (shop) => {
    setSelectedShop(shop);
    setSubScreen("detail");
  };

  const renderScreen = () => {
    if (subScreen === "detail" && selectedShop) return <DetailScreen shop={selectedShop} onBack={handleBack} onBook={() => setSubScreen("booking")} />;
    if (subScreen === "booking" && selectedShop) return <BookingScreen shop={selectedShop} onBack={handleBack} onConfirm={() => setSubScreen("tracking")} />;
    if (subScreen === "tracking") return <TrackingScreen onBack={handleBack} />;
    if (tab === "search") return <ExploreScreen onSelectShop={handleSelectShop} />;
    if (tab === "orders") return <HistoryScreen onTrack={() => setSubScreen("tracking")} />;
    if (tab === "profile") return <ProfileScreen />;
    return <HomeScreen onSelectShop={handleSelectShop} />;
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