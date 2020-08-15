import { writable } from 'svelte/store';

export const songURLstore = writable("http://192.168.0.31:6789/Music/Chris_Stapleton/From_A_Room/01_-_Chris_Stapleton_-_From_A_Room_-_Broken_Halos.mp3");
export const artiststore = writable("BAR");
export const songstore = writable("BAZ");
export const songidstore = writable("FOO");
export const localplayURL = writable("URL")
export const TVlocalplayURL = writable("URL")
