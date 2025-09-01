"use client"
import { useState } from "react";
import { CreditCard, Search, MoreHorizontal, Eye, Download, RefreshCw, DollarSign, TrendingUp } from "lucide-react";
import Button  from "@/components/ui/button";
import Input  from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/redix-ui-select";

// Mock data
const transactions = [
  {
    id: "TXN-001",
    company: "TechCorp Inc.",
    plan: "Premium",
    amount: "$299.00",
    status: "completed",
    method: "Credit Card",
    date: "2024-01-25",
    invoiceId: "INV-2024-001"
  },
  {
    id: "TXN-002",
    company: "Design Studio",
    plan: "Basic",
    amount: "$99.00",
    status: "completed",
    method: "PayPal",
    date: "2024-01-24",
    invoiceId: "INV-2024-002"
  },
  {
    id: "TXN-003",
    company: "StartupXYZ",
    plan: "Enterprise",
    amount: "$599.00",
    status: "pending",
    method: "Bank Transfer",
    date: "2024-01-23",
    invoiceId: "INV-2024-003"
  },
  {
    id: "TXN-004",
    company: "DataCorp",
    plan: "Premium",
    amount: "$299.00",
    status: "failed",
    method: "Credit Card",
    date: "2024-01-22",
    invoiceId: "INV-2024-004"
  },
  {
    id: "TXN-005",
    company: "Growth Co.",
    plan: "Basic",
    amount: "$99.00",
    status: "refunded",
    method: "Credit Card",
    date: "2024-01-21",
    invoiceId: "INV-2024-005"
  }
];

const subscriptions = [
  {
    id: 1,
    company: "TechCorp Inc.",
    plan: "Premium",
    status: "active",
    nextBilling: "2024-02-25",
    amount: "$299/month",
    features: ["50 Job Posts", "Priority Support", "Analytics"]
  },
  {
    id: 2,
    company: "Design Studio",
    plan: "Basic",
    status: "active",
    nextBilling: "2024-02-24",
    amount: "$99/month",
    features: ["10 Job Posts", "Basic Support"]
  },
  {
    id: 3,
    company: "StartupXYZ",
    plan: "Enterprise",
    status: "trial",
    nextBilling: "2024-02-05",
    amount: "$599/month",
    features: ["Unlimited Posts", "Priority Support", "Custom Branding"]
  }
];

const stats = [
  { title: "Monthly Revenue", value: "$24,789", icon: DollarSign, change: "+12.5%" },
  { title: "Active Subscriptions", value: "156", icon: CreditCard, change: "+8.2%" },
  { title: "Avg. Revenue Per User", value: "$158", icon: TrendingUp, change: "+15.8%" },
  { title: "Payment Success Rate", value: "94.2%", icon: CreditCard, change: "+2.1%" }
];

export default function Payments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("transactions");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success text-success-foreground">Completed</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      case "refunded":
        return <Badge variant="outline">Refunded</Badge>;
      case "active":
        return <Badge className="bg-success text-success-foreground">Active</Badge>;
      case "trial":
        return <Badge variant="secondary">Trial</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPlanBadge = (plan: string) => {
    const planColors = {
      "Basic": "bg-blue-100 text-blue-800",
      "Premium": "bg-purple-100 text-purple-800",
      "Enterprise": "bg-green-100 text-green-800"
    };
    return (
      <Badge className={planColors[plan as keyof typeof planColors] || "bg-gray-100 text-gray-800"}>
        {plan}
      </Badge>
    );
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || transaction.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Payments & Billing</h1>
          <p className="text-muted-foreground">Manage subscriptions, transactions, and billing</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <RefreshCw className="h-4 w-4 mr-2" />
            Sync Payments
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-success">{stat.change}</p>
                </div>
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        <Button
          variant={activeTab === "transactions" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("transactions")}
        >
          Transactions
        </Button>
        <Button
          variant={activeTab === "subscriptions" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("subscriptions")}
        >
          Subscriptions
        </Button>
      </div>

      {activeTab === "transactions" && (
        <>
          {/* Filters */}
          <Card className="bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search transactions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                    <SelectItem value="refunded">Refunded</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Transactions Table */}
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle>Recent Transactions ({filteredTransactions.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.company}</TableCell>
                      <TableCell>{getPlanBadge(transaction.plan)}</TableCell>
                      <TableCell className="font-medium">{transaction.amount}</TableCell>
                      <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="h-4 w-4 mr-2" />
                              Download Invoice
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <RefreshCw className="h-4 w-4 mr-2" />
                              Refund
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </>
      )}

      {activeTab === "subscriptions" && (
        <Card className="bg-gradient-card shadow-soft">
          <CardHeader>
            <CardTitle>Active Subscriptions ({subscriptions.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {subscriptions.map((subscription) => (
                <div key={subscription.id} className="border rounded-lg p-6 bg-card">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-lg">{subscription.company}</h3>
                        {getPlanBadge(subscription.plan)}
                        {getStatusBadge(subscription.status)}
                      </div>
                      <p className="text-2xl font-bold text-primary">{subscription.amount}</p>
                      <p className="text-sm text-muted-foreground">
                        Next billing: {subscription.nextBilling}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {subscription.features.map((feature, index) => (
                          <Badge key={index} variant="secondary">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Change Plan
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Cancel Subscription
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}