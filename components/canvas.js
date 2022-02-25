import Paper from "paper";
import {useEffect, useRef} from "react";
import styled from "styled-components";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const segmentAmount = 5;
  const segmentHeight = 10;
  const timeMultiplier = 3;

  useEffect(() => {
    const canvas = canvasRef.current;

    Paper.setup(canvas);
    const path = new Paper.Path({
      strokeColor: "#e51062",
      fillColor: "#e51062",
    });

    for (let i = 0; i <= segmentAmount; i++) {
      path.add(new Paper.Point((i / segmentAmount) * window.innerWidth, 100));
    }
    path.add(new Paper.Point(1000, 250));
    path.add(new Paper.Point(1000, 1000));
    path.add(new Paper.Point(0, 1000));

    path.smooth();
    path.selected = true;

    Paper.view.onFrame = (event) => {
      for (let i = 0; i <= segmentAmount; i++) {
        let segment = path.segments[i];
        let sinus = Math.sin(event.time * timeMultiplier + i);
        segment.point.y = sinus * segmentHeight + 100;
      }
    };
  }, []);

  return <MyCanvas ref={canvasRef} {...props} resize />;
};

export default Canvas;

const MyCanvas = styled.canvas`
  height: 100%;
  width: 100%;
`;
