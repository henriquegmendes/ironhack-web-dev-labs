class MemoryGame {
  constructor(cards){
    // Propriedades que o construtor possui (elementos que são utilizados ou que interagem dentro do jogo)
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  // Métodos da classe MemoryGame (regras do jogo - verificações que o jogo faz a cada rodada)

  // Embaralhar Cartas
  shuffleCards() {
    const min = 0;
    const max = this.cards.length;
    let randomNumber;

    this.cards.forEach(() => {
      randomNumber = Math.floor(Math.random() * (max - min)) + min;

      const selectedCard = this.cards[randomNumber];

      this.cards.splice(randomNumber, 1);
      this.cards.push(selectedCard)
    });
  }

  checkIfPair(cardName1, cardName2) {
    this.pairsClicked += 1;
    
    if (cardName1 === cardName2) {
      this.pairsGuessed += 1;

      return true;
    }

    return false;
  }

  isFinished() {
    return this.cards.length / 2 === this.pairsGuessed;
  }
}