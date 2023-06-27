import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../components/sharedstyles'
import Cards from '../components/cards'

import { StudioContextDisplay, useStudioContext } from '@studiosymmetries/studio-design-system'
import styled from 'styled-components';



const CodeDescription = styled.div`
// color: ${({ theme }) => theme.colors.text};
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
  margin: 1rem 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const CodeContainer = styled.div`
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 4px;
  // padding: 10px;
  overflow: auto;
  // max-width: 35rem;
  max-width:90%;
  max-height: 40rem; /* Adjust this value as needed */
`;



const CodePre = styled.pre`
  margin: 0;
  padding: 0;
`;

const CodeBlock = styled.code`
  display: block;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  // background: #f1f1f1; 
  color: #000;
`;





export default function Home() {

  const studioContext = useStudioContext();
  // const studioUpdateContext = useStudioContextUpdate();

  // const { setDisplayMetadata } = studioUpdateContext;
  const {
    loading,
    brand,
    // metadata,
    // footer,
    // header,
    site,
    debug
  } = studioContext;


  return (<><Main>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="A description of a Studio Starter Context" />
      <link rel="icon" href="/favicon.ico" />
    </Head>


    <Title>
      Studio Starter : Context - {brand}
    </Title>
    <Cards/>
    <CodeDescription id="desCon">
      ContextProviders
      <CodeTag>StudioContextProvider</CodeTag>
      <CodeTag>ProfileContextProvider</CodeTag> are imported from
      <CodeTag>@studiosymmetries/studio-design-system.</CodeTag>
    </CodeDescription>
    <CodeDescription>
      The Studio App also makes use of <CodeTag>useStudioContext</CodeTag> <CodeTag>useProfileContext</CodeTag> <CodeTag>useStudioContextUpdate</CodeTag> from <CodeTag>@studiosymmetries/studio-design-system</CodeTag>

    </CodeDescription>
    <CodeDescription>
      The root of the application is <CodeTag>StudioContextApp</CodeTag> and is imported from
      <CodeTag>components/StudioContextApp.tsx</CodeTag>  This is the starting point for implementing the Studio Context.
    </CodeDescription>

    <CodeContainer>
      <CodePre>
        <CodeBlock>
          {JSON.stringify({ studioContext }, null, 2)}
        </CodeBlock>
      </CodePre>
    </CodeContainer>

  </Main>
  </>
  )
}
