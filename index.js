document.addEventListener('DOMContentLoaded', () => {
  const PASSWORD = "Adelaide1";

  const isIndex =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "";

  if (!isIndex) return;

  const body = document.body;
  const original = body.innerHTML;

  body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      flex-direction:column;
      align-items:center;
      height:100vh;
      font-family:sans-serif;
    ">
      <h2>Please enter password</h2>
      <input id="passField" type="password" style="padding:10px;font-size:1.2rem;">
      <button id="passBtn" style="margin-top:10px;padding:10px 20px;font-size:1rem;">Enter</button>
      <p id="wrong" style="color:red;display:none;margin-top:6px;">Incorrect</p>
    </div>
  `;

  const field = document.getElementById("passField");
  const btn = document.getElementById("passBtn");
  const wrong = document.getElementById("wrong");

  function unlock() {
    if (field.value === PASSWORD) {
      body.innerHTML = original;
      // page is unlocked — script.js handles dropdowns
    } else {
      wrong.style.display = "block";
    }
  }

  btn.onclick = unlock;
  field.addEventListener("keydown", (e) => {
    if (e.key === "Enter") unlock();
  });
});
