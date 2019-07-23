import React, { useState } from "react";
import "./App.css";
import marked from "marked";
import MarkedInputField from "./components/MarkedInputField";
import MarkedPreviewField from "./components/MarkedPreviewField";

const markupElements = {
  heading: "# A Heading!",
  subHeading: "## A Sub-heading",
  link: "[A link](http://www.freecodecamp.com)",
  inlineCode: "An inline code: `<inline></inline>`",
  codeBlock: `
  ~~~~
  function test(){
    console.log('A code block')
  } 
  ~~~~
  `,
  listItem: `
  1. A list-item
  2. Another list item
  `,
  blockQuote: "> A blockquote",
  boldText: "**Some bold text**",
  image: "![React Logo](https://bit.ly/2O2YQWO)"
};

const preloadedMarkup = `
  ${markupElements.heading}
  ${markupElements.subHeading}
  ${markupElements.link}
  ${markupElements.inlineCode}
  ${markupElements.codeBlock}
  ${markupElements.listItem}
  ${markupElements.blockQuote}
  ${markupElements.boldText}
  ${markupElements.image}
`;

function App() {
  const [markup, setMarkup] = useState(preloadedMarkup);

  const handleUserInput = (e) => {
    setMarkup(e.target.value);
    parseMarkup(markup);
  };

  const parseMarkup = () => {
    let html = marked(markup, {
      breaks: true
    });
    return { __html: html };
  };

  return (
    <div className="App">
      <h1 className="title">Markdown Previewer</h1>
      <div className="content-wrapper">
        <MarkedInputField
          handleUserInput={handleUserInput}
          preloadedMarkup={preloadedMarkup}
        />
        <MarkedPreviewField parseMarkup={parseMarkup} />
      </div>
    </div>
  );
}

export default App;
