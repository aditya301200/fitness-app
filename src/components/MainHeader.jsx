import { Link } from "react-router-dom";
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header_container">
        <div className="main_header_left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            provident accusamus ea aliquid sapiente! Sequi.
          </p>
          <Link to='/plans' className="btn lg">Get Started</Link>
        </div>
        <div className="main_header_right">
          <div className="main_header_circle"></div>
          <div className="main_header_image">
            <img src={Image} alt="Main Header-img" />
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
