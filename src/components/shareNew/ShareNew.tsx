import Image from '../../assets/images/img.png';
import Friend from '../../assets/images/friend.png';
import Map from '../../assets/images/map.png';

import './shareNew.scss';

const leftButtons = [
  {img: Image, text: 'Add image'},
  {img: Map, text: 'Add place'},
  {img: Friend, text: 'Tag friends'}
];

const ShareNew = () => {
  return (
    <div className="share-new">
      <div className="user-thoughts">
        <img src={'https://images.pexels.com/photos/16999877/pexels-photo-16999877/free-photo-of-miradas.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} alt="" />
        <span>What's on your mind, John</span>
      </div>
      <hr className='divider'></hr>
      <div className="buttons">
        <div className="left">
          {leftButtons.map(button => (
            <div className="item">
              <img src={button.img} alt="" />
              <span>{button.text}</span>
            </div>
          ))}
        </div>
        <div className="right">
          <button>Share</button>
        </div>
      </div>
    </div>
  )
}

export default ShareNew