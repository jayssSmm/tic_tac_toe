const game = (() =>{
    
    let game =[];
    let moveCount=0;
    let flag = 0;

    function resetGame(){
        let row=[0,0,0];
        for (let i=0; i<3 ;i++){
            game.push(row)
        };
    }

    function alterFlag(){
        if (flag){
            flag=0;
        }else{
            flag=1
        }
    }

    const getFlag = () => {return flag;}

    function checkWin(marker){
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
            else if(cCount==3)
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
            else if (game[j][i]==marker)
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

    const incMovecount = () => {
        moveCount++;
    }
    const getmoveCount = () => moveCount;

    resetGame();

    const returnGame = () => game;

    return {resetGame, returnGame, checkWin, makeMove, incMovecount, getmoveCount, getFlag, alterFlag}

})();

const player = (marker)=>{
    this.marker = marker;
    this.score = 0;
}

const play = (()=>{

    let player1 = player('X'); // 1
    let player2 = player('O'); // 0

    let gameboard = document.getElementById('gameboard')

    document.getElementById('gameboard').addEventListener('click', (e)=>{

        let block = e.target;
        let title_id = block.id;
/*
        console.log(block)
        console.log( block.hasChildNodes())*/
        if (!(block.hasChildNodes()) && block.tagName!='IMG'){
            if (game.getFlag()){
                const guava = document.createElement('img');
                guava.src='icons/guava_11807818.png'; // X // 1
                guava.classList.add('responsive-img'); 
                
                block.appendChild(guava);
                console.log(block);
            }else{
                const water_melon = document.createElement('img');
                water_melon.src='icons/water-melon_7783973.png'; // O // 0
                water_melon.classList.add('responsive-img');

                block.appendChild(water_melon);
            }
            game.alterFlag()
            game.incMovecount()
        }

        if (game.getmoveCount()>4){
            game.checkWin(player.marker)
        }

    })

})()