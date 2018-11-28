
var searchYouTube = (options, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search', {
    'maxResults': options.max,
    'part': 'snippet',
    'q': options.query,
    'key': options.key,
    'type': 'video',
  }).done((data) => { callback(data.items); });

};

export default searchYouTube;
