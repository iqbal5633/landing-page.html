/* LOADER */
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none"
  }, 800)
}

/* NAV AUTO HIDE */
let last = 0
const nav = document.getElementById("nav")

window.addEventListener("scroll", () => {
  let y = window.scrollY
  nav.classList.toggle("hide", y > last && y > 80)
  last = y
})

/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    }
  })
})

document.querySelectorAll(".card").forEach(el => observer.observe(el))
