const menuButton = document.querySelector("#menu-button");
const siteNav = document.querySelector("#site-nav");
const quoteForm = document.querySelector("#quote-form");
const formNote = document.querySelector("#form-note");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => siteNav.classList.remove("open"));
  });
}

if (quoteForm) {
  quoteForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const request = [
      "Solicitud para Psyche Lab",
      "",
      `Nombre: ${data.get("name") || ""}`,
      `Contacto: ${data.get("contact") || ""}`,
      `Servicio: ${data.get("service") || ""}`,
      `Formato preferido: ${data.get("format") || ""}`,
      `Urgencia: ${data.get("urgency") || ""}`,
      "",
      "Tema principal:",
      data.get("message") || "",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(request);
      formNote.textContent = "Solicitud copiada. Puedes pegarla en WhatsApp o correo.";
    } catch (error) {
      formNote.textContent = "Solicitud preparada. Copiala manualmente desde los campos antes de enviar.";
    }
  });
}
