export type OrderStatus = "pending" | "confirmed" | "in_progress" | "shipped" | "completed" | "cancelled";
export type InquiryStatus = "unread" | "replied" | "closed";

export type Order = {
  id: string;
  date: string;
  customerName: string;
  customerEmail: string;
  productId: string;
  productName: string;
  price: number;
  nailShape: string;
  nailLength: string;
  colorPref: string;
  occasion: string;
  designWish: string;
  status: OrderStatus;
};

export type Inquiry = {
  id: string;
  date: string;
  customerName: string;
  customerEmail: string;
  subject: string;
  message: string;
  status: InquiryStatus;
};

export const mockOrders: Order[] = [
  { id: "ORD-001", date: "2026-05-10", customerName: "田中 美咲", customerEmail: "tanaka@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "ピンク系", occasion: "結婚式", designWish: "ふんわりしたピンクグラデで上品にしたい", status: "shipped" },
  { id: "ORD-002", date: "2026-05-08", customerName: "鈴木 花子", customerEmail: "suzuki@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "ラウンド", nailLength: "ショート", colorPref: "ホワイト系", occasion: "成人式", designWish: "白い小花をたくさんあしらいたい", status: "in_progress" },
  { id: "ORD-003", date: "2026-05-06", customerName: "山本 さくら", customerEmail: "yamamoto@example.com", productId: "5", productName: "ラグジュアリー デザイン", price: 20000, nailShape: "バレリーナ", nailLength: "ロング", colorPref: "ゴールド系", occasion: "パーティー", designWish: "大粒のストーンをふんだんに使いたい", status: "completed" },
  { id: "ORD-004", date: "2026-05-04", customerName: "伊藤 りな", customerEmail: "ito@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "スクエア", nailLength: "ミディアム", colorPref: "クリア×ホワイト", occasion: "日常使い", designWish: "清潔感のあるシンプルなフレンチ", status: "completed" },
  { id: "ORD-005", date: "2026-05-01", customerName: "渡辺 あかり", customerEmail: "watanabe@example.com", productId: "4", productName: "ニュアンス アート", price: 17000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "クリア系", occasion: "デート", designWish: "押し花を使ったおしゃれなデザイン", status: "completed" },
  { id: "ORD-006", date: "2026-04-28", customerName: "中村 ゆい", customerEmail: "nakamura@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "ラウンド", nailLength: "ショート", colorPref: "ベージュ系", occasion: "日常使い", designWish: "大人っぽいベージュグラデ", status: "completed" },
  { id: "ORD-007", date: "2026-04-25", customerName: "小林 まい", customerEmail: "kobayashi@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ピンク系", occasion: "お宮参り", designWish: "桜モチーフで春らしく", status: "completed" },
  { id: "ORD-008", date: "2026-04-20", customerName: "加藤 ひな", customerEmail: "kato@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "スクエア", nailLength: "ミディアム", colorPref: "ピンク×ホワイト", occasion: "ブライダル", designWish: "ウェディング向けの上品なフレンチ", status: "completed" },
  { id: "ORD-009", date: "2026-04-15", customerName: "吉田 このは", customerEmail: "yoshida@example.com", productId: "5", productName: "ラグジュアリー デザイン", price: 20000, nailShape: "スティレット", nailLength: "ロング", colorPref: "シルバー系", occasion: "パーティー", designWish: "シルバーとパールで豪華に", status: "completed" },
  { id: "ORD-010", date: "2026-04-10", customerName: "松本 れな", customerEmail: "matsumoto@example.com", productId: "4", productName: "ニュアンス アート", price: 17000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "テラコッタ系", occasion: "日常使い", designWish: "秋色のニュアンスネイル", status: "completed" },
  { id: "ORD-011", date: "2026-05-12", customerName: "西村 みお", customerEmail: "nishimura@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "ホワイト系", occasion: "卒業式", designWish: "清楚なホワイトグラデ", status: "confirmed" },
  { id: "ORD-012", date: "2026-05-14", customerName: "橋本 えりか", customerEmail: "hashimoto@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "イエロー系", occasion: "友人の結婚式", designWish: "ひまわりモチーフで元気よく", status: "pending" },
];

export const mockInquiries: Inquiry[] = [
  { id: "INQ-001", date: "2026-05-15", customerName: "佐藤 なな", customerEmail: "sato@example.com", subject: "商品について", message: "サイズが合わない場合はどうすればいいですか？手のサイズが小さめで心配です。", status: "unread" },
  { id: "INQ-002", date: "2026-05-13", customerName: "林 あゆみ", customerEmail: "hayashi@example.com", subject: "注文・お支払いについて", message: "銀行振込以外の支払い方法はありますか？クレジットカードは使えますか？", status: "replied" },
  { id: "INQ-003", date: "2026-05-10", customerName: "池田 かな", customerEmail: "ikeda@example.com", subject: "配送について", message: "北海道への配送は何日くらいかかりますか？", status: "replied" },
  { id: "INQ-004", date: "2026-05-07", customerName: "清水 みほ", customerEmail: "shimizu@example.com", subject: "その他", message: "参考画像を送りたいのですが、どこに送ればいいですか？", status: "closed" },
  { id: "INQ-005", date: "2026-05-14", customerName: "山田 ゆか", customerEmail: "yamada@example.com", subject: "商品について", message: "フラワーアートのお花の種類は選べますか？バラをお願いしたいです。", status: "unread" },
];
