// grab items
const lightBoxContainer = document.querySelector('.lightbox-container');
const lightBoxEnable = document.querySelectorAll('.lightbox-enable');
const lightboxArray = Array.from(lightBoxEnable);
const lightboxImg = document.querySelector('.lightbox-img')
const closeBtn = document.querySelector('#closebtn');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

// variables
let currentImgIdx;
let currentImage;
let prevParent;
let currentArray;
let lastImg;


// function
const showLightbox = ()=>{
    lightBoxContainer.classList.add('active')
}
const hideLightbox = ()=>{
    lightBoxContainer.classList.remove('active')
}

const insertImg = (image)=>{
    lightboxImg.src = image.dataset.imagesrc

    currentParent = image.parentNode;
    prevParent = image.previousElementSibling.parentNode;
    currentArray = Array.from(image.parentNode.childNodes);
    lastImg = currentArray.length - 2;
    currentImgIdx = currentArray.indexOf(image);

    switch (currentImgIdx){
        case 3:
            leftBtn.classList.add('inactive')
        break;
        case lastImg:
            rightBtn.classList.add('inactive')
        break;
        default:
            leftBtn.classList.remove('inactive')
            rightBtn.classList.remove('inactive')
    }
}
const slideLeft = ()=>{
    if(currentImgIdx === 3){
        insertImg(currentArray[currentImgIdx]);
    }else{
        insertImg(currentArray[currentImgIdx].previousElementSibling)
    }
}

const slideRight = ()=>{
    if(currentImgIdx === lastImg){
        insertImg(currentArray[lastImg])
    }else{
        insertImg(currentArray[currentImgIdx].nextElementSibling)
    }
}

// event listener
lightBoxEnable.forEach((image)=>{
    image.addEventListener('click', (e)=>{
        showLightbox()
        insertImg(image)
    })
})
closeBtn.addEventListener('click', ()=>{
    hideLightbox()
})
leftBtn.addEventListener('click', ()=>{    
    slideLeft()
})
rightBtn.addEventListener('click', ()=>{    
    slideRight()
})

// keydown event
window.addEventListener('keydown', (e, idx)=>{
    console.log(e.keyCode);
    if(!lightBoxContainer.classList.contains('active')) return;

    if(e.keyCode === 37){
        slideLeft()
    }else if(e.keyCode === 39){
        slideRight()
    }else if(e.keyCode === 27){
        hideLightbox()
    }
})





