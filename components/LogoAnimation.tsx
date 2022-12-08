import Image from "next/image";

export const LogoAnimation = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-[800px] h-[800px]">
        <Image
          src="/LogoRing.svg"
          alt={"logo_ring"}
          layout={"fill"}
          objectFit={"cover"}
          className="animate-waving"
        />
        <Image src="/LogoText.svg" alt={"logo_text"} layout={"fill"} />
      </div>
    </div>
  );
};
