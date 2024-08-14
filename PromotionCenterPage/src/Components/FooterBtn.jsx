import React from "react";
const FooterBtn = () => {
  return (
    <>
      <div className="Footerbtn1">
        <div className="fbtn1">
          <img
            src="public/ftr11.jpg"
            className="fimg"
            style={{ position: "absolute", opacity: "0.5" }}
          />
          <b style={{ fontWeight: "300" }} className="ftxt">
            Total Rebates
          </b>
          <br />
          <b className="ftxt"> 0.000</b>
        </div>

        <div className="fbtn1">
          <img
            src="public/ftr22.jpg"
            className="fimg"
            style={{ position: "absolute", opacity: "0.5" }}
          />
          <b style={{ fontWeight: "300" }} className="ftxt">
            Rebate this week
          </b>
          <br />
          <b className="ftxt"> 0</b>
        </div>
      </div>
      <div className="Footerbtn2">
        <div className="fbtn1">
          <img
            src="public/ftr33.jpg"
            className="fimg"
            style={{ position: "absolute", opacity: "0.5" }}
          />
          <b style={{ fontWeight: "300" }} className="ftxt">
            Team recharge Number of people
          </b>
          <br />
          <b className="ftxt"> 0</b>
        </div>

        <div className="fbtn1">
          <img
            src="public/ftr44.jpg"
            className="fimg"
            style={{ position: "absolute", opacity: "0.5" }}
          />
          <b style={{ fontWeight: "300" }} className="ftxt">
            Team number
          </b>
          <br />
          <b className="ftxt"> 0</b>
        </div>
      </div>
    </>
  );
};
export default FooterBtn;
