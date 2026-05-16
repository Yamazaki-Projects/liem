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

// ※ CSVデータ（1〜3月）は実績ベース、4〜5月はモック
export const mockOrders: Order[] = [
  // ---- 1月（CSV実績） ----
  { id: "ORD-001", date: "2026-01-03", customerName: "長田 莉子", customerEmail: "c001@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "ラウンド", nailLength: "ロング", colorPref: "クリア×ホワイト", occasion: "日常使い", designWish: "シンプルなロングフレンチ", status: "completed" },
  { id: "ORD-002", date: "2026-01-03", customerName: "植田 美咲", customerEmail: "c002@example.com", productId: "3", productName: "フラワー アート", price: 36000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ピンク系", occasion: "結婚式", designWish: "桜モチーフ×2セット", status: "completed" },
  { id: "ORD-003", date: "2026-01-03", customerName: "水野 花音", customerEmail: "c003@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "スクエア", nailLength: "ショート", colorPref: "ベージュ×ホワイト", occasion: "日常使い", designWish: "オフィス向けシンプルフレンチ", status: "completed" },
  { id: "ORD-004", date: "2026-01-04", customerName: "大野 彩香", customerEmail: "c004@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "クリア×ホワイト", occasion: "成人式", designWish: "清楚なフレンチ", status: "completed" },
  { id: "ORD-005", date: "2026-01-05", customerName: "小沢 萌", customerEmail: "c005@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "ホワイト系", occasion: "成人式", designWish: "白い小花を添えて", status: "completed" },
  { id: "ORD-006", date: "2026-01-05", customerName: "新田 遥", customerEmail: "c006@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "スクエア", nailLength: "ロング", colorPref: "クリア×ホワイト", occasion: "日常使い", designWish: "ロングフレンチをシンプルに", status: "completed" },
  { id: "ORD-007", date: "2026-01-11", customerName: "阿部 七海", customerEmail: "c007@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ピンク系", occasion: "パーティー", designWish: "ピンクの花を豪華に", status: "completed" },
  { id: "ORD-008", date: "2026-01-15", customerName: "坂本 愛梨", customerEmail: "c008@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "ラウンド", nailLength: "ロング", colorPref: "ピンク×ホワイト", occasion: "日常使い", designWish: "ピンクがかったフレンチ", status: "completed" },
  { id: "ORD-009", date: "2026-01-16", customerName: "田村 麻衣", customerEmail: "c009@example.com", productId: "6", productName: "カラー グラデ", price: 16000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "ピンク系", occasion: "バレンタイン", designWish: "バレンタイン向けピンクグラデ", status: "completed" },
  { id: "ORD-010", date: "2026-01-16", customerName: "成田 結衣", customerEmail: "c010@example.com", productId: "4", productName: "ニュアンス アート", price: 17000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "クリア系", occasion: "日常使い", designWish: "押し花のニュアンスアート", status: "completed" },
  { id: "ORD-011", date: "2026-01-17", customerName: "大西 真由", customerEmail: "c011@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "スクエア", nailLength: "ショート", colorPref: "クリア×ホワイト", occasion: "日常使い", designWish: "短め清潔感フレンチ", status: "completed" },
  { id: "ORD-012", date: "2026-01-17", customerName: "馬場 桜", customerEmail: "c012@example.com", productId: "2", productName: "ニュアンス グラデ", price: 34000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "ベージュグラデ", occasion: "成人式", designWish: "大人っぽいベージュグラデ×2セット", status: "completed" },
  { id: "ORD-013", date: "2026-01-18", customerName: "奥村 詩音", customerEmail: "c013@example.com", productId: "4", productName: "ニュアンス アート", price: 17000, nailShape: "ラウンド", nailLength: "ロング", colorPref: "スモーキー系", occasion: "日常使い", designWish: "スモーキーニュアンスアート", status: "completed" },
  { id: "ORD-014", date: "2026-01-19", customerName: "和田 千夏", customerEmail: "c014@example.com", productId: "4", productName: "ニュアンス アート", price: 17000, nailShape: "オーバル", nailLength: "ロング", colorPref: "テラコッタ系", occasion: "日常使い", designWish: "テラコッタカラーで個性的に", status: "completed" },
  { id: "ORD-015", date: "2026-01-21", customerName: "藤城 凛", customerEmail: "c015@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "オーバル", nailLength: "ロング", colorPref: "イエロー系", occasion: "パーティー", designWish: "ビタミンカラーのフラワーアート", status: "completed" },
  { id: "ORD-016", date: "2026-01-24", customerName: "菅原 葵", customerEmail: "c016@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "スクエア", nailLength: "ロング", colorPref: "クリア×ホワイト", occasion: "日常使い", designWish: "ロングシンプルフレンチ", status: "completed" },
  { id: "ORD-017", date: "2026-01-28", customerName: "今井 柚香", customerEmail: "c017@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "ラウンド", nailLength: "ロング", colorPref: "ホワイト系", occasion: "結婚式", designWish: "ウェディング向けフラワーアート", status: "completed" },
  { id: "ORD-018", date: "2026-01-29", customerName: "内田 奈緒", customerEmail: "c018@example.com", productId: "6", productName: "カラー グラデ", price: 16000, nailShape: "ラウンド", nailLength: "ショート", colorPref: "ベージュ系", occasion: "日常使い", designWish: "ナチュラルベージュグラデ", status: "completed" },
  { id: "ORD-019", date: "2026-01-31", customerName: "松尾 紗奈", customerEmail: "c019@example.com", productId: "2", productName: "ニュアンス グラデ", price: 34000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ピンクグラデ", occasion: "成人式", designWish: "ピンクグラデ×2セット", status: "completed" },

  // ---- 2月（CSV実績） ----
  { id: "ORD-020", date: "2026-02-01", customerName: "野口 春奈", customerEmail: "c020@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ホワイトグラデ", occasion: "日常使い", designWish: "白のグラデーション", status: "completed" },
  { id: "ORD-021", date: "2026-02-07", customerName: "浜田 明日香", customerEmail: "c021@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "ピンク系", occasion: "バレンタイン", designWish: "バレンタイン向けフラワー", status: "completed" },
  { id: "ORD-022", date: "2026-02-09", customerName: "浦田 里奈", customerEmail: "c022@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "ラウンド", nailLength: "ショート", colorPref: "ベージュグラデ", occasion: "日常使い", designWish: "短めできれいなグラデ", status: "completed" },
  { id: "ORD-023", date: "2026-02-10", customerName: "中山 優花", customerEmail: "c023@example.com", productId: "4", productName: "ニュアンス アート", price: 34000, nailShape: "オーバル", nailLength: "ロング", colorPref: "クリア系", occasion: "パーティー", designWish: "押し花ニュアンスアート×2セット", status: "completed" },
  { id: "ORD-024", date: "2026-02-14", customerName: "久保 茜", customerEmail: "c024@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "ピンクグラデ", occasion: "バレンタイン", designWish: "バレンタインにピンクグラデ", status: "completed" },
  { id: "ORD-025", date: "2026-02-15", customerName: "丸山 菜々", customerEmail: "c025@example.com", productId: "6", productName: "カラー グラデ", price: 16000, nailShape: "スクエア", nailLength: "ショート", colorPref: "ホワイト系", occasion: "日常使い", designWish: "クリーンホワイトグラデ", status: "completed" },
  { id: "ORD-026", date: "2026-02-16", customerName: "市川 朱音", customerEmail: "c026@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "ラウンド", nailLength: "ショート", colorPref: "ベージュグラデ", occasion: "日常使い", designWish: "ナチュラルグラデーション", status: "completed" },
  { id: "ORD-027", date: "2026-02-17", customerName: "村田 由奈", customerEmail: "c027@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ホワイト系", occasion: "結婚式", designWish: "白いフラワーで清楚に", status: "completed" },
  { id: "ORD-028", date: "2026-02-19", customerName: "広瀬 咲良", customerEmail: "c028@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ホワイトグラデ", occasion: "日常使い", designWish: "ふわっとしたホワイトグラデ", status: "completed" },
  { id: "ORD-029", date: "2026-02-21", customerName: "倉田 理央", customerEmail: "c029@example.com", productId: "4", productName: "ニュアンス アート", price: 17000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "スモーキー系", occasion: "日常使い", designWish: "スモーキーニュアンス", status: "completed" },
  { id: "ORD-030", date: "2026-02-21", customerName: "池谷 舞", customerEmail: "c030@example.com", productId: "2", productName: "ニュアンス グラデ", price: 34000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "ピンクグラデ", occasion: "結婚式", designWish: "友人の結婚式グラデ×2セット", status: "completed" },
  { id: "ORD-031", date: "2026-02-21", customerName: "岡本 絵里", customerEmail: "c031@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ベージュグラデ", occasion: "日常使い", designWish: "柔らかいベージュグラデ", status: "completed" },
  { id: "ORD-032", date: "2026-02-22", customerName: "金子 澪", customerEmail: "c032@example.com", productId: "4", productName: "ニュアンス アート", price: 34000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "クリア系", occasion: "卒業式", designWish: "卒業式ニュアンスアート×2セット", status: "completed" },
  { id: "ORD-033", date: "2026-02-22", customerName: "吉川 彩", customerEmail: "c033@example.com", productId: "6", productName: "カラー グラデ", price: 32000, nailShape: "バレリーナ", nailLength: "ロング", colorPref: "ピンク系", occasion: "パーティー", designWish: "カラフルグラデ×2セット", status: "completed" },
  { id: "ORD-034", date: "2026-02-23", customerName: "藤原 沙耶", customerEmail: "c034@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "スクエア", nailLength: "ミディアム", colorPref: "クリア×ホワイト", occasion: "日常使い", designWish: "オフィス用シンプルフレンチ", status: "completed" },
  { id: "ORD-035", date: "2026-02-25", customerName: "千葉 美優", customerEmail: "c035@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "オーバル", nailLength: "ロング", colorPref: "イエロー系", occasion: "パーティー", designWish: "春らしいイエローフラワー", status: "completed" },

  // ---- 3月（CSV実績） ----
  { id: "ORD-036", date: "2026-03-04", customerName: "鈴木 ひなた", customerEmail: "c036@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "ピンクグラデ", occasion: "卒業式", designWish: "卒業式用ピンクグラデ", status: "completed" },
  { id: "ORD-037", date: "2026-03-05", customerName: "夏目 琴音", customerEmail: "c037@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "ホワイト系", occasion: "卒業式", designWish: "卒業式向け白いフラワー", status: "completed" },
  { id: "ORD-038", date: "2026-03-08", customerName: "川口 真子", customerEmail: "c038@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "スクエア", nailLength: "ロング", colorPref: "クリア×ホワイト", occasion: "日常使い", designWish: "ロングシンプルフレンチ", status: "completed" },
  { id: "ORD-039", date: "2026-03-12", customerName: "工藤 ひより", customerEmail: "c039@example.com", productId: "1", productName: "シンプル フレンチ", price: 30000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "ピンク×ホワイト", occasion: "入学式", designWish: "入学式フレンチ×2セット", status: "completed" },
  { id: "ORD-040", date: "2026-03-15", customerName: "佐藤 美月", customerEmail: "c040@example.com", productId: "6", productName: "カラー グラデ", price: 16000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ベージュ系", occasion: "日常使い", designWish: "ベージュカラーグラデ", status: "completed" },
  { id: "ORD-041", date: "2026-03-17", customerName: "春日 千晴", customerEmail: "c041@example.com", productId: "2", productName: "ニュアンス グラデ", price: 51000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ピンクグラデ", occasion: "結婚式", designWish: "春の結婚式グラデ×3セット", status: "completed" },
  { id: "ORD-042", date: "2026-03-23", customerName: "原田 朋香", customerEmail: "c042@example.com", productId: "3", productName: "フラワー アート", price: 54000, nailShape: "ラウンド", nailLength: "ショート", colorPref: "ピンク系", occasion: "卒業式", designWish: "卒業式フラワーアート×3セット", status: "completed" },
  { id: "ORD-043", date: "2026-03-26", customerName: "石田 瑠奈", customerEmail: "c043@example.com", productId: "6", productName: "カラー グラデ", price: 16000, nailShape: "バレリーナ", nailLength: "ロング", colorPref: "ピンク系", occasion: "パーティー", designWish: "春パーティー用カラーグラデ", status: "completed" },
  { id: "ORD-044", date: "2026-03-27", customerName: "菅野 栞", customerEmail: "c044@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "イエロー系", occasion: "お花見", designWish: "お花見向けポップなフラワー", status: "completed" },
  { id: "ORD-045", date: "2026-03-30", customerName: "高橋 恵", customerEmail: "c045@example.com", productId: "4", productName: "ニュアンス アート", price: 17000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "クリア系", occasion: "日常使い", designWish: "透け感のあるニュアンスアート", status: "completed" },
  { id: "ORD-046", date: "2026-03-30", customerName: "中川 美波", customerEmail: "c046@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "スクエア", nailLength: "ショート", colorPref: "クリア×ホワイト", occasion: "日常使い", designWish: "短め清潔感フレンチ", status: "completed" },
  { id: "ORD-047", date: "2026-03-31", customerName: "平野 夏帆", customerEmail: "c047@example.com", productId: "4", productName: "ニュアンス アート", price: 17000, nailShape: "オーバル", nailLength: "ロング", colorPref: "スモーキー系", occasion: "日常使い", designWish: "スモーキーロングニュアンス", status: "completed" },

  // ---- 4月（モック） ----
  { id: "ORD-048", date: "2026-04-01", customerName: "石川 芽衣", customerEmail: "c048@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ピンク系", occasion: "入学式", designWish: "入学式向けピンクフラワー", status: "completed" },
  { id: "ORD-049", date: "2026-04-02", customerName: "山田 心春", customerEmail: "c049@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "ピンクグラデ", occasion: "お花見", designWish: "春らしいピンクグラデ", status: "completed" },
  { id: "ORD-050", date: "2026-04-03", customerName: "田中 友梨", customerEmail: "c050@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "スクエア", nailLength: "ミディアム", colorPref: "クリア×ホワイト", occasion: "入社式", designWish: "入社式用清楚なフレンチ", status: "completed" },
  { id: "ORD-051", date: "2026-04-04", customerName: "木村 唯", customerEmail: "c051@example.com", productId: "3", productName: "フラワー アート", price: 36000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "イエロー系", occasion: "お花見", designWish: "お花見フラワーアート×2セット", status: "completed" },
  { id: "ORD-052", date: "2026-04-06", customerName: "佐々木 綾音", customerEmail: "c052@example.com", productId: "4", productName: "ニュアンス アート", price: 17000, nailShape: "オーバル", nailLength: "ロング", colorPref: "クリア系", occasion: "日常使い", designWish: "押し花ニュアンスアート", status: "completed" },
  { id: "ORD-053", date: "2026-04-07", customerName: "中村 梨花", customerEmail: "c053@example.com", productId: "5", productName: "ラグジュアリー デザイン", price: 20000, nailShape: "バレリーナ", nailLength: "ロング", colorPref: "ゴールド系", occasion: "結婚式", designWish: "ゴールドストーンで豪華に", status: "completed" },
  { id: "ORD-054", date: "2026-04-09", customerName: "渡辺 悠", customerEmail: "c054@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "ラウンド", nailLength: "ショート", colorPref: "ベージュグラデ", occasion: "日常使い", designWish: "ショートナチュラルグラデ", status: "completed" },
  { id: "ORD-055", date: "2026-04-10", customerName: "小林 日向", customerEmail: "c055@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "スクエア", nailLength: "ロング", colorPref: "クリア×ホワイト", occasion: "日常使い", designWish: "ロングシンプルフレンチ", status: "completed" },
  { id: "ORD-056", date: "2026-04-11", customerName: "加藤 桃花", customerEmail: "c056@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ピンク系", occasion: "パーティー", designWish: "ロングのピンクフラワーアート", status: "completed" },
  { id: "ORD-057", date: "2026-04-13", customerName: "吉田 亜美", customerEmail: "c057@example.com", productId: "4", productName: "ニュアンス アート", price: 34000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "スモーキー系", occasion: "パーティー", designWish: "スモーキーニュアンスアート×2セット", status: "completed" },
  { id: "ORD-058", date: "2026-04-14", customerName: "山口 陽菜", customerEmail: "c058@example.com", productId: "5", productName: "ラグジュアリー デザイン", price: 20000, nailShape: "スティレット", nailLength: "ロング", colorPref: "シルバー系", occasion: "パーティー", designWish: "シルバーパールで豪華に", status: "completed" },
  { id: "ORD-059", date: "2026-04-15", customerName: "松田 紗良", customerEmail: "c059@example.com", productId: "2", productName: "ニュアンス グラデ", price: 51000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ピンクグラデ", occasion: "結婚式", designWish: "春の結婚式グラデ×3セット", status: "completed" },
  { id: "ORD-060", date: "2026-04-17", customerName: "井上 みのり", customerEmail: "c060@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "イエロー系", occasion: "お花見", designWish: "ひまわりモチーフフラワー", status: "completed" },
  { id: "ORD-061", date: "2026-04-19", customerName: "木下 風香", customerEmail: "c061@example.com", productId: "1", productName: "シンプル フレンチ", price: 30000, nailShape: "スクエア", nailLength: "ショート", colorPref: "ベージュ×ホワイト", occasion: "日常使い", designWish: "シンプルベージュフレンチ×2セット", status: "completed" },
  { id: "ORD-062", date: "2026-04-21", customerName: "清水 穂乃香", customerEmail: "c062@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "ホワイトグラデ", occasion: "日常使い", designWish: "淡いホワイトグラデ", status: "completed" },
  { id: "ORD-063", date: "2026-04-23", customerName: "橋本 彩乃", customerEmail: "c063@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ホワイト系", occasion: "結婚式", designWish: "ウェディングフラワーアート", status: "completed" },
  { id: "ORD-064", date: "2026-04-25", customerName: "山崎 萌香", customerEmail: "c064@example.com", productId: "5", productName: "ラグジュアリー デザイン", price: 20000, nailShape: "バレリーナ", nailLength: "ロング", colorPref: "ローズゴールド系", occasion: "パーティー", designWish: "ローズゴールドの豪華デザイン", status: "completed" },
  { id: "ORD-065", date: "2026-04-27", customerName: "福田 美羽", customerEmail: "c065@example.com", productId: "4", productName: "ニュアンス アート", price: 17000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "テラコッタ系", occasion: "日常使い", designWish: "テラコッタニュアンス", status: "shipped" },
  { id: "ORD-066", date: "2026-04-29", customerName: "岡田 侑奈", customerEmail: "c066@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "ラウンド", nailLength: "ショート", colorPref: "ピンクグラデ", occasion: "日常使い", designWish: "可愛いショートグラデ", status: "shipped" },
  { id: "ORD-067", date: "2026-04-30", customerName: "前田 菜月", customerEmail: "c067@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "スクエア", nailLength: "ミディアム", colorPref: "クリア×ホワイト", occasion: "日常使い", designWish: "清楚なミディアムフレンチ", status: "in_progress" },

  // ---- 5月（モック、〜5/17） ----
  { id: "ORD-068", date: "2026-05-01", customerName: "後藤 琉花", customerEmail: "c068@example.com", productId: "3", productName: "フラワー アート", price: 18000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ピンク系", occasion: "母の日", designWish: "母の日用ピンクフラワー", status: "in_progress" },
  { id: "ORD-069", date: "2026-05-03", customerName: "小川 愛莉", customerEmail: "c069@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "ホワイトグラデ", occasion: "ゴールデンウィーク", designWish: "GW向けきれいめグラデ", status: "in_progress" },
  { id: "ORD-070", date: "2026-05-05", customerName: "西村 千尋", customerEmail: "c070@example.com", productId: "5", productName: "ラグジュアリー デザイン", price: 20000, nailShape: "バレリーナ", nailLength: "ロング", colorPref: "ゴールド系", occasion: "パーティー", designWish: "ゴールドラグジュアリーデザイン", status: "in_progress" },
  { id: "ORD-071", date: "2026-05-07", customerName: "村上 蘭", customerEmail: "c071@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "スクエア", nailLength: "ミディアム", colorPref: "クリア×ホワイト", occasion: "日常使い", designWish: "清楚なフレンチ", status: "confirmed" },
  { id: "ORD-072", date: "2026-05-08", customerName: "藤田 ゆめ", customerEmail: "c072@example.com", productId: "4", productName: "ニュアンス アート", price: 17000, nailShape: "オーバル", nailLength: "ロング", colorPref: "クリア系", occasion: "日常使い", designWish: "繊細なニュアンスアート", status: "confirmed" },
  { id: "ORD-073", date: "2026-05-10", customerName: "中島 結菜", customerEmail: "c073@example.com", productId: "3", productName: "フラワー アート", price: 36000, nailShape: "ラウンド", nailLength: "ミディアム", colorPref: "ピンク系", occasion: "母の日", designWish: "母の日フラワー×2セット", status: "confirmed" },
  { id: "ORD-074", date: "2026-05-12", customerName: "岩田 陽葵", customerEmail: "c074@example.com", productId: "2", productName: "ニュアンス グラデ", price: 17000, nailShape: "オーバル", nailLength: "ロング", colorPref: "ピンクグラデ", occasion: "日常使い", designWish: "春っぽいピンクグラデ", status: "pending" },
  { id: "ORD-075", date: "2026-05-14", customerName: "上田 紬", customerEmail: "c075@example.com", productId: "1", productName: "シンプル フレンチ", price: 15000, nailShape: "ラウンド", nailLength: "ショート", colorPref: "ベージュ×ホワイト", occasion: "日常使い", designWish: "控えめショートフレンチ", status: "pending" },
  { id: "ORD-076", date: "2026-05-15", customerName: "河野 鈴", customerEmail: "c076@example.com", productId: "5", productName: "ラグジュアリー デザイン", price: 20000, nailShape: "スティレット", nailLength: "ロング", colorPref: "シルバー系", occasion: "パーティー", designWish: "シルバーストーンのラグジュアリー", status: "pending" },
  { id: "ORD-077", date: "2026-05-17", customerName: "竹内 彩花", customerEmail: "c077@example.com", productId: "4", productName: "ニュアンス アート", price: 17000, nailShape: "オーバル", nailLength: "ミディアム", colorPref: "スモーキー系", occasion: "日常使い", designWish: "スモーキーニュアンスアート", status: "pending" },
];

export const mockInquiries: Inquiry[] = [
  { id: "INQ-001", date: "2026-05-15", customerName: "佐藤 七奈", customerEmail: "sato@example.com", subject: "商品について", message: "サイズが合わない場合はどうすればいいですか？手のサイズが小さめで心配です。", status: "unread" },
  { id: "INQ-002", date: "2026-05-13", customerName: "林 歩美", customerEmail: "hayashi@example.com", subject: "注文・お支払いについて", message: "銀行振込以外の支払い方法はありますか？クレジットカードは使えますか？", status: "replied" },
  { id: "INQ-003", date: "2026-05-10", customerName: "池田 佳奈", customerEmail: "ikeda@example.com", subject: "配送について", message: "北海道への配送は何日くらいかかりますか？", status: "replied" },
  { id: "INQ-004", date: "2026-05-07", customerName: "志水 美帆", customerEmail: "shimizu@example.com", subject: "その他", message: "参考画像を送りたいのですが、どこに送ればいいですか？", status: "closed" },
  { id: "INQ-005", date: "2026-05-14", customerName: "山田 由加", customerEmail: "yamada@example.com", subject: "商品について", message: "フラワーアートのお花の種類は選べますか？バラをお願いしたいです。", status: "unread" },
];
