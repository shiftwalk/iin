
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function FooterFlick({ images }) {
  const ref = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let speed = 350

    // Set an interval that updates the currentProject every 3 seconds on mobile to rotate the projects
    const i_id = setInterval(() => {
      if (currentImage == (images.length - 1)) {
        // If we hit the cap (5)... Reset...
        setCurrentImage(0)
      } else {
        // Else... Tick along...
        setCurrentImage(currentImage => currentImage+1)
      }
    }, speed);
    return () => {
      clearInterval(i_id);
    }
  },[currentImage]);

  return(
    <div className="w-full h-full">
      {images.map((e, i) => {
        return (
          <div className={`block w-full h-full ${i == 0 ? 'relative' : 'absolute inset-0' } ${i == currentImage ? 'z-[10]' : 'z-[1] opacity-0' }`} ref={ref} key={i}>
            <Image
              fill
              quality={80}
              src={e}
              alt="Nottingham during the day"
              className="w-full h-full absolute inset-0 object-cover object-center scale-[1.05]"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </div>
        )
      })}
    </div>
  )
}