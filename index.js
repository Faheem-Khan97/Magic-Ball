let nameInput  = document.querySelector("#name");
let enterbutton = document.querySelector('#enter')

/*
let newEnterButton = document.querySelector('#newenter')

let againbutton = document.querySelector('#again')
let resetbutton = document.querySelector('#reset')
let listWrap = document.querySelector('div.listWrap');
let links = document.getElementsByTagName('a');

*/
let fortuneButton = document.querySelector('#fortune');
let para = document.querySelector("p.msg");
let enterHead =  document.querySelector('h1.head')
let form = document.querySelector('form#home');
console.log(nameInput)
let imgDiv = document.querySelector("div.img");


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


/*
for(let i = 0; i < links.length; i++){
    console.log("inside for")

    links[i].addEventListener('click', () =>{
        console.log("inside click")

        let msg = getRandomMsg();
        listWrap.style.display = 'none';
        para.textContent = msg
        para.style.display = 'initial';

        


    });
}

*/

// Input form listener

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log("inside")

    fortuneButton.style.dipslay = 'block'
    let userName = nameInput.value.trim();

    if(userName.length>0){


        localStorage.setItem("name", userName);
        // Retrieve
       // document.getElementById("result").innerHTML = localStorage.getItem("lastname");

        para.textContent = `Hello ! ${userName}`;
        para.style.display = "initial";
        fortuneButton.style.display = 'initial'
    
    }
    else{

        para.textContent = `Hello, It would be better if we know your name`;
        para.style.display = "initial";

    }

});


fortuneButton.addEventListener('click', () => {
    let userName = nameInput.value.trim();
    console.log("fortune clicked")
    window.location.href = 'ques.html'


});







