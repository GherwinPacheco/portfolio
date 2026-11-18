"use client";

import { useState } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navMenu = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm z-50 border-b border-border/60 duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-bold text-lg tracking-tight flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 bg-primary inline-block" />
          Gherwin Pacheco
        </a>

        <div className="flex items-center gap-1">
          <div className="hidden md:flex items-center">
            {navMenu.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="font-medium text-sm px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="ml-3 flex items-center gap-2">
            <ModeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 border border-border text-foreground"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-b border-border px-4 py-3 flex flex-col gap-1">
          {navMenu.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-sm px-3 py-2 text-foreground hover:bg-secondary"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
