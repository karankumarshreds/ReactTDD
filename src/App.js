import React from 'react';
// components
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Headline title="Random Title" description="Random description" />
    </React.Fragment>
  );
};

export default App;
