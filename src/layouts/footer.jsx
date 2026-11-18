import { Profile } from "@/PortfolioData";

const Footer = () => {
  return (
    <footer className="bg-foreground dark:bg-secondary/40 border-t border-neutral-800 flex justify-center py-6 px-4">
      <p className="text-center text-xs md:text-sm text-neutral-400">
        © {new Date().getFullYear()} {Profile.name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
