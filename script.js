const tagsDiv = document.querySelector("#tags");
const txtarea = document.querySelector("#textarea");

txtarea.focus();

function creatTags(input) {
    const tags = input.split(",").filter(tag => tag.trim() != "").map(tag => tag.trim());
    
    tagsDiv.innerHTML = "";
    let htmlBuilder = "";
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        htmlBuilder += `
            <span class="tag">${tag}</span>
        `
    }
    tagsDiv.innerHTML = htmlBuilder;
}
function shufle() {
    const times = 30, duration = 70;

    const interval = setInterval(() => {
        const randTag = selectRandTag();
        highlightTag(randTag);

        setTimeout(() => {
            unhighlightTag(randTag);
        }, duration);
    }, duration);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randTag = selectRandTag();
            highlightTag(randTag);
        }, duration);
    }, times * duration);
}

txtarea.addEventListener("keyup", e => {
    creatTags(e.target.value);

    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = "";
        }, 30);
        shufle();
    }
});

function selectRandTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}
function highlightTag(tag) {
    tag.classList.add("highlight");
}
function unhighlightTag(tag) {
    tag.classList.remove("highlight");
}