import Image from "next/image";
import { siteConfig } from "@/config/site";
import { mockOrders } from "../_data/mockData";

const DISCONTINUED = [
  { id: "6", name: "カラー グラデ", price: 16000, category: "ネイルチップ" },
];

function getOrderCount(productId: string) {
  return mockOrders.filter((o) => o.productId === productId && o.status !== "cancelled").length;
}

function getRevenue(productId: string) {
  return mockOrders
    .filter((o) => o.productId === productId && o.status !== "cancelled")
    .reduce((s, o) => s + o.price, 0);
}

export default function ProductsPage() {
  const { products } = siteConfig;

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">商品管理</h1>
        <span style={{ fontSize: "0.875rem", color: "#71717a" }}>{products.length}商品</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {products.map((p) => {
          const orderCount = getOrderCount(p.id);
          const revenue = getRevenue(p.id);

          return (
            <div key={p.id} className="admin-section" style={{ margin: 0 }}>
              <div style={{ position: "relative" }}>
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={300}
                  style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                />
                {p.isNew && (
                  <span className="badge badge-confirmed" style={{ position: "absolute", top: 10, left: 10 }}>
                    NEW
                  </span>
                )}
              </div>

              <div style={{ padding: "16px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#71717a", marginBottom: 2 }}>{p.category}</div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.name}</div>
                  </div>
                  <div style={{ fontWeight: 700, color: "#C8A84B", fontSize: "1.05rem" }}>
                    ¥{p.price.toLocaleString()}
                  </div>
                </div>

                <div style={{ fontSize: "0.8rem", color: "#71717a", lineHeight: 1.6, marginBottom: 12 }}>
                  {p.description.slice(0, 50)}...
                </div>

                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
                  <div style={{ background: "#f9f9f9", borderRadius: 6, padding: "8px 12px", textAlign: "center" }}>
                    <div style={{ fontSize: "0.65rem", color: "#a1a1aa" }}>注文数</div>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{orderCount}件</div>
                  </div>
                  <div style={{ background: "#f9f9f9", borderRadius: 6, padding: "8px 12px", textAlign: "center" }}>
                    <div style={{ fontSize: "0.65rem", color: "#a1a1aa" }}>売上</div>
                    <div style={{ fontWeight: 700, fontSize: "1rem", color: "#C8A84B" }}>¥{revenue.toLocaleString()}</div>
                  </div>
                </div>

                {/* Options */}
                <div style={{ fontSize: "0.75rem", color: "#71717a", marginBottom: 12 }}>
                  <div style={{ marginBottom: 4 }}>
                    <span style={{ fontWeight: 600 }}>サイズ：</span>
                    {p.sizes.join(" / ")}
                  </div>
                  <div>
                    <span style={{ fontWeight: 600 }}>カラー：</span>
                    {p.colors.join(" / ")}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                  <button className="admin-btn admin-btn-outline" style={{ flex: 1 }}>
                    ✏️ 編集
                  </button>
                  <button className="admin-btn admin-btn-danger">
                    削除
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Add new product card */}
        <div
          className="admin-section"
          style={{
            margin: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 320,
            border: "2px dashed #d4d4d8",
            background: "#fafafa",
            cursor: "pointer",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: 12, color: "#d4d4d8" }}>+</div>
          <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#a1a1aa" }}>商品を追加</div>
          <div style={{ fontSize: "0.75rem", color: "#c4c4c8", marginTop: 4 }}>site.ts を編集して追加</div>
        </div>
      </div>

      {/* Stock status table */}
      <div className="admin-section" style={{ marginTop: 24 }}>
        <div className="admin-section-header">
          <span className="admin-section-title">在庫状況</span>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>商品名</th>
                <th>カテゴリ</th>
                <th>価格</th>
                <th>NEW</th>
                <th>受注可否</th>
                <th>注文数</th>
                <th>売上合計</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td style={{ fontWeight: 600 }}>{p.name}</td>
                  <td>{p.category}</td>
                  <td>¥{p.price.toLocaleString()}</td>
                  <td>{p.isNew ? <span className="badge badge-confirmed">NEW</span> : "—"}</td>
                  <td>
                    <span className={`badge ${p.stock ? "badge-shipped" : "badge-cancelled"}`}>
                      {p.stock ? "受注中" : "停止中"}
                    </span>
                  </td>
                  <td>{getOrderCount(p.id)}件</td>
                  <td style={{ fontWeight: 600, color: "#C8A84B" }}>¥{getRevenue(p.id).toLocaleString()}</td>
                </tr>
              ))}
              {DISCONTINUED.map((p) => (
                <tr key={p.id} style={{ opacity: 0.6 }}>
                  <td style={{ fontWeight: 600 }}>{p.name}</td>
                  <td>{p.category}</td>
                  <td>¥{p.price.toLocaleString()}</td>
                  <td>—</td>
                  <td><span className="badge badge-cancelled">廃番</span></td>
                  <td>{getOrderCount(p.id)}件</td>
                  <td style={{ fontWeight: 600 }}>¥{getRevenue(p.id).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
