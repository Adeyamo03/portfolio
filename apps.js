const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const copyBtn = document.getElementById("copyBtn");
const hint = document.getElementById("hint");

copyBtn.addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim() || "Your Name";
  const message = document.getElementById("message").value.trim() || "Your message here";

  const template = `Name: ${name}\nMessage: ${message}\n\n(Email me at: YOUR_EMAIL)`;

  try {
    await navigator.clipboard.writeText(template);
    hint.textContent = "Copied! Paste it into an email.";
  } catch {
    hint.textContent = "Couldn’t copy automatically—select and copy manually.";
  }
});