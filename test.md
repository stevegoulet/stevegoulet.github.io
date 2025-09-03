---
layout: default
permalink: /test/
---

TESTING ONLY: ZD POC

To test the POC, click or select the Mentavi Logo in the lower right corner of this screen.

<a href="/test?openSupport=1">Contact support</a>


<script>
  (function () {
    const params = new URLSearchParams(window.location.search);
    if (params.get('openSupport') === '1') {
      zE(function () {
        // 'open' exists; 'toggle' also works if you prefer
        zE('webWidget', 'open');
      });
    }
  })();
</script>

<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=023ec2cb-f199-48ed-b908-fc31a374dcd8"> </script>
<!-- Hide on load, then open only when triggered -->
<script>
  zE(function () {
    // 1) Hide the launcher immediately on ready
    zE('messenger', 'hide');      // <-- If you use Messaging
    // zE('webWidget', 'hide');   // <-- If you're on Classic, use this line instead

    // 2) Optional: open from a URL like "/?openSupport=1"
    const params = new URLSearchParams(location.search);
    if (params.get('openSupport') === '1') {
      // make visible, then open
      zE('messenger', 'show');    // or: zE('webWidget', 'show')
      zE('messenger', 'open');    // or: zE('webWidget', 'open')
    }
  });
</script>

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

