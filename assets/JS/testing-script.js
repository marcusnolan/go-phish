 var timeOutShuffle;
$(".go-phish-card").click(() => {
    timeOutShuffle && clearTimeout(timeOutShuffle);
    timeOutShuffle = setTimeout(() => {
        shuffle()
    }, 5000);
}); 