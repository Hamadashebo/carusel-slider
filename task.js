let indexvalue=1;
showImg(indexvalue);
function leftside(n){showImg(indexvalue +=n)};
function rightside(n){showImg(indexvalue -=n)};

function showImg(n){
    
    const img=document.querySelectorAll('img')
    if(n >img.length)
        {
            indexvalue=1
        }
    if(n <1)
        {
            indexvalue=img.length
        }
    for( var i=0; i<img.length; i++){
        img[i].style.display="none";
    }
    img[indexvalue-1].style.display="block";
}
 function scrollimg(){
   document.querySelector("#img1").scrollWidth=true; 
 }

setTimeout(scrollimg(),1000)