import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
      className="flex relative flex-col text-center min-h-screen mx-auto justify-center items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 sm:gap-1 sm:pt-36 lg:gap-1 lg:pt-36">
        <Skill url="../azure.png" skill="95" />
        <Skill url="../aws.png" skill="70" />
        <Skill url="../terraform.png" skill="95" />
        <Skill url="../k8s.png" skill="95" />
        <Skill url="../docker.png" skill="95" />
        <Skill url="../helm.png" skill="95" />
        <Skill url="../ansible.png" skill="95" />
        <Skill url="../ado.png" skill="95" />
        <Skill url="../jira.png" skill="95" />
        <Skill url="../octopusdeploy.png" skill="95" />
        <Skill url="../Team City.png" skill="80" />
        <Skill url="../nginx.jpg" skill="90" />
        <Skill url="../cf.png" skill="70" />
        <Skill url="../powershell.png" skill="90" />
        <Skill url="../bash.png" skill="70" />
        <Skill url="../datadog1.png" skill="90" />
        <Skill url="../azuread.png" skill="95" />
        <Skill url="../react.png" skill="50" />
        <Skill url="../nectjs.jpg" skill="50" />
        <Skill url="../gitlogo.png" skill="95" />
      </div>
    </motion.div>
  );
}
