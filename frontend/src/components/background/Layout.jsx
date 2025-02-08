export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden blur-md">
        {/* Animated background elements */}
        <div className="absolute w-96 h-96 rounded-full bg-pink-400 -top-48 -left-48 mix-blend-multiply animate-float" />
        <div className="absolute w-96 h-96 rounded-full bg-red-300 -bottom-48 -right-48 mix-blend-multiply animate-float delay-1000" />
      </div>
      {/* Page content */}
      {children}
    </div>
  );
}
