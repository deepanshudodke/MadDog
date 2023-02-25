export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Creepster';
        this.livesImage = lives;
    }

    draw(context) {
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;

        context.fillText('Score: ' + this.game.score, 20, 50);

        context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 80);
        for (let i = 0; i < this.game.lives; i++)
            context.drawImage(this.livesImage, 25 * i + 20, 95, 25, 25);

        if (this.game.gameOver) {

            context.textAlign = 'center';
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            if (this.game.score > 50) {
                context.fillText('Boo-yah', this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
                context.fillText('What are creatures of night afraid of? YOU!!!', this.game.width * 0.5, this.game.height * 0.5 + 20);
            } else {
                context.fillText('Love at first Bite?', this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
                context.fillText('Nope better luck next time', this.game.width * 0.5, this.game.height * 0.5 + 20);
            }

        }
    }
}