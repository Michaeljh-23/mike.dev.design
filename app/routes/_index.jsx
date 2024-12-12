import { useEffect, useRef, useState } from "react";
import HomeMain from "../components/HomeMain";

export const meta = () => {
  return [
    { title: "Michael Harfenist" },
    {
      name: "description",
      content: "Welcome to my Homepage!",
    },
  ];
};

export default function Index() {
  // removed external images, set to false as default. If loading from any api bring back logic
  const [loading, setLoading] = useState(false);

  if (typeof window === "undefined" || loading) {
    return <div></div>;
  } else {
    return (
      <div className="green-bg">
        <HomeMain setLoading={setLoading} homeImages={null} />
      </div>
    );
  }
}
