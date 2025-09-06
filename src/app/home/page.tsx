import Image from "next/image";
import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <main>
      <section className="w-full flex justify-center bg-black text-white">
        {/* Lienzo igual a Figma mobile */}
        <div className="relative w-full aspect-[375/560] overflow-hidden">
          {/* Imagen */}
          <Image
            src="/assets/home/mobile/image-header.jpg"
            alt="hero"
            fill
            priority
            className="object-cover object-bottom"
          />

          {/* Overlay oscurecido (top) */}
          <div
            className="absolute inset-0 pointer-events-none 
                    bg-gradient-to-b from-black/60 via-black/20 to-transparent"
          />

          {/* Contenido */}
          <div className="absolute inset-0 px-6 flex flex-col items-center justify-center gap-6 text-center">
            <p className="tracking-[0.4em] text-xs text-white/70">
              NEW PRODUCT
            </p>
            <h1 className="text-4xl font-bold uppercase leading-tight">
              XX99 MARK II HEADPHONES
            </h1>
            <p className="text-sm text-white/90 max-w-[32ch]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="btn-primary sub-title">SEE PRODUCT</button>
          </div>
        </div>
      </section>

      <div className="p-8">
        <section className="flex flex-col gap-8">
          <CategoryCard
            alt="headphones"
            src="/assets/home/mobile/image-removebg-headphones.png"
            title="Headphones"
          />
          <CategoryCard
            alt="speakers"
            src="/assets/home/mobile/image-removebg-speakers.png"
            title="Headphones"
          />
          <CategoryCard
            alt="earphones"
            src="/assets/home/mobile/image-removebg-earphones.png"
            title="Earphones"
          />
        </section>

        <section className="bg-[var(--color-pink)] flex flex-col items-center rounded-lg relative py-8 mt-32">
          {/*ANILLO EXTERIOR*/}
          <div className="border-[var(--color-white-secondary)] rounded-full p-4 border w-full absolute top-0 ">
            {/*ANILLOS INTERIOR*/}
            <div className=" border-[var(--color-white-secondary)] border p-8 rounded-full w-full">
              <Image
                src="/assets/home/mobile/image-speaker-zx9.png"
                alt="speaker"
                width={172}
                height={150}
                className="mx-auto"
              />
            </div>
          </div>
          <div className="mt-65 flex flex-col gap-4 items-center">
            <h1 className="h2 text-[var(--color-white)] text-center px-8">
              ZX9 SPEAKER
            </h1>
            <p className="text-center text-[var(--color-white-secondary)] text-[15px]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="btn-secondary bg-[var(--color-black-secondary)] text-[var(--color-white-secondary)]">
              SEE PRODUCT
            </button>
          </div>
        </section>
        <section className="rounded-lg bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] h-80 bg-cover flex items-center mt-8">
          <div className="space-y-4 px-8">
            <h4 className="h4">ZX7 SPEAKER</h4>
            <button className="btn-secondary sub-title">See product</button>
          </div>
        </section>

        <section className="h-50 bg-[url('/assets/home/mobile/image-earphones-yx1.jpg')] rounded-lg bg-cover mt-8"></section>

        <section className="h-50 bg-[var(--color-beige)] mt-8 rounded-lg pl-6 py-[41px] pr-14 space-y-4">
          <h4 className="text-[28px] font-bold">YX1 EARPHONES </h4>
          <button className="btn-secondary sub-title">See product</button>
        </section>
        <section className=" flex flex-col gap-8 text-center my-24">
          <Image
            src={"/assets/shared/mobile/image-best-gear.jpg"}
            alt="person"
            height={300}
            width={600}
            className="rounded-lg "
          />
          <h4 className="h4">
            Bringing you the{" "}
            <span className="text-[var(--color-pink)]">best</span> audio gear
          </h4>
          <p className="text-[15px] text-gray-500">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Home;
