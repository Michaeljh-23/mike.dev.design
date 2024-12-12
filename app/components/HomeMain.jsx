export default function HomeMain() {
  // const size = useWindowSize();

  const gifsList = [
    { url: "/laptop-trans.gif", alt: "pixel me gif" },
    { url: "/coffee.gif", alt: "pixel laptop gif" },
    { url: "/sarge_n_plant_scene.png", alt: "pixel laptop gif" },
  ];

  const gifCards = (gifs) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 w-full justify-center items-center">
        {gifs.map((gif, i) => {
          return (
            <div
              key={i}
              className={
                i === 0
                  ? "flex justify-center relative top-4 hidden sm:block"
                  : "flex justify-center"
              }
            >
              <img
                src={gif.url}
                alt={gif.alt}
                className="w-full  max-w-[160px] object-fit"
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="relative flex justify-center w-screen h-screen">
        <div className="max-w-5xl flex flex-col text-center justify-center gap-8 p-6 sm:m-8 mt-[112px]  border-white sm:border-[red]">
          <h1 className="lg:mt-24 neon-text-white flicker-white col-span-12 flex justify-center items-center text-[36px] sm:text-[48px] md:text-[60px] lg:text-[70px] relative w-full">
            <span className="hidden sm:block">~</span> Welcome{" "}
            <span className="hidden sm:block">~</span>
          </h1>
          <p className="text-xs leading-5 sm:text-sm md:text-[16px] lg:text-lg">
            <strong className="neon-text-white">
              Hi, I’m Michael Harfenist—a front-end developer passionate about
              bringing creativity to life through code.
            </strong>
            <br />
            <br /> I specialize in creating visuals that inspire and
            functionality that delights, crafting user experiences that are as
            engaging as they are intuitive. By bridging creativity and
            technology, I turn ideas into beautiful code and seamless,
            interactive web experiences.
          </p>
          {gifCards(gifsList)}
          {/* <div className="bg-gradient-to-t from-transparent to-[#0005] w-full h-full absolute top-0" /> */}
          {/* <div className="bg-gradient-to-b from-transparent to-[#0001] w-full h-full absolute top-0" /> */}
        </div>
      </div>
    </>
  );
}
