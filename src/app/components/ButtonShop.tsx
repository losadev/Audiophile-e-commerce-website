import Image from "next/image";

function ButtonShop() {
  return (
    <button className="btn-terciary sub-title flex gap-2 items-center">
      <span>shop</span>
      <Image
        src={"/arrow-shop.svg"}
        alt="arrow shop"
        width={8}
        height={8}
      ></Image>
    </button>
  );
}

export default ButtonShop;
