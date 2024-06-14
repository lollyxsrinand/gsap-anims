import { component$, useStyles$, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";
import styles from './styles.css?inline'
import type { DocumentHead } from "@builder.io/qwik-city";
import Lenis from "lenis";

export default component$(() => {
    useStylesScoped$(styles)
    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
    const lenis = new Lenis({
      lerp: .05,
      wheelMultiplier: 1 })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  return (
    <> 
    <section>
        <div style="background-color: white; color:black">
        <h1>THIS IS VERY</h1>
        </div>
    </section>
    <section>
        <div style="background-color: black; color: white">
        <h1>ODDLY SATISFYING</h1>
        </div>
    </section>
    <section>
        <div style="background-color: white; color: black">
        <h1>LESSGOOO</h1>
        </div>
    </section>
    </>
    ) 
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
