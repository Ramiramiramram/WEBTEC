$(document).ready(function(){

    fetch("books.json")
        .then((rawData) => rawData.json())
        .then(pokedex =>{
            // console.log(pokedex)

            let linkID = 0;

            books.forEach(book => {
                // console.log(pokemon);
                
                let id = book["id"];
                let title = book["bookTitle"];
                let ISBN = book["ISBN"];
                let genre = book["genre"];
                let publisher = book["publisher"];
                let publicationDate = book["publicationDate"];
                let author = book["author"];

                    $('.pokemon-container').append( 
                        `<div class="card">
                            <ul type="none">
                            <li class="pokemon-id">#${id}</li>
                            <li class="pokemon-name">
                                <a href="pokemon.html?id=${linkID++}">${name}</a>
                            </li>
                            </li>
                            </ul>
                        </div>`
                    );
            });

        });
})