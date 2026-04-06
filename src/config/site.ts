// ============================================================
// liem サイト設定
// ============================================================

export const siteConfig = {
  // ---- 基本情報 ----
  siteName: "liem",
  siteNameEn: "liem",
  tagline: "あなただけの、特別なネイルを。",
  description: "一人ひとりに合わせた完全受注制のネイルチップ専門ショップ。デザイン・形・長さすべてオーダーメイドでお作りします。",
  category: "ネイルチップ販売",

  // ---- カラーテーマ ----
  colors: {
    primary: "#C8A84B",
    primaryDark: "#A88830",
    secondary: "#FFFDF5",
    accent: "#1A1A1A",
    text: "#2D2D2D",
    textLight: "#888888",
    bg: "#FFFFFF",
    bgSub: "#FFFBF0",
  },

  // ---- ヘッダーナビ ----
  nav: [
    { label: "ホーム", href: "/" },
    { label: "デザイン一覧", href: "/products" },
    { label: "ご注文方法", href: "/about" },
    { label: "お問い合わせ", href: "/contact" },
  ],

  // ---- デザインカタログ（受注制） ----
  products: [
    {
      id: "1",
      name: "シンプル フレンチ",
      price: 15000,
      category: "ネイルチップ",
      description: "清潔感のあるクリアベースにホワイトフレンチ。シーンを選ばず使えるベーシックスタイル。オフィスや式典にも対応できる上品な仕上がりです。",
      sizes: ["ショート", "ミディアム", "ロング"],
      colors: ["クリア×ホワイト", "ベージュ×ホワイト", "ピンク×ホワイト"],
      image: "/images/nail-01.jpg",
      images: ["/images/nail-01.jpg"],
      stock: true,
      isNew: false,
    },
    {
      id: "2",
      name: "ニュアンス グラデ",
      price: 17000,
      category: "ネイルチップ",
      description: "繊細なグラデーションが美しい人気デザイン。絶妙な色の溶け込みで柔らかく女性らしい印象に。結婚式・パーティーにも最適です。",
      sizes: ["ショート", "ミディアム", "ロング"],
      colors: ["ピンクグラデ", "ベージュグラデ", "ホワイトグラデ"],
      image: "/images/nail-02.jpg",
      images: ["/images/nail-02.jpg"],
      stock: true,
      isNew: true,
    },
    {
      id: "3",
      name: "フラワー アート",
      price: 18000,
      category: "ネイルチップ",
      description: "立体感のある繊細なフラワーアートを手作業で仕上げます。特別な日のコーデに華を添える一品。お色目や花の種類はご相談ください。",
      sizes: ["ショート", "ミディアム", "ロング"],
      colors: ["ホワイト系", "ピンク系", "イエロー系"],
      image: "/images/nail-03.jpg",
      images: ["/images/nail-03.jpg"],
      stock: true,
      isNew: true,
    },
    {
      id: "4",
      name: "ニュアンス アート",
      price: 17000,
      category: "ネイルチップ",
      description: "押し花や箔を使ったトレンドのニュアンスネイル。個性を大切にしながらも上品さを忘れない、おしゃれ上級者に人気のスタイル。",
      sizes: ["ショート", "ミディアム", "ロング"],
      colors: ["クリア系", "スモーキー系", "テラコッタ系"],
      image: "/images/nail-04.jpg",
      images: ["/images/nail-04.jpg"],
      stock: true,
      isNew: false,
    },
    {
      id: "5",
      name: "ラグジュアリー デザイン",
      price: 20000,
      category: "ネイルチップ",
      description: "ストーンやパールをふんだんに使ったラグジュアリースタイル。特別なシーンにふさわしい、存在感あふれる豪華な仕上がりです。",
      sizes: ["ショート", "ミディアム", "ロング"],
      colors: ["ゴールド系", "シルバー系", "ローズゴールド系"],
      image: "/images/nail-05.jpg",
      images: ["/images/nail-05.jpg"],
      stock: true,
      isNew: false,
    },
  ],

  // ---- 振込先情報 ----
  bank: {
    bankName: "三菱UFJ銀行",
    branchName: "新瑞橋支店",
    accountType: "普通",
    accountNumber: "5046070",
    accountHolder: "カナオカミホ",
    note: "ご注文確認後3日以内にお振込みください。ご入金確認後、制作を開始いたします（制作期間：約2〜3週間）。",
  },

  // ---- 会社情報（特商法・会社概要用） ----
  company: {
    name: "liem",
    nameEn: "liem",
    postalCode: "463-0000",
    address: "愛知県名古屋市守山区川北町301",
    tel: "050-1794-9058",
    email: "liem-select@e-mail.jp",
    businessHours: "10:00〜18:00（不定休）",
    established: "—",
    capital: "—",
    representative: "金岡 みほ",
    description: "一人ひとりのご要望に丁寧に向き合い、世界にひとつだけのネイルチップをお作りします。",
  },

  // ---- 返品・送料ポリシー ----
  policy: {
    shippingFee: "全国一律520円（ネコポス）",
    freeShippingOver: 20000,
    returnPeriod: "受注制のため、原則返品・交換不可",
    returnNote: "商品に不備があった場合のみ対応いたします。",
  },
};

export type SiteConfig = typeof siteConfig;
