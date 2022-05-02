import debounce from "lodash.debounce";
import "./styles.css";

const initScrollTopBtn = () => {
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

const initArticleProgressBar = () => {
  const articleTag = document.getElementById("page-article");
  const articleDOMRect = articleTag.getBoundingClientRect();
  const articleProgressBar = document.querySelector(".article-progress");

  if (articleTag && articleProgressBar) {
    document.addEventListener("scroll", () => {
      const articleProgress =
        Math.ceil(
          ((window.scrollY + articleDOMRect.top) * 100) / articleDOMRect.height
        ) + 1;

      console.log("####", `${articleProgress}%`);
      articleProgressBar.classList.width = `${articleProgress}%`;
    });
  }
};

const init = () => {
  initScrollTopBtn();
  initArticleProgressBar();
};

if (document.readyState === "complete") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
