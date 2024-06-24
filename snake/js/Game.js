function Game() {
    // alert("i am game")
    // 設定表格
    // 行
    this.score=0;
    this.row = 20;
    this.col = 20;
    this.init();
    // 設定蛇
    this.snake = new Snake();
    this.food = new Food(this);
 
    // 執行定時器任務 
    // 鍵盤事件 
    this.bindEvent();
    

}
Game.prototype.init = function () {
    this.dom = document.createElement("table");
    var tr, td;
    for (let i = 0; i < this.row; i++) {
        tr = document.createElement("tr");
        this.dom.appendChild(tr);
        for (var j = 0; j < this.col; j++) {
            td = document.createElement("td");
            tr.appendChild(td);
        }
        this.dom.appendChild(tr);
    }
    document.getElementById("app").appendChild(this.dom);

}
// 設定顏色方法
Game.prototype.setColor = function (row, col, color) {
    this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background = color;
}
// 清除
Game.prototype.clear = function () {
    for (var i = 0; i < this.row; i++) {
        for (var j = 0; j < this.col; j++) {
            this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].style.background = "pink";
            this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = "";
        }
    }
};
// 設定事件監聽
Game.prototype.bindEvent = function () {
    const self = this;
    // 鍵盤查詢方向
    document.onkeydown = function (event) {
        // console.log(event.keyCode)
        switch (event.keyCode) {
            //按下左键
            case 37:
                //如果向右不能按左键
                if (self.snake.direction == "R")
                    break;
                self.snake.changeDirection("L");
                break;
            //按下上键
            case 38:
                //，如果方式是向下不能按上键
                if (self.snake.direction == "D")
                    break;
                self.snake.changeDirection("U");
                break;
            //按下右键
            case 39:
                //如果方式是向左不能按右键
                if (self.snake.direction == "L")
                    break;
                self.snake.changeDirection("R");
                break;
            //按下下键
            case 40:
                //如果方式是向上不能按下键
                if (self.snake.direction == "U")
                    break;
                self.snake.changeDirection("D");
                break;

        }
    }
};
// 設定食物
Game.prototype.setFood=function(row,col,html){
    this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].innerHTML = html;
}
Game.prototype.setLength=function(){
    document.getElementById("f").innerHTML=this.snake.body.length;  
}
Game.prototype.setScore=function(){
    document.getElementById("score").innerHTML=this.score;  
}
// 食物是否被吃掉
 

// 清除 更新 重新產生
let timer = setInterval(() => {
    game.clear();
    game.snake.update(); 
    game.snake.render();
    game.food.render(); 
    game.setLength();
    game.setScore();

}, 1000);