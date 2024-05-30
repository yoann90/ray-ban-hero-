const imageAnimate = () => {
  Shery.imageEffect("#back", {
    style: 5,
    config: {
      a: { value: 1.37, range: [0, 30] },
      b: { value: -0.98, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 1.587810002261769 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.31, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: false },
      onMouse: { value: 1 },
      noise_speed: { value: 1.45, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.46, range: [0, 2] },
      noise_scale: { value: 12.21, range: [0, 100] },
    },
    gooey: true,
  });
};
// imageAnimate();

const animatioH1 = () => {
  let elem = document.querySelectorAll(".elem");

  elem.forEach((element) => {
    let h1 = element.querySelectorAll("h1");
    let index = 0;
    let animate = false;
    document.querySelector("#main").addEventListener("click", () => {
      if (!animate) {
        animate = true;
        gsap.to(h1[index], {
          top: "-=100%",
          ease: Expo.easeInOut,
          duration: 1,
          onComplete: function () {
            gsap.set(this._targets[0], {
              top: "100%",
            });
            animate = false;
          },
        });
        index === h1.length - 1 ? (index = 0) : index++;
        gsap.to(h1[index], {
          top: "-=100%",

          ease: Expo.easeInOut,
          duration: 1,
        });
      }
    });
  });
};
// animatioH1();

const menuNav = () => {
  let menu = document.querySelector(".burger-menu ");

  let closeNav = document.querySelector("#full i ");

  let to = gsap.timeline();
  to.to("#full", {
    // top: 0,
    left:-120,
    duration: 0.5,
  });
  to.from("#full a,hr", {
    x: -150,
    duration: 0.6,
    stagger: 0.3,
    opacity: 0,
  });
  to.from("#full i", {
    opacity: 0,
  });

  to.pause();

  menu.addEventListener("click", () => {
    console.log("irr");
    to.play();
  });
  closeNav.addEventListener("click", () => {
    to.reverse();
  })
};
menuNav()