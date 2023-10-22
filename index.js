var cursor = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x+30 + "px";
  cursor.style.top = dets.y + "px";
  blur.style.top = dets.y - 200 + "px";
  blur.style.left = dets.x - 200 + "px";
  
});

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    cursor.style.scale = 2
    cursor.style.border = "1px solid #fff"
    cursor.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave", function(){
    cursor.style.scale = 1
    cursor.style.border = "0px solid #95C11E"
    cursor.style.backgroundColor = "#95C11E"
  })
})

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
    // markers:true
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: "true",
    start: "top -50%",
    end: "top -100%",
    scrub: 2,
  },
});



gsap.from("#about-us img , #about-us-main", {
  y:50,
  opacity:0,
  duration:2,
  stagger:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 70%",  // understand this clearly 
    end:"top 65%",
    scrub:5 
  }
})

gsap.from(".card", {
  scale:0.8,
  opacity:0,
  duration:1,
  // stagger:1,
  scrollTrigger:{
    trigger:"#card-container",
    scroller:"body",
    // markers:true,
    start:"top 70%",  // understand this clearly 
    end:"top 65%",
    scrub:1 
  }
})
gsap.from("#colon1", {
  y:-70,
  x:-70,
  // stagger:1,
  scrollTrigger:{
    trigger:"#page3 img",
    scroller:"body",
    // markers:true,
    start:"top 55%",  // understand this clearly 
    end:"top 45%",
    scrub:3
  }
})
gsap.from("#colon2", {
  y:70,
  x:70,
  // stagger:1,
  scrollTrigger:{
    trigger:"#page3 img",
    scroller:"body",
    // markers:true,
    start:"top 55%",  // understand this clearly 
    end:"top 45%",
    scrub:3
  }
})
gsap.from("#page3 p", {
  scale:0.8,
  // stagger:1,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"body",
    // markers:true,
    start:"top 55%",  // understand this clearly 
    end:"top 45%",
    scrub:3
  }
})