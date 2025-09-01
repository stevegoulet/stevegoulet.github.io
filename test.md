---
layout: default
permalink: /test/
---

TESTING ONLY: ZD POC

To test the POC, click or select the Mentavi Logo in the lower right corner of this screen.


<style>
/* Prevent horizontal scroll on page */
html, body { 
  width: 100%; 
  overflow-x: hidden; 
  margin: 0;
  padding: 0;
}

/* Ensure main content doesn't cause overflow */
.wrapper {
  max-width: 100%;
  overflow-x: hidden;
}

/* Target Airia chat elements directly */
iframe[src*="airia"],
[class*="airia"], 
[id*="airia"] {
  box-sizing: border-box !important;
  max-width: 100vw !important;
  word-break: break-word;
}

/* Mobile-specific fixes */
@media (max-width: 768px) {
  /* Ensure all Airia elements stay within viewport */
  iframe[src*="airia"],
  [class*="airia"], 
  [id*="airia"] {
    max-width: calc(100vw - 20px) !important;
    margin-right: 10px !important;
  }
  
  /* Handle fixed positioning chat widgets */
  [style*="position: fixed"] {
    right: 10px !important;
    max-width: calc(100vw - 20px) !important;
  }
  
  /* Prevent text overflow in main content */
  .wrapper section {
    max-width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
}

/* Extra small screens */
@media (max-width: 480px) {
  iframe[src*="airia"],
  [class*="airia"], 
  [id*="airia"] {
    max-width: calc(100vw - 10px) !important;
    margin-right: 5px !important;
  }
  
  [style*="position: fixed"] {
    right: 5px !important;
    max-width: calc(100vw - 10px) !important;
  }
}
</style>

<script>
(function preventOverflow() {
  function clampElements() {
    // Target all potential Airia chat elements
    const selectors = [
      'iframe[src*="airia"]',
      '[class*="airia"]', 
      '[id*="airia"]',
      '[style*="position: fixed"]'
    ];
    
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        const isMobile = window.innerWidth <= 768;
        const isExtraSmall = window.innerWidth <= 480;
        
        el.style.boxSizing = 'border-box';
        
        if (isMobile) {
          const margin = isExtraSmall ? '10px' : '20px';
          el.style.maxWidth = `calc(100vw - ${margin})`;
          
          // Handle fixed positioned elements
          const computedStyle = getComputedStyle(el);
          if (computedStyle.position === 'fixed') {
            el.style.right = isExtraSmall ? '5px' : '10px';
          }
        } else {
          el.style.maxWidth = '420px';
        }
      });
    });
  }
  
  // Run immediately and on resize
  clampElements();
  window.addEventListener('resize', clampElements);
  
  // Run when DOM changes (chat widget loads)
  const observer = new MutationObserver(clampElements);
  observer.observe(document.body, { 
    childList: true, 
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'class', 'id']
  });
  
  // Also run on next frame to catch dynamically loaded content
  requestAnimationFrame(clampElements);
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

