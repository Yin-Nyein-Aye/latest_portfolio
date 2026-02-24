export default function Footer() {
  return (
    <footer className="text-center py-8">
      <hr className="border-t border-gray-500 mb-6" />
      <p className="mt-2 text-gray-600">© 2026 Yin Nyein Aye. All rights reserved.</p>
      <div className="mt-3 space-x-4">
        <a href="/terms" className="text-gray-600 hover:text-orange-400 transition">
          Terms of Service
        </a>
        <span className="text-gray-400">|</span>
        <a href="/privacy" className="text-gray-600 hover:text-orange-400 transition">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
