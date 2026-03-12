import {useMemo, forwardRef} from 'react';
import Slider, {Settings} from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps {
  children: React.ReactNode;
  className?: string,
  autoplay?: boolean | number;
  speed?: number;
  loop?: boolean;
  changeSlide: (index: number) => void;
};

// 부모 컴포넌트에서 자식 컴포넌트의 DOM 요소에 접근할 때는 forwardRef를 사용해서 접근해야 한다. (props, ref) 형태로 ref 전달
const Slick = ({children, className, autoplay = true, speed = 300, loop = true, changeSlide}: SliderProps, ref: any) => {
  const settings = useMemo<Settings>(() => ({
    dots: false,
    infinite: loop,
    speed: speed,
    slidesToShow: 1,
    autoplay: Boolean(autoplay),
    autoplaySpeed: typeof autoplay === 'boolean' ? 4000 : autoplay,
    afterChange: (newIndex) => {
      changeSlide(Number(newIndex));
    },
    arrows: false,
  }), [autoplay, loop, speed]);

  return (
    <div className={className}>
      <Slider {...settings} ref={ref}>{children}</Slider>
    </div>
  );
}

export default forwardRef(Slick);