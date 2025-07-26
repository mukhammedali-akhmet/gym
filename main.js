const solutionsContextMenuToggle = document.getElementById("solutions-context-menu-toggle");
const solutionsContextMenuContent = document.getElementById("solutions-context-menu-content");
const liElements = solutionsContextMenuToggle.parentElement.querySelectorAll("li");

solutionsContextMenuToggle.addEventListener("mouseover", () => {
    solutionsContextMenuToggle.classList.add("active");
    solutionsContextMenuContent.classList.add("active");
    liElements.forEach(li => li.classList.add("solutions-gray"));
})

solutionsContextMenuToggle.addEventListener("mouseout", () => {
    solutionsContextMenuToggle.classList.remove("active");
    solutionsContextMenuContent.classList.remove("active");
    liElements.forEach(li => li.classList.remove("solutions-gray"));
})

solutionsContextMenuContent.addEventListener("mouseover", () => {
    solutionsContextMenuToggle.classList.add("active");
    solutionsContextMenuContent.classList.add("active");
    liElements.forEach(li => li.classList.add("solutions-gray"));
})

solutionsContextMenuContent.addEventListener("mouseout", () => {
    solutionsContextMenuToggle.classList.remove("active");
    solutionsContextMenuContent.classList.remove("active");
    liElements.forEach(li => li.classList.remove("solutions-gray"));
})

const moreContextMenuToggle = document.getElementById("more-context-menu-toggle");
const moreContextMenuContent = document.getElementById("more-context-menu-content");

moreContextMenuToggle.addEventListener("mouseover", () => {
    moreContextMenuToggle.classList.add("active");
    moreContextMenuContent.classList.add("active");
    liElements.forEach(li => li.classList.add("more-gray"));
})

moreContextMenuToggle.addEventListener("mouseout", () => {
    moreContextMenuToggle.classList.remove("active");
    moreContextMenuContent.classList.remove("active");
    liElements.forEach(li => li.classList.remove("more-gray"));
})


moreContextMenuContent.addEventListener("mouseover", () => {
    moreContextMenuToggle.classList.add("active");
    moreContextMenuContent.classList.add("active");
    liElements.forEach(li => li.classList.add("more-gray"));
})

moreContextMenuContent.addEventListener("mouseout", () => {
    moreContextMenuToggle.classList.remove("active");
    moreContextMenuContent.classList.remove("active");
    liElements.forEach(li => li.classList.remove("more-gray"));
})

const burgerToggle = document.getElementById("burger-toggle");
const burgerContent = document.getElementById("burger-content");

burgerToggle.addEventListener("click", () => {
    burgerToggle.classList.toggle("active");
    burgerContent.classList.toggle("active");
})