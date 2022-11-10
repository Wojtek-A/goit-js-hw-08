!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",_.throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));var n=parseInt(localStorage.getItem("videoplayer-current-time"));t.setCurrentTime(n).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.46c4bca1.js.map
