---
layout: default
permalink: /test/
---

TESTING ONLY: ZD POC

To test the POC, click or select the Mentavi Logo in the lower right corner of this screen.


<style>
/* Prevent horizontal scroll globally */
html, body { 
  overflow-x: hidden !important;
  max-width: 100vw !important;
}

/* Target all potential chat elements with broader selectors */
iframe,
iframe[src*="airia"],
iframe[src*="embed"],
[class*="airia"],
[id*="airia"],
[class*="chat"],
[id*="chat"] {
  box-sizing: border-box !important;
}

/* Mobile fixes - cast a wider net */
@media (max-width: 768px) {
  /* Constrain all iframes and potential chat elements */
  iframe,
  iframe[src*="airia"],
  iframe[src*="embed"],
  [class*="airia"],
  [id*="airia"],
  [class*="chat"],
  [id*="chat"],
  div[style*="position: fixed"],
  div[style*="bottom"],
  div[style*="right"] {
    max-width: calc(100vw - 20px) !important;
    box-sizing: border-box !important;
  }
  
  /* Force any fixed positioned elements to stay within bounds */
  *[style*="position: fixed"] {
    max-width: calc(100vw - 20px) !important;
    right: 10px !important;
  }
}

@media (max-width: 480px) {
  iframe,
  iframe[src*="airia"],
  iframe[src*="embed"],
  [class*="airia"],
  [id*="airia"],
  [class*="chat"],
  [id*="chat"],
  div[style*="position: fixed"] {
    max-width: calc(100vw - 15px) !important;
  }
  
  *[style*="position: fixed"] {
    max-width: calc(100vw - 15px) !important;
    right: 5px !important;
  }
}
</style>

<script>
(function preventMobileOverflow() {
  function constrainElements() {
    const isMobile = window.innerWidth <= 768;
    const isExtraSmall = window.innerWidth <= 480;
    
    if (!isMobile) return;
    
    // Cast a wider net - target all potential problematic elements
    const selectors = [
      'iframe',
      'iframe[src*="airia"]',
      'iframe[src*="embed"]',
      '[class*="airia"]', 
      '[id*="airia"]',
      '[class*="chat"]',
      '[id*="chat"]'
    ];
    
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        const margin = isExtraSmall ? '15px' : '20px';
        el.style.maxWidth = `calc(100vw - ${margin}) !important`;
        el.style.boxSizing = 'border-box !important';
        
        // Handle fixed positioned elements
        const computedStyle = getComputedStyle(el);
        if (computedStyle.position === 'fixed') {
          el.style.right = `${isExtraSmall ? '5px' : '10px'} !important`;
        }
      });
    });
    
    // Specifically target any fixed positioned elements
    document.querySelectorAll('*').forEach(el => {
      const style = getComputedStyle(el);
      if (style.position === 'fixed') {
        const margin = isExtraSmall ? '15px' : '20px';
        el.style.maxWidth = `calc(100vw - ${margin}) !important`;
        
        // If it's positioned on the right, ensure it's not off screen
        if (style.right !== 'auto') {
          el.style.right = `${isExtraSmall ? '5px' : '10px'} !important`;
        }
      }
    });
  }
  
  // Run when DOM changes (chat widget loads)
  const observer = new MutationObserver(() => {
    setTimeout(constrainElements, 100);
  });
  observer.observe(document.documentElement, { 
    childList: true, 
    subtree: true,
    attributes: true
  });
  
  // Run on window resize
  window.addEventListener('resize', () => {
    setTimeout(constrainElements, 100);
  });
  
  // Run immediately and periodically
  constrainElements();
  requestAnimationFrame(constrainElements);
  setInterval(constrainElements, 1000);
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

