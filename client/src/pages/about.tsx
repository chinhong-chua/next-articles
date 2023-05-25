import { FC } from "react";
// import aboutImage from "../images/about.jpg";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold mb-6">About Us</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mr-5 pr-3">
          <p className="text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            ullamcorper, lectus ac dictum eleifend, lectus arcu consectetur mi,
            ac eleifend lectus justo a metus. Vestibulum mattis mauris a metus
            rutrum consequat. Curabitur pretium consequat justo, vel hendrerit
            erat pellentesque et. Mauris ultrices cursus sem, at fermentum orci
            dignissim ut. Nulla ultricies auctor erat id pellentesque.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Suspendisse vulputate efficitur augue, vitae varius massa aliquet
            eget. Donec aliquam neque sed ultricies feugiat. Phasellus finibus,
            elit vitae convallis gravida, erat lectus consequat velit, sed
            faucibus dolor turpis eget arcu. Nunc dapibus placerat ligula eget
            vestibulum. Sed at gravida risus. Sed commodo odio a iaculis
            fermentum.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={`https://picsum.photos/seed/picsum/400`}
            alt="About Us"
            className="rounded-md w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
