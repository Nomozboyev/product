import { Btn } from "../../btn";
import amico from "./amico.png";
import './intro.css'
import { CaretRightOutlined } from '@ant-design/icons';

export const Intro = () => {
  return (
    <>
      <div className="Intro">
        <div className="intro__left">
          <div className="baner">
            <h1>Work at the speed of thought</h1>
          <p>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <div className="btnDiv">
            <Btn clas={'basisBtn'} props={"Get started"} pading={"15px 41px"} />
            <a href="#" className="watchVideo"><CaretRightOutlined style={{fontSize:"20px", color:'#02897A'}}/> <span>Watch the Video</span></a>
          </div>
          </div>
        </div>
        <div className="intro__reight">
          <img src={amico} alt="" />
        </div>
      </div>
    </>
  );
};



