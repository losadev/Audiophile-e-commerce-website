import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <main className="min-h-screen">
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

      <section className="p-8 flex flex-col gap-16 ">
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
    </main>
  );
}

export default Home;
