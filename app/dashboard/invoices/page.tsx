import LatestInvoices from "@/app/ui/dashboard/latest-invoices"
import { Suspense } from "react"

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Invoices</h1>
      <Suspense fallback={<p>Loading feed...</p>}>
      <LatestInvoices />
      </Suspense>
    </div>
  )
}