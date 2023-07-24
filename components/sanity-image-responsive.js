import Image from 'next/image'
import sanity from '@/services/sanity'
import { useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';

export default function SanityImageResponsive({ image, className, alt, priority }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(priority ? priority : false)
  const imageProps = useNextSanityImage(
		sanity.config,
		image
	);
  

	return (
    <figure className={`image bg-black/10 ${className} relative overflow-hidden`}>
      <Image
        src={imageProps?.src}
        className={`${className} will-change-transform ${imageIsLoaded ? 'opacity-100 scale-1' : 'opacity-100 scale-[1.05]'} ${priority ? 'opacity-100' : 'transition-all ease-in-out duration-[2000ms]'}`}
        quality={75}
        width={image?.asset.metadata.dimensions.width / 1.5}
        height={image?.asset.metadata.dimensions.height / 1.5}
        {...(priority ? {priority: true} : {})}
        alt={image.alt ? image.alt : 'MISSING ALT TEXT'}
        onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }}
      />
      {image.caption && (
        <figcaption className="bg-white py-2 italic text-black/50 text-sm lg:text-base">
          - {image.caption}
        </figcaption>
      )}
    </figure> 
  )
}