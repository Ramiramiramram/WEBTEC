$(() => {
    const queryString = window.location.search;
    const UrlParams = new URLSearchParams(queryString);
    const id = UrlParams.get("id");


    fetch('../json/data.json')
        .then((res) => res.json())
        .then(bookId => {
            let book = bookId[id];
            let title = book["title"];
            let ISBN = book["isbn"];
            let genre = book["genre"];
            let publisher = book["publisher"];
            let publicationDate = book["publicationDate"];
            let image = book["image"];
            let author = book["author"];
            let desc = book["synopsis"];

            $(".book-page-title").html(title);
            $(".book-page-image").html(`<img src="${image}" alt=${title}"/>`);
            $(".book-page-isbn").html(ISBN);
            $(".book-page-genre").html(genre);
            $(".book-page-publisher").html(publisher);
            $(".book-page-publisher-date").html(publicationDate);
            $(".book-page-author").html(author);
        });
})