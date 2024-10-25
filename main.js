let mat=[['0','0','0'],['0','0','0'],['0','0','0']]
console.log(mat)
let winnerFound=false

const elms=[["00","01","02"],["10","11","12"],["20","21","22"]]

const render=()=>{
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(mat[i][j]=='x'){
                document.getElementById(elms[i][j]).innerHTML="<i class='fa-solid fa-x'></i>";
            }
            else if(mat[i][j]=='o'){
                document.getElementById(elms[i][j]).innerHTML="<i class='fa-solid fa-o'></i>";
            }
            else{
                document.getElementById(elms[i][j]).innerHTML="";
            }
        }
    }
}

let events=[];
let isX=true;

const clicked=(element)=>{
    if(winnerFound)return
    const id=element.id
    const x=id[0]-'0'
    const y=id[1]-'0'
    if(mat[x][y]==='0'){
        events.push([x,y])
        if(events.length>6){
            const [oldX, oldY] = events[0];
            mat[oldX][oldY]='0'
            events.splice(0,1);
        }
        if(isX===true){
            mat[x][y]='x'
            isX=false;
            document.getElementById("turn").innerHTML="O's turn"
        }else{
            mat[x][y]='o'
            isX=true;
            document.getElementById("turn").innerHTML="X's turn"
        }
        // console.log(events);
        render();
        // console.log(element.id)
        // console.log(x,y)
        checkWinner();
    }
}

const checkWinner=()=>{
    for(let i=0;i<3;i++){
        if(mat[i][0]==='x' && mat[i][1]==='x' && mat[i][2]==='x'){
            document.getElementById("winner").innerHTML="X won"
            winnerFound=true;
        }
        if(mat[i][0]==='o' && mat[i][1]==='o' && mat[i][2]==='o'){
            document.getElementById("winner").innerHTML="O won"
            winnerFound=true;
        }
    }
    for(let i=0;i<3;i++){
        if(mat[0][i]==='x' && mat[1][i]==='x' && mat[2][i]==='x'){
            document.getElementById("winner").innerHTML="X won"
            winnerFound=true;
        }
        if(mat[0][i]==='o' && mat[1][i]==='o' && mat[2][i]==='o'){
            document.getElementById("winner").innerHTML="O won"
            winnerFound=true;
        }
    }
    if((mat[0][0]==='x' && mat[1][1]==='x' && mat[2][2]==='x')||
        (mat[0][2]==='x' && mat[1][1]==='x' && mat[2][0]==='x')){
            document.getElementById("winner").innerHTML="X won"
            winnerFound=true;
        }
    if((mat[0][0]==='o' && mat[1][1]==='o' && mat[2][2]==='o')||
        (mat[0][2]==='o' && mat[1][1]==='o' && mat[2][0]==='o')){
            document.getElementById("winner").innerHTML="O won"
            winnerFound=true;
        }
    if(winnerFound){
        document.getElementById("turn").innerHTML=""
    }
}

const restart=()=>{
    mat=[['0','0','0'],['0','0','0'],['0','0','0']]
    events.splice(0,events.length)
    render()
    isX=true;
    winnerFound=false;
    document.getElementById("winner").innerHTML="";
    document.getElementById("turn").innerHTML="X's turn";
}