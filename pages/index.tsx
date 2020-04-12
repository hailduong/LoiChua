import Head from 'next/head';
import React from 'react';
import WordOfGodCard from '../components/WordOfGodCard';
import '../components/global.scss';

class Home extends React.PureComponent<any, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {


        return <div className="container">
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <WordOfGodCard />
            </main>

        </div>;
    }
};

export default Home;
