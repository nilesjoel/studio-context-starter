

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20rem;
  width: 100%;
  background-color: #ef00ff;
`;

const LowerBackground = styled.div<{height: number}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  content: "tone";
  height: ${(props => props.height)}px;
  width: 100%;
  background-color: #422853;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  position: absolute;
  top: 15rem;
  bottom: 0;
  left: 25%;
  right: 0;
  height: 60rem;
  width: 50%;
  margin: 0;
  padding: 0;
  background-color: #7574a1;
`;

const OverlapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${(props => screen.availHeight)}px;
  width: 100vw;
  background-color: #ffffff;
`

function getCurrentDimension(){
  return {
      width: window.innerWidth,
      height: window.innerHeight
  }
}

const App = () => {


  const [element, setElement] = useState(null);
  const [height, setHeight] = useState(window.innerHeight);
  const [backgroundHeight, setBackgroundHeight] = useState(0);

  const ref = useRef(null);
  useEffect(() => {



    var body = document.body,
    html = document.documentElement;
    
  var height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );
  console.log("body.scrollHeight", body.scrollHeight, 
              "body.offsetHeight", body.offsetHeight, 
              "html.clientHeight", html.clientHeight, 
              "html.scrollHeight", html.scrollHeight, 
              "html.offsetHeight", html.offsetHeight,);
    setElement(ref.current);  
    setBackgroundHeight(height);
    setHeight(window.innerHeight);
    window.addEventListener('resize', () => {
      // setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      setBackgroundHeight(height);
    });
  }, []);

 
    return (
        <OverlapContainer>
            <Top >{JSON.stringify("")}</Top>
            <LowerBackground height={backgroundHeight} ref={ref}/>
            <Center>
                <h1>BackgroundHeight: {backgroundHeight} Overlap:height/{height} Ref.current.clientHeight:{ref?.current?.clientHeight}</h1>
                <p>Overlap{JSON.stringify(getCurrentDimension())}</p>
            </Center>
        </OverlapContainer>
    );
}




export default App;