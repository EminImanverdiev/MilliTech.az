var informationTeachers=[
    {
    name:'Ayshen Memmedova',
    work:'Front End Student',
    picture:'../imgs/leadDev.jpeg'
   },
   {
    name:'Nezrin Nezerova',
    work:'Back End Student',
    picture:'../imgs/dev6.jpg'
   },
   {
    name:'Cavanshir  Hashimov',
    work:'Back End Student',
    picture:'../imgs/dev5.jpg'
    },
    {
     name:'Asiman Necefli',
     work:'Front End Student',
     picture:'../imgs/dev9.jpg'
    },
    {
    name:'Ramil Qarayev',
    work:'FullStack Student',
    picture:'../imgs/dev5.jpg'
    },
    {
    name:'Huseyn Aliyev',
    work:'FullStack Student',
    picture:'../imgs/dev9.jpg'
    },
    {
    name:'Aysu Abdulayeva',
    work:'Back End Student',
    picture:'../imgs/dev10.jpg'
    },
    {
     name:'Rahide Babayeva',
     work:'Front End Student',
     picture:'dev4.jpeg'
    },
    {
    name:'Ayxan Abdulayev',
    work:'FullStack Student',
    picture:'../imgs/dev5.jpg'
    },
    {
    name:'Elmar Nuraliyev',
    work:'Back End Student',
    picture:'../imgs/dev9.jpg'
    },]
    for (let i = 0; i < informationTeachers.length; i++) {
        $('.container .row .col-lg-10 .container .row').append(`
        <div class="col-lg-3 m-4">
                        <div class="card" style="width:300px;height:340px">
                            <img class="card-img-top" src="${informationTeachers[i].picture}" alt="Card image">
                            <div class="card-body">
                              <h4 class="card-title">${informationTeachers[i].name}</h4>
                              <p class="card-text">${informationTeachers[i].work}</p>
                              <a href="#" class="btn btn-primary">See Profile</a>
                            </div>
                          </div>
                     </div>
        `
        )}
    $('.container .col-lg-2 a').click(function() {
      $('.container .col-lg-2 a').removeClass('active')
      $(this).addClass('active')
    })
    $('.slider').slick();
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  dots:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});
document.querySelector('.container .row .col-lg-10 .myprof').style.display='none'
full_name.innerHTML=JSON.parse(localStorage.getItem('login')).name;
title_name.innerHTML=(JSON.parse(localStorage.getItem('login')).name.split(" ")[0][0]).concat('',JSON.parse(localStorage.getItem('login')).name.split(" ")[1][0])
document.querySelector('.logout').addEventListener('click',function() {
  window.location.href="signup.html";
})
document.querySelector('.Profile').addEventListener('click',function() {
  document.querySelector('.container .row .col-lg-10 .myprof').style.display='block'
  document.querySelector('.center').style.display='none'

  profile_name.innerHTML=(JSON.parse(localStorage.getItem('login')).name.split(" ")[0]);
  profile_surname.innerHTML=(JSON.parse(localStorage.getItem('login')).name.split(" ")[1]);
  profile_gender.innerHTML=JSON.parse(localStorage.getItem('login')).gender;
  profile_password.innerHTML=JSON.parse(localStorage.getItem('login')).password;
});
videos_btn.addEventListener('click',function() {
  window.location.href="videos.html"
})


