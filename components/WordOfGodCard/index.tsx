import React from 'react';
import data from './words-of-god.json';
import './wordOfGod.scss';

type TWordOfGodCardState = {
    verse: string,
    author: string,
    backgroundStyle: string
}

class WordOfGodCard extends React.PureComponent<any, TWordOfGodCardState> {
    constructor(props, context) {
        super(props, context);

        this.state = {
            verse: '',
            author: '',
            backgroundStyle: ''
        };

        this._bindMethods();

    }

    private _bindMethods() {
        this.getRandomVerse = this.getRandomVerse.bind(this);
    }

    getRandomVerse() {
        const verses: string[] = data.verses;
        const numberOfVerses = verses.length;
        const randomNumber = this.generateRandomNumber(0, numberOfVerses);
        const splits = verses[randomNumber].split('-');

        this.setState({
            verse: splits[0]?.trim(),
            author: splits[1]?.trim()
        });
    }

    getRandomBackground() {
        const randomNumber = this.generateRandomNumber(1, 8);
        return `/assets/images/${randomNumber}.jpg`;
    }

    setRandomBackground() {
        const backgroundURL = this.getRandomBackground();
        // this.backgroundStyle = {'backgroundImage': `url(${backgroundURL})`};
    }

    generateRandomNumber(min, max): number {
        return Math.round((Math.random() * (max - min) + min));
    }

    componentDidMount(): void {
        this.getRandomVerse();
    }

    getCurrentTime(): string {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        return `${hour}:${minute}`;
    }

    render() {

        const {author, verse} = this.state;
        const currentTime: string = this.getCurrentTime();


        return (

            <div className="page word-of-god-card row background-container d-flex justify-content-center align-items-center"
                 onClick={this.getRandomVerse}>
                <div className="col-1" />
                <div className="col-10">
                    <div key={author} className="text-center word-of-god">
                        <div className="verse animated fadeInLeft mb-5">{verse}</div>
                        <div className="author animated fadeInLeft">{author}</div>
                    </div>
                    <div className="current-time text-center">
                        {currentTime}
                    </div>
                </div>
                <div className="col-1" />
            </div>
        );
    }

}

export default WordOfGodCard;
