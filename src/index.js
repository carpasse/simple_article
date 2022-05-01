import debounce from "lodash.debounce";
import "./styles.css";

const init = () => {
  const scrollTopBtn = document.querySelector(".scroll-top-btn");

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    });

    document.addEventListener(
      "scroll",
      debounce(() => {
        if (window.scrollY > window.innerHeight) {
          scrollTopBtn.classList.add("active");
        } else if (scrollTopBtn.classList.contains("active")) {
          scrollTopBtn.classList.remove("active");
        }
      }, 150)
    );
  }
};

if (document.readyState === "complete") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
