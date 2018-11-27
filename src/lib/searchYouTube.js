// import of the key? 
import YOUTUBE_API_KEY from '../lib/searchYouTube.js';

// searchYouTube({ key: 'API_KEY', query: 'cats', max: 10 }, () => {});

var searchYouTube = (options, callback) => {

// var options = {
//   key: '',
//   query: 'react',
//   max: 5
// };

  $.get('https://www.googleapis.com/youtube/v3/search', {
    'maxResults': options.max,
    'part': 'snippet',
    'q': options.query,
    'key': options.key,
    'type': 'video',
  }).done(callback);

  // $.ajax({
  //   url:'https://www.googleapis.com/youtube/v3/search', 
  //   type: 'GET',
  //   data: {
  //     'maxResults': options.max,
  //     'part': 'snippet',
  //     'q': options.query,
  //     'key': options.key,
  //     'type': 'video',
  //   }, 
  //   // success: function(data) { console.log(data)}, 
  // }).done(callback);

};

export default searchYouTube;
