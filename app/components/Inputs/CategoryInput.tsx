"use Client";

import React from "react";
import { IconType } from "react-icons";

type Props = {
  selected?: boolean;
  label: string;
  icon: IconType;
  onClick: (value: string) => void;
};

export default function CategoryInput({
  selected,
  label,
  icon: Icon,
  onClick,
}: Props) {
  const classNames = {
    categoryInputContainer: `rounded-xl
    border-2
    p-4
    flex
    flex-col
    gap-3
    hover:border-black
    transition
    cursor-pointer
    ${selected ? "border-black" : "border-neutral-200"}
    `,
    iconDiv: "font-semibold",
  };
  return (
    <div
      onClick={() => onClick(label)}
      className={classNames.categoryInputContainer}
    >
      <Icon size={30} />
      <div className={classNames.iconDiv}>{label}</div>
    </div>
  );
}
