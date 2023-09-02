(function () {
	const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
	// Change to false to make the animations play when the section's in viewport
	const scrub = true;
  
	if (isAnimationOk) {
	  loadScriptsAndSetupAnimations();
	}
  
	function loadScriptsAndSetupAnimations() {
	  // Create script elements for gasp and ScrollTrigger libraries
	  const gaspScript = document.createElement('script');
	  gaspScript.src = './gasp.js';
  
	  const scrollTriggerScript = document.createElement('script');
	  scrollTriggerScript.src = './scrolltrigger.js';
  
	  // Add event listeners to handle script loading
	  gaspScript.addEventListener('load', function () {
		// gasp.js is loaded, now load ScrollTrigger.js
		scrollTriggerScript.addEventListener('load', function () {
		  // Both scripts are loaded, setup animations
		  setupAnimations();
		});
  
		document.body.appendChild(scrollTriggerScript);
	  });
  
	  // Append gasp.js script to the document
	  document.body.appendChild(gaspScript);
	}
  
	function setupAnimations() {
	  // Now you can use the functions or objects provided by the loaded scripts
	  gsap.set(".mask", { transformOrigin: "50% 50%" });
  
	  gsap.from(".mask", {
		scale: 0.015,
		rotation: -90,
		scrollTrigger: {
		  trigger: ".section--primary",
		  start: "top top",
		  end: "bottom bottom",
		  scrub: scrub,
		  markers: false,
		},
	  });
  
	  gsap.to(".arrow", {
		opacity: 0,
		scrollTrigger: {
		  trigger: ".section--primary",
		  start: "top top",
		  end: "+=200",
		  scrub: scrub,
		},
	  });
	}
  })();
  