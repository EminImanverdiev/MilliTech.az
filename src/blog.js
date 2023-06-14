AOS.init();
var blogProducts=[
    {
    name:"What is JavaScript DOM API",
    about:"reading html elements in the browser",
    picture:"https://www.w3schools.com/js/pic_htmltree.gif",
    time:"06/02/2022"
    },
    {
        name:"What is Remote Work",
        about:"remote work form, about the interview",
        picture:"https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/POLL/p9ydrh-1lke2_na9tsp6ra.jpg",
        time:"09/12/2022"
    },
    ,
    {
        name:"What is React js",
        about:"About react js library",
        picture:"https://cdn.educba.com/academy/wp-content/uploads/2018/10/Top-Uses-Of-reactjs.jpg",
        time:"02/12/2022"
    }
    ,
    {
        name:"What is Node js",
        about:"Development of web applications using js language",
        picture:"https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
        time:"12/10/2022"
    }
    ,
    {
        name:"What is Css Box Model?",
        about:"Structure of html tags in css",
        picture:"https://www.webcodzing.com/uploads/2021/06/box-model.jpg",
        time:"08.02.2023"
    }

]

blogProducts.forEach(product => {
    document.querySelector('.container-fluid .row').innerHTML+=`
    <div class="col-lg-5 col-md-6 mb-3 pb-4 medi">
             <div style="overflow:hidden;border-radius: 10px;"><img src="${product.picture}"></div>
             <h3>${product.name}?</h3>
             <p>${product.about}</p>
             <div class="footer">
                <span><i class="fa-regular fa-clock"></i> <span>${product.time}</span> </span>
                <a href="#"><i class="fa-regular fa-circle-right"></i></a>
             </div>
           </div>
    `
});
