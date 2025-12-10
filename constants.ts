import { ExperienceItem, LocalizedText, SkillCategory } from './types';

export const CONTENT: {
  hero: {
    title: LocalizedText;
    subtitle: LocalizedText;
    description: LocalizedText;
  };
  sections: {
    coreCompetencies: LocalizedText;
    professionalJourney: LocalizedText;
    certifications: LocalizedText;
    contact: LocalizedText;
    emailBtn: LocalizedText;
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  certifications: string[];
} = {
  hero: {
    title: {
      en: "Senior Systems Engineer.",
      cn: "资深系统工程师。"
    },
    subtitle: {
      en: "IBM Power Product Expert & Cloud Native Specialist",
      cn: "IBM Power 产品专家 & 云原生技术顾问"
    },
    description: {
      en: "Over 19 years of experience. Bridging the gap between Enterprise Hardware and Modern DevOps automation.",
      cn: "拥有19年一线经验。致力于连接企业级硬件架构与现代 DevOps 自动化运维。"
    }
  },
  sections: {
    coreCompetencies: { en: "Core Competencies", cn: "核心竞争力" },
    professionalJourney: { en: "Professional Journey", cn: "职业履历" },
    certifications: { en: "Certifications", cn: "专业认证" },
    contact: { en: "Let's Connect", cn: "联系我" },
    emailBtn: { en: "Email Me", cn: "发送邮件" }
  },
  skills: [
    {
      title: { en: "Enterprise Infrastructure", cn: "企业级基础架构" },
      description: {
        en: "Deep expertise in IBM Power Systems, AIX, and Linux. Specialized in complex troubleshooting, dump analysis, and root cause diagnosis.",
        cn: "精通 IBM Power 小型机全系架构及 AIX/Linux 操作系统。擅长复杂故障排查、Dump 文件分析及根因诊断。"
      },
      tags: ["AIX", "PowerVM", "RedHat Linux", "Hardware"]
    },
    {
      title: { en: "Cloud & Automation", cn: "云原生与自动化" },
      description: {
        en: "Transforming legacy operations with modern stacks. Skilled in containerization and automating workflows using Python and Ansible.",
        cn: "推动传统运维向 AI 自动化转型。熟练掌握 Docker/K8s 容器化技术及 Ansible/Python 自动化开发。"
      },
      tags: ["Docker", "Kubernetes", "Ansible", "Python", "Prometheus"]
    }
  ],
  experience: [
    {
      company: { en: "IBM China", cn: "IBM 中国" },
      role: { en: "Senior Product Engineer, leading global support & lab management.", cn: "Power 服务器产品工程师，主导全球技术支持与实验室管理。" },
      period: "2010 - Present"
    },
    {
      company: { en: "Blue Express", cn: "蓝色快车" },
      role: { en: "Customer Engineer, mission-critical on-site support.", cn: "客户工程师，负责关键业务系统的现场技术服务。" },
      period: "2008 - 2010"
    }
  ],
  certifications: ["PMP", "RHCE", "RHCSA", "IBM Certified Advanced Engineer"]
};

export const SYSTEM_INSTRUCTION = `
You are a helpful AI assistant representing Jin Chen on his portfolio website.
Here is Jin Chen's professional profile context:

Name: Jin Chen
Title: Senior Systems Engineer, IBM Power Product Expert & Cloud Native Specialist
Experience: Over 19 years.
Current Role: Senior Product Engineer at IBM China (2010-Present), leading global support & lab management.
Previous Role: Customer Engineer at Blue Express (2008-2010).
Key Skills:
- Enterprise Infrastructure: IBM Power Systems, AIX, PowerVM, RedHat Linux, Hardware troubleshooting, Dump analysis.
- Cloud & Automation: Docker, Kubernetes, Ansible, Python, Prometheus.
Certifications: PMP, RHCE, RHCSA, IBM Certified Advanced Engineer.
Contact: 25169364@qq.com

Your goal is to answer visitor questions about Jin's experience, skills, and background professionally and concisely.
If asked about topics unrelated to Jin's professional background, politely steer the conversation back to his skills or experience.
Keep answers relatively short (under 100 words) unless asked for details.
`;
