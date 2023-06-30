"use client";

import React, { useCallback } from "react";
import { IconType } from "react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

type Props = {
  icon: IconType;
  description: string;
  label: string;
  selected?: boolean;
};

export default function CategoryBox({
  icon: Icon,
  description,
  label,
  selected,
}: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) currentQuery = qs.parse(params.toString());

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      { url: "/", query: updatedQuery },
      { skipNull: true }
    );

    router.push(url);
  }, [params, label]);

  return (
    <div
      onClick={handleClick}
      className={`
          flex
          flex-col
          items-center
          justify-center
          gap-2
          p-2
          border-b-2
          hover:text-neutral-800
          transition
          cursor-pointer
          ${selected ? "border-b-neutral-800" : "border-transparent"} 
          ${selected ? "text-neutral-800" : "text-neutral-500"} 
        `}
    >
      <Icon size={27} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
}
