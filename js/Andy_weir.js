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
        console.log(datalist);
        document.getElementById("description_project").innerHTML = datalist[0];
        document.getElementById("description_massion").innerHTML = datalist[1];
        document.getElementById("description_artemis").innerHTML = datalist[2];
        document.getElementById("description_crossing").innerHTML = datalist[3];
        document.getElementById("description_movie").innerHTML = datalist[4];
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
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