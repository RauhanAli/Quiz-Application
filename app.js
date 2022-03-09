window.onload = function(){
    ques_show();
}
var questions=[
    {
    qst: "Q1. What is Capital of Pakistan? ",
    ans: "C: Islamabad",
    options: [
             "A: Karachi",
             "B: Multan",
             "C: Islamabad",
             "D: Lahore",
    ]
        },
        {
            qst: "Q2. What is the full form of RAM? ",
            ans: "B: Random Access Memory",
            options:[
                "A: Read Along Memory ",
                "B: Random Access Memory ",
                "C: Railway Any Machine ",
                "D: Read Always Memory "
            ]
        },
        {
            qst: "Q3. What is the full form of ROM? ",
            ans: "D: Read Only Memory",
            options:[
                "A: Read Along Memory ",
                "B: Random Access Memory ",
                "C: Read Output Machine ",
                "D: Read Only Memory "
            ]
        },
    
]


function Submit(e){
    e.preventDefault();
    let Uname= document.forms["welcome"]["uname"].value;
    //to store user name
    sessionStorage.setItem("name",Uname)
    location.href="index1.html";
    console.log(Uname);
}
 let qus_count=0;
 let score=0;
 function next(){
    let user_ans = document.querySelector("li.option.active").innerHTML;
    console.log(user_ans)
    if(user_ans==questions[qus_count].ans){
       score+= 10;
       sessionStorage.setItem("score",score); 
       }

     if(qus_count==questions.length-1){
        // sessionStorage.setItem("time",`${minutes}minutes and ${seconds}seconds`)
        // clearInterval(qtime);
        location.href="end.html";
        return;
     }

     qus_count++;
     ques_show(qus_count)
     //console.log(qus_count)
 }

 function ques_show(count){
    let p = document.getElementById("question")
    p.innerHTML=`<h2> ${questions[qus_count].qst}<h2> 
    <ul class="optionq">
    <li class="option">${questions[qus_count].options[0]}</li>
    <li class="option">${questions[qus_count].options[1]}</li>
    <li class="option">${questions[qus_count].options[2]}</li>
    <li class="option">${questions[qus_count].options[3]}</li>
</ul>

`;
toggleAct();
 }

 function toggleAct(){

    let option = document.querySelectorAll("li.option")
    for(let i=0; i<option.length; i++){
        option[i].onclick = function(){
            for(let j=0; j<option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
 }

 let na = sessionStorage.getItem("name")
 let pts = sessionStorage.getItem("score")
 let tm = sessionStorage.getItem("time")
 document.querySelector(".username").innerHTML=na;
 document.querySelector(".points").innerHTML=pts;
 document.querySelector(".time").innerHTML=tm;


let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let seconds =Math.floor((time % (100 * 60))/(100 * 60));
let minutes =Math.floor((time % (100 * 60 * 60))/(100 * 60));
let timea = 0;

 let qtime = setInterval( function () {
if(seconds<59){
    seconds++;
}
else{
    minutes++;
    seconds=0;
}
console.log(minutes,seconds);
let sec = seconds<10 ? `0${seconds}` : `${seconds}`;
let min = minutes<10 ? `0${minutes}` : `${minutes}`;
document.querySelector(".time1").innerHTML = `${min} : ${sec}`;
},1000)