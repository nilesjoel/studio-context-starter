import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
  Content,
  Segment,
} from '../../components/sharedstyles'
import Cards from '../../components/cards'
import ReactMarkdown from 'react-markdown';

export default function Home({ markdown }) {
  return (
    <Container>
      <Head>
        <title>Studio Context Starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head><Main>

        <Title>
          Building Studio Context
        </Title>

        <Description>
          Import useStudioContext, useProfileContext, and useStudioContextUpdate.
          <CodeTag>pages/index.tsx</CodeTag>

        </Description>


        <Segment>
          <ReactMarkdown children={markdown} />
        </Segment>
        <Cards />
      </Main>
    </Container>
  )
}


export const getStaticProps = async () => {
  const markdown = await import('../../markdown/developing-studio-context.md');
  return { props: { markdown: markdown.default } };
};
