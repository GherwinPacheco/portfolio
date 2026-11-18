"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import BehindEffect from "@/components/ui/behind-effect";
import { FileUser, MapPin } from "lucide-react";
import { Profile } from "@/PortfolioData";
import { withBasePath } from "@/lib/utils";

const Intro = () => {
  const resumeUrl = withBasePath("/CV_Gherwin Pacheco.pdf");
  const myImageUrl = withBasePath("/assets/my_image.jpg");

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[85vh] pt-24 pb-16 gap-12"
    >
      {/* Left Column */}
      <div className="flex-[1.2] text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">
          {Profile.role}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          {Profile.name}
        </h1>

        <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mb-5">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          {Profile.location}
        </p>

        <p className="mb-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          Software Developer with 2+ years of experience maintaining, revising,
          and troubleshooting internal MES and WMS systems across 19 SMT
          electronics production lines, optimizing production SQL queries, and
          accelerating development with agentic AI tools (Codex, Antigravity,
          Kiro) and n8n workflow automation.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <BehindEffect className="bg-foreground" distance={5}>
            <a href={resumeUrl} download="CV_Gherwin Pacheco.pdf">
              <Button className="px-6">
                Download CV&emsp;
                <FileUser className="w-4 h-4" />
              </Button>
            </a>
          </BehindEffect>

          <a href="#projects">
            <Button variant="outline" className="px-6 border-foreground/20">
              View Projects
            </Button>
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-[1] relative flex items-center justify-center w-full">
        <BehindEffect
          className="bg-primary"
          distance={14}
          enabled={true}
        >
          <img
            src={myImageUrl}
            alt={Profile.name}
            className="h-72 sm:h-80 md:h-96 object-cover border border-border"
          />
        </BehindEffect>

        <div className="absolute right-2 sm:right-6 md:right-0 bottom-6 flex flex-col gap-3">
          <BehindEffect className="bg-foreground">
            <a
              href={Profile.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Button size="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </Button>
            </a>
          </BehindEffect>

          <BehindEffect className="bg-foreground">
            <a
              href={Profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Button size="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Button>
            </a>
          </BehindEffect>

          <BehindEffect className="bg-foreground">
            <a
              href={Profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button size="icon">
                <FontAwesomeIcon icon={faGithubAlt} />
              </Button>
            </a>
          </BehindEffect>
        </div>
      </div>
    </section>
  );
};

export default Intro;
