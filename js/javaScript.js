
  
function boldtext(){
var getbold=document.getElementById("txt");
   
   if(getbold.style.fontWeight=="bold"){
       getbold.style.fontWeight="normal";
   }
    else{
        getbold.style.fontWeight="bold";
    }
}
function italictext(){
var getitalic=document.getElementById("txt");

    
   if(getitalic.style.fontStyle=="italic"){
       getitalic.style.fontStyle="normal";

   }
    else{
        getitalic.style.fontStyle="italic";

    }

}
function underlineText(){
    var getunderline = document.getElementById("txt");
    if( getunderline.style.textDecoration == "underline" ) {
        getunderline.style.textDecoration = "none";
    } else {
        getunderline.style.textDecoration = "underline";
    }
}
var dropSize = document.getElementById('dropSize');
dropSize.onchange = function changeSizeText() {
    var txt = document.getElementById("txt")
    txt.style.fontSize = this.value +"px";
};

var changeFont = function changeFont(font){
  console.log(font.value)
    document.getElementById("txt").style.fontFamily = font.value;
};
