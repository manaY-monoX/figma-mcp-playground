"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../components/mono-x/Button"
import { Badge } from "../components/mono-x/Badge"

// 請求書データの型定義
export type Invoice = {
  id: string
  status: "pending" | "paid" | "unpaid"
  method: string
  amount: number
}

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="outline"
          size="small"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-2 border-none bg-transparent text-mono-x-black hover:bg-mono-x-yellow/20"
        >
          請求書
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="outline"
            size="small"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-2 border-none bg-transparent text-mono-x-black hover:bg-mono-x-yellow/20"
          >
            ステータス
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      
      const statusLabels = {
        paid: "支払済み",
        pending: "保留中", 
        unpaid: "未払い",
      }
      
      const label = statusLabels[status as keyof typeof statusLabels]
      
      return (
        <div className="text-center">
          <Badge variant={status as "paid" | "pending" | "unpaid"}>
            {label}
          </Badge>
        </div>
      )
    },
  },
  {
    accessorKey: "method",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="outline"
            size="small"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-2 border-none bg-transparent text-mono-x-black hover:bg-mono-x-yellow/20"
          >
            支払い方法
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("method")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="outline"
            size="small"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-2 border-none bg-transparent text-mono-x-black hover:bg-mono-x-yellow/20"
          >
            金額
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
] 