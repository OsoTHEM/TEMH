var i= 0;
var images= [];
var time = 3000;

//images
images[0]="pia.jpg";
images[1]="pia3.png";
images[2]="pia5.jpg";

function changeImg(){
  document.pia.src= images[i];
  if(i < images.length - 1){
    i++;
  }
    else{
    i = 0;
  }

  setTimeout("changeImg()" , time);
}


window.onload = changeImg;
