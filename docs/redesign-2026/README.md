# Redesign, October 2026

## Direction 2: dark, image first, one voice

The first direction (three switchable skins: Deco, Blueprint, Aquarelle)
was built, reviewed and rejected on 10 October: the skins said more about
the medium than about the work. Konstancja pointed at three references
instead: [marcuslorenzet.com](https://www.marcuslorenzet.com/),
[nk.studio](https://www.nk.studio/es) with its
[Pomelo case](https://www.nk.studio/es/proyectos/pomelo), and
[gladeye.com/work](https://www.gladeye.com/work) with
[The Examination](https://www.gladeye.com/work/the-examination).

What they have in common, and what this direction takes from them:

- A dark ground and one display face set very large and sure of itself.
  Here: ground `#0f0f0e`, ink `#f1ede4`, one sand accent `#e3d2ad`;
  Bricolage Grotesque for display, Inter for body (the CV uses Inter too,
  so the two read as one person).
- The author's portrait in the hero, desaturated, with the claim set over
  it.
- Work as large image tiles in two columns; the covers carry the colour.
- A strip of numbers; a short "how I work"; a large closing line with the
  e-mail.
- Case studies led by images, with short text sections, metadata, pull
  quotes and results at the end. The template now: the title very large
  on the ground, the cover art as one wide image that drifts slower than
  the page, the lead in display type, chapter heads as label on the left
  and maxim on the right (after marcuslorenzet.com/glide), images and
  chapters that reveal on first sight, numbers that count up, clips that
  play while in view (`clip: true` on a video block), a next-project tile
  with its cover.
- The work grid breaks its rhythm: a wide tile and a narrow one that sits
  lower, sides swapped every row, a "View" pill that follows the cursor.

What was kept from the first pass: the sitemap and robots, the 2026
award, the Umami events, the writing rules in `docs/STYLE.md`, the CV.

## The journey through scales

After michalnawrot.github.io, which travels through powers of ten as the
reader scrolls, the home page travels through the scales of the work: the
screen (the hero: the viewport drawn as an app shell), a component (the
work: one card with its slots and dimensions), a token (how I work: the
spacing scale and the colour ramp), a pixel (off screen: a magnified grid
with a few sand pixels lit), and back out to the screen at the contact
line. One canvas behind the page draws the scenes from lines in the two
inks; between stops the outgoing scene zooms past and the next resolves
out of it; dust streaks while the page moves. A ruler on the left edge and
a readout in the corner say where the reader is, in pixels. Under
prefers-reduced-motion each stop is a still.

| | |
| --- | --- |
| ![Screen](journey-screen.png) | ![Component](journey-component.png) |
| ![Token](journey-token.png) | ![Pixel](journey-pixel.png) |

## 11 October: the walls

- Every desktop screen on every case study sits in a MacBook: the
  Analytics screens from Konstancja's own device frames in Figma, the
  other seven case studies composited into one bezel template (lid, base,
  shadow) from their flat exports. Diagrams, phones and photographs stay
  as they are.
- The Analytics intro is four screens of the product blending into one
  another in depth, with a chart that draws itself in sand; the same stack,
  with five products, is the home page cover. "What it is" is a carousel
  through every part of the application. Diagrams and code are drawers
  that open on request; long tables fold to their keys; use cases show the
  actor, trigger, rule and exits and keep the step-by-step behind "Show
  more"; the closing questions are joined to their answers by a drawn
  connector, after the data-model canvas.
- Depth on every page: a dust canvas and two slow washes of light, a
  faint drawing-sheet grid behind the walls, dust that streaks with the
  scroll. Motion is varied by what an image is: a scan crosses a mockup
  once as it arrives and then it breathes; a diagram develops from blur;
  a pair slides in from both sides; a set arrives cell by cell.

| | |
| --- | --- |
| ![Carousel](case-carousel.png) | ![Joint](case-joint.png) |

## Screens

| | |
| --- | --- |
| ![Home, hero](home-hero.png) | ![Home, phone](home-mobile.png) |
| ![Case, intro](case-hero.png) | ![Case, a chapter head](case-chapter.png) |

Full page: [home-full.png](home-full.png). A case cover on the sand
field: [case-cover.png](case-cover.png).

## Open

- A better portrait: posed, higher resolution, plain background. The
  current one is a casual photo and sits behind the headline only just.
- The case study template in this direction (hero, metadata, galleries,
  pull quotes, results).
