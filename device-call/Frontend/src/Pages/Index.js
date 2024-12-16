import React, { useState } from "react";
import {
  AgoraRTCProvider,
  useRTCClient,
} from "agora-rtc-react";
import AgoraRTC from "agora-rtc-sdk-ng";
import Videos from "../Components/Agora/Videos";

const Index = () => {
  const client = useRTCClient(AgoraRTC.createClient({ codec: "vp8", mode: "rtc" }));
  const [channelName, setChannelName] = useState("qvolvadmin");
  const [AppID, setAppID] = useState("028138f7a38d47c2a1575f1c2c1dbc94");
  const [token, setToken] = useState(
    "007eJxTYJDfdvXE04ZP7ydMzStf/arlxeqts1xCSp67vwj7vND0pHSxAoOBkYWhsUWaeaKxRYqJebJRoqGpuWmaYbJRsmFKUrKlSdSbuPSGQEaGFOMLDIxQCOJzMRSW5eeUJabkZuYxMAAAYY4lhw=="
  );
  const [inCall, setInCall] = useState(false);

  return (
    <div>
      <h1>Agora React Videocall</h1>
      {!inCall && AppID && token && channelName ? (

        <button onClick={()=>setInCall(true)}>Call </button>
      ) : (
        <AgoraRTCProvider client={client}>
          <Videos channelName={channelName} AppID={AppID} token={token} />
          <br />
          <button onClick={() => setInCall(false)}>End Call</button>
        </AgoraRTCProvider>
      )}
    </div>
  );
};

export default Index;
