/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
class Game {
  constructor(
    canvas, context, field, player, obstacleConstructor,
  ) {
    this.canvas = canvas;
    this.context = context;
    this.field = field;
    this.player = player;
    this.ObstacleConstructor = obstacleConstructor;
    this.animationId = 0;
    this.obstacles = [];
    this.fieldSpeed = 2;
    this.newObstacleRateFPS = 120;
    this.carSpeed = {
      initialSpeed: 0,
      speedIncrement: 1.2,
    };
    this.frames = 0;
    this.isGameOver = false;
    this.score = {
      points: 0,
      pointsIncrementFPS: 30,
      htmlElement: document.querySelector('#game-score'),
    };

    this.context.font = '40px Comic Sans';
  }

  configureKeyboardControls() {
    document.onkeydown = (event) => {
      if (!this.isGameOver) {
        this.carSpeed.initialSpeed += this.carSpeed.speedIncrement;

        this.player.move(event.keyCode, this.carSpeed.initialSpeed);
      }
    };

    document.onkeyup = () => {
      this.carSpeed.initialSpeed = 0;
    };
  }

  startGame() {
    this.clearField();

    this.field.drawField();
    this.field.move(this.fieldSpeed);

    this.player.drawPlayer();

    this.createObstacles();
    this.moveObstacles();
    this.checkClearObstacles();

    this.checkCollision();

    this.updateScore();

    this.frames += 1;

    if (this.isGameOver) {
      window.cancelAnimationFrame(this.animationId);

      this.showFinalGameStats();
    } else {
      this.animationId = window.requestAnimationFrame(() => this.startGame());
    }
  }

  clearField() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  createObstacles() {
    if (this.frames % this.newObstacleRateFPS === 0) {
      const newObstacle = this.generateRandomObstacle();

      this.obstacles.push(newObstacle);
    }
  }

  moveObstacles() {
    this.obstacles.forEach((obstacle) => {
      obstacle.drawObstacle();
      obstacle.move(this.fieldSpeed);
    });
  }

  checkClearObstacles() {
    this.obstacles.forEach((obstacle, index) => {
      if (obstacle.posY >= this.canvas.height) {
        this.obstacles.splice(index, 1);
      }
    });
  }

  generateRandomObstacle() {
    const randomSize = this.generateRandomNumber(100, 325);

    const maxPosX = this.canvas.width - randomSize;
    const randomPosX = this.generateRandomNumber(0, maxPosX);

    const newObstacle = new this.ObstacleConstructor(
      this.canvas, this.context, randomPosX, 0, randomSize, 30, 'black',
    );

    return newObstacle;
  }

  checkCollision() {
    this.obstacles.forEach((obstacle) => {
      if (this.player.crashWith(obstacle)) {
        this.isGameOver = true;
      }
    });
  }

  updateScore() {
    if (this.frames % this.score.pointsIncrementFPS) {
      this.score.points += 1;
    }

    this.drawScore();
  }

  drawScore() {
    this.score.htmlElement.innerText = this.score.points;
  }

  showFinalGameStats() {
    setTimeout(() => {
      this.clearField();

      this.context.fillStyle = 'black';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.context.textAlign = 'center';
      this.context.font = '50px Comic Sans';
      this.context.fillStyle = 'red';
      this.context.fillText('Game Over!', this.canvas.width / 2, this.canvas.height / 3);

      this.context.fillStyle = 'white';
      this.context.fillText('Your final score is:', this.canvas.width / 2, this.canvas.height / 3 + 70);

      this.context.fillText(this.score.points, this.canvas.width / 2, this.canvas.height / 3 + 140);
    }, 1000);
  }

  generateRandomNumber(minValue, maxValue) {
    const min = minValue;
    const max = maxValue;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    return random;
  }
}
