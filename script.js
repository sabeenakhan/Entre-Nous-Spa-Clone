function openNav() {
    document.getElementById("mySidebar").style.width = "68%";
    // document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
}

function swapImages() {
    var elemOne = document.querySelector("#elementOne") //halo by sciton
    var elemTwo = document.querySelector("#elementTwo") //coolsculpting
    var elemThree = document.querySelector("#elementThree") //profound skin
    var elemFour = document.querySelector("#elementFour") //emsculp

    var imgLtOne = document.querySelector("#halo") //left img one
    var imgLtTwo = document.querySelector("#cool") //left img two
    var imgLtThree = document.querySelector("#pro") //left img three
    var imgLtFour = document.querySelector("#ems") //left img four

    var imgRtOne = document.querySelector("#sci") //right img one
    var imgRtTwo = document.querySelector("#ting") //right img two
    var imgRtThree = document.querySelector("#skin") //right img three
    var imgRtFour = document.querySelector("#culp") //right img four
    elemTwo.addEventListener("mouseenter", function () {
        imgLtOne.style.display = "none",
            imgRtTwo.style.display = "none",
            imgLtTwo.style.display = "block",
            imgRtOne.style.display = "block"
    })
    elemTwo.addEventListener("mouseleave", function () {
        imgLtOne.style.display = "block",
            imgRtTwo.style.display = "block",
            imgLtTwo.style.display = "none",
            imgRtOne.style.display = "none"
    })

    // 2nd func

    elemThree.addEventListener("mouseenter", function () {
        imgLtOne.style.display = "none",
            imgRtTwo.style.display = "none",
            imgLtThree.style.display = "block",
            imgRtFour.style.display = "block"
    })
    elemThree.addEventListener("mouseleave", function () {
        imgLtOne.style.display = "block",
            imgRtTwo.style.display = "block",
            imgLtThree.style.display = "none",
            imgRtFour.style.display = "none"
    })

    // 3rd func

    elemFour.addEventListener("mouseenter", function () {
        imgLtOne.style.display = "none",
            imgRtTwo.style.display = "none",
            imgLtFour.style.display = "block",
            imgRtThree.style.display = "block"
    })
    elemFour.addEventListener("mouseleave", function () {
        imgLtOne.style.display = "block",
            imgRtTwo.style.display = "block",
            imgLtFour.style.display = "none",
            imgRtThree.style.display = "none"
    })
}

swapImages()

// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});