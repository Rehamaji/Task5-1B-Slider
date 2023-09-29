let arrayOfImages = [];

let listOfImage = document.getElementsByClassName('img');
let listOfCycle = document.getElementsByClassName('cycle');
function nextPrev(np) {
    //Get Length of array
    let len = listOfImage.length;
    let activeIndex = getActiveIndex()
    let newIndex = -1;

    if (np === 'next') {
        newIndex = activeIndex + 1;
        if (newIndex > len - 1) newIndex = 0
    } else {
        newIndex = activeIndex - 1;
        if (newIndex < 0) newIndex = len - 1;
    }
    setActive(activeIndex,newIndex)
}

function getActiveIndex() {
    //Save index of active img
    for (let i = 0; i < listOfImage.length; i++) {
        if (listOfImage[i].className.includes("active")) {
            return i
        }
    }
}

function indicator(index) {
    setActive(getActiveIndex(), index)
}

function setActive(activeIndex, newIndex) {
    listOfImage[activeIndex].classList.remove('active');
    listOfImage[newIndex].classList.add('active');
    listOfCycle[activeIndex].classList.remove('light');
    listOfCycle[newIndex].classList.add('light');
}