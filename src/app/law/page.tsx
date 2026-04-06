import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "特定商取引法に基づく表記" };

export default function LawPage() {
  const { company, bank, policy, siteName } = siteConfig;

  return (
    <>
      <div className="page-header">
        <h1>特定商取引法に基づく表記</h1>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <table className="info-table">
            <tbody>
              {[
                ["販売業者", company.name],
                ["代表責任者", company.representative],
                ["所在地", `〒${company.postalCode} ${company.address}`],
                ["電話番号", `${company.tel}（${company.businessHours}）`],
                ["メールアドレス", company.email],
                ["販売URL", `https://www.${siteName.toLowerCase().replace(/\s+/g, "-")}.jp`],
                ["販売価格", "各商品ページに記載（税込）"],
                ["商品代金以外の必要料金", `送料：${policy.shippingFee}（${policy.freeShippingOver.toLocaleString()}円以上で送料無料）`],
                ["支払方法", "銀行振込"],
                ["支払時期", "ご注文後3日以内にお振込みください"],
                ["振込先", `${bank.bankName} ${bank.branchName} ${bank.accountType} ${bank.accountNumber} ${bank.accountHolder}`],
                ["商品引渡し時期", "ご入金確認後、3〜5営業日以内に発送"],
                ["返品・交換", `${policy.returnPeriod}以内。${policy.returnNote}`],
                ["返品送料", "お客様都合による返品の場合はお客様負担。当社都合の場合は当社負担。"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <th>{label}</th>
                  <td style={{ lineHeight: 1.8 }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
