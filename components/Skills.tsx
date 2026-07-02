import React from "react";

type Props = {};

const skillCategories = [
  {
    title: "Cloud & Platform Architecture",
    items: ["Azure", "AWS", "Azure Landing Zones (CAF)", "Hub & Spoke Networking", "CATO SASE"],
  },
  {
    title: "AI Platform Engineering",
    items: ["Claude Enterprise", "MCP", "Azure API Management", "APIOps", "Azure DevTest Labs"],
  },
  {
    title: "Infrastructure as Code & CI/CD",
    items: ["Terraform", "Ansible", "GitHub Actions", "Azure DevOps", "Octopus Deploy", "TeamCity", "Kubernetes", "Docker", "Helm"],
  },
  {
    title: "Scripting & Systems Administration",
    items: ["PowerShell", "Bash", "Windows & Linux Administration", "Active Directory / Entra ID"],
  },
  {
    title: "Observability & Collaboration",
    items: ["Datadog", "Jira", "NGINX", "Azure DevOps", "Halo ITSM"],
  },
];

export default function Skills({}: Props) {
  return (
    <div className="flex relative flex-col mx-auto items-center px-6 sm:px-10 max-w-3xl py-20 sm:py-28">
      <h3 className="uppercase tracking-[20px] text-accent-400 text-2xl mb-10 text-center">
        Skills
      </h3>
      <div className="w-full space-y-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="text-left">
            <h4 className="text-sm uppercase tracking-widest text-ink-400 mb-3">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-ink-800 bg-ink-900 text-sm text-ink-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
