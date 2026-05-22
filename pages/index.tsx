import Head from "next/head";
import Sidebar from "../components/Sidebar";
import RightPanel from "../components/RightPanel";
import Hero from "../components/Hero";
import Stack from "../components/Stack";
import Work from "../components/Work";
import Writing from "../components/Writing";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wasmer — Full Stack Engineer</title>
      </Head>

      <Sidebar />
      <RightPanel />

      {/* Main content — offset for sidebars */}
      <main className="lg:ml-64 xl:mr-56 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Hero />
          <Stack />
          <Work />
          <Writing />
          <Contact />
        </div>
      </main>
    </>
  );
}
