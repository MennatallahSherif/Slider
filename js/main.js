var imgs= Array.from(document.querySelectorAll(".item img"))
var boxContainer=document.getElementById("boxContainer")
var innerBox=document.getElementById("innerBox")
var closeIcon=document.getElementById("close")
var nextIcon=document.getElementById("next")
var prevIcon=document.getElementById("prev")


currentIndex=0;


// imgs
for (var i = 0; i < imgs.length; i++) {

    imgs[i].addEventListener("click",function(e){
        currentIndex= imgs.indexOf(e.target)
        boxContainer.style.display="flex";
        var imgSrc=e.target.getAttribute("src")
        innerBox.style.backgroundImage= "url("+imgSrc+")"

    })
  
    
}


// close
closeIcon.addEventListener("click",close)
function close(){
    boxContainer.style.display= "none"
}


// next
nextIcon.addEventListener("click",next)
function next(e){
    currentIndex++
    if(currentIndex==imgs.length)
    {
        currentIndex=0;
    }
    var imgSrc=imgs[currentIndex].getAttribute("src")
    innerBox.style.backgroundImage= "url("+imgSrc+")"
}


// prev
prevIcon.addEventListener("click",prev)
function prev(e){
    currentIndex--
    if(currentIndex<0)
    {
        currentIndex= imgs.length -1
    }
    var imgSrc=imgs[currentIndex].getAttribute("src")
    innerBox.style.backgroundImage= "url("+imgSrc+")"
}


// keyUp
document.addEventListener("keyup",function(e){
    if (e.code == "ArrowRight"){
        next()
    }
    else if  (e.code == "ArrowLeft"){
        prev()
    }
    else if  (e.code == "Escape"){
        close()
    }
})