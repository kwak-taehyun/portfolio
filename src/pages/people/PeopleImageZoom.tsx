import React, {useRef} from 'react';
import {TransformWrapper, TransformComponent, ReactZoomPanPinchRef, MiniMap} from 'react-zoom-pan-pinch';

type ZoomTypes = {
  zoomIn: any;
  zoomOut: any;
  resetTransform: any;
}

const Controls = ({zoomIn, zoomOut, resetTransform}: ZoomTypes) => (
  <div className="viewer_control">
    <button onClick={() => zoomIn()}>+</button>
    <button onClick={() => zoomOut()}>-</button>
    <button onClick={() => resetTransform()}>x</button>
  </div>
);

const PeopleImageZoom = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  const element = (<div className="map_img"><img src="/images/etc/img_camping_map.png" alt="" id="imgExample" /></div>);

  // const zoomToImage = () => {
  //   if(transformComponentRef.current) {
  //     const {zoomToElement} = transformComponentRef.current;
  //     zoomToElement("imgExample");
  //   }
  // };
  return (
    <TransformWrapper initialScale={1.5} ref={transformComponentRef}>
      {(utils) => (
        <React.Fragment>
          <Controls {...utils} />
          <div className="mini_map">
            <MiniMap>{element}</MiniMap>
          </div>
          <TransformComponent>
            {element}
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};

export default PeopleImageZoom;