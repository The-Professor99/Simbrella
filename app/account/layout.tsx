export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div></div>
      <div>{children}</div>
    </div>
  );
}