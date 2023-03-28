
// 首頁
window.addEventListener("load", function () {
    var theTabs = document.querySelectorAll(".tab > a");

    function theTabClicks(tabClickEvent) {
      var clickedTab = tabClickEvent.currentTarget;
      var tabParent =
        tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
      var theTabs = tabParent.querySelectorAll(".tab > a");
      for (var i = 0; i < theTabs.length; i++) {
        theTabs[i].classList.remove("active");
      }
      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();
      var contentPanes = tabParent.querySelectorAll(".tab-pane");
      for (i = 0; i < contentPanes.length; i++) {
        contentPanes[i].classList.remove("active");
      }
      var anchorReference = tabClickEvent.target;
      var activePaneId = anchorReference.getAttribute("href");
      var activePane = tabParent.querySelector(activePaneId);
      activePane.classList.add("active");
    }
    for (i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theTabClicks);
    }
  });
  function toAnchorTab() {
const secRecommendation = document.querySelector(".recommendation");
const headerHeight = document.querySelector("header").offsetHeight;
window.scroll(0, secRecommendation.offsetTop - headerHeight);
var tab1 = document.getElementsByClassName("tab")[0].querySelectorAll("a")[0];
var tabp1 = document.getElementById("tab-5");
var tab2 = document.getElementsByClassName("tab")[0].querySelectorAll("a")[1];
var tabp2 = document.getElementById("tab-6");
tab1.classList.remove("active");
tabp1.classList.remove("active");
tabp2.classList.add("active");
tab2.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
const topics = document.querySelectorAll(".topic");
for (let i = 0; i < topics.length; i++) {
const topicLink = topics[i].querySelector("a");
topicLink.addEventListener("click", function () {
  var tab1 = document.getElementsByClassName("tab")[0].querySelectorAll("a")[0];
  var tabp1 = document.getElementById("tab-5");
  var tab2 = document.getElementsByClassName("tab")[0].querySelectorAll("a")[1];
  var tabp2 = document.getElementById("tab-6");
  tab2.classList.remove("active");
  tabp2.classList.remove("active");
  tabp1.classList.add("active");
  tab1.classList.add("active");
});
};
});