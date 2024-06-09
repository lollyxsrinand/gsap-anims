import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './styles.css?inline'
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  useStylesScoped$(styles)
  const anims = ['Section Sliding']
  return (
    <>
    <div class="main">
      <div class="anim-container">
        {anims.map((anim, i) => (
          <a href={'/'+anim.replaceAll(' ', '')} class='anim' key={i}>{anim}</a>
        ))}
      </div>

    </div>
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
