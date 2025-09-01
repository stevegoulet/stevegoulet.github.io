---
layout: default
permalink: /test/
---

TESTING ONLY: ZD POC

To test the POC, click or select the Mentavi Logo in the lower right corner of this screen.


<style>
/* Only prevent horizontal scroll on body/html - don't break layout */
html, body { 
  overflow-x: hidden;
}

/* Target only chat widget elements - be very specific */
iframe[src*="airia.ai"],
[class*="airia-"],
[id*="airia-"] {
  box-sizing: border-box !important;
}

/* Mobile fixes - target chat elements only */
@media (max-width: 768px) {
  /* Specific chat widget constraints */
  iframe[src*="airia.ai"],
  [class*="airia-"],
  [id*="airia-"] {
    max-width: calc(100vw - 20px) !important;
  }
  
  /* Handle any fixed positioned chat elements */
  div[style*="position: fixed"][style*="bottom"][style*="right"] {
    max-width: calc(100vw - 20px) !important;
    right: 10px !important;
  }
}

@media (max-width: 480px) {
  iframe[src*="airia.ai"],
  [class*="airia-"],
  [id*="airia-"] {
    max-width: calc(100vw - 15px) !important;
  }
  
  div[style*="position: fixed"][style*="bottom"][style*="right"] {
    max-width: calc(100vw - 15px) !important;
    right: 5px !important;
  }
}
</style>

<script>
(function chatWidgetFix() {
  function constrainChatOnly() {
    const isMobile = window.innerWidth <= 768;
    const isExtraSmall = window.innerWidth <= 480;
    
    if (!isMobile) return;
    
    // Only target specific chat-related elements
    const chatSelectors = [
      'iframe[src*="airia.ai"]',
      '[class*="airia-"]', 
      '[id*="airia-"]'
    ];
    
    chatSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        const margin = isExtraSmall ? '15px' : '20px';
        el.style.maxWidth = `calc(100vw - ${margin})`;
        el.style.boxSizing = 'border-box';
        
        // Handle fixed positioned elements
        const computedStyle = getComputedStyle(el);
        if (computedStyle.position === 'fixed') {
          el.style.right = isExtraSmall ? '5px' : '10px';
        }
      });
    });
    
    // Also check for fixed bottom-right positioned divs (chat containers)
    document.querySelectorAll('div').forEach(el => {
      const style = getComputedStyle(el);
      if (style.position === 'fixed' && 
          style.bottom !== 'auto' && 
          style.right !== 'auto') {
        const margin = isExtraSmall ? '15px' : '20px';
        el.style.maxWidth = `calc(100vw - ${margin})`;
        el.style.right = isExtraSmall ? '5px' : '10px';
      }
    });
  }
  
  // Run when chat loads
  const observer = new MutationObserver(() => {
    constrainChatOnly();
  });
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
  
  // Run on resize
  window.addEventListener('resize', constrainChatOnly);
  
  // Run initially and on next frame
  constrainChatOnly();
  requestAnimationFrame(constrainChatOnly);
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

