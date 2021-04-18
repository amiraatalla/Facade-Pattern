class BlurayPlayer {
  on() {
    console.log("Bluray player turning on...");
  }
  turnOff() {
    console.log("Bluray turning off..");
  }
  play() {
    console.log("Playing bluray disc...");
  }
}

class Amplifier {
  on() {
    console.log("Amplifier player turning on...");
  }
  turnOff() {
    console.log("Amplifier turning off..");
  }
  setSource(source: string) {
    console.log("Setting source to " + source);
  }
  setVolume(volume: number) {
    console.log("Setting Volume to " + volume);
  }
}

class Lights {
  dim() {
    console.log("Light is dimming");
  }
}

class TV {
  turnOn() {
    console.log("TV player turning on...");
  }
  turnOff() {
    console.log("TV turning off..");
  }
}

class PopcornMaker {
  turnOn() {
    console.log("PopcornMaker player turning on...");
  }
  turnOff() {
    console.log("PopcornMaker turning off..");
  }
  pop() {
    console.log("Popping corn!");
  }
}

class HomeTheaderFacade {
  private bluray: BlurayPlayer;
  private amp: Amplifier;
  private light: Lights;
  private tv: TV;
  private popMaker: PopcornMaker;

  constructor(bluray, amp, light, tv, popMaker) {
    this.bluray = bluray;
    this.amp = amp;
    this.light = light;
    this.tv = tv;
    this.popMaker = popMaker;
  }

  watchMovie() {
    this.bluray.on();
    this.bluray.play();

    this.amp.on();
    this.amp.setSource("BlurayMaker");
    this.amp.setVolume(11);

    this.light.dim();

    this.tv.turnOn();

    this.popMaker.turnOn();
    this.popMaker.pop();
  }
  endMovie() {
    this.bluray.turnOff();
    this.amp.turnOff();
    this.tv.turnOff();
    this.popMaker.turnOff();
  }
}

let bluray = new BlurayPlayer();
let amp = new Amplifier();
let light = new Lights();
let tv = new TV();
let popMaker = new PopcornMaker();

let homeTheater = new HomeTheaderFacade(bluray, amp, light, tv, popMaker);
homeTheater.watchMovie();
homeTheater.endMovie();

// tsc --init tsconfig.json
// tsc facade.ts & node facade.js