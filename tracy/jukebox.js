function parseNote(note) {
  notes = note.split("*");

  notes[1] = notes[1] * 1;

  if (isNaN(notes[1])) {
    notes[1] = 1;
  }

  obj = {
    "pitch": notes[0],
    "beats": notes[1],
  }

  return obj;
}

// console.log(parseNote("C#"));

function parseSong(songList) {
  array = [];
  songs = songList.split(" ");
  for (var i = 0; i < songs.length; i++) {
    array[i] = parseNote(songs[i]);
  }
  console.log(array);
  return array;
}
// parseSong("Ab B")
// console.log(parseSong("Ab B"));
