import footerImg from "./footerImg.png";
import "./footer.css";
import { Btn } from "../btn";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__div">
          <h2>Join 100 Compannies who boost their business with Product</h2>
          <Btn clas={'letBtn'} props={"Get This"} pading={"13px 35px 7px 33px"}/>
        </div>
        <img src={footerImg} alt="" />
      </footer>
    </>
  );
};
