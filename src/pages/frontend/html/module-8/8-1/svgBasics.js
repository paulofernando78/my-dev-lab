export const svgBasics = {
  subSectionId: "svg-vs-raster",
  subSectionLabel: "SVG vs raster images",
  description: /* html */ `
            <p><strong>SVG</strong> images are vector-based. They are built from shapes, lines, and paths, so they can scale up or down without losing quality.</p>
            <p><strong>Raster</strong> images are made of pixels. They look good at their intended size, but if you enlarge them too much, they can become blurry or blocky.</p>
            <p>Common raster formats include <code>JPG</code>, <code>PNG</code>, <code>GIF</code>, and pixel-based <code>WebP</code> images.</p>
          `,
  notes: /* html */ `
            <p>Use SVG for icons, logos, and simple illustrations. Use raster images for photos and detailed pixel-based artwork.</p>
          `,
  imgs: [
    {
      imgSrc: "/assets/images/html/svg-raster.png",
      alt: "SVG vs. Raster",
    },
  ],
  cardCodes: [
    {
      cardLabel: "Comparison",
      language: "html",
      code: /* html */ `
<!-- SVG: scales cleanly -->
<img src="logo.svg" alt="Logo">

<!-- Raster: can lose quality when enlarged -->
<img src="photo.png" alt="Photo">
              `,
    },
  ],
};
