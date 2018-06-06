import { TimelineMax } from 'gsap';
export default {
  transition: {
    name: 'page',
    mode: 'out-in',
    css: false,
    enter: function (el, done) {
      let tl = new TimelineMax({ onComplete: done });
      tl
        .set(el, { transformOrigin: 'top center' })
        .from(el, 0.3, { rotationY: 180, opacity: 0, ease: Circ.easeOut });
    },
    leave: function (el, done) {
      let tl = new TimelineMax({ onComplete: done });
      tl
        .set(el, { transformOrigin: 'top center'})
        .to(el, 0.3, { rotationY: 180, opacity: 0, ease: Circ.easeOut });
    }
  }
}
