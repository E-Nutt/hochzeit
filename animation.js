gsap.registerPlugin(TextPlugin, Observer, ScrollTrigger,CustomEase,EasePack, EaselPlugin);

function hide(elem) { 
    gsap.set(elem, {autoAlpha: 0}); //set the opacity to 0
  }
  
/* REVEAL-HORIZONTAL*/

  document.addEventListener("DOMContentLoaded", function() {  
  
    gsap.utils.toArray(".gs-reveal-hor").forEach(elem => { //function to animate all elements, thats contain .gs-reveal
      hide(elem); //set the initial opacity of the elements to 0
  
      ScrollTrigger.create({ //create object from GSAP
        trigger: elem,
        onEnter: function() { animateHor(elem) }, //call the function when the elements enter the viewport
        onEnterBack: function() { animateHor(elem, -1) }, //call the function when the elements re-enter the viewport
        onLeave: function() { hide(elem) } //call the function when the elements leave the viewport
      });
    });
  });

  function animateHor(elem, direction) { //function to create enter animation from right or left
    direction = direction || 1; //initial direction
    var x = 0,
        y = direction * 100;
  if (elem.classList.contains("gs-reveal-fromLeft")) { //create enter animation from left
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs-reveal-fromRight")) { //create enter animation from right
      x = 100;
      y = 0;
    }
  
/*     elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";  */
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, { 
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  }


/* REVEAL-VERTICAL*/

  document.addEventListener("DOMContentLoaded", function() {  
  
    gsap.utils.toArray(".gs-reveal-ver").forEach(elem => { //function to animate all elements, thats contain .gs-reveal
      hide(elem); //set the initial opacity of the elements to 0
      ScrollTrigger.create({ //create object from GSAP
        trigger: elem,
        onEnter: function() { animateVer(elem) }, //call the function when the elements enter the viewport
        onEnterBack: function() { animateVer(elem, -1) }, //call the function when the elements re-enter the viewport
        onLeave: function() { hide(elem) } //call the function when the elements leave the viewport
      });
    });
  });
  
  function animateVer(elem, direction) { //function to create enter animation from right or left
    direction = direction || 1; //initial direction
    var x = direction*100,
        y = 0;
  if (elem.classList.contains("gs-reveal-fromTop")) { //create enter animation from left
      x = 0;
      y = -100;
    } else if (elem.classList.contains("gs-reveal-fromBottom")) { //create enter animation from right
      x = 0;
      y = 100;
    }
  
/*     elem.style.transform = "translate(" + x + "px, " + y + "px)"; 
    elem.style.opacity = "0"; */
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, { //adding the animation to the element
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  }

  let eventDetail = gsap.timeline({paused:true})
  .from(".detail", {x : -100, stagger:0.3, autoAlpha:0})

  ScrollTrigger.create({
    trigger: ".wrapper2",
    start:"top center",
    end:"bottom center",
    onEnter: () => eventDetail.play(),
    onEnterBack: () => eventDetail.play(),
    onLeaveBack: () => eventDetail.reverse(),
    onLeave: () => eventDetail.reverse()
  })

  let list = gsap.timeline({paused:true})
  .from(".att", {y:100, autoAlpha:0})
  .from(".list-link", {autoAlpha:0})
  
  ScrollTrigger.create({
    trigger: ".wrapper3",
    start:"5% center",
    end:"bottom center",
    onEnter: () => list.play(),
    onEnterBack: () => list.play(),
    onLeaveBack: () => list.reverse(),
    onLeave: () => list.reverse()
  })

  let closing = gsap.timeline({paused:true})
  .to(".hope", {text:"Hope you can join us", duration:2})
  .to(".inad", {text:"Inad & Ila",duration:2})
 

  ScrollTrigger.create({
    trigger: ".wrapper5",
    start:"5% center",
    end:"bottom center",
    markers:true,
    onEnter: () => closing.play(),
    onEnterBack: () => closing.play(),
    onLeaveBack: () => closing.reverse(-1),
    onLeave: () => closing.reverse(-1)
  })
