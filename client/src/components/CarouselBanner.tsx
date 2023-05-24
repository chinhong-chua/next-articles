import { FunctionComponent, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This is important for styling

const CarouselBanner: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState<any>(null);
  useEffect(() => {
    fetch("https://picsum.photos/1920/800/?blur").then((res) => {
      setImgUrl(res.url);
      console.log(res)
    //   setIsLoading(false);
      setTimeout(() => setIsLoading(false), 2000);
    });
    // setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center border-s-slate-700 border-red-100 border-4">
          <h2>Loading Banners</h2>
        </div>
      )}
      {!isLoading && (
        <div className="relative pt-6 pb-20 px-3 sm:px-6 lg:pt-4 lg:pb-28 lg:px-3 ">
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {/* <div>
            <img src="https://picsum.photos/1920/800/?blur" />
            <p className="legend">Banner 1</p>
          </div>
          <div>
            <img src="https://picsum.photos/1920/800/?blur" />
            <p className="legend">Banner 2</p>
          </div>
          <div>
            <img src="https://picsum.photos/1920/800/?blur" />
            <p className="legend">Banner 3</p>
          </div> */}
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <div key={idx} className="relative group z-0">
                  <img src={imgUrl} alt={`Banner ${idx + 1}`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-slate-400 hover:bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
                      onClick={() =>
                        console.log(`Explore more: Banner ${idx + 1}`)
                      }
                    >
                      Explore More
                    </button>
                  </div>
                </div>
              ))}
          </Carousel>

          {/* <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          className="carousel-banner"
        >
          <div className="h-60 md:h-96">
            <img
              className="object-cover w-full h-full"
              src="https://via.placeholder.com/1920x600"
              alt="Banner 1"
            />
          </div>
          <div className="h-60 md:h-96">
            <img
              className="object-cover w-full h-full"
              src="https://via.placeholder.com/1920x600"
              alt="Banner 2"
            />
          </div>
          <div className="h-60 md:h-96">
            <img
              className="object-cover w-full h-full"
              src="https://via.placeholder.com/1920x600"
              alt="Banner 3"
            />
          </div>
        </Carousel> */}
        </div>
      )}
    </>
  );
};
export default CarouselBanner;
