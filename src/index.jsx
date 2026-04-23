import { render } from "solid-js/web";
import { registerSW } from "virtual:pwa-register";
import App from "./App";

// Register the Service Worker BEFORE rendering the app.
// `autoUpdate` mode will silently fetch new SW versions and prompt activation.
const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    // New content is available — trigger your own UI toast here if desired,
    // then call updateSW(true) to activate the new SW and reload.
    console.log("[PWA] New content available — refresh to update.");
  },
  onOfflineReady() {
    console.log("[PWA] App is ready to work offline.");
  },
  onRegisteredSW(swUrl, registration) {
    console.log("[PWA] Service Worker registered:", swUrl);
  },
  onRegisterError(error) {
    console.error("[PWA] Service Worker registration failed:", error);
  },
});

render(() => <App />, document.getElementById("root"));