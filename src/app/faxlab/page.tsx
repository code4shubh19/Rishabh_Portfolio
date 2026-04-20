import React from "react";
import { FaxlabHero } from "@/components/sections/Faxlab/FaxlabHero";
import { FaxlabMission } from "@/components/sections/Faxlab/FaxlabMission";
import { FaxlabProduct } from "@/components/sections/Faxlab/FaxlabProduct";
import { FaxlabCTA } from "@/components/sections/Faxlab/FaxlabCTA";

export default function FaxlabPage() {
  return (
    <div className="relative overflow-hidden pt-16">
      <FaxlabHero />
      <FaxlabMission />
      <FaxlabProduct />
      <FaxlabCTA />
    </div>
  );
}
