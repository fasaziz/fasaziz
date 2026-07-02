import React from "react";

type Props = {};

function FederatedHermesExperienceCard({}: Props) {
  return (
    <article className="w-full flex flex-col sm:flex-row gap-6 sm:gap-8 items-start rounded-xl border border-ink-800 bg-ink-900/50 p-6 sm:p-8 text-left">
      <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl bg-ink-950 border border-accent-500/40 flex items-center justify-center p-2 mx-auto sm:mx-0 flex-shrink-0">
        <img
          src="../Federated_Hermes%20logo.png"
          alt="Federated Hermes"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div>
        <h4 className="text-xl sm:text-2xl font-light text-ink-200">
          DevOps Engineer
        </h4>
        <p className="font-bold text-lg mt-1 text-ink-200">
          Federated Hermes (Contract)
        </p>

        <p className="uppercase text-sm text-accent-400 tracking-wide py-3">
          May 2023 - August 2024
        </p>

        <p className="py-2 text-sm text-ink-400">
          Building a greenfield Azure estate in a Hub and Spoke topology
          implementing the CAF model with Windows based VMs and MSSQL
          backend VMs, using subscription segregation per environment to
          allow seamless migration from on-prem to Azure.
        </p>

        <p className="py-2 text-sm text-ink-400">
          Implemented and maintained Azure vWAN and Azure Firewalls, Azure
          IaaS including peerings and private endpoints, and Terraform IaC
          with bespoke modules. Migrated Azure DevOps Release Pipelines to
          YAML pipelines, and migrated IIS, SSIS and DACPAC Octopus Deploy
          pipelines to Azure DevOps YAML pipelines. Mentored infrastructure
          and network engineers on DevOps practices and IaC adoption.
        </p>
      </div>
    </article>
  );
}

export default FederatedHermesExperienceCard;
