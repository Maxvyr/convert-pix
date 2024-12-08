import Dropzone from "@/components/Dropzone";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { Highlight } from "@/components/ui/hero-highlight";

const Home = () => {

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <Image
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-200 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="space-y-16 pb-8 vh-100">
      <div className="hero pt-12">
        <div className="space-y-6">
          <h1 className="text-3xl text-center font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-white">
            Free Unlimited <Highlight className="text-white dark:text-black">File Converter</Highlight>
          </h1>
          <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
            Unleash your creativity with ConvertPix – the ultimate online tool for
            unlimited and free multimedia conversion. Transform images, audio,
            and videos effortlessly, without restrictions. Start converting now
            and elevate your content like never before!
          </p>
        </div>
      </div>

      {/* DropZone Area */}
      <Dropzone />
      <div className="flex pt-24 items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
      </div>
    </div>
  );
};

export default Home;
