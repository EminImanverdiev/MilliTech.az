var informations=[
    {
        name:'Front Development',
        tecnologies:'HTML,Css,Javascript,Jquery,Bootstrap,React,Domain, Publish,Github',
        month:'4',
        time:'90',
    },
    {
        name:'Full stack Development',
        tecnologies:'HTML,Css,Javascript,Jquery,Bootstrap,React,Domain, Publish,Github,Ms/Sql,C# (console),Asp.net Core,MVC,Ado.net,Entity Framework,Web Api',
        month:'9',
        time:'220',
    },
    {
        name:'Back End Development',
        tecnologies:'Hosting, Publish,Github,Ms/Sql,C# (console),Asp.net Core,MVC,Ado.net,Entity Framework,Web Api',
        month:'5',
        time:'130',
    },
    {
        name:'Graphics Design',
        tecnologies:'Adobe Photoshop,Adobe Illustrator,Adobe Indesign',
        month:'4',
        time:'70',
    },
    {
        name:'Cyber security',
        tecnologies:'Only Hack',
        month:'3',
        time:'90',
    },
]
for (let i = 0; i < informations.length; i++) {
    document.querySelector('#informations .container .row').innerHTML+=`
    <div class="col-lg-5">
    <h3>${informations[i].name}</h3>
    <p>${informations[i].tecnologies}</p>
     <div class="div-time">
       <p><i class="fa-regular fa-clock me-2"></i><span>${informations[i].month} ay</span>/ <span>${informations[i].time}saat</span></p>
       <p><i class="fa-solid fa-globe me-2 "></i>Əyani+Onlayn</p>
     </div>
     <hr>
     <div class="register-more">
       <a href="#">More</a>
       <a href="#">Register</a>
     </div>
  </div>

`
}
