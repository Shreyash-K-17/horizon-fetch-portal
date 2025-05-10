/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { NumberTicker } from "../magicui/number-ticker";
import { AuroraText } from "../magicui/aurora-text";
import MobileMenu from "./MobileMenu";

const NavLinks = [
  { id: 1, title: "Events", link: "events" },
  { id: 2, title: "About Us", link: "about" },
  { id: 3, title: "Contact Us", link: "contact" },
];

const NavbarClient = ({ user }: { user: any }) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "GET",
        credentials: "include",
      });
      if (res.ok) {
        router.refresh(); // Refresh server component state
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-6 flex justify-between items-center px-4 lg:px-0"
    >
      {/* Logo section */}
      <div className="flex items-center gap-3">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={logo} alt="Interior logo" width={40} height={40} />
            <div className="flex items-center gap-1 justify-center">
              <span className="text-2xl font-bold">Horizon</span>
              <div className="flex items-center">
                <AuroraText>
                  <NumberTicker
                    startValue={2000}
                    value={2025}
                    className="whitespace-pre-wrap pt-1 text-xl font-bold tracking-tighter text-black dark:text-white"
                  />
                </AuroraText>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation links */}
      <div className="hidden md:flex space-x-12">
        {NavLinks.map((link) => (
          <Link key={link.id} href={`/${link.link}`}>
            <span className="text-lg font-semibold hover:text-gray-600 transition-colors duration-200">
              {link.title}
            </span>
          </Link>
        ))}
      </div>

      <MobileMenu user={user} logout={handleLogout} />

      {/* Call to Action button */}
      <div className="hidden md:flex">
        {user ? (
          <button onClick={handleLogout} className="primary-btn">
            Logout
          </button>
        ) : (
          <Link href="/register">
            <button className="primary-btn">Register Now</button>
          </Link>
        )}
      </div>
    </motion.nav>
  );
};

export default NavbarClient;
