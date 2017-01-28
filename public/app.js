$(document).ready(function main() {

    function proc(text) {
        var max_len = 140;
        var tweets = [];
        var arr_words = text.split();
        var str = '';
        for (var i = 0; i < arr_words; i++){
            var temp = str.concat(arr_words[i]);
            if (temp.length < 140){

            }
        }
        return tweets;
    }

    $('#submit').on('click', function() {
        var text = $('textarea').val();
        if (text !== '') {
            var arr_tweets = proc(text);
            var tweets = $('.wrapper');
            $('.row').children().hide(400);
            for (var i = 0; i < arr_tweets.length; i++) {
                console.log(arr_tweets[i].length);
                if (arr_tweets[i] !== '' && arr_tweets[i] !== '\n') {
                    tweets.append('<div class=\"tweet\"><p>' + arr_tweets[i] + '</p><br /><p class=\"copy-tag\">Copy</p></div>');
                }
            }
        }
    })

    $('#copy-tag').on('click', function() {

    })
});
