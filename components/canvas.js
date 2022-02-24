import {Path, Point} from "paper/dist/paper-core";
import styled from "styled-components";

const Canvas = () => {
  const path = new Path();
  path.strokeColor = "#f5f5f5";
  path.add(new Point(0, 0), new Point(100, 50));

  return <CanvasContainer id="testCanvas" resize />;
};

export default Canvas;

const CanvasContainer = styled.canvas`
  &[resize] {
    width: 100%;
    height: 100%;
  }
`;
