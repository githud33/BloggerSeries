const video = document.querySelector('video');
const tracks = video.querySelectorAll('track[kind="captions"]');

tracks.forEach(track => {
  track.remove(); 
});
