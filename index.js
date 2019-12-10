/*
The Worst JS script
That could've been written
This is the most simple way tho.

Author: Jyotirmoy Barman
Github: jewel998.github.io
Branch: Computer Science and Engineering
Institution: MNNIT
*/
var $gridStyle = "div#grid { font-size:3pt; position:fixed; left:-1px; top:-1px; background:transparent; padding:0;margin:0;opacity:0.5; } " +
         "div#grid table { font-size:0.8em; border-collapse: collapse; border-spacing:0; padding:0;margin:0; table-layout:fixed;filter:blur(2px); } " +
         "div#grid table td { border:1px solid #999999; margin:0; padding:0; -moz-box-sizing:border-box; box-sizing:border-box;transition:ease-in-out 0.3s all;}" ;
function createGrid()
{
   var gridForm = document.getElementById("gridForm");
   if (gridForm ==null) // Initialization
   {  var docbody = document.body;
      var griddiv = document.createElement("div");
      griddiv.id = 'grid';
      griddiv.innerHTML = "<table id='gridTable' ></table>";
      docbody.insertBefore(griddiv, docbody.firstChild);
     var gridst = document.createElement("style");
     gridst.id = 'gridstyle';
     gridst.innerHTML = $gridStyle;
     var gridExt = document.createElement("style");
     gridExt.id = 'gridExtra';
     document.head.appendChild(gridExt); 
     document.head.appendChild(gridst); 
   }
    var cellWidth = 40; 
    var cellHeight =  40;
    var griddiv = document.getElementById("grid");
    if ((cellWidth==0) && (cellHeight==0)) 
    { griddiv.style.display = "none"; return; }
    griddiv.style.display ="block"; 
    griddiv.style.width = window.innerWidth + "px";
    if (cellWidth== 0) cellWidth = window.innerWidth;
    if (cellHeight==0) cellHeight = window.innerHeight;
    var cols= Math.floor(window.innerWidth/cellWidth); 
    var rows= Math.floor(window.innerHeight/cellHeight);
    var lastcellWidth = window.innerWidth - cols*cellWidth; 
    var lastcellHeight = 0; 
    // alert(lastcellWidth); 
    if (cellWidth*cols < window.innerWidth) cols++; 
    if (cellHeight*rows < window.innerHeight)
    {  lastcellHeight = window.innerHeight - rows*cellHeight; 
       rows++; 
    }
    var tbody = document.getElementById("gridTable");
    tbody.innerHTML = "";
    for(var i=0; i < rows; i++)
    {  var row = document.createElement("tr");
      for(var j=0; j < cols; j++)
      {  var cell= document.createElement("td");
         if ((cols >1) && (j== cols-1)) cell.setAttribute("style","width:" + lastcellWidth + "px");
         //cell.innerHTML = "&nbsp;";
         row.appendChild(cell);
      }
      tbody.appendChild(row);
    }
    var lastRowStyle = "";
    if (lastcellHeight != 0) // decide the height of cells in lastRow
    { lastRowStyle = "#grid table tr:last-child td { height:"+ lastcellHeight + "px; }"; }
    document.getElementById("gridExtra").innerHTML= "#grid table td { width:" + cellWidth +"px; height:"+ cellHeight + "px; } " + lastRowStyle ;
}
function removeGrid(){
    var x = document.getElementById("grid");
    x.remove();
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function shine(){
    var colorGrades = ["#777","#555","#333","#111"];
    var grid = document.getElementById("grid");
    if(grid != undefined){
        var tabledata = grid.getElementsByTagName("td");
        var counts = [parseInt(tabledata.length/100),parseInt(tabledata.length/80),parseInt(tabledata.length/70),parseInt(tabledata.length/20)];
        for(i=0;i<tabledata.length;i++){
            tabledata[i].style.background = "transparent";
        }
        for(j=0;j<counts.length;j++){
            for(var i=0;i<counts[j];i++){
                var a = getRndInteger(0,tabledata.length);
                tabledata[a].style.background=colorGrades[j];
            }
        }
    }
}
var shineInterval = setInterval(shine,175);
function forMobiles(){
    if($(window).width() < 768){
        clearInterval(shineInterval);
    }
}
window.addEventListener("load", createGrid , false);
window.addEventListener("resize",removeGrid, false);
window.addEventListener("resize",createGrid, false);
window.addEventListener("resize",shine, false);
window.addEventListener("resize",forMobiles, false);
function clearButtonList(){
    var buttons = $("#main-buttons > div");
    var i;
    for(i=0;i<buttons.length;i++){
      buttons[i].classList.remove("button-active");
    }
  }
function menuOnResize(){
    var buttons = $("#main-buttons > div");
    var i;
    for(i=0;i<buttons.length;i++){
      if(buttons[i].classList.contains("button-active"))
      return true;
    }
    return false;
}
  $("#logo").on("click",function(){
      clearButtonList();
      $("#starting-info").removeClass("hide");
      $("#main-buttons").removeClass("active");
      $("#logo").css("width","30vw");
      $("#logo").css("height","30vw");
      $(".outer-spinner-1").css("width","23vw");
      $(".outer-spinner-1").css("height","23vw");
      $(".outer-spinner-2").css("width","21.2vw");
      $(".outer-spinner-2").css("height","21.2vw");
      $(".outer-spinner-3").css("width","18vw");
      $(".outer-spinner-3").css("height","18vw");
      $("#button-info").css("width","0");
  });
  $("#main-buttons a").on("click",function(){
    if($(this).parent().hasClass('button-active') && $(window).width() >= 768){
      $("#starting-info").removeClass("hide");
      $("#main-buttons").removeClass("active");
      $("#logo").css("width","30vw");
      $("#logo").css("height","30vw");
      $(".outer-spinner-1").css("width","23vw");
      $(".outer-spinner-1").css("height","23vw");
      $(".outer-spinner-2").css("width","21.2vw");
      $(".outer-spinner-2").css("height","21.2vw");
      $(".outer-spinner-3").css("width","18vw");
      $(".outer-spinner-3").css("height","18vw");
      $("#button-info").css("width","0");
      clearButtonList();
    }
    else if($(this).parent().hasClass('button-active')){
        $("#starting-info").removeClass("hide");
        $("#main-buttons").removeClass("active");
        $("#button-info").css("width","0");
        clearButtonList();
    }
    else if($(window).width() >= 768){
      $("#starting-info").addClass("hide");
      $("#main-buttons").addClass("active");
      $("#logo").css("width","25%");
      $("#logo").css("height","25vw");
      $(".outer-spinner-1").css("width","20vw");
      $(".outer-spinner-1").css("height","20vw");
      $(".outer-spinner-2").css("width","18vw");
      $(".outer-spinner-2").css("height","18vw");
      $(".outer-spinner-3").css("width","14vw");
      $(".outer-spinner-3").css("height","14vw");
      $("#button-info").css("width","30%");
      clearButtonList();
      $(this).parent().addClass("button-active");
    }
    else{
      clearButtonList();
      $("#main-buttons").addClass("active");
      $(this).parent().addClass("button-active");
    }
  });
  $(".question").on("click",function(){
      if($(this).hasClass("show")){
          $(this).removeClass("show");
      }
      else{
          $(this).addClass("show");
      }
  });
  window.addEventListener("resize",function(){
    if($(window).width() <= 768)
    $("#starting-info").removeClass("hide");
    else if(menuOnResize()){
        $("#starting-info").addClass("hide");
        $("#logo").css("width","25%");
        $("#logo").css("height","25vw");
        $("#button-info").css("width","30%");
    }
  }, false);
  var moveForce = 10; // max popup movement in pixels
  var rotateForce = 45; // max popup rotation in deg
  function resetPopup(){
    if($(window).width() < 991){
        $('.popup')
        .css('left', 0+'px')
        .css('top', 0+'px')
        .css('transform', 'rotateX('+0+'deg) rotateY('+0+'deg)');
    }
  }
  window.addEventListener("resize",resetPopup,false);
  $(document).mousemove(function(e) {
        if($(window).width() > 991){
            var docX = $(document).width();
            var docY = $(document).height();
            
            var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
            var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
            
            var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
            var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
            
            $('.popup')
                .css('left', moveX+'px')
                .css('top', moveY+'px')
                .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
        }
        else{ resetPopup(); }
  });
function daysToHack() {
    var launchDate = new Date('Feb 14 2020');
    var localDate = new Date();
    var utc = localDate.getTime() + (localDate.getTimezoneOffset() * 60000);
    var edtNow = new Date(utc + (3600000*(-4)));

    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var numberDays = Math.round((launchDate - edtNow) / millisecondsPerDay);

    return numberDays;
}
function updateDial(){
    var days = daysToHack();
    var MAX_DAYS=60;
    var timer = document.getElementById("timer");
    var r = timer.getAttribute('r');
    var c = Math.PI*(r*2);
    if(days<0){days=0;}
    if(days>MAX_DAYS){days=MAX_DAYS;}
    var dashOffset = ((MAX_DAYS-days)/MAX_DAYS)*c;
    timer.style.strokeDashoffset = dashOffset;
}
$(document).ready(function(){
    $("header").addClass("ready");
    $("footer").addClass("ready");
    updateDial();
});
//console.clear();
console.log("You're here in the developers section");
console.log("If you resize width to less than 768px, grid shining will stop.");
let banner = `                                             
.___  ___. .__   __. .__   __.  __  .___________.
|   \\/   | |  \\ |  | |  \\ |  | |  | |           |
|  \\  /  | |   \\|  | |   \\|  | |  | \`---|  |----\`
|  |\\/|  | |  . \`  | |  . \`  | |  |     |  |     
|  |  |  | |  |\\   | |  |\\   | |  |     |  |     
|__|  |__| |__| \\__| |__| \\__| |__|     |__|     
                                                 `;
console.log(banner);