// src/Home.tsx
import React from 'react';
// import { Helmet } from 'react-helmet';
import WordOfGodCard from './components/WordOfGodCard';
import './components/global.scss';

const Home: React.FC = () => {
    return (
      <div className="container-fluid">
          <div>
              <title>Lời Chúa - Word Of God</title>
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
              <link rel="icon" href="/favicon.ico" />
          </div>

          <main>
              <WordOfGodCard />
          </main>
      </div>
    );
};

export default Home;
