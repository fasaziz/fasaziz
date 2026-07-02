import React from "react";

type Props = {};

function CollerCapitalExperienceCard({}: Props) {
  return (
    <article className="w-full flex flex-col sm:flex-row gap-6 sm:gap-8 items-start rounded-xl border border-ink-800 bg-ink-900/50 p-6 sm:p-8 text-left">
      <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl bg-ink-950 border border-accent-500/40 flex items-center justify-center p-2 mx-auto sm:mx-0 flex-shrink-0">
        <img
          src="../Coller_Capital_logo.png"
          alt="Coller Capital"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div>
        <h4 className="text-xl sm:text-2xl font-light text-ink-200">
          Senior Platform Engineer
        </h4>
        <p className="font-bold text-lg mt-1 text-ink-200">Coller Capital</p>

        <p className="uppercase text-sm text-accent-400 tracking-wide py-3">
          August 2024 - Present
        </p>

        <p className="py-2 text-sm text-ink-400">
          Architected and established an enterprise AI platform on Azure to
          enable secure, governed adoption of generative AI across Coller
          Capital, designing a centralised API and MCP platform using Azure
          API Management so internal systems, data sources and services can
          be securely exposed as reusable AI tools for Claude Enterprise.
        </p>

        <p className="py-2 text-sm text-ink-400">
          Defined platform standards for AI application delivery,
          authentication, APIOps and self service onboarding. Designed and
          implemented an isolated AI sandbox platform using Azure DevTest
          Labs for rapid provisioning of ephemeral, pre-configured Windows 11
          development environments, fully automated and secured through
          controlled network isolation. Led the migration of Azure DevOps
          repositories and pipelines to GitHub Actions, designing reusable
          CI/CD workflow templates for .NET, containerised applications and
          Terraform projects, and implementing enterprise guardrails across
          GitHub EMU. Architected a Hub and Spoke network topology
          integrated with CATO SASE, and automated Azure Landing Zone and
          Azure Policy deployments using Terraform aligned with Azure CAF
          best practices.
        </p>
      </div>
    </article>
  );
}

export default CollerCapitalExperienceCard;
