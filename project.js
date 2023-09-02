"use strict";

(function () {
  window.onload = () => {
    function split(str) {
      let array = str.split(",");
      array[0] = parseFloat(array[0]);
      array[1] = parseFloat(array[1]);
      return array;
    }

    function animStart(evt) {
      let elem = evt.target;
      if (elem.classList && elem.classList.contains("active") == false) {
        elem.classList.add("active");
        let durations = split(
          window.getComputedStyle(elem).getPropertyValue("animation-duration")
        );
        let delays = split(
          window.getComputedStyle(elem).getPropertyValue("animation-delay")
        );
        let time = (delays[1] + durations[1]) * 1000;
        setTimeout(() => {
          animEnd(elem);
        }, time);
      }
    }

    function animEnd(elem) {
      elem.classList.remove("active");
      elem.offsetWidth;
    }

    function init() {
      const items = document.querySelectorAll("#gallery figure");
      items.forEach((item, index) => {
        item.addEventListener("mouseover", animStart);
        item.addEventListener("touchstart", animStart);
        if (index == 1) {
          let e = new Event("mouseover");
          item.dispatchEvent(e);
        }
      });
    }

    // Commenting out the following line as it seems unnecessary
    // window.addEventListener("resize", animStart);

    init();
  };
})();
