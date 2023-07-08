import Posts from '../../components/posts/Posts';
import ShareNew from '../../components/shareNew/ShareNew';
import Stories from '../../components/stories/Stories';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Stories></Stories>
      <ShareNew></ShareNew>
      <Posts></Posts>
    </div>
  )
}

export default Home;