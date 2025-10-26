import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Builds By Richie_Dev Studio",
  description: "Richie_Dev Studio's builds",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default Layout;
