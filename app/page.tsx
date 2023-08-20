import Banner from "./components/Banner/index";
import People from "./components/People/index";
import Features from "./components/Features/index";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Banner />
      <People />
      <Features />
      <About />
    </main>
  );
}
