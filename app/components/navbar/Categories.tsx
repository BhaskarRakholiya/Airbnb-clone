"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { categories } from "@/app/utils/categories";

type Props = {};

export default function Categories({}: Props) {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }
  return (
    <div>
      <Container>
        <div
          className="
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto
          "
        >
          {categories.map((item, index) => (
            <CategoryBox
              key={index}
              label={item.label}
              description={item.description}
              icon={item.icon}
              selected={category === item.label}
            ></CategoryBox>
          ))}
        </div>
      </Container>
    </div>
  );
}
