document.addEventListener("DOMContentLoaded", function() {
    var toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var targetId = button.getAttribute("data-target");
            var targetElement = document.querySelector(targetId);
            
            if (targetElement.classList.contains("show")) {
                targetElement.classList.remove("show");
                button.classList.add("collapsed");
            } else {
                targetElement.classList.add("show");
                button.classList.remove("collapsed");
            }
            
        });
    });
});