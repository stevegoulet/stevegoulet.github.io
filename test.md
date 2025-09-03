---
layout: default
permalink: /test/
---

TESTING ONLY: ZD POC

To test the POC, click or select the Mentavi Logo in the lower right corner of this screen.

<a href="/test?openSupport=1">Contact support</a>

<script>
  window.zESettings = {
    webWidget: {
      launcher: { labelVisible: false } // hide the badge/launcher by default
      // don't suppress channels here
    }
  };
</script>

<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=023ec2cb-f199-48ed-b908-fc31a374dcd8"></script>

<script>
  zE(function () {
    const params = new URLSearchParams(location.search);
    if (params.get('openSupport') === '1') {
      zE('webWidget', 'show');  // IMPORTANT: make visible first
      zE('webWidget', 'open');  // then open it
    } else {
      zE('webWidget', 'hide');  // keep it hidden on normal loads
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

