import { DataTable } from './data-table'
import { columns, type Invoice } from './columns'

// サンプルデータ
const invoiceData: Invoice[] = [
  {
    id: "INV001",
    status: "paid",
    method: "Credit Card",
    amount: 250.00,
  },
  {
    id: "INV002", 
    status: "pending",
    method: "Bank Transfer",
    amount: 150.00,
  },
  {
    id: "INV003",
    status: "unpaid",
    method: "PayPal",
    amount: 350.00,
  },
  {
    id: "INV004",
    status: "paid", 
    method: "Credit Card",
    amount: 450.00,
  },
  {
    id: "INV005",
    status: "pending",
    method: "Bank Transfer", 
    amount: 550.00,
  },
  {
    id: "INV006",
    status: "unpaid",
    method: "PayPal",
    amount: 200.00,
  },
  {
    id: "INV007",
    status: "paid",
    method: "Credit Card",
    amount: 650.00,
  },
  {
    id: "INV008",
    status: "pending",
    method: "Bank Transfer",
    amount: 750.00,
  },
  {
    id: "INV009",
    status: "unpaid",
    method: "PayPal",
    amount: 850.00,
  },
  {
    id: "INV010",
    status: "paid",
    method: "Credit Card",
    amount: 950.00,
  },
  {
    id: "INV011",
    status: "paid",
    method: "Credit Card",
    amount: 1050.00,
  },
  {
    id: "INV012",
    status: "paid",
    method: "Credit Card",
    amount: 1150.00,
  },
  
  
  
]

export default function DataTablePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">請求書管理</h1>
      <DataTable columns={columns} data={invoiceData} />
    </div>
  )
} 