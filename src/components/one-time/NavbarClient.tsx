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
import { useAuth } from "@/app/AuthProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { CircleUserRound, UserCircle2Icon } from "lucide-react";
import { Button } from "../ui/button";

const NavLinks = [
  { id: 1, title: "Events", link: "events" },
  { id: 2, title: "About Us", link: "about" },
  { id: 3, title: "Contact Us", link: "contact" },
];

const NavbarClient = () => {
  const router = useRouter();
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "GET",
        credentials: "include",
      });
      if (res.ok) {
        setUser(null);
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
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <CircleUserRound className="h-[45px] w-[45px] p-1 text-shadow-muted hover:text-muted-foreground cursor-pointer transition-all" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <Link href="/dashboard" className="cursor-pointer">
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </Link>

                <Link href="/profile" className="cursor-pointer">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <button onClick={handleLogout} className="font-semibold">
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
