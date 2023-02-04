import { options } from "./app";
import Card from "./Card.js";
import shuffle from "./node_modules/lodash-es/shuffle";

export class Deck {
  //création tab card
  #cards = [];

  //passe option aux constructeur
  constructor(options) {
    this.values = options.values;
    this.suits = options.suits;
  }

  // création de la méthode
  createFullDeck = () => {
    // pour chaque valeur qui se trouve dans l'objet option ...
    this.values.forEach((v) => {
      // et pour chaque suite qui se trouve dans l'objet option...
      this.suits.forEach((s) => {
        // dans ce tableau cards poush la nouvelle carte créer
        this.#cards.push(new Card(v, s));
      });
    });
  };

  shuffle = () => {
    this.#cards = shuffle(this.#cards);
  };

  displayCards = () => {
    this.#cards.forEach((element) => {
      element.display();
    });
  };
}
