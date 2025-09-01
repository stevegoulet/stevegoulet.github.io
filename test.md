---
layout: default
permalink: /test/
---

TESTING ONLY: ZD POC

To test the POC, click or select the Mentavi Logo in the lower right corner of this screen.

<style>
/* Target the specific Radix UI elements causing overflow */
@media (max-width: 768px) {
  /* Prevent page-level horizontal scroll */
  html, body {
    overflow-x: hidden !important;
  }
  
  /* Target the problematic Radix focus guard spans */
  span[data-radix-focus-guard],
  span[data-radix-focus-guard][style*="position: fixed"] {
    display: none !important;
    visibility: hidden !important;
    max-width: 0 !important;
    width: 0 !important;
    height: 0 !important;
  }
  
  /* Target the chat button specifically */
  button[aria-haspopup="dialog"],
  button[type="button"][class*="inline-flex"],
  button[class*="rounded-full"] {
    position: fixed !important;
    right: 10px !important;
    bottom: 20px !important;
    max-width: 64px !important;
    max-height: 64px !important;
    z-index: 9999;
  }
  
  /* Target any chat dialog/modal that opens */
  [aria-controls*="radix"],
  [role="dialog"],
  [data-state="open"] + div,
  div[style*="position: fixed"]:not(span[data-radix-focus-guard]) {
    max-width: calc(100vw - 20px) !important;
    right: 10px !important;
    box-sizing: border-box !important;
  }
}

@media (max-width: 480px) {
  button[aria-haspopup="dialog"],
  button[type="button"][class*="inline-flex"],
  button[class*="rounded-full"] {
    right: 5px !important;
    bottom: 10px !important;
  }
  
  [aria-controls*="radix"],
  [role="dialog"],
  div[style*="position: fixed"]:not(span[data-radix-focus-guard]) {
    max-width: calc(100vw - 10px) !important;
    right: 5px !important;
  }
}
</style>

<div id="root"></div>
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

