import Head from 'next/head';
import React from 'react';
import WordOfGodCard from '../components/WordOfGodCard';


class Home extends React.PureComponent<any, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {


        return <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="container">
                    <WordOfGodCard />
                </div>
            </main>


        </div>;
    }
};

export default Home;
