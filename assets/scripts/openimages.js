document.addEventListener('DOMContentLoaded', function() {
    const ongImages = document.querySelectorAll('.ong-card__img > img');
    const ongPopupContainer = document.querySelectorAll('.ong-card__img');

    ongImages.forEach(function(ongImage, index) {
        ongImage.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the event from reaching the window

            // Toggle the classes for the clicked image and its container
            ongImage.classList.toggle("ong__popup");
            ongPopupContainer[index].classList.toggle("ong__popup__container");
        });

        ongPopupContainer[index].addEventListener('click', function(event) {
            // Prevent the event from propagating to the ongImage element
            event.stopPropagation();
        });
    });

    window.addEventListener('click', function() {
        ongImages.forEach(function(ongImage, index) {
            ongImage.classList.remove("ong__popup");
            ongPopupContainer[index].classList.remove("ong__popup__container");
        });
    });
});
