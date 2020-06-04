import React, { useState } from "react";
import Jitsi from "react-jitsi";

const App = () => {
  const [displayName, setDisplayName] = useState("");
  const [roomName, setRoomName] = useState("Esta-es-la-roomXXXX");
  const [password, setPassword] = useState("tZEBHGaaDGN3A");
  const [onCall, setOnCall] = useState(false);

  const handleAPI = (api) => {
    api.addEventListener("passwordRequired", () => {
      api.executeCommand("password", password);
    });
  };

  return onCall ? (
    <>
      <h2>My First Meeting!</h2>
      <Jitsi
        onAPILoad={handleAPI}
        roomName={roomName}
        displayName={displayName}
        containerStyle={{ width: "100%", height: "100vh" }}
        password={password}
        interfaceConfig={{
          JITSI_WATERMARK_LINK: "https://necesitocoaching.com",
          DEFAULT_LOCAL_DISPLAY_NAME: "yo",
          NATIVE_APP_NAME: "NecesitoCoaching Meet",
          PROVIDER_NAME: "NecesitoCoaching",
          POLICY_LOGO:
            "https://nc.necesitocoaching.com/img/logo-telemedico-horz.png",
          SHOW_WATERMARK_FOR_GUESTS: false,
          APP_NAME: "NecesitoCoacing",
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
  ) : (
    <>
      <form>
        <h1>Crate a Meeting</h1>
        <input
          type="text"
          placeholder="Room name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <button type="submit" onClick={() => setOnCall(true)}>
          {" "}
          Let&apos;s start!
        </button>
      </form>
    </>
  );
};

export default App;
