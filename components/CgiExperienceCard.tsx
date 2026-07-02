import React from "react";

type Props = {};

function CgiExperienceCard({}: Props) {
  return (
    <article className="w-full flex flex-col sm:flex-row gap-6 sm:gap-8 items-start rounded-xl border border-ink-800 bg-ink-900/50 p-6 sm:p-8 text-left">
      <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl bg-ink-950 border border-accent-500/40 flex items-center justify-center p-2 mx-auto sm:mx-0 flex-shrink-0">
        <img
          src="../CGI.png"
          alt="CGI"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div>
        <h4 className="text-xl sm:text-2xl font-light text-ink-200">
          Infrastructure Engineer
        </h4>
        <p className="font-bold text-lg mt-1 text-ink-200">CGI (Defence Project)</p>

        <p className="uppercase text-sm text-accent-400 tracking-wide py-3">November 2019 - Apr 2021</p>

        <p className="py-2 text-sm text-ink-400">
          Working on DMICP (Defence Medical Information Capability Programme).
          Managing and sustaining the infrastructure where the MOD (Ministry of
          Defence) can access medical and dental health records, a system
          accessible from any military location, anywhere including operational
          theatres and at sea.
        </p>

        {/* <ul className="text-sm text-left px-2 pt-1 list-disc">
          <li>
            Maintaining 6 hypervisors Windows Server 2012 r2, Domain
            Controllers, Hyper V Manager, Failover Cluster, 50+ Virtual Machines
          </li>
          <li>Azure/Migration from physical to cloud/Terraform.</li>
          <li>Configuring/building Linux/Windows VM’s and Physical Servers.</li>
          <li>Database Migrations</li>
          <li>Leading and Teaching team members/Scrum Master Role</li>
        </ul> */}

        <p className="py-2 text-sm text-ink-400">
          Working in an agile environment enables me to learn on the go and pick
          up different skills in order to complete tasks. Ensuring that
          tasks/bugs get completed within the time frame so they can be tested
          and pushed to the live environment. Completing numerous tasks that
          have different priorities, therefore it is essential to organise my
          time effectively and efficiently so that deadlines are met. This
          enables me to focus and get the job done. Tasks can vary from as
          simple as applying a security fix via a GPO to more of a lengthy task
          such as upgrading domain controllers.
        </p>
      </div>
    </article>
  );
}

export default CgiExperienceCard;
