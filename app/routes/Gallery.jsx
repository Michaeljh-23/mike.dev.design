import { useMenuContext } from "../contexts/MenuContext";

export const meta = () => {
  return [
    { title: "Gallery" },
    {
      name: "description",
      content: "Portfolio Gallery",
    },
  ];
};
export default function Gallery() {
  const { isMenuOpen, toggleMenu } = useMenuContext();

  const quantityTesting = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
  return (
    <>
      <div
        className="max-w-[820px] px-4 md:px-20 mx-auto pb-16 pt-28 md:py-32"
        onClick={() => isMenuOpen && toggleMenu()}
      >
        <div className="flex-col-simple text-center !gap-6 md:!gap-8">
          <h1 className=" neon-text flicker-less">Gallery</h1>
          <div className="grid grid-cols-3 grid-flow-row gap-4 pt-6">
            {quantityTesting.map((a, i) => {
              return (
                <div
                  key={i}
                  className="relative w-full h-auto aspect-square border"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
