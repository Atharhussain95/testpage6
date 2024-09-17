const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//loader




//loader













    //Remove lines 41-55 for DEMO-2
    var counter = document.querySelector(".percent");

    TweenLite.set(counter, {
        xPercent: -5,
        yPercent: -5,
    });

    window.addEventListener("mousemove", moveCounter);

    function moveCounter(e) {
        TweenLite.to(counter, 0.5, {
            x: e.clientX,
            y: e.clientY,
        });
    }

    function progress() {
        var windowScrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var windowHeight = $(window).height();
        var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

        var $bgColor = progress > 99 ? "#F15025" : "#fff";
        var $textColor = progress > 99 ? "#fff" : "#fff";

        $(".counter_bar h1")
            .text(Math.round(progress) + "%")
            .css({ color: $textColor });

        $(".fill")
            .height(progress + "%")
            .css({ backgroundColor: $bgColor });
    }
    progress();
    $(document).on("scroll", progress);

    

const btnHamburguer = document.querySelector(".btn-hamburguer")
const menuBar = document.querySelector('.menu-bar')

window.addEventListener("scroll", (event) => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    
    const appearMoment = 0.05977165883143049;
    if (scrollPercentage >= appearMoment) {
        btnHamburguer.style.opacity = "1";
        btnHamburguer.style.scale = "1";
    }
    else {
        btnHamburguer.style.opacity = 0;
        btnHamburguer.style.scale = 0;
    }

})

const menuIcon = document.querySelector('.menu-icon');
const html = document.querySelector('html');

btnHamburguer.addEventListener("click", (event) => {
    menuBar.classList.toggle("menu-bar-right")
    menuIcon.classList.toggle('change')
    html.classList.toggle("stop-scrolling")
});

const setVisible = (elementOrSelector, visible) =>
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';



magnets = document.querySelectorAll(".magnetic")

magnets.forEach((magnet) => {
    if(window.innerWidth > 540) {
        magnet.addEventListener("mousemove", function(e) {
            const position = magnet.getBoundingClientRect();

            const x = e.pageX - window.scrollX - position.left-position.width/2
            const y = e.pageY - window.scrollY - position.top-position.height/2;

            magnet.style.transform = "translate(" + x * 0.3 + "px, "+ y * 0.5 + "px)";
            magnet.style.transition = "all 0s linear";
            magnet.classList.remove("shake")
            
        })
        magnet.addEventListener("mouseleave", function(e) {
            magnet.style.transition = "all 0.2s cubic-bezier(0, 0, 0.72, 0.21";
            magnet.style.transform = "translate(0px, 0px)";

        })
    }
});



// Audio

let soundButton = document.querySelector('.soundbutton'),
audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
soundButton.classList.toggle('paused')
audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
audio.pause()
}



function updateDateTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    document.getElementById('datetime').textContent = `${dateString} ${timeString}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();



































function homescreen() {
    // ID-Card animation with simpler easing and quicker effect
    gsap.from(".vertical-rectangle", {
        opacity: 0,
        scale: 0.9,  // Reduced scale animation for smoothness
        duration: 0.8,  // Shorter duration
        ease: "power2.out",  // Lighter easing for less lag
        delay: 0.3
    });

    // Resume Button Animation - keeping this short and simple
    gsap.from(".resume_btn", {
        duration: 0.8,  // Reduced time for a snappy effect
        opacity: 0,
        scale: 0.8,  // Start from a slightly larger scale
        ease: "power2.out"  // Lighter easing to prevent lag
    });

    // GSAP animation to reveal nav items, simplified stagger
    gsap.from(".nav-links li", {
        duration: 0.4,  // Reduced time for quicker reveal
        opacity: 0,
        x: -15,  // Reduced translation to lessen the animation load
        stagger: 0.1,  // Quick stagger for faster reveal
        ease: "power1.out"  // Simple easing for smoothness
    });

    // Branding animation, slight delay but quicker transition
    gsap.from(".branding", {
        duration: 0.9,  // Shortened duration
        opacity: 0,
        scale: 0.7,  // Reduced scale effect
        ease: "power1.out",  // Lighter easing
        delay: 0.4
    });
}

// Main text stagger reveal animation with lighter easing
gsap.from(".huge-text", {
    duration: 1.2,  // Shortened time for smoother animation
    y: 30,  // Reduced translation
    opacity: 0,
    stagger: 0.2,  // Quicker stagger for smoother flow
    ease: "power2.out"  // Simple easing
});

// Scroll-triggered animation for '.note' with optimized performance
gsap.set('.note', { opacity: 0, y: 40, scale: 0.9, rotation: -5 });  // Reduced effects
gsap.to('.note', {
    opacity: 1,
    y: 0,
    scale: 1,
    rotation: 0,
    duration: 0.8,  // Quicker animation
    ease: 'power2.out',  // Lighter easing
    scrollTrigger: {
        trigger: '.note',
        start: 'top 85%',  // Trigger animation a bit later
        end: '+=150',
        toggleActions: 'play none none reverse'
    }
});

// Call homescreen animation function
homescreen();



function page1() {
    gsap.registerPlugin(ScrollTrigger);

    const texts = document.querySelectorAll("#page1 .text");
    const image = document.querySelector("#page1 .side-image");

    // Animate texts
    gsap.fromTo(texts, {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#page1",
            start: "top 50%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse"
        }
    });

    // Animate image
    gsap.fromTo(image, {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#page1",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse"
        }
    });
}

page1();


function page2() {
    gsap.registerPlugin(ScrollTrigger);

    // Define common ScrollTrigger properties
    const scrollTriggerOptions = {
        trigger: "#page2",
        toggleActions: "play none none reverse",
        scrub: 0.5,  // Smooth scrolling
    };

    // Text Animation
    gsap.to(".stagger-text", {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.2,  // Reduced stagger for smoother animation
        ease: "power2.inOut",
        scrollTrigger: {
            ...scrollTriggerOptions,
            start: "top 50%", 
            end: "bottom 90%",
        }
    });

    // Line Animation
    gsap.to(".linezer", {
        duration: 1,
        width: "90%",
        ease: "power2.inOut",
        scrollTrigger: {
            ...scrollTriggerOptions,
            start: "top 90%", 
            end: "bottom 10%",
        }
    });

    const videoContainer = document.querySelector(".video-containersss");
    const video = document.getElementById("background-videoss");

    // Video control using requestAnimationFrame for smoothness
    const handleMouseEnter = () => {
        requestAnimationFrame(() => {
            if (video.paused) {
                video.play();
            }
        });
    };

    const handleMouseLeave = () => {
        requestAnimationFrame(() => {
            if (!video.paused) {
                video.pause();
            }
        });
    };

    videoContainer.addEventListener("mouseenter", handleMouseEnter);
    videoContainer.addEventListener("mouseleave", handleMouseLeave);

    // Video loading optimization
    ScrollTrigger.create({
        trigger: videoContainer,
        start: "top 80%", 
        end: "bottom 20%",
        onEnter: () => {
            if (video.readyState === 0) {
                video.load();  // Load the video only when needed
            }
        },
        onLeave: () => {
            video.pause();  // Pause video when out of view
        }
    });
}


function page3() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            start: "top 80%", // Trigger animation when #page3 comes into view
            end: "bottom 20%", 
            toggleActions: "play none none reverse"
        }
    });

    tl.to("#page3", { duration: 0.8, opacity: 1, ease: "power2.inOut" })
      .to(".top-rights", { duration: 1, opacity: 1, ease: "power2.inOut" })
      .from(".top-rights h1", { duration: 1, y: 100, stagger: 0.2, opacity: 0, ease: "power2.out" })
      .to(".bottom-rights", { duration: 1, opacity: 1, ease: "power2.inOut" }, "-=0.5")
      .from(".left-columns h1", { duration: 1, y: 100, stagger: 0.2, opacity: 0, ease: "power2.out" })
      .from(".right-columns h1", { duration: 1, y: 100, stagger: 0.2, opacity: 0, ease: "power2.out" }, "-=0.8");
}

function page4() {
    gsap.registerPlugin(ScrollTrigger);

    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            start: "top 80%", 
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            onComplete: page5 // Trigger page5 animation after page4 ends
        }
    });

    tl4.from("#page4 .stext", {
        duration: 1, 
        y: 100, 
        opacity: 0, 
        stagger: 0.3,
        ease: "power2.out"
    });
}




function page5() {
    gsap.registerPlugin(ScrollTrigger);

    const tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            start: "top 80%", // Start when #page5 comes into view
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            onComplete: page6ScrollTrigger // Start page6 animation when page5 finishes
        }
    });

    tl5.from("#page5-title h1", { opacity: 0, y: -50 })
       .from("#page5-title h2", { opacity: 0, y: -50 }, "-=0.8")
       .from("#page5-projects h3", { opacity: 0, x: -100 }, "-=0.8")
       .from("#page5-projects h4", { opacity: 0, x: 100 }, "-=0.8")
       .from("#page5-details p", { opacity: 0, y: 50, stagger: 0.3 })
       .from(".page5-project-item", { opacity: 0, y: 50, stagger: 0.2 });

    // Modern animation for the button
    tl5.from("#pb1", { 
        opacity: 0,          // Start fully invisible
        y: 50,               // Start slightly below its final position
        scale: 0.9,          // Slightly scaled down initially
        ease: "power3.out",  // Smooth and natural easing
        duration: 1,         // Slightly longer animation for smoothness
        delay: 0.2           // Delay to create anticipation
    });
}

// Function to trigger the scroll animation for page6
function page6ScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: "#page6",
            start: "top 80%",  // Starts when #page6 comes into view
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    })
    .from("#page6 h2", { 
        opacity: 0, 
        x: -50, 
        duration: 1, 
        ease: "power2.out" 
    })
    .from("#Cor1", { 
        opacity: 0, 
        y: 50, 
        duration: 1, 
        ease: "back.out(1.7)" 
    }, "-=0.5")
    .from("#Cor2", { 
        opacity: 0, 
        scale: 0.8, 
        duration: 0.8, 
        ease: "elastic.out(1, 0.75)" 
    }, "-=0.3")
    .from("#page6 .form-group:nth-child(2) h1", { 
        opacity: 0, 
        x: -100, 
        duration: 0.8, 
        ease: "power2.out" 
    }, "-=0.3")
    .from("#page6 .form-group:nth-child(2) input", { 
        opacity: 0, 
        y: 50, 
        duration: 0.8, 
        ease: "back.out(1.7)" 
    }, "-=0.5")
    .from("#page6 .form-group:nth-child(3) h1", { 
        opacity: 0, 
        scale: 0.8, 
        duration: 0.8, 
        ease: "elastic.out(1, 0.75)" 
    }, "-=0.3")
    .from("#page6 .form-group:nth-child(3) textarea", { 
        opacity: 0, 
        x: 100, 
        duration: 1, 
        ease: "power2.out" 
    }, "-=0.5")
    .from(".submit-btn", { 
        opacity: 0, 
        scale: 0.8, 
        duration: 1, 
        ease: "elastic.out(1, 0.75)" 
    }, "-=0.3");
}

document.addEventListener("DOMContentLoaded", function() {
    page1();
    page2();
    page3(); 
    page4(); // page5 will be called after page4 animation ends
    page5();
    page6ScrollTrigger()
});
