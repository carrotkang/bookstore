document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("../text/Andy_weir_text.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.getElementById("Andy_weir_paragraph").innerHTML = data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("../text/Andy_Weir_books.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const datalist = await (await response.text()).split('/')
        //document.getElementById("Andy_weir_paragraph").innerHTML = data;
        // console.log(datalist);
        document.getElementsByClassName("meta_description_info")[0].innerHTML = datalist[0];
        document.getElementsByClassName("meta_description_info")[1].innerHTML = datalist[1];
        document.getElementsByClassName("meta_description_info")[2].innerHTML = datalist[2];
        document.getElementsByClassName("meta_description_info")[3].innerHTML = datalist[3];
        document.getElementsByClassName("meta_description_info")[4].innerHTML = datalist[4];
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});

document.addEventListener("DOMContentLoaded", async function () {
    fetch("../text/Andy_Weir_author.json")
    .then((response) => response.json())
    .then((articles) =>{
        document.getElementsByClassName("lang_ko").innerHTML = articles[0].lang_ko;
        document.getElementsByClassName("lang_other").innerHTML = articles[0].lang_other;
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
        let thumbnail = document.querySelectorAll(".book_thumbnail");
        let title_text = document.querySelectorAll(".title_text");
        let meta_author = document.querySelectorAll(".meta_author");
        let translator = document.querySelectorAll(".meta_translator");
        let publisher = document.querySelectorAll(".meta_publisher");
        let genre = document.querySelectorAll(".meta_genre");
        let price = document.querySelectorAll(".price");
        let discount = document.querySelectorAll(".discount_info");

        console.log(articles)
        articles.forEach(function(element,i) {
            
            thumbnail[i].innerHTML = `<img src="${element.thumbnail}">`;
            title_text[i].innerHTML = `"${element.title}"`;
            meta_author[i].innerHTML = `"${element.author}"`;
            translator[i].innerHTML = `"${element.translator}"`;
            publisher[i].innerHTML = `"${element.publisher}"`;
            genre[i].innerHTML = `"${element.genre}"`;
            price[i].innerHTML = `"${element.price}"`;
            discount[i].innerContent = `"${element.discount}"`;
            
            
            console.log(element.thumbnail);
        });

    })
    
});










function toggleDiv() {
    const div = document.getElementById('ridi_inform_text');

    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
};


$(document).ready(function () {

    // Top 버튼 클릭시 페이지 상단으로 이동
    $('#top-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });

});