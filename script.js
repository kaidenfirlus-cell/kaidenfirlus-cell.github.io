document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;

      document.querySelectorAll(".accordion-body").forEach(other => {
        if (other !== body) {
          other.style.maxHeight = null;
          other.classList.remove("open");
        }
      });

      if (body.classList.contains("open")) {
        body.style.maxHeight = null;
        body.classList.remove("open");
      } else {
        body.style.maxHeight = body.scrollHeight + "px";
        body.classList.add("open");
      }
    });
  });

  document.querySelectorAll(".nested-toggle").forEach(toggle => {
    const panel = toggle.nextElementSibling;

    toggle.addEventListener("click", () => {
      document.querySelectorAll(".nested-panel").forEach(p => {
        if (p !== panel) {
          p.style.maxHeight = null;
        }
      });

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
