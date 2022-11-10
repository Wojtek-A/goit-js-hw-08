const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",_.throttle((e=>{localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));const n=parseInt(localStorage.getItem("videoplayer-current-time"));t.setCurrentTime(n).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.3201f94f.js.map
