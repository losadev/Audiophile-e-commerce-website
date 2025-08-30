import Image from "next/image";
import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <main className="h-full">
      <section
        className="relative min-h-[560px] bg-[url('/assets/home/mobile/image-header.jpg')] bg-cover bg-no-repeat bg-bottom text-white
"
      >
        <div className="h-screen px-6 text-center flex flex-col justify-center items-center gap-6">
          <p className="overline-app">NEW PRODUCT</p>
          <h1 className="text-[36px] font-bold uppercase">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="font-medium text-[15px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="btn-primary sub-title">See product</button>
        </div>
      </section>
      <div className="p-8 space-y-32">
        <section className="flex flex-col gap-16 ">
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

        <section className="bg-[var(--color-pink)] flex flex-col items-center rounded-lg relative py-8">
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
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            alias, nemo nostrum, laborum iure ratione, sit soluta culpa quasi
            provident velit unde repellat quos? Sed id nihil suscipit vel
            repudiandae?
          </p>
        </section>

        <section className="rounded-lg"></section>
      </div>
    </main>
  );
}

export default Home;
