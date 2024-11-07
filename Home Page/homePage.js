$(document).ready(function(){

    fetch('../json/data.json')
        .then(res => res.json())
        .then(data => {

            let linkID = 0;
    
            data.forEach(book => {
                    
                let title = book["title"];
                let image = book["image"];
                
                       $('.books-container').append( 
                           `<div class="book" onclick="window.location.href='/Book/bookDetails.html?id=${linkID++}'">
                               <a href="/Book/bookDetails.html?id=${linkID}"><img src="${image}" alt="${title}"></a>
                               <ul type="none">
                                   <li class="book-title">${title}</li>
                               </ul>
                           </div>`
                       );
           });
            
        });
})
