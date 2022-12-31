
//nuestra key(llave)
let key = 'ec90559273f14c46822fc1ada8aefd1f';
let country = 'fr';

// nuestra url
let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`;

function getNotice(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.articles)
        let noticias = '';
        data.articles.forEach(notice => {
            noticias += `
            <h2>${notice.title}</h2>
            <img src="${notice.urlToImage}" style="max-width: 400;"class="img-fluid w-75"  alt="">
            <p>${notice.description}</p>
            <span>${notice.publishedAt}</span>
            <h5>${notice.author}</h5>
            <br>
            `;
        });

         document.getElementById('noticias').innerHTML= noticias;
       
    })
    
}



getNotice();