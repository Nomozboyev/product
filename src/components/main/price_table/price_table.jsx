import { Btn } from "../../btn";
import "./price_table.css";

export const Price = () => {
  return (
    <>
      <div className="price">
        <h2>Price Table</h2>
        <p>We offer competitive price</p>
        <ul className="priceList">
          <li className="priceCard">
            <h3 className="priceCardName">Free</h3>{" "}
            <p>Brief price description</p>{" "}
            <div className="valueDiv">
              <span className="priceValue">0</span>
              <div>
                <b>$</b>
                <p style={{ color: "#AFAFAF" }}>per/month</p>
              </div>
            </div>{" "}
            <p>Only 2 Operators</p> <p>Notifications</p>
            <p style={{ marginBottom: "38px" }}>Landing Pages</p>
            <Btn clas={'other'} props={"Order Now"} pading={"11px 19px"} />
          </li>
          <li className="priceCard">
            <h3 className="priceCardName">Standard</h3>{" "}
            <p>Brief price description</p>{" "}
            <div className="valueDiv">
              <span className="priceValue">5</span>
              <div>
                <b>$</b>
                <p style={{ color: "#AFAFAF" }}>per/month</p>
              </div>
            </div>{" "}
            <p>5+ Operators</p> <p>Notifications</p>
            <p style={{ marginBottom: "38px" }}>Landing Pages</p>
            <Btn clas={'other'} props={"Order Now"} pading={"11px 19px"} />
          </li>
          <li className="priceCard">
            <h3 className="priceCardName">Premium</h3>{" "}
            <p>Brief price description</p>{" "}
            <div className="valueDiv">
              <span className="priceValue">10</span>
              <div>
                <b>$</b>
                <p style={{ color: "#AFAFAF" }}>per/month</p>
              </div>
            </div>{" "}
            <p>10+ Operators</p> <p>Notifications</p>
            <p style={{ marginBottom: "38px" }}>Landing Pages</p>
            <Btn clas={'other'} props={"Order Now"} pading={"11px 19px"} />
          </li>
        </ul>
      </div>
    </>
  );
};
