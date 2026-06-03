"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, Lightbulb, User } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const [open, setOpen] = useState(false);
  
  const user = null;

  const links = [
    { name: "Home", href: "/" },
    { name: "Ideas", href: "/ideas" },
    { name: "Add Idea", href: "/add-idea" },
    { name: "My Ideas", href: "/my-ideas" },
    { name: "My Interactions", href: "/my-interactions" },
  ];
  return (
    <header className="sticky top-4 z-50 px-4">
      <nav className="max-w-7xl mx-auto">
        <div className="rounded-2xl border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg">
          <div className="flex h-16 items-center justify-between px-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <Lightbulb className="h-6 w-6 text-cyan-500" />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                IdeaVault
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors
                    ${
                      active
                        ? "text-cyan-500"
                        : "text-slate-700 dark:text-slate-300 hover:text-cyan-500"
                    }`}
                  >
                    {link.name}

                    {active && (
                      <motion.div
                        layoutId="active-tab"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-cyan-500"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-xl border border-white/20 p-2 hover:bg-white/20 dark:hover:bg-white/10 transition"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {!user ? (
                <>
                  <Link
                    href="/login"
                    className="rounded-xl px-4 py-2 border border-cyan-500/30 hover:bg-cyan-500/10 transition"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="rounded-xl px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 transition"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button className="flex items-center gap-2 rounded-xl border px-3 py-2">
                  <User size={18} />
                  Profile
                </button>
              )}
            </div>

            {/* Mobile Button */}
            <button onClick={() => setOpen(!open)} className="lg:hidden">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="mt-3 overflow-hidden rounded-2xl border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg lg:hidden"
            >
              <div className="flex flex-col p-5">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-3 transition
                    ${
                      pathname === link.href
                        ? "bg-cyan-500/10 text-cyan-500"
                        : "hover:bg-white/20"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="rounded-xl border p-2"
                  >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  </button>

                  {!user ? (
                    <>
                      <Link
                        href="/login"
                        className="flex-1 text-center rounded-xl border py-2"
                      >
                        Login
                      </Link>

                      <Link
                        href="/register"
                        className="flex-1 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2 text-white"
                      >
                        Register
                      </Link>
                    </>
                  ) : (
                    <Link
                      href="/profile"
                      className="flex-1 text-center rounded-xl border py-2"
                    >
                      Profile
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
