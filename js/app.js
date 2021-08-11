
// header scroll bolganda black bolishi
window.addEventListener("scroll", function () {
    var navScroll = document.getElementById('nav');
    navScroll.classList.toggle("fixed", window.scrollY > 5);
});



// menu Navbar
const navBack = () => {
    var nav = document.getElementById('nav').classList.toggle("change");
}


// footer Soat
const timeShover = (e) => {
    let timeNow = new Date();

    document.querySelector('.hours').textContent = timeNow.getHours();
    document.querySelector('.minutes').textContent = timeNow.getMinutes();
    document.querySelector('.seconds').textContent = timeNow.getSeconds();

}
timeShover();
setInterval(function () {
    timeShover();
}, 1000);



// owl-corausel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


// const signIn = document.querySelector('.signIn');

// signIn.addEventListener('click', (e) => {
//     console.log('spasiba')
//     // const sign_in = document.querySelector('.sign_in');

//     // if (sign_in) {
        
//     //     sign_in.style.display = 'block';
//     // }
//     e.preventDefault();
// })


function signInTrue() {
    const sign_in = document.querySelector('.sign_in');


    if (!sign_in.classList.contains("activeSignIn")) {
        sign_in.classList.add('activeSignIn')
    }
    else {
        sign_in.classList.remove('activeSignIn')
    }
}



function clickBtn() {
    const signInValueActive = document.getElementById("signInValueActive");
    const textValueActive = document.getElementById("textValueActive");
    const sign_in = document.querySelector('.sign_in');

    let x = document.getElementById("int_value").value;
    document.getElementById("signInValueActive").innerHTML = x;
    document.getElementById("textValueActive").innerHTML = `Xush kelibsiz!`;
    signInValueActive.style.color = "green";
    textValueActive.style.color = 'yellow';
    int_value.value = '';
    sign_in.style.opacity = '0';

}