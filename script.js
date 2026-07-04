const game = (() =>{
    
    let game =[];

    function resetGame(){
        let row=[0,0,0];
        for (let i=0; i<3 ;i++){
            game.push(row)
        };
    }

    function checkWin(game, marker){
        for (let i=0; i<3 ;i++){
            let Rcount=0;
            let cCount=0;
            for (let j=0 ;j<3 ;j++){
                if (game[i][j]==marker){
                    Rcount++;
                }
                if (game[j][i]==marker){
                    cCount++;
                }
            }
            if (Rcount==3){
                return true;
            }
            elif (cCount==3)
            {
                return true;
            }
        }

        let dcount=0;
        let iCount=0;

        for (let i=0, j=2; i<3 ;i++,j--){
            if (game[i][i]==marker){
                dcount++;
            }
            elif (game[j][i]==marker)
            {
                iCount++;
            }
        }

        if (dcount==3 || iCount==3){
            return true;
        }

        return false;
    }

    const isEmpty = (x, y)=>{
        return Boolean(game[x][y]);
    }

    const makeMove = (player, title_id) =>{
        let x = Math.floor((title_id-1)/3);
        let y = (title_id-1) % 3;
        if (isEmpty(x, y)){
            game[x][y]=player.marker;
            return true;
        }
        return false;
    }


    resetGame();

    const returnGame = () => game;

    return {resetGame, returnGame, checkWin, makeMove}

})();

const player = (marker)=>{
    this.marker = marker;
    this.score = 0;
}


const guava = document.createElement('img');
guava.src='icons/guava_11807818.png'; // X
guava.classList.add('responsive-img');

const water_melon = document.createElement('img');
water_melon.src='icons/water-melon_7783973.png'; // O
water_melon.classList.add('responsive-img');

let player1 = player('X');
let player2 = player('O');