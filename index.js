// Wait for the document to be fully loaded using jQuery's ready function
$(document).ready(function() {
    
    
    // 1. Custom Cursor Movement Logic (jQuery)
    $(window).mousemove(function (e) {
        // Update the position of the cursor elements.
        // We center the cursor by subtracting half its width/height (1.25rem or 20px) from the mouse coordinates.
        $(".ringnotbroken").css(
            "transform",
            `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
        );
    });

    // 2. Interactive Element Hover Effect
    // When the mouse enters an interactive element (links, buttons, inputs),
    // we scale the custom cursor up to provide visual feedback.
    // NOTE: We exclude '.navbar__link' because the navbar has its own strong visual hover effect (the gooey indicator).
    $(document).on('mouseenter', 'a:not(.navbar__link), button, input', function() {
        $('#cursor').css('transform', 'scale(1.5)');
    });

    // When the mouse leaves, we return the cursor to its normal size.
    $(document).on('mouseleave', 'a:not(.navbar__link), button, input', function() {
        $('#cursor').css('transform', 'scale(1)');
    });
});
