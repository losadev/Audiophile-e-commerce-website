import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-black)] flex flex-col items-center gap-8 px-8 pt-16 pb-8">
      <span className="h-2 bg-[var(--color-pink)]"></span>

      <Image src={"audiophile.svg"} alt="logo" width={143} height={25} />
      <ul className="uppercase text-[13px] font-bold flex flex-col items-center gap-4 text-[var(--color-white-secondary)]">
        <li>Home</li>
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Earphones</li>
      </ul>

      <p className="text-[15px] text-gray-500 text-center">
        Audiophile is an all in one stop to fulfill your audio needs. We are a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <p className="text-[15px] text-gray-500 font-medium">
        Copyright 2025. All Rights Reserved
      </p>

      <div className="text-[var(--color-white)] flex gap-4 items-center">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-6 h-6 hover:text-blue-500 transition-colors" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
