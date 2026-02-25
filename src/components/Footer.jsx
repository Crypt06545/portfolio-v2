const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          {/* Name and Title */}
          <p className="text-sm sm:text-base text-slate-200">
            Abdul Momin | Software Engineer
          </p>

          {/* Built with love */}
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Built with &lt;3 using Next.js, TypeScript & Tailwind
          </p>

          {/* Copyright */}
          <p className="text-xs text-slate-500 mt-2">
            © 2026 Abdul Momin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
