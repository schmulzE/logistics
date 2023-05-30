import React from 'react';
import { Parallax } from 'react-parallax';



const ParallaxImage = ({image}: {image: string}) => {
  return (
    <div id="section-4" className='h-[800px]' >
      <Parallax bgImage={image} strength={300} className="h-[800px] relative">
        <div className="absolute left-80 top-72">
          <div className="quote-wrapper ">
            <blockquote className="w-[70%] text-center text-5xl font-semibold text-white">
              Lorem ipsum dolor explicabo reprehenderit voluptas asperiores itaque possimus saepe quidem enim suscipit culpa.
            </blockquote>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default ParallaxImage