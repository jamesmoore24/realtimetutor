import { Music } from '../Music.js';
import { notes } from '../MusicLanguage.js';
import { Instrument } from '../Instrument.js';
import { playOnMidiPlayer } from '../MusicPlayer.js';

/**
 * Play an octave up and back down starting from middle C.
 */
export async function main(): Promise<void> {

    // parse simplified abc into a Music
    const scale: Music = notes("C D E F G A B C' B A G F E D C", Instrument.PIANO);

    console.log(scale.toString());

    // play!
    console.log('playing now...');
    await playOnMidiPlayer(scale);
    console.log('playing done');

}

void main();
