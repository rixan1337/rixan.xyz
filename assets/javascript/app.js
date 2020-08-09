var _app = function () {
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 0.12;
    this.musicFadeIn = 4000;
    this.skippedIntro = false;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"];
    this.brandDescription = [
        "paster",
        "csgo player",
        "hobby video cutter",
        "hobby photographer",
	"discord: rixan#5267"
    ];

    this.titleChanger = function (text, delay) {
        text = text ||
            ['.', 'r', 'ri', 'rix', 'rixa', 'rixan', 'rixa', 'rix', 'ri', 'r'];
        delay = delay || 400;

        var counter = 0;

        setInterval(function () {
            if(counter < text.length) 
                document.title = text[counter++]; 
            else 
                document.title = text[counter = 0];
        }, delay);
    }
};

var app = new _app();
