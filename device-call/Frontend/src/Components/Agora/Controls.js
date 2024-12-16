import React from "react";

const Controls = ({ localMicrophoneTrack, localCameraTrack }) => {
  return (
    <div >
      <button onClick={() => localMicrophoneTrack.setMuted(!localMicrophoneTrack.muted)}>
        {localMicrophoneTrack.muted ? "Unmute Mic" : "Mute Mic"}
      </button>
      <button onClick={() => localCameraTrack.setMuted(!localCameraTrack.muted)}>
        {localCameraTrack.muted ? "Unmute Cam" : "Mute Cam"}
      </button>
    </div>
  );
};

const styles = {
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    width: "50%",
    justifyContent: "space-evenly",
  },
};

export default Controls;
