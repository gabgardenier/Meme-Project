'use strict';

$('#search').on('submit', function(event) {
    event.preventDefault();
    var lookup = $('#lookup').val().toLowerCase();
    if(lookup === 'zerg') {
        window.open("https://www.google.com/search?q=zerg+rush&rlz=1C1GCEU_enUS821US821&oq=zerg+rush&aqs=chrome..69i57j0l5.2702j0j7&sourceid=chrome&ie=UTF-8");    
    }
    
});