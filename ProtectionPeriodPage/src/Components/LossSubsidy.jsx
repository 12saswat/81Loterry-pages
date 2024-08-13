import { useEffect } from "react";
import { useState } from "react";

const LossSubsidy = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalid = setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);
  return (
    <>
      <div className="header">
        <h4 style={{ color: "white" }}>First Deposit Bonus</h4>
        <div className="Date" style={{ display: "flex" }}>
          <p style={{ color: "white", opacity: "0.5" }}>
            {date.toLocaleDateString()}
          </p>
          <p style={{ color: "white", opacity: "0.5" }}>
            {date.toLocaleTimeString()}
          </p>
        </div>

        <div>
          <p style={{ color: "white", opacity: "0.7", fontSize: "20px" }}>
            Claims Specialist
          </p>
          <div>
            <p>
              <a
                className="links"
                href="https://t.me/C4lL_IT3v"
                target="_blank"
              >
                Click to contact Telegram:@C4lL_IT3v
              </a>
            </p>
            <p>
              <a
                className="links"
                href="https://wa.me/919080662742"
                target="_blank"
              >
                Click to contact WhatsApp: +91 9080662742
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="page1">
        <div className="About">
          <p className="About1">
            <b className="highlt">
              In order to better serve new members, increase the gaming
              experience of new users, and quickly integrate into Bllokery, we
              are now launching a new user lossmaking subsidy activity, allowing
              you to enjoy entertainment while making money at 81 Lottery
            </b>
          </p>
          <h1 className="firstH">
            {" "}
            New User lossmaking <span className="bonus">subsidy</span>
          </h1>

          <div className="About2">
            <p>
              1. For the first recharge amount lossmaking of new members, the
              platform subsidizes the recharge amount loss allowance of{" "}
              <b className="red"> 15% </b> (the maximum subsidy amount is 200){" "}
              <br />
              2. For the second recharge amount lossmaking of new members, the
              platform subsidizes the recharge amount loss allowance of{" "}
              <b className="red"> 8% </b> (the maximum subsidy amount is 500)
              <br /> 3. For the third recharge amount lossmaking of new members,
              the platform subsidizes the recharge amount loss allowance of{" "}
              <b className="red"> 5% </b>
              (the maximum subsidy amount is 1000)
            </p>
          </div>
          <h1 className="secondH">
            {" "}
            Terms & <span className="bonus">Conditions</span>
          </h1>
          <div className="About3" style={{ backgroundColor: "#15e969" }}>
            1.Each new member can only receive the same allowance once
            <br /> 2.Please contact the allowance specialist on the same day to
            receive the loss allowance. Contact information is as follows:
            telegram:@C4IL_IT3v whatsapp:+91 9080662742
            <br /> 3.81 Lottery has the right to block your account if you
            engage in illegal trading operations or fraudulent behavior when
            claiming the allowance. 81 Lottery members who have multiple
            accounts using the same IP address (same household or family
            members) may not be eligible to participate in this promotion.
            <br /> 4.81 Lottery is not responsible for any consequences arising
            from fraudulent activity, ignorance or negligence of these terms and
            conditions. 81 Lottery reserves the right to void all bonuses,
            rebates and winnings refunds if fraudulent activity is suspected.
            <br />
            5.81 Lottery reserves the right of final interpretation of this
            activity and has the right to modify or terminate this activity at
            any time without further notice. This provision applies to all
            activities of the company.
          </div>
        </div>
        <img src="public/footerImg.png" className="footerImg" />
      </div>
    </>
  );
};
export default LossSubsidy;
