import { Parallax } from 'react-parallax';
import { useParallax } from 'react-scroll-parallax';




const ParallaxImage = ({image}: {image: string}) => {
  const { ref } = useParallax<HTMLDivElement>({ speed: -1 });
  return (
    <div id="section-4" className='' >
      {/* <Parallax bgImage={image} strength={300} className="parallax h-144" >
        <div className="absolute lg:left-80 left-2 top lg:top-72 bottom-24">
            <div className="quote-wrapper">
              <blockquote className="lg:w-[70%] w-full text-center text-2xl lg:text-5xl font-semibold text-white">
                Lorem ipsum dolor explicabo reprehenderit voluptas asperiores itaque possimus saepe quidem enim suscipit culpa.
              </blockquote>
            </div>
        </div>
      </Parallax>  */}
      <div ref={ref} className="my-thing relative">
      <img src={image} className='h-[800px] object-cover'/>
        <div className="absolute lg:left-80 left-2 top-72 lg:top-72 bottom-24">
          <div className="quote-wrapper">
            <blockquote className="lg:w-[70%] w-full text-center text-2xl lg:text-5xl font-semibold text-white">
              Lorem ipsum dolor explicabo reprehenderit voluptas asperiores itaque possimus saepe quidem enim suscipit culpa.
            </blockquote>
          </div>
        </div>
      </div>;
    </div>
  )
}

export default ParallaxImage