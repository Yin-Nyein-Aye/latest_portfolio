export default function Footer() {
  return (
    <footer className="text-center py-8">
      <hr className="border-t border-gray-500 mb-6" />
      <p className="mt-2 italic text-sm text-gray-600">© 2026 Yin Nyein Aye. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="/terms" className="text-gray-600 text-xs hover:text-black transition">
          Terms of Service
        </a>
        <span className="text-gray-400">|</span>
        <a href="/privacy" className="text-gray-600 text-xs hover:text-black transition">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
