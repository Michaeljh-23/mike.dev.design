import { useMenuContext } from "../contexts/MenuContext.jsx";
import CarouselImages from "../components/CarouselImages";

export const meta = () => {
  return [
    { title: "Projects" },
    {
      name: "Portfolio Projects",
      content: "Projects",
    },
  ];
};

export default function Projects() {
  const { isMenuOpen, toggleMenu } = useMenuContext();

  const flockImages = ["/flock-11.png", "/flock-41.png", "/flock-21.png"];
  const lemonImages = [
    "/lemon_home.png",
    "/lemon_res.png",
    "/lemon_home_middle.png",
    "/lemon_res_footer.png",
  ];
  const fetchImages = ["/home-fetch.png", "cards-fetch.png"];
  return (
    <>
      <div
        className="lg:max-w-[1200px] md:max-w-[820px] px-4 md:px-20 mx-auto pb-16 pt-28 md:py-32"
        onClick={() => isMenuOpen && toggleMenu()}
        role="button"
        tabIndex={-1}
        onKeyDown={() => isMenuOpen && toggleMenu()}
      >
        <div className="flex-col-simple text-center !gap-6 md:!gap-10">
          <h1 className="neon-text flicker-less">Personal Projects</h1>{" "}
          {/* Section */}
          <div className="relative flex flex-wrap sm:flex-nowrap text-start mt-6">
            <div className="w-full sm:w-2/5 lg:min-w-[450px] flex items-center sm:mr-6 mb-6 sm:mb-0 mt-2">
              <div className="border p-2 ">
                <CarouselImages images={fetchImages} />
              </div>
            </div>
            <div className="flex-1">
              <div className="pb-4 sm:p-4">
                <h3 className="text-lg font-semibold mb-2">Fetch a Friend</h3>
                <span className="text-sm text-gray-500 mb-4 block">2025</span>
                <p className="leading-6 text-sm sm:text-[16px] md:text-base break-words whitespace-normal">
                  Fetch-a-Friend is a dynamic front-end project designed to
                  showcase my skills in React, Bootstrap, and responsive UI
                  development. The application allows users to fetch and display
                  a list of dogs ready for adoption, complete with interactive
                  features like search, filtering, and dynamic data rendering.
                  Built with a focus on clean design and intuitive user
                  experience, Fetch-a-Friend demonstrates my ability to work
                  with APIs, manage state efficiently, and create engaging,
                  user-friendly interfaces. This project highlights my technical
                  proficiency and attention to detail in front-end development.
                </p>
                <ul className="list-disc ml-6 mt-4 text-sm sm:text-base">
                  <li>
                    Tech Stack: React, React Router, Bootsrap, JavaScript, CSS
                  </li>
                  <li>
                    <a
                      href="https://github.com/Michaeljh-23/fetch-a-friend"
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-pink-300"
                    >
                      Fetch-a-Friend on Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://fetchfriend.netlify.app/login"
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-pink-300"
                    >
                      Fetch-a-Friend Hosted by Netlify
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Section */}
          <div className="relative flex flex-wrap sm:flex-nowrap text-start mt-6">
            <div className="flex-1">
              <div className="pb-4 sm:p-4">
                <h3 className="text-lg font-semibold mb-2">Little Lemon</h3>
                <span className="text-sm text-gray-500 mb-4 block">2025</span>
                <p className="leading-6 text-sm sm:text-[16px] sm:mr-6 md:text-base break-words whitespace-normal">
                  For my Little Lemon capstone project, I developed a fully
                  responsive restaurant website as the final requirement for the
                  Meta Professional Front-End Developer Certification. This solo
                  project demonstrated my ability to integrate key front-end
                  skills, including React, JavaScript, and responsive design
                  principles. The project involved creating an intuitive user
                  interface, showcasing menu items, and implementing
                  accessibility standards to ensure a seamless experience for
                  all users. Completing this capstone not only solidified my
                  technical skills but also earned me the Meta Professional
                  Front-End Developer certification, highlighting my dedication
                  to mastering front-end development.
                </p>
                <ul className="list-disc ml-6 mt-4 text-sm sm:text-base">
                  <li>Tech Stack: React, Javascript, HTML, CSS</li>
                </ul>
              </div>
            </div>
            <div className="w-full sm:w-2/5 lg:min-w-[450px] flex items-center sm:mr-6 mb-6 sm:mb-0 mt-2">
              <div className="border p-2 ">
                <CarouselImages images={lemonImages} />
              </div>
            </div>
          </div>
          {/* Section */}
          <div className="relative flex flex-wrap sm:flex-nowrap text-start mt-6">
            <div className="w-full sm:w-2/5 lg:min-w-[450px] flex items-center sm:mr-6 mb-6 sm:mb-0 mt-2">
              <div className="border p-2 ">
                <CarouselImages images={flockImages} />
              </div>
            </div>
            <div className="flex-1">
              <div className="pb-4 sm:p-4">
                <h3 className="text-lg font-semibold mb-2">Flock.io</h3>
                <span className="text-sm text-gray-500 mb-4 block">2021</span>
                <p className="leading-6 text-sm sm:text-[16px] md:text-base break-words whitespace-normal">
                  Completed with a team of six as part of a 48-hour hackathon
                  project, Flock.IO is a full stack application in which users
                  can come together and plan trips, book flights, and
                  communicate through live chat. A user can log in using their
                  Google account, is then taken to the Landing Page in which the
                  user can view their personal upcoming flights, their personal
                  groups, and create a group. There is a sidebar in which a user
                  can maneuver through the pages with ease.
                </p>
                <ul className="list-disc ml-6 mt-4 text-sm sm:text-base">
                  <li>
                    Tech Stack: React, CSS, Node.js, Axios, React Router,
                    Firebase for live messaging, MongoDB
                  </li>
                  <li>
                    API connection to live flight price and availability
                    information
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Text Content */}
        </div>
      </div>
    </>
  );
}
// name
// year of proj
// description
// tech stack
// project for ---
// link to project
// images
