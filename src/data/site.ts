// Central content file — edit copy, contact details, and lists here.

export const siteConfig = {
  name: "BOP Freelance Services",
  tagline: "Virtual Accounting & Tax Specialist",
  description:
    "Virtual Accounting & Tax Services that grow your business. Empowering companies in Mombasa and across Kenya with accurate financial records, tax compliance, payroll management, and strategic financial reporting.",
  url: "https://bopfreelanceservices.com",
  location: "Mombasa, Kenya",
  phone: "+254 705 451 677",
  phoneRaw: "254705451677",
  email: "info@bopfreelanceservices.com",
  whatsappMessage:
    "Hello BOP Freelance Services, I'd like to enquire about your accounting & tax services.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { label: "Remote Service", value: 100, suffix: "%" },
  { label: "Accuracy Guaranteed", value: 100, suffix: "%" },
  { label: "KRA Compliant", value: 100, suffix: "%" },
  { label: "Avg. Response Time", value: 2, suffix: "hr" },
];

export const missionVisionValues = [
  {
    title: "Our Mission",
    body: "To empower small and growing businesses with reliable, accurate, and affordable virtual accounting solutions that free up time to focus on what matters most — growth.",
  },
  {
    title: "Our Vision",
    body: "To be East Africa's most trusted virtual accounting partner, known for precision, integrity, and a client-first approach to financial management.",
  },
  {
    title: "Our Values",
    body: "Accuracy, confidentiality, transparency, and responsiveness guide every engagement — because your business finances deserve nothing less.",
  },
];

export const timeline = [
  {
    year: "Foundation",
    title: "Built on Financial Expertise",
    body: "BOP Freelance Services was founded to bring professional-grade accounting to small and growing Kenyan businesses — virtually and affordably.",
  },
  {
    year: "Growth",
    title: "Expanding Our Service Line",
    body: "From bookkeeping to full tax compliance and payroll, we grew our offering to cover every financial need of a modern business.",
  },
  {
    year: "Digital-First",
    title: "Going Fully Remote",
    body: "We embraced cloud accounting platforms — QuickBooks, Xero, and secure digital workflows — to serve clients anywhere in Kenya.",
  },
  {
    year: "Today",
    title: "Trusted by Growing Businesses",
    body: "We now support businesses across Mombasa and beyond with accurate books, timely filings, and clear financial reporting.",
  },
];

export type Service = {
  icon: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    icon: "BookOpenCheck",
    title: "Bookkeeping & Reconciliations",
    description:
      "Accurate, up-to-date books so you always know where your business stands.",
    items: [
      "General Ledger",
      "Accounts Payable",
      "Accounts Receivable",
      "Bank Reconciliation",
      "Backlog Cleanup",
    ],
  },
  {
    icon: "ReceiptText",
    title: "Tax Consulting & Compliance",
    description:
      "Stay fully compliant with KRA while minimizing your tax burden legally.",
    items: ["VAT", "PAYE", "Income Tax", "Turnover Tax", "Tax Planning"],
  },
  {
    icon: "LineChart",
    title: "Financial Reporting",
    description:
      "Clear, decision-ready reports that turn raw numbers into business insight.",
    items: [
      "Profit & Loss",
      "Balance Sheet",
      "Cash Flow",
      "Budgeting",
      "Monthly Reports",
    ],
  },
  {
    icon: "Users",
    title: "Payroll & Software Setup",
    description:
      "Seamless payroll processing and cloud accounting software configured for you.",
    items: [
      "Payroll Processing",
      "Payslip Generation",
      "QuickBooks",
      "Xero",
      "Excel Templates",
    ],
  },
];

export const whyChooseUs = [
  {
    icon: "Wifi",
    title: "Remote Efficiency",
    body: "Full-service accounting delivered virtually — no office visits required.",
  },
  {
    icon: "Target",
    title: "100% Accuracy",
    body: "Meticulous attention to detail on every ledger, filing, and report.",
  },
  {
    icon: "CalendarClock",
    title: "Flexible Terms",
    body: "Engagement plans that flex around your business cycle and budget.",
  },
  {
    icon: "MessageCircle",
    title: "Fast Communication",
    body: "Rapid response times via WhatsApp, email, or call — always reachable.",
  },
  {
    icon: "Wallet",
    title: "Affordable Packages",
    body: "Premium quality accounting without the overhead of an in-house team.",
  },
  {
    icon: "ShieldCheck",
    title: "Trusted Service",
    body: "Confidential, compliant, and consistent — trusted by growing businesses.",
  },
];

export const process = [
  {
    step: "01",
    title: "Consultation",
    body: "A free discovery call to understand your business and financial needs.",
  },
  {
    step: "02",
    title: "Review",
    body: "In-depth review of existing records, systems, and compliance status.",
  },
  {
    step: "03",
    title: "Implementation",
    body: "We set up or clean up your books, software, and reporting workflows.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    body: "Monthly bookkeeping, filings, and reports — with proactive check-ins.",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "KES 12,000",
    period: "/month",
    description: "For small businesses and startups needing the essentials.",
    features: [
      "Monthly Bookkeeping",
      "Bank Reconciliation",
      "Basic Financial Reports",
      "Email Support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "KES 25,000",
    period: "/month",
    description: "For growing businesses needing full compliance support.",
    features: [
      "Everything in Starter",
      "VAT & PAYE Filing",
      "Payroll Processing",
      "Monthly P&L and Balance Sheet",
      "Priority WhatsApp Support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For established businesses with complex financial needs.",
    features: [
      "Everything in Growth",
      "Dedicated Accountant",
      "Custom Financial Reporting",
      "Tax Planning & Advisory",
      "QuickBooks/Xero Setup & Training",
    ],
    highlighted: false,
  },
];

export const testimonials = [
  {
    name: "Amina Hassan",
    role: "Founder, Coastal Traders Ltd",
    quote:
      "BOP Freelance Services transformed our messy books into a clear, reliable system. Our VAT filings are always on time now, and I finally understand my numbers.",
    rating: 5,
  },
  {
    name: "James Mwangi",
    role: "Director, Mwangi Logistics",
    quote:
      "Professional, responsive, and incredibly accurate. Switching to their virtual bookkeeping saved us the cost of a full in-house accountant.",
    rating: 5,
  },
  {
    name: "Fatuma Ali",
    role: "CEO, Baraka Boutique",
    quote:
      "The payroll and reporting service is seamless. I get my monthly reports like clockwork and can finally make informed decisions about my business.",
    rating: 5,
  },
  {
    name: "David Otieno",
    role: "Owner, Otieno Hardware",
    quote:
      "Their tax planning advice saved us real money this year. Highly recommend BOP for any business serious about its finances.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Do you work with businesses outside Mombasa?",
    answer:
      "Yes — our services are 100% virtual, so we work with businesses anywhere in Kenya and beyond. All you need is an internet connection.",
  },
  {
    question: "What accounting software do you support?",
    answer:
      "We work with QuickBooks Online, Xero, and custom Excel templates. We can also help you choose and set up the right software for your business.",
  },
  {
    question: "How do you ensure my financial data is secure?",
    answer:
      "We use secure, encrypted cloud platforms and sign confidentiality agreements with every client. Your data is never shared with third parties.",
  },
  {
    question: "How quickly can you clean up backlogged books?",
    answer:
      "Timelines depend on volume and complexity, but most backlog cleanups are completed within 1-3 weeks after we receive your records.",
  },
  {
    question: "Can you handle KRA tax filings on my behalf?",
    answer:
      "Absolutely. We manage VAT, PAYE, Income Tax, and Turnover Tax filings, ensuring full KRA compliance and on-time submissions.",
  },
  {
    question: "What is the typical onboarding process?",
    answer:
      "It starts with a free consultation, followed by a review of your current records, then implementation of systems and processes tailored to your business.",
  },
];

export const softwareLogos = [
  "QuickBooks",
  "Xero",
  "Excel",
  "KRA iTax",
  "Sage",
  "Zoho Books",
];

export const socialLinks = [
  { icon: "Facebook", href: "#", label: "Facebook" },
  { icon: "Instagram", href: "#", label: "Instagram" },
  { icon: "Linkedin", href: "#", label: "LinkedIn" },
  { icon: "Twitter", href: "#", label: "Twitter/X" },
];

export const footerServices = services.map((s) => s.title);

export const footerQuickLinks = navLinks;
