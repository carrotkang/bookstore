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
            title_text[i].innerHTML = element.title;
            meta_author[i].innerHTML = element.author;
            
            
           console.log(element.thumbnail);
           console.log(element.title);
           console.log(element.author);
        });

    })
    
});




//but과 content를 배열형식으로 저장
const but=document.querySelectorAll('.but')
const content=document.querySelectorAll('.content')

//각 배열 순서값에 동일한 but-content의 연결할 예정

//클래스추가-제거를 통한 탭효과
for(let a=0;a<but.length;a++){
  but[a].addEventListener('click',function(){
    //for구문을 통해 but, content 배열 모두 선택
    //1) 모두 클래스제거(tab)이후 
    for(let i of but){
      i.classList.remove('tab')
      i.classList.remove('sub')
    }
    for(let i of content){
      i.classList.remove('tab')
      i.classList.remove('sub')
    }
    //2) 선택항목 클래스(tab)추가
    content[a].classList.add('tab')
    but[a].classList.add('sub')
  })
}


const section = document.querySelector('.content_wrap');
const btns = document.querySelectorAll('.more_btn');
const content_text = document.querySelectorAll('.content');
console.log(section);
console.log(btns);
console.log(content_text);
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.textContent == '더보기') {
      section.style.height = 'auto';
      content.forEach(tc => {
        tc.style.height = 'auto';
      });
      btn.innerText = '접기'
    } else {
      section.style.height = '350px';
      content.forEach(tc => {
        tc.style.height = '300px';
      });
      btn.innerText = '더보기'
    }
  });
});       

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("../text/content_1.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.getElementById("content_1").innerHTML = data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("../text/content_2.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.getElementById("content_2").innerHTML = data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("../text/content_3.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.getElementById("content_3").innerHTML = data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});