import Hero from "../components/sections/Hero";
import Problem from "../components/sections/Problem";
import Solution from "../components/sections/Solution";
import SolutionsOverview from "../components/sections/home/SolutionsOverview";
import Technology from "../components/sections/Technology";
import WhyJtac from "../components/sections/home/WhyJtac";
import CtaSection from "../components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <SolutionsOverview />
      <Technology />
      <WhyJtac />
      <CtaSection />
    </>
  );
}
