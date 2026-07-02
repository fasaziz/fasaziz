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
          Maintaining and deploying cloud services to Azure using CI/CD, with
          Terraform as Infrastructure as Code.
        </p>

        <p className="py-2 text-sm text-ink-400">
          Used Azure DevOps, Team City and Octopus Deploy for repos, pull
          requests, artifact creation and deployment, deploying to
          Development, Pre-live and finally Production/Production DR across
          UK/US/ES.
        </p>

        <p className="py-2 text-sm text-ink-400">
          Migrated from Azure Application Gateways to NGINX Plus, including
          Terraform modules and bash scripts to bootstrap NGINX, DataDog and
          ACME.
        </p>

        <p className="py-2 text-sm text-ink-400">
          Migrated a SQL VM to SQL MI, working through Kerberos
          authentication and the supporting networking prerequisites such
          as VNETs/Subnets, NGS&apos;s and UDR&apos;s.
        </p>
      </div>
    </article>
  );
}

export default CotExperienceCard;
