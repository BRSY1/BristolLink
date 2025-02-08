export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden blur-md">
        {/* Animated background elements */}
        <div className="absolute w-72 h-72 rounded-full bg-pink-400 top-24 -left-24 mix-blend-multiply animate-float" />
        <div className="absolute w-72 h-72 rounded-full bg-red-300 -bottom-36 -right-36 mix-blend-multiply animate-float delay-1000" />
      </div>
      {/* Page content */}
      {children}
    </div>
  );
}