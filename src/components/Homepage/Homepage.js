import './Homepage.css';
import TopNews from '../TopNews/TopNews';
import Announcements from '../Announcements/Announcements';
import Discussions from '../Discussions/Discussions';

function Homepage() {
  return (
    <div className="Homepage">
    <TopNews/>
    <Discussions/>
    <Announcements/>
  </div>
  );
}

export default Homepage;