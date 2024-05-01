import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex items-center justify-center flex-wrap p-6">
      <Image
        src="/symbol.svg"
        alt="Octavio Amuchástegui Logo"
        width={40}
        height={19}
        className="mr-auto"
      />
      <div className="flex items-center gap-3 place-self-center">
        <Link href="/">main</Link>
        <Link href="/about">about</Link>
        <Link href="/resume">resumé</Link>
        <Link href="/posts">posts</Link>
      </div>
      <div className="flex items-center gap-3 ml-auto">
        <a
          href="https://github.com/octavioamu"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/octavioamu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <a
          href="https://twitter.com/octavioamu"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
      </div>
    </nav>
  );
};

export default Nav;
