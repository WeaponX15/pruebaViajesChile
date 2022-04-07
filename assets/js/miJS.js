$(function () {

    //SMOOTH SCROLL QUIÉNES SOMOS
    $("#idQsomos").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                window.location.hash = hash;
            });
        }
    });

    //SMOOTH SCROLL DESTACADOS
    $("#idDestacados").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                window.location.hash = hash;
            });
        }
    });

    //SMOOTH SCROLL CONTACTO
    $("#idFormulario").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                window.location.hash = hash;
            });
        }
    });

    //TOOLTIPS ICONOS "QUIÉNES SOMOS"
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    //POPOVERS IMÁGENES CARDS
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

})