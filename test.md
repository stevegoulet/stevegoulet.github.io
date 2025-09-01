---
layout: default
permalink: /test/
---

TESTING ONLY: ZD POC

To test the POC, click or select the Mentavi Logo in the lower right corner of this screen.

<style>
/* Mobile overflow prevention for Airia widget with Tailwind CSS */
@media (max-width: 768px) {
  /* Prevent horizontal scroll */
  html, body {
    overflow-x: hidden !important;
    max-width: 100vw !important;
  }
  
  /* Target Airia widget container and elements */
  #root,
  #root *,
  [style*="position: fixed"],
  [class*="tw-"],
  iframe[src*="airia"],
  iframe[src*="embed"] {
    max-width: calc(100vw - 20px) !important;
    box-sizing: border-box !important;
  }
  
  /* Handle fixed positioned chat elements */
  [style*="position: fixed"][style*="bottom"],
  [style*="position: fixed"][style*="right"] {
    right: 10px !important;
    max-width: calc(100vw - 20px) !important;
  }
}

@media (max-width: 480px) {
  #root,
  #root *,
  [style*="position: fixed"],
  [class*="tw-"],
  iframe[src*="airia"],
  iframe[src*="embed"] {
    max-width: calc(100vw - 15px) !important;
  }
  
  [style*="position: fixed"][style*="bottom"],
  [style*="position: fixed"][style*="right"] {
    right: 5px !important;
    max-width: calc(100vw - 15px) !important;
  }
}
</style>

<script>
(function preventAiriaOverflow() {
  function constrainWidget() {
    const isMobile = window.innerWidth <= 768;
    const isSmall = window.innerWidth <= 480;
    
    if (!isMobile) return;
    
    // Target the root container and any elements that might overflow
    const targets = [
      '#root',
      '#root *',
      '[style*="position: fixed"]',
      '[class*="tw-"]',
      'iframe[src*="airia"]',
      'iframe[src*="embed"]'
    ];
    
    targets.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        const margin = isSmall ? '15px' : '20px';
        el.style.maxWidth = `calc(100vw - ${margin}) !important`;
        el.style.boxSizing = 'border-box !important';
        
        // Handle fixed positioned elements (likely the chat widget)
        const style = getComputedStyle(el);
        if (style.position === 'fixed') {
          el.style.right = `${isSmall ? '5px' : '10px'} !important`;
        }
      });
    });
  }
  
  // Run when widget loads
  const observer = new MutationObserver(() => {
    setTimeout(constrainWidget, 200);
  });
  
  observer.observe(document.body, { 
    childList: true, 
    subtree: true,
    attributes: true 
  });
  
  // Run on resize and initially
  window.addEventListener('resize', constrainWidget);
  constrainWidget();
  requestAnimationFrame(constrainWidget);
})();
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

