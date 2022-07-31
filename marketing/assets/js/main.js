$(document).ready(function($) {
    // "use strict";
    // $("[data-background").each(function() {
    //     $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    // });

    // // Toggle the side navigation
    // $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    //     $("body").toggleClass("sidebar-toggled");
    //     $(".sidebar").toggleClass("toggled");
    //     if ($(".sidebar").hasClass("toggled")) {
    //         $('.sidebar .collapse').collapse('hide');
    //     };
    // });

    // // Close any open menu accordions when window is resized below 768px
    // $(window).resize(function() {
    //     if ($(window).width() < 768) {
    //         $('.sidebar .collapse').collapse('show');
    //     };

    //     // Toggle the side navigation when window is resized below 480px
    //     if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
    //         $("body").addClass("sidebar-toggled");
    //         $(".sidebar").addClass("toggled");
    //         $('.sidebar .collapse').collapse('show');
    //     };
    // });

    "use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('show');
        };

        // Toggle the side navigation when window is resized below 480px
        if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
            $("body").addClass("sidebar-toggled");
            $(".sidebar").addClass("toggled");
            $('.sidebar .collapse').collapse('show');
        };
    });



    // tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })



    // Modal
    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function() {
        myInput.focus()
    })


}(jQuery));