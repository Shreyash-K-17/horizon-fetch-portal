import { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  Zap,
  Award,
  Globe,
  Code,
  Lightbulb,
  Cpu,
} from "lucide-react";

// Team member data
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Festival Director",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Chen",
    role: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Rodriguez",
    role: "Event Coordinator",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Priya Patel",
    role: "Marketing Director",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "David Kim",
    role: "Operations Manager",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emma Wilson",
    role: "Content Strategist",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "James Taylor",
    role: "Sponsorship Manager",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sophia Garcia",
    role: "UX Designer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Raj Mehta",
    role: "Technology Officer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Olivia Brown",
    role: "Community Manager",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Daniel Lee",
    role: "Finance Director",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Zoe Martinez",
    role: "Volunteer Coordinator",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export const metadata: Metadata = {
  title: "About Horizon Tect Fest 2025",
  description:
    "Learn more about Horizon Tect Fest 2025 — its mission, vision, and the team behind the scenes.",
};

export default function AboutPage() {
  return (
    <div className="container max-w-7xl py-8">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8 md:mb-12">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Horizon Tech Fest 2025"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col justify-center p-4 sm:p-8">
          <Badge className="mb-2 w-fit" variant="secondary">
            May 15-18, 2025
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">
            Horizon Tech Fest 2025
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-white/90 max-w-2xl">
            Hello Tech World 2025: Exploring the Frontiers of Innovation
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          About Horizon Tech Fest
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <p className="text-base md:text-lg mb-4">
              Horizon Tech Fest is the premier technology festival that brings
              together innovators, developers, entrepreneurs, and tech
              enthusiasts from around the world. Since its inception in 2020,
              Horizon Tech Fest has been at the forefront of showcasing
              cutting-edge technologies and fostering collaboration across the
              tech ecosystem.
            </p>
            <p className="text-base md:text-lg mb-4">
              Our 2025 theme, &quot;Hello Tech World,&quot; invites participants
              to explore the frontiers of innovation and reimagine the future of
              technology. From artificial intelligence and blockchain to quantum
              computing and sustainable tech, Horizon Tech Fest 2025 will be a
              celebration of human ingenuity and technological advancement.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button asChild>
                <Link href="/events">Explore Events</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-muted/50">
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                <Calendar className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4 text-primary" />
                <h3 className="font-bold mb-1">4 Days</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Of Tech Innovation
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                <MapPin className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4 text-primary" />
                <h3 className="font-bold mb-1">5 Venues</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Across the City
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                <Users className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4 text-primary" />
                <h3 className="font-bold mb-1">10,000+</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Expected Attendees
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/50">
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                <Zap className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4 text-primary" />
                <h3 className="font-bold mb-1">50+</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Tech Events
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Theme Section */}
      <div className="mb-12 md:mb-16 bg-muted/30 p-4 sm:p-6 md:p-8 rounded-xl">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            2025 Theme
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Hello Tech World 2025
          </h2>
          <p className="text-base md:text-lg mb-6">
            Our theme for 2025 celebrates the convergence of technology and
            human creativity. &quot;Hello Tech World&quot; is more than just a
            greeting—it&apos;s an invitation to explore, innovate, and shape the
            future of technology together.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
            <div className="flex flex-col items-center">
              <Globe className="h-10 w-10 md:h-12 md:w-12 text-primary mb-3 md:mb-4" />
              <h3 className="font-bold mb-1 md:mb-2">Global Connection</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Bringing together tech communities from around the world
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Code className="h-10 w-10 md:h-12 md:w-12 text-primary mb-3 md:mb-4" />
              <h3 className="font-bold mb-1 md:mb-2">Innovation</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Showcasing breakthrough technologies and ideas
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Lightbulb className="h-10 w-10 md:h-12 md:w-12 text-primary mb-3 md:mb-4" />
              <h3 className="font-bold mb-1 md:mb-2">Inspiration</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Sparking creativity and new possibilities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Highlights */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Event Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <Card>
            <CardContent className="p-4 sm:p-6 pt-6 sm:pt-8">
              <Award className="h-8 w-8 md:h-10 md:w-10 text-primary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Hackathon 2025
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                A 24-hour coding marathon where teams compete to build
                innovative solutions to real-world problems.
              </p>
              <Badge variant="outline">Competition</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6 pt-6 sm:pt-8">
              <Cpu className="h-8 w-8 md:h-10 md:w-10 text-primary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">AI Summit</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Explore the latest advancements in artificial intelligence with
                industry leaders and researchers.
              </p>
              <Badge variant="outline">Conference</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6 pt-6 sm:pt-8">
              <Globe className="h-8 w-8 md:h-10 md:w-10 text-primary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Tech Expo</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Discover cutting-edge products and services from startups and
                established tech companies.
              </p>
              <Badge variant="outline">Exhibition</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6 pt-6 sm:pt-8">
              <Users className="h-8 w-8 md:h-10 md:w-10 text-primary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Networking Mixer
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Connect with fellow tech enthusiasts, potential collaborators,
                and industry professionals.
              </p>
              <Badge variant="outline">Networking</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6 pt-6 sm:pt-8">
              <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-primary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Startup Pitch
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Watch innovative startups pitch their ideas to investors and
                compete for funding.
              </p>
              <Badge variant="outline">Competition</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-6 pt-6 sm:pt-8">
              <Code className="h-8 w-8 md:h-10 md:w-10 text-primary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Workshops</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Hands-on sessions covering various technologies, from web
                development to quantum computing.
              </p>
              <Badge variant="outline">Learning</Badge>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Meet Our Team
        </h2>
        <p className="text-base md:text-lg mb-6 md:mb-8 max-w-3xl">
          Horizon Tech Fest is organized by a dedicated team of technology
          enthusiasts and professionals committed to creating an unforgettable
          experience for all participants.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3 md:mb-4 mx-auto">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-sm md:text-base">{member.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/10 rounded-xl p-4 sm:p-6 md:p-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
          Join Us at Horizon Tech Fest 2025
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6 max-w-2xl mx-auto">
          Be part of the most exciting tech event of the year. Register now to
          secure your spot!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/events">Browse Events</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
