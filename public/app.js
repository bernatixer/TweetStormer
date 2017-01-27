var tweet = '<div class="tweet">Hola ijsibsdonanj jsadjsdfa<br /><div><p class="copy-tag">Copy</p></div></div>';

function callback() {
    var tweets = $('.tweets');
    var count = 3;
    for (var i = 0; i < count; i++){
        tweets.append(tweet);
    }
}

$(document).ready(function() {
    window.setTimeout(callback, 100);
});
