import React from "react";

const Form = ({ AppID, setAppID, channelName, setChannelName, token, setToken, setInCall }) => {
  return (
    <div>
      <p>Please enter your Agora AppID and Channel Name</p>
      <label htmlFor="appid">Agora App ID: </label>
      <input
        id="appid"
        type="text"
        value={AppID}
        onChange={(e) => setAppID(e.target.value)}
        placeholder="required"
      />
      <br />
      <label htmlFor="channel">Channel Name: </label>
      <input
        id="channel"
        type="text"
        value={channelName}
        onChange={(e) => setChannelName(e.target.value)}
        placeholder="required"
      />
      <br />
      <label htmlFor="token">Channel Token: </label>
      <input
        id="token"
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="optional"
      />
      <br />
      <button
        onClick={() =>
          AppID && channelName
            ? setInCall(true)
            : alert("Please enter Agora App ID and Channel Name")
        }
      >
        Join
      </button>
    </div>
  );
};

export default Form;
