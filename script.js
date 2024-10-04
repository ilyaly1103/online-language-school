document.addEventListener("DOMContentLoaded", function () {
    let toggleButtons = document.querySelectorAll(".toggle-button");
    let punkt = document.querySelectorAll("#punkt");
    const card = document.querySelectorAll("#card");

    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            let targetId = button.getAttribute("data-target");
            let targetElement = document.querySelector(targetId);

            if (targetElement.classList.contains("show")) {
                targetElement.classList.remove("show");
                button.classList.add("collapsed");
            } else {
                targetElement.classList.add("show");
                button.classList.remove("collapsed");
                $(targetElement).hide().fadeIn(600);
            }

        });
    });

    punkt[0].classList.add("punkt-color");

    punkt.forEach(function (btn) {
        btn.addEventListener("click", function () {
            punkt.forEach(function (button) {
                button.classList.remove("punkt-color");
            });
            card.forEach(function (button) {
                button.classList.remove("card-active");
            });
            btn.classList.add("punkt-color");

            const index = this.getAttribute("data-index");
            const cardActive = document.querySelectorAll("#card")[index];
            const arrowActive = document.querySelectorAll("#card")[index];

            $(cardActive).hide().fadeIn(600);
            cardActive.classList.add("card-active");
            console.log('Нажата точка с индексом:', index);
        });
    });

    document.querySelector('.right').addEventListener('click', function () {
        let activeIndex = [...card].findIndex(card => card.classList.contains('card-active'));
        if (activeIndex < card.length - 1) {
            $(card).hide().fadeIn(600);
            changeActiveCard(activeIndex + 1);
        }
    });

    document.querySelector('.left').addEventListener('click', function () {
        let activeIndex = [...card].findIndex(card => card.classList.contains('card-active'));
        if (activeIndex > 0) {
            $(card).hide().fadeIn(600);
            changeActiveCard(activeIndex - 1);
        }
    });
    function changeActiveCard(newIndex) {
        card.forEach(cards => cards.classList.remove('card-active'));
        punkt.forEach(dot => dot.classList.remove('punkt-color'));

        card[newIndex].classList.add('card-active');
        punkt[newIndex].classList.add('punkt-color');
    }
});

