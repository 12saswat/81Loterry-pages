import "./App.css";
import Table from "./Table";
import { FaChevronLeft } from "react-icons/fa";

function App() {
  return (
    <>
      <FaChevronLeft
        style={{
          position: "absolute",
          color: "white",
          height: "30px",
          left: "15px",
          top: "1rem",
        }}
      />

      <b
        style={{
          position: "absolute",
          color: "white",
          left: "20%",
          top: "1rem",
        }}
      >
        Invitation Instruction
      </b>
      <b
        style={{
          position: "absolute",
          color: "white",
          left: "10%",
          top: "260px",
        }}
      >
        The activity is valid for a long time
      </b>
      <img src="public/GreenImg.jpeg" className="UpImg" />
      <div className="texts">
        Invite friends <br />
        <p>
          Enter the "invitation Center", copy the invitation link or code, and
          share it with your friends can become your subordinates by registering
          with you invitation code.
        </p>
        <p>
          Earn commission rebates <br />
          The rebate will only take effect after the subordinates complete the
          recharge, and it supports up to 6 level of subordinates. For example ,
          you invite friend A, A invite B, and B invite C. If A, B and C conduct
          transactions such as games on the platform and have recharge record,
          you can get the corresponding rebate.
        </p>
        <p>
          Team level
          <br />
          The team level is calculated at 02:00 UTC+0 every day, and yesterday's
          rebate will be distributed according to the team level, which can be
          viewed through the rebate record. The higher the team level, the
          higher the commission you can enjoy.
          <br />
          Team levels are divided into LV1-LV9, and the upgrade rules are shown
          in the table below.
        </p>
      </div>
      <Table />
      <div className="texts">
        <p>
          Number of top-ups: the cumulative number of top-ups al lower levels
          from 1 to 6 <br /> Bet amount: the effective bel armount of the lower
          level of grades 1-6 yesterday
          <br /> Top-up amount: effective top-up amount of level 1-6
          subordinates yesterday
        </p>
      </div>
    </>
  );
}

export default App;
