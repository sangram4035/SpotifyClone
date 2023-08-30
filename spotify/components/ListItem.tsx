"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  name: string;
  href: string;
  image: string;
}

export const ListItem: React.FC<ListItemProps> = ({ name, href, image }) => {
  const router = useRouter();
  const onclick = () => {
    //push after auth
    router.push(href);
  };
  return (
    <>
      <button
        onClick={onclick}
        className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
      >
        <div className="relative min-h-[64px] min-w-[64px]">
          <Image src={image} className="object- cover" fill alt={image} />
        </div>
        <p className="font-medium truncate PY-5">{name}</p>
        <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
          <FaPlay className="text-black" />
        </div>
      </button>
    </>
  );
};
