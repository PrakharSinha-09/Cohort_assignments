import React, { useState } from 'react';
import {loremIpsum} from 'lorem-ipsum';

function ParagraphGenerator() {
  const [numSentences, setNumSentences] = useState(1);
  const [generatedParagraph, setGeneratedParagraph] = useState('');

  const generateRandomParagraph = () => {
    const randomParagraph = loremIpsum({
      count: numSentences,
      units: 'sentences',
      sentenceLowerBound: 5,
      sentenceUpperBound: 15,
    });

    setGeneratedParagraph(randomParagraph);
  };

  return (
    <div className="container mx-auto p-8">
      <label className="block mb-4">
        Enter the number of sentences:
        <input
          type="number"
          value={numSentences}
          onChange={(e) => setNumSentences(e.target.value)}
          className="border p-2"
        />
      </label>
      <button onClick={generateRandomParagraph} className="bg-blue-500 text-white px-4 py-2">
        Generate Random Paragraph
      </button>
      <div className="mt-8">
        <p className="text-lg">{generatedParagraph}</p>
      </div>
    </div>
  );
}

export default ParagraphGenerator;
