import {Component, OnInit} from '@angular/core';

const data: any = require('../../data/words-of-god.json');


@Component({
  selector: 'gw-single-god-words',
  templateUrl: './single-god-words.component.html',
  styleUrls: ['./single-god-words.component.scss']
})
export class SingleGodWordsComponent implements OnInit {
  verse: string;
  author: string;
  backgroundStyle: any;
  isLoading: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.setRandomBackground();
    this.getRandomVerse();
  }

  getRandomVerse() {
    const verses: string[] = data.verses;
    const numberOfVerses = verses.length;
    const randomNumber = this.generateRandomNumber(0, numberOfVerses);
    const splits = verses[randomNumber].split('-');
    this.verse = splits[0].trim();
    this.author = splits[1].trim();
  }

  getRandomBackground() {
    const randomNumber = this.generateRandomNumber(1, 8);
    return `/assets/images/${randomNumber}.jpg`;
  }

  setRandomBackground() {
    const backgroundURL = this.getRandomBackground();
    this.backgroundStyle = {'backgroundImage': `url(${backgroundURL})`};
  }

  generateRandomNumber(min, max): number {
    return Math.round((Math.random() * (max - min) + min));
  }
}
