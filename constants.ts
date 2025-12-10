import { ResumeData } from './types';

export const RESUME_CONTENT: ResumeData = {
  header: {
    name: { cn: "陈进", en: "Jin Chen" },
    title: { 
      cn: "IT技术支持 | 资深系统工程师 | 售后技术专家", 
      en: "IT Technical Support | Senior Systems Engineer | Post-sales Expert" 
    },
    experience: { cn: "17.5年", en: "17.5 Years" },
    location: { cn: "上海", en: "Shanghai" },
    status: { 
      cn: "在职，可一个月内到岗 | 17.5年经验", 
      en: "Employed, available in 1 month | 17.5 Years Exp." 
    }
  },
  summary: {
    title: { cn: "个人总结", en: "Professional Summary" },
    text: {
      cn: "拥有17.5年以上世界500强（IBM）技术支持经验的资深系统工程师。精通 IBM Power 小型机全系架构及 AIX/Linux 操作系统，具备极强的故障排查与根因分析能力。持有 PMP、RHCE、RHCSA 及 IBM 高级工程师认证。近年来成功转型，熟练掌握容器化（Docker/K8S）、自动化运维（Ansible/Python/Shell）及主流开源中间件技术。具备卓越的跨国团队协作能力，曾主导全球团队的 AI 自动化运维转型项目。",
      en: "Senior Systems Engineer with over 17.5 years of technical support experience at a Fortune 500 company (IBM). Deep expertise in IBM Power Systems architecture and AIX/Linux operating systems, with exceptional troubleshooting and root cause analysis skills. Certified PMP, RHCE, RHCSA, and IBM Certified Advanced Engineer. Successfully transformed skills in recent years to master containerization (Docker/K8S), automation (Ansible/Python/Shell), and mainstream open-source middleware. Possesses outstanding cross-cultural collaboration abilities, having led AI automation transformation projects for global support teams."
    }
  },
  education: {
    title: { cn: "教育背景", en: "Education" },
    items: [
      {
        school: { cn: "淮海工学院", en: "Huaihai Institute of Technology" },
        major: { cn: "计算机科学与技术", en: "Computer Science & Technology" },
        degree: { cn: "🎓 本科", en: "🎓 Bachelor" },
        date: { cn: "📅 2002.09 - 2006.07", en: "📅 2002.09 - 2006.07" }
      }
    ]
  },
  skills: {
    title: { cn: "核心技能", en: "Core Skills" },
    groups: [
      {
        category: { cn: "IBM 专家级技能", en: "IBM Expert Skills" },
        tags: [
          { cn: "IBM Power Servers (P Series)", en: "IBM Power Servers (P Series)" },
          { cn: "AIX", en: "AIX" },
          { cn: "PowerVM", en: "PowerVM" },
          { cn: "HMC", en: "HMC" },
          { cn: "硬件故障诊断与修复", en: "Hardware Troubleshooting" }
        ]
      },
      {
        category: { cn: "Linux & 云原生", en: "Linux & Cloud Native" },
        tags: [
          { cn: "RedHat/CentOS", en: "RedHat/CentOS" },
          { cn: "Docker", en: "Docker" },
          { cn: "Kubernetes (K8S)", en: "Kubernetes (K8S)" },
          { cn: "BMC/IPMI", en: "BMC/IPMI" }
        ]
      },
      {
        category: { cn: "中间件 & 数据库", en: "Middleware & Database" },
        tags: [
          { cn: "Nginx", en: "Nginx" },
          { cn: "Tomcat", en: "Tomcat" },
          { cn: "MySQL", en: "MySQL" },
          { cn: "Redis", en: "Redis" }
        ]
      },
      {
        category: { cn: "自动化 & 监控", en: "Automation & Monitoring" },
        tags: [
          { cn: "Shell Scripting", en: "Shell Scripting" },
          { cn: "Python", en: "Python" },
          { cn: "Ansible", en: "Ansible" },
          { cn: "Zabbix", en: "Zabbix" },
          { cn: "Prometheus", en: "Prometheus" }
        ]
      },
      {
        category: { cn: "通用技能", en: "General Skills" },
        tags: [
            { cn: "PMP 项目管理", en: "PMP" }, 
            { cn: "根因分析", en: "Root Cause Analysis" }, 
            { cn: "跨部门沟通", en: "Cross-functional Communication" }, 
            { cn: "英语流利", en: "Fluent English" }
        ]
      }
    ]
  },
  certifications: {
    title: { cn: "资格证书", en: "Certifications" },
    list: [
        { cn: "PMP (项目管理专业人士资格认证)", en: "PMP (Project Management Professional)" },
        { cn: "RHCE (红帽认证工程师)", en: "RHCE (Red Hat Certified Engineer)" },
        { cn: "RHCSA (红帽认证系统管理员)", en: "RHCSA (Red Hat Certified System Administrator)" },
        { cn: "IBM Certified Advanced Engineer (IBM 认证高级工程师)", en: "IBM Certified Advanced Engineer" },
        { cn: "CET-4 (大学英语四级)", en: "CET-4 (College English Test Band 4)" }
    ]
  },
  experience: {
    title: { cn: "工作经历", en: "Work Experience" },
    jobs: [
      {
        title: { cn: "IBM Power 服务器产品工程师", en: "IBM Power Systems Product Engineer" },
        company: { cn: "IBM (国际商业机器中国有限公司)", en: "IBM China" },
        location: { cn: "上海", en: "Shanghai" },
        date: { cn: "2010.05 - 至今", en: "2010.05 - Present" },
        bullets: [
          {
            title: { cn: "核心技术支持：", en: "Core Technical Support:" },
            content: { 
                cn: "作为二线专家，为 IBM Power 服务器提供全生命周期的技术支持，包括系统配置、故障排查、转储文件(Dump)分析及日志解读，解决其它层级无法处理的复杂疑难问题。",
                en: "As an L2 Expert, provided full lifecycle support for IBM Power servers, including configuration, troubleshooting, dump analysis, and log interpretation to resolve complex issues."
            }
          },
          {
            title: { cn: "缺陷管理与修复：", en: "Defect Management & Fixes:" },
            content: {
                cn: "识别产品潜在的代码缺陷，与全球开发实验室（Labs）及 SME 团队联动，提供补丁(Program Fixes)及纠正性服务，显著降低了客户系统的宕机风险。",
                en: "Identified potential code defects, collaborated with global labs and SMEs to provide program fixes and corrective services, significantly reducing system downtime risks."
            }
          },
          {
            title: { cn: "自动化运维转型：", en: "Automation Transformation:" },
            content: {
                cn: "参与并主导全球支持团队向 AI 自动化转型，开发并部署了故障自动报修与通知系统，大幅缩短了响应时间（MTTR）。",
                en: "Participated in leading the global support team's transition to AI automation; developed and deployed automated fault reporting systems, drastically reducing MTTR."
            }
          },
          {
            title: { cn: "新品发布支持：", en: "New Product Launch Support:" },
            content: {
                cn: "在 IBM Power 新机型发布（GA）前，与全球专家团队在实验室进行环境测试与失效分析（Failure Analysis Test），确保产品上市后的稳定性。",
                en: "Conducted environment testing and Failure Analysis Tests with global experts in labs prior to new Power server GA, ensuring post-launch product stability."
            }
          },
          {
            title: { cn: "团队管理与赋能：", en: "Team Management & Enablement:" },
            content: {
                cn: "担任部门导师，负责新员工入职培训及一线工程师的技术提升（Hands-on Training）；负责管理实验室机房及服务器集群的日常维护与资产管理。",
                en: "Served as a department mentor for new hire training and L1 engineer upskilling; managed daily maintenance and asset management of laboratory server clusters."
            }
          },
          {
            title: { cn: "应急响应：", en: "Emergency Response:" },
            content: {
                cn: "支持 24x7 全球轮班机制，在紧急情况下提供高压环境下的即时技术决策。",
                en: "Supported 24x7 global rotation, providing immediate technical decision-making in high-pressure emergency situations."
            }
          }
        ]
      },
      {
        title: { cn: "客户工程师", en: "Customer Engineer" },
        company: { cn: "蓝色快车 (Blue Express)", en: "Blue Express" },
        location: { cn: "上海", en: "Shanghai" },
        date: { cn: "2008.05 - 2010.05", en: "2008.05 - 2010.05" },
        bullets: [
          {
            title: { cn: "现场技术服务：", en: "On-site Technical Service:" },
            content: {
                cn: "负责上海地区关键客户的 IBM 全线产品（服务器、存储、磁带库、SAN 网络）的安装、维护与巡检，确保客户核心业务系统的高可用性。",
                en: "Responsible for installation, maintenance, and inspection of full-line IBM products (Servers, Storage, Tape Libraries, SAN) for critical clients in Shanghai."
            }
          },
          {
            title: { cn: "客户关系管理：", en: "Customer Relationship Management:" },
            content: {
                cn: "通过高质量的现场服务提升客户满意度，有效协助销售团队挖掘潜在需求，推动了多项增值服务合同的签约与落地。",
                en: "Enhanced customer satisfaction through high-quality on-site service, assisting sales teams in identifying potential needs and driving value-added service contracts."
            }
          },
          {
            title: { cn: "增值服务支持：", en: "Value-added Service Support:" },
            content: {
                cn: "协同 IBM 内部销售与技术团队，挖掘客户潜在需求，推动多项增值服务合作落地。",
                en: "Collaborated with IBM internal sales and technical teams to identify customer needs and implement value-added service cooperation."
            }
          }
        ]
      }
    ]
  }
};

export const SYSTEM_INSTRUCTION = `You are a helpful and professional AI assistant for Jin Chen's portfolio website. 
Your goal is to answer visitor's questions about Jin Chen's background, skills, and experience based on the resume data provided below.

Key Guidelines:
1. Be polite, concise, and professional.
2. Only answer based on the provided information. If you don't know the answer, politely say so.
3. If asked about contact info, provide: 13918249627 or 13918249627@139.com.
4. Answer in the same language as the user's question (English or Chinese).

Resume Data:
${JSON.stringify(RESUME_CONTENT)}
`;
