"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegisteredEvent } from "@/lib/types";
import { CalendarDays, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useAuth } from "../AuthProvider";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


type Props = {
  registeredEvents: RegisteredEvent[] | null;
};

const Sidebar = ({ registeredEvents }: Props) => {
  const { user } = useAuth();
  return (
    // <motion.div
    //   initial={{ x: "50%", opacity: 0 }}
    //   animate={{ x: 0, opacity: 1 }}
    //   transition={{ duration: 0.3, ease: "easeInOut" }}
    //   className="space-y-6"
    // >
    //   <Card>
    //     <CardHeader>
    //       <CardTitle>Your Profile</CardTitle>
    //     </CardHeader>
    //     <CardContent className="space-y-4">
    //       <div>
    //         <p className="text-sm text-muted-foreground">Name</p>
    //         <p className="font-medium">
    //           {user?.firstName} {user?.lastName}
    //         </p>
    //       </div>
    //       <div>
    //         <p className="text-sm text-muted-foreground">Email</p>
    //         <p className="font-medium">{user?.email}</p>
    //       </div>
    //       <div>
    //         <p className="text-sm text-muted-foreground">Phone</p>
    //         <p className="font-medium">{user?.phone}</p>
    //       </div>
    //     </CardContent>
    //     <CardFooter>
    //       <Link href="/profile" className="w-full">
    //         <button className="primary-btn w-full">View Profile</button>
    //       </Link>
    //     </CardFooter>
    //   </Card>

    //   <Card>
    //     <CardHeader>
    //       <CardTitle>Quick Stats</CardTitle>
    //     </CardHeader>
    //     <CardContent className="space-y-4">
    //       <div className="flex justify-between items-center">
    //         <span className="text-muted-foreground">Registered Events</span>
    //         <Badge variant="outline">{registeredEvents?.length}</Badge>
    //       </div>
    //       <div className="flex justify-between items-center">
    //         <span className="text-muted-foreground">Team Events</span>
    //         <Badge variant="outline">
    //           {registeredEvents?.filter((reg) => reg.is_team_event).length}
    //         </Badge>
    //       </div>
    //       <div className="flex justify-between items-center">
    //         <span className="text-muted-foreground">Individual Events</span>
    //         <Badge variant="outline">
    //           {registeredEvents?.filter((reg) => !reg.is_team_event).length}
    //         </Badge>
    //       </div>
    //     </CardContent>
    //   </Card>

    //   <Card>
    //     <CardHeader>
    //       <CardTitle>Upcoming Events</CardTitle>
    //     </CardHeader>
    //     <CardContent>
    //       <div className="space-y-4">
    //         <div className="flex items-center gap-2">
    //           <CalendarDays className="h-4 w-4 text-muted-foreground" />
    //           <div className="text-sm">
    //             <p className="font-medium">Hackathon 2025</p>
    //             <p className="text-muted-foreground">May 17, 2025</p>
    //           </div>
    //         </div>
    //         <div className="flex items-center gap-2">
    //           <Clock className="h-4 w-4 text-muted-foreground" />
    //           <div className="text-sm">
    //             <p className="font-medium">Code Golf Challenge</p>
    //             <p className="text-muted-foreground">June 5, 2025</p>
    //           </div>
    //         </div>
    //       </div>
    //     </CardContent>
    //     <CardFooter>
    //       <Link href="/events" className="w-full">
    //         <button className="primary-btn w-full">View All Events</button>
    //       </Link>
    //     </CardFooter>
    //   </Card>
    // </motion.div> 

    <Card>
      <CardHeader>
        <CardTitle>Horizon Tech Fest 2025</CardTitle>
        <CardDescription>Your event participation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Registered Events</span>
            <span className="font-medium">2</span>
          </div>
          <div className="flex justify-between">
            <span>Team Events</span>
            <span className="font-medium">1</span>
          </div>
          <div className="flex justify-between">
            <span>Individual Events</span>
            <span className="font-medium">1</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href="/dashboard">View Dashboard</a>
        </Button>
      </CardFooter>
    </Card>
    // </div>
  );
};

export default Sidebar;
