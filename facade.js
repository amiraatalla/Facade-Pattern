var BlurayPlayer = /** @class */ (function () {
    function BlurayPlayer() {
    }
    BlurayPlayer.prototype.on = function () {
        console.log("Bluray player turning on...");
    };
    BlurayPlayer.prototype.turnOff = function () {
        console.log("Bluray turning off..");
    };
    BlurayPlayer.prototype.play = function () {
        console.log("Playing bluray disc...");
    };
    return BlurayPlayer;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.on = function () {
        console.log("Amplifier player turning on...");
    };
    Amplifier.prototype.turnOff = function () {
        console.log("Amplifier turning off..");
    };
    Amplifier.prototype.setSource = function (source) {
        console.log("Setting source to " + source);
    };
    Amplifier.prototype.setVolume = function (volume) {
        console.log("Setting Volume to " + volume);
    };
    return Amplifier;
}());
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.dim = function () {
        console.log("Light is dimming");
    };
    return Lights;
}());
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log("TV player turning on...");
    };
    TV.prototype.turnOff = function () {
        console.log("TV turning off..");
    };
    return TV;
}());
var PopcornMaker = /** @class */ (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.turnOn = function () {
        console.log("PopcornMaker player turning on...");
    };
    PopcornMaker.prototype.turnOff = function () {
        console.log("PopcornMaker turning off..");
    };
    PopcornMaker.prototype.pop = function () {
        console.log("Popping corn!");
    };
    return PopcornMaker;
}());
var HomeTheaderFacade = /** @class */ (function () {
    function HomeTheaderFacade(bluray, amp, light, tv, popMaker) {
        this.bluray = bluray;
        this.amp = amp;
        this.light = light;
        this.tv = tv;
        this.popMaker = popMaker;
    }
    HomeTheaderFacade.prototype.watchMovie = function () {
        this.bluray.on();
        this.bluray.play();
        this.amp.on();
        this.amp.setSource("BlurayMaker");
        this.amp.setVolume(11);
        this.light.dim();
        this.tv.turnOn();
        this.popMaker.turnOn();
        this.popMaker.pop();
    };
    HomeTheaderFacade.prototype.endMovie = function () {
        this.bluray.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
        this.popMaker.turnOff();
    };
    return HomeTheaderFacade;
}());
var bluray = new BlurayPlayer();
var amp = new Amplifier();
var light = new Lights();
var tv = new TV();
var popMaker = new PopcornMaker();
var homeTheater = new HomeTheaderFacade(bluray, amp, light, tv, popMaker);
homeTheater.watchMovie();
homeTheater.endMovie();
