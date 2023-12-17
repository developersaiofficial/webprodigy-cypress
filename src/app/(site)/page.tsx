import TitleSection from "../../components/landing-page/title-section";
import React from "react";
import Banner from "../../../public/appBanner.png";
import Cal from "../../../public/cal.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  CLIENTS,
  PRICING_CARDS,
  PRICING_PLANS,
  USERS,
} from "../../lib/constants";
import { v4 } from "uuid";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import CustomCard from "@/components/landing-page/CustomCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
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
          {[...Array(2)].map((arr, index) => (
            <div
              key={v4()}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": index === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_reverse]": index === 1,
                  "ml-[100vw] ": index === 1,
                }),
                "hover:paused"
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="
                w-[500px]
                shrink-0
                rounded-xl
                dark:bg-gradient-to-t
                dark:from-border
                dark:to-background "
                  cardHeader={
                    <div
                      className=" flex
                 items-center
                 gap-4
                 "
                    >
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {" "}
                          {testimonial.name}{" "}
                        </CardTitle>
                        <CardDescription className="dark:text-purple-800">
                          {" "}
                          {testimonial.name.toLocaleLowerCase()}{" "}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-purple-400">
                      {" "}
                      {testimonial.message}{" "}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="mt-20
      px-4 
      sm:px-6 "
      >
        <TitleSection
          title="The Perfect Plan for you "
          subheading="Experience all the benifites of our platform . select a plan."
          pill="Pricing"
        />
        <div
          className="flex
    flex-col-reverse
    sm:flex-row
    gap-4
    justify-center
    sm:items-stretch
    item-center 
    mt-10"
        >
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card.planType}
              className={clsx(
                "w-[300px] rounded-2xl dark:bg-black/95 background-blur-3xl",
                {
                  "border-purple-500/70":
                    card.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle className="text-2xl font-semibold"> 
                 {card.planType} </CardTitle>
              }
              cardContent={
                <CardContent> {card.description} </CardContent>
              }
              cardFooter={
                <CardFooter> {card.price} </CardFooter>
              }
            ></CustomCard>
          ))}
        </div>
      </section>
    </>
  );
};
export default Homepage;











