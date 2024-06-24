function Food(gameSnake){ 
    var self = this;
    console.log(gameSnake)
    do{
        this.row=Math.floor(Math.random() *gameSnake.row ) +1;
        this.col=Math.floor(Math.random() *gameSnake.col ) +1; 
    }while((function(){
        for(let i=0;i<gameSnake.snake.body;i++){
            if(gameSnake.snake.body[i].row == self.row || gameSnake.snake.body[i].col == self.col){
                return true;
            }
            return false;
        }
    })())
    console.log(this.row, this.col);
}
Food.prototype.render=function(){
     game.setFood(this.row,this.col,"&#x1F603;")
}