import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center gap-5 py-10 lg:py-24 container mx-auto justify-center">
      <Image
        src="/symbol.svg"
        alt="Vercel Logo"
        className=""
        width={140}
        height={18}
        priority
      />
      <div className="flex flex-col lg:text-4xl font-sans uppercase font-bold">
        <span>Octavio</span>
        <span>Amuchástegui</span>
      </div>
    </div>
  );
};

export default Header;
