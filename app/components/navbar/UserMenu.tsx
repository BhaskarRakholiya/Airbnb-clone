"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

export default function UserMenu() {
  const [isOpen, setIsopen] = useState(false);

  const toggleOpen = useCallback(() => setIsopen((value) => !value), []);
  return (
    <div className="relative">
      <div
        className="
          flex
          flex-row
          items-center
          gap-3"
      >
        <div
          onClick={() => {}}
          className="
            hidden 
            md:block 
            text-sm   
            font-semibold 
            py-3
            px-4
            rounded-full 
            transistion
            hover:bg-neutral-100
            cursor-pointer
          "
        >
          Airbnb your home
        </div>
        <div
          className="
            p-4
            md:py-1
            md:px-2
            border-[1px]
          border-neutral-100
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition 
          "
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <div className="hidden  md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem label="Login" onPress={() => {}} />
              <MenuItem label="Sign up" onPress={() => {}} />
            </>
          </div>
        </div>
      )}
    </div>
  );
}
