export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export const portfolioData = {
  name: "Naufal Yusuf Dinda Fahreza Harahap",
  title: "IT Support & Software Engineer",
  location: "Pup Sektor V Blok H2, Bekasi Utara",
  phone: "+62 858-2027-8129",
  email: "harahapnaufal5@gmail.com",
  summary:
    "Lulusan S1 Ilmu Komputer Universitas Bhayangkara Jakarta Raya dengan pengalaman di bidang IT Support Infrastructure dan pengembangan aplikasi web. Memiliki pengalaman dalam troubleshooting perangkat keras dan jaringan, serta pengembangan website menggunakan PHP, Laravel, dan Filament. Memahami dasar pengelolaan basis data SQL/MySQL, pengujian aplikasi, dan pemecahan masalah teknis.",
  experiences: [
    {
      role: "IT Support Infrastructure",
      company: "PTI (Pusat Teknologi Informasi) – Bekasi",
      period: "Jun 2025 – Sekarang",
      description: [
        "Menangani troubleshooting hardware, software dan perangkat jaringan untuk mendukung operasional infrastruktur TI.",
        "Membantu menangani permasalahan konektivitas jaringan dan kendala teknis perangkat.",
        "Memastikan kelancaran perangkat, sistem dan konektivitas jaringan di lingkungan kerja."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "PT. Mahakam Beta Farma – Bekasi",
      period: "Jan 2025 – Apr 2025",
      description: [
        "Membantu pengembangan website internal perusahaan menggunakan Laravel dan Filament.",
        "Mendukung pengembangan dan pengelolaan antarmuka sistem sesuai kebutuhan internal perusahaan.",
        "Melakukan pengujian aplikasi dan membantu perbaikan bug selama proses pengembangan."
      ]
    },
    {
      role: "Daily Worker – Warehouse Staff",
      company: "Shopee LOGOS (Logistik Indonesia) – Bekasi",
      period: "Sep 2023 – Mar 2024",
      description: [
        "Mendukung kegiatan operasional gudang sesuai prosedur kerja yang berlaku.",
        "Menjaga ketelitian dalam pelaksanaan tugas operasional dan penanganan barang.",
        "Bekerja dalam tim untuk memastikan proses logistik berjalan efisien."
      ]
    }
  ] as ExperienceItem[],
  education: [
    {
      degree: "S1 Ilmu Komputer",
      institution: "Universitas Bhayangkara Jakarta Raya",
      period: "2022 – 2026"
    },
    {
      degree: "SMA",
      institution: "SMA Negeri 3 Babelan, Kabupaten Bekasi",
      period: "2019 – 2022"
    }
  ] as EducationItem[],
  skills: {
    programming: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Laravel", "Filament"],
    itSupport: ["Troubleshooting perangkat keras dan jaringan", "Dukungan teknis perangkat TI"],
    tools: ["Visual Studio Code", "Git & GitHub", "Laragon", "Figma"],
    office: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Canva"],
    softSkills: [
      "Problem Solving",
      "Analytical Thinking",
      "Logical & Critical Thinking",
      "Adaptability",
      "Teamwork",
      "Strong Work Ethic",
      "Attention to Detail"
    ]
  },
  certifications: [
    {
      title: "Digital Talent Scholarship - Cloud Computing",
      issuer: "Kominfo Digitalent (Alibaba Cloud Program)"
    },
    {
      title: "Cloud Computing (MySQL Database Concepts and Operations)",
      issuer: "Alibaba Cloud Academy"
    },
    {
      title: "Operate and Manage a Relational Database on the Cloud",
      issuer: "Alibaba Cloud Academy"
    },
    {
      title: "Apsara Clouder - General Skill (Network Series Courses)",
      issuer: "Alibaba Cloud Academy"
    },
    {
      title: "Apsara Clouder - Cloud Computing (Alibaba Cloud Network Solution)",
      issuer: "Alibaba Cloud Academy"
    },
    {
      title: "WEB PRATAMA",
      issuer: "Bimtek LSP Ubhara jaya P1"
    }
  ] as CertificationItem[]
};