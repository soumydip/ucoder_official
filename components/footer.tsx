import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-semibold mb-3">
            <Image src="/logo.png" alt="UCoder Logo" width={24} height={24} loading="lazy" />
            UCoder
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Privacy-first developer tools & services.
          </p>
          <div className="flex gap-3 mt-4">
            <Link href="https://github.com/UcoderOfficial" target="_blank">
              <Github className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://x.com/Ucoder_in" target="_blank">
              <Twitter className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/ucoder-official"
              target="_blank"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium mb-3">Products</p>
          <div className="flex flex-col gap-2">
            <Link
              href="/products"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              All Products
            </Link>
            <Link
              href="https://insights.ucoder.in?utm_source=ucoder.in&utm_medium=footer&utm_campaign=insights_link"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              UCoder Insights
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium mb-3">Company</p>
          <div className="flex flex-col gap-2">
            <Link
              href="/about"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="mailto:support@ucoder.in"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border/40 px-4 py-4 text-center text-xs text-muted-foreground">
        © 2026 UCoder. Built by{" "}
        <Link
          href="https://soumyadip.ucoder.in?utm_source=ucoder.in&utm_medium=footer&utm_campaign=soumyadip_link"
          className="text-foreground hover:underline mx-1"
        >
          Soumyadip
        </Link>{" "}
        with ❤️
      </div>
    </footer>
  );
}
