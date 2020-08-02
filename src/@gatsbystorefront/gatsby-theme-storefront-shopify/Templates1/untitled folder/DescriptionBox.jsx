import React from 'react';
import { Text } from 'rebass';
import ReactMarkdown from 'react-markdown/with-html';

const DescriptionBox = props => {
  return (
    <div style={{border:'2px solid red'}}>
    <Text>
      <ReactMarkdown {...props} />
    </Text>
    </div>
  );
};

export default DescriptionBox;
