var informationTeachers=[
    {
    name:'Gulshen Settarova',
    work:'Lead Developer',
    picture:'../imgs/leadDev.jpeg'
   },
   {
    name:'Elmin Imanverdiyev',
    work:'Web Developer',
    picture:'../imgs/mentor.webp'
    },
   {
    name:'Zulfiyye Eliyeva',
    work:'Back End Developer',
    picture:'../imgs/dev6.jpg'
   },
   {
    name:'Nezaket Memmedova',
    work:'Back End Developer',
    picture:'../imgs/dev3.webp'
    },
    {
     name:'Nuray Qehremanli',
     work:'Front End Developer',
     picture:'../imgs/dev4.jpeg'
    },
    {
    name:'Shahlar Ismayilov',
    work:'FullStack Developer',
    picture:'../imgs/dev5.jpg'
    },
    {
    name:'Aysu Abdulayeva',
    work:'Back End Developer',
    picture:'../imgs/dev10.jpg'
    },
    {
     name:'Gozel Eliyeva',
     work:'Front End Developer',
     picture:'../imgs/dev4.jpeg'
    },
    {
    name:'Shahlar Ismayilov',
    work:'FullStack Developer',
    picture:'../imgs/dev5.jpg'
    },
    {
    name:'Zamin Imanverdiyev',
    work:'Back End Developer',
    picture:'../imgs/dev9.jpg'
    },
    {
     name:'Aksin Imanverdiyev',
     work:'Front End Developer',
     picture:'../imgs/dev5.jpg'
    },
    {
    name:'Nurlane Yaqubova',
    work:'FullStack Developer',
    picture:'../imgs/dev11.jpeg'
    },
    {
    name:'Revan Imanverdiyev',
    work:'Back End Developer',
    picture:'../imgs/dev3.webp'
    },
    {
     name:'Orxan Abbasov',
     work:'Front End Developer',
     picture:'../imgs/dev7.jpg'
    },
    {
    name:'Elvin Nezerli',
    work:'FullStack Developer',
    picture:'../imgs/dev8.jpg'
    },
    {
    name:'Orxan Abbasov',
    work:'Front End Developer',
    picture:'../imgs/dev12.jpg'
    },
    {
    name:'Elmeddin Nezerli',
    work:'FullStack Developer',
    picture:'../imgs/dev13.jpg'
    },
]
AOS.init();
for (let i = 0; i < informationTeachers.length; i++) {
$('#informations .container .row').append(`
<div class="col-lg-4 col-sm-11 col-md-6 mt-4 text-center" data-aos="fade-down"
data-aos-duration="1500">
                              <div class="card" style="width: 300px;" >
                                <img class="card-img-top" style="height: 260px;" src="${informationTeachers[i].picture}" alt="Card image">
                                <div class="card-body">
                                  <h6 class="card-title" style="color: red; font-weight: 700;">${informationTeachers[i].name}</h6>
                                  <p class="card-text"  style="color: rgb(20, 19, 19);">${informationTeachers[i].work}</p>
                                </div>
                              </div>              
                              </div> 
`
)}
