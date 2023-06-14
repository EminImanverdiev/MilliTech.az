var informationvacancies=[
    {
    name:'Python tutorial',
    about:'Python, Django, PostgreSQL, Ngnix, Github',
    picture:'../imgs/phyton.png'
   },
   {
    name:'Java tutorial',
    about:'Java SE/EE, Spring Boot, Oracle, PL/SQL, GitHub, REST API, Docker',
    picture:'../imgs/java.png'
   },
   {
    name:'C# tutorial',
    about:'C#, .NET, ASP.NET , ASP.NET CORE, MSSQL',
    picture:'../imgs/scarp.png'
   },
   {
    name:'Front tutorial',
    about:'HTML5, CSS3, Bootstrap5 , JavaScript ,React.js, Git/Github, Material UI 5',
    picture:'../imgs/front.png'
   },
   {
    name:'Marketing tutorial',
    about:'Marketing, Digital marketing, SMM, SEO, SEM, PPC',
    picture:'../imgs/marketing.png'
   },
   {
    name:'Sales manager',
    about:'MS Office,Microsoft Word, Excel',
    picture:'../imgs/sales.webp'
   },
   {
    name:'Front End Mentor',
    about:'HTML5, CSS3, Bootstrap5 , JavaScript ,React.js, Git/Github, Material UI 5',
    picture:'../imgs/frontmentor.webp'
   }
]
AOS.init();
for (let i = 0; i < informationvacancies.length; i++) {
    
$('#informations .container .row').append(`
<div class="col-lg-4 col-md-6 mt-4 text-center" data-aos="flip-left"
data-aos-easing="ease-out-cubic"
data-aos-duration="2000">
                              <div class="card" style="width: 90%;" >
                                <div class="card-title-img">
                                    <img class="photo" src="${informationvacancies[i].picture}" alt="">
                                     <h6 class="m-1 ">${informationvacancies[i].name}</h6>
                                </div>
                                <div class="card-body">
                                  <p class="card-text m-2"  style="color: rgb(20, 19, 19);">${informationvacancies[i].about}</p>
                                  <a class="more_information" href="#">More</a>
                                </div>
                              </div>              
                              </div> 
 `
)}