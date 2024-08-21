function locoGsap(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#bgs"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#bgs", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#bgs").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  
  locoGsap()
  
  
  function bottleAna(){
    var tl=gsap.timeline();
  
    tl.to(".bottle-img",{
    
        scrollTrigger:{
          scroller:"#bgs",
          trigger:".bottle-img",
          start:1,
          // markers:true,
          end:"540%",
          pin:true,
          scrub:.1
        },
    
        
      })
    
    
      tl.to(".bottle-img",{
    
        scrollTrigger:{
          scroller:"#bgs",
          trigger:".bottle-img",
          start:1,
          end:"100%",
        //   markers:true,
          scrub:1,
        },
        rotate:'-15',
        duration:.1
      })
    
    
       
    
      tl.to(".bottle-img",{
    
        scrollTrigger:{
          scroller:"#bgs",
          trigger:".bottle-img",
          scrub:1,   
          // markers:true,
          start:2,
          end:150,
          pin:true,
          },
           scale:0.42,
      })  
  }
  
  
  
  
  var body = document.querySelector(".bottle-long")
  var height = Math.max(  body.offsetHeight );
  
  
  var bottle= document.querySelector(".sexy-bottle");
  var bot = Math.max(  bottle.offsetHeight );
  
  var tl=gsap.timeline();
  
  var move=height-bot
  
    tl.to(".sexy-bottle",{
  
      scrollTrigger:{
        scroller:"#bgs",
        trigger:".sexy-bottle",
        // markers:true,
        pin:true,
        start:1,
        end: move,
        scrub:.1
        }, 
      })
    
    
      tl.to(".sexy-bottle",{
  
        scrollTrigger:{
          scroller:"#bgs",
          trigger:".sexy-bottle",
          start:1,
          end: height/5,
          // markers:true,
          scrub:.5,
        },
        rotate:'-15',
        duration:.1
      })
    
    
       
    
      tl.to(".sexy-bottle",{
  
        scrollTrigger:{
          scroller:"#bgs",
          trigger:".sexy-bottle",
          scrub:1,   
          // markers:true,
          start:2,
          end:150,
          pin:true,
          },
           scale:0.42,
      })  
  
  
  
  
  
  
  
  // ///////////working properly
  
  // gsap.to(".bottle-img",{
  //   scrollTrigger:{
  //       scroller:"#bgs",
  //       trigger:".bottle-img",
  //       start: 1,
  //       markers:true,  
  //       scrub:1, 
  //       pin: true,
  //       end: "433%"
  //   },
  //   rotate: 0, 
  // })
  // gsap.to(".bottle-img",{
  //   scrollTrigger:{
  //       scroller:"#bgs",
  //       trigger:".bottle-img",
  //          markers: true,
  //        scrub:1,   
  //       start:"top 7%",
  //       end:"100%"
  //   },
  //    scale:0.25,
  //   delay:3
  // })