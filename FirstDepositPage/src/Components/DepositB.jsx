import React from "react";
import { useState, useEffect } from "react";
const DepositB = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalid = setInterval(() => {
      setDate(new Date());
    }, 1000);
    // return () => clearInterval(intervalid);
  }, []);
  return (
    <>
      <div className="header">
        <h3 style={{ color: "white" }}>First Deposit Bonus</h3>
        <div className="Date" style={{ display: "flex" }}>
          <p style={{ color: "white", opacity: "0.5" }}>
            {date.toLocaleDateString()}
          </p>
          <p style={{ color: "white", opacity: "0.5", marginLeft: "1rem" }}>
            {date.toLocaleTimeString()}
          </p>
        </div>
      </div>
      <div className="page1">
        <div className="About">
          <p className="About1">
            <b className="middle">
              {" "}
              To celebrate the fark that the number of 81 Lottery's simultaneous
              online betting users has exceeded 250,000 and to give back to new
              and old users for their support and trust, we are now launching a
              new user recharge reward activity.
            </b>
          </p>
          <div>
            <img src="public/CashBundel.png" className="cash" />
            <h1 className="firstH">
              {" "}
              First deposit <span className="bonus">bonus</span>
            </h1>
            <img src="public/table1.png" className="tables" />
          </div>
          <div>
            <img src="public/CashBundel.png" className="cash2" />
            <h1 className="firstH">
              {" "}
              Second deposit <span className="bonus"> bonus</span>
            </h1>
            <img src="public/table2.png" className="tables" />
          </div>

          <div>
            <img src="public/CashBundel.png" className="cash3" />
            <h1 className="firstH">
              {" "}
              Third deposit <span className="bonus"> bonus</span>
            </h1>
            <img src="public/table3.png" className="tables" />
          </div>
          <h4 className="Terms">
            {" "}
            Terms & <span className="bonus">Conditions </span>
          </h4>

          <div className="About2" style={{ backgroundColor: "#15e969" }}>
            <p>
              1.Recommended members must be genuine and recharge every day to be
              considered an active member.
            </p>
            <p>
              {" "}
              2.Bonuses cannot be claimed with the same phone number, bank
              account, email address and IP address.
            </p>
            <p>
              {" "}
              3.If you meet the event conditions, contact online customer
              service or telegram event specialist to receive it.
            </p>
            <p>
              4.If an individual or group is found to be using bonuses for
              illegal activities, 81 Lottery has the right to freeze the account
              or cancel the bonus.
            </p>
            <p>
              {" "}
              5.81 Lottery reserves the right to terminate this event without
              prior notice. 81 Lottery has the right to make decisions and
              interpretations.
            </p>
          </div>
        </div>
        <img src="public/footerImg.png" className="footerImg" />
      </div>
    </>
  );
};

export default DepositB;
