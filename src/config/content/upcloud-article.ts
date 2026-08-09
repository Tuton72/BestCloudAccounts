import type { ArticleFaqItem, CardItem, ProseSection, SafetyStep } from "@/types/article";

/**
 * Full long-form article content for the UpCloud product detail page
 * (/cloud-accounts/upcloud-account), shown below the existing product
 * section. Business-supplied marketing copy — preserved in full; only its
 * presentation is structured here. Do not shorten or summarize.
 */

export const articleIntro = {
  eyebrow: "UpCloud Account Guide",
  title: "Buy UpCloud Account – Verified, Instant Delivery with High-Performance Cloud",
  paragraphs: [
    "Are you searching for a reliable way to Buy UpCloud Account without dealing with lengthy verification processes, credit card declines, or frustrating waiting periods? You have come to the right place. Whether you are a developer, a startup founder, a freelancer, or a business owner, having access to UpCloud is essential for building and scaling modern applications. UpCloud is one of the fastest-growing and most performance-focused cloud platforms in the world, offering industry-leading infrastructure, enterprise-grade reliability, and a global network of data centers.",
    "When you choose to Buy UpCloud Account from a trusted provider like Best Cloud Accounts (bestcloudaccounts.com), you skip all the unnecessary hurdles and get straight to building your cloud infrastructure. Our accounts are 100% verified, offer full platform access, support multiple server deployments, and are delivered quickly. No hidden fees, no complicated setup, and no unexpected surprises – just a fully functional UpCloud account ready to deploy your projects.",
    "In this comprehensive guide, we will walk you through everything you need to know about UpCloud accounts – from features and benefits to safety tips, use cases, and step-by-step purchasing instructions. By the end, you will understand exactly why thousands of developers and businesses trust bestcloudaccounts.com when they need to Buy UpCloud Account Online quickly and securely.",
  ],
};

export const articleSections: ProseSection[] = [
  {
    id: "what-is-upcloud",
    heading: "What Is UpCloud and Why Is It So Popular?",
    paragraphs: [
      "UpCloud is a cloud infrastructure provider that was founded as a VPS provider in 2013 and is headquartered in Finland. Since its inception, UpCloud has built a strong reputation for offering high-performance, reliable, and developer-friendly cloud services. The company's mission is to provide fast, flexible, and reliable cloud infrastructure that empowers businesses to innovate and succeed.",
      "What sets UpCloud apart is its exceptional performance and transparent pricing model. The platform offers up to 90% faster cloud performance than competitors at the same price point, allowing you to maximize efficiency and scale effortlessly. UpCloud's proprietary MaxIOPS storage technology delivers up to 100k IOPS, far exceeding standard SSD storage solutions. This means faster application response times, quicker database queries, and better overall user experiences.",
      "Another key advantage is UpCloud's developer-first approach. The platform offers server deployment in as little as 45 seconds, full root access, a powerful API, and integrations with popular tools like Terraform, Ansible, and Kubernetes. Whether you are running a personal blog, a small business website, or enterprise applications, UpCloud provides the infrastructure you need with predictable pricing and no hidden costs.",
      "UpCloud also recently introduced Workspaces, a major architectural evolution that gives businesses, growing teams, and partners complete control over their cloud environments. This new Organization framework offers robust resource isolation, flexible multi-tenant access, and enterprise-grade authentication.",
      "That is why so many people prefer to Buy UpCloud Account instead of spending hours or days going through UpCloud's standard verification process. With a pre-verified account, you get instant access to all these benefits without any delay.",
    ],
  },
];

export const featureCards: { heading: string; intro: string; items: CardItem[] } = {
  heading: "Key Features You Get When You Buy UpCloud Account",
  intro:
    "When you purchase an UpCloud account from Best Cloud Accounts, you are not just getting login credentials – you are getting a fully functional, verified, and ready-to-use cloud environment. Here are the key features you can expect:",
  items: [
    {
      icon: "cpu",
      title: "Blazing Fast MaxIOPS Storage",
      body: "UpCloud's proprietary MaxIOPS storage technology delivers exceptional performance. Independent analysis shows that MaxIOPS provides up to 100k IOPS, making it significantly faster than standard SSD storage solutions. With block storage pricing starting at €0.220/GB/month and 250GB minimum for object storage, you get enterprise-grade storage at competitive prices. When you Buy UpCloud Account, you get access to this high-performance storage technology from day one.",
    },
    {
      icon: "layers",
      title: "UpCloud Essentials – Complimentary Platform Features",
      body: "When you spin up a new UpCloud server, you get instant access to UpCloud Essentials – a suite of foundational features designed to help you build and scale quickly, all at no additional cost. This includes:",
      checklist: [
        "Zero Data Transfer Fees: Both ingress and egress traffic are free",
        "Kubernetes Control Planes: Deploy and manage containerized applications",
        "Load Balancers: Keep your applications available and scalable",
        "NAT/VPN Gateways: Keep your data and systems secure",
        "API & SDKs: Build custom workflows and integrations",
        "Hot Resize: Scale resources instantly without downtime",
        "Global Private Network: High-performance private connectivity across 15 global data centers",
        "Free Daily Backup Plan: Protect your valuable data automatically",
      ],
    },
    {
      icon: "network",
      title: "Global Data Center Network",
      body: "UpCloud currently offers infrastructure in 15 global locations, including Amsterdam, Copenhagen, Chicago, Frankfurt, Helsinki, London, Madrid, New York, San Jose, Singapore, Stavanger, Stockholm, Sydney, and Warsaw. This global footprint allows you to deploy your applications closer to your target audience, reducing latency and improving user experience. When you Buy UpCloud Account, you get access to this entire global infrastructure.",
    },
    {
      icon: "server",
      title: "Flexible Server Plans",
      body: "UpCloud offers three server plan categories to suit different needs:",
      checklist: [
        "Starter Plans: Starting at just $3.5/month, these are ideal for development environments, testing deployments, and self-hosting. They include 1-4 CPU cores, 1-16 GB memory, up to 500 Mbit/s network, and full root access.",
        "Premium Plans: For intensive workloads, production environments, and business-critical applications. These plans offer operational certainty with 99.99% SLA.",
        "Cloud Native Plans: Designed for Kubernetes and microservices architectures, these plans offer power and flexibility for containerized workloads.",
      ],
    },
    {
      icon: "shield-check",
      title: "100% Verified and Valid Account",
      body: "We understand that account verification is the most critical factor when you decide to Buy UpCloud Account Online. UpCloud's verification process requires email verification, phone verification, and credit card verification with address matching. All our accounts are manually verified before delivery – meaning they have passed all of UpCloud's verification checks. You get a Verified UpCloud Account that is clean, authenticated, and ready for immediate use.",
    },
    {
      icon: "sliders-horizontal",
      title: "Hot Resize – Zero Downtime Scaling",
      body: "UpCloud's Hot Resize feature allows you to scale your server resources instantly without any downtime. Whether you need more CPU, RAM, or storage, you can upgrade your server configuration on the fly without interrupting your applications. This is particularly valuable for businesses experiencing traffic spikes or growth.",
    },
    {
      icon: "shield-check",
      title: "Enterprise-Grade Reliability",
      body: "UpCloud offers a 99.99% SLA with 24-hour seven-days-per-week support. The platform is built on 5th Gen AMD EPYC 9575F Turin processors with DDR5 RAM, delivering enterprise-grade performance and reliability. With battle-tested infrastructure and a <2-minute response time for customer support, you can trust that your applications are in safe hands.",
    },
    {
      icon: "cpu",
      title: "Comprehensive API and Developer Tools",
      body: "UpCloud provides a fully featured REST API, CLI tools, and integrations with popular infrastructure management tools including Terraform, Ansible, cPanel, Plesk, WHMCS, and Ploi Core. This makes UpCloud Account for Developers an ideal choice for teams that need automation and infrastructure-as-code capabilities.",
    },
    {
      icon: "send",
      title: "Instant Delivery – No Waiting",
      body: "Time is money, and we respect that. When you purchase from bestcloudaccounts.com, your account credentials are delivered quickly. Our automated system ensures you get your account details as fast as possible so you can start deploying immediately.",
    },
    {
      icon: "clipboard-list",
      title: "Additional Billing Included",
      body: "Our accounts come with pre-attached billing methods, so you do not need to worry about adding your own credit card or going through the billing verification process. This is especially helpful for users in regions where credit cards are often declined by UpCloud.",
    },
  ],
};

export const whyBuySection = {
  heading: "Why Should You Buy UpCloud Account Instead of Creating One?",
  intro:
    "This is a fair question. After all, UpCloud allows anyone to create an account for free – so why pay to Buy UpCloud Account from a third-party provider? The answer lies in the practical challenges that many users face when signing up directly.",
  subsections: [
    {
      heading: "Strict and Time-Consuming Verification Process",
      paragraphs: [
        "Creating an UpCloud account requires a valid email address, phone number for SMS verification, and credit card details for identity verification. The credit card information must match the billing address you provide. Users often encounter challenges including credit card declines due to regional restrictions, address validation failures, and phone number verification issues.",
        "By choosing to Buy UpCloud Account from Best Cloud Accounts, you bypass all these hurdles. Our accounts are already fully verified, so you can start working immediately.",
      ],
    },
    {
      heading: "Credit Card Declines and Payment Issues",
      paragraphs: [
        "UpCloud requires a valid payment method even for using the platform. If your credit card is declined, you cannot access the services or launch instances. When you purchase a pre-verified account, the payment method is already attached and approved – so you can use the platform without any payment issues.",
      ],
    },
    {
      heading: "Instant Access to UpCloud Essentials",
      paragraphs: [
        "UpCloud Essentials provides foundational features including zero data transfer fees, Kubernetes control planes, load balancers, and free daily backup plans. However, these features only become available after your account is fully verified. With a purchased account, all these features are already active and ready to use instantly.",
      ],
    },
    {
      heading: "Faster Deployment and Higher Resource Limits",
      paragraphs: [
        "UpCloud boasts an impressive average server provisioning time of just 88 seconds. However, for new, unverified accounts, deployment may be slower or limited. Our accounts come with full access to all UpCloud features, giving you immediate access to the fastest deployment times.",
      ],
    },
    {
      heading: "Global Deployment Ready",
      paragraphs: [
        "With UpCloud's global data center network spanning 15 locations, you can deploy your applications anywhere in the world. A purchased account is ready to deploy instantly across any of UpCloud's data center locations.",
      ],
    },
  ],
};

export const whoBenefitsCards: { heading: string; intro: string; items: CardItem[] } = {
  heading: "Who Benefits Most from Buying UpCloud Accounts?",
  intro: "",
  items: [
    {
      icon: "server",
      title: "Developers and Programmers",
      body: "If you are a developer working on multiple projects, having a ready-to-use UpCloud account saves you countless hours. You can spin up isolated environments, test new technologies, and deploy applications without worrying about verification delays. An UpCloud Account for Developers from Best Cloud Accounts is designed specifically for this purpose, giving you access to UpCloud's powerful API, CLI tools, and Terraform integrations. Starter plans starting at just $3.5/month make this an affordable option.",
    },
    {
      icon: "sparkles",
      title: "Startups and Small Businesses",
      body: "In the early stages of a business, speed and cost-efficiency are everything. UpCloud's exceptional performance and transparent pricing make it ideal for startups. UpCloud also offers a 30-day free trial with $500 in free credit for new users. By purchasing an UpCloud Cloud Account, you eliminate administrative bottlenecks and focus your energy on building your product.",
    },
    {
      icon: "network",
      title: "Freelancers and Agencies",
      body: "If you manage cloud infrastructure for multiple clients, having separate UpCloud accounts for each client is essential for isolation, security, and cost tracking. Buying pre-made UpCloud Accounts in bulk saves time and ensures each client has their own fully functional environment. UpCloud's Workspaces feature allows for logical environment separation and multi-tenant access.",
    },
    {
      icon: "cpu",
      title: "AI and Machine Learning Developers",
      body: "UpCloud offers GPU Servers for demanding AI workloads, including generative AI, LLM inference, AI model training, 3D rendering, and video processing. With transparent usage-based billing, you only pay for active compute time. A Verified UpCloud Account allows you to start experimenting with AI workloads immediately.",
    },
    {
      icon: "clipboard-list",
      title: "QA and Testing Teams",
      body: "Testing environments often require multiple accounts – especially when testing cross-account features or region-specific configurations. Buying ready accounts from bestcloudaccounts.com makes this process much simpler.",
    },
    {
      icon: "shopping-cart",
      title: "eCommerce and Digital Agencies",
      body: "UpCloud provides high-speed cloud hosting to keep online stores running smoothly during peak sales. With 99.999% uptime SLA, faster checkouts, and reduced cart abandonment, UpCloud is an excellent choice for eCommerce businesses. Agencies can also benefit from improved responsiveness and page load speeds for their clients.",
    },
    {
      icon: "layers",
      title: "Container and Kubernetes Users",
      body: "UpCloud's Managed Kubernetes service (UKS) is touted as the fastest container orchestration platform on the market. Cloud Native plans are specifically designed for Kubernetes and microservices architectures.",
    },
  ],
};

export const safetySteps: { heading: string; intro: string; items: SafetyStep[] } = {
  heading: "How to Safely Buy UpCloud Account Online",
  intro:
    "If you are considering purchasing an UpCloud account, it is important to know how to do it safely and avoid scams. Here are our top tips:",
  items: [
    {
      icon: "eye",
      title: "Check Seller Reputation",
      body: "Before you Buy UpCloud Account Online, search for reviews, testimonials, or feedback from previous buyers. Genuine sellers like Best Cloud Accounts have a proven track record and are transparent about their service history.",
    },
    {
      icon: "send",
      title: "Look for Fast Delivery",
      body: "A reliable seller delivers account credentials within the promised timeframe – not days or weeks. Our delivery is fast and efficient, ensuring you can start working immediately.",
    },
    {
      icon: "list-checks",
      title: "Verify Account Status Immediately",
      body: "Once you receive the account details, log in immediately and check:",
      checklist: [
        "Account verification status is complete",
        "Server deployment is allowed",
        "Data center locations are accessible",
        "UpCloud Essentials features are active",
        "No outstanding bills or unusual activity",
      ],
    },
    {
      icon: "lock",
      title: "Change Credentials Right Away",
      body: "After you Buy UpCloud Account, always change the password and enable two-factor authentication. You should also update the email address associated with the account to your own, ensuring full control.",
    },
    {
      icon: "shield-check",
      title: "Review the Refund Policy",
      body: "A legitimate seller always offers a clear refund or replacement policy. At Best Cloud Accounts, we stand behind every account we sell – if you encounter any issue within the warranty period, we will replace your account or issue a full refund.",
    },
  ],
};

export const useCaseCards: { heading: string; intro: string; items: CardItem[] } = {
  heading: "What Can You Do With an UpCloud Account?",
  intro:
    "A purchased UpCloud account is not just for testing – it is a fully functional cloud environment suitable for production-level workloads. Here are some of the most popular use cases:",
  items: [
    {
      icon: "cloud",
      title: "Web Hosting and Application Deployment",
      body: "Host websites, web applications, and APIs on UpCloud's high-performance cloud servers. With MaxIOPS storage delivering up to 100k IOPS, your applications will load faster and handle more traffic. Starter plans starting at $3.5/month make it accessible for small projects.",
    },
    {
      icon: "server",
      title: "VPS Hosting",
      body: "Deploy high-performance UpCloud VPS Account servers for web hosting, app backends, or APIs. UpCloud offers a range of plans including Starter, Premium, and Cloud Native categories. With full root access, you can install any software and configure your server exactly as needed.",
    },
    {
      icon: "sliders-horizontal",
      title: "Development and Staging Environments",
      body: "Spin up isolated environments for testing new features, running QA workflows, or staging production releases without affecting live applications. UpCloud's average server provisioning time of just 88 seconds makes it ideal for rapid development cycles.",
    },
    {
      icon: "layers",
      title: "Kubernetes and Container Orchestration",
      body: "Deploy and manage containerized applications using UpCloud's Managed Kubernetes service (UKS), which offers fully managed control planes and fast deployment. Cloud Native plans are specifically designed for this purpose.",
    },
    {
      icon: "sparkles",
      title: "AI and Machine Learning",
      body: "Run AI workloads, LLM inference, and model training using UpCloud's GPU Servers. The platform's usage-based billing means you only pay for active compute time, making it cost-effective for AI development.",
    },
    {
      icon: "cpu",
      title: "GPU-Accelerated Workloads",
      body: "UpCloud GPU Servers are ideal for 3D rendering, video processing, and other graphics-intensive applications. Combined with UpCloud's MaxIOPS storage, you can achieve exceptional performance for demanding workloads.",
    },
    {
      icon: "database",
      title: "Database Hosting",
      body: "Use UpCloud Managed Databases for MySQL, PostgreSQL, Valkey, and OpenSearch, with automated failover and 99.999% uptime SLA.",
    },
    {
      icon: "shopping-cart",
      title: "Agency and Freelance Projects",
      body: "Manage multiple client projects under a single UpCloud account, with separate servers and resources for each client.",
    },
  ],
};

export const whyChooseUsCards: { heading: string; intro: string; items: CardItem[] } = {
  heading: "Why Choose Best Cloud Accounts to Buy UpCloud Account Online?",
  intro:
    "With so many sellers offering UpCloud Account for Sale, what makes Best Cloud Accounts (bestcloudaccounts.com) the right choice? Here are the key reasons:",
  items: [
    {
      icon: "shield-check",
      title: "100% Verified and Valid Accounts",
      body: "Every account is manually verified and tested before delivery. UpCloud's verification process includes email verification, phone verification, and credit card verification. We handle all of this so you don't have to. When you receive a Verified UpCloud Account from us, you can be confident it is clean, authenticated, and ready to use.",
    },
    {
      icon: "server",
      title: "Full Platform Access",
      body: "When you buy an UpCloud Account from us, you get access to the full suite of UpCloud services – including MaxIOPS storage, Managed Kubernetes, Load Balancers, Managed Databases, GPU Servers, and all UpCloud Essentials features.",
    },
    {
      icon: "layers",
      title: "UpCloud Essentials Included",
      body: "All accounts come with UpCloud Essentials – zero data transfer fees, Kubernetes control planes, load balancers, NAT/VPN gateways, Hot Resize, and a free daily backup plan. These features are active from day one.",
    },
    {
      icon: "coins",
      title: "30-Day Free Trial with $500 Credit",
      body: "UpCloud offers a 30-day free trial with $500 in free credit for new users. Our verified accounts come with this trial intact and ready to use.",
    },
    {
      icon: "network",
      title: "Global 15 Data Center Locations",
      body: "Our accounts give you access to all 15 UpCloud data centers across North America, Europe, Asia-Pacific, and Australia.",
    },
    {
      icon: "send",
      title: "Instant Delivery",
      body: "We deliver account credentials quickly and efficiently. Our delivery system ensures you never have to wait long to start using your account.",
    },
    {
      icon: "headset",
      title: "24/7 Customer Support",
      body: "Our support team is available around the clock to assist you with any questions, concerns, or issues. Whether you need help with login, setup, or account configuration, we are always here to help.",
    },
    {
      icon: "tag",
      title: "Affordable Pricing",
      body: "We offer Affordable UpCloud Account options that fit within tight budgets without compromising on quality, verification, or features. We believe everyone should have access to UpCloud's powerful cloud infrastructure.",
    },
    {
      icon: "check-circle",
      title: "Replacement Guarantee",
      body: "If you face any problem with your account after delivery, we offer a full replacement or refund – no questions asked. Your satisfaction is our priority.",
    },
  ],
};

export const buySteps = {
  heading: "Step-by-Step Guide to Buy UpCloud Account from Best Cloud Accounts",
  paragraphs: [
    "Purchasing an UpCloud account from bestcloudaccounts.com is simple, fast, and secure. Here is exactly how the process works:",
  ],
  steps: [
    {
      title: "Visit bestcloudaccounts.com",
      body: "Navigate to our website and browse our UpCloud account packages.",
    },
    {
      title: "Select Your Package",
      body: "Choose the account plan that best fits your needs – Starter, Pro, Business, or Custom. Each package is designed for different use cases and budgets.",
    },
    {
      title: "Add to Cart and Checkout",
      body: "Add the account to your shopping cart and proceed to our secure checkout page.",
    },
    {
      title: "Complete Payment",
      body: "Make your payment using your preferred method – cryptocurrency, credit card, PayPal, or other available options.",
    },
    {
      title: "Receive Your Account",
      body: "Within a short time, you will receive your account credentials via Telegram or email with full login details.",
    },
    {
      title: "Log In and Verify",
      body: "Log in to your UpCloud account and verify the account is fully verified and ready for use.",
    },
    {
      title: "Secure Your Account",
      body: "Change the password, update the email and phone number to your own, and enable two-factor authentication for enhanced security.",
    },
    {
      title: "Start Building",
      body: "Deploy your first server in as little as 45 seconds, set up your infrastructure, and start building your cloud applications immediately.",
    },
  ],
  closing: "If you have any questions at any step, our 24/7 support team is always ready to help.",
};

export const articleFaq: ArticleFaqItem[] = [
  {
    question: "Can I Buy an UpCloud Account with Instant Delivery?",
    answer:
      "Yes. All UpCloud accounts purchased from Best Cloud Accounts are delivered with maximum speed. Our delivery is fast and efficient, so you can start using your account right away.",
  },
  {
    question: "Is the Account Fully Verified?",
    answer:
      "Yes. All accounts are 100% verified and valid. You get a Verified UpCloud Account that is clean and ready for immediate use.",
  },
  {
    question: "Does the Account Include UpCloud's Full Features?",
    answer:
      "Absolutely. Our accounts come with full access to all UpCloud features – including MaxIOPS storage, Managed Kubernetes, Load Balancers, Managed Databases, GPU Servers, and all UpCloud Essentials features.",
  },
  {
    question: "What Is the Cheapest UpCloud Account for Sale?",
    answer:
      "Our Starter plan offers the most affordable entry point for buying an UpCloud account. It includes full platform access at the lowest price point. Visit our website for the latest deals and discount offers.",
  },
  {
    question: "How Many Servers Can I Run on a Purchased Account?",
    answer:
      "Our standard accounts support deploying and managing multiple servers simultaneously. If you need higher server limits for larger projects or agency use, our Business and Custom plans offer expanded capacity.",
  },
  {
    question: "Is It Safe to Buy an UpCloud Account Online?",
    answer:
      "Yes – as long as you buy from a trusted, transparent seller like Best Cloud Accounts. We source our accounts through legitimate channels, never reuse accounts, transmit credentials securely, and offer a full replacement guarantee. We also recommend enabling two-factor authentication upon account receipt for added security.",
  },
  {
    question: "Can I Use the Purchased Account for Long-Term Projects?",
    answer:
      "Absolutely. As long as the account has a clean history and stable billing, you can use it for long-term production workloads. UpCloud offers a 99.99% SLA with 24/7 support. Just make sure to update the contact details to your own and secure your account with MFA.",
  },
  {
    question: "What Happens If I Get Locked Out of the Account?",
    answer:
      "If you forget the password or get locked out, contact our support team immediately. We keep backup details and can assist with recovery. However, once you have updated the email and phone number to your own, you should be able to recover the account independently through UpCloud's standard recovery process.",
  },
];

export const finalThoughtsSection: ProseSection = {
  id: "final-thoughts",
  heading: "Final Thoughts – Best Place to Buy UpCloud Account Online",
  paragraphs: [
    "If you are ready to take your cloud projects to the next level without the hassle of manual verification, long wait times, or unverified sellers – Best Cloud Accounts (bestcloudaccounts.com) is your most reliable solution. We provide 100% verified UpCloud accounts with instant delivery and full platform access – all ready from day one. Our track record, transparent pricing, and dedicated support make us the preferred choice for developers, agencies, and businesses worldwide.",
    "UpCloud has earned its reputation as a high-performance, developer-friendly cloud platform since 2013. With 15 global data centers, MaxIOPS storage delivering up to 100k IOPS, and server deployment in as little as 45 seconds, UpCloud is an excellent choice for modern cloud workloads. Whether you are looking for an affordable UpCloud account for personal projects, a pro account for production workloads, or bulk accounts for your agency – we have you covered. Every purchase is backed by our replacement guarantee, so you can buy with full confidence.",
    "Do not delay your cloud journey any longer. Buy an UpCloud Account from bestcloudaccounts.com today and experience the speed, reliability, and quality that thousands of satisfied customers already trust.",
  ],
};

/**
 * Source "Product Tags" list. Rendered as page SEO metadata keywords
 * rather than as visible on-page text — keeps the terms fully preserved
 * for search purposes without keyword-stuffing the visual design.
 */
export const articleTags: string[] = [
  "Buy UpCloud Account",
  "Buy UpCloud Accounts",
  "UpCloud Account for Sale",
  "Buy UpCloud Account Online",
  "Verified UpCloud Account",
  "UpCloud Cloud Account",
  "UpCloud Account for Developers",
  "UpCloud VPS Account",
  "UpCloud Cloud Server Account",
  "Affordable UpCloud Account",
];
