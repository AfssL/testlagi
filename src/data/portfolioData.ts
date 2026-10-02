/**
 * ==============================================================================
 * 🏁 DATA PORTOFOLIO & PERSONAL BRANDING AFSAL MURTAZA (AM // 24)
 * ==============================================================================
 * Menggabungkan:
 * 1. Kelengkapan Kategori Data Pribadi ala najibbahrudin.com:
 *    - Biodata & Profil
 *    - Spesialisasi (Data Analysis, AI, UI/UX, Enterprise Systems)
 *    - Pendidikan (S1 Teknik Informatika FTEIC ITS)
 *    - Sertifikasi & Prestasi
 *    - Pengalaman Asistensi Lab & Organisasi Kampus
 *    - Studi Kasus Proyek Rinci
 * 2. Estetika Border Information & Driver Specs ala Lando Norris (landonorris.com)
 *    dan Charles Leclerc (charlesleclerc.com)
 * ==============================================================================
 */

import {
  PersonalProfile,
  ProjectItem,
  SkillCategory,
  SocialLink,
  MomentItem,
  JourneyItem,
  TestimonialItem,
  BucketItem,
  AchievementItem,
  ExperienceItem,
} from '../types';

export const personalProfile: PersonalProfile = {
  name: "Afsal Murtaza",
  firstName: "Afsal",
  lastName: "Murtaza",
  driverNumber: "24", // Angkatan 2024
  
  roleTitle: "Data Analyst · AI Practitioner · UI/UX Designer",
  tagline: "Exploring data patterns, building practical AI models, and designing intuitive human-centered digital experiences.",
  
  batch: "Angkatan 2024",
  semester: "Semester 5 (Active)",
  university: "Institut Teknologi Sepuluh Nopember (ITS)",
  faculty: "Fakultas Teknologi Elektro dan Informatika Cerdas (FTEIC)",
  department: "Departemen Teknik Informatika",
  location: "Surabaya, Jawa Timur, Indonesia",
  nationality: "Indonesian",
  bornYear: "2005",
  
  availability: "Open for Data Analyst, AI Research & UI/UX Design Roles",
  
  email: "afsal.murtaza@student.its.ac.id",
  whatsapp: "+6281234567890",
  github: "https://github.com/AfssL",
  linkedin: "https://linkedin.com/in/afsalmurtaza",
  instagram: "https://instagram.com/afsalmurtaza",
  
  statement: "Saya mengungkap wawasan dari data mentah, mengeksplorasi kecerdasan buatan, dan merancang antarmuka yang ramah pengguna. Dari kampus ITS hingga industri, saya ingin menciptakan dampak yang terukur.",
  accentWords: ["wawasan", "data", "kecerdasan", "antarmuka", "dampak"],
  
  bioP1: "Halo! Aku Afsal Murtaza, mahasiswa S1 Teknik Informatika di Institut Teknologi Sepuluh Nopember (ITS) Surabaya angkatan 2024 yang saat ini berada di semester 5. Aku memiliki ketertarikan kuat dalam bidang analisis data, data mining, kecerdasan buatan, serta perancangan antarmuka pengguna (UI/UX design).",
  bioP2: "Fokus utamaku adalah menggali pola dari data bisnis, merancang alur sistem enterprise yang efisien, dan memvisualisasikan data ke dalam antarmuka yang elegan dan mudah dipahami oleh pengambil keputusan.",
  
  // BIODATA DRIVER SPECS (Lando Norris Style Information Borders)
  specs: [
    { code: "SPEC // 01", label: "IDENTITY", value: "Afsal Murtaza", detail: "Informatics Student" },
    { code: "SPEC // 02", label: "NUMBER / BATCH", value: "#24 · Class of 2024", detail: "FTEIC ITS Surabaya" },
    { code: "SPEC // 03", label: "CURRENT STAGE", value: "Semester 5 (Active)", detail: "Undergraduate Program" },
    { code: "SPEC // 04", label: "BASE LOCATION", value: "Surabaya, Indonesia", detail: "Timezone: UTC+7 (WIB)" },
    { code: "SPEC // 05", label: "CORE DISCIPLINE", value: "Data Mining & AI", detail: "Python, SQL, Machine Learning" },
    { code: "SPEC // 06", label: "PRODUCT DISCIPLINE", value: "UI/UX & Systems", detail: "Figma, BPMN, Enterprise Flow" },
  ],
  
  stats: [
    { label: "Semester", value: "5th", description: "Teknik Informatika ITS" },
    { label: "Data & AI Studies", value: "10+", description: "Datasets & ML Experiments" },
    { label: "Academic GPA", value: "3.84", description: "FTEIC ITS Surabaya" },
    { label: "Design Accuracy", value: "99.99%", description: "User-Centered Precision" },
  ],
  
  profileImage: "",
};

export const experiencesData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Asisten Praktikum (Lab Assistant)",
    organization: "Laboratorium Komputasi Cerdas & Rekayasa Sistem ITS",
    period: "2024 - Sekarang",
    type: "Laboratorium",
    description: "Membimbing mahasiswa dalam praktikum struktur data, basis data relasional enterprise, dan analisis logika algoritma.",
    contributions: [
      "Menyusun modul praktikum analisis query SQL dan pemodelan relasional",
      "Membantu mahasiswa memahami debugging dan optimasi komputasi",
      "Menilai tugas praktikum secara objektif dan berkala"
    ]
  },
  {
    id: "exp-2",
    role: "Staff Departemen Riset & Teknologi (R&D)",
    organization: "Himpunan Mahasiswa Teknik Informatika (HMTI) ITS",
    period: "2024 - Sekarang",
    type: "Organisasi",
    description: "Terlibat dalam pengembangan portal informasi kegiatan himpunan, riset kebutuhan teknologi mahasiswa, dan workshop internal.",
    contributions: [
      "Mengelola pengolahan data kuesioner evaluasi kegiatan mahasiswa",
      "Menjadi fasilitator dalam pengenalan dasar Python dan Git untuk mahasiswa baru",
      "Merancang alur wireframe UI untuk sistem informasi kepanitiaan"
    ]
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    year: "2025",
    category: "Sertifikasi",
    description: "Sertifikasi kompetensi analisis data menyeluruh: data cleaning, spreadsheet modeling, SQL data aggregation, Tableau, dan pemrograman R/Python.",
  },
  {
    id: "ach-2",
    title: "Juara 1 - National Data Hackathon & Innovation",
    issuer: "Tech Innovation Indonesia",
    year: "2025",
    category: "Kompetisi",
    description: "Membangun model prediksi konsumsi energi cerdas berbasis Random Forest dengan visualisasi dashboard analitik dalam waktu 36 jam.",
  },
  {
    id: "ach-3",
    title: "Dean's List / Mahasiswa Berprestasi FTEIC ITS",
    issuer: "Fakultas Teknologi Elektro & Informatika Cerdas ITS",
    year: "2024",
    category: "Penghargaan",
    description: "Penghargaan atas capaian akademik IPK 3.84 dan keaktifan berkontribusi pada kegiatan akademik departemen.",
  },
  {
    id: "ach-4",
    title: "Enterprise Architecture & BPMN Modeling Fundamentals",
    issuer: "Enterprise Systems Institute",
    year: "2024",
    category: "Sertifikasi",
    description: "Kompetensi perancangan proses bisnis enterprise, swimlane diagramming, dan analisis kebutuhan sistem terintegrasi.",
  }
];

export const momentsData: MomentItem[] = [
  { id: "m-1", place: "Kampus ITS, Surabaya", year: "2024", caption: "Awal perjalanan di Departemen Teknik Informatika" },
  { id: "m-2", place: "Data & AI Hackathon", year: "2025", caption: "Eksplorasi dataset besar & visualisasi prediktif" },
  { id: "m-3", place: "Laboratorium Komputasi Cerdas", year: "2025", caption: "Praktikum machine learning & analisis statistika" },
  { id: "m-4", place: "UI/UX Design Sprint", year: "2025", caption: "Riset pengguna, wireframing & prototyping Figma" },
  { id: "m-5", place: "Semester 5 Sekarang", year: "2026", caption: "Fokus riset data mining & portofolio analitik" },
];

export const journeyData: JourneyItem[] = [
  {
    year: "2024",
    title: "Masuk Teknik Informatika ITS Surabaya",
    desc: "Mempelajari dasar ilmu komputer, kalkulus informatika, statistika dasar, dan algoritma pemrograman.",
    tag: "Fondasi Akademik",
  },
  {
    year: "2025",
    title: "Fokus Analisis Data, Data Mining & UI/UX Design",
    desc: "Mendalami manipulasi data dengan Pandas & NumPy, query SQL multi-tabel, serta metode riset pengguna di Figma.",
    tag: "Eksplorasi Minat",
  },
  {
    year: "2026",
    title: "Semester 5 Sekarang: AI & Sistem Enterprise",
    desc: "Mengeksplorasi model machine learning prediktif, pemodelan sistem enterprise, dan bersiap untuk magang industri.",
    tag: "Semester 5 (Sekarang)",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    quote: "Afsal sangat cermat dalam membedah data dan mampu menerjemahkan analisis rumit menjadi visualisasi UI yang mudah dimengerti tim.",
    name: "Rekan Tim Proyek",
    role: "Mahasiswa Informatika ITS",
  },
  {
    quote: "Kemampuan analisis logika dan pemahamannya terhadap alur proses bisnis enterprise sangat baik dan terstruktur.",
    name: "Asisten Lab Senior",
    role: "Lab Basis Data & Sistem Enterprise",
  },
  {
    quote: "Desain wireframe dan prototipe yang dibuat Afsal selalu memperhatikan kenyamanan user dan konsistensi komponen.",
    name: "Mentor UI/UX",
    role: "Product Designer",
  },
];

export const bucketListData: BucketItem[] = [
  { id: "b-1", title: "Menyelesaikan riset skripsi di bidang Data Mining / AI dengan predikat Cum Laude", category: "Akademik", completed: false },
  { id: "b-2", title: "Meraih posisi Data Analyst / UI/UX Intern di perusahaan teknologi terkemuka", category: "Karir", completed: false },
  { id: "b-3", title: "Merancang design system lengkap untuk platform enterprise kampus di Figma", category: "Design", completed: true },
  { id: "b-4", title: "Membangun dashboard analitik interaktif berbasis Python / Streamlit dengan 1k+ visits", category: "Proyek", completed: false },
  { id: "b-5", title: "Meraih sertifikasi profesional Google Data Analytics / IBM Data Science", category: "Sertifikasi", completed: true },
  { id: "b-6", title: "Menjadi mentor praktikum atau pembicara workshop data untuk mahasiswa baru", category: "Komunitas", completed: false },
];

export const projectsData: ProjectItem[] = [
  {
    id: "project-1",
    title: "RetailInsight: Predictive Customer Churn & Sales Data Mining",
    category: "data",
    categoryLabel: "Data Analysis & Mining",
    shortDescription: "Analisis eksploratif dan model prediksi churn pelanggan e-commerce menggunakan Random Forest dan algoritma clustering RFM.",
    fullDescription: "Proyek data mining pada dataset transaksi retail 250,000 baris. Mengidentifikasi segmentasi pelanggan berisiko churn tinggi, faktor pemicu pembelian berulang, dan memvisualisasikan temuan dalam dashboard metrik bisnis interaktif.",
    tools: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "SQL"],
    role: "Lead Data Analyst",
    year: "2026",
    githubUrl: "https://github.com/afsalmurtaza",
    liveUrl: "https://github.com/afsalmurtaza",
    metrics: "89.4% ROC-AUC Churn Score",
    highlights: [
      "Segmentasi 5 kelompok persona pelanggan menggunakan algoritma K-Means",
      "Pembersihan outlier dan penanganan class imbalance dengan SMOTE",
      "Rekomendasi strategi retensi pelanggan berdasarkan data kuantitatif"
    ],
    badge: "Featured Analytics",
  },
  {
    id: "project-2",
    title: "NeuroVision: Real-Time Traffic & Vehicle Detection System",
    category: "ai",
    categoryLabel: "Artificial Intelligence & Vision",
    shortDescription: "Model computer vision berbasis YOLOv8 untuk estimasi kepadatan volume kendaraan dan klasifikasi moda transportasi.",
    fullDescription: "Implementasi model AI terapan yang mendeteksi kendaraan, motor, dan bus dari feed video jalan raya Surabaya secara real-time, mengukur kecepatan relatif dan memetakan pola jam sibuk secara otomatis.",
    tools: ["Python", "PyTorch", "YOLOv8", "OpenCV", "FastAPI"],
    role: "AI & ML Researcher",
    year: "2025",
    githubUrl: "https://github.com/afsalmurtaza",
    liveUrl: "https://github.com/afsalmurtaza",
    metrics: "93.8% mAP Detection Accuracy",
    highlights: [
      "Pipeline inferensi efisien dengan latency rendah di atas 35 FPS",
      "Ekstraksi data timestamp dan heatmap kepadatan simpang jalan",
      "API backend ringan untuk konsumsi data dashboard pengelola"
    ],
    badge: "Computer Vision",
  },
  {
    id: "project-3",
    title: "CampusFlow: Academic & Enterprise ERP System Design",
    category: "enterprise",
    categoryLabel: "Enterprise Systems Architecture",
    shortDescription: "Perancangan arsitektur proses bisnis dan sistem ERP peminjaman aset laboratorium komputasi di FTEIC ITS.",
    fullDescription: "Studi kasus rekayasa sistem enterprise untuk mengintegrasikan alur perizinan komputasi GPU, approval dosen berjenjang, dan pencatatan audit log terpadu. Dilengkapi diagram BPMN 2.0 dan Entity Relationship Diagram (ERD) normalisasi 3NF.",
    tools: ["BPMN 2.0", "PostgreSQL", "ERD Modeling", "System Analysis", "Figma"],
    role: "Systems Analyst & Enterprise Modeler",
    year: "2025",
    githubUrl: "https://github.com/afsalmurtaza",
    liveUrl: "https://github.com/afsalmurtaza",
    metrics: "Optimized 6 Core Business Workflows",
    highlights: [
      "Mengurangi bottleneck persetujuan administratif antar departemen",
      "Desain skema basis data relasional ternormalisasi untuk efisiensi query",
      "Dokumentasi spesifikasi kebutuhan software (SRS) berstandar industri"
    ],
    badge: "Enterprise Systems",
  },
  {
    id: "project-4",
    title: "ApexPulse: Analytics Dashboard & Telemetry UI/UX Redesign",
    category: "uiux",
    categoryLabel: "UI / UX Design & Prototyping",
    shortDescription: "Desain sistem antarmuka dashboard analitik balap Formula 1 bergaya dark modern dengan kepatuhan WCAG 2.1 AA.",
    fullDescription: "Riset antarmuka pengguna untuk memvisualisasikan data telemetri berkecepatan tinggi tanpa membuat pengguna kewalahan (cognitive overload). Mengembangkan design system komprehensif, typography scale, kartu KPI, dan micro-interactions di Figma.",
    tools: ["Figma", "Design Systems", "Prototyping", "User Testing", "Wireframing"],
    role: "UI/UX Product Designer",
    year: "2024",
    githubUrl: "https://github.com/afsalmurtaza",
    liveUrl: "https://github.com/afsalmurtaza",
    metrics: "95% Usability Testing Score",
    highlights: [
      "Menciptakan library 40+ reusable design tokens & auto-layout components",
      "Riset usability testing dengan 12 pengguna untuk efisiensi navigasi",
      "Penerapan kontras tinggi dan hierarki tipografi elegan"
    ],
    badge: "UI/UX Case Study",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Analysis & Mining",
    skills: [
      { name: "Python (Pandas, NumPy)", level: "Advanced", description: "Data cleaning, preprocessing, manipulasi tabular" },
      { name: "SQL (PostgreSQL & MySQL)", level: "Advanced", description: "Complex joins, window functions, query optimization" },
      { name: "Exploratory Data Analysis (EDA)", level: "Advanced", description: "Pemeriksaan hipotesis, korelasi, visualisasi pola" },
      { name: "Tableau & Power BI", level: "Proficient", description: "Interactive executive dashboards & business KPI reports" },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Scikit-Learn & Classical ML", level: "Proficient", description: "Regression, Random Forest, K-Means, XGBoost" },
      { name: "Computer Vision & OpenCV", level: "Proficient", description: "Object detection, YOLOv8, image transformations" },
      { name: "PyTorch Basics", level: "Intermediate", description: "Neural networks, tensor operations, model fine-tuning" },
      { name: "Model Evaluation", level: "Advanced", description: "Confusion matrix, ROC-AUC, cross-validation metrics" },
    ],
  },
  {
    title: "UI / UX & Product Design",
    skills: [
      { name: "Figma & FigJam", level: "Advanced", description: "High-fidelity UI, component variants, auto-layout" },
      { name: "Wireframing & Prototyping", level: "Advanced", description: "Interactive user flows, micro-interactions, click-dummies" },
      { name: "User Research & Usability Testing", level: "Proficient", description: "User interviews, persona creation, heuristic evaluation" },
      { name: "Design Systems & Tokens", level: "Proficient", description: "Consistent typography, spacing, WCAG color contrast" },
    ],
  },
  {
    title: "Enterprise Systems & Analytics",
    skills: [
      { name: "Business Process Modeling (BPMN)", level: "Advanced", description: "Alur kerja sistem, swimlane diagrams, use-case modeling" },
      { name: "Database Schema & ERD Architecture", level: "Advanced", description: "Normalisasi 3NF, data integrity, relational constraints" },
      { name: "Systems Requirement Analysis", level: "Proficient", description: "Functional & non-functional requirements, user stories" },
      { name: "Agile & Product Thinking", level: "Proficient", description: "Scrum, problem-framing, iterative delivery" },
    ],
  },
];

export const techStackData = [
  { name: "Python", slug: "python" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MySQL", slug: "mysql" },
  { name: "Pandas", slug: "pandas" },
  { name: "PyTorch", slug: "pytorch" },
  { name: "Jupyter", slug: "jupyter" },
  { name: "Figma", slug: "figma" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Docker", slug: "docker" },
  { name: "Git", slug: "git" },
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
];

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/afsalmurtaza", handle: "linkedin.com/in/afsalmurtaza" },
  { platform: "GitHub", url: "https://github.com/afsalmurtaza", handle: "github.com/afsalmurtaza" },
  { platform: "Instagram", url: "https://instagram.com/afsalmurtaza", handle: "@afsalmurtaza" },
  { platform: "Email", url: "mailto:afsal.murtaza@student.its.ac.id", handle: "afsal.murtaza@student.its.ac.id" },
];

export const mercedesPetronasTheme = {
  petronasTeal: "#00d2be",
  petronasTealDark: "#00a19b",
  mercedesSilver: "#c8ccce",
  pureWhite: "#ffffff",
  carbonBlack: "#000000",
  carbonSurface: "#101112",
  carbonCard: "#16181a",
  carbonBorder: "#26292b",
};
