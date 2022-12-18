"use client";
import React from "react";
import { Member } from "./Member";
import Image from "next/image";

export const AboutContents = () => {
    console.log(process.env.PUBLIC_URL)
    return (
        <div className="py-10 px-32" >
            <div className="flex flex-col">
                <h1 className="text-5xl font-bold flex justify-center ">
                    About Page
                </h1>
                <Member/>
                <div className=" px-32 ">
                    <h2 className="text-3xl font-bold">
                        技術スタック
                    </h2>
                </div>
                <div className="py-10 flex flex-wrap flex justify-center">
                    <a className="text-2xl text-center font-bold w-1/4" href="https://swr.vercel.app/ja">・useSWR</a>
                    <a className="text-2xl text-center font-bold w-1/4" href="https://daisyui.com">・daisyUI components</a>
                    <a className="text-2xl text-center font-bold w-1/4" href="https://pokeapi.co">・PokéAPI</a>
                    <a className="text-2xl text-center font-bold w-1/4" href="https://www.blender.org">・Blender</a>
                    <div className="text-2xl text-center font-bold w-1/4 flex flex-row">
                        <a href="https://nextjs.org/blog/next-13">・Next13</a>
                        <a href="https://nextjs.org/blog/next-13"><Image src="/next-js.png" width={25} height={25} alt=""/></a>
                    </div>
                    <div className="text-2xl text-center font-bold w-1/4 flex flex-row">
                        <a href="https://www.typescriptlang.org">・TypeScript</a>
                        <a href="https://www.typescriptlang.org"><Image src="/typescript.png" width={25} height={25} alt=""/></a>
                    </div>
                    <div className="text-2xl text-center font-bold w-1/4 flex flex-row">
                        <a href="https://tailwindcss.com">・Tailwind CSS</a>
                        <a href="https://tailwindcss.com"><Image src="/tailwindcss.png" width={25} height={25} alt=""/></a>
                    </div>   
                </div>
            </div>
        </div>
    )
};