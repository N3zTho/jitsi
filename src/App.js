import React from "react";
import Jitsi from "react-jitsi";

const roomName = "meeting-xxx-tCDTJk3v6o3LA";
const userFullName = "User";

const App = () => (
  <>
    <h2>My First Meeting!</h2>
    <Jitsi
      roomName={roomName}
      displayName={userFullName}
      containerStyle={{ width: "100%", height: "100vh" }}
      password={`tZEBHGaaDGN3A`}
      interfaceConfig={{
        JITSI_WATERMARK_LINK: "https://necesitocoaching.com",
        DEFAULT_LOCAL_DISPLAY_NAME: "yo",
        NATIVE_APP_NAME: "NecesitoCoaching Meet",
        PROVIDER_NAME: "NecesitoCoaching",
        POLICY_LOGO:
          "https://nc.necesitocoaching.com/img/logo-telemedico-horz.png",
        SHOW_WATERMARK_FOR_GUESTS: false,
        SHOW_JITSI_WATERMARK: false,
        SHOW_BRAND_WATERMARK: false,

        TOOLBAR_BUTTONS: [
          "microphone",
          "camera",
          "closedcaptions",
          "desktop",
          "fullscreen",
          "videoquality",
          "chat",
          "tileview",
        ],
      }}
    />
  </>
);

export default App;
