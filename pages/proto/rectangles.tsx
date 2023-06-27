import { FlexCenter, useStudioContext } from "@studiosymmetries/studio-design-system";
import React from "react";
import styled from "styled-components";
// import { StyledFlexColumn, StyledFlexRow } from "../../components/studiostyles";

interface TriangleProps {
  top: number;
  left: number;
  rotate: number;
  position: boolean;
}

const Triangle = styled.div<TriangleProps>`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid green;
  z-index: 100;

  ${({ position }) => position? `position: fixed;` : ''}

  ${({ position, rotate }) => position? `rotate: ${rotate}deg;` : ''}
  ${({ position, top }) => position? `top: ${top}px;` : ''}
  ${({ position, left }) => position? `left: ${left}px;` : ''}
`;
const TriangleCursor = styled(Triangle)`
z-index: 99;
border-left: 50px solid red;
border-right: 50px solid red;
// border-bottom: 100px solid red;
`;

const StyledRetangleControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const App = () => {
  
  const studioContext = useStudioContext();
  
  const [x, setX] = React.useState(400);
  const [y, setY] = React.useState(100);
  // Rotation is in degrees
  const [degrees, setDegrees] = React.useState(0);
  // Side length is
  const [sideLength, setSideLength] = React.useState(100);
const [triangleJSON, setTriangleJSON] = React.useState([{x: 0, y: 0, sideLength: 100, rotate: 0}]); // [{x: 0, y: 0, sideLength: 100, rotate: 0}
  const [triangles, setTriangles] = React.useState([]); // [{x: 0, y: 0, sideLength: 100}
  const drawEquilateralTriangle = () => {
    triangles.push(<Triangle top={y} left={x} position={true} rotate={degrees}>
      {x}, {y}, {sideLength} {degrees % 360}
    </Triangle>)
    setTriangles([...triangles])
   
    triangleJSON.push({x, y, sideLength, rotate: degrees});
    setTriangleJSON([...triangleJSON]);
    return ;
  }
  const calcRotateLeft = (rotateDegrees) => {
    let rotated = rotateDegrees % 360 - 45;
    if((rotated) < 0){ 
      rotated = rotated + 360;
    }
    // console.log(rotateDegrees, rotateDegrees % 360);
    return rotated % 360;
};
const calcRotateRight = (rotateDegrees) => {
  return (rotateDegrees + 45) % 360;
};
  
  const drawCursorBox = () => {
    return <TriangleCursor top={y} left={x} rotate={degrees} position={true} >
      {x}, {y}, {sideLength} {degrees % 360}
      </TriangleCursor>;
  };

  const logAllTriangles = () => {
    console.log(triangleJSON);
  }

  return (<>
  <StyledRetangleControls>{JSON.stringify(studioContext)}
    <div>{x}, {y}, {sideLength} {degrees % 360}</div>
    <div><pre>{JSON.stringify(triangleJSON, undefined, 2)}</pre></div>
  <button onClick={() => { setX(x + sideLength)}}>Next Triangle</button>
      <button onClick={() => { setX(x - sideLength)}}>Prev Triangle</button>
      <button onClick={() => setY(y + sideLength)}>Next Row</button>
      <button onClick={() => setY(y - sideLength)}>Prev Row</button>
      
      <button onClick={() => setDegrees(calcRotateLeft(degrees))}>Rotate Left</button>
      <button onClick={() => setDegrees(calcRotateRight(degrees))}>Rotate Right</button>
      <button onClick={() => setSideLength(sideLength + 10)}>Increase Side Length</button>
      <button onClick={() => drawEquilateralTriangle()}>Draw Next</button>
      <button onClick={() => logAllTriangles()}>Log Rectangles</button>
      
      </StyledRetangleControls>  
    <div>
      
      {/* {drawEquilateralTriangle()} */}
      {triangles}
      {drawCursorBox()}
    </div></>
  );
};

export default App;
