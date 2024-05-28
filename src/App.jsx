import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import Carousel from "./Carousel";
function App() {
  return <main>
    <Carousel shortList={data}/>
  </main>;
}

export default App;
