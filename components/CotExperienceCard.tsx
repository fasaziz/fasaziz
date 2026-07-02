import React from "react";

type Props = {};

function CotExperienceCard({}: Props) {
  return (
    <article className="w-full flex flex-col sm:flex-row gap-6 sm:gap-8 items-start rounded-xl border border-ink-800 bg-ink-900/50 p-6 sm:p-8 text-left">
      <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl bg-ink-950 border border-accent-500/40 flex items-center justify-center p-2 mx-auto sm:mx-0 flex-shrink-0">
        <img
          src="../cot.png"
          alt="Capital On Tap"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div>
        <h4 className="text-xl sm:text-2xl font-light text-ink-200">DevOps Engineer</h4>
        <p className="font-bold text-lg mt-1 text-ink-200">Capital On Tap</p>

        <p className="uppercase text-sm text-accent-400 tracking-wide py-3">Apr 2021 - May 2023</p>

        <p className="text-sm text-ink-400">
          Maintaining and deploying cloud services to Azure using CI/CD. Using
          Terraform as Infrastructure as code. Using technologies such as Azure
          DevOps, Team City and Octopus Deploy. Azure DevOps for repos, pull
          requests and YAML pipelines for deployments. Team City for creating
          artifacts and deploying these via Octopus for CD. Deploying to
          Development, Pre-live and finally Production/Production DR to UK/US/ES
        </p>

        {/* <ul className="text-sm text-left px-2 pt-1 list-disc">
          <li>Azure DevOps, TeamCity and Octopus Deploy</li>
          <li>Kubernetes</li>
          <li>YAML CI/CD templates</li>
          <li>Ansible Playbooks</li>
          <li>Terraform/Pulumi (IAC)</li>
          <li>DataDog</li>
        </ul> */}

        <p className="py-2 text-sm text-ink-400">
          Some Projects: Migrating from Azure Application Gateways to NGINX Plus
          instances: This involved creating Terraform Modules for NGINX VMs,
          bash scripts to bootstrap the VMs and to install relevant software
          such as NGINX, DataDog, ACME, configure default NGINX config. This
          also involved deploying new VNETS, peering, VPN connections etc.
          Migrating from SQL VM to SQL MI: This involved work around Kerberos
          Authentication to SQL MI (Large investigation work and
          troubleshooting). Creating Terraform modules which creates SQL MI and
          the relevant pre-requirements such as VNETS/Subnets, NGS&apos;s, UDR&apos;s etc.
        </p>
      </div>
    </article>
  );
}

export default CotExperienceCard;
