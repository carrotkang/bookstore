
        function toggleDiv() {
            const div = document.getElementById('ridi_inform_text');

            if (div.style.display === 'none') {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        };



        var swiper_1 = new Swiper("#slide_1 .mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: "#slide_1 .swiper-pagination",
                clickable: true,
            },
            slidesPerView: 3,
            slidesPerGroup: 3,
            loop: true,
            loopAdditionalSlides: 3,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },

        });


        var swiper_2 = new Swiper("#slide_2 .mySwiper", {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
                rows: 3,
            },
            spaceBetween: 5,

            pagination: {
                el: "#slide_2 .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: "#slide_2 .swiper-button-next",
                prevEl: "#slide_2 .swiper-button-prev",
            },
        });

        var swiper_3 = new Swiper("#today_ridi .mySwiper", {
            slidesPerView: 6,
            grid: {
                rows: 1,
            },
            spaceBetween: 5,

            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },

        });

        var swiper_4 = new Swiper("#new .mySwiper", {
            slidesPerView: 6,
            grid: {
                rows: 1,
            },
            spaceBetween: 5,

            pagination: {
                el: "#new .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: "#new .swiper-button-next",
                prevEl: "#new .swiper-button-prev",
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
        });

        var swiper_5 = new Swiper("#best_inweek_content .mySwiper", {
            navigation: {
                nextEl: "#best_inweek_content .swiper-button-next",
                prevEl: "#best_inweek_content .swiper-button-prev",
            },
            pagination: {
                el: "#best_inweek_content .swiper-pagination",
                clickable: true,
            },
            slidesPerView: 5,
            grid: {
                rows: 1,
            },
            spaceBetween: 5,
            slidesPerGroup: 5,
        });



        var swiper_6 = new Swiper("#now_ridi_content .mySwiper", {
            slidesPerView: 6,
            grid: {
                rows: 1,
            },
            spaceBetween: 5,
            slidesPerGroup: 6,
            pagination: {
                el: "#new .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: "#now_ridi_content .swiper-button-next",
                prevEl: "#now_ridi_content .swiper-button-prev",
            },
        });


        async function fetchBooks(query, size) {
            const REST_API_KEY = '1bdb360b7c5be45b3bd01b0821694861';
            const params = new URLSearchParams({
                target: 'title',
                query,
                size,
            });
            const url = `https://dapi.kakao.com/v3/search/book?${params}`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `KakaoAK ${REST_API_KEY}`
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP 오류: ${response.status}`);
            }

            return response.json();
        };


        async function bookData() {
            try {
                const queries = [
                    { query: "best", size: 9 },
                    { query: "시험", size: 18 },
                    { query: "오늘", size: 12 },
                    { query: "new", size: 9 },
                    { query: "famous", size: 10 },
                    { query: "now", size: 12 }
                ]
                for (let i = 0; i < queries.length; i++) {
                    query = queries[i].query;
                    size = queries[i].size;
                    let data = await fetchBooks(query, size);

                    if (i == 0) {
                        //#slide_1번째
                        // let div = document.querySelectorAll("#slide_1 .swiper-slide")
                        // // console.log(div)             
                        // for (let j = 0; j < 9; j++) {
                        //     let doc = data.documents[j];
                        //     div[j].innerHTML = `<img src="${doc.thumbnail}">`;
                        // }
                    } else if (i == 1) {
                        //#slide_2 ..swiper-slide 
                        let div_img = document.querySelectorAll("#slide_2 .swiper-slide .slide_2_img")
                        let div_title = document.querySelectorAll("#slide_2 .swiper-slide .slide_2_content_title")
                        let div_author = document.querySelectorAll("#slide_2 .swiper-slide .slide_2_content_content")
                        let div_price = document.querySelectorAll("#slide_2 .swiper-slide .slide_2_content_content_2")
                        for (let j = 0; j < 18; j++) {
                            let doc = data.documents[j];
                            div_img[j].innerHTML = `<img src="${doc.thumbnail}">`;
                            div_title[j].innerHTML = `<h5>${doc.title}</h5>`;
                            div_author[j].innerHTML = `<p>${doc.authors}`;
                            // 콤마넣기
                            doc.price = doc.price.toLocaleString('ko-KR');
                            div_price[j].innerHTML = `<p>${doc.price}원`;
                        }
                    } else if (i == 2) {
                        let div_img = document.querySelectorAll("#today_ridi .swiper-slide")
                        for (let j = 0; j < 12; j++) {
                            let doc = data.documents[j];
                            console.log(doc)
                            div_img[j].innerHTML = `<img src="${doc.thumbnail}">`;
                        }
                    } else if (i == 3) {
                        let div_img = document.querySelectorAll("#new .swiper-slide .new_image")
                        let div_title = document.querySelectorAll("#new .swiper-slide .new_title")
                        let div_author = document.querySelectorAll("#new .swiper-slide .new_author")
                        for (let j = 0; j < 9; j++) {
                            let doc = data.documents[j];
                            div_img[j].innerHTML = `<img src="${doc.thumbnail}">`;
                            div_title[j].innerHTML = `<h4>${doc.title}</h4>`;
                            div_author[j].innerHTML = `<p>${doc.authors}`;
                        }
                    } else if (i == 4) {
                        let div_img = document.querySelectorAll("#best_inweek_content .swiper-slide .best_inweek_content_image")
                        let div_title = document.querySelectorAll("#best_inweek_content .swiper-slide .best_inweek_content_title")
                        let div_author = document.querySelectorAll("#best_inweek_content .swiper-slide .best_inweek_content_author")
                        let div_price = document.querySelectorAll("#best_inweek_content .swiper-slide .best_inweek_content_price")
                        for (let j = 0; j < 10; j++) {
                            let doc = data.documents[j];
                            div_img[j].innerHTML = `<img src="${doc.thumbnail}">`;
                            div_title[j].innerHTML = `<h3>${doc.title}</h3>`;
                            div_author[j].innerHTML = `<p>${doc.authors}`;
                            doc.price = doc.price.toLocaleString('ko-KR');
                            div_price[j].innerHTML = `<p>${doc.price}원`;
                        }
                    } else if (i == 5) {
                        let div_img = document.querySelectorAll("#now_ridi_content .swiper-slide .now_ridi_content_img")
                        let div_title = document.querySelectorAll("#now_ridi_content .swiper-slide .now_ridi_content_title")
                        let div_author = document.querySelectorAll("#now_ridi_content .swiper-slide .now_ridi_content_author")
                        let div_price = document.querySelectorAll("#now_ridi_content .swiper-slide .now_ridi_content_price")
                        for (let j = 0; j < 12; j++) {
                            let doc = data.documents[j];
                            div_img[j].innerHTML = `<img src="${doc.thumbnail}">`;
                            div_title[j].innerHTML = `<h4>${doc.title}</h4>`;
                            div_author[j].innerHTML = `<p>${doc.authors}`;
                            doc.price = doc.price.toLocaleString('ko-KR');
                            div_price[j].innerHTML = `<p>${doc.price}원`;
                        }
                    }
                }

            } catch (error) {
                console.log('에러발생', error)
            }


        }
        bookData();


    $(document).ready(function() { 

    // Top 버튼 클릭시 페이지 상단으로 이동
   	$('#top-btn').click(function(){
    	$('html, body').animate({scrollTop : 0}, 400);
        return false;
    });
    
 });

