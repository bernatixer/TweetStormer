$(document).ready(function main() {
    var max_len = 140;

    function proc(text) {
        var tweets = [];
        
        return tweets;
    }

    $('#submit').on('click', function() {
        var text = $('textarea').val();
        if (text !== '') {
            var arr_tweets = proc(text);
            var tweets = $('.wrapper');
            $('.row').children().hide(400);
            for (var i = 0; i < tweets.length; i++){
                tweets.append('<div class=\"tweet\">' + arr_tweets[i] + '<br /><p class=\"copy-tag\">Copy</p></div>');
            }
        }
    })

    $('#copy-tag').on('click', function(){

    })
});
