function openTab(tabName) {
    let i;
    let tabContent;
    
    tabContent = document.getElementsByClassName("tab-content");
    
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    document.getElementById(tabName).style.display = "flex";

}


let bakuLinkEl = document.getElementById("bakuLink");
let nyLinkEl = document.getElementById("nyLink");
let skLinkEl = document.getElementById("skLink");

bakuLinkEl.addEventListener("click", function(){openTab("Baku")}, false);
nyLinkEl.addEventListener("click", function(){openTab("NewYork")}, false);
skLinkEl.addEventListener("click", function(){openTab("Seoul")}, false);