import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { CgLivePhoto } from "react-icons/cg";
import { FaGithub  } from "react-icons/fa6";

/**
 * Props for `Discord`.
 */
export type DiscordProps = SliceComponentProps<Content.DiscordSlice>;

/**
 * Component for "Discord" Slices.
 */
const Discord = ({ slice }: DiscordProps): JSX.Element => {
  return (
    <div className=" flex items-center justify-center">

      <>
      <CgLivePhoto
      className=" text-xl"
      />
      <PrismicNextLink 
      className="no-underline pr-2 hover:text-rose-600"
      field={slice.primary.link}>Live site</PrismicNextLink>
        </>
<></>
      <>
        <FaGithub
        className="text-xl"
        />
        <PrismicNextLink 
        className="no-underline pr-2 hover:text-slate-600"
        field={slice.primary.dis}>GitHub</PrismicNextLink>
        </>

    </div>
  );
};

export default Discord;
