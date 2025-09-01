---
layout: default
permalink: /test/
---

TESTING ONLY: ZD POC

To test the POC, click or select the Mentavi Logo in the lower right corner of this screen.

<style>
/* prevent page-wide horizontal scroll */
html, body { width:100%; overflow-x:hidden; }

/* target your actual wrapper */
.chat-window, #root {
  box-sizing: border-box;
  position: fixed;        /* dock it like a chat launcher/panel */
  right: 12px;
  bottom: 12px;
  width: min(380px, calc(100vw - 24px));  /* responsive width */
  max-height: calc(100vh - 24px);
  overflow: hidden;       /* keep inner content from spilling */
  z-index: 9999;
}

/* if the widget injects an iframe or inner container, make it fluid */
.chat-window iframe, .chat-window > * {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

/* safety for very small screens */
@media (max-width: 420px) {
  .chat-window, #root {
    right: 8px; bottom: 8px;
    width: calc(100vw - 16px);
    max-height: calc(100vh - 16px);
    border-radius: 12px;
  }
}

/* optional: avoid long strings forcing horizontal scroll in messages */
.chat-window, .chat-window * { word-break: break-word; }
</style>



<div id="root"></div>
<div class="chat-window">
<script type="module">
  import AiriaChat from "https://chat.airia.ai/api/get-chat-embed";
  AiriaChat.init({
    pipelineId: "8e803d5a-4996-4dfc-b4eb-cf79430fcaeb",
    apiKey: "ak-MjQzMzQ2Nzk1OXwxNzU2Njc4MTE5ODI4fHRpLVRXVnVkR0YyYVNCSVpXRnNkR2d0VDNCbGJpQlNaV2RwYzNSeVlYUnBiMjR0VUhKdlptVnpjMmx2Ym1Gc3wxfDEwMDM4NDI4NSAg",
    apiUrl: "https://embed-api.airia.ai",
    greeting: "Hi there. Welcome to the TESTING ONLY Mentavi Health support bot. How can I assist you today?",
    imagePath: "/images/logo-header.png",
    imageSize: "small",
    imageBgColor: "#FFFFFF"
  });
</script>
</div>

