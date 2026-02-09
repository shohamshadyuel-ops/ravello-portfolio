import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, CheckCircle, Lock, MessageCircle } from "lucide-react";
import { getProjectBySlug } from "@/content/projects";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `Ravello Studio — ${project.title}`,
    description: project.summary,
    openGraph: {
      title: `Ravello Studio — ${project.title}`,
      description: project.summary,
      url: `https://www.ravellostudio.com/work/${project.slug}`,
      siteName: "Ravello Studio",
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="px-4 pb-20 pt-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>

        <div className="mt-10">
          {project.confidentialityLevel === "high" && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-subtle/60 px-4 py-2 text-xs tracking-[0.12em] uppercase text-text-secondary">
              <Lock className="h-3.5 w-3.5" />
              Confidential Client
            </div>
          )}

          <h1 className="font-display text-5xl tracking-tight text-text-primary sm:text-6xl">
            {project.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-text-secondary">
            <div>
              <span className="text-text-muted">Industry:</span>{" "}
              <span className="text-text-primary/90">{project.industry}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-text-muted">Timeline:</span>{" "}
              <span className="text-text-primary/90">{project.timeline}</span>
            </div>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-text-secondary">{project.summary}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/70 bg-surface-subtle/50 px-4 py-2 text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-8">
          <div>
            <h2 className="font-display text-3xl text-text-primary">Key features</h2>
            <Card className="mt-5 p-8">
              <ul className="space-y-3 text-[15px] text-text-secondary">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-text-primary">Integrations</h2>
              <Card className="mt-5 p-8">
                <ul className="space-y-2 text-[15px] text-text-secondary">
                  {project.integrations.map((integration) => (
                    <li key={integration} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary/70" />
                      {integration}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            <div>
              <h2 className="font-display text-3xl text-text-primary">Automations</h2>
              <Card className="mt-5 p-8">
                <ul className="space-y-2 text-[15px] text-text-secondary">
                  {project.automations.map((automation) => (
                    <li key={automation} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent/80" />
                      {automation}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl text-text-primary">Technology stack</h2>
            <Card className="mt-5 p-8">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/70 bg-surface-subtle/50 px-4 py-2 text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <h2 className="font-display text-3xl text-text-primary">Results & outcomes</h2>
            <Card className="mt-5 p-8">
              <ul className="space-y-3 text-[15px] text-text-secondary">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-accent" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-10 text-center border-primary/25">
            <Lock className="mx-auto h-10 w-10 text-accent" />
            <div className="mt-4 font-display text-2xl text-text-primary">{project.demoPolicy}</div>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
              Due to client confidentiality, full system access is available only after NDA.
            </p>
            <div className="mt-7 flex justify-center">
              <ButtonLink href="/contact" variant="primary">
                Request a private demo <MessageCircle className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
