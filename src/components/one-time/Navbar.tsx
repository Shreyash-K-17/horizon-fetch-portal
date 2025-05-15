import { getCurrentUser } from "@/app/actions/actions";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  // const { data } = await getCurrentUser();

  return <NavbarClient />;
}
