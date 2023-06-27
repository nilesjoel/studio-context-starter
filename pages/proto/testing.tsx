import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Image from 'next/image'
 

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  background-color: #ffffff;

  img {
    width: 100%;
    height: auto;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const Features = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
  }
`;

const CTA = styled.div<{ href: string }>`
  color: #ffffff;
  background-color: #000000;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 2rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #000080;
  }
`;

const StyledImage = styled.div`
position:absolute;
background:green;
z-index:-1;
`

const App = () => {
  const heroData = {
    title: "Focus Daily: The Journaling Website That Helps You See Your Thoughts More Clearly",
    description: "Focus Daily is a journaling website that uses thought mapping tools, conscious thought notifications, and thought process timelines to help you see your thoughts more clearly. With Focus Daily, you can track your thoughts over time, identify patterns, and gain insights into your own mind.",
    image: "https://res.cloudinary.com/studio-symmetries/image/upload/v1683573152/Qmcg_Tgc4a_Xyf_CW_9k_Lc_X_Fbaxyd2q_Ho_WY_7dd_D7_H_Pdnj_U9rz_R_11e107f3fc.png"
  };

  const featuresData = [
    {
      title: "Thought Mapping Tools",
      description: "Focus Daily's thought mapping tools help you visualize your thoughts and see the connections between them. This can help you to identify patterns in your thinking and to gain insights into your own mind."
    },
    {
      title: "Conscious Thought Notifications",
      description: "Focus Daily's conscious thought notifications help you to become more aware of your thoughts. When you receive a notification, you can take a moment to reflect on your thought and to consider its impact on your life."
    },
    {
      title: "Thought Process Timelines",
      description: "Focus Daily's thought process timelines help you to track your thoughts over time. This can help you to see how your thoughts change over time and to identify patterns in your thinking."
    }
  ];

  const ctaData = {
    text: "Discover the nature of your reality",
    link: "https://focusdaily.com/"
  };

  return (
    <div>
      <Head>
        <title>Focus Daily</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
      <StyledImage><Image 
      src={heroData.image}
      width={200}
      height={200}
      // fill={true}
      alt={heroData.title}
    /></StyledImage>
        {/* <img src={heroData.image} alt={heroData.title} /> */}
        <h1>{heroData.title}</h1>
        <p>{heroData.description}</p><CTA href={ctaData.link}>
        {ctaData.text}
      </CTA>
      </Hero>
      <Features>
        {featuresData.map((feature, index) => (
          <li key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </Features>
      
    </div>
  );
};

export default App;
