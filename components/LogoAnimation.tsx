import Image from "next/image";

export const LogoAnimation = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-[800px] h-[800px]">
        <Image
          src="/LogoRing.svg"
          alt={"logo_ring"}
          fill
          priority
          className="animate-spin"
        />

        <h1
          className="
           text-8xl
           text-pokeBlend2 
           font-bold 
           flex 
           items-center
           absolute
           top-2/4 
           left-2/4 
           -mr-[50%] 
           -translate-x-2/4 
           -translate-y-2/4 
           tracking-widest
          "
        >
          P
          <Image
            src="/PokeBall.svg"
            alt={"ball"}
            width={80}
            height={80}
            className="animate-waving"
          />
          KE BLEND
        </h1>
      </div>
    </div>
  );
};
