"use client";

import Image from "next/image";

type AvatarProps = {
  src?: string | null | undefined;
};
function Avatar({ src }: AvatarProps) {
  return (
    <Image
      className="rounded-full"
      height={"30"}
      width={"30"}
      alt="avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
}

export default Avatar;
