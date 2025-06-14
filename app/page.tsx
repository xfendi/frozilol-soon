import React from "react";

import Header from "@/components/landing/Header";

const HomePage = () => {
  return (
    <div className="relative w-screen h-screen">
      <video
        src="https://r2.guns.lol/5085c18c-3016-4479-870a-87da29a7e9de.mp4"
        className="absolute inset-0 w-full !h-screen object-cover -z-50 overflow-hidden"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,15,18,0.5)] to-[rgba(15,15,18,1)] -z-40 !h-screen overflow-hidden" />
      <Header />
    </div>
  );
};

export default HomePage;
