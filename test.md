---
layout: default
permalink: /test/
---

TESTING ONLY: ZD POC

To test the POC, click or select the Mentavi Logo in the lower right corner of this screen.

<style>
/* Nuclear approach - force viewport constraints at the highest level */
html {
  overflow-x: hidden !important;
  max-width: 100vw !important;
  box-sizing: border-box !important;
}

body {
  overflow-x: hidden !important;
  max-width: 100vw !important;
  box-sizing: border-box !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Force Jekyll wrapper to respect viewport */
.wrapper {
  overflow-x: hidden !important;
  max-width: 100vw !important;
  box-sizing: border-box !important;
}

.wrapper section {
  overflow-x: hidden !important;
  max-width: 100vw !important;
  box-sizing: border-box !important;
}

/* Mobile-specific constraints */
@media (max-width: 768px) {
  * {
    box-sizing: border-box !important;
  }
  
  /* Aggressive clipping for mobile */
  html, body, .wrapper {
    width: 100vw !important;
    max-width: 100vw !important;
    overflow-x: hidden !important;
  }
  
  /* Constrain any absolutely or fixed positioned elements */
  *[style*="position: absolute"],
  *[style*="position: fixed"] {
    max-width: 100vw !important;
    clip-path: inset(0 0 0 0) !important;
  }
}
</style>

<script>
(function forceViewportConstraints() {
  function enforceConstraints() {
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile) return;
    
    // Force viewport constraints on everything
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    // Find and constrain any elements that extend beyond viewport
    document.querySelectorAll('*').forEach(el => {
      if (el.scrollWidth > window.innerWidth) {
        el.style.maxWidth = '100vw';
        el.style.overflowX = 'hidden';
        el.style.boxSizing = 'border-box';
      }
      
      // Force any fixed positioned elements to stay within bounds
      const style = getComputedStyle(el);
      if (style.position === 'fixed') {
        el.style.maxWidth = '100vw';
        if (style.right !== 'auto') {
          el.style.right = '0px';
        }
      }
    });
  }
  
  // Run continuously to catch dynamic content
  const observer = new MutationObserver(enforceConstraints);
  observer.observe(document.documentElement, { 
    childList: true, 
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'class']
  });
  
  window.addEventListener('resize', enforceConstraints);
  window.addEventListener('load', enforceConstraints);
  
  // Run immediately and repeatedly
  enforceConstraints();
  setInterval(enforceConstraints, 500);
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

