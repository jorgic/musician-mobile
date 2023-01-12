import { StatusBar } from "expo-status-bar";
import { WebView } from "react-native-webview";
import React from "react";

export default function App() {
  return (
    <React.Fragment>
      <WebView
        source={{
          uri: "https://musician-frontend-ud95.vercel.app/",
        }}
        style={{ flex: 1 }}
      />
      <StatusBar backgroundColor={"transparent"} translucent hidden />
    </React.Fragment>
  );
}
