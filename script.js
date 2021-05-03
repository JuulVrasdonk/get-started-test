function fadeIn() {
    var tl = gsap.timeline();
    tl.from('.heroheading', {
        duration: 3,
        ase: Power1.easeOut,
        opacity: 0
    })
    .from('.heroheading', {
        scale: 2,
        xPercent: 700, 
        yPercent: 100, 
        color: '#ffffff'
    })
    .from('.herosection', {
        duration: 1,
        ease: Elastic.easeOut.config(1, 0.3),
        width: 0  
    }, '<-=1')
    .from ('.itemfadein', {
        duration: 2,
        stagger: 0.8,
        y: 100,
        opacity: 0,
    })
    .to('.strokein', {
        duration: 1,
        height: '7em',
        scaleY: 1
    })
    return tl;
}


var master = gsap.timeline();
master.add(fadeIn())