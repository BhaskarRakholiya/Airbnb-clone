"use client";

import { FC } from "react";

interface MenuItemProps {
  onPress: () => void;
  label: string;
}
const MenuItem: FC<MenuItemProps> = ({ label, onPress }: MenuItemProps) => {
  return (
    <div
      onClick={onPress}
      className="
        px-4
        py-3
         hover:bg-neutral-100
        transition
        font-semibold
     "
    >
      {label}
    </div>
  );
};

export default MenuItem;
