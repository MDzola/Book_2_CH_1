// part 1 of the practice (walk-through)

// // const sectionEl = document.querySelector(".article__section")


// const footerEl = document.querySelector(".article__footer")

// const smallTextEl = document.querySelector(".smallText")
// smallTextEl.classList.remove("smallText")
// smallTextEl.classList.add("largeText")

// const sectionEl = document.querySelectorAll(".article__section")



// this is part 2 of the practice (the real practice)

const sectionEl = document.querySelector(".article__header")
sectionEl.textContent = "Welcome to Drew's Blog"

const sectionAll = document.querySelectorAll(".article__header")
console.log("sectionAll", sectionAll);
sectionAll[0].classList.add("important");
sectionAll[1].classList.add("important");

const newEl = document.querySelector(".dashed");
newEl.classList.remove("dashed");

const gRod = document.querySelector(".article__footer");
gRod.classList.add("goldenrod");
