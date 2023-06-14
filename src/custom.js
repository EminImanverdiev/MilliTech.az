var slideElements=[
    {
        name:'Front End Development',
        about:'A Front-End Developer is someone who creates websites and web applications...',
        photo:'../imgs/coding.jpg'
    },
    {
        name:'Back End Development',
        about:'Web development activities that are done at the back end of programs are referred to as back end development...',
        photo:'../imgs/coding2.jpg'
    },
    {
        name:'Cyber Security',
        about:'Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks.',
        photo:'../imgs/cyber.jpg'
    }
]
var i=0;
setInterval(change,1500);
function change() {
    if (i==2) {
        i=0
    }
    else{
        i++;
    }
    document.querySelector(".slides img").src=slideElements[i].photo;
    document.querySelector(".slides .slide h2").innerHTML=slideElements[i].name;
    document.querySelector(".slides .slide i").innerHTML=slideElements[i].about;
    for (let j = 0; j < document.querySelectorAll('.slides .slide .buttons input').length; j++) {
    document.querySelectorAll('.slides .slide .buttons input')[j].classList.remove('active')
    }
    document.querySelectorAll('.slides .slide .buttons input')[i].classList.add('active')
}
change();

document.querySelectorAll('.slides .slide .buttons input').forEach(btn=>{
    btn.addEventListener('click',function() {
        document.querySelectorAll('.slides .slide .buttons input').forEach(x=>{
            x.classList.remove('active')
        })
        this.classList.add('active')
    })
})
var loginUsers=[
    {   Id:1,
        full_name:'Emin Imanverdiyev',
        user_name:'Elmin',
        password:'123'
        ,gender:'Kisi'
    },
    {   Id:2,
        full_name:'Esmet Ehmedova',
        user_name:'Esmet',
        password:'324'
        ,gender:'Qadin'
    }
]
localStorage.setItem('information_users',JSON.stringify(loginUsers));
nese.addEventListener("click",function(){
    window.location.href="https://drive.google.com/drive/folders/1JyAM7M3100E9s4eM-Tv60iAHrbV-OFlc"
  })
