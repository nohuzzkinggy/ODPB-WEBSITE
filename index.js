// Wait for the document to be fully loaded using jQuery's ready function
$(document).ready(function() {
    
    const $cursor = $('#cursor');

    // 1. Custom Cursor Movement Logic (jQuery)
    $(window).mousemove(function (e) {
        // Update the position of the cursor elements.
        // We center the cursor by subtracting half its width/height (1.25rem or 20px) from the mouse coordinates.
        $(".ringnotbroken").css(
            "transform",
            `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
        );
    });

    // 2. Interactive Element Hover Effect (The "Cool Circle Follow Effect")
    // When the mouse enters an interactive element (links, buttons, but NOT the search bar),
    // we scale the custom cursor up to provide visual feedback.
    $(document).on('mouseenter', 'a:not(.navbar__link), button, input:not(#team-search)', function() {
        $cursor.css('transform', 'scale(1.5)');
    });

    // When the mouse leaves, we return the cursor to its normal size.
    $(document).on('mouseleave', 'a:not(.navbar__link), button, input:not(#team-search)', function() {
        $cursor.css('transform', 'scale(1)');
    });

    // 3. Specific Handling for the Search Input (#team-search)
    // When entering the input, hide the custom cursor completely.
    $('#team-search').on('mouseenter', function() {
        $cursor.hide();
    });

    // When leaving the input, show the custom cursor again.
    $('#team-search').on('mouseleave', function() {
        $cursor.show();
    });
});