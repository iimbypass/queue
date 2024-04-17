window.onload = function() {
  var audioPlayer = document.getElementById('audio-player');
  var playlist = document.getElementById('playlist');
  var tracks = playlist.getElementsByTagName('li');
  var currentTrack = 0;

  // Thêm các bài hát vào playlist ở đây hoặc qua server-side code
  var songs = [
    { 'src': './store/1.mp3', 'title': 'null' },
    { 'src': 'path/to/song2.mp3', 'title': 'null' },
    // thêm các bài khác
  ];

  songs.forEach(function(song, index) {
    var li = document.createElement('li');
    li.textContent = song.title;
    li.dataset.src = song.src;
    li.onclick = function() { 
      playSong(index); 
    };
    playlist.appendChild(li);
  });

  function playSong(index) {
    if(tracks[currentTrack]) {
      tracks[currentTrack].classList.remove('active');
    }

    currentTrack = index;
    tracks[currentTrack].classList.add('active');
    audioPlayer.src = tracks[currentTrack].dataset.src;
    audioPlayer.play();
  }

  audioPlayer.onended = function() {
    currentTrack++;
    if(currentTrack >= tracks.length) {
      currentTrack = 0;
    }
    playSong(currentTrack);
  };

  // Phát bài đầu tiên trong danh sách
  playSong(0);
};