"use client";

import { Lightbulb, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-20 px-4 pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg">
          <div className="grid grid-cols-1 gap-10 px-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-7 w-7 text-cyan-500" />

                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  IdeaVault
                </span>
              </Link>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Discover, share, and collaborate on innovative ideas. Turn
                creativity into impactful solutions with the IdeaVault
                community.
              </p>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Platform</h3>

              <ul className="space-y-3">
                <li>
                  <Link
                    href="/ideas"
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition"
                  >
                    Browse Ideas
                  </Link>
                </li>

                <li>
                  <Link
                    href="/add-idea"
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition"
                  >
                    Submit Idea
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-ideas"
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition"
                  >
                    My Ideas
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-interactions"
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition"
                  >
                    My Interactions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Categories</h3>

              <ul className="space-y-3">
                <li>
                  <Link
                    href="/category/technology"
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition"
                  >
                    Technology
                  </Link>
                </li>

                <li>
                  <Link
                    href="/category/business"
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition"
                  >
                    Business
                  </Link>
                </li>

                <li>
                  <Link
                    href="/category/education"
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition"
                  >
                    Education
                  </Link>
                </li>

                <li>
                  <Link
                    href="/category/environment"
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition"
                  >
                    Environment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-cyan-500" />
                  <span className="text-slate-600 dark:text-slate-400">
                    support@ideavault.com
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-cyan-500" />
                  <span className="text-slate-600 dark:text-slate-400">
                    Barishal, Bangladesh
                  </span>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-2">
                  <Link
                    href="#"
                    className="rounded-xl border p-2 hover:bg-cyan-500/10"
                  >
                    <FaFacebookF size={18} />
                  </Link>

                  <Link
                    href="#"
                    className="rounded-xl border p-2 hover:bg-cyan-500/10"
                  >
                    <FaGithub size={18} />
                  </Link>

                  <Link
                    href="#"
                    className="rounded-xl border p-2 hover:bg-cyan-500/10"
                  >
                    <FaLinkedinIn size={18} />
                  </Link>

                  <Link
                    href="#"
                    className="rounded-xl border p-2 hover:bg-cyan-500/10"
                  >
                    <FaXTwitter size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 px-8 py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                © {currentYear} IdeaVault. All rights reserved.
              </p>

              <div className="flex items-center gap-6 text-sm">
                <Link
                  href="/privacy-policy"
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-500"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-500"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
