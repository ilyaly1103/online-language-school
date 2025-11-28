document.addEventListener("DOMContentLoaded", function () {
    let toggleButtons = document.querySelectorAll(".toggle-button");
    let punkt = document.querySelectorAll("#punkt");
    const card = document.querySelectorAll("#card");
    let currentIndex = 0;
    let startX = 0;
    let endX = 0;
    
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

            const index = parseInt(this.getAttribute("data-index"), 10);
            changeActiveCard(index);
        });
    });

    function changeActiveCard(newIndex) {
        card.forEach(cards => cards.classList.remove("card-active"));
        punkt.forEach(dot => dot.classList.remove("punkt-color"));

        card[newIndex].classList.add("card-active");
        punkt[newIndex].classList.add("punkt-color");
    }

    
    const carContainer = document.querySelector(".car");

    carContainer.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
    });

    carContainer.addEventListener("touchmove", (event) => {
        endX = event.touches[0].clientX;
    });

    carContainer.addEventListener("touchend", () => {
        if (startX > endX + 50) {
            
            if (currentIndex < card.length - 1) {
                currentIndex++;
                changeActiveCard(currentIndex);
            }
        } else if (startX < endX - 50) {
            
            if (currentIndex > 0) {
                currentIndex--;
                changeActiveCard(currentIndex);
            }
        }
    });
});
