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

const searchTrigger = document.getElementById("search-btn");
const searchClose = document.getElementById("search-close");
const searchField = document.getElementById("search-field");
const headerNavigation = document.getElementById("header-nav-list");

searchTrigger.addEventListener("click", () => {
    searchField.classList.add("active");
    headerNavigation.style.display = "none"
})

searchClose.addEventListener("click", () => {
    searchField.classList.remove("active");
    headerNavigation.style.display = "flex"
})

const headerMessegesDropdownTriggerContaitner = document.querySelector(".header__action.message");
const headerMessegesDropdownTrigger = document.getElementById("header-message-trigger");
const headerMessegesDropdownContent = document.querySelector(".header__action-messages");

headerMessegesDropdownTrigger.addEventListener("click", () => {
    headerMessegesDropdownTrigger.querySelector("img").classList.toggle("active")
    headerMessegesDropdownTriggerContaitner.classList.toggle("open")
    headerMessegesDropdownContent.classList.toggle("active");
})

const mobileSearchTrigger = document.getElementById("mobile-search-trigger");
const mobileSearchContent = document.getElementById("mobile-search-content");
const mobileSearchClose = document.getElementById("mobile-search-close");
const cartBtn = document.getElementById("header-cart-open");

mobileSearchTrigger.addEventListener("click", () => {
    mobileSearchContent.classList.add("active");
    mobileSearchClose.classList.add("active");
    cartBtn.classList.add("hidden");
});

mobileSearchClose.addEventListener("click", () => {
    mobileSearchContent.classList.remove("active");
    mobileSearchClose.classList.remove("active");
    cartBtn.classList.remove("hidden");
});

window.addEventListener('scroll', function () {
    const el = document.getElementById('scroll-menu');

    if (window.scrollY > 100) {
        el.classList.add('visible');
    } else {
        el.classList.remove('visible');
    }
});

const scrollMenusolutionsContextMenuToggle = document.getElementById("scroll-menu-solutions-context-menu-toggle");
const scrollMenusolutionsContextMenuContent = document.getElementById("scroll-menu-solutions-context-menu-content");
const scrollMenuliElements = scrollMenusolutionsContextMenuToggle && scrollMenusolutionsContextMenuToggle.parentElement ? scrollMenusolutionsContextMenuToggle.parentElement.querySelectorAll("li") : [];

if (scrollMenusolutionsContextMenuToggle && scrollMenusolutionsContextMenuContent && scrollMenuliElements) {
    scrollMenusolutionsContextMenuToggle.addEventListener("mouseover", () => {
        scrollMenusolutionsContextMenuToggle.classList.add("active");
        scrollMenusolutionsContextMenuContent.classList.add("active");
        scrollMenuliElements.forEach(li => li.classList.add("solutions-gray"));
    });

    scrollMenusolutionsContextMenuToggle.addEventListener("mouseout", () => {
        scrollMenusolutionsContextMenuToggle.classList.remove("active");
        scrollMenusolutionsContextMenuContent.classList.remove("active");
        scrollMenuliElements.forEach(li => li.classList.remove("solutions-gray"));
    });

    scrollMenusolutionsContextMenuContent.addEventListener("mouseover", () => {
        scrollMenusolutionsContextMenuToggle.classList.add("active");
        scrollMenusolutionsContextMenuContent.classList.add("active");
        scrollMenuliElements.forEach(li => li.classList.add("solutions-gray"));
    });

    scrollMenusolutionsContextMenuContent.addEventListener("mouseout", () => {
        scrollMenusolutionsContextMenuToggle.classList.remove("active");
        scrollMenusolutionsContextMenuContent.classList.remove("active");
        scrollMenuliElements.forEach(li => li.classList.remove("solutions-gray"));
    });
}

const scrollMenumoreContextMenuToggle = document.getElementById("scroll-menu-more-context-menu-toggle");
const scrollMenumoreContextMenuContent = document.getElementById("scroll-menu-more-context-menu-content");

if (scrollMenumoreContextMenuToggle && scrollMenumoreContextMenuContent && scrollMenuliElements) {
    scrollMenumoreContextMenuToggle.addEventListener("mouseover", () => {
        scrollMenumoreContextMenuToggle.classList.add("active");
        scrollMenumoreContextMenuContent.classList.add("active");
        scrollMenuliElements.forEach(li => li.classList.add("more-gray"));
    });

    scrollMenumoreContextMenuToggle.addEventListener("mouseout", () => {
        scrollMenumoreContextMenuToggle.classList.remove("active");
        scrollMenumoreContextMenuContent.classList.remove("active");
        scrollMenuliElements.forEach(li => li.classList.remove("more-gray"));
    });

    scrollMenumoreContextMenuContent.addEventListener("mouseover", () => {
        scrollMenumoreContextMenuToggle.classList.add("active");
        scrollMenumoreContextMenuContent.classList.add("active");
        scrollMenuliElements.forEach(li => li.classList.add("more-gray"));
    });

    scrollMenumoreContextMenuContent.addEventListener("mouseout", () => {
        scrollMenumoreContextMenuToggle.classList.remove("active");
        scrollMenumoreContextMenuContent.classList.remove("active");
        scrollMenuliElements.forEach(li => li.classList.remove("more-gray"));
    });
}

const scrollMenuSearchOpen = document.getElementById("scroll-menu-search-open");
const scrollMenuSearchField = document.getElementById("scroll-menu-search-field");
const scrollMenuSearchClose = document.getElementById("scroll-menu-search-close");
const scrollMenuNav = document.querySelector(".scroll-menu__nav");

scrollMenuSearchOpen.addEventListener("click", () => {
    scrollMenuSearchField.classList.add("active")
    scrollMenuNav.classList.add("hidden")
})

scrollMenuSearchClose.addEventListener("click", () => {
    scrollMenuSearchField.classList.remove("active")
    scrollMenuNav.classList.remove("hidden")
})