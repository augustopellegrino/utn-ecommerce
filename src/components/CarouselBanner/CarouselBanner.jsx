import { useEffect, useState, useCallback, useMemo } from 'react'
import WindowSize from '../../utils/WindowSize';
import { BREAKPOINTS } from '../../utils/Breackpoints';
import { carouselImagesLarge, carouselImagesSmall } from './CarouselBannerImages';

import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import './CarouselBanner.css'

function CarouselBanner() {

  const [actualImage, setActualImage] = useState(0)
  const windowSize = WindowSize();

  const getImagesToRender = () => {
    return windowSize.width > BREAKPOINTS.md ? carouselImagesLarge : carouselImagesSmall;
  };

  const carouselId = useMemo(() => {
    return windowSize.width > BREAKPOINTS.md ? 'carousel-large' : 'carousel-small';
  }, [windowSize.width]);

  const imagesToRender = getImagesToRender();

  const nextImage = useCallback(() => {
    setActualImage((prevImage) => (prevImage === imagesToRender.length - 1 ? 0 : prevImage + 1))
  }, [imagesToRender.length]);

  const previousImage = useCallback(() => {
    setActualImage((prevImage) => (prevImage === 0 ? imagesToRender.length - 1 : prevImage - 1));
  }, [imagesToRender.length]);

  useEffect(() => {
    const intervalId = setInterval(nextImage, 4500);
    return () => clearInterval(intervalId);
  }, [nextImage]);

  return (
    <>
      {imagesToRender && (
        <div id={carouselId}>
          <button onClick={previousImage}><MdOutlineArrowBackIos /></button>
          {imagesToRender.map((imagen, index) => (
            <img
              key={index}
              src={imagen}
              alt="image"
              style={{ display: actualImage === index ? 'block' : 'none' }}
            />
          ))}
          <button onClick={nextImage}><MdOutlineArrowForwardIos /></button>
        </div>
      )}
    </>
  );
}

export default CarouselBanner;