import kick from './sounds/kick.wav';
import snare from './sounds/snare.wav';
import clap from './sounds/clap.wav';
import hiHatOpen from './sounds/hi-hat-open.wav';
import hiHatClosed from './sounds/hi-hat-closed.wav';
import tomOne from './sounds/tom-1.wav';
import tomTwo from './sounds/tom-2.wav';
import tomThree from './sounds/tom-3.wav';
import shaker from './sounds/shaker.wav';

const drumKeys = {
    81: {
        letter: "Q",
        descript: "kick",
        sound: kick,
        keyDownUp: 81,
        keyPress: 113
    },
    87: {
        letter: "W",
        descript: "snare",
        sound: snare,
        keyDownUp: 87,
        keyPress: 119
    },
    69: {
        letter: "E",
        descript: "clap",
        sound: clap,
        keyDownUp: 69,
        keyPress: 101
    },
    65: {
        letter: "A",
        descript: "hi-hat open",
        sound: hiHatOpen,
        keyDownUp: 65,
        keyPress: 97
    },
    83: {
        letter: "S",
        descript: "hi-hat closed",
        sound: hiHatClosed,
        keyDownUp: 83,
        keyPress: 115
    },
    68: {
        letter: "D",
        descript: "tom 1",
        sound: tomOne,
        keyDownUp: 68,
        keyPress: 100
    },
    90: {
        letter: "Z",
        descript: "tom 2",
        sound: tomTwo,
        keyDownUp: 90,
        keyPress: 122
    },
    88: {
        letter: "X",
        descript: "tom 3",
        sound: tomThree,
        keyDownUp: 88,
        keyPress: 120
    },
    67: {
        letter: "C",
        descript: "shaker",
        sound: shaker,
        keyDownUp: 67,
        keyPress: 99
    }
};

export default drumKeys;