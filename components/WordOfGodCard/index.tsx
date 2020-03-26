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
            verse: splits[0].trim(),
            author: splits[1].trim()
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

    render() {

        const {author, verse} = this.state;

        return (
            <div className="word-of-god-card row background-container d-flex justify-content-center align-items-center">
                <div className="col-12" onClick={this.getRandomVerse}>
                    <div className="text-center word-of-god animated">
                        <div className="author">{author}</div>
                        <div className="verse">{verse}</div>
                    </div>
                </div>
            </div>
        );
    }

}

export default WordOfGodCard;
