import { Hero } from "./components/Hero";
import FeaturedProduct from "./components/FeaturedProduct";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/FAQ";
import { useTitle } from "../../hooks/useTitle";



export const HomePage = () => {
  useTitle('Explore the world of Books')
  return (
    <main>
       <Hero/>
       <FeaturedProduct/>
       <Testimonials/>
       <Faq/>
    </main>
  )
}

