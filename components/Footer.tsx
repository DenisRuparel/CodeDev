"use client";
import FooterContent from "./FooterContent";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            {/* <Blocks className="size-5" /> */}
            <span className="text-gray-400 font-bold text-lg">
                {"</>"}</span>
            <span>Copyright &copy; {year} by <span>CodeDev</span> | All Rights Reserved</span>
          </div>
            <FooterContent />
        </div>
      </div>
    </footer>
  );
}
export default Footer;