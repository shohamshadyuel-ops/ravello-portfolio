"use client";

import { useMemo, useState } from "react";
import { projects as allProjects } from "@/content/projects";
import { FilterTags } from "@/components/work/FilterTags";
import { ProjectGrid } from "@/components/work/ProjectGrid";

const tags = ["All", "Real Estate", "E-commerce", "Healthcare", "Consulting", "Logistics", "Education"];

export function WorkPageClient() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return allProjects;
    return allProjects.filter((p) => p.industry === active || p.tags.includes(active));
  }, [active]);

  return (
    <>
      <FilterTags tags={tags} active={active} onChange={setActive} />
      <ProjectGrid projects={filtered} />
      {filtered.length === 0 && (
        <div className="px-4 pb-20">
          <div className="mx-auto max-w-7xl text-text-secondary">No projects found for this filter.</div>
        </div>
      )}
    </>
  );
}

