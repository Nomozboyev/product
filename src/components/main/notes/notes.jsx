import { Star } from "./star";
import "./notes.css";

export const Notes = () => {
  return (
    <>
      <div className="notes">
        <h2>What Clients Say</h2>
        <p className="clientNotes">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <ul className="notesList">
          <li className="notesCard">
            <Star  size={'18px'} />
            <p>
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <a href="#" className="Acaunt">
              <img
                src="https://cdn0.iconfinder.com/data/icons/education-collection-2/32/user_profile_person_staff_student_circle_boss-1024.png"
                alt="myAcaunt"
                className="acauntImg"
              />
              <span  className="fulName">
                <h4 className="name">Wahid Ari</h4> <h5 className="lastName">Designer</h5>
              </span>
            </a>
          </li>
          <li className="notesCard">
            <Star clas={'star'} size={'18px'} />
            <p>
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <a href="#" className="Acaunt">
              <img
                src="https://cdn0.iconfinder.com/data/icons/education-collection-2/32/user_profile_person_staff_student_circle_boss-1024.png"
                alt="myAcaunt"
                className="acauntImg"
              />
              <span className="fulName">
                <h4 className="name">Wahid Ari</h4> <h5 className="lastName">Designer</h5>
              </span>
            </a>
          </li>
          <li className="notesCard">
            <Star clas={'star'} size={'18px'} />
            <p>
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <a href="#" className="Acaunt">
              <img
                src="https://cdn0.iconfinder.com/data/icons/education-collection-2/32/user_profile_person_staff_student_circle_boss-1024.png"
                alt="myAcaunt"
                className="acauntImg"
              />
              <span className="fulName">
                <h4 className="name">Wahid Ari</h4> <h5 className="lastName">Designer</h5>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
