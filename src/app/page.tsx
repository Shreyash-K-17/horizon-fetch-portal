import Banner from "@/components/one-time/Banner";
import Banner2 from "@/components/one-time/Bannner2";
import Brands from "@/components/one-time/Brands";
import Hero from "@/components/one-time/Hero";
import Testimonial from "@/components/one-time/Testimonial";

export default async function Home() {

  return (
    <main className="flex flex-col justify-center items-center overflow-x-hidden">
      <Hero />
      <Brands />
      {/* <Services /> */}
      <Banner />
      <Banner2 />
      <Testimonial />
      {/* <Newsletter />   */}
    </main>
  );
}
