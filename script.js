var time = 60;
var Score = 0;
var hitrn = 0;
function bubble() {
    var clutter = ""
    for (var i = 0; i <= 263; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`

    }
    document.querySelector("#pbotm").innerHTML = clutter


}
function RunTimer() {
    var timer = setInterval(function () {
        if (time > 0) {
            time--
            document.getElementById("timer").textContent = `${time}`
        }
        else {
            clearInterval(timer);
            document.querySelector("#pbotm").innerHTML = `<h1 id = "over">Game Over</h1>`;
            // <button id='play' onclick='PlayGame()' >PLAY AGAIN</button>
        }

    }, 1000)
}
function getHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.getElementById("hitb").textContent = `${hitrn}`
}
function getScore() {
    Score += 10;
    document.getElementById("score").innerText = `${Score}`
}
function queryy() {
  document.querySelector("#pbotm").addEventListener("click", function (dets) {
    
    
    var clickedNumber = Number(dets.target.textContent);
    console.log(clickedNumber)
    if (clickedNumber==NaN) {
        document.querySelector("#pbotm").innerHTML = `<h1 id = "over">Refresh Page</h1>`;
        
    }
    if ((time>0)&&(clickedNumber == hitrn)) {
        getScore();
        bubble();
        getHit();
    }
    if ((time>0)&&(typeof(clickedNumber)=='number')){
        bubble();
        getHit();
    }
    
    // else {
    //     bubble();
    //     getHit();
    // }

})  
}

// function start() {
//     document.querySelector("#pbotm").addEventListener("click", function () {
       
//         getHit();
//                 RunTimer();
//                 bubble();
//     })
// }
function start() {
    document.querySelector("#pbotm").addEventListener("click", function (dets) {
        var textt = dets.target.textContent;
        if (textt=="Start Game") {
            queryy();
            getHit();
            RunTimer();
            bubble();
            
        }
        // else {
        //     document.querySelector("#pbotm").innerHTML = `<h1 id = "over" >Refresh Page</h1>`;
        // }
    })
}


start();
// getHit();
//         RunTimer();
//         bubble();
