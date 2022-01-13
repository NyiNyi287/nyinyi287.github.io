const s1Tag = document.getElementsByClassName("s1")[0];
const s2Tag = document.getElementsByClassName("s2")[0];
const s3Tag = document.getElementsByClassName("s3")[0];
const s4Tag = document.getElementsByClassName("s4")[0];
const s5Tag = document.getElementsByClassName("s5")[0];

s1Tag.addEventListener("click", () => {
    s1Tag.classList.remove("rating-star-less");
    s1Tag.classList.add("rating-star", "filled");

    s2Tag.classList.remove("rating-star", "filled");
    s2Tag.classList.add("rating-star-less");
    s3Tag.classList.remove("rating-star", "filled");
    s3Tag.classList.add("rating-star-less");
    s4Tag.classList.remove("rating-star", "filled");
    s4Tag.classList.add("rating-star-less");
    s5Tag.classList.remove("rating-star", "filled");
    s5Tag.classList.add("rating-star-less");
});
s2Tag.addEventListener("click", () => {
    s1Tag.classList.remove("rating-star-less");
    s1Tag.classList.add("rating-star", "filled");
    s2Tag.classList.remove("rating-star-less");
    s2Tag.classList.add("rating-star", "filled");

    s3Tag.classList.remove("rating-star", "filled");
    s3Tag.classList.add("rating-star-less");
    s4Tag.classList.remove("rating-star", "filled");
    s4Tag.classList.add("rating-star-less");
    s5Tag.classList.remove("rating-star", "filled");
    s5Tag.classList.add("rating-star-less");
});

s3Tag.addEventListener("click", () => {
    s1Tag.classList.remove("rating-star-less");
    s1Tag.classList.add("rating-star", "filled");
    s2Tag.classList.remove("rating-star-less");
    s2Tag.classList.add("rating-star", "filled");
    s3Tag.classList.remove("rating-star-less");
    s3Tag.classList.add("rating-star", "filled");

    s4Tag.classList.remove("rating-star", "filled");
    s4Tag.classList.add("rating-star-less");
    s5Tag.classList.remove("rating-star", "filled");
    s5Tag.classList.add("rating-star-less");
});
s4Tag.addEventListener("click", () => {
    s1Tag.classList.remove("rating-star-less");
    s1Tag.classList.add("rating-star", "filled");
    s2Tag.classList.remove("rating-star-less");
    s2Tag.classList.add("rating-star", "filled");
    s3Tag.classList.remove("rating-star-less");
    s3Tag.classList.add("rating-star", "filled");
    s4Tag.classList.remove("rating-star-less");
    s4Tag.classList.add("rating-star", "filled");

    s5Tag.classList.remove("rating-star", "filled");
    s5Tag.classList.add("rating-star-less");
});
s5Tag.addEventListener("click", () => {
    s1Tag.classList.remove("rating-star-less");
    s1Tag.classList.add("rating-star", "filled");
    s2Tag.classList.remove("rating-star-less");
    s2Tag.classList.add("rating-star", "filled");
    s3Tag.classList.remove("rating-star-less");
    s3Tag.classList.add("rating-star", "filled");
    s4Tag.classList.remove("rating-star-less");
    s4Tag.classList.add("rating-star", "filled");
    s5Tag.classList.remove("rating-star-less");
    s5Tag.classList.add("rating-star", "filled");

});