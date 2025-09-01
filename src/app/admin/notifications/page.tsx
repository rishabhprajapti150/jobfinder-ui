"use client"
import { useState } from "react";
import { Bell, Send, Plus, MoreHorizontal, Eye, Edit, Trash2, Users, Briefcase, Mail } from "lucide-react";
import Button  from "@/components/ui/button";
import Input  from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import Checkbox  from "@/components/ui/checkbox";

// Mock data
const notifications = [
  {
    id: 1,
    title: "Weekly Job Digest",
    message: "Your weekly summary of new job opportunities",
    type: "email",
    audience: "job_seekers",
    status: "sent",
    recipients: 2391,
    sentAt: "2024-01-25 09:00",
    openRate: "24.5%"
  },
  {
    id: 2,
    title: "New Application Alert",
    message: "You have received a new job application",
    type: "push",
    audience: "employers",
    status: "scheduled",
    recipients: 456,
    sentAt: "2024-01-26 10:00",
    openRate: "N/A"
  },
  {
    id: 3,
    title: "Platform Maintenance",
    message: "Scheduled maintenance on January 28th",
    type: "system",
    audience: "all_users",
    status: "draft",
    recipients: 2847,
    sentAt: null,
    openRate: "N/A"
  },
  {
    id: 4,
    title: "Premium Feature Launch",
    message: "Introducing new premium features for employers",
    type: "email",
    audience: "employers",
    status: "sent",
    recipients: 456,
    sentAt: "2024-01-24 14:30",
    openRate: "31.2%"
  }
];

const templates = [
  {
    id: 1,
    name: "Job Application Received",
    type: "email",
    subject: "New Application for {job_title}",
    audience: "employers",
    usage: 156
  },
  {
    id: 2,
    name: "Job Recommendation",
    type: "push",
    subject: "New jobs matching your profile",
    audience: "job_seekers",
    usage: 89
  },
  {
    id: 3,
    name: "Account Verification",
    type: "email",
    subject: "Verify your account",
    audience: "all_users",
    usage: 234
  }
];

const stats = [
  { title: "Total Sent", value: "12,847", icon: Send, change: "+8.2%" },
  { title: "Open Rate", value: "28.5%", icon: Mail, change: "+2.1%" },
  { title: "Active Templates", value: "23", icon: Bell, change: "+5 new" },
  { title: "Subscribers", value: "2,847", icon: Users, change: "+12.5%" }
];

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("notifications");
  const [selectedAudience, setSelectedAudience] = useState("all_users");
  const [notificationTitle, setNotificationTitle] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sent":
        return <Badge className="bg-success text-success-foreground">Sent</Badge>;
      case "scheduled":
        return <Badge variant="secondary">Scheduled</Badge>;
      case "draft":
        return <Badge variant="outline">Draft</Badge>;
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    const typeColors = {
      "email": "bg-blue-100 text-blue-800",
      "push": "bg-green-100 text-green-800",
      "system": "bg-purple-100 text-purple-800"
    };
    return (
      <Badge className={typeColors[type as keyof typeof typeColors] || "bg-gray-100 text-gray-800"}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Badge>
    );
  };

  const getAudienceBadge = (audience: string) => {
    const audienceMap = {
      "job_seekers": "Job Seekers",
      "employers": "Employers",
      "all_users": "All Users"
    };
    return <Badge variant="outline">{audienceMap[audience as keyof typeof audienceMap] || audience}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          <p className="text-muted-foreground">Send announcements and manage notification templates</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Notification
        </Button>
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
          variant={activeTab === "notifications" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </Button>
        <Button
          variant={activeTab === "templates" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("templates")}
        >
          Templates
        </Button>
        <Button
          variant={activeTab === "compose" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("compose")}
        >
          Compose
        </Button>
      </div>

      {activeTab === "notifications" && (
        <Card className="bg-gradient-card shadow-soft">
          <CardHeader>
            <CardTitle>Recent Notifications ({notifications.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Audience</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Recipients</TableHead>
                  <TableHead>Open Rate</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {notifications.map((notification) => (
                  <TableRow key={notification.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{notification.title}</p>
                        <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                          {notification.message}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{getTypeBadge(notification.type)}</TableCell>
                    <TableCell>{getAudienceBadge(notification.audience)}</TableCell>
                    <TableCell>{getStatusBadge(notification.status)}</TableCell>
                    <TableCell>{notification.recipients.toLocaleString()}</TableCell>
                    <TableCell>{notification.openRate}</TableCell>
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
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Send className="h-4 w-4 mr-2" />
                            Duplicate & Send
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
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
      )}

      {activeTab === "templates" && (
        <Card className="bg-gradient-card shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Notification Templates ({templates.length})</span>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Template
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {templates.map((template) => (
                <div key={template.id} className="border rounded-lg p-4 bg-card">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-medium">{template.name}</h3>
                        {getTypeBadge(template.type)}
                        {getAudienceBadge(template.audience)}
                      </div>
                      <p className="text-sm text-muted-foreground">{template.subject}</p>
                      <p className="text-xs text-muted-foreground">Used {template.usage} times</p>
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
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Template
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Send className="h-4 w-4 mr-2" />
                          Use Template
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
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

      {activeTab === "compose" && (
        <Card className="bg-gradient-card shadow-soft">
          <CardHeader>
            <CardTitle>Compose New Notification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Notification Type</label>
                <Select defaultValue="email">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="push">Push Notification</SelectItem>
                    <SelectItem value="system">System Announcement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Target Audience</label>
                <Select value={selectedAudience} onValueChange={setSelectedAudience}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all_users">All Users (2,847)</SelectItem>
                    <SelectItem value="job_seekers">Job Seekers (2,391)</SelectItem>
                    <SelectItem value="employers">Employers (456)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                placeholder="Enter notification title..."
                value={notificationTitle}
                onChange={(e) => setNotificationTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea
                placeholder="Enter your message..."
                rows={4}
                value={notificationMessage}
                onChange={(e) => setNotificationMessage(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="schedule" />
              <label htmlFor="schedule" className="text-sm">Schedule for later</label>
            </div>

            <div className="flex space-x-2">
              <Button>
                <Send className="h-4 w-4 mr-2" />
                Send Now
              </Button>
              <Button variant="outline">Save as Draft</Button>
              <Button variant="outline">Preview</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}