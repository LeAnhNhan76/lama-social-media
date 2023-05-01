import Friends from "../../assets/images/1.png";
import Groups from "../../assets/images/2.png";
import Market from "../../assets/images/3.png";
import Watch from "../../assets/images/4.png";
import Memories from "../../assets/images/5.png";
import Events from "../../assets/images/6.png";
import Gaming from "../../assets/images/7.png";
import Gallery from "../../assets/images/8.png";
import Videos from "../../assets/images/9.png";
import Messages from "../../assets/images/10.png";
import Tutorials from "../../assets/images/11.png";
import Courses from "../../assets/images/12.png";
import Fund from "../../assets/images/13.png";
import './leftBar.scss';

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img 
              src='https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            />
            <span>Jon Henry</span>
          </div>
          <div className="item">
            <img src={Friends} alt=""></img>
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt=""></img>
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt=""></img>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Friends} alt=""></img>
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Watch} alt=""></img>
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt=""></img>
            <span>Memmories</span>
          </div>
          <hr />
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt=""></img>
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt=""></img>
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt=""></img>
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt=""></img>
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt=""></img>
            <span>Messages</span>
          </div>
          <hr />
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt=""></img>
            <span>fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt=""></img>
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt=""></img>
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar