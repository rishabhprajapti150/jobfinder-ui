"use client"
import { Users, Briefcase, Building, TrendingUp, Eye, CheckCircle, XCircle, Clock } from "lucide-react";
import  StatsCard  from './_Layout/StatsCard'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import  Button  from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data
const stats = [
  {
    title: "Total Users",
    value: "2,847",
    change: { value: "12.5%", isPositive: true },
    icon: <Users className="h-5 w-5 text-primary" />
  },
  {
    title: "Active Jobs",
    value: "1,234",
    change: { value: "8.2%", isPositive: true },
    icon: <Briefcase className="h-5 w-5 text-primary" />
  },
  {
    title: "Companies",
    value: "456",
    change: { value: "15.8%", isPositive: true },
    icon: <Building className="h-5 w-5 text-primary" />
  },
  {
    title: "Applications",
    value: "8,921",
    change: { value: "23.1%", isPositive: true },
    icon: <TrendingUp className="h-5 w-5 text-primary" />
  }
];

const recentJobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechCorp Inc.",
    status: "pending",
    applications: 24,
    postedAt: "2 hours ago"
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Design Studio",
    status: "approved",
    applications: 18,
    postedAt: "5 hours ago"
  },
  {
    id: 3,
    title: "Product Manager",
    company: "StartupXYZ",
    status: "rejected",
    applications: 0,
    postedAt: "1 day ago"
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataCorp",
    status: "approved",
    applications: 32,
    postedAt: "2 days ago"
  }
];

const recentUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    type: "job_seeker",
    joinedAt: "2 hours ago",
    status: "active"
  },
  {
    id: 2,
    name: "TechCorp Inc.",
    email: "hr@techcorp.com",
    type: "employer",
    joinedAt: "5 hours ago",
    status: "pending"
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "jane@example.com",
    type: "job_seeker",
    joinedAt: "1 day ago",
    status: "active"
  }
];

 const  AdminDashboard=()=> {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-success text-success-foreground">Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "active":
        return <Badge className="bg-success text-success-foreground">Active</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your job platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Job Posts */}
        <Card className="bg-gradient-card shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Job Posts
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Applications</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{job.title}</p>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(job.status)}</TableCell>
                    <TableCell>{job.applications}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Users */}
        <Card className="bg-gradient-card shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Users
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {user.type === "job_seeker" ? "Job Seeker" : "Employer"}
                      </Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-card shadow-soft">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex flex-col items-center justify-center space-y-2">
              <CheckCircle className="h-6 w-6" />
              <span>Approve Jobs</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Users className="h-6 w-6" />
              <span>Manage Users</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Building className="h-6 w-6" />
              <span>Verify Companies</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default AdminDashboard


