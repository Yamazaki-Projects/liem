import { mockOrders, OrderStatus } from "../_data/mockData";

const STATUS_LABEL: Record<OrderStatus, string> = {
  pending:     "申し込み受付",
  confirmed:   "確認済",
  in_progress: "制作中",
  shipped:     "発送済",
  completed:   "完了",
  cancelled:   "キャンセル",
};

const STATUS_ORDER: OrderStatus[] = ["pending", "confirmed", "in_progress", "shipped", "completed", "cancelled"];

function countByStatus(status: OrderStatus) {
  return mockOrders.filter((o) => o.status === status).length;
}

export default function OrdersPage() {
  const sorted = [...mockOrders].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">注文一覧</h1>
        <span style={{ fontSize: "0.875rem", color: "#71717a" }}>全{mockOrders.length}件</span>
      </div>

      {/* Status summary */}
      <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
        {STATUS_ORDER.map((s) => (
          <div key={s} style={{ background: "#fff", border: "1px solid #e4e4e7", borderRadius: 8, padding: "10px 18px", textAlign: "center", minWidth: 90 }}>
            <div style={{ fontSize: "0.7rem", color: "#71717a", marginBottom: 4 }}>{STATUS_LABEL[s]}</div>
            <div style={{ fontWeight: 700, fontSize: "1.25rem" }}>{countByStatus(s)}</div>
          </div>
        ))}
      </div>

      <div className="admin-section">
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>注文ID</th>
                <th>申し込み日</th>
                <th>お客様名</th>
                <th>メールアドレス</th>
                <th>商品</th>
                <th>ネイルの形</th>
                <th>長さ</th>
                <th>カラー希望</th>
                <th>金額</th>
                <th>ステータス</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((o) => (
                <tr key={o.id}>
                  <td style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#71717a" }}>{o.id}</td>
                  <td style={{ whiteSpace: "nowrap" }}>{o.date}</td>
                  <td style={{ fontWeight: 600 }}>{o.customerName}</td>
                  <td style={{ fontSize: "0.8rem", color: "#71717a" }}>{o.customerEmail}</td>
                  <td>{o.productName}</td>
                  <td>{o.nailShape}</td>
                  <td>{o.nailLength}</td>
                  <td style={{ maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{o.colorPref}</td>
                  <td style={{ fontWeight: 600 }}>¥{o.price.toLocaleString()}</td>
                  <td>
                    <span className={`badge badge-${o.status}`}>
                      {STATUS_LABEL[o.status]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Design requests detail */}
      <div style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: 16, color: "#18181b" }}>デザイン要望一覧</h2>
        {sorted
          .filter((o) => ["pending", "confirmed", "in_progress"].includes(o.status))
          .map((o) => (
            <div key={o.id} className="admin-section" style={{ marginBottom: 12 }}>
              <div className="admin-section-header">
                <div>
                  <span style={{ fontWeight: 700 }}>{o.customerName}</span>
                  <span style={{ color: "#71717a", fontSize: "0.8rem", marginLeft: 12 }}>{o.id} · {o.date}</span>
                </div>
                <span className={`badge badge-${o.status}`}>{STATUS_LABEL[o.status]}</span>
              </div>
              <div style={{ padding: "16px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", fontSize: "0.875rem" }}>
                <div>
                  <span style={{ color: "#71717a" }}>商品：</span>{o.productName}（¥{o.price.toLocaleString()}）
                </div>
                <div>
                  <span style={{ color: "#71717a" }}>シーン：</span>{o.occasion || "—"}
                </div>
                <div>
                  <span style={{ color: "#71717a" }}>形・長さ：</span>{o.nailShape} / {o.nailLength}
                </div>
                <div>
                  <span style={{ color: "#71717a" }}>カラー：</span>{o.colorPref || "—"}
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <span style={{ color: "#71717a" }}>デザイン要望：</span>{o.designWish}
                </div>
                <div>
                  <span style={{ color: "#71717a" }}>メール：</span>
                  <a href={`mailto:${o.customerEmail}`} style={{ color: "#C8A84B" }}>{o.customerEmail}</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
