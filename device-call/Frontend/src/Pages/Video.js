import { useState, useEffect} from 'react';
import {
  AgoraRTCProvider,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRTCClient,
  useRemoteAudioTracks,
  useRemoteUsers,
  RemoteUser,
  LocalVideoTrack,
  useClientEvent,
} from "agora-rtc-react";
import AgoraRTC from "agora-rtc-sdk-ng";
// import "./App.css";

function App() {
  const client = useRTCClient(AgoraRTC.createClient({ codec: "vp8", mode: "rtc" }));
  const [channelName, setChannelName] = useState("qvolvadmin");
  const [AppID, setAppID] = useState("028138f7a38d47c2a1575f1c2c1dbc94");
  const [token, setToken] = useState("007eJxTYJDfdvXE04ZP7ydMzStf/arlxeqts1xCSp67vwj7vND0pHSxAoOBkYWhsUWaeaKxRYqJebJRoqGpuWmaYbJRsmFKUrKlSdSbuPSGQEaGFOMLDIxQCOJzMRSW5eeUJabkZuYxMAAAYY4lhw==");
  const [inCall, setInCall] = useState(false);
  const [videoQuality, setVideoQuality] = useState({ width: 640, height: 360 }); // Default quality



  return (
    <div style={styles.container}>
      <h1>Agora React Videocall</h1>
      {!inCall ? (
        <Form
          AppID={AppID}
          setAppID={setAppID}
          channelName={channelName}
          setChannelName={setChannelName}
          token={token}
          setToken={setToken}
          setInCall={setInCall}
        />
      ) : (
        <AgoraRTCProvider client={client}>
          <Videos channelName={channelName} AppID={AppID} token={token} />
          <br />
          <button onClick={() => setInCall(false)}>End Call</button>
        </AgoraRTCProvider>
      )}
    </div>
  );
}

function Videos({ channelName, AppID, token }) {
  const { isLoading: isLoadingMic, localMicrophoneTrack } = useLocalMicrophoneTrack();
  const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack();
  const remoteUsers = useRemoteUsers();
  const { audioTracks } = useRemoteAudioTracks(remoteUsers);

  const client = useRTCClient();
  useClientEvent(client, "user-published", (user) => {
    console.log(user);
  });

  usePublish([localMicrophoneTrack, localCameraTrack]);

  useEffect(()=>{
   console.log('tesing of the users joined',remoteUsers, remoteUsers.length);
  },[remoteUsers])

  useJoin({
    appid: AppID,
    channel: channelName,
    token: token === "" ? null : token,
  });

  audioTracks.map((track) => track.play());

  const deviceLoading = isLoadingMic || isLoadingCam;
  if (deviceLoading) return <div style={styles.grid}>Loading devices...</div>;

  const deviceUnavailable = !localCameraTrack || !localMicrophoneTrack;
  if (deviceUnavailable) return <div style={styles.grid}>Please allow camera and microphone permissions</div>;

  return (
    <>
      <div style={{ ...styles.grid, ...returnGrid(remoteUsers) }}>
        {/* Uncomment this line to show the local video */}
        {/* <LocalVideoTrack track={localCameraTrack} play={true} style={styles.gridCell} /> */}
        {remoteUsers.map((user) => (
          <RemoteUser key={user.uid} user={user} style={styles.gridCell} />
        ))}
      </div>
      <br />
      <Controls localMicrophoneTrack={localMicrophoneTrack} localCameraTrack={localCameraTrack} />
    </>
  );
}

const Controls = ({ localMicrophoneTrack, localCameraTrack }) => {
  return (
    <div style={styles.btnContainer}>
      <button onClick={() => localMicrophoneTrack.setMuted(!localMicrophoneTrack.muted)}>Mute Mic</button>
      <button onClick={() => localCameraTrack.setMuted(!localCameraTrack.muted)}>Mute Cam</button>
    </div>
  );
};

function Form({ AppID, setAppID, channelName, setChannelName, token, setToken, setInCall }) {
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
        onClick={() => (AppID && channelName ? setInCall(true) : alert("Please enter Agora App ID and Channel Name"))}
      >
        Join
      </button>
    </div>
  );
}

export default App;

const returnGrid = (remoteUsers) => {
  const unit = "minmax(0, 1fr) ";
  return {
    gridTemplateColumns:
      remoteUsers.length > 8
        ? unit.repeat(4)
        : remoteUsers.length > 3
        ? unit.repeat(3)
        : remoteUsers.length > 0
        ? unit.repeat(2)
        : unit,
  };
};

const styles = {
  grid: {
    width: "100%",
    height: "100%",
    display: "grid",
  },
  gridCell: { height: "100%", width: "100%" },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    width: "50%",
    justifyContent: "space-evenly",
  },
};
