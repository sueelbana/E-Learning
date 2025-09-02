export default function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-600 dark:text-neutral-400">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} E‑Learning. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
