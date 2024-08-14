import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCopySharp } from "react-icons/io5";

const InvitationLink = () => {
  const [copied, setCopid] = useState(
    "https://m.81lottery.vip/reg?code=JLHDXA"
  );
  const handelCopy = () => {
    navigator.clipboard.writeText(copied);
    alert("copied");
  };
  return (
    <>
      <button className="InviteBtn"> Share invitation Link</button>

      <p
        style={{
          color: "white",
          display: "flex",
          marginLeft: "37%",
          opacity: "0.8",
          fontSize: "18px",
          minHeight: "30%",
          borderLeft: "4px solid #00ff6d",
          paddingLeft: "1rem",
        }}
      >
        Invitation Link
      </p>
      <input
        type="text"
        disabled
        value={"https://m.81lottery.vip/reg?code=JLHDXA"}
        onChange={(e) => {
          setCopid(e.target.value);
        }}
        className="copyLC"
      ></input>

      <IoCopySharp
        style={{
          color: "white",
          position: "absolute",
          left: "63%",
          cursor: "pointer",
        }}
        onClick={handelCopy}
      />

      <p
        style={{
          color: "white",
          display: "flex",
          marginLeft: "37%",
          paddingLeft: "1rem",
          opacity: "0.8",
          fontSize: "18px",
          borderLeft: "4px solid #00ff6d",
        }}
      >
        Invitation Code
      </p>
      <input
        type="text"
        value={"https://m.81lottery.vip/reg?code=JLHDXA"}
        disabled
        className="copyLC"
      ></input>

      <IoCopySharp
        style={{
          color: "white",
          position: "absolute",
          left: "63%",
          cursor: "pointer",
        }}
        onClick={handelCopy}
      />
    </>
  );
};
export default InvitationLink;
