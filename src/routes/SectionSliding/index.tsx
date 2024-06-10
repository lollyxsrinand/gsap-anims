import { component$, useStyles$, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";
import styles from './styles.css?inline'
import type { DocumentHead } from "@builder.io/qwik-city";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default component$(() => {
    useStylesScoped$(styles)
    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
    const lenis = new Lenis({
      lerp: .05,
      wheelMultiplier: 1.75
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        gsap.registerPlugin(ScrollTrigger)
    })
  return (
    <> 
    <section>
    <h1>some text</h1>
    </section>
    <section>
    <svg>
        <defs>
            <mask>
                <h1><text>masked wala</text></h1>
                <rect></rect>
            </mask>
        </defs>
    </svg>
    </section>
    </>
  ); 
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
