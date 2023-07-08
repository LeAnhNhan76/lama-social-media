import './stories.scss';

const stories = [
  {
    id: 1,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 1,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 1,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 2,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 3,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 4,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 5,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 6,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 7,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 8,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 8,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 8,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 8,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
  {
    id: 8,
    name: 'John Doe',
    img: 'https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
]

const Stories = () => {
  return (
    <div className="stories">
      <div className="story">
        <img src="https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <button>+</button>
      </div>
      {stories.map(story => (
        <div className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories;