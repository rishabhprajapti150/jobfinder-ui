import { BarChart3, TrendingUp, Users, Briefcase, DollarSign, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button  from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/redix-ui-select";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data
const overviewStats = [
  { title: "Total Revenue", value: "$247,893", change: "+23.4%", icon: DollarSign },
  { title: "New Users", value: "1,247", change: "+12.5%", icon: Users },
  { title: "Jobs Posted", value: "389", change: "+8.2%", icon: Briefcase },
  { title: "Success Rate", value: "84.2%", change: "+5.1%", icon: TrendingUp }
];

const monthlyData = [
  { month: "January", users: 2341, jobs: 456, applications: 3421, revenue: "$45,231" },
  { month: "February", users: 2698, jobs: 523, applications: 4123, revenue: "$52,847" },
  { month: "March", users: 2847, jobs: 612, applications: 4856, revenue: "$58,923" },
  { month: "April", users: 3124, jobs: 689, applications: 5234, revenue: "$64,125" },
  { month: "May", users: 3456, jobs: 734, applications: 5892, revenue: "$71,456" },
  { month: "June", users: 3721, jobs: 823, applications: 6421, revenue: "$78,934" }
];

const topCategories = [
  { category: "Technology", jobs: 234, applications: 1842, conversionRate: "12.7%" },
  { category: "Marketing", jobs: 189, applications: 1456, conversionRate: "13.0%" },
  { category: "Design", jobs: 156, applications: 1234, conversionRate: "12.6%" },
  { category: "Sales", jobs: 142, applications: 1098, conversionRate: "12.9%" },
  { category: "Finance", jobs: 123, applications: 987, conversionRate: "12.5%" }
];

const topCompanies = [
  { name: "TechCorp Inc.", jobsPosted: 45, applications: 567, revenue: "$8,234" },
  { name: "StartupXYZ", jobsPosted: 32, applications: 421, revenue: "$6,789" },
  { name: "DataCorp", jobsPosted: 28, applications: 356, revenue: "$5,456" },
  { name: "Design Studio", jobsPosted: 24, applications: 298, revenue: "$4,321" },
  { name: "Growth Co.", jobsPosted: 21, applications: 267, revenue: "$3,987" }
];

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Track performance and growth metrics</p>
        </div>
        <div className="flex space-x-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-3 w-3 text-success" />
                    <p className="text-xs text-success">{stat.change}</p>
                  </div>
                </div>
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Performance */}
        <Card className="bg-gradient-card shadow-soft">
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead>Users</TableHead>
                  <TableHead>Jobs</TableHead>
                  <TableHead>Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {monthlyData.map((data) => (
                  <TableRow key={data.month}>
                    <TableCell className="font-medium">{data.month}</TableCell>
                    <TableCell>{data.users.toLocaleString()}</TableCell>
                    <TableCell>{data.jobs}</TableCell>
                    <TableCell>{data.revenue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Top Categories */}
        <Card className="bg-gradient-card shadow-soft">
          <CardHeader>
            <CardTitle>Top Job Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCategories.map((category, index) => (
                <div key={category.category} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{category.category}</p>
                      <p className="text-sm text-muted-foreground">{category.jobs} jobs posted</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{category.applications}</p>
                    <Badge variant="secondary">{category.conversionRate}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Companies */}
        <Card className="bg-gradient-card shadow-soft">
          <CardHeader>
            <CardTitle>Top Performing Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company</TableHead>
                  <TableHead>Jobs</TableHead>
                  <TableHead>Applications</TableHead>
                  <TableHead>Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topCompanies.map((company) => (
                  <TableRow key={company.name}>
                    <TableCell className="font-medium">{company.name}</TableCell>
                    <TableCell>{company.jobsPosted}</TableCell>
                    <TableCell>{company.applications}</TableCell>
                    <TableCell>{company.revenue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <Card className="bg-gradient-card shadow-soft">
          <CardHeader>
            <CardTitle>Key Performance Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Job Success Rate</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 h-2 bg-muted rounded-full">
                    <div className="w-[84%] h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">84%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">User Retention</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 h-2 bg-muted rounded-full">
                    <div className="w-[76%] h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">76%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Application Rate</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 h-2 bg-muted rounded-full">
                    <div className="w-[89%] h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">89%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Revenue Growth</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 h-2 bg-muted rounded-full">
                    <div className="w-[92%] h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">92%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}