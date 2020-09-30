import React from 'react';
import Palestrantes from '../components/Palestrantes'
import HeroBlock from '../components/HeroBlock'
import AboutBlock from '../components/AboutBlock'
import CompartilheBlock from '../components/CompartilheBlock'

function Home() {
  return (
    <div>
      <HeroBlock />
      <Palestrantes />
      <AboutBlock />
      <CompartilheBlock />
    </div>
  );
}

export default Home;
