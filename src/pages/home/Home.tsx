import StoryCard from '../../components/storyCard/storyCard';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className="stories">
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
          <StoryCard></StoryCard>
      </div>
      <div className="sharing">
        Sharing
      </div>
      <div className="posts">
        Posts
      </div>
    </div>
  )
}

export default Home;