import LatestInvoices from "@/app/ui/dashboard/latest-invoices"

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Invoices</h1>
      <LatestInvoices />
    </div>
  )
}