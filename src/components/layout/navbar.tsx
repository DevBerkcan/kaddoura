"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });

    const storedTheme = window.localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme ?? (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between backdrop-blur-xl transition-all duration-400 ${
          scrolled
            ? "py-2 px-7 bg-white/90 dark:bg-[#062152]/95 border-b border-[var(--border)]"
            : "py-3.5 px-7 bg-white/90 dark:bg-brand-primary/80"
        }`}
      >
        <Link href="/" aria-label={SITE.name}>
          <Image
            src={SITE.logo}
            alt={SITE.name}
            width={133}
            height={40}
            priority
            className="h-20 w-auto object-contain dark:invert"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-brand-tertiary/80 hover:text-brand-primary transition-colors font-body text-xs font-medium tracking-wide uppercase dark:text-white/75 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-1.5 px-4 py-2 bg-brand-primary text-white rounded-md font-display text-xs font-bold tracking-wide"
          >
            <Phone size={13} /> Anrufen
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-brand-tertiary dark:text-white p-2"
          aria-label="Menü"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white text-brand-tertiary dark:bg-brand-primary dark:text-white pt-24 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6 mt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-brand-tertiary font-display text-2xl font-bold dark:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={`tel:${SITE.phone}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 }}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-md font-display text-sm font-bold w-fit"
              >
                <Phone size={16} /> Jetzt anrufen
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
