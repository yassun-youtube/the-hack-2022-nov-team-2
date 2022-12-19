"use client";

import React from "react";
import { Member } from "./Member";
import Image from "next/image";

export const AboutContents = () => {
  return (
    <div className="py-10 px-32 ">
      <h1 className="text-5xl font-bold flex justify-center text-pokeBlend2">
        About Page
      </h1>
      <Member />
      <div className="px-32">
        <h2 className="text-3xl font-bold text-center text-pokeBlend1">
          技術スタック
        </h2>
      </div>
      <div className="flex flex-col gap-5 items-center mt-6">
        <div className="text-2xl font-bold text-pokeBlend3 flex items-center">
          <a href="https://nextjs.org/blog/next-13">Next13</a>
          <Image src="/next-js.png" width={25} height={25} alt="" />
        </div>
        <div className="text-2xl font-bold text-pokeBlend3 flex  items-center">
          <a href="https://www.typescriptlang.org">TypeScript</a>
          <Image src="/typescript.png" width={25} height={25} alt="" />
        </div>
        <a
          className="text-2xl font-bold"
          text-pokeBlend3
          href="https://pokeapi.co"
        >
          PokéAPI
        </a>
        <a
          className="text-2xl font-bold"
          text-pokeBlend3
          href="https://swr.vercel.app/ja"
        >
          SWR
        </a>
        <a
          className="text-2xl font-bold"
          text-pokeBlend3
          href="https://www.blender.org"
        >
          Blender
        </a>
        <div className="text-2xl font-bold text-pokeBlend3 flex items-center">
          <a href="https://tailwindcss.com">Tailwind CSS</a>
          <Image src="/tailwindcss.png" width={25} height={25} alt="" />
        </div>
        <a
          className="text-2xl font-bold"
          text-pokeBlend3
          href="https://daisyui.com"
        >
          daisyUI
        </a>
      </div>
    </div>
  );
};
