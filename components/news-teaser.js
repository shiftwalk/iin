import Image from "next/image";
import Link from "next/link";
import ImageScale from "./image-scale";

export default function NewsTeaser({ image, heading, subHeading, href, className, imageHeight }) {
  return(
    <Link scroll={false} href={href} className={`block ${className ? className : null}`}>
      <div className={`w-full bg-red mb-4 lg:mb-6 relative overflow-hidden ${imageHeight}`}>
        {image ? (
          <ImageScale
            src={image}
            sizes="(max-width: 1024px) 100vw, 35vw"
          />
        ) : (
          <div className="absolute w-full h-full inset-0 bg-[#B4C0C6]"></div>
        )}
      </div>

      <div className="w-full">
        {subHeading && (
          <span className="text-lg lg:text-lg 2xl:text-xl leading-none lg:leading-none 2xl:leading-none font-display italic mb-1 lg:mb-3 block">{subHeading}</span>
        )}
        <span className="block text-xl lg:text-xl 2xl:text-2xl leading-[1.05] lg:leading-[1.05] 2xl:leading-[1.05] font-medium">{heading}</span>
      </div>
    </Link>
  )
}