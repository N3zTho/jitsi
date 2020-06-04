import React from "react";
import Jitsi from "react-jitsi";

const roomName = "my-super-secret-meeting-xxx-tCDTJk3v6o3LA";
const userFullName = "User";

const App = () => (
  <>
    <h2>My First Meeting!</h2>
    <Jitsi
      roomName={roomName}
      displayName={userFullName}
      containerStyle={{ width: "100%", height: "100vh" }}
    />
  </>
);

export default App;
