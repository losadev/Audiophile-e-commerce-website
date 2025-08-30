import Image from "next/image";
import React from "react";
import ButtonShop from "./ButtonShop";

interface Props {
  src: string;
  alt: string;
  title: string;
}

const CategoryCard = (props: Props) => {
  const { src, alt, title } = props;
  return (
    <div className="pt-14 relative">
      <div className="bg-[var(--color-beige)] p-8 flex flex-col items-center gap-4 pt-22 overflow-visible rounded-lg">
        <Image
          src={src}
          alt={alt}
          height={"100"}
          width={"84"}
          className="absolute top-0 shadow-2xl bg-transparent"
        />
        <p className="sub-title ">{title}</p>
        <ButtonShop />
      </div>
    </div>
  );
};

export default CategoryCard;
