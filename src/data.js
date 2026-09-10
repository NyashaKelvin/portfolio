// ---------------------------------------------------------------------------
// Personal details, sourced from https://nyashakelvin.github.io/portfolio/
// ---------------------------------------------------------------------------
export const profile = {
  name: 'Nyasha Kelvin',
  fullName: 'Nyasha Kelvin Madoro',
  role: 'Cloud Systems & DevOps Engineer',
  tagline: 'Automating Infrastructure. Scaling Applications.',
  email: 'madoronyasha0@gmail.com',
  github: 'https://github.com/NyashaKelvin',
  githubHandle: 'NyashaKelvin',
  linkedin: 'https://www.linkedin.com/in/nyashakelvin-madoro-4b09a3375',
  location: 'Harare, Zimbabwe',
  summary:
    "I'm a Cloud Systems & DevOps Engineer who likes making infrastructure boring, in the best way. My work sits at the join between the code a team ships and the platform it runs on: containers that build the same way everywhere, pipelines that catch problems before a human has to, and infrastructure that's described in code instead of memory. I care less about chasing every new tool and more about systems that stay calm at 3am.",
}

// ---------------------------------------------------------------------------
// Featured projects, pulled from the uploaded repositories
// (DataV, FindIt, RateLimit API Gate, TaskFlow)
// ---------------------------------------------------------------------------
export const projects = [
  {
    tag: 'Data platform',
    title: 'DataV: Dataset Visualization Studio',
    description:
      'A browser-based data visualization workspace built on TanStack Start and Cloudflare Workers. Upload a dataset, and DataV renders interactive charts and dashboards on top of a full shadcn/Radix UI component system, no backend spreadsheet wrangling required.',
    problem: 'Turning raw CSV/JSON exports into readable insight normally means a detour through spreadsheets or a BI tool.',
    features: 'Drag-and-drop dataset upload, live chart rendering, accessible Radix-based UI kit, edge deployment on Cloudflare.',
    impact: 'Cuts the time between "here is a dataset" and "here is an insight" down to a single upload.',
    tags: ['TanStack Start', 'Cloudflare Workers', 'Radix UI', 'React'],
    status: 'Active',
    github: 'https://github.com/NyashaKelvin/DataV',
  },
  {
    tag: 'Full-stack platform',
    title: 'FindIt: Campus Lost & Found',
    description:
      'A full-stack lost-and-found platform pairing a Django REST Framework API with a React frontend. Users report lost or found items with geolocation, message each other through an in-app inbox, and submit claim requests that owners can approve.',
    problem: 'Lost items on a campus or in an organisation rarely make it back to their owner. Reports live in disconnected group chats and lost-property boxes.',
    features: 'JWT authentication (dj-rest-auth + SimpleJWT), geotagged item reports, real-time-style messaging, claim-request workflow, Google OAuth login.',
    impact: 'Gives a community a single searchable source of truth for lost and found items, with an auditable claim trail.',
    tags: ['Django REST', 'React', 'JWT Auth', 'PostgreSQL'],
    status: 'Active',
    github: 'https://github.com/NyashaKelvin/Finditbackend',
  },
  {
    tag: 'Platform infrastructure',
    title: 'RateLimit: API Key Gateway',
    description:
      'A FastAPI microservice that issues hashed API keys and enforces per-client usage limits, paired with a React dashboard for provisioning and monitoring keys. Ships with a GitHub Actions CI workflow and a pytest suite.',
    problem: 'Public-facing APIs need throttling and key management before they can be trusted with real traffic.',
    features: 'SHA-256 hashed key storage, per-client usage quotas, SQLAlchemy models with SQLite/Postgres support, CI pipeline with automated tests.',
    impact: 'Drop-in rate-limiting layer that protects backend services from abuse without touching their core logic.',
    tags: ['FastAPI', 'SQLAlchemy', 'GitHub Actions', 'React'],
    status: 'Active',
    github: 'https://github.com/NyashaKelvin/ratelimit',
  },
]

export const projectHistory = [
  {
    step: '1',
    title: 'Full-Stack Foundations',
    description:
      'Started by shipping complete products end to end: the FindIt platform paired React frontends with real backends (Django REST, JWT auth, relational data models) instead of static demos.',
  },
  {
    step: '2',
    title: 'API Reliability & Rate Limiting',
    description:
      'Moved into platform-level concerns: built RateLimit, a FastAPI service for issuing and throttling API keys, with an automated pytest + GitHub Actions pipeline guarding every change.',
  },
  {
    step: '3',
    title: 'Data & Edge Platforms',
    description:
      'Built DataV on TanStack Start and Cloudflare Workers, learning to design for the edge: fast cold starts, globally distributed compute, and a component system that scales with the product.',
  },
  {
    step: '4',
    title: 'Containers & Infrastructure as Code',
    description:
      'Formalised the DevOps layer: multi-stage Docker images, Terraform-managed Vercel/Netlify projects, and GitHub Actions pipelines that test, provision, and promote in one auditable flow.',
  },
  {
    step: '5',
    title: 'Current Direction',
    description:
      'Focused on production-grade delivery pipelines: reproducible environments, infrastructure as code, and deployment automation that turns "it works on my machine" into "it works, full stop."',
  },
]

export const skillGroups = [
  {
    icon: 'Container',
    title: 'Containerization & Orchestration',
    items: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm'],
  },
  {
    icon: 'FileTerminal',
    title: 'Infrastructure as Code',
    items: ['Terraform', 'CloudFormation', 'Ansible'],
  },
  {
    icon: 'GitBranch',
    title: 'CI/CD Automation',
    items: ['GitHub Actions', 'GitLab CI', 'Jenkins'],
  },
  {
    icon: 'Cloud',
    title: 'Cloud Platforms',
    items: ['AWS', 'GCP', 'Vercel', 'Cloudflare'],
  },
  {
    icon: 'Activity',
    title: 'Observability & Monitoring',
    items: ['Prometheus', 'Grafana', 'Loki'],
  },
  {
    icon: 'Code2',
    title: 'Languages & Backend',
    items: ['Python', 'Bash', 'Java', 'FastAPI', 'Django', 'React'],
  },
]

export const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]
