import React from "react";
import { motion } from "framer-motion";

type Props = {};

function CgiExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px xl:w-[900px] snap-center p-10">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3.5 }}
        viewport={{ once: true }}
        className=" xl:h-[200px] xl:w-[200px] object-cover object-center"
        src="../CGI.png"
        alt=""
      />
      <div className="px-5 md:px-10">
        <h4 className="text-4xl font-light">Infrastructure Engineer</h4>
        <p className="font-bold text-2xl mt-1 text-left">CGI (MoD Project)</p>

        <p className="uppercase py-5 text-left">November 2019 - Apr 2021 </p>

        <p className="py-2 text-sm text-left">
          Working on DMICP (Defence Medical Information Capability Programme).
          Managing and sustaining the infrastructure where the MOD (Ministry of
          Defence) can access medical and dental health records, a system
          accessible from any military location, anywhere including operational
          theatres and at sea.
        </p>

        <ul className="text-sm text-left px-2 pt-1 list-disc">
          <li>
            Maintaining 6 hypervisors Windows Server 2012 r2, Domain
            Controllers, Hyper V Manager, Failover Cluster, 50+ Virtual Machines
          </li>
          <li>Azure/Migration from physical to cloud/Terraform.</li>
          <li>Configuring/building Linux/Windows VM’s and Physical Servers.</li>
          <li>Database Migrations</li>
          <li>Leading and Teaching team members/Scrum Master Role</li>
        </ul>

        <p className="py-2 text-sm text-left">
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
