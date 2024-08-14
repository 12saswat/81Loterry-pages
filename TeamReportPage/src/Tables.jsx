const Tables = () => {
  return (
    <>
      <div className="Overview">
        <div>
          <img src="public/Overview.png" className="imgs" />
        </div>
        <div style={{ bottom: "1rem", paddingLeft: "1rem" }}>
          <h3> Overview</h3>
        </div>
      </div>
      <table
        width={"100%"}
        className="tables
      "
      >
        <tr>
          <td>Registration Users</td>
          <td>Verification Users</td>
        </tr>
        <tr style={{ borderBottom: "1px solid white" }}>
          <td className="values">0</td>
          <td className="values">0</td>
        </tr>
        <tr>
          <td>First-deposit Users</td>
          <td>Deposit Users</td>
        </tr>
        <tr>
          <td className="values">0</td>
          <td className="values">0</td>
        </tr>
        <tr>
          <td>Withdrawal Users</td>
          <td>First-deposit Amount</td>
        </tr>
        <tr>
          <td className="values">0</td>
          <td className="values">0.000</td>
        </tr>
        <tr>
          <td>Deposit Amount</td>
          <td> Withdrawal Amount</td>
        </tr>
        <tr>
          <td className="values">0.000</td>
          <td className="values"> 0.000</td>
        </tr>
      </table>{" "}
      <div className="game">
        <div>
          <img
            src="public/Game.webp"
            style={{ height: "49px", width: "49" }}
            className="imgs"
          />
        </div>
        <div style={{ bottom: "1rem", paddingLeft: "1rem" }}>
          <h3>Game</h3>
        </div>
      </div>
      <table
        width={"100%"}
        className="tables
      "
      >
        <tr>
          <td>Users</td>
          <td>Betting</td>
        </tr>
        <tr style={{ borderBottom: "1px solid white" }}>
          <td className="values">0</td>
          <td className="values">0.000</td>
        </tr>
      </table>{" "}
      <div className="pocketGame">
        <div>
          <img
            src="public/Arcade.webp"
            className="imgs"
            style={{ height: "30px", width: "35px" }}
          />
        </div>
        <div style={{ bottom: "1rem", paddingLeft: "1rem" }}>
          <h3> PocketGame</h3>
        </div>
      </div>
      <table
        width={"100%"}
        className="tables
      "
      >
        <tr>
          <td>User</td>
          <td>Bettind</td>
        </tr>
        <tr style={{ borderBottom: "1px solid white" }}>
          <td className="values">0</td>
          <td className="values">0.000</td>
        </tr>
      </table>{" "}
      <div className="PragmaticPlay">
        <div>
          <img
            src="public/Arcade.webp"
            className="imgs"
            style={{ height: "30px", width: "35px" }}
          />
        </div>
        <div style={{ bottom: "1rem", paddingLeft: "1rem" }}>
          <h3>PragmaticPlay </h3>
        </div>
      </div>
      <table
        width={"100%"}
        className="tables
      "
      >
        <tr>
          <td>Users</td>
          <td>Betting</td>
        </tr>
        <tr style={{ borderBottom: "1px solid white" }}>
          <td className="values">0</td>
          <td className="values">0.000</td>
        </tr>
      </table>{" "}
      <div className="Arcade">
        <div>
          <img
            src="public/Arcade.webp"
            className="imgs"
            style={{ height: "30px", width: "35px" }}
          />
        </div>
        <div style={{ bottom: "1rem", paddingLeft: "1rem" }}>
          <h3>Arcade-Evolution </h3>
        </div>
      </div>
      <table
        width={"100%"}
        className="tables
      "
      >
        <tr>
          <td>Users</td>
          <td>Betting</td>
        </tr>
        <tr style={{ borderBottom: "1px solid white" }}>
          <td className="values">0</td>
          <td className="values">0.000</td>
        </tr>
      </table>{" "}
      <div className="Live">
        <div>
          <img
            src="public/live.png"
            className="imgs"
            style={{ height: "50px", width: "55px" }}
          />
        </div>
        <div style={{ bottom: "1rem", paddingLeft: "1rem" }}>
          <h3> Live-Evolution</h3>
        </div>
      </div>
      <table
        width={"100%"}
        className="tables
      "
      >
        <tr>
          <td>Users</td>
          <td>Betting</td>
        </tr>
        <tr style={{ borderBottom: "1px solid white" }}>
          <td className="values">0</td>
          <td className="values">0.000</td>
        </tr>
      </table>{" "}
      <div className="Ezugi">
        <div>
          <img
            src="public/live.png"
            style={{ height: "50px", width: "55px" }}
            className="imgs"
          />
        </div>
        <div style={{ bottom: "1rem", paddingLeft: "1rem" }}>
          <h3> Ezugi</h3>
        </div>
      </div>
      <table
        width={"100%"}
        className="tables
      "
      >
        <tr>
          <td>Users</td>
          <td>Betting</td>
        </tr>
        <tr style={{ borderBottom: "1px solid white" }}>
          <td className="values">0</td>
          <td className="values">0.000</td>
        </tr>
      </table>{" "}
    </>
  );
};
export default Tables;
