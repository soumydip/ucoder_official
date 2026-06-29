"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {  Menu, X } from "lucide-react";
import Image from "next/image";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "mailto:support@ucoder.in" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/logo.png"
            alt="UCoder Logo"
            width={24}
            height={24}
            loading="lazy"
          />
          UCoder
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <ul className="flex items-center">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200"
              >
                {l.label}
              </Link>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            size="sm"
            asChild
            className="rounded px-4 py-2 bg-secondary hover:bg-secondary/90"
          >
            <Link href="https://insights.ucoder.in?utm_source=ucoder.in&utm_medium=navbar&utm_campaign=get_started">Get Started</Link>
          </Button>
        </div>

        {/* Mobile */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/40 bg-background px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Button
            size="sm"
            asChild
            className=" px-4 py-2 bg-secondary hover:bg-secondary/90"
          >
            <Link href="https://insights.ucoder.in?utm_source=ucoder.in&utm_medium=navbar&utm_campaign=get_started">Get Started</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
