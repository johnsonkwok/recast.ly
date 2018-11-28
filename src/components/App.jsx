import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      video: exampleVideoData[0]
    };

    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  componentDidMount() {
    this.props.searchYouTube({
      'max': '5',
      'query': 'react js',
      'key': YOUTUBE_API_KEY
    }, (videos) => {
      this.setState({
        videos: videos
      });
    });
  }

  handleVideoClick(video) {
    this.setState({
      video: video
    });
  }

  handleSearch(searchText) {
    this.props.searchYouTube({
      'max': '5',
      'query': searchText,
      'key': YOUTUBE_API_KEY
    }, (videos) => {
      this.setState({
        videos: videos
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search handleSearch={this.handleSearch} /></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.video} /></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList handleVideoClick={this.handleVideoClick} videos={this.state.videos} /></em></h5></div>
          </div>
        </div>
      </div>
    );
  }

}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
