class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 10;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / (1000 * 60));
  }

  getSeconds() {
    return Math.floor((this.currentTime / 1000) % 60);
  }

  getMiliseconds() {
    return (this.currentTime % 1000) / 10;
  }

  twoDigitsNumber(number) {
    let returnString = '';
  
    if (number < 10) {
      returnString += '0';
    }

    return returnString + number;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    const min = this.twoDigitsNumber(this.getMinutes());
    const sec = this.twoDigitsNumber(this.getSeconds());
    const mil = this.twoDigitsNumber(this.getMiliseconds());

    return `${min}:${sec}:${mil}`;
  }
}
