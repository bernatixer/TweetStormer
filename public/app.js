$(document).ready(function main() {

    function add(str1, str2) {
        if (str1 === '') {
            return str2;
        } else {
            var res = str1 + ' ' + str2;
            return res;
        }
    }

    function proc(text) {
        var max_len = 140;
        var tweets = [];
        var arr_w = text.split(" ");
        var str = '';
        for (var i = 0; i < arr_w.length; i++){
            var temp = add(str, arr_w[i]);
            if (temp.length < max_len){
                str = temp;
            }
            if (add(str, arr_w[i + 1]).length >= max_len) {
                tweets.push(temp);
                str = '';
            }
            temp = '';
        }
        return tweets;
    }

    $('#submit').on('click', function() {
        var text = $('textarea').val();
        if (text !== '') {
            if (text.length > 140) var arr_tweets = proc(text);
            else {
                var arr_tweets = [text];
            }
            var tweets = $('.wrapper');
            $('.row').children().hide(400);
            for (var i = 0; i < arr_tweets.length; i++) {
                if (arr_tweets[i] !== '' && arr_tweets[i] !== '\n') {
                    tweets.append('\
                    <div class="tweet">\
                        <p id=\"tweet' + i + '\">' + arr_tweets[i] + '</p>\
                        <br/>\
                        <p class=\"copy ' + i + '\" onclick=\"copyToClipboard(\'#tweet' + i + '\')\"><a href=\"#\">Copy</a></p>\
                    </div>');
                }
            }
        }
    })

    copyToClipboard = function (element) {
        var $temp = $("<input />");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        var copy = '.' + element.substr(element.length - 1);
        var result = false;
        try {
            result = document.execCommand("copy");
            $(copy).text('Copied');
            console.log("Copied " + element);
        } catch (err) {
            console.log("Copy error: " + err);
        }

        $temp.remove();
        return result;
    }
});
