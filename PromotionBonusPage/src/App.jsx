import "./App.css";
import { FaChevronLeft } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="page9">
        <FaChevronLeft className="arrow" />
        <div className="hader">
          <b className="heading">
            <center>Promotion Bonus</center>
          </b>
        </div>
        <div className="middleP">
          <div className="middle">
            <ul>
              <li>Upgrade to VIP level and you can get Bonus</li>
              <li>
                Each VIP level bonus is only issud once and the bonus is as
                follws
              </li>
            </ul>
          </div>

          <table
            style={{
              width: "90%",
              textAlign: "center",
              paddingLeft: "2.5rem",
              paddingBottom: "1rem",
            }}
          >
            <tr>
              <th>VIP</th>
              <th>Promotion Bonus</th>
            </tr>
            <tr>
              <td>
                {" "}
                <img src="public/vip2.png" className="Imgs" />
              </td>
              <td>50</td>
            </tr>
            <tr>
              <td>
                {" "}
                <img src="public/vip3.png" className="Imgs" />
              </td>
              <td>150</td>
            </tr>
            <tr>
              <td>
                {" "}
                <img src="public/vip4.png" className="Imgs" />
              </td>
              <td>1500</td>
            </tr>
            <tr>
              <td>
                {" "}
                <img src="public/vip5.png" className="Imgs" />
              </td>
              <td>5000</td>
            </tr>
            <tr>
              <td>
                {" "}
                <img src="public/vip6.png" className="Imgs" />
              </td>
              <td>9000</td>
            </tr>
            <tr>
              <td>
                {" "}
                <img src="public/vip7.png" className="Imgs" />
              </td>
              <td>50000</td>
            </tr>
            <tr>
              <td>
                {" "}
                <img src="public/vip8.png" className="Imgs" />
              </td>
              <td>90000</td>
            </tr>
            <tr>
              <td>
                {" "}
                <img src="public/vip9.png" className="Imgs" />
              </td>
              <td>600000</td>
            </tr>
          </table>
        </div>
        <div className="last">
          <ul>
            <li>Bonous record</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
