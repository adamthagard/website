function projectUrl(slug) {
  return `projects/${slug}.html`;
}

function renderProjectIndex() {
  const grid = document.querySelector("#project-grid");
  if (!grid) return;

  grid.innerHTML = projects.map((project) => {
    const href = project.externalUrl || projectUrl(project.slug);
    const linkAttrs = project.externalUrl ? ` target="_blank" rel="noopener"` : "";

    return `
    <a class="project-card" href="${href}"${linkAttrs}>
      <span class="project-thumb">
        <img class="project-thumb-default" src="${project.indexCover}" alt="${project.title} project preview" loading="lazy">
        <img class="project-thumb-hover" src="${project.hoverCover}" alt="" aria-hidden="true" loading="lazy">
      </span>
      <span class="project-card-body">
        <span class="project-card-meta">${project.year}</span>
        <span class="project-card-title">${project.title}</span>
        <span class="project-card-summary">${project.summary}</span>
      </span>
    </a>
  `;
  }).join("");
}

function renderProjectDetail() {
  const detail = document.querySelector("#project-detail");
  if (!detail) return;

  const slug = window.projectSlug || new URLSearchParams(window.location.search).get("slug") || projects[0].slug;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    detail.innerHTML = `
      <section class="not-found">
        <p class="eyebrow">Project not found</p>
        <h1>That project is not available.</h1>
        <a class="text-link" href="../index.html#projects">Return to projects</a>
      </section>
    `;
    return;
  }

  document.title = `${project.title} - Adam Thagard`;

  function renderSectionContent(section) {
    const content = section.content || [{ type: "paragraph", text: section.body || "" }];

    return content.map((block) => {
      if (block.type === "list") {
        const items = block.items.map((item) => `<li>${item}</li>`).join("");
        return `<ul>${items}</ul>`;
      }

      return `<p>${block.text}</p>`;
    }).join("");
  }

  function renderImageMedia(media, className = "") {
    const mediaClass = className ? ` ${className}` : "";

    if (media.style === "iphone") {
      return `
        <figure class="image-media image-media-iphone${mediaClass}">
          <div class="iphone-frame">
            <span class="iphone-speaker" aria-hidden="true"></span>
            <img src="${media.src}" alt="${media.alt || project.title}">
          </div>
        </figure>
      `;
    }

    return `
      <figure class="image-media${mediaClass}">
        <img src="${media.src}" alt="${media.alt || project.title}">
      </figure>
    `;
  }

  function renderVideoMedia(src) {
    const isLocalVideo = /\.(mov|mp4|webm|ogg)(\?.*)?$/i.test(src);
    const youtubeMatch = src.match(/youtube(?:-nocookie)?\.com\/embed\/([^?&/]+)/i);

    if (isLocalVideo) {
      return `
        <div class="embedded-frame">
          <video controls playsinline preload="metadata">
            <source src="${src}">
            Your browser does not support embedded video.
          </video>
        </div>
      `;
    }

    if (youtubeMatch && window.location.protocol === "file:") {
      const videoId = youtubeMatch[1];
      return `
        <a class="youtube-fallback" href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener">
          <img src="https://img.youtube.com/vi/${videoId}/maxresdefault.jpg" alt="${project.title} video preview">
          <span class="youtube-play" aria-hidden="true"></span>
          <span class="youtube-label">Watch on YouTube</span>
        </a>
      `;
    }

    return `
      <div class="embedded-frame">
        <iframe title="${project.title} embedded motion study" src="${src}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    `;
  }

  const appStoreLink = project.appStoreUrl ? `
    <a class="app-store-button" href="${project.appStoreUrl}" target="_blank" rel="noopener">
      <span class="app-store-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M16.8 12.9c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-2-.9-3.2-.8-1.7 0-3.2 1-4.1 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.4-.8s2 .8 3.4.8 2.3-1.3 3.1-2.5c1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.3ZM14.5 5.7c.7-.9 1.2-2 1.1-3.2-1.1.1-2.3.7-3.1 1.6-.7.8-1.3 2-1.1 3.1 1.1.1 2.3-.6 3.1-1.5Z"/>
        </svg>
      </span>
      <span>
        <span class="app-store-kicker">Download on the</span>
        <span class="app-store-label">App Store</span>
      </span>
    </a>
  ` : "";
  const inlineImages = (project.inlineImages || []).map((image, index) => {
    const media = typeof image === "string" ? {
      type: "image",
      src: image,
      alt: `${project.title} supporting visual ${index + 1}`
    } : image;

    return renderImageMedia(media, "inline-media");
  }).join("");
  const inlineGallery = inlineImages ? `
    <div class="inline-gallery">
      ${inlineImages}
    </div>
  ` : "";
  const embeddedVideo = project.video ? renderVideoMedia(project.video) : "";
  const mediaBlock = inlineGallery || embeddedVideo ? `
    <div class="section-media">
      ${inlineGallery}
      ${embeddedVideo}
    </div>
  ` : "";
  const heroSource = project.heroMedia || (project.hero ? {
    type: "image",
    src: project.hero,
    alt: `${project.title} hero image`
  } : null);
  const heroMedia = heroSource
    ? heroSource.type === "video"
      ? `<div class="hero-video">${renderVideoMedia(heroSource.src)}</div>`
      : renderImageMedia(heroSource, "hero-media")
    : "";
  const sections = project.sections.map((section, index) => `
    <section class="case-section">
      <div>
        <p class="section-number">${String(index + 1).padStart(2, "0")}</p>
        <h2>${section.heading}</h2>
      </div>
      <div class="case-section-body">
        ${renderSectionContent(section)}
        ${section.heading === "What I Built" ? mediaBlock : ""}
      </div>
    </section>
  `).join("");

  detail.innerHTML = `
    <article class="case-study">
      <section class="case-hero">
        <div class="case-title-row">
          <h1>${project.title}</h1>
          <span>${project.year}</span>
        </div>
        <div class="case-description">
          <p>${project.summary}</p>
          ${appStoreLink}
        </div>
      </section>

      ${heroMedia}

      <div class="case-content">
        ${sections}
      </div>
    </article>
  `;
}

renderProjectIndex();
renderProjectDetail();
