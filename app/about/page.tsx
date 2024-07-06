import Image from "next/image";
import ShapePath from "../components/ShapePath";
import Header from "../components/ui/Header";
export default function About() {
  return (
    <main className="container mx-auto">
      <Header />
      {/* <div className="flex items-center gap-5 py-10 lg:py-24 container mx-auto">
        <Image
          src="/symbol.svg"
          alt="Vercel Logo"
          className="w-18 lg:w-auto"
          width={40}
          height={18}
          priority
        />
        <div className="flex flex-col lg:text-4xl font-sans uppercase font-bold">
          <span>Octavio</span>
          <span>Amuchástegui</span>
        </div>
      </div> */}
      <div className="grid md:grid-cols-2 gap-4 items-center px-8">
        <div className="leading-7 space-y-3">
          <p>
            I&apos;m a front-end developer with over a decade of experience,
            always hungry to learn more. I&apos;ve called Argentina, Spain, and
            now Belo Horizonte, Brazil, home. I&apos;ve worked on projects for
            both small businesses and big names.
          </p>
          <p>
            Since 2018, I&apos;ve been diving into web3 companies, exploring the
            cutting edge. I initially studied graphic design to boost the visual
            appeal of my development work.
          </p>
          <p>
            My working permits cover Europe, Brazil, and Argentina, giving me
            flexibility to work across borders.
          </p>
        </div>
        <div className="flex">
          <ShapePath className="p-8">
            <Image
              src="/me.jpeg"
              alt="Octavio"
              className=""
              width={400}
              height={400}
              priority
            />
          </ShapePath>
        </div>
      </div>
    </main>
  );
}
