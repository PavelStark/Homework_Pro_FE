const slider = document.querySelector(".slider");
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const indicatorParents = document.querySelector(".controls ul");
var sectionIndex = 0;

function setIndex() {
  document.querySelector(".controls .selected").classList.remove("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
}

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.onclick = () => {
    sectionIndex = ind;
    setIndex();
    indicator.classList.add("selected");
  };
});

leftArrow.onclick = () => {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 3;
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");
};

rightArrow.onclick = () => {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 0;
  setIndex();
  indicatorParents.children[sectionIndex].classList.add("selected");
};

//-----------------------------------------------------------------------slider2

const slider2 = document.querySelector(".slider2");
const leftArrow2 = document.getElementById('left2');
const rightArrow2 = document.getElementById('right2');
const indicatorParents2 = document.querySelector(".controls2 ul");
var sectionIndex2 = 0;

function setIndex2() {
  document.querySelector(".controls2 .selected").classList.remove("selected");
  slider2.style.transform = "translate(" + sectionIndex2 * -99.28 + "%)";
}

document.querySelectorAll(".controls2 li").forEach(function (indicator2, ind2) {
  indicator2.onclick = () => {
    sectionIndex2 = ind2;
    setIndex2();
    indicator2.classList.add("selected");
  };
});

leftArrow2.onclick = () => {
  sectionIndex2 = sectionIndex2 > 0 ? sectionIndex2 - 1 : 3;
  setIndex2();
  indicatorParents2.children[sectionIndex2].classList.add("selected");
};

rightArrow2.onclick = () => {
  sectionIndex2 = sectionIndex2 < 3 ? sectionIndex2 + 1 : 0;
  setIndex2();
  indicatorParents2.children[sectionIndex2].classList.add("selected");
};

//-----------------------------------------------------------------------slider3

const slider3 = document.querySelector(".slider3");
const leftArrow3 = document.getElementById('left3');
const rightArrow3 = document.getElementById('right3');
const indicatorParents3 = document.querySelector(".controls3 ul");
var sectionIndex3 = 0;

function setIndex3() {
  document.querySelector(".controls3 .selected").classList.remove("selected");
  slider3.style.transform = "translate(" + sectionIndex3 * -99.28 + "%)";
}

document.querySelectorAll(".controls3 li").forEach(function (indicator3, ind3) {
  indicator3.onclick = () => {
    sectionIndex3 = ind3;
    setIndex3();
    indicator3.classList.add("selected");
  };
});

leftArrow3.onclick = () => {
  sectionIndex3 = sectionIndex3 > 0 ? sectionIndex3 - 1 : 3;
  setIndex3();
  indicatorParents3.children[sectionIndex3].classList.add("selected");
};

rightArrow3.onclick = () => {
  sectionIndex3 = sectionIndex3 < 3 ? sectionIndex3 + 1 : 0;
  setIndex3();
  indicatorParents3.children[sectionIndex3].classList.add("selected");
};



