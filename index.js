window.addEventListener("DOMContentLoaded", e => {
    // console.log(e);
    const body = document.querySelector("body");
    // What's the difference between these two methods:

    // const h1Again = document.querySelector("body > h1");
    // console.log(h1Again);

    const h2 = document.createElement("h2");
    // h2.textContent = "Some element!";
    // h2.innerHTML = `<span style="color:red; font-size: 25px">Hi there</span>`;
    h2.style.color = "red";
    h2.style.transition = "opacity 500ms ease-out";
    h2.textContent = "Some element";
    body.append(h2);
    console.log(h2.textContent);
    const t = setTimeout(() => {
        h2.style.opacity = 0;
        clearTimeout(t);
    }, 2000);
});
