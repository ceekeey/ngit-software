export default function StudentLayout({ children }) {
  return (
    <div className="min-h-screen">
      <main className="p-6">{children}</main>
    </div>
  );
}
