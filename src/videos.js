var videos=[
    {
      name:'SQL-1',
      src:"imgs/videos/SQL_1.mp4"
    },
    {
      name:'SQL-2',
      src:"imgs/videos/SQL_2. Data Types.mp4"
    },
    {
      name:'HTML-9',
      src:"imgs/videos/www.KeepVid.to---Html dersleri-9 video ekleme.mp4"
    }
    ,
    {
      name:'HTML-1',
      src:"imgs/videos/www.KeepVid.to---HTML Dərsləri - 01 - Veb Proqramlaşdırma Nədir_ IDE Nədir_ Sublime Text 3 Necə Qurulur_.mp4"
    }
  ]
for (let j = 0; j < videos.length; j++) {
    $('.container .row .col-lg-10  .container .row').append(`
    <div class="col-lg-4">
    <video width="100%" height="300px" controls>
        <source src="${videos[j].src}">
    </video>
    <h5 style="text-align: center; color: #3e64de; margin-top: 5px;">${videos[j].name}</5>
  </div>
    `)
  }