import React from 'react'
import heroImage from "@/assets/image/heroImage.jpeg";

const HeroBlob = () => {
  return (
    <div className=" lg:w-1/2    md:w-1/2   ">
      <div className=" flex items-center justify-center ">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="max-sm:w-96 sm:w-[24rem] md:w-[28rem] lg:w-[32rem]"
          id="heroBlob"
        >
          <defs>
            <clipPath id="blob-shape">
              <path
                fill="#FF0066"
                d="M39.8,-51.6C54.4,-44.3,70.8,-36.3,78.5,-23.1C86.1,-9.8,85,8.7,76.2,21.3C67.4,34,50.9,40.7,36.9,46.2C23,51.7,11.5,56.1,-3.1,60.4C-17.7,64.6,-35.4,68.8,-48.1,62.9C-60.9,57,-68.8,40.9,-74,24.2C-79.3,7.4,-82,-10,-76.9,-24.8C-71.8,-39.5,-58.9,-51.5,-44.8,-59C-30.7,-66.5,-15.4,-69.5,-1.4,-67.6C12.6,-65.7,25.3,-59,39.8,-51.6Z"
                transform="translate(100 90)"
              />
            </clipPath>
          </defs>

          <image
            href={heroImage}
            x="0"
            y="0"
            width="200"
            height="200"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#blob-shape)"
          />
        </svg>
      </div>
    </div>
  );
}

export default HeroBlob
