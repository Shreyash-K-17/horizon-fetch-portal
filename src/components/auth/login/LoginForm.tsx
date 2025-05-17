// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { LoginSchema } from "@/lib/validation";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { EyeIcon, EyeOffIcon } from "lucide-react";

// type Inputs = z.infer<typeof LoginSchema>;

// export default function LoginForm() {
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<Inputs>({
//     resolver: zodResolver(LoginSchema),
//   });

//   const processForm: SubmitHandler<Inputs> = (data) => {
//     console.log(data);
//     reset();
//   };

//   return (
//     <section className="flex flex-col justify-between px-10">
//       {/* Form */}
//       <form className="" onSubmit={handleSubmit(processForm)}>
//         <motion.div
//           initial={{ x: "50%", opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//         >
//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             {/* Email */}
//             <div className="col-span-4">
//               <Label htmlFor="email">Email Address</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 autoComplete="email"
//                 {...register("email")}
//               />
//               {errors.email?.message && (
//                 <p className="mt-2 text-sm text-red-400">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>

//             {/* Password */}
//             <div className="col-span-4 relative">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 {...register("password")}
//                 className="pr-10"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword((prev) => !prev)}
//                 className="absolute right-2 top-9 text-gray-500 hover:text-gray-800"
//                 tabIndex={-1}
//               >
//                 {showPassword ? (
//                   <EyeOffIcon size={18} />
//                 ) : (
//                   <EyeIcon size={18} />
//                 )}
//               </button>

//               {errors.password?.message && (
//                 <p className="mt-2 text-sm text-red-400">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </motion.div>
//         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//           <button
//             type="submit"
//             className="w-full primary-btn col-span-4 disabled:cursor-not-allowed disabled:opacity-50"
//           >
//             Submit
//           </button>
//         </div>
//       </form>

//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginSchema } from "@/lib/validation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { loginAction } from "@/app/actions/actions";
import { useAuth } from "@/app/AuthProvider";

type Inputs = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { toast } = useToast();
  const router = useRouter();
  const { refreshUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(LoginSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    const result = await loginAction(formData);

    if (result?.errors) {
      toast({
        variant: "destructive",
        description:
          result.errors.general ||
          "Invalid credentials. Please check and try again.",
      });
      return;
    }

    toast({
      description: "Login successful!",
    });

    await refreshUser();
    router.push("/");
  };

  return (
    <section className="flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit((data) => {
          processForm(data); // Call the updated function directly
        })}
        className="w-full max-w-md space-y-8"
      >
        <motion.div
          initial={{ x: "50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="grid grid-cols-1 gap-y-8">
            {/* Email */}
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
              />
              {errors.email?.message && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                {...register("password")}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-9 text-gray-500 hover:text-gray-800"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOffIcon size={18} />
                ) : (
                  <EyeIcon size={18} />
                )}
              </button>

              {errors.password?.message && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full primary-btn disabled:cursor-not-allowed disabled:opacity-50"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
