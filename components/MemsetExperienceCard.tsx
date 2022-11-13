import React from "react";
import { motion } from "framer-motion";

type Props = {};

function MemsetExperienceCard({}: Props) {
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
        className="h-32 w-32 xl:h-[200px] xl:w-[200px] object-cover object-center"
        src="../memset.jpg"
        alt=""
      />
      <div className="px-5 md:px-10">
        <h4 className="text-4xl font-light">Linux/Windows Sysadmin</h4>
        <p className="font-bold text-2xl mt-1 text-left">Memset</p>

        <p className="uppercase py-5 text-left">Sept 2018 - Oct 2019 </p>

        <p className="py-2 text-sm text-left">
          Working with cloud products – Maintaining customer servers:
        </p>

        {/* <ul className="text-sm text-left px-2 pt-1 list-disc">
          <li>Provided 1st, 2nd and 3rd line support for customers</li>
          <li>Responding to real time problems with the use of Nagios</li>
          <li>Responsible for Server setups and Disk swaps</li>
          <li>Configured and Maintained internal and external Firewalling</li>
          <li>
            Troubleshooting Windows/Linux systems – Load/Memory/Networking
            issues
          </li>
          <li>
            Responding to DDOS /DOS attacks on customer servers – helping
            customers prevent such attacks in the future
          </li>
          <li>Responsible for DNS/Apache/Nginx/MySQL Configurations</li>
          <li>Responsible for maintaining backups (R1Soft)</li>
        </ul> */}

        <p className="py-2 text-sm text-left">
          Day to day activities include monitoring alerts with the use of
          Nagios, any servers that are down, disks that are failing. Responding
          to emergency calls and tickets from customers. Reviewing policies
          ensuring that they are up to date and they are followed. Responding to
          customers via ticketing system ensuring SLA’s are being met. Setting
          up dedicated customer servers upon request and internal host servers
          for our infrastructure, Debian and Centos servers. Analysing log files
          trying to troubleshoot customer issues.
        </p>
      </div>
    </article>
  );
}

export default MemsetExperienceCard;
