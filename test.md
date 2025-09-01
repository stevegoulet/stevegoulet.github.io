---
layout: default
permalink: /test/
---

TESTING ONLY: ZD POC

To test the POC, click or select the Mentavi Logo in the lower right corner of this screen.

<div class="chat-container" style="position: relative; overflow: hidden; max-width: 100vw; width: 100%; box-sizing: border-box;">
  <div id="root"></div>
</div>

<script>
// Remove problematic Radix focus guard spans
(function removeFocusGuards() {
  function removeSpans() {
    document.querySelectorAll('span[data-radix-focus-guard]').forEach(span => {
      span.remove();
    });
  }
  
  // Run immediately and on DOM changes
  removeSpans();
  const observer = new MutationObserver(removeSpans);
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Also run periodically
  setInterval(removeSpans, 100);
})();
</script>

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

