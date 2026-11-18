"use client";

import { useState } from "react";
import { Projects as MyProjects } from "@/PortfolioData";
import BehindEffect from "@/components/ui/behind-effect";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const ProjectItem = ({ item }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = item.images.length;

  const prev = (e) => {
    e.preventDefault();
    setActiveIndex((cur) => (cur === 0 ? total - 1 : cur - 1));
  };

  const next = (e) => {
    e.preventDefault();
    setActiveIndex((cur) => (cur === total - 1 ? 0 : cur + 1));
  };

  const currentImg = withBasePath(
    `/assets/projects/${item.images[activeIndex]}`
  );

  return (
    <BehindEffect
      className="w-full bg-gray-300 dark:bg-neutral-800"
      distance={8}
    >
      <div className="flex flex-col lg:flex-row bg-card text-card-foreground border border-border p-6 md:p-8 gap-8 items-center">
        {/* Left Details */}
        <div className="flex-[1] flex flex-col justify-between space-y-4 w-full">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-semibold">
              {item.type}
            </span>
            <h4 className="scroll-m-20 text-xl md:text-2xl font-bold tracking-tight mt-1">
              {item.title}
            </h4>

            <div className="flex flex-wrap gap-1.5 my-4">
              {item.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-0.5 bg-secondary text-secondary-foreground border border-border/60"
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-justify">
              {item.description}
            </p>
          </div>

          <div className="pt-2">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" size="sm" className="gap-2">
                {item.linkLabel || "View Project"}
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Right Image Viewer */}
        <div className="flex-[1.1] w-full">
          <div className="relative border border-border bg-secondary/40 overflow-hidden aspect-[16/10]">
            <img
              src={currentImg}
              alt={`${item.title} screenshot ${activeIndex + 1}`}
              className="w-full h-full object-cover object-top"
            />

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/65 hover:bg-primary text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/65 hover:bg-primary text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          {total > 1 && (
            <div className="flex items-center justify-center gap-2 mt-3">
              {item.images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View screenshot ${idx + 1}`}
                  className={`h-1.5 transition-all ${
                    activeIndex === idx
                      ? "w-6 bg-primary"
                      : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </BehindEffect>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 pb-24 border-t border-border/50 scroll-mt-24">
      <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-6 bg-primary inline-block" />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Projects
        </h3>
      </div>

      <div className="space-y-8">
        {MyProjects.map((item, index) => (
          <ProjectItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
