import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function CotExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 sm:w-[400px] lg:w-[600px] w-[500px] md:w-[600px] xl:w-[900px] snap-center px-5 sm:p-10">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3.5 }}
        viewport={{ once: true }}
        className="sm:h-20 sm:w-20 md:h-20 md:w-20 lg:h-[100px] lg:w-[100px] h-32 w-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center "
        src="../cot.png"
        alt=""
      />
      <div className="px-5 lg:px-10">
        <h4 className="text-2xl sm:text-4xl font-light">DevOps Engineer</h4>
        <p className="font-bold text-2xl mt-1 text-left">Capital On Tap</p>

        <p className="uppercase py-5 text-left">Apr 2021 - Present</p>

        <p className="text-sm text-left max-w-[320px] sm:max-w-full">
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

        <p className="py-2 text-sm text-left max-w-[320px] sm:max-w-full">
          Some Projects: Migrating from Azure Application Gateways to NGINX Plus
          instances: This involved creating Terraform Modules for NGINX VMs,
          bash scripts to bootstrap the VMs and to install relevant software
          such as NGINX, DataDog, ACME, configure default NGINX config. This
          also involved deploying new VNETS, peering, VPN connections etc.
          Migrating from SQL VM to SQL MI: This involved work around Kerberos
          Authentication to SQL MI (Large investigation work and
          troubleshooting). Creating Terraform modules which creates SQL MI and
          the relevant pre-requirements such as VNETS/Subnets, NGS’s, UDR’s etc.
        </p>
      </div>
    </article>
  );
}

export default CotExperienceCard;
