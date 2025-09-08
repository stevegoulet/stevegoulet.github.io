---
layout: default
permalink: /langflow/
---

TESTING ONLY: ZD POC

To test the POC, click or select the Mentavi Logo in the lower right corner of this screen.

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


<script
  src="https://cdn.jsdelivr.net/gh/logspace-ai/langflow-embedded-chat@v1.0.7/dist/build/static/js/bundle.min.js">
</script>
  <langflow-chat
    window_title="Zendesk POC TESTING ONLY"
    flow_id="84ab45b3-0ea8-4fa2-9aa5-3ccc344ad710"
    host_url="https://langflow.mentavi.com"
    api_key="sk-c5LYVCQL7MQ9bkqxlx-MsFCZcFUUB8f1BL7Sk8zM7a8">
    chat_window_style='{
        "backgroundColor": "#1a0d0d",
        "border": "4px solid #b30000",
        "borderRadius": "16px",
        "boxShadow": "0 8px 32px #b30000",
        "color": "#fff",
        "fontFamily": "Georgia, serif",
        "padding": "16px"
        }
    height="600"
    width="400"
</langflow-chat>

