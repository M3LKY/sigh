const control = document.getElementById("direction-toggle");
const marquees = document.querySelectorAll(".marquee");
const wrapper = document.querySelector(".wrapper");

function updateScrollDirection() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    control.classList.add("toggle--vertical");
    wrapper.classList.add("wrapper--vertical");
    [...marquees].forEach((marquee) =>
      marquee.classList.add("marquee--vertical")
    );
  } else {
    control.classList.remove("toggle--vertical");
    wrapper.classList.remove("wrapper--vertical");
    [...marquees].forEach((marquee) =>
      marquee.classList.remove("marquee--vertical")
    );
  }
}

window.addEventListener("resize", updateScrollDirection);
updateScrollDirection(); // Call the function on initial page load
