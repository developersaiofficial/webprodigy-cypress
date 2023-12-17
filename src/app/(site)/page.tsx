import TitleSection from "../../components/landing-page/title-section";
import React from "react";
import Banner from "../../../public/appBanner.png";
import Cal from "../../../public/cal.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CLIENTS } from "../../lib/constants";
import { UUID } from "crypto";

const Homepage = () => {
  return (
    <>
      <section
        className=" overflow-hidden
                         px-4
                         sm:px-6
                          mt-10
                          sm:flex
                          sm:flex-col
                          gap-4
                          md:justify-center
                          md:items-center"
      >
        <TitleSection
          pill="✨ your workplce Perfected "
          title="All-In-One Colloboration and Productivity Platform"
          subheading=" "
        />
        <div
          className="
        bg-white
        p-[2px]
        mt-6
        rounded-xl
        bg-gradient-to-r
        from-primary
        to-brand-primaryblue
        sm:[300px]
        
        "
        >
          <Button
            className="
          w-full
          rounded-[10px]
          p-6
          text-2xl
          bg-background
          "
          >
            {" "}
            Get cypress Free
          </Button>
        </div>
        <div
          className="md:mt-[-90px]
        sm:w-full
        w-[750px]
        flex
        justify-center
        items-center
        mt-[-40px]
        relative
        sm:ml-0
        ml-[-50px]
        "
        >
          <Image src={Banner} alt="Application Banner" />
          <div
            className="
          bottom-0
          top-[50%]
          bg-gradient-to-t
          dark:from-background
          left-0
          right-0
          absolute
          z-10 
          "
          ></div>
        </div>
      </section>
      <section className="relative ">
        <div
          className="overflow-hidden
                     flex
                     absolute
                     after:content['']
                     after:dark:from-brand-dark
                     after:to-transparent
                     after:from-background
                     after:bg-gradient-to-l
                     after:right-0
                     after:top-0
                     after:bottom-0
                     after:w-20
                     after:z-10
                     after:absolute
                     after:overflow-hidden
                     
                     before:content['']
                     before:dark:from-brand-dark
                     before:to-transparent
                     before:from-background
                     before:bg-gradient-to-r
                     before:right-0
                     before:top-0 
                     before:bottom-0
                     before:w-20
                     before:z-10
                     before:absolute
                     before:overflow-hidden
                     "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="
          flex
          flex-nowrap
          animate-slide
          "
            >
              {" "}
              {CLIENTS.map((client) => (
                <div
                  className="
            key={client.alt}
            w-[200px]
            m-20
            shrink-0
            flex
            items-center
            "
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}{" "}
            </div>
          ))}
        </div>
      </section>
      <section
        className=" px-4
        mt-10
       sm:px-6
       flex
       justify-center
       items-center
       flex-col
       relative"
      >
        <div
          className=" w-[30%]
        blur-[120px]
        rounded-full
        h-32
        relative
        bg-purple-400
        -z-10
        top-22"
        />
        <TitleSection
          title="Keep track of your meetings all in one place "
          subheading="capture your ideas, thoughts and meetings notes in a string"
          pill="features"
        />
        <div
          className="
        mt-10
        max-w-[450px]
        flex
        justify-center
        items-center
        relative
        sm:ml-0
        rounded-2xl
        border-8
        border-washed-purple-300
        border-opacity-10
        "
        >
          <Image src={Cal} alt="Application Banner" className="rounded-2xl" />
        </div>
      </section>
      <section className="relative">
        <div
          className=" w-full
        blur-[120px]
        rounded-full
        h-32
        relative
        bg-purple-400
        -z-10
        top-56"
        />
        <div
          className="mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
        >
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr,index) =>(
            <div key={randomUUID()} className="
            
            "></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Homepage;
