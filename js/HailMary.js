document.addEventListener("DOMContentLoaded", async function () {
    fetch("../text/Andy_Weir_author.json")
    .then((response) => response.json())
    .then((articles) =>{
        document.getElementById("Andy_weir_natinality").innerHTML = articles[0].natinality;
        document.getElementById("Andy_weir_birth").innerHTML = articles[0].birth;
        document.getElementById("Andy_weir_education").innerHTML = articles[0].education;
        document.getElementById("Andy_weir_history").innerHTML = articles[0].history;
        document.getElementById("Andy_weir_debut").innerHTML = articles[0].debut;
        
        console.log(articles[0].lang_ko)
    })
    
});


document.addEventListener("DOMContentLoaded", async function () {
    fetch("../text/Andy_Weir_book.json")
    .then((response) => response.json())
    .then((articles) =>{
        let thumbnail = document.querySelectorAll(".other_books_info img");
        let title_text = document.querySelectorAll(".other_books_title");
        let meta_author = document.querySelectorAll(".other_books_author");

        console.log(articles)
        articles.forEach(function(element,i) {
            
            thumbnail[i].src = element.thumbnail;
            title_text[i].innerHTML = `"${element.title}"`;
            meta_author[i].innerHTML = `"${element.author}"`;
            
            
            // console.log(element.thumbnail);
        });

    })
    
});