export interface Project {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  tags: string[];
  keyFeatures: string[];
  integrations: string[];
  automations: string[];
  stack: string[];
  timeline: string;
  outcomes: string[];
  confidentialityLevel: "high" | "medium" | "low";
  images: string[];
  demoPolicy: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "real-estate-crm",
    title: "Real Estate Management Platform",
    industry: "Real Estate",
    summary: "End-to-end CRM for property management company handling 500+ listings with automated lead distribution and WhatsApp integration.",
    tags: ["Real Estate", "Lead Management", "Automation", "WhatsApp"],
    keyFeatures: [
      "Automated lead distribution based on property type and agent availability",
      "WhatsApp Business API integration for instant client communication",
      "Property listing management with dynamic pricing",
      "Commission tracking and reporting dashboard",
      "Client journey tracking from inquiry to closing",
      "Document management with digital signatures",
    ],
    integrations: ["WhatsApp Business API", "Yad2", "Google Calendar", "Stripe", "DocuSign"],
    automations: [
      "Lead assignment based on location and agent specialization",
      "Automated follow-up sequences via WhatsApp",
      "Property viewing reminders and confirmations",
      "Commission calculations on deal closure",
      "Monthly performance reports to management",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Redis", "WhatsApp Business API"],
    timeline: "3 months",
    outcomes: [
      "45% reduction in lead response time",
      "30% increase in conversion rates",
      "Automated 80% of routine communications",
      "Real-time visibility across 500+ active listings",
    ],
    confidentialityLevel: "high",
    images: ["/projects/real-estate-1.jpg", "/projects/real-estate-2.jpg"],
    demoPolicy: "Private demo available upon request",
    featured: true,
  },
  {
    slug: "ecommerce-order-management",
    title: "E-commerce Order & Customer Platform",
    industry: "E-commerce",
    summary: "Custom CRM for online retailer processing 10,000+ monthly orders with multi-channel integration and automated fulfillment workflows.",
    tags: ["E-commerce", "Orders", "Inventory", "Multi-channel"],
    keyFeatures: [
      "Unified dashboard for orders across multiple marketplaces",
      "Real-time inventory synchronization",
      "Customer service ticketing system",
      "Automated order status notifications via SMS and Email",
      "Advanced analytics and sales forecasting",
      "Return and refund management",
    ],
    integrations: ["Shopify", "WooCommerce", "Amazon", "eBay", "Twilio", "SendGrid"],
    automations: [
      "Order status updates sent automatically",
      "Low inventory alerts to suppliers",
      "Customer review requests post-delivery",
      "Abandoned cart recovery sequences",
      "Automated refund processing",
    ],
    stack: ["React", "Node.js", "MongoDB", "RabbitMQ", "AWS S3"],
    timeline: "4 months",
    outcomes: [
      "99.8% order accuracy rate",
      "60% reduction in manual data entry",
      "35% improvement in customer satisfaction",
      "Unified view across 4 sales channels",
    ],
    confidentialityLevel: "high",
    images: ["/projects/ecommerce-1.jpg", "/projects/ecommerce-2.jpg"],
    demoPolicy: "Private demo available upon request",
    featured: true,
  },
  {
    slug: "healthcare-patient-crm",
    title: "Healthcare Patient Management System",
    industry: "Healthcare",
    summary: "HIPAA-compliant CRM for medical clinic managing 5,000+ patient records with appointment scheduling and automated reminders.",
    tags: ["Healthcare", "HIPAA", "Appointments", "Compliance"],
    keyFeatures: [
      "Secure patient record management (HIPAA compliant)",
      "Intelligent appointment scheduling with conflict detection",
      "Automated appointment reminders via SMS and Email",
      "Electronic health record (EHR) integration",
      "Prescription tracking and refill management",
      "Insurance verification and billing",
    ],
    integrations: ["Google Calendar", "Twilio", "Stripe", "Insurance APIs", "HL7 FHIR"],
    automations: [
      "Appointment reminders 24 hours in advance",
      "No-show follow-ups and rescheduling",
      "Prescription refill reminders",
      "Post-visit feedback collection",
      "Insurance eligibility verification",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Redis", "AWS KMS"],
    timeline: "5 months",
    outcomes: [
      "40% reduction in no-show rates",
      "Secure management of 5,000+ patient records",
      "95% appointment booking efficiency",
      "Full HIPAA compliance certification",
    ],
    confidentialityLevel: "high",
    images: ["/projects/healthcare-1.jpg", "/projects/healthcare-2.jpg"],
    demoPolicy: "Private demo available upon request",
  },
  {
    slug: "consulting-client-portal",
    title: "Consulting Firm Client Portal",
    industry: "Professional Services",
    summary: "Client management system for consulting firm with project tracking, document sharing, and billable hours management.",
    tags: ["Consulting", "Project Management", "Billing", "Portal"],
    keyFeatures: [
      "Client portal with secure document sharing",
      "Project and milestone tracking",
      "Time tracking and billable hours management",
      "Automated invoice generation",
      "Team collaboration and task assignment",
      "Client communication history",
    ],
    integrations: ["Stripe", "Google Drive", "Slack", "QuickBooks", "Calendly"],
    automations: [
      "Weekly project status reports to clients",
      "Invoice generation at month-end",
      "Overdue payment reminders",
      "New client onboarding workflows",
      "Milestone completion notifications",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "AWS S3", "Stripe"],
    timeline: "3 months",
    outcomes: [
      "50% faster invoice processing",
      "Complete transparency for 40+ active clients",
      "Automated 70% of routine client communications",
      "98% on-time payment rate",
    ],
    confidentialityLevel: "medium",
    images: ["/projects/consulting-1.jpg", "/projects/consulting-2.jpg"],
    demoPolicy: "Private demo available upon request",
    featured: true,
  },
  {
    slug: "education-student-management",
    title: "Education Institution Student CRM",
    industry: "Education",
    summary: "Student lifecycle management system for educational institution with enrollment, attendance, and parent communication features.",
    tags: ["Education", "Students", "Enrollment", "Communication"],
    keyFeatures: [
      "Student enrollment and registration management",
      "Attendance tracking with automated alerts",
      "Grade and performance tracking",
      "Parent communication portal",
      "Course and curriculum management",
      "Financial aid and payment tracking",
    ],
    integrations: ["Google Classroom", "Zoom", "SendGrid", "Stripe", "SMS Gateway"],
    automations: [
      "Absence notifications to parents",
      "Grade report distribution",
      "Tuition payment reminders",
      "Event and activity announcements",
      "Student progress reports",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Redis", "SendGrid"],
    timeline: "4 months",
    outcomes: [
      "Managed 2,000+ student records",
      "95% parent engagement rate",
      "Automated 85% of routine communications",
      "Real-time attendance monitoring",
    ],
    confidentialityLevel: "medium",
    images: ["/projects/education-1.jpg", "/projects/education-2.jpg"],
    demoPolicy: "Private demo available upon request",
  },
  {
    slug: "logistics-fleet-crm",
    title: "Logistics & Fleet Management Platform",
    industry: "Logistics",
    summary: "Fleet and shipment tracking CRM for logistics company managing 100+ vehicles with real-time GPS and delivery optimization.",
    tags: ["Logistics", "Fleet", "GPS", "Optimization"],
    keyFeatures: [
      "Real-time GPS tracking for all vehicles",
      "Route optimization and planning",
      "Driver management and performance tracking",
      "Shipment tracking and customer notifications",
      "Fuel consumption and maintenance scheduling",
      "Customer delivery portal",
    ],
    integrations: ["Google Maps API", "Waze", "Twilio", "SendGrid", "Vehicle Telematics APIs"],
    automations: [
      "Delivery status updates to customers",
      "Estimated time of arrival (ETA) notifications",
      "Maintenance reminders based on mileage",
      "Driver shift scheduling",
      "Fuel efficiency reports",
    ],
    stack: ["Next.js", "PostgreSQL", "Redis", "Google Maps API", "WebSockets"],
    timeline: "4 months",
    outcomes: [
      "25% improvement in delivery efficiency",
      "Real-time tracking of 100+ vehicles",
      "30% reduction in fuel costs",
      "99% on-time delivery rate",
    ],
    confidentialityLevel: "medium",
    images: ["/projects/logistics-1.jpg", "/projects/logistics-2.jpg"],
    demoPolicy: "Private demo available upon request",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getProjects(): Project[] {
  return projects;
}
