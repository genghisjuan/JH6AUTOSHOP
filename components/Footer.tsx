import { Mail, Phone, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-6 border-t border-white/5 bg-neutral-950/90 text-sm text-white/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-5 py-6 pb-[calc(24px+env(safe-area-inset-bottom))] sm:py-8">
          <div className="space-y-3 text-center">
            <a
              href="mailto:service@jh6autoshop.com"
              className="mx-auto flex max-w-max items-center gap-3 rounded-xl px-2 py-2 hover:bg-white/5 hover:text-white"
            >
              <Mail className="h-5 w-5 shrink-0" />
              <span className="truncate">service@jh6autoshop.com</span>
            </a>
            <a
              href="tel:+17739326511"
              className="mx-auto flex max-w-max items-center gap-3 rounded-xl px-2 py-2 hover:bg-white/5 hover:text-white"
            >
              <Phone className="h-5 w-5 shrink-0" />
              <span>(773) 932-6511</span>
            </a>
            <div className="flex justify-center gap-3">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/jh6autoshop/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/profile.php?id=61580185140070"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          <p className="text-center">
            © 2025 JH6 Autoshop. All rights reserved.{" "}
            <a
              className="underline decoration-white/20 underline-offset-4 hover:text-white"
              href="#"
            >
              Privacy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
