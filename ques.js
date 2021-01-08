let newEnterButton = document.querySelector('#newenter')
let againbutton = document.querySelector('#again')
let resetbutton = document.querySelector('#reset')
let listWrap = document.querySelector('div.listWrap');
let links = document.getElementsByTagName('a');
let imgDiv = document.querySelector("div.img");
let image = document.querySelector("div>img");


let enterHead =  document.querySelector('h1.head');

let userName = localStorage.getItem("name");
enterHead.textContent += ` ${userName}`

let msg = ""
let ansPara;

// Question submit handler
newEnterButton.addEventListener('click', (e)=> {

    e.preventDefault(e);
    
    showMsg();

})

// Reset handler
resetbutton.addEventListener('click', () => {

    window.location.href = 'index.html';
})
// generate and return  random message


function getRandomMsg(){

    let randomNumber = Math.floor( Math.random()*8);
    let eightBall = "";

    switch(randomNumber){
        case 0: 
            eightBall = 'It is certain';
            break;

        case 1: 
            eightBall = 'It is decidedly so';
            break;

        case 2: 
            eightBall = 'Reply hazy try again';
            break;

        case 3: 
            eightBall = 'Cannot predict now';
            break;
            
        case 4: 

            eightBall = 'Do not count on it';
            break;
        case 5: 
            eightBall = 'My sources say no';
            break;

        case 6: 
            eightBall = 'Outlook not so good';
            break;

        case 7: 
            eightBall = 'Signs point to yes';
            break;


    }
    return eightBall;


}


ansPara = document.createElement('p');
imgDiv.append(ansPara);

function showMsg(){
    image.classList.add('transit')
    listWrap.style.display = "none";
    ansPara.style.display = "none";
    setTimeout(() => {
    ansPara.style.display = "initial";

        ansPara.textContent = "";
        image.classList.remove('transit');

        msg= getRandomMsg();
    
        ansPara.textContent =`" ${msg} "` ;


    
        ansPara.style.color = "White";
        ansPara.style.fontSize = 28 + "px";
        ansPara.style.justifySelf = "left"
        ansPara.style.alignSelf = "center"
        ansPara.style.fontWeight = "bold"


    

    }, 1500);
   
    

    
}