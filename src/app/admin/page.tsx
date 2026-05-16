import Link from "next/link";
import { mockOrders, mockInquiries } from "./_data/mockData";
import { siteConfig } from "@/config/site";

const STATUS_LABEL: Record<string, string> = {
  pending: "申し込み受付",
  confirmed: "確認済",
  in_progress: "制作中",
  shipped: "発送済",
  completed: "完了",
  cancelled: "キャンセル",
};

const MONTH_LABELS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

function getMonthlySales() {
  const map: Record<string, number> = {};
  mockOrders
    .filter((o) => o.status !== "cancelled")
    .forEach((o) => {
      const month = o.date.slice(0, 7);
      map[month] = (map[month] ?? 0) + o.price;
    });
  return map;
}

function getProductSales() {
  const map: Record<string, { name: string; count: number; total: number }> = {};
  mockOrders
    .filter((o) => o.status !== "cancelled")
    .forEach((o) => {
      if (!map[o.productId]) map[o.productId] = { name: o.productName, count: 0, total: 0 };
      map[o.productId].count += 1;
      map[o.productId].total += o.price;
    });
  return Object.values(map).sort((a, b) => b.total - a.total);
}

export default function AdminDashboard() {
  const totalRevenue = mockOrders.filter((o) => o.status !== "cancelled").reduce((s, o) => s + o.price, 0);
  const totalOrders = mockOrders.filter((o) => o.status !== "cancelled").length;
  const activeOrders = mockOrders.filter((o) => ["pending", "confirmed", "in_progress", "shipped"].includes(o.status)).length;
  const unreadInquiries = mockInquiries.filter((i) => i.status === "unread").length;

  const monthlySales = getMonthlySales();
  const months = Object.keys(monthlySales).sort();
  const maxSales = Math.max(...Object.values(monthlySales));

  const productSales = getProductSales();
  const maxProductTotal = productSales[0]?.total ?? 1;

  const recentOrders = [...mockOrders].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

  return (
    <>
      {/* KPIs */}
      <div className="admin-kpi-grid">
        <div className="admin-kpi-card admin-kpi-accent">
          <div className="admin-kpi-label">累計売上</div>
          <div className="admin-kpi-value">¥{totalRevenue.toLocaleString()}</div>
          <div className="admin-kpi-sub">キャンセル除く</div>
        </div>
        <div className="admin-kpi-card">
          <div className="admin-kpi-label">総注文数</div>
          <div className="admin-kpi-value">{totalOrders}件</div>
          <div className="admin-kpi-sub">累計（キャンセル除く）</div>
        </div>
        <div className="admin-kpi-card">
          <div className="admin-kpi-label">対応中の注文</div>
          <div className="admin-kpi-value">{activeOrders}件</div>
          <div className="admin-kpi-sub">受付〜発送済まで</div>
        </div>
        <div className="admin-kpi-card">
          <div className="admin-kpi-label">未読お問い合わせ</div>
          <div className="admin-kpi-value">{unreadInquiries}件</div>
          <div className="admin-kpi-sub">要返信</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        {/* Monthly Sales Chart */}
        <div className="admin-section">
          <div className="admin-section-header">
            <span className="admin-section-title">月別売上</span>
          </div>
          <div className="admin-chart">
            {months.map((m) => {
              const val = monthlySales[m];
              const pct = maxSales > 0 ? (val / maxSales) * 100 : 0;
              const label = MONTH_LABELS[parseInt(m.slice(5, 7)) - 1];
              return (
                <div key={m} className="admin-bar-row">
                  <div className="admin-bar-label">{label}</div>
                  <div className="admin-bar-track">
                    <div className="admin-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="admin-bar-value">¥{val.toLocaleString()}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Product Sales */}
        <div className="admin-section">
          <div className="admin-section-header">
            <span className="admin-section-title">商品別売上</span>
          </div>
          <div className="admin-chart">
            {productSales.map((p) => {
              const pct = maxProductTotal > 0 ? (p.total / maxProductTotal) * 100 : 0;
              return (
                <div key={p.name} className="admin-bar-row">
                  <div className="admin-bar-label" style={{ width: 90, fontSize: "0.7rem" }}>{p.name}</div>
                  <div className="admin-bar-track">
                    <div className="admin-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="admin-bar-value" style={{ width: 130 }}>
                    ¥{p.total.toLocaleString()} ({p.count}件)
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="admin-section" style={{ marginTop: 24 }}>
        <div className="admin-section-header">
          <span className="admin-section-title">最近の注文</span>
          <Link href="/admin/orders" className="admin-section-link">すべて見る →</Link>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>注文ID</th>
                <th>日付</th>
                <th>お客様</th>
                <th>商品</th>
                <th>金額</th>
                <th>ステータス</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id}>
                  <td style={{ fontFamily: "monospace", fontSize: "0.8rem" }}>{o.id}</td>
                  <td>{o.date}</td>
                  <td>{o.customerName}</td>
                  <td>{o.productName}</td>
                  <td>¥{o.price.toLocaleString()}</td>
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

      {/* Product Count */}
      <div className="admin-section" style={{ marginTop: 24 }}>
        <div className="admin-section-header">
          <span className="admin-section-title">商品数</span>
          <Link href="/admin/products" className="admin-section-link">商品管理 →</Link>
        </div>
        <div style={{ padding: "16px 24px", display: "flex", gap: 32 }}>
          {siteConfig.products.map((p) => (
            <div key={p.id} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.75rem", color: "#71717a", marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontWeight: 700, color: "#C8A84B" }}>¥{p.price.toLocaleString()}</div>
              {p.isNew && <span className="badge badge-confirmed" style={{ marginTop: 4 }}>NEW</span>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
