"use client"
import React, { useState } from 'react';
import  Button  from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Users, FileText, Eye, TrendingUp, DollarSign, Building2, Star, CheckCircle, Clock, MapPin, Edit, Trash2, Mail, Phone } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/app/(employer)/_footer/page';
import  SEO  from '@/app/(employer)/seo/page';
import JobPostForm from '@/app/(employer)/_job-post/page';
import CompanyProfileForm from '@/app/(employer)/_company-profile/page';
import ContactCandidateDialog from '@/app/(employer)/contact-condidate/page';
import { useToast } from '@/components/ui/use-toast';

const EmployerDashboard = () => {
  const { toast } = useToast();
  const [showJobForm, setShowJobForm] = useState(false);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [editingJob, setEditingJob] = useState<any>(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [jobs, setJobs] = useState([
    { 
      id: 1, 
      title: 'Senior React Developer', 
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      salaryMin: '120',
      salaryMax: '150',
      applications: 23, 
      status: 'Active', 
      posted: '2 days ago',
      views: 145,
      description: 'We are looking for a Senior React Developer to join our growing team...',
      requirements: ['React', 'TypeScript', 'Node.js', '5+ years experience'],
      benefits: ['Health Insurance', 'Remote Work', '401k Matching'],
      experience: 'Senior',
      remote: 'Hybrid'
    },
    { 
      id: 2, 
      title: 'Product Manager', 
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110k - $140k',
      salaryMin: '110',
      salaryMax: '140',
      applications: 45, 
      status: 'Active', 
      posted: '1 week ago',
      views: 289,
      description: 'Join our product team to drive innovation...',
      requirements: ['Product Management', 'Agile', 'Analytics', '3+ years experience'],
      benefits: ['Health Insurance', 'Stock Options', 'Flexible PTO'],
      experience: 'Mid-level',
      remote: 'Yes'
    },
    { 
      id: 3, 
      title: 'UX Designer', 
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $115k',
      salaryMin: '90',
      salaryMax: '115',
      applications: 18, 
      status: 'Paused', 
      posted: '3 days ago',
      views: 67,
      description: 'Create beautiful and intuitive user experiences...',
      requirements: ['Figma', 'User Research', 'Prototyping', '4+ years experience'],
      benefits: ['Health Insurance', 'Learning Budget', 'Gym Membership'],
      experience: 'Mid-level',
      remote: 'No'
    },
  ]);
  
  const [applications, setApplications] = useState([
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      position: 'Senior React Developer', 
      status: 'Under Review', 
      time: '2 hours ago',
      experience: '5+ years',
      rating: 4.8,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      email: 'sarah.johnson@email.com',
      location: 'San Francisco, CA',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS']
    },
    { 
      id: 2, 
      name: 'Mike Chen', 
      position: 'Product Manager', 
      status: 'Shortlisted', 
      time: '5 hours ago',
      experience: '7+ years',
      rating: 4.9,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      email: 'mike.chen@email.com',
      location: 'Remote',
      skills: ['Product Strategy', 'Analytics', 'Agile', 'Leadership', 'SQL']
    },
    { 
      id: 3, 
      name: 'Emily Davis', 
      position: 'UX Designer', 
      status: 'Interview Scheduled', 
      time: '1 day ago',
      experience: '4+ years',
      rating: 4.7,
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      email: 'emily.davis@email.com',
      location: 'New York, NY',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'HTML/CSS']
    },
  ]);

  const [companyProfile, setCompanyProfile] = useState({
    companyName: 'TechCorp Inc.',
    tagline: 'Building the future of technology',
    description: 'We are a leading technology company focused on innovative solutions...',
    industry: 'Technology',
    companySize: '51-200',
    location: 'San Francisco, CA',
    website: 'https://techcorp.com',
    email: 'hr@techcorp.com',
    phone: '+1 (555) 123-4567',
    founded: '2018'
  });
  const companyStats = [
    { title: 'Active Jobs', value: jobs.filter(job => job.status === 'Active').length.toString(), icon: FileText, change: '+2 this week' },
    { title: 'Total Applications', value: applications.length.toString(), icon: Users, change: '+15% this month' },
    { title: 'Company Views', value: '1,429', icon: Eye, change: '+8% this week' },
    { title: 'Monthly Budget', value: '$2,500', icon: DollarSign, change: 'Within limit' },
  ];

  const handleJobSubmit = (jobData: any) => {
    if (editingJob) {
      setJobs(prev => prev.map(job => job.id === editingJob.id ? { ...jobData, applications: job.applications, views: job.views, posted: job.posted } : job));
      toast({ title: "Job updated successfully!" });
    } else {
      const newJob = {
        ...jobData,
        applications: 0,
        views: 0,
        posted: 'Just now',
        status: 'Active'
      };
      setJobs(prev => [...prev, newJob]);
      toast({ title: "Job posted successfully!" });
    }
    setShowJobForm(false);
    setEditingJob(null);
  };

  const handleProfileSubmit = (profileData: any) => {
    setCompanyProfile(profileData);
    setShowProfileForm(false);
    toast({ title: "Company profile updated successfully!" });
  };

  const handleContactCandidate = (candidate: any) => {
    setSelectedCandidate(candidate);
    setShowContactDialog(true);
  };

  const handleSendMessage = (messageData: any) => {
    toast({ 
      title: "Message sent successfully!", 
      description: `Your message has been sent to ${messageData.candidateName}` 
    });
    setShowContactDialog(false);
    setSelectedCandidate(null);
  };

  const handleEditJob = (job: any) => {
    setEditingJob(job);
    setShowJobForm(true);
  };

  const handleDeleteJob = (jobId: number) => {
    setJobs(prev => prev.filter(job => job.id !== jobId));
    toast({ title: "Job deleted successfully!" });
  };

  const handleStatusChange = (applicationId: number, newStatus: string) => {
    setApplications(prev => prev.map(app => 
      app.id === applicationId ? { ...app, status: newStatus } : app
    ));
    toast({ title: `Application status updated to ${newStatus}` });
  };

  const jobListings = [
    { 
      id: 1, 
      title: 'Senior React Developer', 
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      applications: 23, 
      status: 'Active', 
      posted: '2 days ago',
      views: 145 
    },
    { 
      id: 2, 
      title: 'Product Manager', 
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110k - $140k',
      applications: 45, 
      status: 'Active', 
      posted: '1 week ago',
      views: 289 
    },
    { 
      id: 3, 
      title: 'UX Designer', 
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $115k',
      applications: 18, 
      status: 'Paused', 
      posted: '3 days ago',
      views: 67 
    },
  ];

  const recentApplications = [
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      position: 'Senior React Developer', 
      status: 'Under Review', 
      time: '2 hours ago',
      experience: '5+ years',
      rating: 4.8,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    { 
      id: 2, 
      name: 'Mike Chen', 
      position: 'Product Manager', 
      status: 'Shortlisted', 
      time: '5 hours ago',
      experience: '7+ years',
      rating: 4.9,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    { 
      id: 3, 
      name: 'Emily Davis', 
      position: 'UX Designer', 
      status: 'Interview Scheduled', 
      time: '1 day ago',
      experience: '4+ years',
      rating: 4.7,
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
  ];

  return (
    <>
      <SEO 
        title="Employer Hub - Post Jobs & Find Top Talent"
        description="Comprehensive employer platform to post jobs, manage company profile, track applications, and find the best candidates for your team."
      />
      {/* <Header /> */}
      
      {/* Hero Section for Employers */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 pt-16 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Find Top Talent for Your Team
            </h1>
            <p className="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto">
              Post jobs, manage applications, and connect with qualified candidates to build your dream team.
            </p>
          </div>
          
          <div className="flex justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => setShowJobForm(true)}>
                <Plus className="w-5 h-5 mr-2" />
                Post Your First Job
              </Button>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <h3 className="font-medium text-gray-900 mb-1">{stat.title}</h3>
                  <p className="text-sm text-gray-600">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Your Job Listings</h2>
                <p className="text-gray-600">Manage and track performance of your active job postings</p>
              </div>
              <Button className="mt-4 md:mt-0 bg-[#2551da] text-white hover:bg-blue-700" onClick={() => setShowJobForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Post New Job
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <Building2 className="w-4 h-4 mr-1" />
                              {job.department}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {job.type}
                            </span>
                            <span className="font-medium text-green-600">{job.salary}</span>
                          </div>
                        </div>
                        <Badge variant={job.status === 'Active' ? 'default' : 'secondary'}>
                          {job.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center border-t pt-4">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{job.applications}</div>
                          <div className="text-sm text-gray-600">Applications</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{job.views}</div>
                          <div className="text-sm text-gray-600">Views</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Posted</div>
                          <div className="font-medium">{job.posted}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View ({job.views})
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleEditJob(job)}>
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Applications ({job.applications})
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDeleteJob(job.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">View All Job Listings</Button>
          </div>
        </div>
      </section>

      {/* Recent Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Recent Applications</h2>
            <p className="text-gray-600">Review and manage candidate applications</p>
          </div>

          <div className="grid gap-4">
            {applications.map((application) => (
              <Card key={application.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={application.avatar} 
                        alt={application.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{application.name}</h4>
                        <p className="text-sm text-gray-600">{application.position}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-sm text-gray-500 mr-3">{application.experience}</span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600 ml-1">{application.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <Badge variant={
                          application.status === 'Shortlisted' ? 'default' :
                          application.status === 'Interview Scheduled' ? 'secondary' : 'outline'
                        }>
                          {application.status}
                        </Badge>
                        <p className="text-sm text-gray-500 mt-1">{application.time}</p>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleContactCandidate(application)}
                        >
                          <Mail className="w-3 h-3 mr-1" />
                          Contact
                        </Button>
                        <select 
                          value={application.status}
                          onChange={(e) => handleStatusChange(application.id, e.target.value)}
                          className="text-xs border rounded px-2 py-1"
                        >
                          <option value="Under Review">Under Review</option>
                          <option value="Shortlisted">Shortlisted</option>
                          <option value="Interview Scheduled">Interview Scheduled</option>
                          <option value="Rejected">Rejected</option>
                          <option value="Hired">Hired</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">View All Applications</Button>
          </div>
        </div>
      </section>

      {/* Company Tools */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Employer Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools to help you manage your hiring process efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setShowJobForm(true)}>
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Post Jobs</h3>
                <p className="text-sm text-gray-600">Create and publish job listings to attract top talent</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Manage Candidates</h3>
                <p className="text-sm text-gray-600">Review applications and manage your talent pipeline</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setShowProfileForm(true)}>
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Company Profile</h3>
                <p className="text-sm text-gray-600">Build an attractive company profile to showcase your brand</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                <p className="text-sm text-gray-600">Track job performance and hiring metrics</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* <Footer /> */}

      {/* Modals */}
      {showJobForm && (
        <JobPostForm
          onSubmit={handleJobSubmit}
          onCancel={() => {
            setShowJobForm(false);
            setEditingJob(null);
          }}
          editingJob={editingJob}
        />
      )}

      {showProfileForm && (
        <CompanyProfileForm
          onSubmit={handleProfileSubmit}
          onCancel={() => setShowProfileForm(false)}
          existingProfile={companyProfile}
        />
      )}

      {showContactDialog && selectedCandidate && (
        <ContactCandidateDialog
          candidate={selectedCandidate}
          onSend={handleSendMessage}
          onCancel={() => {
            setShowContactDialog(false);
            setSelectedCandidate(null);
          }}
        />
      )}
    </>
  );
};

export default EmployerDashboard;