import { LandingPage } from "@/apps/ui/pages/LandingPage";

export default function Home() {
  // const [emblaRef] = useEmblaCarousel(
  //   {
  //     // loop: true,
  //     // align: "start",
  //     // slidesToScroll: 1,
  //     // containScroll: "trimSnaps",
  //   },
  //   [],
  // );

  // const test = (
  //   <div>
  //     <div className="embla overflow-hidden">
  //       <div className="embla__viewport" ref={emblaRef}>
  //         <div className="embla__container flex gap-4">
  //           {Array.from({ length: 30 }).map((_, index) => (
  //             <div
  //               key={index}
  //               className="h-[400px] w-[400px] min-w-0 flex-[0_0_100%] bg-red-500"
  //             ></div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // return test;

  return <LandingPage />;
}
