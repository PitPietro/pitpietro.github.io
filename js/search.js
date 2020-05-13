function searchAndHighlight(searchTerm, selector) {
    console.log('searchTerm: ' + searchTerm);
    if(searchTerm.length == 1) {
        console.log('searchTerm.length == 1 --> The page breaks if the search is made only on a character. So let\'s advice the user and beack break the function.');
        alert('The algorithm does not support a single char search. Please, try to input a word.');
    } else {
        if (searchTerm) {
            var selector = selector || "#body-id"; //use body as selector if none provided
            var searchTermRegEx = new RegExp(searchTerm, "ig");
            var matches = $(selector).text().match(searchTermRegEx);
            if (matches != null && matches.length > 0) {
                $('.highlighted').removeClass('highlighted'); //Remove old search highlights
    
                //Remove the previous matches
                $span = $('#body-id span');
                $span.replaceWith($span.html());
    
                if (searchTerm === "&") {
                    searchTerm = "&amp;";
                    searchTermRegEx = new RegExp(searchTerm, "ig");
                }
                $(selector).html($(selector).html().replace(searchTermRegEx, "<span class='match'>" + searchTerm + "</span>"));
                $('.match:first').addClass('highlighted');
    
                var i = 0;
    
                $('.next_h').off('click').on('click', function () {
                    i++;
    
                    if (i >= $('.match').length) i = 0;
    
                    $('.match').removeClass('highlighted');
                    $('.match').eq(i).addClass('highlighted');
                    $('.ui-mobile-viewport').animate({
                        scrollTop: $('.match').eq(i).offset().top
                    }, 300);
                });
                $('.previous_h').off('click').on('click', function () {
    
                    i--;
    
                    if (i < 0) i = $('.match').length - 1;
    
                    $('.match').removeClass('highlighted');
                    $('.match').eq(i).addClass('highlighted');
                    $('.ui-mobile-viewport').animate({
                        scrollTop: $('.match').eq(i).offset().top
                    }, 300);
                });
    
                if ($('.highlighted:first').length) { //if match found, scroll to where the first one appears
                    $(window).scrollTop($('.highlighted:first').position().top);
                }
                return true;
            }
        }
    }
    
    return false;
}

$(document).on('click', '.searchButton', function (event) {
    $result = $('.searchInput').val();

    $(".highlighted").removeClass("highlighted").removeClass("match");
    if (!searchAndHighlight($result)) {
        alert($result + " NOT found!");
    }


});
