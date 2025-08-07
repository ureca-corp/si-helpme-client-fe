import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { CustomImage } from "@/apps/ui/common-components/CustomImage";
import { ImageZoom } from "@/components/ui/kibo-ui/image-zoom";

import { facilities } from "./facilities";

export const Facility_Desktop = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      // align: "start",
      // slidesToScroll: 1,
      // containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const images = facilities;

  return (
    <div className="embla w-full overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="embla__slide min-w-0 flex-[0_0_auto] pl-4"
            >
              <div className="relative overflow-hidden rounded-lg">
                <ImageZoom>
                  <div className="aspect-[1.2] w-128 overflow-hidden rounded-lg">
                    <CustomImage src={src} alt={`Facility ${index + 1}`} />
                  </div>
                </ImageZoom>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="embla overflow-hidden" ref={emblaRef}>
  //     <div className="embla__viewport">
  //       {/* <div className="embla__container flex gap-4">
  //         {images.map((src, index) => (
  //           <div key={index} className="embla__slide min-w-0 flex-[0_0_auto]">
  //             <div className="relative overflow-hidden rounded-lg">
  //               <ImageZoom>
  //                 <div className="aspect-[1.2] w-128 overflow-hidden rounded-lg">
  //                   <CustomImage src={src} alt={`Facility ${index + 1}`} />
  //                 </div>
  //               </ImageZoom>
  //             </div>
  //           </div>
  //         ))}
  //       </div> */}

  //       <div className="embla__container flex gap-4">
  //         {images.map((src, index) => (
  //           <div
  //             key={index}
  //             className="h-[400px] min-w-0 flex-[0_0_100%] bg-red-500"
  //           ></div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
};
