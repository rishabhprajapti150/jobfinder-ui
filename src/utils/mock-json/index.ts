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
  
  export default specificJobDetails;