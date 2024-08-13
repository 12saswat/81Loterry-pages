import React from "react";
import { useState, useEffect } from "react";
const MysteryP = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalid = setInterval(() => {
      setDate(new Date());
    }, 1000);
    // return () => clearInterval(intervalid);
  }, []);
  return (
    <>
      <div className="header" style={{ lineHeight: "0px", paddingTop: "1rem" }}>
        <h3 style={{ color: "white", marginLeft: "2rem" }}>
          First Deposit Bonus
        </h3>
        <div className="Date" style={{ display: "flex", marginLeft: "2rem" }}>
          <p style={{ color: "white", opacity: "0.5" }}>
            {date.toLocaleDateString()}
          </p>
          <p style={{ color: "white", opacity: "0.5", marginLeft: "0.5rem" }}>
            {date.toLocaleTimeString()}
          </p>
        </div>
      </div>
      <div className="page1">
        <h1 className="heading">Activity content</h1>
        <h3 className="firstP">
          81 Lottery will issue mysterious gifts to all members from time to
          time, and even newly registered members can receive bonuses.
        </h3>
        <img src="public/theli.png" className="theli" />

        <div className="About">
          <p className="About1">
            <p>
              <b>
                {" "}
                Note: Registered account information must be complete and
                correct{" "}
              </b>
            </p>
            <p>
              The mystery gift does not need to be applied to our customer
              service, it will be automatically added to the member's 81 lottery
              account or the bank account linked in the game.
            </p>
            <p>
              <b>
                Note: For members who receive mysterious gifts, we will notify
                you through the personal information in the member center.
              </b>
            </p>
          </p>
          <img src="public/Terms&condition.png" className="termsimg" />

          <div className="About2">
            <p>
              1.All 81 lottery activities are designed for real players. If any
              group or individual is found to be dishonestly collecting company
              bonuses or threatening or abusing company activities, the company
              reserves the right to freeze or cancel bonuses from the account of
              that group or individual.
              <br /> 2.If members have any disputes about the event, in order to
              protect the interests of both parties and prevent identity theft,
              81 Lottery has the right to require members to provide us with
              sufficient and valid supporting documents to confirm whether
              members are eligible to enjoy the discounts.
              <br /> 3.81 Lottery reserves the right of final interpretation of
              this activity and the right to modify or terminate this activity
              at any time without prior notice, which applies to all company
              activities.
            </p>
          </div>
        </div>
        <img src="public/footerImg.png" className="footerImg" />
      </div>
    </>
  );
};
export default MysteryP;
