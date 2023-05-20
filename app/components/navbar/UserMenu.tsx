"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

type UserMenuProps = {
  currentUser?: SafeUser | null;
};

export default function UserMenu({
  currentUser,
}: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const handleLogin = useCallback(() => {
    loginModal.onOpen();
    setIsOpen(false);
  }, []);

  const handleSignUp = useCallback(() => {
    registerModal.onOpen();
    setIsOpen(false);
  }, []);

  const toggleOpen = useCallback(
    () => setIsOpen((value) => !value),
    []
  );

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
            <Avatar src={currentUser?.image} />
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
            {currentUser ? (
              <>
                <MenuItem
                  label="My Trips"
                  onPress={() => {}}
                />
                <MenuItem
                  label="My Favorites"
                  onPress={() => {}}
                />
                <MenuItem
                  label="My Reservations"
                  onPress={() => {}}
                />
                <MenuItem
                  label="My Properties"
                  onPress={() => {}}
                />
                <MenuItem
                  label="Airbnb my home"
                  onPress={() => {}}
                />
                <MenuItem
                  label="Logout"
                  onPress={signOut}
                />
              </>
            ) : (
              <>
                <MenuItem
                  label="Login"
                  onPress={handleLogin}
                />
                <MenuItem
                  label="Sign up"
                  onPress={handleSignUp}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
