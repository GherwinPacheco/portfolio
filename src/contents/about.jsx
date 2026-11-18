"use client";

import BehindEffect from "@/components/ui/behind-effect";
import SkillBadge from "@/components/ui/skill-badge";
import {
  Profile,
  SkillGroups,
  Experience,
  Certifications,
  Education,
} from "@/PortfolioData";
import { withBasePath } from "@/lib/utils";

const SectionHeading = ({ title }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="w-2 h-6 bg-primary inline-block" />
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {title}
    </h3>
  </div>
);

const About = () => {
  const portraitUrl = withBasePath("/assets/image_portrait.jpg");

  return (
    <div className="space-y-24 py-16 border-t border-border/50">
      {/* About & Skills Section */}
      <section id="about" className="scroll-mt-24">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column: Portrait + Education & Certifications */}
          <div className="w-full lg:w-[340px] shrink-0 space-y-10">
            <div className="lg:hidden">
              <SectionHeading title="About Me" />
            </div>

            <div className="relative w-fit mx-auto">
              <div className="absolute w-[85%] h-[90%] -top-4 -right-4 bg-secondary z-0"></div>
              <div className="relative">
                <div className="absolute w-[0.75rem] h-[4rem] bg-primary -left-6 bottom-10"></div>
                <div className="absolute w-[0.85rem] h-[0.85rem] bg-foreground -right-5 top-10"></div>
                <img
                  src={portraitUrl}
                  alt={Profile.name}
                  className="h-72 lg:h-80 object-cover border border-border"
                />
              </div>
            </div>

            {/* Education Card */}
            <div className="border border-border bg-card p-5 space-y-1.5">
              <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                Education
              </p>
              <h4 className="font-bold text-base leading-snug">
                {Education.degree}
              </h4>
              <p className="text-sm text-foreground font-medium">
                {Education.school}
              </p>
              <p className="text-xs text-muted-foreground">
                {Education.duration} • {Education.location}
              </p>
            </div>

            {/* Certifications Card */}
            <div className="border border-border bg-card p-5 space-y-3">
              <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                Certifications
              </p>
              <div className="space-y-3 divide-y divide-border/60">
                {Certifications.map((cert, i) => (
                  <div key={i} className={i > 0 ? "pt-3" : ""}>
                    <p className="font-semibold text-sm leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {cert.issuer} ({cert.date})
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Summary & Categorized Skills */}
          <div className="flex-1 space-y-10">
            <div>
              <div className="hidden lg:block">
                <SectionHeading title="About Me" />
              </div>
              <p className="text-muted-foreground leading-relaxed text-justify">
                {Profile.summary}
              </p>
            </div>

            <div className="space-y-6">
              <SectionHeading title="Technical Skills" />

              {SkillGroups.map((group) => (
                <div key={group.category} className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {group.category}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
                    {group.items.map((item, idx) => {
                      const imageSrc = withBasePath(
                        `/assets/skills/${item.image}`
                      );
                      return (
                        <BehindEffect
                          key={idx}
                          className="w-full font-medium bg-gray-300 dark:bg-neutral-800"
                          distance={4}
                        >
                          <SkillBadge
                            image={imageSrc}
                            skill={item.name}
                            className="border border-border/70 text-sm"
                          />
                        </BehindEffect>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="scroll-mt-24 pt-4">
        <SectionHeading title="Work Experience" />

        <div className="space-y-8">
          {Experience.map((item, index) => (
            <BehindEffect
              key={index}
              className="w-full bg-gray-300 dark:bg-neutral-800"
              distance={8}
            >
              <div className="bg-card border border-border p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 pb-4 border-b border-border/60">
                  <div>
                    <h4 className="text-xl font-bold">{item.position}</h4>
                    <p className="text-base text-primary font-semibold">
                      {item.company}{" "}
                      <span className="text-muted-foreground font-normal text-sm">
                        • {item.location}
                      </span>
                    </p>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.duration}
                  </p>
                </div>

                <ul className="list-disc list-outside ml-5 mt-4 space-y-2">
                  {item.descriptions.map((desc, i) => (
                    <li
                      key={i}
                      className="text-sm md:text-base text-muted-foreground leading-relaxed"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-2 mt-5 pt-4 border-t border-border/50">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
                    Tech Stack:
                  </span>
                  {item.techstack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground border border-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </BehindEffect>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
