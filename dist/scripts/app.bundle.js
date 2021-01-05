document.addEventListener("readystatechange", function() {
    if (document.readyState === "complete") {
        $('#loading').fadeOut(500, function() {document.getElementById('loading').remove();});
        $('body').css('overflow', 'auto');
    }
});