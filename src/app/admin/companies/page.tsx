// import { useState } from "react";
// import { Building, Search, MoreHorizontal, Eye, Edit, Trash2, Plus, CheckCircle, XCircle, Globe } from "lucide-react";
// import  Button  from "@/components/ui/button";
// import  Input  from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/redix-ui-select";

// // Mock data
// const companies = [
//   {
//     id: 1,
//     name: "TechCorp Inc.",
//     email: "hr@techcorp.com",
//     website: "https://techcorp.com",
//     industry: "Technology",
//     size: "500-1000",
//     location: "New York, NY",
//     status: "verified",
//     jobsPosted: 24,
//     totalApplications: 486,
//     joinedAt: "2024-01-10",
//     logo: "/placeholder.svg"
//   },
//   {
//     id: 2,
//     name: "Design Studio",
//     email: "hello@designstudio.com",
//     website: "https://designstudio.com",
//     industry: "Design",
//     size: "10-50",
//     location: "Remote",
//     status: "pending",
//     jobsPosted: 8,
//     totalApplications: 156,
//     joinedAt: "2024-01-15",
//     logo: "/placeholder.svg"
//   },
//   {
//     id: 3,
//     name: "StartupXYZ",
//     email: "team@startupxyz.com",
//     website: "https://startupxyz.com",
//     industry: "Fintech",
//     size: "10-50",
//     location: "San Francisco, CA",
//     status: "rejected",
//     jobsPosted: 3,
//     totalApplications: 42,
//     joinedAt: "2024-01-20",
//     logo: "/placeholder.svg"
//   },
//   {
//     id: 4,
//     name: "DataCorp",
//     email: "hiring@datacorp.com",
//     website: "https://datacorp.com",
//     industry: "Technology",
//     size: "100-500",
//     location: "Boston, MA",
//     status: "verified",
//     jobsPosted: 15,
//     totalApplications: 324,
//     joinedAt: "2024-01-05",
//     logo: "/placeholder.svg"
//   },
//   {
//     id: 5,
//     name: "Growth Co.",
//     email: "hr@growthco.com",
//     website: "https://growthco.com",
//     industry: "Marketing",
//     size: "50-100",
//     location: "Chicago, IL",
//     status: "suspended",
//     jobsPosted: 12,
//     totalApplications: 218,
//     joinedAt: "2024-01-12",
//     logo: "/placeholder.svg"
//   }
// ];

// const stats = [
//   { title: "Total Companies", value: "456", icon: Building, change: "+15.8%" },
//   { title: "Verified", value: "312", icon: Building, change: "+12.3%" },
//   { title: "Pending Review", value: "23", icon: Building, change: "+5.1%" },
//   { title: "Active This Month", value: "89", icon: Building, change: "+8.7%" }
// ];

// export default function CompanyManagement() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [industryFilter, setIndustryFilter] = useState("all");

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case "verified":
//         return <Badge className="bg-success text-success-foreground">Verified</Badge>;
//       case "suspended":
//         return <Badge variant="destructive">Suspended</Badge>;
//       case "pending":
//         return <Badge variant="secondary">Pending</Badge>;
//       case "rejected":
//         return <Badge variant="destructive">Rejected</Badge>;
//       default:
//         return <Badge variant="outline">{status}</Badge>;
//     }
//   };

//   const filteredCompanies = companies.filter(company => {
//     const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          company.email.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus = statusFilter === "all" || company.status === statusFilter;
//     const matchesIndustry = industryFilter === "all" || company.industry === industryFilter;
//     return matchesSearch && matchesStatus && matchesIndustry;
//   });

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="text-3xl font-bold text-foreground">Company Management</h1>
//           <p className="text-muted-foreground">Verify and manage companies on your platform</p>
//         </div>
//         <Button>
//           <Plus className="h-4 w-4 mr-2" />
//           Add Company
//         </Button>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => (
//           <Card key={index} className="bg-gradient-card shadow-soft">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
//                   <p className="text-2xl font-bold text-foreground">{stat.value}</p>
//                   <p className="text-xs text-success">{stat.change}</p>
//                 </div>
//                 <stat.icon className="h-8 w-8 text-primary" />
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Filters */}
//       <Card className="bg-gradient-card shadow-soft">
//         <CardContent className="p-6">
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   placeholder="Search companies by name or email..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10"
//                 />
//               </div>
//             </div>
//             <Select value={statusFilter} onValueChange={setStatusFilter}>
//               <SelectTrigger className="w-[150px]">
//                 <SelectValue placeholder="Status" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Status</SelectItem>
//                 <SelectItem value="verified">Verified</SelectItem>
//                 <SelectItem value="pending">Pending</SelectItem>
//                 <SelectItem value="rejected">Rejected</SelectItem>
//                 <SelectItem value="suspended">Suspended</SelectItem>
//               </SelectContent>
//             </Select>
//             <Select value={industryFilter} onValueChange={setIndustryFilter}>
//               <SelectTrigger className="w-[150px]">
//                 <SelectValue placeholder="Industry" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Industries</SelectItem>
//                 <SelectItem value="Technology">Technology</SelectItem>
//                 <SelectItem value="Design">Design</SelectItem>
//                 <SelectItem value="Fintech">Fintech</SelectItem>
//                 <SelectItem value="Marketing">Marketing</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Companies Table */}
//       <Card className="bg-gradient-card shadow-soft">
//         <CardHeader>
//           <CardTitle className="flex items-center justify-between">
//             <span>Companies ({filteredCompanies.length})</span>
//             <div className="flex space-x-2">
//               <Button variant="outline" size="sm">
//                 <CheckCircle className="h-4 w-4 mr-2" />
//                 Bulk Verify
//               </Button>
//               <Button variant="outline" size="sm">
//                 <XCircle className="h-4 w-4 mr-2" />
//                 Bulk Reject
//               </Button>
//             </div>
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Company</TableHead>
//                 <TableHead>Industry</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Activity</TableHead>
//                 <TableHead>Joined</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredCompanies.map((company) => (
//                 <TableRow key={company.id}>
//                   <TableCell>
//                     <div className="flex items-center space-x-3">
//                       <Avatar>
//                         <AvatarImage src={company.logo} />
//                         <AvatarFallback>{company.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
//                       </Avatar>
//                       <div>
//                         <p className="font-medium">{company.name}</p>
//                         <p className="text-sm text-muted-foreground">{company.email}</p>
//                         <div className="flex items-center space-x-2 text-xs text-muted-foreground">
//                           <span>{company.size} employees</span>
//                           <span>•</span>
//                           <span>{company.location}</span>
//                           {company.website && (
//                             <>
//                               <span>•</span>
//                               <Globe className="h-3 w-3" />
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <Badge variant="outline">{company.industry}</Badge>
//                   </TableCell>
//                   <TableCell>{getStatusBadge(company.status)}</TableCell>
//                   <TableCell>
//                     <div>
//                       <p className="text-sm">{company.jobsPosted} jobs posted</p>
//                       <p className="text-xs text-muted-foreground">{company.totalApplications} total applications</p>
//                     </div>
//                   </TableCell>
//                   <TableCell>{company.joinedAt}</TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="sm">
//                           <MoreHorizontal className="h-4 w-4" />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem>
//                           <Eye className="h-4 w-4 mr-2" />
//                           View Profile
//                         </DropdownMenuItem>
//                         <DropdownMenuItem>
//                           <CheckCircle className="h-4 w-4 mr-2" />
//                           Verify Company
//                         </DropdownMenuItem>
//                         <DropdownMenuItem>
//                           <Edit className="h-4 w-4 mr-2" />
//                           Edit Details
//                         </DropdownMenuItem>
//                         <DropdownMenuItem className="text-destructive">
//                           <Trash2 className="h-4 w-4 mr-2" />
//                           Suspend
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

export default function Page() {
  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
}