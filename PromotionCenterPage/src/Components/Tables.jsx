import React from "react";
const Tables = () => {
  return (
    <>
      <div className="table1">
        <table style={{ width: "400px", minWidth: "40px" }}>
          <tr style={{ height: "50px" }}>
            <td style={{ opacity: "0.7" }}>Yesterday's rebate</td>
            <td style={{ opacity: "0.7" }}>
              <b>Team Level</b>
            </td>
          </tr>
          <tr>
            <td>
              <b style={{ fontWeight: "900" }}>0</b>
            </td>
            <td>
              <b style={{ fontWeight: "900" }}>LV1</b>
            </td>
          </tr>
        </table>
      </div>

      <div className="table2">
        <table style={{ width: "100%", textAlign: "center", minWidth: "40px" }}>
          <tr style={{ height: "40px" }}>
            <th style={{ opacity: "0.7", borderBottom: "1px solid white" }}>
              Yesterday's data
            </th>
            <th style={{ opacity: "0.7", borderBottom: "1px solid white" }}>
              All subordinates
            </th>
          </tr>
          <tr style={{ height: "20px" }}>
            <td>Registration User</td>
            <td>
              <b>0</b>
            </td>
          </tr>
          <tr>
            <td>First-deposit User</td>
            <td>
              <b>0</b>
            </td>
          </tr>
          <tr>
            <td>Deposit User</td>
            <td>
              <b>0</b>
            </td>
          </tr>
          <tr>
            <td>Deposit Amount</td>
            <td>
              <b>0</b>
            </td>
          </tr>
          <tr>
            <td>Betting amount</td>
            <td>
              <b>0</b>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default Tables;
