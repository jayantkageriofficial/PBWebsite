export const metadata = {
  title: "Lore",
  description: "Lores Page",
};

export default async function LoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
