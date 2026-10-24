const form = document.querySelector("#portal-form");
const title = document.querySelector("#treasure-title");

if (form) {
    const name = document.querySelector("#name");
    const spell = document.querySelector("#spell");
    const torch = document.querySelector("#wand-toggle");

    torch.onclick = () => {
        const on = spell.type === "password";
        spell.type = on ? "text" : "password";
        torch.querySelector("img").src = on ? "./torch-on.svg" : "./torch-off.svg";
        torch.setAttribute("aria-pressed", on);
        torch.setAttribute("aria-label", on ? "Вимкнути ліхтарик" : "Увімкнути ліхтарик");
    };

    form.onsubmit = (event) => {
        event.preventDefault();
        const user = name.value.trim().toLocaleLowerCase("uk");
        const code = spell.value.trim().toLocaleLowerCase("uk");

        if (user === "admin" && code === "1474") {
            location.href = "./treasure.html?admin=1";
        } else if (user === "гаррі поттер" && code === "lumos") {
            alert("Двері відчинено!");
            location.href = "./treasure.html";
        } else {
            alert("Невірне заклинання! Портал заблоковано");
        }
    };
}

if (title && new URLSearchParams(location.search).get("admin") === "1") {
    document.querySelector("#treasure-eyebrow").textContent = "Таємний доступ";
    title.textContent = "Ви справжній маг!";
    document.querySelector("#treasure-intro").textContent = "Магічний портал визнає твою силу.";
    document.title = title.textContent;
}
