import React from "react";

type Props = {};

function MemsetExperienceCard({}: Props) {
  return (
    <article className="w-full flex flex-col sm:flex-row gap-6 sm:gap-8 items-start rounded-xl border border-ink-800 bg-ink-900/50 p-6 sm:p-8 text-left">
      <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl bg-ink-950 border border-accent-500/40 flex items-center justify-center p-2 mx-auto sm:mx-0 flex-shrink-0">
        <img
          src="../memset.jpg"
          alt="Memset"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div>
        <h4 className="text-xl sm:text-2xl font-light text-ink-200">
          Linux/Windows Sys Admin
        </h4>
        <p className="font-bold text-lg mt-1 text-ink-200">Memset</p>

        <p className="uppercase text-sm text-accent-400 tracking-wide py-3">Sept 2018 - Oct 2019</p>

        <p className="py-2 text-sm text-ink-400">
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

        <p className="py-2 text-sm text-ink-400">
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
