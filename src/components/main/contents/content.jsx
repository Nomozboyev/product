import { Cards } from "./card/content_card";
import "./content.css";
import image3 from "./image3.png";
import image2 from "./image2.png";
import image1 from "./image1.png";

export const Content = () => {
  return (
    <>
      <div className="content">
        <h2>Contents Strategies</h2>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <ul className="contentList">
          <li className="card">
            <Cards src={image1}>
            <p>By <b> Wahid Ari</b> |  03 March 2019</p>

              <h3 className="title">Increasing Prosperity With Positive Thinking  </h3>
            </Cards>
          </li>
          <li className="card">
            <Cards src={image2}>
              {" "}
              <p>By <b> Wahid Ari</b> |  03 March 2019</p>
              <h3 className="title">Motivation Is The First Step To Success</h3>
            </Cards>
          </li>
          <li className="card">
            <Cards src={image3}>
              {" "}
              <p>By <b> Wahid Ari</b> |  03 March 2019</p>

              <h3 className="title">Success Steps For Your Personal Or Business</h3>
            </Cards>
          </li>
        </ul>
      </div>
    </>
  );
};
