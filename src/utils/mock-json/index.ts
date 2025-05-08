interface RecruiterDetails {
    name: string;
    location: string;
    email: string;
    phone: string;
  }
  
  interface JobDetails {
    id: number;
    title: string;
    company: string;
    rating: number;
    reviews: number;
    experience: string;
    salary: string;
    location: string;
    posted: string;
     positions: number;
    applicants: number;
    type: string;
    jobDescription: string;
    qualifications: string[];
    skills: string[];
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
    recruiterDetails: RecruiterDetails;
    companyDetails: string;
  }
  
  const specificJobDetails: JobDetails[] = [
    {
      id: 1,
      title: "Allegro Support Analyst",
      company: "NTT DATA BUSINESS SOLUTIONS",
      rating: 3.9,
      reviews: 3644,
      experience: "6 - 10 years",
      salary: "15-20 Lacs P.A.",
      location: "Hyderabad, Bengaluru, Mumbai (All Areas)",
      posted: "1 day ago",
       positions: 1,
      applicants: 92,
      type: "Full-time",
      jobDescription: "We are looking for an experienced Allegro Support Analyst to join our team. The ideal candidate will provide technical support for Allegro applications, troubleshoot issues, and work closely with development teams to resolve system problems.",
      qualifications: [
        "Bachelor's degree in Computer Science, Information Technology or related field",
        "Minimum 6 years of experience in Allegro application support",
        "Strong understanding of trading systems and financial markets",
        "Certification in Allegro platform is a plus"
      ],
      skills: [
        "Allegro Platform",
        "SQL",
        "Unix/Linux",
        "Shell Scripting",
        "Troubleshooting",
        "Financial Markets",
        "ETRM Systems",
        "Problem Solving"
      ],
      responsibilities: [
        "Provide Level 2/3 support for Allegro applications",
        "Troubleshoot and resolve technical issues in production environment",
        "Coordinate with development teams for bug fixes and enhancements",
        "Monitor system performance and implement optimizations",
        "Create and maintain technical documentation",
        "Conduct root cause analysis for recurring issues"
      ],
      requirements: [
        "Proven experience with Allegro ETRM system",
        "Strong knowledge of energy trading concepts",
        "Experience with Oracle/SQL databases",
        "Ability to work in 24x7 support environment",
        "Excellent communication and client-facing skills"
      ],
      benefits: [
        "Health insurance",
        "Performance bonuses",
        "Flexible work hours",
        "Remote work options",
        "Professional development allowance",
        "Generous vacation policy"
      ],
      recruiterDetails: {
        name: "Rahul Sharma",
        location: "NTT DATA Office, Sector 62, Noida",
        email: "rahul.sharma@nttdata.com",
        phone: "+91 98765 43210"
      },
      companyDetails: "NTT DATA Business Solutions is a leading IT services provider specializing in SAP solutions. We help clients transform their businesses through digital innovation with over 15,000 employees across 30+ countries."
    },
    {
      id: 2,
      title: "Senior React Developer",
      company: "Digital Innovations Ltd",
      rating: 4.2,
      reviews: 2156,
      experience: "5+ years",
      salary: "18-25 Lacs P.A.",
      location: "Remote (India)",
      posted: "3 days ago",
       positions: 2,
      applicants: 45,
      type: "Full-time",
      jobDescription: "Seeking an experienced React developer to lead our frontend development team and architect complex web applications.",
      qualifications: [
        "Bachelor's/Master's in Computer Science or equivalent",
        "5+ years experience with React ecosystem",
        "Experience with state management (Redux/MobX)",
        "Strong understanding of TypeScript"
      ],
      skills: [
        "React.js",
        "TypeScript",
        "Redux",
        "Next.js",
        "GraphQL",
        "Jest",
        "Webpack"
      ],
      responsibilities: [
        "Develop and maintain high-quality React applications",
        "Mentor junior developers",
        "Architect frontend solutions",
        "Collaborate with UX/UI designers",
        "Optimize application performance"
      ],
      requirements: [
        "Proven experience with large-scale React applications",
        "Strong knowledge of modern JavaScript",
        "Experience with CI/CD pipelines",
        "Excellent problem-solving skills"
      ],
      benefits: [
        "Fully remote work",
        "Quarterly bonuses",
        "Learning budget",
        "Health and wellness programs",
        "Flexible PTO"
      ],
      recruiterDetails: {
        name: "Priya Patel",
        location: "Bangalore",
        email: "priya.patel@digitalinnovations.com",
        phone: "+91 87654 32109"
      },
      companyDetails: "Digital Innovations is a product development company building cutting-edge web and mobile applications for global clients."
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudNative Solutions",
      rating: 4.0,
      reviews: 1250,
      experience: "4-7 years",
      salary: "12-18 Lacs P.A.",
      location: "Pune, Maharashtra",
      posted: "1 week ago",
       positions: 3,
      applicants: 78,
      type: "Full-time",
      jobDescription: "Looking for a DevOps Engineer to automate and optimize our infrastructure and deployment pipelines.",
      qualifications: [
        "Degree in Computer Science or related field",
        "4+ years in DevOps role",
        "AWS/GCP certification preferred",
        "Experience with container orchestration"
      ],
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "CI/CD",
        "Python",
        "Bash Scripting"
      ],
      responsibilities: [
        "Design and maintain cloud infrastructure",
        "Implement CI/CD pipelines",
        "Monitor system performance",
        "Ensure system security",
        "Troubleshoot production issues"
      ],
      requirements: [
        "Hands-on experience with cloud platforms",
        "Strong knowledge of infrastructure as code",
        "Experience with monitoring tools",
        "Networking fundamentals"
      ],
      benefits: [
        "Stock options",
        "Health insurance",
        "Conference budget",
        "Gym membership",
        "Free lunches"
      ],
      recruiterDetails: {
        name: "Amit Joshi",
        location: "Pune",
        email: "amit.joshi@cloudnative.in",
        phone: "+91 76543 21098"
      },
      companyDetails: "CloudNative Solutions helps businesses migrate and optimize their infrastructure on cloud platforms with a team of certified experts."
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "AI Innovations Pvt Ltd",
      rating: 4.3,
      reviews: 980,
      experience: "3-6 years",
      salary: "16-22 Lacs P.A.",
      location: "Bangalore, Karnataka",
      posted: "2 days ago",
       positions: 2,
      applicants: 112,
      type: "Full-time",
      jobDescription: "We're seeking a Data Scientist to develop machine learning models and derive insights from large datasets.",
      qualifications: [
        "Master's or PhD in Computer Science, Statistics, or related field",
        "3+ years experience in data science",
        "Strong mathematical background",
        "Experience with big data technologies"
      ],
      skills: [
        "Python",
        "Machine Learning",
        "TensorFlow/PyTorch",
        "SQL",
        "Data Visualization",
        "Statistical Analysis",
        "Spark"
      ],
      responsibilities: [
        "Develop predictive models and algorithms",
        "Clean and analyze large datasets",
        "Collaborate with engineering teams to implement models",
        "Communicate findings to stakeholders",
        "Stay current with latest AI research"
      ],
      requirements: [
        "Strong programming skills in Python",
        "Experience with ML frameworks",
        "Knowledge of statistical modeling",
        "Ability to translate business problems into data solutions"
      ],
      benefits: [
        "Research publication support",
        "Attractive bonuses",
        "Flexible hours",
        "Cutting-edge hardware",
        "Conference sponsorship"
      ],
      recruiterDetails: {
        name: "Neha Gupta",
        location: "Bangalore",
        email: "neha.gupta@aiinnovations.com",
        phone: "+91 98765 12340"
      },
      companyDetails: "AI Innovations is at the forefront of artificial intelligence research and application development, serving clients across multiple industries."
    },
    {
      id: 5,
      title: "UX/UI Designer",
      company: "Creative Minds Digital",
      rating: 4.1,
      reviews: 876,
      experience: "4+ years",
      salary: "10-15 Lacs P.A.",
      location: "Gurugram, Haryana",
      posted: "5 days ago",
       positions: 1,
      applicants: 34,
      type: "Full-time",
      jobDescription: "Looking for a creative UX/UI Designer to create beautiful and functional digital experiences for our clients.",
      qualifications: [
        "Degree in Design, HCI, or related field",
        "Portfolio demonstrating UX/UI skills",
        "4+ years experience in product design",
        "Experience with design systems"
      ],
      skills: [
        "Figma",
        "Adobe XD",
        "User Research",
        "Wireframing",
        "Prototyping",
        "UI Design",
        "Interaction Design"
      ],
      responsibilities: [
        "Create user flows and wireframes",
        "Design high-fidelity mockups",
        "Conduct user research",
        "Collaborate with developers",
        "Maintain design system"
      ],
      requirements: [
        "Strong visual design skills",
        "Understanding of UX principles",
        "Experience with design tools",
        "Ability to present design decisions"
      ],
      benefits: [
        "Creative freedom",
        "Latest design tools",
        "Annual design conference trips",
        "Work with premium clients",
        "Flexible schedule"
      ],
      recruiterDetails: {
        name: "Rohan Malhotra",
        location: "Gurugram",
        email: "rohan.malhotra@creativeminds.design",
        phone: "+91 98765 43219"
      },
      companyDetails: "Creative Minds Digital is a boutique design agency specializing in creating exceptional digital experiences for startups and enterprises."
    },
    {
      id: 6,
      title: "Cybersecurity Specialist",
      company: "SecureNet Technologies",
      rating: 4.4,
      reviews: 654,
      experience: "5-8 years",
      salary: "20-28 Lacs P.A.",
      location: "Delhi NCR",
      posted: "1 day ago",
       positions: 1,
      applicants: 28,
      type: "Full-time",
      jobDescription: "We need a Cybersecurity Specialist to protect our systems and networks from cyber threats and ensure data privacy.",
      qualifications: [
        "Bachelor's in Computer Science or related field",
        "Relevant certifications (CISSP, CEH, etc.)",
        "5+ years in cybersecurity",
        "Experience with security frameworks"
      ],
      skills: [
        "Network Security",
        "Ethical Hacking",
        "SIEM Tools",
        "Risk Assessment",
        "Incident Response",
        "Firewall Management",
        "Security Audits"
      ],
      responsibilities: [
        "Monitor security systems",
        "Conduct vulnerability assessments",
        "Respond to security incidents",
        "Develop security policies",
        "Train staff on security best practices"
      ],
      requirements: [
        "Deep knowledge of security protocols",
        "Experience with penetration testing",
        "Understanding of compliance requirements",
        "Ability to handle security emergencies"
      ],
      benefits: [
        "High security clearance",
        "Premium insurance",
        "Continuous training",
        "Performance bonuses",
        "Cutting-edge security lab"
      ],
      recruiterDetails: {
        name: "Vikram Singh",
        location: "New Delhi",
        email: "vikram.singh@securenet.tech",
        phone: "+91 98765 43218"
      },
      companyDetails: "SecureNet Technologies provides enterprise-grade cybersecurity solutions to government and corporate clients across Asia."
    },
    {
      id: 7,
      title: "Product Manager",
      company: "GrowthPulse",
      rating: 4.5,
      reviews: 1200,
      experience: "7+ years",
      salary: "25-35 Lacs P.A.",
      location: "Mumbai, Maharashtra",
      posted: "1 week ago",
       positions: 1,
      applicants: 65,
      type: "Full-time",
      jobDescription: "Seeking an experienced Product Manager to lead our product strategy and drive growth for our SaaS platform.",
      qualifications: [
        "MBA or equivalent",
        "7+ years in product management",
        "Experience with SaaS products",
        "Technical background preferred"
      ],
      skills: [
        "Product Strategy",
        "Roadmapping",
        "Agile Methodologies",
        "Market Research",
        "Data Analysis",
        "Stakeholder Management",
        "UX Understanding"
      ],
      responsibilities: [
        "Define product vision and strategy",
        "Prioritize product features",
        "Work with cross-functional teams",
        "Analyze market trends",
        "Measure product performance"
      ],
      requirements: [
        "Proven track record of product success",
        "Strong analytical skills",
        "Excellent communication",
        "Technical understanding"
      ],
      benefits: [
        "Equity options",
        "Leadership training",
        "Global exposure",
        "Premium healthcare",
        "Performance bonuses"
      ],
      recruiterDetails: {
        name: "Ananya Desai",
        location: "Mumbai",
        email: "ananya.desai@growthpulse.com",
        phone: "+91 98765 43217"
      },
      companyDetails: "GrowthPulse is a fast-growing SaaS company providing marketing automation tools to businesses worldwide."
    },
    {
      id: 8,
      title: "Mobile App Developer (Flutter)",
      company: "AppCraft Studios",
      rating: 4.0,
      reviews: 540,
      experience: "3-5 years",
      salary: "12-16 Lacs P.A.",
      location: "Chennai, Tamil Nadu",
      posted: "3 days ago",
       positions: 2,
      applicants: 47,
      type: "Full-time",
      jobDescription: "Looking for a Flutter developer to build beautiful cross-platform mobile applications for our clients.",
      qualifications: [
        "Degree in Computer Science or related",
        "3+ years mobile development",
        "1+ years Flutter experience",
        "Published apps in store"
      ],
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
        "REST APIs",
        "State Management",
        "UI/UX Implementation",
        "App Store Deployment"
      ],
      responsibilities: [
        "Develop cross-platform apps",
        "Collaborate with designers",
        "Optimize app performance",
        "Fix bugs and issues",
        "Stay updated with Flutter"
      ],
      requirements: [
        "Strong Dart skills",
        "Experience with Flutter widgets",
        "Understanding of native layers",
        "Problem-solving attitude"
      ],
      benefits: [
        "Creative projects",
        "Latest devices",
        "App profit sharing",
        "Flexible hours",
        "Learning budget"
      ],
      recruiterDetails: {
        name: "Arjun Reddy",
        location: "Chennai",
        email: "arjun.reddy@appcraft.io",
        phone: "+91 98765 43216"
      },
      companyDetails: "AppCraft Studios specializes in building high-quality mobile applications for startups and enterprises using Flutter technology."
    },
    {
      id: 9,
      title: "Cloud Architect",
      company: "SkyHigh Cloud Services",
      rating: 4.6,
      reviews: 890,
      experience: "8+ years",
      salary: "30-40 Lacs P.A.",
      location: "Remote (India)",
      posted: "2 days ago",
       positions: 1,
      applicants: 32,
      type: "Full-time",
      jobDescription: "We're hiring a Cloud Architect to design and implement cloud solutions for enterprise clients.",
      qualifications: [
        "Bachelor's in Computer Science",
        "Cloud certifications (AWS/Azure/GCP)",
        "8+ years cloud experience",
        "3+ years architecture experience"
      ],
      skills: [
        "Cloud Architecture",
        "AWS/Azure/GCP",
        "Microservices",
        "Serverless",
        "Security",
        "Cost Optimization",
        "DevOps Integration"
      ],
      responsibilities: [
        "Design cloud solutions",
        "Lead migration projects",
        "Ensure security compliance",
        "Optimize cloud costs",
        "Mentor team members"
      ],
      requirements: [
        "Expertise in cloud platforms",
        "Experience with large migrations",
        "Strong communication skills",
        "Business acumen"
      ],
      benefits: [
        "Fully remote",
        "Premium certifications",
        "Stock options",
        "Global projects",
        "Tech leadership role"
      ],
      recruiterDetails: {
        name: "Nandini Iyer",
        location: "Bangalore",
        email: "nandini.iyer@skyhigh.cloud",
        phone: "+91 98765 43215"
      },
      companyDetails: "SkyHigh Cloud Services helps enterprises transform their infrastructure with cutting-edge cloud solutions and architecture."
    },
    {
      id: 10,
      title: "Technical Writer",
      company: "DocuCraft Solutions",
      rating: 4.2,
      reviews: 320,
      experience: "3+ years",
      salary: "8-12 Lacs P.A.",
      location: "Pune, Maharashtra",
      posted: "1 week ago",
       positions: 2,
      applicants: 56,
      type: "Full-time",
      jobDescription: "Looking for a Technical Writer to create clear and concise documentation for our software products.",
      qualifications: [
        "Degree in Technical Communication, English, or related",
        "3+ years technical writing",
        "Experience with developer docs",
        "Portfolio of writing samples"
      ],
      skills: [
        "Technical Writing",
        "Markdown",
        "API Documentation",
        "Git",
        "Diagrams",
        "User Guides",
        "Content Management"
      ],
      responsibilities: [
        "Create technical documentation",
        "Work with engineering teams",
        "Maintain knowledge base",
        "Write API docs",
        "Improve existing docs"
      ],
      requirements: [
        "Ability to explain complex concepts",
        "Attention to detail",
        "Basic technical understanding",
        "Excellent English skills"
      ],
      benefits: [
        "Work-life balance",
        "Learning opportunities",
        "Creative freedom",
        "Remote options",
        "Writer's toolkit"
      ],
      recruiterDetails: {
        name: "Meera Krishnan",
        location: "Pune",
        email: "meera.krishnan@docucraft.com",
        phone: "+91 98765 43214"
      },
      companyDetails: "DocuCraft Solutions specializes in creating exceptional technical documentation for software companies and developer tools."
    }
  ];
  export const puneJobs = [
    {
      id: 18,
      title: "Java Backend Developer",
      company: "TechMahindra IT Solutions",
      rating: 4.1,
      reviews: 1250,
      experience: "3-6 years",
      salary: "10-16 Lacs P.A.",
      location: "Hinjewadi Phase 1, Pune",
      posted: "1 day ago",
      positions: 5,
      applicants: 92,
      type: "Full-time",
      jobDescription: "Develop scalable backend services for enterprise clients using Java/Spring ecosystem.",
      qualifications: [
        "BE/BTech in Computer Science",
        "3+ years Java development",
        "Experience with microservices",
        "Knowledge of cloud platforms"
      ],
      skills: ["Java 11+", "Spring Boot", "REST APIs", "AWS", "Kubernetes", "SQL"],
      responsibilities: [
        "Design and implement APIs",
        "Optimize application performance",
        "Write unit/integration tests",
        "Participate in code reviews"
      ],
      recruiterDetails: {
        name: "Amit Joshi",
        email: "amit.joshi@techmahindra.com",
        phone: "+91 20 6789 1234",
        
      },
      benefits: [
        "Cab facility",
        "Meal coupons",
        "Skill development programs",
        "Health insurance"
      ]
    },
    {
      id: 19,
      title: "Automotive Design Engineer",
      company: "TATA Motors R&D",
      rating: 4.3,
      reviews: 870,
      experience: "4-8 years",
      salary: "12-18 Lacs P.A.",
      location: "Pimpri-Chinchwad, Pune",
      posted: "1 week ago",
      positions: 3,
      applicants: 68,
      type: "Full-time",
      jobDescription: "Design and develop components for next-gen electric vehicles.",
      qualifications: [
        "BE/ME in Mechanical/Automobile Engg",
        "Proficiency in CATIA/UG NX",
        "Experience in EV components design",
        "Knowledge of DFMEA"
      ],
      skills: ["CATIA V5", "GD&T", "Sheet Metal Design", "PLM Tools", "Prototyping"],
      responsibilities: [
        "Create 3D models and drawings",
        "Conduct design reviews",
        "Coordinate with vendors",
        "Support prototype development"
      ],
      recruiterDetails: {
        name: "Rahul Deshpande",
        email: "rahul.d@tatamotors.com",
        phone: "+91 20 2345 6789"
      },
      benefits: [
        "R&D bonus",
        "Onsite opportunities",
        "Vehicle discount",
        "Technical training"
      ]
    },
    {
      id: 20,
      title: "EdTech Content Developer",
      company: "Byju's Learning",
      rating: 3.9,
      reviews: 1560,
      experience: "2-4 years",
      salary: "8-12 Lacs P.A.",
      location: "Kharadi, Pune",
      posted: "3 days ago",
      positions: 4,
      applicants: 115,
      type: "Full-time",
      jobDescription: "Create engaging educational content for K-12 digital learning platforms.",
      qualifications: [
        "Master's in Science/Mathematics",
        "Teaching/content creation experience",
        "Excellent communication skills",
        "Tech-savvy with learning apps"
      ],
      skills: ["Curriculum Design", "Video Scripting", "Articulate 360", "Animation Basics", "Pedagogy"],
      responsibilities: [
        "Develop lesson plans",
        "Create interactive quizzes",
        "Work with animation team",
        "Update existing content"
      ],
      recruiterDetails: {
        name: "Priyanka Sharma",
        email: "priyanka.s@byjus.com",
        phone: "+91 98765 43210"
      },
      benefits: [
        "Flexible timing",
        "Stock options",
        "Child education support",
        "Creative freedom"
      ]
    },
    {
      id: 21,
      title: "Production Manager",
      company: "Bajaj Auto Ltd",
      rating: 4.0,
      reviews: 720,
      experience: "8-12 years",
      salary: "18-25 Lacs P.A.",
      location: "Chakan, Pune",
      posted: "5 days ago",
      positions: 1,
      applicants: 34,
      type: "Full-time",
      jobDescription: "Oversee manufacturing operations at our two-wheeler production plant.",
      qualifications: [
        "BE in Mechanical/Production Engg",
        "10+ years shopfloor experience",
        "Knowledge of TPM/Lean Manufacturing",
        "Team management skills"
      ],
      skills: ["Production Planning", "Quality Control", "Shopfloor Management", "ERP Systems", "Six Sigma"],
      responsibilities: [
        "Meet production targets",
        "Reduce manufacturing defects",
        "Optimize assembly line",
        "Ensure safety compliance"
      ],
      recruiterDetails: {
        name: "Vikram Patil",
        email: "vikram.patil@bajajauto.com",
        phone: "+91 20 3456 7890"
      },
      benefits: [
        "Performance bonus",
        "Family insurance",
        "Quarterly profit sharing",
        "Onsite housing"
      ]
    }
];
  export const mumbaiJobs = [
    {
      id: 14,
      title: "Investment Banking Analyst",
      company: "Diamond Capital Advisors",
      rating: 4.5,
      reviews: 890,
      experience: "2-4 years",
      salary: "18-25 Lacs P.A.",
      location: "Nariman Point, Mumbai",
      posted: "2 days ago",
      positions: 3,
      applicants: 124,
      type: "Full-time",
      jobDescription: "Analyst for M&A and capital raising transactions in our elite financial services team.",
      qualifications: [
        "MBA from top-tier institute",
        "CA/CFA preferred",
        "2+ years in investment banking",
        "Strong financial modeling skills"
      ],
      skills: ["Financial Modeling", "DCF Valuation", "Pitch Books", "Deal Execution", "Bloomberg Terminal"],
      responsibilities: [
        "Prepare financial models",
        "Create investor presentations",
        "Conduct market research",
        "Support live transactions"
      ],
      recruiterDetails: {
        name: "Rajiv Malhotra",
        email: "rajiv.m@diamondcapital.com",
        phone: "+91 22 6789 4567"
      },
      benefits: [
        "Performance bonuses",
        "Global deal exposure",
        "Five-star cafeteria",
        "Premium health insurance"
      ]
    },
    {
      id: 15,
      title: "Marine Engineer",
      company: "Oceanic Shipping Corporation",
      rating: 4.2,
      reviews: 340,
      experience: "5-8 years",
      salary: "15-20 Lacs P.A.",
      location: "Port Area, Mumbai",
      posted: "1 week ago",
      positions: 2,
      applicants: 38,
      type: "Full-time",
      jobDescription: "Engineering lead for maintenance of our international cargo vessel fleet.",
      qualifications: [
        "BE/BTech in Marine Engineering",
        "Class I COC certification",
        "5+ years sailing experience",
        "Knowledge of IMO regulations"
      ],
      skills: ["Engine Maintenance", "Troubleshooting", "Marine Systems", "Safety Audits", "Dry Dock Planning"],
      responsibilities: [
        "Oversee engine room operations",
        "Manage repair budgets",
        "Ensure regulatory compliance",
        "Lead technical crew"
      ],
      recruiterDetails: {
        name: "Capt. Sanjay Naik",
        email: "sanjay.naik@oceanicshipping.com",
        phone: "+91 22 2345 6789"
      },
      benefits: [
        "Sea duty allowances",
        "Family medical cover",
        "Retirement benefits",
        "Travel opportunities"
      ]
    },
    {
      id: 16,
      title: "Digital Marketing Manager",
      company: "Bollywood Entertainment Network",
      rating: 4.0,
      reviews: 560,
      experience: "4-6 years",
      salary: "12-18 Lacs P.A.",
      location: "Andheri East, Mumbai",
      posted: "3 days ago",
      positions: 1,
      applicants: 87,
      type: "Full-time",
      jobDescription: "Lead digital campaigns for movie promotions and celebrity brands.",
      qualifications: [
        "MBA in Marketing/Digital Media",
        "4+ years in entertainment marketing",
        "Proven social media growth record"
      ],
      skills: ["Social Media Strategy", "Paid Campaigns", "Influencer Marketing", "Google Analytics", "Content Creation"],
      responsibilities: [
        "Develop campaign strategies",
        "Manage million-dollar ad budgets",
        "Coordinate with talent teams",
        "Analyze engagement metrics"
      ],
      recruiterDetails: {
        name: "Neha Kapoor",
        email: "neha.kapoor@bollywoodnet.com",
        phone: "+91 98765 12345"
      },
      benefits: [
        "Movie premiere access",
        "Celebrity interactions",
        "Flexible work culture",
        "Performance incentives"
      ]
    },
    {
      id: 17,
      title: "Healthcare IT Specialist",
      company: "Apollo HealthTech",
      rating: 4.3,
      reviews: 420,
      experience: "3-5 years",
      salary: "10-15 Lacs P.A.",
      location: "Powai, Mumbai",
      posted: "Just now",
      positions: 2,
      applicants: 23,
      type: "Full-time",
      jobDescription: "Implement and support hospital management systems across Maharashtra.",
      qualifications: [
        "BTech/MCA in Healthcare IT",
        "Experience with HMS/EMR systems",
        "Knowledge of HL7/DICOM standards"
      ],
      skills: ["Hospital Software", "SQL Databases", "System Integration", "User Training", "Troubleshooting"],
      responsibilities: [
        "Configure HMS modules",
        "Train hospital staff",
        "Manage data migration",
        "Provide technical support"
      ],
      recruiterDetails: {
        name: "Dr. Anjali Mehta",
        email: "anjali.mehta@apolloht.com",
        phone: "+91 22 6123 4567"
      },
      benefits: [
        "Medical benefits",
        "Field travel allowances",
        "Certification sponsorship",
        "Research opportunities"
      ]
    }
];
  export const chennaiJobs = [
    {
      id: 8,
      title: "Mobile App Developer (Flutter)",
      company: "AppCraft Studios",
      rating: 4.0,
      reviews: 540,
      experience: "3-5 years",
      salary: "12-16 Lacs P.A.",
      location: "Chennai, Tamil Nadu",
      posted: "3 days ago",
      positions: 2,
      applicants: 47,
      type: "Full-time",
      jobDescription: "Looking for a Flutter developer to build beautiful cross-platform mobile applications for our clients.",
      qualifications: [
        "Degree in Computer Science or related",
        "3+ years mobile development",
        "1+ years Flutter experience",
        "Published apps in store"
      ],
      skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
      responsibilities: [
        "Develop cross-platform apps",
        "Collaborate with designers",
        "Optimize app performance"
      ],
      recruiterDetails: {
        name: "Arjun Reddy",
        email: "arjun.reddy@appcraft.io",
        phone: "+91 98765 43216"
      }
    },
    {
      id: 11,
      title: "Full Stack Developer (MERN)",
      company: "TechNova Solutions",
      rating: 4.2,
      reviews: 720,
      experience: "4-7 years",
      salary: "15-22 Lacs P.A.",
      location: "Chennai, Tamil Nadu",
      posted: "1 week ago",
      positions: 3,
      applicants: 68,
      type: "Full-time",
      jobDescription: "Seeking a MERN stack developer to build scalable web applications for enterprise clients.",
      qualifications: [
        "Bachelor's in Computer Science",
        "4+ years with React/Node.js",
        "Experience with microservices"
      ],
      skills: ["React.js", "Node.js", "MongoDB", "AWS", "TypeScript"],
      responsibilities: [
        "Develop end-to-end features",
        "Optimize application performance",
        "Mentor junior developers"
      ],
      recruiterDetails: {
        name: "Deepika Ranganathan",
        email: "deepika.r@technova.in",
        phone: "+91 87654 32123"
      }
    },
    {
      id: 12,
      title: "Data Engineer",
      company: "DataSphere Analytics",
      rating: 4.1,
      reviews: 430,
      experience: "5-8 years",
      salary: "18-25 Lacs P.A.",
      location: "Chennai, Tamil Nadu",
      posted: "5 days ago",
      positions: 1,
      applicants: 39,
      type: "Full-time",
      jobDescription: "Design and maintain data pipelines for real-time analytics solutions.",
      qualifications: [
        "Degree in Computer Science/Data Engineering",
        "5+ years with big data technologies",
        "Cloud certification preferred"
      ],
      skills: ["Python", "Spark", "Kafka", "Snowflake", "Azure Data Factory"],
      responsibilities: [
        "Build ETL pipelines",
        "Optimize data storage",
        "Ensure data quality"
      ],
      recruiterDetails: {
        name: "Vikram Sundar",
        email: "vikram.s@datasphere.com",
        phone: "+91 76543 21234"
      }
    },
    {
      id: 13,
      title: "QA Automation Engineer",
      company: "QualityFirst Tech",
      rating: 3.9,
      reviews: 310,
      experience: "3-6 years",
      salary: "10-15 Lacs P.A.",
      location: "Chennai, Tamil Nadu",
      posted: "2 days ago",
      positions: 2,
      applicants: 52,
      type: "Full-time",
      jobDescription: "Automate testing processes for fintech products with 99.99% reliability targets.",
      qualifications: [
        "Bachelor's in Computer Science",
        "3+ years in test automation",
        "ISTQB certification preferred"
      ],
      skills: ["Selenium", "Cypress", "Java", "Jenkins", "Postman"],
      responsibilities: [
        "Develop test scripts",
        "Execute regression tests",
        "Report defects"
      ],
      recruiterDetails: {
        name: "Priya Lakshmi",
        email: "priya.l@qualityfirst.tech",
        phone: "+91 98765 67890"
      }
    }
];
  export const bangaloreJobs: JobDetails[] = [
    {
      id: 2,
      title: "Senior React Developer",
      company: "Digital Innovations Ltd",
      rating: 4.2,
      reviews: 2156,
      experience: "5+ years",
      salary: "18-25 Lacs P.A.",
      location: "Remote (India)",
      posted: "3 days ago",
      positions: 2,
      applicants: 45,
      type: "Full-time",
      jobDescription: "Seeking an experienced React developer to lead our frontend development team and architect complex web applications.",
      qualifications: [
        "Bachelor's/Master's in Computer Science or equivalent",
        "5+ years experience with React ecosystem",
        "Experience with state management (Redux/MobX)",
        "Strong understanding of TypeScript"
      ],
      skills: [
        "React.js",
        "TypeScript",
        "Redux",
        "Next.js",
        "GraphQL",
        "Jest",
        "Webpack"
      ],
      responsibilities: [
        "Develop and maintain high-quality React applications",
        "Mentor junior developers",
        "Architect frontend solutions",
        "Collaborate with UX/UI designers",
        "Optimize application performance"
      ],
      requirements: [
        "Proven experience with large-scale React applications",
        "Strong knowledge of modern JavaScript",
        "Experience with CI/CD pipelines",
        "Excellent problem-solving skills"
      ],
      benefits: [
        "Fully remote work",
        "Quarterly bonuses",
        "Learning budget",
        "Health and wellness programs",
        "Flexible PTO"
      ],
      recruiterDetails: {
        name: "Priya Patel",
        location: "Bangalore",
        email: "priya.patel@digitalinnovations.com",
        phone: "+91 87654 32109"
      },
      companyDetails: "Digital Innovations is a product development company building cutting-edge web and mobile applications for global clients."
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "AI Innovations Pvt Ltd",
      rating: 4.3,
      reviews: 980,
      experience: "3-6 years",
      salary: "16-22 Lacs P.A.",
      location: "Bangalore, Karnataka",
      posted: "2 days ago",
      positions: 2,
      applicants: 112,
      type: "Full-time",
      jobDescription: "We're seeking a Data Scientist to develop machine learning models and derive insights from large datasets.",
      qualifications: [
        "Master's or PhD in Computer Science, Statistics, or related field",
        "3+ years experience in data science",
        "Strong mathematical background",
        "Experience with big data technologies"
      ],
      skills: [
        "Python",
        "Machine Learning",
        "TensorFlow/PyTorch",
        "SQL",
        "Data Visualization",
        "Statistical Analysis",
        "Spark"
      ],
      responsibilities: [
        "Develop predictive models and algorithms",
        "Clean and analyze large datasets",
        "Collaborate with engineering teams to implement models",
        "Communicate findings to stakeholders",
        "Stay current with latest AI research"
      ],
      requirements: [
        "Strong programming skills in Python",
        "Experience with ML frameworks",
        "Knowledge of statistical modeling",
        "Ability to translate business problems into data solutions"
      ],
      benefits: [
        "Research publication support",
        "Attractive bonuses",
        "Flexible hours",
        "Cutting-edge hardware",
        "Conference sponsorship"
      ],
      recruiterDetails: {
        name: "Neha Gupta",
        location: "Bangalore",
        email: "neha.gupta@aiinnovations.com",
        phone: "+91 98765 12340"
      },
      companyDetails: "AI Innovations is at the forefront of artificial intelligence research and application development, serving clients across multiple industries."
    },
    {
      id: 9,
      title: "Cloud Architect",
      company: "SkyHigh Cloud Services",
      rating: 4.6,
      reviews: 890,
      experience: "8+ years",
      salary: "30-40 Lacs P.A.",
      location: "Remote (India)",
      posted: "2 days ago",
      positions: 1,
      applicants: 32,
      type: "Full-time",
      jobDescription: "We're hiring a Cloud Architect to design and implement cloud solutions for enterprise clients.",
      qualifications: [
        "Bachelor's in Computer Science",
        "Cloud certifications (AWS/Azure/GCP)",
        "8+ years cloud experience",
        "3+ years architecture experience"
      ],
      skills: [
        "Cloud Architecture",
        "AWS/Azure/GCP",
        "Microservices",
        "Serverless",
        "Security",
        "Cost Optimization",
        "DevOps Integration"
      ],
      responsibilities: [
        "Design cloud solutions",
        "Lead migration projects",
        "Ensure security compliance",
        "Optimize cloud costs",
        "Mentor team members"
      ],
      requirements: [
        "Expertise in cloud platforms",
        "Experience with large migrations",
        "Strong communication skills",
        "Business acumen"
      ],
      benefits: [
        "Fully remote",
        "Premium certifications",
        "Stock options",
        "Global projects",
        "Tech leadership role"
      ],
      recruiterDetails: {
        name: "Nandini Iyer",
        location: "Bangalore",
        email: "nandini.iyer@skyhigh.cloud",
        phone: "+91 98765 43215"
      },
      companyDetails: "SkyHigh Cloud Services helps enterprises transform their infrastructure with cutting-edge cloud solutions and architecture."
    }
];
  export default specificJobDetails;



  export const JobFilterCategoryValue = {
    'work mode': {
      label: 'Work Mode',
      name:'work mode',
      options: [
        { value: 'remote', label: 'Remote', count: 124 },
        { value: 'hybrid', label: 'Hybrid', count: 87 },
        { value: 'onsite', label: 'On-site', count: 215 }
      ]
    },
    'experience': {
      label: 'Experience Level',
      name:'experience',
      options: [
        { value: 'intern', label: 'Internship', count: 56 },
        { value: 'entry', label: 'Entry Level (0-2 yrs)', count: 156 },
        { value: 'mid', label: 'Mid Level (3-5 yrs)', count: 203 },
        { value: 'senior', label: 'Senior (5+ yrs)', count: 178 },
        { value: 'lead', label: 'Lead/Manager', count: 92 }
      ]
    },
    'department': {
      label: 'Department',
      name:'department',
      options: [
        { value: 'engineering', label: 'Engineering', count: 342 },
        { value: 'product', label: 'Product', count: 87 },
        { value: 'design', label: 'Design', count: 65 },
        { value: 'marketing', label: 'Marketing', count: 112 },
        { value: 'sales', label: 'Sales', count: 94 },
        { value: 'hr', label: 'Human Resources', count: 58 }
      ]
    },
    'salary': {
      label: 'Salary Range',
      name:'salary',
      options: [
        { value: '0-50k', label: 'Under $50k', count: 76 },
        { value: '50-100k', label: '$50k - $100k', count: 213 },
        { value: '100-150k', label: '$100k - $150k', count: 187 },
        { value: '150k+', label: '$150k+', count: 124 }
      ]
    },
    'company type': {
      label: 'Company Type',
      name:'company type',
      options: [
        { value: 'startup', label: 'Startup', count: 156 },
        { value: 'midsize', label: 'Midsize Company', count: 132 },
        { value: 'enterprise', label: 'Enterprise', count: 198 },
        { value: 'nonprofit', label: 'Non-Profit', count: 45 }
      ]
    },
    'role category': {
      label: 'Role Category',
      name:'role category',
      options: [
        { value: 'development', label: 'Software Development', count: 276 },
        { value: 'devops', label: 'DevOps/Cloud', count: 87 },
        { value: 'data', label: 'Data Science/Analytics', count: 112 },
        { value: 'qa', label: 'Quality Assurance', count: 65 },
        { value: 'ux', label: 'UX/UI Design', count: 78 }
      ]
    },
    'education': {
      label: 'Education',
      name:'education',
      options: [
        { value: 'highschool', label: 'High School Diploma', count: 87 },
        { value: 'bachelors', label: "Bachelor's Degree", count: 324 },
        { value: 'masters', label: "Master's Degree", count: 156 },
        { value: 'phd', label: 'PhD', count: 42 },
        { value: 'none', label: 'No Degree Required', count: 91 }
      ]
    },
    'posted by': {
      label: 'Posted By',
      name:'posted by',
      options: [
        { value: 'recruiter', label: 'Recruiter', count: 187 },
        { value: 'hiring-manager', label: 'Hiring Manager', count: 132 },
        { value: 'agency', label: 'Staffing Agency', count: 76 }
      ]
    },
    'industry': {
      label: 'Industry',
      name:'industry',
      options: [
        { value: 'tech', label: 'Technology', count: 298 },
        { value: 'finance', label: 'Finance/Banking', count: 112 },
        { value: 'healthcare', label: 'Healthcare', count: 87 },
        { value: 'education', label: 'Education', count: 65 },
        { value: 'retail', label: 'Retail/E-commerce', count: 93 }
      ]
    },
    'top companies': {
      label: 'Top Companies',
      name:'top companies',
      options: [
        { value: 'faang', label: 'FAANG Companies', count: 76 },
        { value: 'fortune500', label: 'Fortune 500', count: 143 },
        { value: 'unicorn', label: 'Unicorn Startups', count: 87 },
        { value: 'remote-first', label: 'Remote-First Companies', count: 112 }
      ]
    },
    'freshness': {
      label: 'Job Freshness',
      name:'freshness',
      options: [
        { value: '1day', label: 'Last 24 Hours', count: 42 },
        { value: '3days', label: 'Last 3 Days', count: 87 },
        { value: '1week', label: 'Last Week', count: 156 },
        { value: '1month', label: 'Last Month', count: 324 }
      ]
    },
    'location': {
      label: 'Location',
      name:'location',
      options: [
        { value: 'us', label: 'United States', count: 432 },
        { value: 'europe', label: 'Europe', count: 187 },
        { value: 'asia', label: 'Asia', count: 156 },
        { value: 'remote-global', label: 'Remote (Anywhere)', count: 225 }
      ]
    }
  };