import { useMenuContext } from "../contexts/MenuContext";
import LinkedInSVG from "../common/LinkedInSvg";
import GithubSVG from "../common/GithubSvg";
import ContactForm from "../components/ContactForm";

export const meta = () => {
  return [
    { title: "Contact" },
    {
      name: "Contact",
      content: "Contact & Resume",
    },
  ];
};

export default function Events() {
  const { isMenuOpen, toggleMenu } = useMenuContext();

  return (
    <>
      <div
        className="max-w-[820px] px-6 sm:px-6 md:px-20 mx-auto pb-16 pt-28 md:py-32"
        onClick={() => {
          isMenuOpen && toggleMenu();
        }}
        tabIndex={-1}
        onKeyDown={() => {
          isMenuOpen && toggleMenu();
        }}
        role="button"
      >
        <div className="flex-col-simple">
          <h1 className="py-2 md:pt-0 md:pb-8 neon-text flicker-less mx-auto leading-relaxed  text-[36px] sm:text-[42px] md:text-[52px]">
            Looking for a Dev?
          </h1>
          {/* <p>If this page is active, I&apos;m actively seeking my next role!</p> */}
          <div className="relative flex flex-col-reverse sm:inline-block text-start mt-6">
            <div className="w-fit relative sm:float-right lg:-right-4 pb-8">
              <ul className="border p-4">
                <li>
                  <p>Michael Harfenist</p>
                </li>
                <li className="my-2 underline">
                  <a
                    href="mailto:mike.dev.design@gmail.com"
                    className="text-blue-300 hover:text-white"
                  >
                    mike.dev.design@gmail.com
                  </a>
                </li>
                <li className="my-2">Charleston, South Carolina</li>
                <li className="my-2"></li>
                <li className="flex gap-2 items-center">
                  <a href="https://www.linkedin.com/in/michael-harfenist-blue/">
                    <LinkedInSVG />
                  </a>
                  <a href="https://github.com/Michaeljh-23">
                    <GithubSVG />
                  </a>
                  <a
                    id="download"
                    className="neon-text border-none text-2xl"
                    href="/harfenist_resume_public.docx"
                    download
                  >
                    Resume
                  </a>
                  {/* <DownloadSvg /> */}
                </li>
              </ul>
            </div>
            <div className="h-full flex items-center">
              <p className="leading-6 text-sm sm:text-[16px] md:text-xl  pb-4 sm:p-4">
                I am passionate about development and always looking for new
                opportunities to grow and contribute. Please feel free to reach
                out if you're interested in working together or just want to
                connect!
              </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
