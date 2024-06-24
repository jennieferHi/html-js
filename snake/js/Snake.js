function Snake() { 
    this.body = [
        { "row": 3, "col": 7 },
        { "row": 3, "col": 6 },
        { "row": 3, "col": 5 },
        { "row": 3, "col": 4 },
        { "row": 3, "col": 3 },
        { "row": 3, "col": 2 }
    ];
    // 自己拿不到
    // this.render();
    this.direction = "R";
    //防止突然掉頭的bug
    this.willDirection = "R";
};

Snake.prototype.update = function () {
    // 投增尾山 )

    this.direction = this.willDirection;
    switch (this.direction) {
        case "R":
            this.body.unshift({ "row": this.body[0].row, "col": this.body[0].col + 1 });
            break;
        case "D":
            this.body.unshift({ "row": this.body[0].row + 1, "col": this.body[0].col });
            break;
        case "L":
            this.body.unshift({ "row": this.body[0].row, "col": this.body[0].col - 1 });
            break;
        case "U":
            this.body.unshift({ "row": this.body[0].row - 1, "col": this.body[0].col });
            break;
    }
   
     // 吃飯
     if(game.food.row==game.snake.body[0].row && game.food.col==game.snake.body[0].col){
        // 吃掉之後重新在創建食物
        game.food=new Food(game);
        game.score++;
    }else{
        this.body.pop();
    }
    if (this.body[0].row < 0 || this.body[0].row > game.row - 1 || this.body[0].col < 0 || this.body[0].col > game.col - 1) {
        this.body.shift();
        clearInterval(timer)
    }  
     for(var i = 1; i <this.body.length; i++){
        if (this.body[0].col == this.body[i].col && this.body[0].row == this.body[i].row){
            alert(+game.score+"分。");
            clearInterval(timer)
        }
    }
}
Snake.prototype.changeDirection = function (d) {
    // 把1秒內的植放在這裡
    this.willDirection = d;
}
 
Snake.prototype.render = function () {
    //  蛇的身體+頭部
    game.setColor(this.body[0].row, this.body[0].col, "skyblue");
    for (var i = 1; i < this.body.length; i++) {
        game.setColor(this.body[i].row, this.body[i].col, 'red');
    }
}