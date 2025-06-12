import React from "react";

const Header = () => {
  return (
    <section
      className="flex flex-col gap-[32px] justify-center items-center text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      data-aos="fade-up"
    >
      <div
        className="text-5xl sm:text-6xl font-extrabold max-w-5xl"
        style={{ letterSpacing: "3px" }}
      >
        Coming Soon.
      </div>
      <div className="!text-stone-500 text-xl sm:text-2xl sm:w-2/3 max-w-screen">
        frozi.lol is your essential platform for creating modern, customizable
        bio-pages to meet all your digital needs.
      </div>
      <a
        href="https://dc.frozi.lol"
        target="_blank"
        className="btn-primary scale-110"
      >
        Join Discord
      </a>
    </section>
  );
};

export default Header;
