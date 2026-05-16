import { mockInquiries, InquiryStatus } from "../_data/mockData";

const STATUS_LABEL: Record<InquiryStatus, string> = {
  unread:  "未読",
  replied: "返信済",
  closed:  "対応完了",
};

export default function InquiriesPage() {
  const sorted = [...mockInquiries].sort((a, b) => b.date.localeCompare(a.date));
  const unread = sorted.filter((i) => i.status === "unread");
  const others = sorted.filter((i) => i.status !== "unread");

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">お問い合わせ一覧</h1>
        <span style={{ fontSize: "0.875rem", color: "#71717a" }}>全{mockInquiries.length}件</span>
      </div>

      {/* Summary chips */}
      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        {(["unread", "replied", "closed"] as InquiryStatus[]).map((s) => {
          const cnt = mockInquiries.filter((i) => i.status === s).length;
          return (
            <div key={s} style={{ background: "#fff", border: "1px solid #e4e4e7", borderRadius: 8, padding: "10px 18px", textAlign: "center", minWidth: 90 }}>
              <div style={{ fontSize: "0.7rem", color: "#71717a", marginBottom: 4 }}>{STATUS_LABEL[s]}</div>
              <div style={{ fontWeight: 700, fontSize: "1.25rem" }}>{cnt}</div>
            </div>
          );
        })}
      </div>

      {/* Unread section */}
      {unread.length > 0 && (
        <>
          <h2 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#92400e", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
            <span>⚠️</span> 未読（要返信）
          </h2>
          {unread.map((i) => (
            <div key={i.id} className="admin-section" style={{ marginBottom: 12, borderLeft: "4px solid #f59e0b" }}>
              <div className="admin-section-header">
                <div>
                  <span style={{ fontWeight: 700 }}>{i.customerName}</span>
                  <span style={{ color: "#71717a", fontSize: "0.8rem", marginLeft: 12 }}>
                    {i.id} · {i.date}
                  </span>
                  <span style={{ marginLeft: 12, fontSize: "0.8rem", fontWeight: 600, color: "#52525b" }}>
                    [{i.subject}]
                  </span>
                </div>
                <span className={`badge badge-${i.status}`}>{STATUS_LABEL[i.status]}</span>
              </div>
              <div style={{ padding: "16px 24px" }}>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "#3f3f46", marginBottom: 16 }}>
                  {i.message}
                </p>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <a
                    href={`mailto:${i.customerEmail}?subject=Re: ${i.subject}&body=`}
                    className="admin-btn admin-btn-primary"
                  >
                    ✉️ 返信する
                  </a>
                  <span style={{ fontSize: "0.8rem", color: "#71717a" }}>{i.customerEmail}</span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      {/* All inquiries table */}
      <div className="admin-section" style={{ marginTop: unread.length > 0 ? 24 : 0 }}>
        <div className="admin-section-header">
          <span className="admin-section-title">全お問い合わせ</span>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>受信日</th>
                <th>お名前</th>
                <th>メールアドレス</th>
                <th>種別</th>
                <th>内容（抜粋）</th>
                <th>ステータス</th>
                <th>アクション</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((i) => (
                <tr key={i.id}>
                  <td style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#71717a" }}>{i.id}</td>
                  <td style={{ whiteSpace: "nowrap" }}>{i.date}</td>
                  <td style={{ fontWeight: 600 }}>{i.customerName}</td>
                  <td style={{ fontSize: "0.8rem", color: "#71717a" }}>{i.customerEmail}</td>
                  <td>{i.subject}</td>
                  <td style={{ maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "0.8rem", color: "#52525b" }}>
                    {i.message}
                  </td>
                  <td>
                    <span className={`badge badge-${i.status}`}>{STATUS_LABEL[i.status]}</span>
                  </td>
                  <td>
                    <a
                      href={`mailto:${i.customerEmail}?subject=Re: ${i.subject}`}
                      className="admin-btn admin-btn-outline"
                      style={{ fontSize: "0.75rem", padding: "4px 10px" }}
                    >
                      返信
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
