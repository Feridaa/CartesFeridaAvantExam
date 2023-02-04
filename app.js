import { Deck } from "./Deck.js";
// ATTENTIONNNN SI CLASSE EXPORTER AVEC   : export default Card;
//PAS METTRE DE MOUSTACHE LORS DE L'IMPORT
import Card from "./Card.js";

export const options = {
  values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
  suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
};

const deck = new Deck(options);
const carte = new Card(5, "Hearts");

console.log(deck);
console.log(carte);

deck.createFullDeck();
deck.shuffle();
deck.displayCards();
