const $ = document;
const containerEl = $.querySelector(".container");
const imgEl = $.querySelector(".container img");
let imgClientX, imgClientY, imgOffsetLeft, imgOffsetTop;
imgEl.addEventListener("mousemove", (e) => {
    console.log(imgOffsetLeft,imgOffsetTop,imgClientX,imgClientY);
    imgOffsetLeft = e.target.offsetLeft;
    imgOffsetTop = e.target.offsetTop;
    imgClientX = e.clientX - imgOffsetLeft;
    imgClientY =  e.clientY - imgOffsetTop;
    imgEl.style.transformOrigin = `${imgClientX}px ${imgClientY}px`
    imgEl.style.transform  =  `scale(2)`
});
imgEl.addEventListener("mouseleave", (e) => {
    imgEl.style.transformOrigin = `center center`
    imgEl.style.transform  =  `scale(1)`
});
