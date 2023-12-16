import React from "react";

interface TitleSectionProps {
  title: string;
  subheading: string;
  pill: string;
}
const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subheading,
  pill
}) => {
  return (
    <React.Fragment>
      <section
        className="
    flex
    flex-col
    gap-4
    justify-center
    items-start
    md:items-center
    "
      >
        <article
          className="
        rounded-full
        p-[10px]
        text-sm
        dark:bg-gradient-to-r
        dark:from-colors-Foundation/brand-primaryblue
        dark:text-colors-Foundation/brand-primarypurple
        "
        >
          <div
            className="rounded-full 
           px-3
           py1
           dark:bg-black">
             {pill} </div>
        </article>
      </section>
    </React.Fragment>
  );
};

export default TitleSection;
