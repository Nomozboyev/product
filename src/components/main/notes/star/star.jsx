import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import './star.css'
import { useContext } from "react";
import { LocalNotes } from "../../../../context";
export const Star = ({size}) => {
  let [{star1,setstar1},{star2, setstar2},{star3, setstar3},{star4, setstar4},{star5, setstar5}]=useContext(LocalNotes);
  return (
    <>
      <form className="starForm" onClick={(evt)=>console.log(evt.target)} >
        <label htmlFor="">{star1?<HeartFilled style={{fontSize:size, color:'red'}}  />:<HeartOutlined style={{fontSize:size}} />}</label>
        <input type="checkbox" name="star1" id="1"  onChange={()=>setstar1(!star1)} />
        <label htmlFor="">{star2?<HeartFilled  style={{fontSize:size, color:'red'}} />:<HeartOutlined style={{fontSize:size}} />}</label>
        <input type="checkbox" name="star2" id="2" onChange={()=>setstar2(!star2)} />
        <label htmlFor="">{star3?<HeartFilled  style={{fontSize:size, color:'red'}} />:<HeartOutlined style={{fontSize:size}} />}</label>
        <input type="checkbox" name="star3" id="3" onChange={()=>setstar3(!star3)} />
        <label htmlFor="">{star4?<HeartFilled  style={{fontSize:size, color:'red'}} />:<HeartOutlined style={{fontSize:size}} />}</label>
        <input type="checkbox" name="star4" id="4" onChange={()=>setstar4(!star4)} />
        <label htmlFor="">{star5?<HeartFilled  style={{fontSize:size ,color:'red'}} />:<HeartOutlined style={{fontSize:size}} />}</label>
        <input type="checkbox" name="star5" id="5" onChange={()=>setstar5(!star5)} />
      </form>
    </>
  );
};
