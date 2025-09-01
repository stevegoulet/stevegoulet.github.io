---
layout: default
permalink: /test/
---

TESTING ONLY: ZD POC

To test the POC, click or select the Mentavi Logo in the lower right corner of this screen.


<style>
/* Force no horizontal scroll globally - highest priority */
* {
  max-width: 100% !important;
  box-sizing: border-box !important;
}

html, body { 
  width: 100% !important; 
  overflow-x: hidden !important; 
  margin: 0 !important;
  padding: 0 !important;
}

/* Override Jekyll theme wrapper constraints */
.wrapper {
  max-width: 100% !important;
  overflow-x: hidden !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
}

.wrapper header,
.wrapper section,
.wrapper footer {
  max-width: 100% !important;
  overflow-x: hidden !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
}

/* Aggressive Airia chat element targeting */
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
  max-width: 100vw !important;
  box-sizing: border-box !important;
  word-break: break-word !important;
  overflow: hidden !important;
}

/* Mobile viewport constraints - apply to everything */
@media (max-width: 768px) {
  /* Nuclear option - constrain everything */
  * {
    max-width: calc(100vw - 10px) !important;
  }
  
  /* Specific overrides for common fixed elements */
  iframe,
  iframe[src*="airia"],
  [class*="airia"], 
  [id*="airia"],
  div[style*="position: fixed"] {
    max-width: calc(100vw - 20px) !important;
    right: 10px !important;
    width: auto !important;
  }
  
  /* Ensure Jekyll wrapper doesn't interfere */
  .wrapper {
    width: 100% !important;
    max-width: calc(100vw - 10px) !important;
    margin: 0 5px !important;
    padding: 0 !important;
  }
  
  .wrapper header,
  .wrapper section,
  .wrapper footer {
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }
}

/* Extra aggressive mobile constraints */
@media (max-width: 480px) {
  * {
    max-width: calc(100vw - 5px) !important;
  }
  
  iframe,
  iframe[src*="airia"],
  [class*="airia"], 
  [id*="airia"],
  div[style*="position: fixed"] {
    max-width: calc(100vw - 15px) !important;
    right: 5px !important;
    width: auto !important;
  }
  
  .wrapper {
    max-width: calc(100vw - 5px) !important;
    margin: 0 2px !important;
  }
}
</style>

<script>
(function forceNoOverflow() {
  function aggressiveClamp() {
    const isMobile = window.innerWidth <= 768;
    const isExtraSmall = window.innerWidth <= 480;
    
    // Nuclear option - constrain ALL elements
    document.querySelectorAll('*').forEach(el => {
      if (isMobile) {
        const margin = isExtraSmall ? '5px' : '10px';
        el.style.maxWidth = `calc(100vw - ${margin})`;
        el.style.boxSizing = 'border-box';
        
        // Force overflow handling
        if (el.scrollWidth > el.clientWidth) {
          el.style.overflow = 'hidden';
          el.style.overflowX = 'hidden';
        }
      }
    });
    
    // Specific targeting for chat/iframe elements
    const chatSelectors = [
      'iframe',
      'iframe[src*="airia"]',
      'iframe[src*="embed"]',
      '[class*="airia"]', 
      '[id*="airia"]',
      '[class*="chat"]',
      '[id*="chat"]',
      'div[style*="position: fixed"]',
      'div[style*="bottom"]',
      'div[style*="right"]'
    ];
    
    chatSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.style.maxWidth = isMobile ? 
          `calc(100vw - ${isExtraSmall ? '15px' : '20px'}) !important` : 
          '420px !important';
        el.style.boxSizing = 'border-box !important';
        el.style.overflow = 'hidden !important';
        
        if (getComputedStyle(el).position === 'fixed') {
          el.style.right = isExtraSmall ? '5px !important' : '10px !important';
          el.style.width = 'auto !important';
        }
      });
    });
  }
  
  // Run immediately
  aggressiveClamp();
  
  // Run on window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(aggressiveClamp, 100);
  });
  
  // Run when DOM changes
  const observer = new MutationObserver(() => {
    setTimeout(aggressiveClamp, 100);
  });
  observer.observe(document.documentElement, { 
    childList: true, 
    subtree: true,
    attributes: true
  });
  
  // Run periodically to catch dynamic content
  setInterval(aggressiveClamp, 1000);
  
  // Run on next frame
  requestAnimationFrame(aggressiveClamp);
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

