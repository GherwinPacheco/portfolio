import "@/index.css";

export const metadata = {
  title: "Gherwin Pacheco | Software Developer",
  description:
    "Portfolio of Gherwin Pacheco — Software Developer with 2+ years of experience maintaining and enhancing internal MES and WMS applications, optimizing SQL queries, and building full-stack web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
