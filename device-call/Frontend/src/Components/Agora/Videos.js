import React, { useEffect } from "react";
import {
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  useRemoteUsers,
  useRemoteAudioTracks,
  usePublish,
  useClientEvent,
  RemoteUser,
  LocalVideoTrack,
} from "agora-rtc-react";

import Controls from "./Controls";
import Testing from "../Testing";

const Videos = ({ channelName, AppID, token }) => {
  const { isLoading: isLoadingMic, localMicrophoneTrack } = useLocalMicrophoneTrack();
  const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack();
  const remoteUsers = useRemoteUsers();
  const { audioTracks } = useRemoteAudioTracks(remoteUsers);


  usePublish([localMicrophoneTrack, localCameraTrack]);

  useEffect(() => {
    console.log("Users joined:------------------------->", remoteUsers, remoteUsers.length);
  }, [remoteUsers]);

  useJoin({
    appid: AppID,
    channel: channelName,
    token: token === "" ? null : token,
  });

  audioTracks.forEach((track) => track.play());

  const deviceLoading = isLoadingMic || isLoadingCam;
  if (deviceLoading) return <div>Loading devices...</div>;

  const deviceUnavailable = !localCameraTrack || !localMicrophoneTrack;
  if (deviceUnavailable)
    return <div >Please allow camera and microphone permissions</div>;



  return (
    <>
      <div>
        {/* <Testing remoteUsers={remoteUsers} /> */}
        {remoteUsers.map((user) => (
          <Testing  RemoteUser = {RemoteUser} user={user} id={1}/>
          // <RemoteUser key={user.uid} user={user} style={{height:'100vh',width:'100vw', background:'none'}}  />
        ))}
      </div>
      <br />
      <Controls localMicrophoneTrack={localMicrophoneTrack} localCameraTrack={localCameraTrack} />
    </>
  );
};


export default Videos;
