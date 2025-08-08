import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

import { CustomImage } from "@/apps/ui/common-components/CustomImage";
import { ImageZoom } from "@/components/ui/kibo-ui/image-zoom";

import { facilities } from "./facilities";

export const Facility_Mobile = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      AutoScroll({
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );
  const [emblaRef2] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      AutoScroll({
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const images = facilities;
  const topImages = images.slice(0, 4);
  const bottomImages = images.slice(4);

  return (
    <div className="flex flex-col gap-15 overflow-hidden">
      <div className="embla w-full">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {topImages.map((src, index) => (
              <div
                key={index}
                className="embla__slide min-w-0 flex-[0_0_auto] pl-4"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <ImageZoom className="cursor-pointer">
                    <div className="aspect-[1.2] w-84 overflow-hidden rounded-lg">
                      <CustomImage src={src} alt={`Facility ${index + 1}`} />
                    </div>
                  </ImageZoom>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla w-full">
        <div className="embla__viewport" ref={emblaRef2}>
          <div className="embla__container flex">
            {bottomImages.map((src, index) => (
              <div
                key={index}
                className="embla__slide min-w-0 flex-[0_0_auto] pl-4"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <ImageZoom>
                    <div className="aspect-[1.2] w-84 overflow-hidden rounded-lg">
                      <CustomImage src={src} alt={`Facility ${index + 1}`} />
                    </div>
                  </ImageZoom>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
