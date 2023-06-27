import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";


export const MarkdownComponent = ({ markdown }): JSX.Element => {
  return (<ReactMarkdown children={markdown} />);
};

export const getStaticProps = async () => {
    const markdown = await import('../../markdown/developing-studio-context.md');
    return { props: { markdown: markdown.default } };
};


export default MarkdownComponent;
