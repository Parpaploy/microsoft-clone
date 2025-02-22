import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IPcEmblaCaroucelProps } from "../../interfaces/card.interface.ts";
import { pcCaroucelImage } from "../../constants/web-content.tsx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiPlay } from "react-icons/hi2";
import { HiPause } from "react-icons/hi2";
import "./mobile-caroucel.css";

export function MobileEmblaCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false }),
  ]);

  const toggleAutoplay = () => {
    if (!emblaApi) return;
    const autoplayPlugin = emblaApi.plugins().autoplay;
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      autoplayPlugin?.play();
    } else {
      autoplayPlugin?.stop();
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <>
      <div className="embla flex items-center justify-center">
        <div className="embla__viewport w-full" ref={emblaRef}>
          <div className="embla__container">
            {pcCaroucelImage.map(
              (value: IPcEmblaCaroucelProps, index: number) => (
                <div
                  key={index}
                  className="embla__slide w-full flex justify-start items-center relative"
                  style={{
                    backgroundImage: `url(${value.image})`,
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundColor: `${value.bgCol}`,
                  }}
                >
                  {value.isCard === false ? (
                    <div
                      className="w-[37%] h-[full] flex flex-col justify-center items-start gap-[4%]"
                      style={{ paddingLeft: `8.5%` }}
                    >
                      <h1 className="font-medium text-[40px] text-white">
                        {value.title}
                      </h1>
                      <p className="text-[16px] text-white">
                        {value.description}
                      </p>
                      <button
                        style={{
                          padding: `8px 12px`,
                          borderRadius: `2px`,
                          backgroundColor: "#0167B8",
                          color: "white",
                        }}
                        className="text-[1.2vw] font-medium inPic-btn"
                      >
                        {value.btnName}
                      </button>
                    </div>
                  ) : (
                    <div
                      className="w-[37%] h-full flex justify-center items-center"
                      style={{ paddingLeft: `5.5%` }}
                    >
                      <div
                        className="bg-white w-full h-[80%] flex flex-col justify-center items-start gap-[4%]"
                        style={{
                          margin: `12% 0`,
                          padding: `12%`,
                          boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
                        }}
                      >
                        <h1 className="font-medium text-[40px] text-black">
                          {value.title}
                        </h1>
                        <p className="text-[16px] text-black">
                          {value.description}
                        </p>
                        <button
                          style={{
                            padding: `8px 12px`,
                            borderRadius: `2px`,
                            backgroundColor: "#0167B8",
                            color: "white",
                          }}
                          className="text-[1.2vw] font-medium inPic-btn"
                        >
                          {value.btnName}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="embla__buttons flex items-center justify-center gap-6">
        <button
          onClick={toggleAutoplay}
          className="text-black border-2 border-black bg-white transition-all hover:bg-black hover:text-white hover:cursor-pointer p-2 rounded-full flex items-center justify-center w-5 h-5"
        >
          {isPlaying ? (
            <HiPause
              size={14}
              className="text-black hover:text-white"
              stroke="none"
            />
          ) : (
            <HiPlay
              size={14}
              className="text-black hover:text-white"
              stroke="none"
            />
          )}
        </button>

        <button
          className="text-black back-btn hover:text-gray-600 transition-colors"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <IoIosArrowBack size={24} />
        </button>

        <div className="flex space-x-1 gap-8">
          {pcCaroucelImage.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                selectedIndex === index ? "bg-black" : "bg-white border"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>

        <button
          className="text-black next-btn hover:text-gray-600 transition-colors"
          onClick={() => emblaApi?.scrollNext()}
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </>
  );
}
