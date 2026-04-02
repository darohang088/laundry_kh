import { useState, useEffect } from "react";

const LOGO_URL =
  "https://image2url.com/r2/default/images/1775051437513-e80fc1c1-3521-4dd6-92aa-0d8b5d4fee85.png";
const SHOP_IMG =
  "https://image2url.com/r2/default/images/1775051585835-59bbf852-17c7-45d0-a271-63e8bb9653fb.jpeg";
const MAP_IMG =
  "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/3:2/w_2560%2Cc_limit/GoogleMapTA.jpg";
const bannerImages = [
  "https://image2url.com/r2/default/images/1775051682020-fdeeddd9-36af-4cdd-a661-29ee700c51e5.jpg",
  "https://scontent.fpnh22-1.fna.fbcdn.net/v/t39.30808-6/656452300_930851139708844_8021449331658021139_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=RfzBMUlIJWQQ7kNvwGz1-0F&_nc_oc=AdqfJLdbi6hQrGp_8by5j8VWBsoWzn6E75HILgOvBfB4wu-S2HY5MisPYGefo2enHKc&_nc_zt=23&_nc_ht=scontent.fpnh22-1.fna&_nc_gid=wyojzRlS7Zf0ANlwKQZfgg&_nc_ss=7a3a8&oh=00_Af0e46ta87yPZ4CQuT5h7pIl8RScf-9A38NVhUE7W88CZA&oe=69D2EE1E",
  "https://image2url.com/r2/default/images/1775051585835-59bbf852-17c7-45d0-a271-63e8bb9653fb.jpeg",
  "https://image2url.com/r2/default/images/1775051622819-7b2c1a0c-051a-46d3-8505-9be086aff21b.jpg",
];
const C = {
  primary: "#1A6BE8",
  primaryLight: "#EBF2FF",
  primaryDark: "#1355C0",
  accent: "#00C48C",
  accentLight: "#E6FAF4",
  bg: "#F0F3FA",
  white: "#FFFFFF",
  text: "#0D1B35",
  textSub: "#5C6E8A",
  textMuted: "#A4ADBE",
  border: "#E2E8F5",
  red: "#FF4D4F",
  card: "#FFFFFF",
  surface: "#F7F9FE",
};

// ── BANNER SLIDER ──────────────────────────────────────────────────────────────
const BannerSlider = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((p) => (p + 1) % bannerImages.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        position: "relative",
        height: 180,
        borderRadius: 20,
        overflow: "hidden",
        border: "1.5px solid rgba(0,0,0,0.06)",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          width: `${bannerImages.length * 100}%`,
          transform: `translateX(-${index * (100 / bannerImages.length)}%)`,
          transition: "transform 0.6s ease",
        }}
      >
        {bannerImages.map((img, i) => (
          <div
            key={i}
            style={{
              width: `${100 / bannerImages.length}%`,
              height: 180,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={img}
              alt=""
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "blur(20px)",
                transform: "scale(1.1)",
              }}
            />
            <img
              src={img}
              alt="banner"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.15), transparent 60%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 12,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 6,
        }}
      >
        {bannerImages.map((_, i) => (
          <div
            key={i}
            style={{
              width: index === i ? 14 : 6,
              height: 6,
              borderRadius: 10,
              background: index === i ? "#fff" : "rgba(255,255,255,0.5)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const BgImage = ({ height, style: s, children, overlayStyle, src }) => (
  <div
    style={{
      height,
      backgroundImage: `url(${src || SHOP_IMG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#b8cfe8",
      position: "relative",
      ...s,
    }}
  >
    {overlayStyle && (
      <div style={{ position: "absolute", inset: 0, ...overlayStyle }} />
    )}
    {children}
  </div>
);

const Icon = ({ name, size = 20, color = C.textSub }) => {
  const icons = {
    home: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.55 5.45 21 6 21H9M19 10L21 12M19 10V20C19 20.55 18.55 21 18 21H15M9 21C9 21 9 15 12 15C15 15 15 21 15 21M9 21H15"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    search: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.8" />
        <path
          d="M20 20L16.65 16.65"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    orders: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="3"
          width="16"
          height="18"
          rx="2"
          stroke={color}
          strokeWidth="1.8"
        />
        <path
          d="M8 8H16M8 12H16M8 16H12"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    profile: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.8" />
        <path
          d="M4 20C4 17 7.58 15 12 15C16.42 15 20 17 20 20"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    location: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
          fill={color}
        />
      </svg>
    ),
    star: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#FFB800">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
    wash: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke={color}
          strokeWidth="1.8"
        />
        <circle cx="12" cy="13" r="4" stroke={color} strokeWidth="1.8" />
        <circle cx="7" cy="7" r="1" fill={color} />
      </svg>
    ),
    dry: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
        <path
          d="M8 12C8 9.79 9.79 8 12 8"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.8" />
      </svg>
    ),
    iron: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M3 16H16L20 10H8L3 16Z"
          stroke={color}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M3 16V18"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    pickup: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="7"
          width="20"
          height="14"
          rx="2"
          stroke={color}
          strokeWidth="1.8"
        />
        <path
          d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7"
          stroke={color}
          strokeWidth="1.8"
        />
        <path
          d="M12 12V16M10 14H14"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    back: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M19 12H5M5 12L12 19M5 12L12 5"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    check: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M20 6L9 17L4 12"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    phone: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
          fill={color}
        />
      </svg>
    ),
    notification: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M18 8C18 6.4 17.37 4.88 16.24 3.76C15.12 2.63 13.59 2 12 2C10.41 2 8.88 2.63 7.76 3.76C6.63 4.88 6 6.4 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
          stroke={color}
          strokeWidth="1.8"
        />
        <path
          d="M13.73 21C13.55 21.3 13.3 21.55 12 21.73C10.7 21.9 10.45 21.3 10.27 21"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    chevron: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M9 18L15 12L9 6"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    time: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
        <path
          d="M12 7V12L15 15"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    heart: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    share: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="18" cy="5" r="3" stroke={color} strokeWidth="1.8" />
        <circle cx="6" cy="12" r="3" stroke={color} strokeWidth="1.8" />
        <circle cx="18" cy="19" r="3" stroke={color} strokeWidth="1.8" />
        <path
          d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    close: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    layers: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          stroke={color}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    navigate: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M3 11L22 2L13 21L11 13L3 11Z"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    filter: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6H20M7 12H17M10 18H14"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    mapPin: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" fill="white" />
      </svg>
    ),
    directions: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M9 18L3 12L9 6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 12H15C17.21 12 19 13.79 19 16V21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 6L21 12L15 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    calendar: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="2"
          stroke={color}
          strokeWidth="1.8"
        />
        <path
          d="M16 2V6M8 2V6M3 10H21"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    rider: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="5" r="3" stroke={color} strokeWidth="1.8" />
        <path
          d="M8 21H16M12 21V12M8 15C5.79 15 4 13.21 4 11V9H20V11C20 13.21 18.21 15 16 15"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    moto: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="5" cy="17" r="3" stroke={color} strokeWidth="1.8" />
        <circle cx="19" cy="17" r="3" stroke={color} strokeWidth="1.8" />
        <path
          d="M5 17H3V13L6 8H14L16 11H19V14"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 8L16 11M9 8V13H16"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    customer: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.8" />
        <path
          d="M4 20C4 17 7.58 15 12 15C16.42 15 20 17 20 20"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    bag: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z"
          stroke={color}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M3 6H21M16 10C16 12.21 14.21 14 12 14C9.79 14 8 12.21 8 10"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  };
  return (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      {icons[name] || null}
    </span>
  );
};

const Tag = ({ label, color = C.primary }) => (
  <span
    style={{
      padding: "3px 9px",
      borderRadius: 20,
      background: color + "15",
      color,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 0.2,
    }}
  >
    {label}
  </span>
);

const PrimaryBtn = ({ label, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      width: "100%",
      padding: "15px",
      background: disabled
        ? C.textMuted
        : `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryDark} 100%)`,
      color: C.white,
      borderRadius: 16,
      border: "none",
      fontSize: 16,
      fontWeight: 700,
      cursor: disabled ? "default" : "pointer",
      boxShadow: disabled ? "none" : "0 8px 24px rgba(26,107,232,0.32)",
      letterSpacing: 0.2,
    }}
  >
    {label}
  </button>
);

const StarDisplay = ({ rating, size = 13, showCount = true, reviews }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
      <div style={{ display: "flex", gap: 1 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24">
            {i <= full ? (
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="#FFB800"
              />
            ) : i === full + 1 && half ? (
              <>
                <defs>
                  <linearGradient id={`h${i}`}>
                    <stop offset="50%" stopColor="#FFB800" />
                    <stop offset="50%" stopColor="#E2E8F5" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill={`url(#h${i})`}
                />
              </>
            ) : (
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="#E2E8F5"
              />
            )}
          </svg>
        ))}
      </div>
      <span style={{ fontSize: size, fontWeight: 800, color: C.text }}>
        {rating}
      </span>
      {showCount && reviews && (
        <span style={{ fontSize: size - 1, color: C.textMuted }}>
          ({reviews})
        </span>
      )}
    </div>
  );
};

// ── DATA ───────────────────────────────────────────────────────────────────────
const shops = [
  {
    id: 1,
    name: "Clean24 - BKK1",
    nameKh: "ឃ្លីន24 បឹងកេងកង",
    rating: 4.7,
    reviews: 210,
    distance: "0.5 km",
    time: "10 min",
    status: "open",
    tags: ["24h", "Popular"],
    price: "$1.25",
    services: ["Wash", "Dry", "Iron", "Pickup", "Delivery"],
    desc: "Main Clean24 branch in BKK1. Open 24h with fast machines and modern service.",
    location: "Street 278, BKK1, Phnom Penh",
    tel: "010 123 456",
  },
  {
    id: 2,
    name: "Clean24 - Toul Tom Poung",
    nameKh: "ឃ្លីន24 ទួលទំពូង",
    rating: 4.6,
    reviews: 180,
    distance: "1.2 km",
    time: "15 min",
    status: "open",
    tags: ["24h", "Nearby"],
    price: "$1.10",
    services: ["Wash", "Dry", "Iron", "Pickup"],
    desc: "Popular branch near Russian Market. Clean machines and affordable pricing.",
    location: "Toul Tom Poung, Phnom Penh",
    tel: "012 345 678",
  },
  {
    id: 3,
    name: "Clean24 - Boeng Keng Kang 2",
    nameKh: "ឃ្លីន24 បឹងកេងកង 2",
    rating: 4.5,
    reviews: 150,
    distance: "1.8 km",
    time: "20 min",
    status: "open",
    tags: ["24h"],
    price: "$1.20",
    services: ["Wash", "Dry", "Iron"],
    desc: "Convenient self-service laundry with 24h access and secure environment.",
    location: "BKK2, Phnom Penh",
    tel: "011 222 333",
  },
  {
    id: 4,
    name: "Clean24 - Boeng Kak",
    nameKh: "ឃ្លីន24 បឹងកក់",
    rating: 4.4,
    reviews: 120,
    distance: "2.5 km",
    time: "30 min",
    status: "open",
    tags: ["24h", "Cheap"],
    price: "$1.00",
    services: ["Wash", "Dry"],
    desc: "Affordable Clean24 branch in Boeng Kak area. Good for quick wash.",
    location: "Boeng Kak, Phnom Penh",
    tel: "015 888 999",
  },
  {
    id: 5,
    name: "Clean24 - Sen Sok",
    nameKh: "ឃ្លីន24 សែនសុខ",
    rating: 4.6,
    reviews: 140,
    distance: "4.0 km",
    time: "35 min",
    status: "open",
    tags: ["24h", "Spacious"],
    price: "$1.15",
    services: ["Wash", "Dry", "Iron", "Pickup"],
    desc: "Spacious branch in Sen Sok with many machines and parking available.",
    location: "Sen Sok, Phnom Penh",
    tel: "017 456 789",
  },
  {
    id: 6,
    name: "Clean24 - Chbar Ampov",
    nameKh: "ឃ្លីន24 ច្បារអំពៅ",
    rating: 4.3,
    reviews: 90,
    distance: "5.5 km",
    time: "40 min",
    status: "open",
    tags: ["24h"],
    price: "$0.95",
    services: ["Wash", "Dry"],
    desc: "Reliable 24h laundry service in Chbar Ampov area.",
    location: "Chbar Ampov, Phnom Penh",
    tel: "016 222 111",
  },
];

const mapToPercent = (lat, lng) => {
  const latMin = 11.515,
    latMax = 11.645,
    lngMin = 104.845,
    lngMax = 104.935;
  const x = (((lng - lngMin) / (lngMax - lngMin)) * 75 + 12).toFixed(1) + "%";
  const y =
    ((1 - (lat - latMin) / (latMax - latMin)) * 55 + 18).toFixed(1) + "%";
  return { x, y };
};

const clean24Pins = [
  {
    id: 1,
    lat: 11.5355253,
    lng: 104.9136226,
    name: "Clean24 Toul Tompong",
    nameKh: "ហាងបោកគក់ ទួលទំពូង",
    rating: 4.8,
    reviews: 312,
    status: "open",
    type: "Laundry",
    price: "$1.10",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11.5355253,104.9136226",
    services: ["Wash", "Dry", "Iron"],
  },
  {
    id: 2,
    lat: 11.5693953,
    lng: 104.8535036,
    name: "Clean24 Chouk Meas",
    nameKh: "ហាងបោកគក់ ជូកម៉ាស",
    rating: 4.9,
    reviews: 278,
    status: "open",
    type: "Laundry",
    price: "$1.10",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11.5693953,104.8535036",
    services: ["Wash", "Dry", "Pickup"],
  },
  {
    id: 3,
    lat: 11.5568032,
    lng: 104.8847094,
    name: "Clean24 Street 2002",
    nameKh: "ហាងបោកគក់ ផ្លូវ 2002",
    rating: 4.8,
    reviews: 195,
    status: "open",
    type: "Laundromat",
    price: "$1.00",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11.5568032,104.8847094",
    services: ["Wash", "Dry", "Iron", "Pickup"],
  },
  {
    id: 4,
    lat: 11.5565045,
    lng: 104.8927733,
    name: "Clean24 Samnang 12",
    nameKh: "ហាងបោកគក់ សំណាង 12",
    rating: 4.7,
    reviews: 143,
    status: "open",
    type: "Laundry",
    price: "$1.10",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11.5565045,104.8927733",
    services: ["Wash", "Dry"],
  },
  {
    id: 5,
    lat: 11.5254387,
    lng: 104.8589548,
    name: "Clean24 Toul Pongro",
    nameKh: "ហាងបោកគក់ ទួលពង្រ",
    rating: 5.0,
    reviews: 89,
    status: "open",
    type: "Laundry service",
    price: "$1.20",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11.5254387,104.8589548",
    services: ["Wash", "Dry", "Iron"],
  },
  {
    id: 6,
    lat: 11.530196,
    lng: 104.886961,
    name: "Clean24 Chamkardong",
    nameKh: "ហាងបោកគក់ ចំការដូង",
    rating: 5.0,
    reviews: 67,
    status: "closed",
    type: "Laundry",
    price: "$1.10",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11.530196,104.886961",
    services: ["Wash", "Dry"],
  },
  {
    id: 7,
    lat: 11.5234374,
    lng: 104.8970223,
    name: "Clean24 Laundry 371",
    nameKh: "ហាងបោកគក់ 371",
    rating: 5.0,
    reviews: 112,
    status: "open",
    type: "Laundry service",
    price: "$1.00",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11.5234374,104.8970223",
    services: ["Wash", "Dry", "Pickup"],
  },
  {
    id: 8,
    lat: 11.5709193,
    lng: 104.9259145,
    name: "Clean24 Psar Kandal",
    nameKh: "ហាងបោកគក់ ផ្សារកណ្ដាល",
    rating: 4.8,
    reviews: 224,
    status: "open",
    type: "Laundry",
    price: "$1.10",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11.5709193,104.9259145",
    services: ["Wash", "Dry", "Iron"],
  },
  {
    id: 9,
    lat: 11.632535,
    lng: 104.9008479,
    name: "Clean24 Chrang Chamres",
    nameKh: "ហាងបោកគក់ ចរង់ចំរេស",
    rating: 5.0,
    reviews: 58,
    status: "open",
    type: "Laundry",
    price: "$1.00",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11.632535,104.9008479",
    services: ["Wash", "Dry"],
  },
  {
    id: 10,
    lat: 11.5934038,
    lng: 104.9112559,
    name: "Clean24 Toul Sangkae",
    nameKh: "ហាងបោកគក់ ទួលសង្កែ",
    rating: 4.9,
    reviews: 176,
    status: "open",
    type: "Laundry",
    price: "$1.10",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11.5934038,104.9112559",
    services: ["Wash", "Dry", "Iron"],
  },
  {
    id: 11,
    lat: 11.6155597,
    lng: 104.9082346,
    name: "Clean24 Wat Toul",
    nameKh: "ហាងបោកគក់ វត្តទួល",
    rating: 4.9,
    reviews: 134,
    status: "open",
    type: "Laundry service",
    price: "$1.10",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11.6155597,104.9082346",
    services: ["Wash", "Dry", "Pickup"],
  },
  {
    id: 12,
    lat: 11.5446389,
    lng: 104.8835833,
    name: "Clean24 Sala",
    nameKh: "ហាងបោកគក់ សាលា",
    rating: 4.9,
    reviews: 98,
    status: "open",
    type: "Laundry",
    price: "$1.00",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11.5446389,104.8835833",
    services: ["Wash", "Dry"],
  },
  {
    id: 13,
    lat: 11.5836313,
    lng: 104.9090526,
    name: "Clean24 Boeung Kak",
    nameKh: "ហាងបោកគក់ បឹងកក់",
    rating: 4.7,
    reviews: 203,
    status: "open",
    type: "Laundry service",
    price: "$1.10",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11.5836313,104.9090526",
    services: ["Wash", "Dry", "Iron"],
  },
].map((p) => ({ ...p, ...mapToPercent(p.lat, p.lng) }));

const orderHistory = [
  {
    id: "LG-2041",
    shop: "CleanKing Laundry",
    date: "Mar 28",
    price: "$6.50",
    kg: "5.4",
    services: "Wash + Iron",
  },
  {
    id: "LG-2038",
    shop: "FreshNow Wash",
    date: "Mar 22",
    price: "$3.60",
    kg: "4.0",
    services: "Wash + Pickup",
  },
  {
    id: "LG-2031",
    shop: "SkyClean Express",
    date: "Mar 15",
    price: "$9.00",
    kg: "5.0",
    services: "Wash + Iron + Dry",
  },
];

// ── SHOP CARD ──────────────────────────────────────────────────────────────────
const ShopCard = ({ shop, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background: C.card,
      borderRadius: 20,
      boxShadow: "0 3px 18px rgba(13,27,53,0.08)",
      border: `1px solid ${C.border}`,
      overflow: "hidden",
      cursor: "pointer",
    }}
  >
    <BgImage height={165}>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          background:
            "linear-gradient(to top, rgba(13,27,53,0.65), transparent)",
        }}
      />
      <div style={{ position: "absolute", top: 12, left: 12 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            background:
              shop.status === "open"
                ? "rgba(0,196,140,0.88)"
                : "rgba(80,90,110,0.82)",
            borderRadius: 20,
            padding: "4px 10px",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "white",
            }}
          />
          <span style={{ fontSize: 11, color: "white", fontWeight: 700 }}>
            {shop.status === "open" ? "Open" : "Closed"}
          </span>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          display: "flex",
          alignItems: "center",
          gap: 4,
          background: "rgba(255,255,255,0.95)",
          borderRadius: 20,
          padding: "4px 10px",
        }}
      >
        <Icon name="star" size={12} />
        <span style={{ fontSize: 12, fontWeight: 800, color: C.text }}>
          {shop.rating}
        </span>
        <span style={{ fontSize: 10, color: C.textMuted }}>
          ({shop.reviews})
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: 14,
          right: 14,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div>
          <div style={{ fontSize: 15, fontWeight: 800, color: "white" }}>
            {shop.name}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.7)",
              fontStyle: "italic",
            }}
          >
            {shop.nameKh}
          </div>
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.18)",
            borderRadius: 10,
            padding: "5px 10px",
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 800, color: "white" }}>
            {shop.price}
            <span style={{ fontSize: 10, fontWeight: 500 }}>/kg</span>
          </span>
        </div>
      </div>
    </BgImage>
    <div style={{ padding: "13px 14px 15px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 11,
          color: C.textSub,
          fontSize: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Icon name="location" size={12} color={C.textMuted} />
          <span style={{ fontWeight: 600 }}>{shop.distance}</span>
        </div>
        <div
          style={{
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: C.border,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Icon name="time" size={12} color={C.textMuted} />
          <span style={{ fontWeight: 600 }}>{shop.time}</span>
        </div>
        <div
          style={{
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: C.border,
          }}
        />
        <span style={{ fontWeight: 600 }}>{shop.services.length} services</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {shop.tags.map((t) => (
            <Tag key={t} label={t} color={C.primary} />
          ))}
          {shop.services.slice(0, 2).map((s) => (
            <Tag key={s} label={s} color={C.textSub} />
          ))}
        </div>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            background: C.primaryLight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginLeft: 8,
          }}
        >
          <Icon name="chevron" size={15} color={C.primary} />
        </div>
      </div>
    </div>
  </div>
);

// ── ALL SHOPS SCREEN ───────────────────────────────────────────────────────────
const AllShopsScreen = ({ onBack, onSelectShop }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("distance");
  const filters = ["All", "24h", "Cheap", "Top Rated", "Pickup"];

  const filtered = shops
    .filter((s) => {
      if (filter === "All") return true;
      if (filter === "24h") return s.tags.includes("24h");
      if (filter === "Cheap") return parseFloat(s.price.replace("$", "")) < 1.1;
      if (filter === "Top Rated") return s.rating >= 4.6;
      if (filter === "Pickup") return s.services.includes("Pickup");
      return true;
    })
    .sort((a, b) => {
      if (sort === "distance")
        return parseFloat(a.distance) - parseFloat(b.distance);
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "price")
        return (
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
        );
      return 0;
    });

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        background: C.bg,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: C.white,
          padding: "16px 18px 0",
          borderBottom: `1px solid ${C.border}`,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <button
            onClick={onBack}
            style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              background: C.bg,
              border: `1px solid ${C.border}`,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="back" size={18} color={C.text} />
          </button>
          <div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: C.text,
                letterSpacing: -0.3,
              }}
            >
              All Shops
            </div>
            <div style={{ fontSize: 12, color: C.textSub }}>
              {filtered.length} shops found near you
            </div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
            {["distance", "rating", "price"].map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                style={{
                  padding: "5px 10px",
                  borderRadius: 10,
                  border: "none",
                  background: sort === s ? C.primary : C.surface,
                  color: sort === s ? "white" : C.textSub,
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            scrollbarWidth: "none",
            paddingBottom: 14,
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "6px 16px",
                borderRadius: 20,
                border: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
                cursor: "pointer",
                background: filter === f ? C.primary : C.surface,
                color: filter === f ? "white" : C.textSub,
                fontSize: 12,
                fontWeight: 700,
                boxShadow:
                  filter === f ? "0 3px 10px rgba(26,107,232,0.3)" : "none",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 18px 28px" }}>
        {filtered.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 0",
              color: C.textMuted,
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 10 }}>🔍</div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>No shops found</div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {filtered.map((shop) => (
              <ShopCard
                key={shop.id}
                shop={shop}
                onClick={() => onSelectShop(shop)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ── MAP PIN ────────────────────────────────────────────────────────────────────
const MapPin = ({ pin, isActive, onClick }) => {
  const isOpen = pin.status === "open";
  const size = isActive ? 46 : 36;
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClick(pin.id);
      }}
      style={{
        position: "relative",
        cursor: "pointer",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isOpen && isActive && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: size + 20,
            height: size + 20,
            borderRadius: "50%",
            background: "rgba(26,107,232,0.15)",
            animation: "pulse 1.8s infinite",
            pointerEvents: "none",
          }}
        />
      )}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: isActive ? "50% 50% 50% 8px" : "50% 50% 50% 6px",
          background: isActive
            ? `linear-gradient(145deg, ${C.primary}, ${C.primaryDark})`
            : isOpen
            ? C.white
            : "#eef0f5",
          border: `2.5px solid ${
            isActive ? "white" : isOpen ? C.primary : "#b8c0ce"
          }`,
          boxShadow: isActive
            ? `0 8px 28px rgba(26,107,232,0.55), 0 0 0 3px rgba(26,107,232,0.2)`
            : isOpen
            ? "0 4px 14px rgba(26,107,232,0.25)"
            : "0 2px 8px rgba(0,0,0,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
          transform: isActive ? "scale(1.1)" : "scale(1)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={LOGO_URL}
          alt="C24"
          style={{
            width: isActive ? 32 : 22,
            height: isActive ? 32 : 22,
            objectFit: "cover",
            borderRadius: "50%",
            filter: isOpen ? "none" : "grayscale(60%) opacity(0.55)",
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        {!isOpen && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(160,173,190,0.3)",
              borderRadius: "inherit",
            }}
          />
        )}
      </div>
      {isActive && (
        <div
          style={{
            position: "absolute",
            top: -20,
            left: "50%",
            transform: "translateX(-50%)",
            background: C.primary,
            color: "white",
            fontSize: 10,
            fontWeight: 800,
            padding: "2px 7px",
            borderRadius: 8,
            whiteSpace: "nowrap",
            boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
            pointerEvents: "none",
          }}
        >
          {pin.price}/kg
        </div>
      )}
      <div
        style={{
          position: "absolute",
          bottom: -2,
          right: -2,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: isOpen ? C.accent : "#a0a8b8",
          border: "2px solid white",
          boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
        }}
      />
    </div>
  );
};

// ── PIN POPUP ──────────────────────────────────────────────────────────────────
const PinPopup = ({ pin, onClose, onViewShop }) => {
  const isOpen = pin.status === "open";
  const svcIcons = { Wash: "wash", Dry: "dry", Iron: "iron", Pickup: "pickup" };
  const svcColors = {
    Wash: "#1A6BE8",
    Dry: "#00C48C",
    Iron: "#FF8C00",
    Pickup: "#9B59B6",
  };
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: C.white,
        borderRadius: "24px 24px 0 0",
        boxShadow: "0 -10px 40px rgba(13,27,53,0.18)",
        zIndex: 30,
        animation: "slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 12,
          paddingBottom: 6,
        }}
      >
        <div
          style={{
            width: 38,
            height: 4,
            borderRadius: 2,
            background: C.border,
          }}
        />
      </div>
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 14,
          right: 16,
          width: 32,
          height: 32,
          borderRadius: 10,
          background: C.surface,
          border: `1px solid ${C.border}`,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="close" size={14} color={C.textSub} />
      </button>
      <div style={{ padding: "4px 18px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            marginBottom: 12,
            paddingRight: 44,
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: C.text,
                letterSpacing: -0.3,
                lineHeight: 1.2,
              }}
            >
              {pin.name}
            </div>
            <div
              style={{
                fontSize: 12,
                color: C.textSub,
                fontStyle: "italic",
                marginTop: 2,
              }}
            >
              {pin.nameKh}
            </div>
            <div style={{ marginTop: 5 }}>
              <StarDisplay
                rating={pin.rating}
                reviews={pin.reviews}
                size={12}
              />
            </div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.primary }}>
              {pin.price}
            </div>
            <div style={{ fontSize: 11, color: C.textMuted }}>/kg</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 14,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              background: isOpen ? C.accentLight : "#F5F6FA",
              borderRadius: 20,
              padding: "4px 10px",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: isOpen ? C.accent : C.textMuted,
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: isOpen ? C.accent : C.textMuted,
              }}
            >
              {isOpen ? "Open Now" : "Closed"}
            </span>
          </div>
          <div
            style={{
              fontSize: 11,
              color: C.textSub,
              background: C.surface,
              borderRadius: 20,
              padding: "4px 10px",
              fontWeight: 600,
              border: `1px solid ${C.border}`,
            }}
          >
            {pin.type}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginLeft: "auto",
            }}
          >
            <Icon name="location" size={12} color={C.textMuted} />
            <span style={{ fontSize: 11, fontWeight: 700, color: C.textSub }}>
              Phnom Penh
            </span>
          </div>
        </div>
        <div style={{ marginBottom: 14 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: C.textMuted,
              letterSpacing: 0.5,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Services
          </div>
          <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
            {pin.services.map((s) => (
              <div
                key={s}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  background: svcColors[s] + "12",
                  borderRadius: 10,
                  padding: "5px 10px",
                }}
              >
                <Icon name={svcIcons[s]} size={13} color={svcColors[s]} />
                <span
                  style={{ fontSize: 12, fontWeight: 700, color: svcColors[s] }}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            background: C.surface,
            borderRadius: 12,
            padding: "10px 14px",
            marginBottom: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: `1px solid ${C.border}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.primary }}>
              {pin.rating}
            </div>
            <div>
              <StarDisplay
                rating={pin.rating}
                reviews={null}
                size={12}
                showCount={false}
              />
              <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>
                {pin.reviews} reviews
              </div>
            </div>
          </div>
          <div style={{ width: 1, height: 36, background: C.border }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: C.text }}>
              {pin.services.length}
            </div>
            <div style={{ fontSize: 11, color: C.textMuted }}>Services</div>
          </div>
          <div style={{ width: 1, height: 36, background: C.border }} />
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: isOpen ? C.accent : C.textMuted,
              }}
            >
              {isOpen ? "Open" : "Closed"}
            </div>
            <div style={{ fontSize: 11, color: C.textMuted }}>Status</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <a
            href={pin.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ flex: 1, textDecoration: "none" }}
          >
            <button
              style={{
                width: "100%",
                padding: "13px",
                background: "white",
                color: C.primary,
                border: `1.5px solid ${C.primary}`,
                borderRadius: 14,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 7,
                boxShadow: "0 2px 8px rgba(26,107,232,0.12)",
              }}
            >
              <Icon name="mapPin" size={16} color={C.primary} />
              Directions
            </button>
          </a>
          <button
            onClick={() => onViewShop(pin)}
            style={{
              flex: 2,
              padding: "13px",
              background: `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryDark} 100%)`,
              color: "white",
              border: "none",
              borderRadius: 14,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              boxShadow: "0 6px 20px rgba(26,107,232,0.32)",
            }}
          >
            <Icon name="navigate" size={16} color="white" />
            View & Book
          </button>
        </div>
      </div>
    </div>
  );
};

// ── EXPLORE SCREEN ─────────────────────────────────────────────────────────────
const ExploreScreen = ({ onSelectShop }) => {
  const [activePin, setActivePin] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Open", "Top Rated", "Cheap", "Nearby"];
  const activePinData = activePin
    ? clean24Pins.find((p) => p.id === activePin)
    : null;
  const filtered = clean24Pins.filter((p) => {
    if (activeFilter === "Open") return p.status === "open";
    if (activeFilter === "Top Rated") return p.rating >= 4.9;
    if (activeFilter === "Cheap")
      return parseFloat(p.price.replace("$", "")) <= 1.0;
    return true;
  });
  const handleViewShop = (pinData) => {
    onSelectShop({
      name: pinData.name,
      nameKh: pinData.nameKh,
      rating: pinData.rating,
      reviews: pinData.reviews,
      distance: "See map",
      time: "—",
      status: pinData.status,
      tags: [pinData.type],
      price: pinData.price,
      services: pinData.services,
      desc: `${pinData.name} is a trusted Clean24 franchise laundry in Phnom Penh offering quality wash & fold services.`,
    });
  };
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        background: C.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes pulse{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:0.5}50%{transform:translate(-50%,-50%) scale(2.2);opacity:0}}
        @keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes pinDrop{from{transform:translateY(-12px);opacity:0}to{transform:translateY(0);opacity:1}}
      `}</style>
      <div
        style={{ position: "absolute", inset: 0, overflow: "hidden" }}
        onClick={() => setActivePin(null)}
      >
        <img
          src={MAP_IMG}
          alt="Map"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(13,27,53,0.04)",
          }}
        />
        {filtered.map((pin, idx) => (
          <div
            key={pin.id}
            style={{
              position: "absolute",
              left: pin.x,
              top: pin.y,
              transform: "translate(-50%, -50%)",
              zIndex: activePin === pin.id ? 20 : 10,
              animation: `pinDrop 0.35s ${idx * 0.05}s ease both`,
            }}
          >
            <MapPin
              pin={pin}
              isActive={activePin === pin.id}
              onClick={(id) => setActivePin(activePin === id ? null : id)}
            />
          </div>
        ))}
        <div
          style={{
            position: "absolute",
            left: "49%",
            top: "52%",
            transform: "translate(-50%,-50%)",
            zIndex: 15,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "rgba(26,107,232,0.15)",
              animation: "pulse 2s infinite",
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: C.primary,
              border: "3px solid white",
              boxShadow: "0 2px 8px rgba(26,107,232,0.5)",
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          padding: "12px 14px 0",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.97)",
            borderRadius: 18,
            boxShadow: "0 4px 24px rgba(13,27,53,0.14)",
            border: `1px solid ${C.border}`,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "10px 14px",
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: 7,
                overflow: "hidden",
                flexShrink: 0,
                background: C.primaryLight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={LOGO_URL}
                alt="c24"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML =
                    "<span style='font-size:11px;font-weight:800;color:#1A6BE8'>C</span>";
                }}
              />
            </div>
            <span
              style={{ fontSize: 13, fontWeight: 700, color: C.text, flex: 1 }}
            >
              Clean24 Laundry – Phnom Penh
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                background: C.accentLight,
                borderRadius: 20,
                padding: "3px 10px",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: C.accent,
                }}
              />
              <span style={{ fontSize: 11, fontWeight: 700, color: C.accent }}>
                {filtered.filter((p) => p.status === "open").length} Open
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 7,
              overflowX: "auto",
              scrollbarWidth: "none",
              padding: "0 14px 10px",
            }}
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: "5px 14px",
                  borderRadius: 20,
                  border: "none",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  cursor: "pointer",
                  background: activeFilter === f ? C.primary : C.surface,
                  color: activeFilter === f ? "white" : C.textSub,
                  fontSize: 12,
                  fontWeight: 700,
                  boxShadow:
                    activeFilter === f
                      ? "0 3px 10px rgba(26,107,232,0.3)"
                      : "none",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 14,
          bottom: activePinData ? 340 : 16,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          transition: "bottom 0.3s ease",
          zIndex: 20,
        }}
      >
        {["navigate", "layers"].map((icon) => (
          <button
            key={icon}
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              background: "rgba(255,255,255,0.97)",
              border: `1px solid ${C.border}`,
              boxShadow: "0 4px 16px rgba(13,27,53,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Icon name={icon} size={18} color={C.primary} />
          </button>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: 14,
          bottom: activePinData ? 340 : 16,
          background: "rgba(255,255,255,0.97)",
          borderRadius: 14,
          padding: "8px 14px",
          boxShadow: "0 4px 16px rgba(13,27,53,0.12)",
          border: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          gap: 7,
          transition: "bottom 0.3s ease",
          zIndex: 20,
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 5,
            overflow: "hidden",
            background: C.primaryLight,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={LOGO_URL}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>
        <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>
          {filtered.length} Shops Found
        </span>
      </div>
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

// ── HOME SCREEN ────────────────────────────────────────────────────────────────
const HomeScreen = ({ onSelectShop, onSeeAll }) => (
  <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
    <div
      style={{
        background: C.white,
        padding: "18px 20px 20px",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 16,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginBottom: 5,
            }}
          >
            <Icon name="location" size={13} color={C.primary} />
            <span style={{ fontSize: 12, color: C.primary, fontWeight: 700 }}>
              Phnom Penh, BKK1
            </span>
            <Icon name="chevron" size={12} color={C.primary} />
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: C.text,
              letterSpacing: -0.5,
              lineHeight: 1.2,
            }}
          >
            Good morning, Sovana Smey 👋
          </div>
          <div style={{ fontSize: 13, color: C.textSub, marginTop: 3 }}>
            Find a trusted laundry near you
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <button
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              background: C.primaryLight,
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="notification" size={20} color={C.primary} />
          </button>
          <div
            style={{
              position: "absolute",
              top: 9,
              right: 9,
              width: 8,
              height: 8,
              background: C.red,
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
        </div>
      </div>
    </div>
    <div style={{ padding: "20px 18px 28px" }}>
      <div style={{ marginBottom: 22 }}>
        <BannerSlider />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: C.text,
            letterSpacing: -0.3,
          }}
        >
          Nearby Shops
        </div>
        <button
          onClick={onSeeAll}
          style={{
            fontSize: 13,
            color: C.primary,
            fontWeight: 700,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          See all →
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {shops.slice(0, 4).map((shop) => (
          <ShopCard
            key={shop.id}
            shop={shop}
            onClick={() => onSelectShop(shop)}
          />
        ))}
      </div>
    </div>
  </div>
);

// ── DETAIL SCREEN ──────────────────────────────────────────────────────────────
const DetailScreen = ({ shop, onBack, onBook }) => {
  const svcIcons = { Wash: "wash", Dry: "dry", Iron: "iron", Pickup: "pickup" };
  const svcColors = {
    Wash: "#1A6BE8",
    Dry: "#00C48C",
    Iron: "#FF8C00",
    Pickup: "#9B59B6",
  };
  return (
    <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
      <BgImage
        height={255}
        overlayStyle={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(13,27,53,0.65) 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            right: 16,
            display: "flex",
            justifyContent: "space-between",
            zIndex: 2,
          }}
        >
          <button
            onClick={onBack}
            style={{
              width: 40,
              height: 40,
              borderRadius: 13,
              background: "rgba(255,255,255,0.9)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="back" size={18} color={C.text} />
          </button>
          <div style={{ display: "flex", gap: 8 }}>
            {["heart", "share"].map((i) => (
              <button
                key={i}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 13,
                  background: "rgba(255,255,255,0.9)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name={i} size={17} color={C.text} />
              </button>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 18,
            left: 18,
            right: 18,
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "white" }}>
                {shop.name}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.7)",
                  fontStyle: "italic",
                  marginTop: 2,
                }}
              >
                {shop.nameKh || ""}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "white" }}>
                {shop.price}
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>
                per kg
              </div>
            </div>
          </div>
        </div>
      </BgImage>
      <div
        style={{
          background: C.white,
          padding: "13px 18px",
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: shop.status === "open" ? C.accent : C.textMuted,
            }}
          />
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: shop.status === "open" ? C.accent : C.textMuted,
            }}
          >
            {shop.status === "open" ? "Open Now" : "Closed"}
          </span>
        </div>
        <div style={{ width: 1, height: 14, background: C.border }} />
        <StarDisplay rating={shop.rating} reviews={shop.reviews} size={12} />
        <div style={{ marginLeft: "auto" }}>
          <Icon name="location" size={13} color={C.textMuted} />
          <span
            style={{
              fontSize: 12,
              color: C.textSub,
              fontWeight: 600,
              marginLeft: 4,
            }}
          >
            {shop.distance}
          </span>
        </div>
      </div>
      <div style={{ padding: "18px 18px 28px" }}>
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: C.text,
              marginBottom: 8,
            }}
          >
            About
          </div>
          <div
            style={{
              fontSize: 13,
              color: C.textSub,
              lineHeight: 1.75,
              background: C.white,
              borderRadius: 14,
              padding: "13px 15px",
              border: `1px solid ${C.border}`,
            }}
          >
            {shop.desc || "Quality laundry service in Phnom Penh."}
          </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: C.text,
              marginBottom: 12,
            }}
          >
            Services Offered
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
          >
            {(shop.services || []).map((s) => (
              <div
                key={s}
                style={{
                  background: C.white,
                  borderRadius: 14,
                  padding: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  border: `1px solid ${C.border}`,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: svcColors[s] + "14",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon name={svcIcons[s]} size={20} color={svcColors[s]} />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>
                    {s}
                  </div>
                  <div style={{ fontSize: 11, color: C.textMuted }}>
                    Available
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            background: `linear-gradient(135deg, ${C.primaryLight}, #daeeff)`,
            borderRadius: 16,
            padding: "16px 18px",
            marginBottom: 22,
            border: `1px solid ${C.primary}22`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                color: C.primary,
                fontWeight: 600,
                marginBottom: 2,
              }}
            >
              Starting from
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: C.primary }}>
              {shop.price}
              <span style={{ fontSize: 14, fontWeight: 600 }}>/kg</span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: C.textSub }}>Minimum order</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: C.text }}>
              2 kg
            </div>
          </div>
        </div>
        <PrimaryBtn label="Book This Shop" onClick={onBook} />
      </div>
    </div>
  );
};

// ── BOOKING SCREEN ─────────────────────────────────────────────────────────────
const BookingScreen = ({ shop, onBack, onConfirm }) => {
  const [services, setServices] = useState({
    Wash: true,
    Dry: false,
    Iron: false,
    Pickup: true,
  });
  const [time, setTime] = useState("now");
  const [kg, setKg] = useState(3);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const svcPrice = { Wash: 1.2, Dry: 0.8, Iron: 1.0, Pickup: 0.5 };
  const svcColors = {
    Wash: "#1A6BE8",
    Dry: "#00C48C",
    Iron: "#FF8C00",
    Pickup: "#9B59B6",
  };
  const svcIcons = { Wash: "wash", Dry: "dry", Iron: "iron", Pickup: "pickup" };
  const selected = Object.keys(services).filter((k) => services[k]);
  const total = selected.reduce((s, k) => s + svcPrice[k] * kg, 0).toFixed(2);

  const days = Array.from({ length: 5 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      label:
        i === 0
          ? "Today"
          : i === 1
          ? "Tomorrow"
          : d.toLocaleDateString("en-US", { weekday: "short" }),
      sub: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      val: d.toDateString(),
    };
  });
  const slots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];
  const canConfirm =
    selected.length > 0 &&
    (time === "now" || (time === "schedule" && selectedDate && selectedSlot));

  return (
    <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
      <div
        style={{
          background: C.white,
          padding: "16px 18px",
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <button
          onClick={onBack}
          style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            background: C.bg,
            border: `1px solid ${C.border}`,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="back" size={18} color={C.text} />
        </button>
        <div>
          <div style={{ fontSize: 17, fontWeight: 800, color: C.text }}>
            Book Service
          </div>
          <div style={{ fontSize: 12, color: C.textSub }}>{shop.name}</div>
        </div>
      </div>
      <div style={{ padding: "18px 18px 28px" }}>
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: C.text,
              marginBottom: 12,
            }}
          >
            Select Services
          </div>
          {["Wash", "Dry", "Iron", "Pickup"]
            .filter((s) => (shop.services || []).includes(s))
            .map((s) => (
              <div
                key={s}
                onClick={() => setServices((p) => ({ ...p, [s]: !p[s] }))}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "13px 14px",
                  background: services[s] ? svcColors[s] + "0D" : C.white,
                  border: `1.5px solid ${
                    services[s] ? svcColors[s] + "55" : C.border
                  }`,
                  borderRadius: 14,
                  marginBottom: 8,
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 11,
                      background: services[s] ? svcColors[s] + "18" : C.surface,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      name={svcIcons[s]}
                      size={19}
                      color={services[s] ? svcColors[s] : C.textMuted}
                    />
                  </div>
                  <div>
                    <div
                      style={{ fontSize: 14, fontWeight: 700, color: C.text }}
                    >
                      {s}
                    </div>
                    <div style={{ fontSize: 11, color: C.textMuted }}>
                      ${svcPrice[s]} per kg
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 7,
                    background: services[s] ? svcColors[s] : C.border,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {services[s] && <Icon name="check" size={13} color="white" />}
                </div>
              </div>
            ))}
        </div>
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: C.text,
              marginBottom: 12,
            }}
          >
            Estimated Weight
          </div>
          <div
            style={{
              background: C.white,
              borderRadius: 16,
              padding: "16px 20px",
              border: `1px solid ${C.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <button
              onClick={() => setKg(Math.max(1, kg - 1))}
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: C.bg,
                border: `1.5px solid ${C.border}`,
                fontSize: 22,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                color: C.text,
              }}
            >
              −
            </button>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 800,
                  color: C.primary,
                  letterSpacing: -1,
                  lineHeight: 1,
                }}
              >
                {kg}
              </div>
              <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>
                kilograms
              </div>
            </div>
            <button
              onClick={() => setKg(kg + 1)}
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: C.primary,
                border: "none",
                fontSize: 22,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                color: "white",
                boxShadow: "0 4px 14px rgba(26,107,232,0.35)",
              }}
            >
              +
            </button>
          </div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: C.text,
              marginBottom: 12,
            }}
          >
            Pickup Time
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
            {[
              { val: "now", emoji: "⚡", label: "Right Now", sub: "~30 min" },
              {
                val: "schedule",
                emoji: "📅",
                label: "Schedule",
                sub: "Pick a time",
              },
            ].map((t) => (
              <div
                key={t.val}
                onClick={() => setTime(t.val)}
                style={{
                  flex: 1,
                  padding: "14px",
                  border: `1.5px solid ${
                    time === t.val ? C.primary : C.border
                  }`,
                  borderRadius: 14,
                  background: time === t.val ? C.primaryLight : C.white,
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 22, marginBottom: 5 }}>{t.emoji}</div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: time === t.val ? C.primary : C.text,
                  }}
                >
                  {t.label}
                </div>
                <div style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>
                  {t.sub}
                </div>
              </div>
            ))}
          </div>
          {time === "now" && (
            <div
              style={{
                background: "#E6FAF4",
                borderRadius: 12,
                padding: "12px 14px",
                border: "1px solid #00C48C30",
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <div style={{ fontSize: 20, flexShrink: 0 }}>🛵</div>
              <div>
                <div
                  style={{ fontSize: 13, fontWeight: 700, color: "#00A878" }}
                >
                  Rider will come to you
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: C.textSub,
                    marginTop: 2,
                    lineHeight: 1.5,
                  }}
                >
                  A Clean24 rider will arrive at your address within ~30 minutes
                  to collect your laundry. Make sure your clothes are ready in a
                  bag!
                </div>
              </div>
            </div>
          )}
          {time === "schedule" && (
            <div
              style={{
                background: C.white,
                borderRadius: 16,
                padding: "14px 16px",
                border: `1px solid ${C.border}`,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: C.textMuted,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  marginBottom: 10,
                }}
              >
                Select Date
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  paddingBottom: 4,
                }}
              >
                {days.map((d) => (
                  <div
                    key={d.val}
                    onClick={() => setSelectedDate(d.val)}
                    style={{
                      flexShrink: 0,
                      textAlign: "center",
                      padding: "10px 14px",
                      borderRadius: 14,
                      border: `1.5px solid ${
                        selectedDate === d.val ? C.primary : C.border
                      }`,
                      background:
                        selectedDate === d.val ? C.primaryLight : C.surface,
                      cursor: "pointer",
                      minWidth: 62,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: selectedDate === d.val ? C.primary : C.textSub,
                      }}
                    >
                      {d.label}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: selectedDate === d.val ? C.primary : C.text,
                        marginTop: 2,
                      }}
                    >
                      {d.sub.split(" ")[1]}
                    </div>
                    <div style={{ fontSize: 10, color: C.textMuted }}>
                      {d.sub.split(" ")[0]}
                    </div>
                  </div>
                ))}
              </div>
              {selectedDate && (
                <>
                  <div
                    style={{
                      height: 1,
                      background: C.border,
                      margin: "14px 0 12px",
                    }}
                  />
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: C.textMuted,
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                      marginBottom: 10,
                    }}
                  >
                    Select Time Slot
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 8,
                    }}
                  >
                    {slots.map((slot) => (
                      <div
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        style={{
                          padding: "10px",
                          textAlign: "center",
                          borderRadius: 12,
                          border: `1.5px solid ${
                            selectedSlot === slot ? C.primary : C.border
                          }`,
                          background:
                            selectedSlot === slot ? C.primaryLight : C.surface,
                          cursor: "pointer",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: selectedSlot === slot ? C.primary : C.text,
                          }}
                        >
                          {slot}
                        </span>
                      </div>
                    ))}
                  </div>
                  {selectedDate && selectedSlot && (
                    <div
                      style={{
                        marginTop: 12,
                        background: "#E6FAF4",
                        borderRadius: 10,
                        padding: "10px 12px",
                        border: "1px solid #00C48C30",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span style={{ fontSize: 16 }}>✅</span>
                      <div>
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#00A878",
                          }}
                        >
                          Pickup scheduled!
                        </div>
                        <div style={{ fontSize: 11, color: C.textSub }}>
                          {days.find((d) => d.val === selectedDate)?.label},{" "}
                          {days.find((d) => d.val === selectedDate)?.sub} at{" "}
                          {selectedSlot}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: C.text,
              marginBottom: 12,
            }}
          >
            Pickup Address
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: C.white,
              borderRadius: 14,
              padding: "14px",
              border: `1.5px solid ${C.border}`,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 11,
                background: C.primaryLight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon name="location" size={18} color={C.primary} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>
                BKK1, Street 51
              </div>
              <div style={{ fontSize: 12, color: C.textSub }}>
                Phnom Penh · Tap to change
              </div>
            </div>
            <Icon name="chevron" size={16} color={C.textMuted} />
          </div>
        </div>
        <div
          style={{
            background: C.white,
            borderRadius: 16,
            padding: "16px",
            border: `1px solid ${C.border}`,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: C.text,
              marginBottom: 12,
            }}
          >
            Price Summary
          </div>
          {selected.map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: svcColors[s],
                  }}
                />
                <span style={{ fontSize: 13, color: C.textSub }}>
                  {s} × {kg} kg
                </span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>
                ${(svcPrice[s] * kg).toFixed(2)}
              </span>
            </div>
          ))}
          {selected.length === 0 && (
            <div
              style={{
                fontSize: 13,
                color: C.textMuted,
                textAlign: "center",
                padding: "8px 0",
              }}
            >
              No services selected
            </div>
          )}
          <div style={{ height: 1, background: C.border, margin: "12px 0" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 700, color: C.text }}>
              Total
            </span>
            <span style={{ fontSize: 24, fontWeight: 800, color: C.primary }}>
              ${total}
            </span>
          </div>
        </div>
        <PrimaryBtn
          label={
            canConfirm
              ? "Confirm Booking"
              : selected.length === 0
              ? "Select a Service"
              : "Pick Date & Time"
          }
          onClick={canConfirm ? onConfirm : undefined}
          disabled={!canConfirm}
        />
      </div>
    </div>
  );
};

// ── TRACKING SCREEN ────────────────────────────────────────────────────────────
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
      <div
        style={{
          background: C.white,
          padding: "16px 18px",
          borderBottom: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <button
          onClick={onBack}
          style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            background: C.bg,
            border: `1px solid ${C.border}`,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="back" size={18} color={C.text} />
        </button>
        <div>
          <div style={{ fontSize: 17, fontWeight: 800, color: C.text }}>
            Order Tracking
          </div>
          <div style={{ fontSize: 12, color: C.textSub }}>
            Order #LG-2042 · Mar 31, 2026
          </div>
        </div>
      </div>
      <div style={{ padding: "18px 18px 28px" }}>
        <div
          style={{
            borderRadius: 18,
            overflow: "hidden",
            marginBottom: 18,
            boxShadow: "0 4px 20px rgba(13,27,53,0.10)",
          }}
        >
          <BgImage
            height={168}
            overlayStyle={{ background: "rgba(26,107,232,0.3)" }}
          >
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                background: "rgba(255,255,255,0.95)",
                padding: "5px 12px",
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 700,
                color: C.primary,
              }}
            >
              🔴 Live Tracking
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: 12,
                right: 12,
                display: "flex",
                alignItems: "center",
                gap: 10,
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.97)",
                  borderRadius: 14,
                  padding: "10px 14px",
                  flex: 1,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 800, color: C.text }}>
                  Sophea Mony 🛵
                </div>
                <div style={{ fontSize: 11, color: C.textSub, marginTop: 1 }}>
                  ETA 12:30 PM · 2.1 km away
                </div>
              </div>
              <button
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 13,
                  background: C.primary,
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 14px rgba(26,107,232,0.4)",
                  flexShrink: 0,
                }}
              >
                <Icon name="phone" size={18} color="white" />
              </button>
            </div>
          </BgImage>
        </div>
        <div
          style={{
            background: C.white,
            borderRadius: 18,
            padding: "18px",
            marginBottom: 16,
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: C.text,
              marginBottom: 16,
            }}
          >
            Order Progress
          </div>
          {steps.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 14 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: step.done
                      ? C.accent
                      : step.active
                      ? C.primary
                      : C.surface,
                    border: `2px solid ${
                      step.done ? C.accent : step.active ? C.primary : C.border
                    }`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: step.active
                      ? `0 0 0 5px ${C.primary}1A`
                      : "none",
                    flexShrink: 0,
                  }}
                >
                  {step.done ? (
                    <Icon name="check" size={14} color="white" />
                  ) : step.active ? (
                    <div
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        background: "white",
                      }}
                    />
                  ) : null}
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: 2,
                      height: 26,
                      background: step.done ? C.accent : C.border,
                      borderRadius: 2,
                      margin: "4px 0",
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  paddingBottom: i < steps.length - 1 ? 12 : 0,
                  paddingTop: 4,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: step.active ? 800 : step.done ? 600 : 500,
                    color: step.done || step.active ? C.text : C.textMuted,
                  }}
                >
                  {step.label}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: step.active ? C.primary : C.textMuted,
                    marginTop: 1,
                    fontWeight: step.active ? 700 : 400,
                  }}
                >
                  {step.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            background: C.white,
            borderRadius: 18,
            padding: "16px 18px",
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: C.text,
              marginBottom: 12,
            }}
          >
            Order Summary
          </div>
          {[
            ["Shop", "CleanKing Laundry"],
            ["Services", "Wash + Pickup · 3 kg"],
            ["Date", "Mar 31, 2026"],
          ].map(([k, v]) => (
            <div
              key={k}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: 12, color: C.textSub }}>{k}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>
                {v}
              </span>
            </div>
          ))}
          <div style={{ height: 1, background: C.border, margin: "10px 0" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>
              Total Paid
            </span>
            <span style={{ fontSize: 22, fontWeight: 800, color: C.primary }}>
              $5.40
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── HISTORY SCREEN ─────────────────────────────────────────────────────────────
const HistoryScreen = ({ onTrack }) => (
  <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
    <div
      style={{
        background: C.white,
        padding: "18px 20px 16px",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          fontSize: 22,
          fontWeight: 800,
          color: C.text,
          letterSpacing: -0.5,
        }}
      >
        My Orders
      </div>
      <div style={{ fontSize: 13, color: C.textSub, marginTop: 3 }}>
        Track current & view past orders
      </div>
    </div>
    <div style={{ padding: "18px 18px 28px" }}>
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: C.textMuted,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Active Order
        </div>
        <div
          style={{
            background: C.white,
            borderRadius: 18,
            overflow: "hidden",
            border: `1.5px solid ${C.primary}28`,
            boxShadow: "0 4px 20px rgba(26,107,232,0.1)",
          }}
        >
          <div
            style={{
              background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`,
              padding: "14px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                }}
              >
                ORDER #LG-2042
              </div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: "white",
                  marginTop: 2,
                }}
              >
                CleanKing Laundry
              </div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.18)",
                borderRadius: 10,
                padding: "5px 12px",
              }}
            >
              <span style={{ fontSize: 12, color: "white", fontWeight: 700 }}>
                🔄 Washing
              </span>
            </div>
          </div>
          <div style={{ padding: "14px 16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 14,
              }}
            >
              {[
                ["Service", "Wash + Pickup"],
                ["Weight", "3 kg"],
                ["Total", "$5.40"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div
                    style={{
                      fontSize: 11,
                      color: C.textMuted,
                      marginBottom: 3,
                      fontWeight: 500,
                    }}
                  >
                    {k}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: k === "Total" ? C.primary : C.text,
                    }}
                  >
                    {v}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={onTrack}
              style={{
                width: "100%",
                padding: "11px",
                background: C.primaryLight,
                color: C.primary,
                border: `1.5px solid ${C.primary}30`,
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              📍 Track Order
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: C.textMuted,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Completed
        </div>
        {orderHistory.map((o) => (
          <div
            key={o.id}
            style={{
              background: C.white,
              borderRadius: 16,
              padding: "14px 16px",
              marginBottom: 10,
              border: `1px solid ${C.border}`,
              boxShadow: "0 1px 8px rgba(13,27,53,0.05)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 12,
              }}
            >
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: C.text }}>
                  {o.shop}
                </div>
                <div style={{ fontSize: 12, color: C.textMuted, marginTop: 3 }}>
                  #{o.id} · {o.date} · {o.kg}kg
                </div>
                <div style={{ fontSize: 12, color: C.textSub, marginTop: 2 }}>
                  {o.services}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: C.text }}>
                  {o.price}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: C.accent,
                    fontWeight: 700,
                    marginTop: 4,
                  }}
                >
                  ✓ Done
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                style={{
                  flex: 1,
                  padding: "9px",
                  background: C.surface,
                  color: C.primary,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                ↩ Reorder
              </button>
              <button
                style={{
                  flex: 1,
                  padding: "9px",
                  background: C.surface,
                  color: C.textSub,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                ⭐ Rate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── PROFILE SCREEN ─────────────────────────────────────────────────────────────
const ProfileScreen = ({ onSwitchRole, onLogout }) => (
  <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
    <BgImage
      height={185}
      overlayStyle={{
        background: `linear-gradient(160deg, ${C.primaryDark}E8 0%, ${C.primary}C0 100%)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "28px 20px",
          display: "flex",
          alignItems: "flex-end",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              background: "rgba(255,255,255,0.22)",
              border: "2.5px solid rgba(255,255,255,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            👤
          </div>
          <div>
            <div style={{ fontSize: 21, fontWeight: 800, color: "white" }}>
              Sovana Smey Hang
            </div>
            <div
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.72)",
                marginTop: 2,
              }}
            >
              +855 12 345 678
            </div>
            <div
              style={{
                marginTop: 7,
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                background: "rgba(255,255,255,0.18)",
                borderRadius: 20,
                padding: "3px 10px",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: C.accent,
                }}
              />
              <span style={{ fontSize: 11, color: "white", fontWeight: 700 }}>
                Regular Member
              </span>
            </div>
          </div>
        </div>
      </div>
    </BgImage>
    <div style={{ padding: "18px 18px 28px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 10,
          marginBottom: 18,
        }}
      >
        {[
          { emoji: "📦", val: "12", label: "Orders" },
          { emoji: "🏪", val: "3", label: "Shops" },
          { emoji: "⭐", val: "4.8", label: "Rating" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: C.white,
              borderRadius: 16,
              padding: "14px 10px",
              textAlign: "center",
              border: `1px solid ${C.border}`,
              boxShadow: "0 1px 8px rgba(13,27,53,0.05)",
            }}
          >
            <div style={{ fontSize: 20, marginBottom: 4 }}>{s.emoji}</div>
            <div style={{ fontSize: 17, fontWeight: 800, color: C.primary }}>
              {s.val}
            </div>
            <div style={{ fontSize: 11, color: C.textMuted, marginTop: 1 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          background: C.white,
          borderRadius: 18,
          padding: "16px",
          border: `1px solid ${C.border}`,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: C.text,
            marginBottom: 14,
          }}
        >
          Payment Methods
        </div>
        {[
          { name: "ABA Pay", icon: "💳", sub: "****1234" },
          { name: "Wing Money", icon: "📱", sub: "****5678" },
        ].map((p, i, arr) => (
          <div
            key={p.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "11px 0",
              borderBottom:
                i < arr.length - 1 ? `1px solid ${C.border}` : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: C.surface,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  border: `1px solid ${C.border}`,
                }}
              >
                {p.icon}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>
                  {p.name}
                </div>
                <div style={{ fontSize: 11, color: C.textMuted }}>
                  Linked · {p.sub}
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.accent,
                background: C.accentLight,
                borderRadius: 8,
                padding: "3px 9px",
              }}
            >
              Active
            </div>
          </div>
        ))}
        <button
          style={{
            marginTop: 12,
            width: "100%",
            padding: "11px",
            background: C.surface,
            color: C.primary,
            border: `1.5px dashed ${C.primary}40`,
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          + Add Payment Method
        </button>
      </div>
      <div
        style={{
          background: C.white,
          borderRadius: 18,
          padding: "4px 16px",
          border: `1px solid ${C.border}`,
          marginBottom: 14,
        }}
      >
        {[
          { emoji: "📍", label: "Saved Addresses", sub: "BKK1, Tuol Kork" },
          { emoji: "🔔", label: "Notifications", sub: "All alerts on" },
          { emoji: "⚙️", label: "Settings", sub: "Account & security" },
        ].map((m, i, arr) => (
          <div
            key={m.label}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 0",
              borderBottom:
                i < arr.length - 1 ? `1px solid ${C.border}` : "none",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: C.primaryLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 19,
                }}
              >
                {m.emoji}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>
                  {m.label}
                </div>
                <div style={{ fontSize: 12, color: C.textMuted, marginTop: 1 }}>
                  {m.sub}
                </div>
              </div>
            </div>
            <Icon name="chevron" size={16} color={C.textMuted} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 0 }}>
        <button
          onClick={onSwitchRole}
          style={{
            flex: 1,
            padding: "14px",
            background: C.primaryLight,
            color: C.primary,
            border: `1.5px solid ${C.primary}30`,
            borderRadius: 14,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
          }}
        >
          <span>🔄</span> Switch Role
        </button>
        <button
          onClick={onLogout}
          style={{
            flex: 1,
            padding: "14px",
            background: "#FFF2F2",
            color: C.red,
            border: `1.5px solid ${C.red}18`,
            borderRadius: 14,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
          }}
        >
          <span>🚪</span> Log Out
        </button>
      </div>
    </div>
  </div>
);

// ── RIDER PROFILE SCREEN ───────────────────────────────────────────────────────
const RiderProfileScreen = ({ onSwitchRole, onLogout }) => (
  <div style={{ flex: 1, overflowY: "auto", background: C.bg }}>
    <div
      style={{
        background: `linear-gradient(135deg, ${C.accent} 0%, #00A878 100%)`,
        padding: "32px 20px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          top: -60,
          right: -40,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          bottom: -30,
          left: -20,
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 68,
            height: 68,
            borderRadius: 22,
            background: "rgba(255,255,255,0.22)",
            border: "2.5px solid rgba(255,255,255,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
            flexShrink: 0,
          }}
        >
          🛵
        </div>
        <div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "white",
              letterSpacing: -0.3,
            }}
          >
            Sovana Smey Hang
          </div>
          <div
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.75)",
              marginTop: 2,
            }}
          >
            +855 12 345 678
          </div>
          <div
            style={{
              marginTop: 8,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,0.2)",
              borderRadius: 20,
              padding: "4px 12px",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "white",
              }}
            />
            <span
              style={{
                fontSize: 11,
                color: "white",
                fontWeight: 700,
                letterSpacing: 0.3,
              }}
            >
              Active Rider · Rider ID #R-4821
            </span>
          </div>
        </div>
      </div>
    </div>
    <div style={{ padding: "16px 18px 32px" }}>
      <div
        style={{
          background: C.white,
          borderRadius: 18,
          padding: "16px",
          border: `1px solid ${C.border}`,
          marginBottom: 14,
          boxShadow: "0 2px 12px rgba(13,27,53,0.06)",
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: C.textMuted,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            marginBottom: 14,
          }}
        >
          April Earnings
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 10,
            marginBottom: 14,
          }}
        >
          {[
            { val: "$47.20", label: "This Month", color: C.accent },
            { val: "31", label: "Deliveries", color: C.primary },
            { val: "$1.52", label: "Avg / Trip", color: "#FF8C00" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: C.surface,
                borderRadius: 14,
                padding: "12px 8px",
                textAlign: "center",
                border: `1px solid ${C.border}`,
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 800, color: s.color }}>
                {s.val}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: C.textMuted,
                  marginTop: 3,
                  lineHeight: 1.3,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: 4 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 6,
            }}
          >
            <span style={{ fontSize: 12, color: C.textSub, fontWeight: 600 }}>
              Monthly Goal
            </span>
            <span style={{ fontSize: 12, color: C.accent, fontWeight: 700 }}>
              $47.20 / $80.00
            </span>
          </div>
          <div
            style={{
              height: 7,
              background: C.surface,
              borderRadius: 10,
              overflow: "hidden",
              border: `1px solid ${C.border}`,
            }}
          >
            <div
              style={{
                height: "100%",
                width: "59%",
                background: `linear-gradient(90deg, ${C.accent}, #00E0A0)`,
                borderRadius: 10,
              }}
            />
          </div>
          <div style={{ fontSize: 11, color: C.textMuted, marginTop: 5 }}>
            59% — keep going! 🎯
          </div>
        </div>
      </div>
      <div
        style={{
          background: C.white,
          borderRadius: 18,
          padding: "16px",
          border: `1px solid ${C.border}`,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: C.text,
            marginBottom: 14,
          }}
        >
          Personal Information
        </div>
        {[
          { icon: "📱", label: "Phone", val: "+855 12 345 678" },
          { icon: "📧", label: "Email", val: "Sovana Smey.hang@gmail.com" },
          { icon: "📍", label: "Address", val: "BKK1, Street 51, Phnom Penh" },
          { icon: "🪪", label: "National ID", val: "KH-098-123-456" },
        ].map((row, i, arr) => (
          <div
            key={row.label}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "11px 0",
              borderBottom:
                i < arr.length - 1 ? `1px solid ${C.border}` : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  background: C.primaryLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 17,
                }}
              >
                {row.icon}
              </div>
              <div>
                <div
                  style={{ fontSize: 11, color: C.textMuted, fontWeight: 600 }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: C.text,
                    marginTop: 1,
                  }}
                >
                  {row.val}
                </div>
              </div>
            </div>
            <Icon name="chevron" size={15} color={C.textMuted} />
          </div>
        ))}
      </div>
      <div
        style={{
          background: C.white,
          borderRadius: 18,
          padding: "16px",
          border: `1px solid ${C.border}`,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: C.text,
            marginBottom: 14,
          }}
        >
          Vehicle & Documents
        </div>
        {[
          {
            icon: "🛵",
            label: "Vehicle",
            val: "Honda Wave 110 · 2021",
            badge: null,
          },
          {
            icon: "🔖",
            label: "License Plate",
            val: "PP 2B-3847",
            badge: null,
          },
          {
            icon: "📄",
            label: "Driver's License",
            val: "KH-DL-20210934",
            badge: "Valid",
          },
          {
            icon: "🛡️",
            label: "Insurance",
            val: "Forte Insurance · Exp Dec 2025",
            badge: "Active",
          },
        ].map((row, i, arr) => (
          <div
            key={row.label}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "11px 0",
              borderBottom:
                i < arr.length - 1 ? `1px solid ${C.border}` : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  background: C.accentLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 17,
                }}
              >
                {row.icon}
              </div>
              <div>
                <div
                  style={{ fontSize: 11, color: C.textMuted, fontWeight: 600 }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: C.text,
                    marginTop: 1,
                  }}
                >
                  {row.val}
                </div>
              </div>
            </div>
            {row.badge ? (
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: C.accent,
                  background: C.accentLight,
                  borderRadius: 8,
                  padding: "3px 9px",
                }}
              >
                {row.badge}
              </span>
            ) : (
              <Icon name="chevron" size={15} color={C.textMuted} />
            )}
          </div>
        ))}
      </div>
      <div
        style={{
          background: C.white,
          borderRadius: 18,
          padding: "4px 16px",
          border: `1px solid ${C.border}`,
          marginBottom: 14,
        }}
      >
        {[
          { emoji: "🔔", label: "Notifications", sub: "Pickup alerts on" },
          { emoji: "⚙️", label: "Settings", sub: "Account & security" },
        ].map((m, i, arr) => (
          <div
            key={m.label}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 0",
              borderBottom:
                i < arr.length - 1 ? `1px solid ${C.border}` : "none",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: C.accentLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 19,
                }}
              >
                {m.emoji}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>
                  {m.label}
                </div>
                <div style={{ fontSize: 12, color: C.textMuted, marginTop: 1 }}>
                  {m.sub}
                </div>
              </div>
            </div>
            <Icon name="chevron" size={16} color={C.textMuted} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={onSwitchRole}
          style={{
            flex: 1,
            padding: "14px",
            background: C.accentLight,
            color: C.accent,
            border: `1.5px solid ${C.accent}30`,
            borderRadius: 14,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
          }}
        >
          <span>🔄</span> Switch Role
        </button>
        <button
          onClick={onLogout}
          style={{
            flex: 1,
            padding: "14px",
            background: "#FFF2F2",
            color: C.red,
            border: `1.5px solid ${C.red}18`,
            borderRadius: 14,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
          }}
        >
          <span>🚪</span> Log Out
        </button>
      </div>
    </div>
  </div>
);

// ── RIDER DASHBOARD ────────────────────────────────────────────────────────────
const RiderDashboard = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [accepted, setAccepted] = useState([]);

  const pendingOrders = [
    {
      id: "LG-2044",
      customer: "Sokha Lim",
      address: "BKK1, Street 51, Phnom Penh",
      services: "Wash + Dry · 4 kg",
      earning: "$1.50",
      time: "Now",
      distance: "0.8 km",
      phone: "012 111 222",
    },
    {
      id: "LG-2043",
      customer: "Chenda Ros",
      address: "Toul Kork, Street 289, Phnom Penh",
      services: "Wash + Pickup · 3 kg",
      earning: "$1.20",
      time: "10:30 AM",
      distance: "1.4 km",
      phone: "011 333 444",
    },
    {
      id: "LG-2042",
      customer: "Virak Chan",
      address: "Daun Penh, Street 19",
      services: "Wash + Iron · 5 kg",
      earning: "$1.80",
      time: "11:00 AM",
      distance: "2.1 km",
      phone: "015 555 666",
    },
  ];
  const completedOrders = [
    { id: "LG-2040", customer: "Bopha Keo", earning: "$1.50", date: "Mar 31" },
    { id: "LG-2039", customer: "Dara Noun", earning: "$1.20", date: "Mar 31" },
    {
      id: "LG-2037",
      customer: "Sophea Mony",
      earning: "$2.00",
      date: "Mar 30",
    },
  ];

  const handleAccept = (id) =>
    setAccepted((p) => (p.includes(id) ? p : [...p, id]));

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        background: C.bg,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`,
          padding: "20px 20px 0",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.7)",
                fontWeight: 600,
              }}
            >
              Rider Mode 🛵
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "white" }}>
              Hey, Sovana Smey!
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>
              Today's Earning
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "white" }}>
              $4.70
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
          {[
            { val: "3", label: "Pending" },
            { val: "2", label: "Completed" },
            { val: "4.9", label: "Rating" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 12,
                padding: "10px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 800, color: "white" }}>
                {s.val}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.7)",
                  marginTop: 2,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            background: "rgba(255,255,255,0.12)",
            borderRadius: "12px 12px 0 0",
            overflow: "hidden",
          }}
        >
          {[
            { id: "pending", label: "Pending Pickups" },
            { id: "completed", label: "Completed" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "11px",
                border: "none",
                background:
                  activeTab === t.id ? "rgba(255,255,255,0.95)" : "transparent",
                color:
                  activeTab === t.id ? C.primary : "rgba(255,255,255,0.75)",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px 28px" }}>
        {activeTab === "pending"
          ? pendingOrders.map((order) => {
              const isAccepted = accepted.includes(order.id);
              return (
                <div
                  key={order.id}
                  style={{
                    background: C.white,
                    borderRadius: 18,
                    marginBottom: 12,
                    border: `1.5px solid ${
                      isAccepted ? C.accent + "50" : C.border
                    }`,
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(13,27,53,0.07)",
                  }}
                >
                  {isAccepted && (
                    <div
                      style={{
                        background: C.accentLight,
                        padding: "7px 14px",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: C.accent,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: C.accent,
                        }}
                      >
                        Accepted · Navigate to customer
                      </span>
                    </div>
                  )}
                  <div style={{ padding: "14px 16px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 10,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: 15,
                            fontWeight: 800,
                            color: C.text,
                          }}
                        >
                          {order.customer}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: C.textMuted,
                            marginTop: 2,
                          }}
                        >
                          #{order.id}
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div
                          style={{
                            fontSize: 16,
                            fontWeight: 800,
                            color: C.accent,
                          }}
                        >
                          {order.earning}
                        </div>
                        <div style={{ fontSize: 10, color: C.textMuted }}>
                          earning
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        marginBottom: 8,
                        background: C.surface,
                        borderRadius: 10,
                        padding: "9px 12px",
                      }}
                    >
                      <Icon name="location" size={14} color={C.primary} />
                      <div>
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: C.text,
                          }}
                        >
                          {order.address}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: C.textMuted,
                            marginTop: 2,
                          }}
                        >
                          {order.services}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                        marginBottom: 12,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          background: C.primaryLight,
                          borderRadius: 8,
                          padding: "4px 9px",
                        }}
                      >
                        <Icon name="time" size={11} color={C.primary} />
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: C.primary,
                          }}
                        >
                          {order.time}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          background: C.surface,
                          borderRadius: 8,
                          padding: "4px 9px",
                          border: `1px solid ${C.border}`,
                        }}
                      >
                        <Icon name="location" size={11} color={C.textMuted} />
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: C.textSub,
                          }}
                        >
                          {order.distance}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <a
                        href={`tel:${order.phone}`}
                        style={{ textDecoration: "none", flex: 1 }}
                      >
                        <button
                          style={{
                            width: "100%",
                            padding: "10px",
                            background: C.surface,
                            color: C.textSub,
                            border: `1px solid ${C.border}`,
                            borderRadius: 12,
                            fontSize: 13,
                            fontWeight: 700,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                          }}
                        >
                          <Icon name="phone" size={14} color={C.textSub} />
                          Call
                        </button>
                      </a>
                      <button
                        onClick={() => handleAccept(order.id)}
                        style={{
                          flex: 2,
                          padding: "10px",
                          background: isAccepted
                            ? C.accent
                            : `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`,
                          color: "white",
                          border: "none",
                          borderRadius: 12,
                          fontSize: 13,
                          fontWeight: 700,
                          cursor: "pointer",
                          boxShadow: `0 4px 14px ${
                            isAccepted
                              ? "rgba(0,196,140,0.3)"
                              : "rgba(26,107,232,0.3)"
                          }`,
                        }}
                      >
                        {isAccepted ? "✓ Accepted · Navigate" : "Accept Pickup"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : completedOrders.map((o) => (
              <div
                key={o.id}
                style={{
                  background: C.white,
                  borderRadius: 16,
                  padding: "14px 16px",
                  marginBottom: 10,
                  border: `1px solid ${C.border}`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>
                    {o.customer}
                  </div>
                  <div
                    style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}
                  >
                    #{o.id} · {o.date}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{ fontSize: 16, fontWeight: 800, color: C.accent }}
                  >
                    {o.earning}
                  </div>
                  <div
                    style={{ fontSize: 11, color: C.accent, fontWeight: 700 }}
                  >
                    ✓ Done
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

// ── ROLE SCREEN ────────────────────────────────────────────────────────────────
const RoleScreen = ({ onSelect }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 50,
        background: `linear-gradient(160deg, #0D1B35 0%, #1A3A6B 55%, #1355C0 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <style>{`
        @keyframes roleIn{from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes floatBg{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-12px) scale(1.03)}}
      `}</style>
      <div
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "rgba(26,107,232,0.12)",
          top: -60,
          right: -60,
          animation: "floatBg 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(0,196,140,0.08)",
          bottom: -40,
          left: -40,
          animation: "floatBg 8s ease-in-out infinite reverse",
        }}
      />
      <div style={{ width: 200 }}>
        <img
          src={LOGO_URL}
          alt="Logo"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          onError={(e) => {
            e.target.parentNode.innerHTML =
              "<div style='width:80px;height:80px;background:rgba(255,255,255,0.15);borderRadius:24px;display:flex;alignItems:center;justifyContent:center;fontSize:32px;fontWeight:900;color:white;margin:0 auto'>C24</div>";
          }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: 8,
          animation: "roleIn 0.5s 0.1s ease both",
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: "white",
            letterSpacing: -0.5,
          }}
        >
          Who are you?
        </div>
        <div
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.5)",
            marginTop: 6,
            lineHeight: 1.5,
          }}
        >
          Choose your role to get started with Clean24
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginTop: 24,
        }}
      >
        <button
          onMouseEnter={() => setHovered("customer")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onSelect("customer")}
          style={{
            width: "100%",
            padding: "0",
            background:
              hovered === "customer"
                ? "rgba(255,255,255,0.97)"
                : "rgba(255,255,255,0.92)",
            borderRadius: 20,
            border: `2px solid ${
              hovered === "customer" ? C.primary : "transparent"
            }`,
            cursor: "pointer",
            overflow: "hidden",
            animation: "roleIn 0.5s 0.2s ease both",
            transition: "all 0.2s",
            boxShadow:
              hovered === "customer"
                ? `0 12px 40px rgba(26,107,232,0.35)`
                : "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "20px 22px",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                background: C.primaryLight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 28 }}>🧺</span>
            </div>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.text }}>
                Customer
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: C.textSub,
                  marginTop: 3,
                  lineHeight: 1.5,
                }}
              >
                Book laundry pickup, track your order, and manage your clothes.
              </div>
            </div>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: hovered === "customer" ? C.primary : C.primaryLight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.2s",
              }}
            >
              <Icon
                name="chevron"
                size={16}
                color={hovered === "customer" ? "white" : C.primary}
              />
            </div>
          </div>
          {hovered === "customer" && (
            <div
              style={{
                height: 3,
                background: `linear-gradient(90deg, ${C.primary}, ${C.accent})`,
              }}
            />
          )}
        </button>
        <button
          onMouseEnter={() => setHovered("rider")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onSelect("rider")}
          style={{
            width: "100%",
            padding: "0",
            background:
              hovered === "rider"
                ? "rgba(255,255,255,0.97)"
                : "rgba(255,255,255,0.92)",
            borderRadius: 20,
            border: `2px solid ${
              hovered === "rider" ? C.accent : "transparent"
            }`,
            cursor: "pointer",
            overflow: "hidden",
            animation: "roleIn 0.5s 0.3s ease both",
            transition: "all 0.2s",
            boxShadow:
              hovered === "rider"
                ? `0 12px 40px rgba(0,196,140,0.3)`
                : "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "20px 22px",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                background: C.accentLight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 28 }}>🛵</span>
            </div>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: C.text }}>
                Rider
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: C.textSub,
                  marginTop: 3,
                  lineHeight: 1.5,
                }}
              >
                Accept pickup jobs, earn money, and deliver for Clean24
                customers.
              </div>
            </div>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: hovered === "rider" ? C.accent : C.accentLight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.2s",
              }}
            >
              <Icon
                name="chevron"
                size={16}
                color={hovered === "rider" ? "white" : C.accent}
              />
            </div>
          </div>
          {hovered === "rider" && (
            <div
              style={{
                height: 3,
                background: `linear-gradient(90deg, ${C.accent}, #00A878)`,
              }}
            />
          )}
        </button>
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 12,
          color: "rgba(255,255,255,0.3)",
          animation: "roleIn 0.5s 0.4s ease both",
        }}
      >
        You can switch roles anytime from your profile
      </div>
    </div>
  );
};

// ── SPLASH SCREEN ──────────────────────────────────────────────────────────────
const SplashScreen = ({ onDone }) => {
  const [phase, setPhase] = useState("in");
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 400);
    const t2 = setTimeout(() => setPhase("out"), 2200);
    const t3 = setTimeout(() => onDone(), 2700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 999,
        background: `linear-gradient(160deg, #0D1B35 0%, #1A3A6B 50%, #1355C0 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: phase === "out" ? 0 : 1,
        transition: phase === "out" ? "opacity 0.5s ease" : "none",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes splashText{0%{opacity:0;transform:translateY(16px)}100%{opacity:1;transform:translateY(0)}}
        @keyframes splashDot{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}
        @keyframes floatBg{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-12px) scale(1.03)}}
      `}</style>
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(26,107,232,0.18)",
          top: -80,
          right: -80,
          animation: "floatBg 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(0,196,140,0.10)",
          bottom: -60,
          left: -60,
          animation: "floatBg 8s ease-in-out infinite reverse",
        }}
      />
      <div style={{ width: 200 }}>
        <img
          src={LOGO_URL}
          alt="Logo"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          onError={(e) => {
            e.target.parentNode.innerHTML =
              "<div style='width:80px;height:80px;background:rgba(255,255,255,0.15);borderRadius:24px;display:flex;alignItems:center;justifyContent:center;fontSize:32px;fontWeight:900;color:white;margin:0 auto'>C24</div>";
          }}
        />
      </div>
      <div
        style={{
          marginTop: 28,
          animation: "splashText 0.6s 0.5s ease both",
          textAlign: "center",
        }}
      >
        {/* <div
          style={{
            fontSize: 32,
            fontWeight: 800,
            letterSpacing: -0.5,
            color: "white",
            background:
              "linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.7) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 6,
          }}
        >
          Clean 24
        </div> */}
        <div
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
            fontWeight: 500,
            letterSpacing: 2.5,
            textTransform: "uppercase",
          }}
        >
          Phnom Penh · Cambodia
        </div>
      </div>
      <div
        style={{
          marginTop: 12,
          fontSize: 14,
          color: "rgba(255,255,255,0.4)",
          animation: "splashText 0.6s 0.7s ease both",
        }}
      >
        Clean clothes, delivered fast 🧺
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 60,
          display: "flex",
          gap: 8,
          animation: "splashText 0.5s 1s ease both",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: i === 0 ? C.accent : "rgba(255,255,255,0.3)",
              animation: `splashDot 1.2s ${i * 0.2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 28,
          fontSize: 11,
          color: "rgba(255,255,255,0.25)",
          letterSpacing: 1,
          animation: "splashText 0.5s 1s ease both",
        }}
      >
        Powered by Clean 24
      </div>
    </div>
  );
};

// ── MAIN APP ───────────────────────────────────────────────────────────────────
export default function LaundryGoKH() {
  const [splash, setSplash] = useState(true);
  const [role, setRole] = useState(null);
  const [tab, setTab] = useState("home");
  const [riderTab, setRiderTab] = useState("dashboard");
  const [selectedShop, setSelectedShop] = useState(null);
  const [subScreen, setSubScreen] = useState(null);

  const handleResetRole = () => {
    setRole(null);
    setTab("home");
    setRiderTab("dashboard");
    setSubScreen(null);
    setSelectedShop(null);
  };

  const handleBack = () => {
    if (subScreen === "tracking") {
      setSubScreen(null);
      setSelectedShop(null);
      setTab("orders");
    } else if (subScreen === "booking") setSubScreen("detail");
    else if (subScreen === "detail" || subScreen === "allShops") {
      setSubScreen(null);
      setSelectedShop(null);
    }
  };

  const handleSelectShop = (shop) => {
    setSelectedShop(shop);
    setSubScreen("detail");
  };

  const renderCustomerScreen = () => {
    if (subScreen === "allShops")
      return (
        <AllShopsScreen onBack={handleBack} onSelectShop={handleSelectShop} />
      );
    if (subScreen === "detail" && selectedShop)
      return (
        <DetailScreen
          shop={selectedShop}
          onBack={handleBack}
          onBook={() => setSubScreen("booking")}
        />
      );
    if (subScreen === "booking" && selectedShop)
      return (
        <BookingScreen
          shop={selectedShop}
          onBack={handleBack}
          onConfirm={() => setSubScreen("tracking")}
        />
      );
    if (subScreen === "tracking") return <TrackingScreen onBack={handleBack} />;
    if (tab === "search")
      return <ExploreScreen onSelectShop={handleSelectShop} />;
    if (tab === "orders")
      return <HistoryScreen onTrack={() => setSubScreen("tracking")} />;
    if (tab === "profile")
      return (
        <ProfileScreen
          onSwitchRole={handleResetRole}
          onLogout={handleResetRole}
        />
      );
    return (
      <HomeScreen
        onSelectShop={handleSelectShop}
        onSeeAll={() => setSubScreen("allShops")}
      />
    );
  };

  const customerNav = [
    { id: "home", icon: "home", label: "Home" },
    { id: "search", icon: "search", label: "Explore" },
    { id: "orders", icon: "orders", label: "Orders" },
    { id: "profile", icon: "profile", label: "Profile" },
  ];

  const riderNav = [
    { id: "dashboard", icon: "home", label: "Dashboard" },
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

      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: C.bg,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: 430,
          margin: "0 auto",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* ── Splash: highest z-index, fades out over role screen ── */}
        {splash && <SplashScreen onDone={() => setSplash(false)} />}

        {/* ── Role screen: always mounted once splash starts fading, no white gap ── */}
        {!role && (
          <RoleScreen
            onSelect={(r) => {
              setRole(r);
              setTab("home");
              setRiderTab("dashboard");
            }}
          />
        )}

        {/* ── App: only rendered after a role is chosen ── */}
        {role && (
          <>
            {/* Status bar */}
            <div
              style={{
                background: C.white,
                padding: "10px 22px 9px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 12,
                fontWeight: 700,
                color: C.text,
                borderBottom: `1px solid ${C.border}`,
                flexShrink: 0,
              }}
            >
              <span>9:41</span>
              {role === "rider" && (
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: C.accent,
                    background: C.accentLight,
                    padding: "2px 8px",
                    borderRadius: 8,
                  }}
                >
                  🛵 RIDER
                </span>
              )}
              <span style={{ fontSize: 14 }}>📶 🔋</span>
            </div>

            {/* Main content */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
                overflow: "hidden",
              }}
            >
              {role === "rider" ? (
                riderTab === "profile" ? (
                  <RiderProfileScreen
                    onSwitchRole={handleResetRole}
                    onLogout={handleResetRole}
                  />
                ) : (
                  <RiderDashboard />
                )
              ) : (
                renderCustomerScreen()
              )}
            </div>

            {/* Customer bottom nav */}
            {role === "customer" && !subScreen && (
              <div
                style={{
                  width: "100%",
                  height: 66,
                  background: C.white,
                  borderTop: `1px solid ${C.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexShrink: 0,
                  boxShadow: "0 -4px 24px rgba(13,27,53,0.07)",
                }}
              >
                {customerNav.map((item) => {
                  const active = tab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setTab(item.id);
                        setSubScreen(null);
                        setSelectedShop(null);
                      }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 3,
                        background: active ? C.primaryLight : "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "8px 18px",
                        borderRadius: 14,
                      }}
                    >
                      <Icon
                        name={item.icon}
                        size={22}
                        color={active ? C.primary : C.textMuted}
                      />
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: active ? 800 : 500,
                          color: active ? C.primary : C.textMuted,
                        }}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Rider bottom nav */}
            {role === "rider" && (
              <div
                style={{
                  width: "100%",
                  height: 66,
                  background: C.white,
                  borderTop: `1px solid ${C.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexShrink: 0,
                  boxShadow: "0 -4px 24px rgba(13,27,53,0.07)",
                }}
              >
                {riderNav.map((item) => {
                  const active = riderTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setRiderTab(item.id)}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 3,
                        background: active ? C.accentLight : "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "8px 28px",
                        borderRadius: 14,
                      }}
                    >
                      <Icon
                        name={item.icon}
                        size={22}
                        color={active ? C.accent : C.textMuted}
                      />
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: active ? 800 : 500,
                          color: active ? C.accent : C.textMuted,
                        }}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
