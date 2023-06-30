"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <Image
      onClick={handleClick}
      alt="Logo"
      src="/images/logo.png"
      className="hidden md:block cursor=pointer"
      height="100"
      width={"100"}
    />
  );
}
