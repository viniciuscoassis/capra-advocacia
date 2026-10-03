import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export function useSiteMotion(scope) {
  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const preloader = scope.current?.querySelector(".preloader");

      if (reducedMotion) {
        document.documentElement.classList.add("no-js");
        gsap.set(preloader, { display: "none" });
        return () => document.documentElement.classList.remove("no-js");
      }

      document.documentElement.classList.add("has-gsap");
      const splits = [];
      const ease = "power4.out";

      const drawn = gsap.utils.toArray(".hero__svg .draw");
      drawn.forEach((element) => {
        const length = element.getTotalLength?.() ?? 0;
        if (length) {
          gsap.set(element, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        }
      });

      const splitIntoMaskedLines = (element) => {
        const split = new SplitText(element, {
          type: "lines",
          linesClass: "split-line",
        });
        splits.push(split);
        split.lines.forEach((line) => {
          const mask = document.createElement("span");
          mask.className = "split-line-mask";
          line.parentNode.insertBefore(mask, line);
          mask.appendChild(line);
        });
        return split;
      };

      const heroTitle = scope.current?.querySelector(".hero__title");
      const heroSplit = heroTitle ? splitIntoMaskedLines(heroTitle) : null;
      const intro = gsap.timeline();

      intro
        .from(".preloader__name", {
          yPercent: 120,
          duration: 0.9,
          ease,
        })
        .from(
          ".preloader__tag",
          { opacity: 0, y: 10, duration: 0.5 },
          "-=0.4",
        )
        .to(".preloader__inner", {
          opacity: 0,
          y: -30,
          duration: 0.5,
          ease: "power2.in",
          delay: 0.4,
        })
        .to(
          ".preloader",
          {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut",
            onComplete: () => gsap.set(preloader, { display: "none" }),
          },
          "-=0.1",
        );

      if (heroSplit) {
        intro.from(
          heroSplit.lines,
          { yPercent: 110, duration: 1.1, ease, stagger: 0.09 },
          "-=0.45",
        );
      }

      intro
        .to(".hero__eyebrow", { opacity: 1, duration: 0.7 }, "-=0.7")
        .from(
          ".hero__lede",
          { opacity: 0, y: 24, duration: 0.8, ease },
          "-=0.6",
        )
        .from(
          ".hero__actions .btn",
          { opacity: 0, y: 20, duration: 0.6, ease, stagger: 0.08 },
          "-=0.55",
        )
        .to(
          ".hero__svg .draw",
          {
            strokeDashoffset: 0,
            duration: 2.2,
            ease: "power2.inOut",
            stagger: 0.045,
          },
          "-=1.1",
        )
        .from(".hero__scroll", { opacity: 0, duration: 0.6 }, "-=1.5");

      gsap.to(".hero__art", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const marquee = scope.current?.querySelector(".marquee__track");
      if (marquee) {
        gsap.to(marquee, {
          x: -(marquee.scrollWidth / 2),
          duration: 26,
          ease: "none",
          repeat: -1,
        });
      }

      gsap.utils
        .toArray("[data-split]:not(.hero__title)")
        .forEach((element) => {
          const split = splitIntoMaskedLines(element);
          gsap.from(split.lines, {
            yPercent: 110,
            duration: 1,
            ease,
            stagger: 0.08,
            scrollTrigger: { trigger: element, start: "top 85%" },
          });
        });

      gsap.utils.toArray("[data-split-lines]").forEach((element) => {
        if (element.closest(".hero")) return;
        gsap.from(element, {
          opacity: 0,
          y: 26,
          duration: 0.9,
          ease,
          scrollTrigger: { trigger: element, start: "top 88%" },
        });
      });

      const reveal = (selector, variables = {}) => {
        gsap.utils.toArray(selector).forEach((element, index) => {
          gsap.from(element, {
            opacity: 0,
            y: 40,
            duration: 0.9,
            ease,
            delay: (index % 4) * 0.07,
            scrollTrigger: { trigger: element, start: "top 88%" },
            ...variables,
          });
        });
      };

      reveal(".pillar");
      reveal(".service");
      reveal(".method-item");
      reveal(".aud-card");
      reveal(".badge-card");
      reveal(".location-card");
      reveal(".location__map", {
        y: 0,
        scale: 0.98,
        transformOrigin: "center",
      });
      reveal(".about__portrait", {
        y: 0,
        scale: 1.06,
        transformOrigin: "center",
      });

      gsap.utils.toArray(".section-head").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          x: -24,
          duration: 0.8,
          ease,
          scrollTrigger: { trigger: element, start: "top 90%" },
        });
      });

      gsap.from(".cta__sub, .cta__actions, .cta__note, .lead-form", {
        opacity: 0,
        y: 26,
        duration: 0.9,
        ease,
        stagger: 0.12,
        scrollTrigger: { trigger: ".cta", start: "top 70%" },
      });

      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      // Expanded reviews move the contact section and its scroll animations.
      const reviews = scope.current?.querySelector(".reviews");
      const reviewsObserver = new ResizeObserver(() => ScrollTrigger.refresh(true));
      if (reviews) reviewsObserver.observe(reviews);
      const safetyTimer = window.setTimeout(() => {
        if (document.hidden && preloader) {
          gsap.set(preloader, { display: "none" });
          gsap.set(".hero__eyebrow", { opacity: 1 });
          gsap.set(".hero__svg .draw", { strokeDashoffset: 0 });
        }
      }, 5000);

      return () => {
        window.removeEventListener("load", onLoad);
        reviewsObserver.disconnect();
        window.clearTimeout(safetyTimer);
        splits.reverse().forEach((split) => split.revert());
        document.documentElement.classList.remove("has-gsap");
      };
    },
    { scope },
  );
}
