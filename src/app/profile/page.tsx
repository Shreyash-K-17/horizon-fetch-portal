"use client";

import { useAuth } from "@/app/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, User } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

// In Next.js 13+ with the App Router, metadata should be exported from Server Components.
// Since this is a Client Component ("use client"), this is not the correct place for it.
// It should be moved to a parent layout.tsx or page.tsx file that is a Server Component.

// Define a type for the form data
interface ProfileFormData {
  name: string;
  email: string;
  phone: string;
  college_name: string;
  gender: string;
  branch: string;
  year_of_study: string;
}

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<ProfileFormData>({
    name: "",
    email: "",
    phone: "",
    college_name: "",
    gender: "",
    branch: "",
    year_of_study: "",
  });

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    } else if (user && formData.name === "") {
      setFormData({
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        phone: user.phone || "",
        college_name: user.college_name || "",
        gender: user.gender || "",
        branch: user.branch || "",
        year_of_study: user.year_of_study ? String(user.year_of_study) : "",
      });
    }
    // eslint-disable-next-line
  }, [isLoading, user, router]);

  // Display a loading indicator while the user's authentication status is being checked.
  if (isLoading || !user) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Updating profile with:", formData);
  //   // Here you would typically call an API to update the user's profile
  //   setSuccessMessage("Profile updated successfully!");
  //   setIsEditing(false);
  //   setTimeout(() => setSuccessMessage(null), 3000);
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("=== Submitted Profile Data ===");
    console.table(formData); // logs neatly in table format
    // Or, use:
    // console.log(JSON.stringify(formData, null, 2));

    setSuccessMessage("Profile updated successfully!");
    setIsEditing(false);

    // Optional: Reset success message after 3 seconds
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <main className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">
            View your registrations and manage your profile information.
          </p>
        </div>
        <img
          src="/_next/static/media/logo.abe5a6a4.png"
          style={{ width: "120px", height: "auto" }} // If you set width, set height to auto
          alt="Logo"
        />
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="profile">Edit Profile</TabsTrigger>
          <TabsTrigger value="contingentLead">Contingent Leader</TabsTrigger>
        </TabsList>

        {/* --- Edit Profile Tab --- */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
              <CardDescription>Update your details</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                {successMessage && (
                  <Alert className="bg-green-50 text-green-800 border-green-200">
                    <AlertDescription>{successMessage}</AlertDescription>
                  </Alert>
                )}

                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>

                {/* Email - Disabled */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    disabled
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>

                {/* College - Disabled */}
                <div className="space-y-2">
                  <Label htmlFor="college" className="flex items-center gap-2">
                    🎓 College Name
                  </Label>
                  <Input
                    id="college"
                    name="college"
                    value={formData.college_name}
                    disabled
                  />
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <Label htmlFor="gender" className="flex items-center gap-2">
                    🚻 Gender
                  </Label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Branch */}
                <div className="space-y-2">
                  <Label htmlFor="branch" className="flex items-center gap-2">
                    🏫 Branch
                  </Label>
                  <Input
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>

                {/* Year of Study */}
                <div className="space-y-2">
                  <Label htmlFor="year" className="flex items-center gap-2">
                    📚 Year of Study
                  </Label>
                  <select
                    id="year"
                    name="year_of_study" // ✅ Must match your state key!
                    value={formData.year_of_study}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>

                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {isEditing ? (
                  <>
                    <Button variant="outline" type="button" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Save</Button>
                  </>
                ) : (
                  <Button type="button" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </Button>
                )}
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        {/* --- Contingent Leader Tab --- */}
        <TabsContent value="contingentLead">
          <Card>
            <CardHeader>
              <CardTitle>Contingent Leader</CardTitle>
              <CardDescription>
                View or manage contingent leader details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add your contingent leader logic here */}
              <p>Contingent Leader Info Coming Soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

    </main>

  );
}

