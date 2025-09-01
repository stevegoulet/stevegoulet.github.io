---
layout: default
permalink: /test/
---

TESTING ONLY: ZD POC

To test the POC, click or select the Mentavi Logo in the lower right corner of this screen.

<script>
(function clamp(){
  requestAnimationFrame(() => {
    document.querySelectorAll('iframe, [class*="airia"], [id*="airia"]').forEach(el => {
      el.style.boxSizing = 'border-box';
      el.style.maxWidth = 'min(420px, 100vw)';
      el.style.width = '100%';
    });
  });
})();
</script>


<style>
/* never let the page create horizontal scroll */
html, body { width:100%; overflow-x:hidden; }

/* target only YOUR wrapper — do NOT touch #root */
.chat-window {
  box-sizing: border-box;
  /* keep it part of the normal flow; the SDK will float/dock the widget */
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: visible;
}

/* whatever the embed injects (iframe, divs), keep them fluid */
.chat-window iframe,
.chat-window > * {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

/* belt-and-suspenders: long URLs/strings won't force overflow */
.chat-window, .chat-window * {
  word-break: break-word;
}

/* tiny screens: if the SDK uses a fixed panel, this prevents edge overflow */
@media (max-width: 420px) {
  .chat-window * {
    max-width: calc(100vw - 16px) !important;
  }
}
</style>

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

