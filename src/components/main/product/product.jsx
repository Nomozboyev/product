import { Btn } from "../../btn";
import "./product.css";
import cursor from "./cursor.png";
import img2 from "./img2.png";
import { HeartFilled, ClockCircleFilled } from "@ant-design/icons";

export const Product = () => {
  return (
    <>
      <div className="shadowDiv">
      <section className="product">
        <span className="productName">
          <h1>Product was Built Specifically for You</h1>
        </span>
        <ul className="productList">
          <li className="productCard">
            <a
              href="#"
              className="iconDiv"
              style={{ backgroundColor: "#02897A" }}
            >
              <img src={cursor} alt="cursor" />
            </a>
            <h2>First click tests</h2>
            <p>While most people enjoy casino gambling</p>
          </li>
          
          <li className="productCard">
            <a
              href="#"
              className="iconDiv"
              style={{ backgroundColor: "#4D8DFF" }}
            >
              <img src={img2} alt="" />
            </a>
            <h2>Design surveys</h2>
            <p>Sports betting, lottery and bingo playing for the fun</p>
          </li>
          <li className="productCard">
            <a
              href="#"
              className="iconDiv"
              style={{ backgroundColor: "#740A76" }}
            >
              <HeartFilled style={{ color: "white" }} />
            </a>
            <h2>Preference tests</h2>
            <p>The Myspace page defines the individual.</p>
          </li>
          <li className="productCard">
            <a
              href="#"
              className="iconDiv"
              style={{ backgroundColor: "#F03E3D" }}
            >
              <ClockCircleFilled style={{ color: "white" }} />
            </a>
            <h2>Five second tests</h2>
            <p>Personal choices and the overall personality of the person. </p>
          </li>
        </ul>
        <Btn clas={'basisBtn'} props={'SIGN UP NOW'} pading={'15px 32px'} />
      </section>
      </div>
    </>
  );
};
