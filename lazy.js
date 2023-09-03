(function () {
    // Function to load images when they come into view
    function lazyLoadImages(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const containerElement = entry.target;
          const imgElement = containerElement.querySelector('img');
  
          if (imgElement) {
            const src = imgElement.getAttribute('data-src');
  
            if (src) {
              // Create a new image element and set the source
              const newImage = new Image();
              newImage.src = src;
  
              // Set the alt attribute
              const altText = imgElement.getAttribute('alt');
              newImage.alt = altText;
  
              // Replace the data-src attribute with src
              imgElement.src = src;
  
              // Unobserve the element to prevent loading it again
              observer.unobserve(containerElement);
            }
          }
        }
      });
    }
  
    // Create an Intersection Observer
    const observer = new IntersectionObserver(lazyLoadImages, {
      root: null, // viewport
      rootMargin: '0px', // no margin
      threshold: 0.1, // 10% of the element is visible
    });
  
    // Select all elements containing img with data-src attribute
    const lazyLoadElements = document.querySelectorAll('span img[data-src], figure img[data-src]');
  
    // Observe each element
    lazyLoadElements.forEach((imgElement) => {
      observer.observe(imgElement.parentNode); // Observe the parent container element (span or figure)
    });
  })();
  