let userScore = document.getElementById('user-score').innerText;
let comScore = document.getElementById('comp-score').innerText;
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scisor = document.getElementById('schisor');
let userChoiceShow = document.getElementById('your-choice');
let comChoiceShow = document.getElementById('com-choice');
let reset = document.getElementById('reset');
let allChoice = ['rock', 'paper', 'scisor'];
let count = 0;
let images = ['https://media.hitfull.com/article/images/Dwayne-Johnson-The-Rock-2.jpg', 'https://images.template.net/wp-content/uploads/2017/05/Lined-Paper-Templates-Sample-Example.jpg', 'https://ceramicscissorcompany.com/wp-content/uploads/forever-scissors-ceramic-black-open-web--500x503.jpg'];
let usr = document.getElementById('usr');
let com = document.getElementById('com');

// rock handle
rock.addEventListener('click', function(){
    // console.log('click');
    choice('rock');
})

// paper handle
paper.addEventListener('click', function(){
    // console.log('click');
    choice('paper');
})

//scisor handle
scisor.addEventListener('click', function(){
    // console.log('click');
    choice('scisor');
})

// choice handle
function choice(userChoice){
    // console.log(ch);
    //user part
    let usrPrevChildren = userChoiceShow.children;
    document.getElementById('your-choice').removeChild(usrPrevChildren[0]);
    let usrImgURL;
    let usrImg = document.createElement("img");

    //com-part
    let idx = Math.floor(Math.random()*3);
    let comChoice = allChoice[idx];
    let comImgURL = images[idx];
    let comPrevChildren = comChoiceShow.children;
    document.getElementById('com-choice').removeChild(comPrevChildren[0]);
    let comImg = document.createElement("img");
    comImg.src = comImgURL;
    document.getElementById('com-choice').appendChild(comImg);

    //logical part
    switch (userChoice) {
        case "rock":
            usrImgURL = images[0];
            usrImg.src = usrImgURL;
            document.getElementById('your-choice').appendChild(usrImg);
            if(comChoice==="rock"){
                // console.log('draw');
                usr.innerText = 'DRAW';
                com.innerText = 'DRAW';
            }else if(comChoice==="paper"){
                // console.log('com win');
                comScore++;
                count++;
                usr.innerText = "";
                com.innerText = "COMPUTER WON";
            }else{
                // console.log('user win');
                userScore++;
                count++;
                usr.innerText = "YOU WON";
                com.innerText = "";
            }
            break;
        case "paper":
            usrImgURL = images[1];
            usrImg.src = usrImgURL;
            document.getElementById('your-choice').appendChild(usrImg);
            if(comChoice==="rock"){
                // console.log('user win');
                userScore++;
                count++;
                usr.innerText = "YOU WON";
                com.innerText = "";
            }else if(comChoice==="paper"){
                // console.log('draw');
                usr.innerText = 'DRAW';
                com.innerText = 'DRAW';
            }else{
                // console.log('com win');
                comScore++;
                count++;
                usr.innerText = "";
                com.innerText = "COMPUTER WON";
            }
            break;
        case "scisor":
            usrImgURL = images[2];
            usrImg.src = usrImgURL;
            document.getElementById('your-choice').appendChild(usrImg);
            if(comChoice==="rock"){
                // console.log('com-win');
                comScore++;
                count++;
                usr.innerText = "";
                com.innerText = "COMPUTER WON";
            }else if(comChoice==="paper"){
                // console.log('user win');
                userScore++;
                count++;
                usr.innerText = "YOU WON";
                com.innerText = "";
            }else{
                // console.log('draw');
                usr.innerText = 'DRAW';
                com.innerText = 'DRAW';
            }
            break;
        default:
            break;
    }
    //show who win one by one
    // console.log(usr.innerText);

    showResult(count, comScore, userScore);
}
function showResult(count, comScore, userScore){
    // console.log(comScore, userScore);
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('comp-score').innerText = comScore;
    if(count === 5){
        if(comScore === userScore){
            window.alert('The game is drawn');
        }else if(comScore > userScore){
            window.alert(`COMPUTER WON, TRY AGAIN. YOUR SCORE: ${userScore} and COMPUTER SCORE: ${comScore}`);
        }else window.alert(`CONGRATULATIONS! YOU WON!! YOUR SCORE: ${userScore} and COMPUTER SCORE ${comScore}`);
        window.location.reload();  
    }

}
//play again handle
reset.addEventListener('click', function(){
    // console.log('click');
    window.location.reload();
})