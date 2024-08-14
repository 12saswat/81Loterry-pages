import { FaChevronRight } from "react-icons/fa";
const Buttons = () => {
  return (
    <>
      <div className="AllBtn">
        <div>
          <button className="btns1">
            <img src="public/one.png" className="imgs1" />
            <b className="txt">Invitation Bonus</b>
            <FaChevronRight className="arrow" />
          </button>
        </div>
        <div>
          <button className="btns2">
            <img src="public/two.png" className="imgs2" />
            <b className="txt">My Team</b>
            <FaChevronRight className="arrow" />
          </button>
        </div>
        <div>
          <button className="btns3">
            <img src="public/three.png" className="imgs3" />
            <b className="txt">Team Report</b>
            <FaChevronRight className="arrow" />
          </button>
        </div>
        <div>
          <button className="btns4">
            <img src="public/four.png" className="imgs4" />
            <b className="txt">Rebate record</b>
            <FaChevronRight className="arrow" />
          </button>
        </div>
        <div>
          <button className="btns5">
            <img src="public/five.png" className="imgs5" />
            <b className="txt">Agent exclusive customer service</b>
            <FaChevronRight className="arrow" />
          </button>
        </div>
        <div>
          <button className="btns6">
            <img src="public/six.png" className="imgs6" />
            <b className="txt">Rebate ratio</b>
            <FaChevronRight className="arrow" />
          </button>
        </div>
        <div>
          <button className="btns7">
            <img src="public/seven.png" className="imgs7" />
            <b className="txt">Invitation instruction</b>
            <FaChevronRight className="arrow" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Buttons;
