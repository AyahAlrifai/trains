var count=0;
var state={"c1":0,"c2":0,"c3":0,"c4":0,"c5":0,"c6":0,"c7":0,"c8":0,"c9":0};
function back()
{
  location.assign("https://github.com/AyahAlrifai/trains/blob/master/index.html")
}
function new_game()
{
document.body.innerHTML=
'    <img src="https://github.com/AyahAlrifai/trains/blob/master/arrow.png" alt="back" onclick="back()" width="100px" height="70px">'+
'<div id="win"></div>'+
'<div class="h" style="top:50px"></div>'+
'<div class="h" style="top:350px"></div>'+
'<div class="h" style="top:650px"></div>'+
'<div class="v" style="left:290px"></div>'+
'<div class="v" style="left:590px"></div>'+
'<div class="v" style="left:890px"></div>'+
'<div class="circle" style="left:265px;top:25px;"  id="c1"></div>'+
'<div class="circle" style="left:265px;top:325px;" id="c4"></div>'+
'<div class="circle" style="left:265px;top:625px;" id="c7"></div>'+
'<div class="circle" style="left:567px;top:25px;;" id="c2"></div>'+
'<div class="circle" style="left:567px;top:325px;" id="c5"></div>'+
'<div class="circle" style="left:567px;top:625px;" id="c8"></div>'+
'<div class="circle" style="left:867px;top:25px;"  id="c3"></div>'+
'<div class="circle" style="left:867px;top:325px;" id="c6"></div>'+
'<div class="circle" style="left:867px;top:625px;" id="c9"></div>'+
'<p draggable="true" class="stone1" style="left:120px;top:325px;"  id="1"></p>'+
'<p draggable="true" class="stone1" style="left:120px;top:325px;"  id="2"></p>'+
'<p draggable="true" class="stone1" style="left:120px;top:325px;"  id="3"></p>'+
'<p draggable="true" class="stone2" style="left:1035px;top:325px;" id="4"></p>'+
'<p draggable="true" class="stone2" style="left:1035px;top:325px;" id="5"></p>'+
'<p draggable="true" class="stone2" style="left:1035px;top:325px;" id="6"></p>';
state={"c1":0,"c2":0,"c3":0,"c4":0,"c5":0,"c6":0,"c7":0,"c8":0,"c9":0};
count=0;

}
function check_win()
{
  if(state["c1"]==state["c2"] && state["c1"]==state["c3"] && state["c1"]!=0)
  {
    return state["c1"];
  }
  else if(state["c4"]==state["c5"] && state["c4"]==state["c6"] && state["c4"]!=0)
  {
    return state["c4"];
  }
  else if(state["c7"]==state["c8"] && state["c7"]==state["c9"] && state["c7"]!=0)
  {
    return state["c7"];
  }
  else if(state["c1"]==state["c4"] && state["c1"]==state["c7"] && state["c1"]!=0)
  {
    return state["c1"];
  }
  else if(state["c2"]==state["c5"] && state["c2"]==state["c8"] && state["c2"]!=0)
  {
    return state["c2"];
  }
  else if(state["c3"]==state["c6"] && state["c3"]==state["c9"] && state["c3"]!=0)
  {
    return state["c3"];
  }
  else if(state["c1"]==state["c5"] && state["c1"]==state["c9"] && state["c1"]!=0)
  {
    return state["c1"];
  }
  else if(state["c3"]==state["c5"] && state["c3"]==state["c7"] && state["c3"]!=0)
  {
    return state["c3"];
  }
     return 0;

}

function valid(idTran,idTarget)
{
if (idTran=="c1" && (idTarget=="c2" || idTarget=="c4" ) )
return true;
else if (idTran=="c2" && (idTarget=="c1" || idTarget=="c3" || idTarget=="c5") )
return true;
else if (idTran=="c3" && (idTarget=="c2" || idTarget=="c6") )
return true;
else if (idTran=="c4" && (idTarget=="c1" || idTarget=="c5" || idTarget=="c7") )
return true;
else if (idTran=="c5" && (idTarget=="c2" || idTarget=="c4" || idTarget=="c6" || idTarget=="c8") )
return true;
else if (idTran=="c6" && (idTarget=="c3" || idTarget=="c5" || idTarget=="c9") )
return true;
else if (idTran=="c7" && (idTarget=="c4" || idTarget=="c8") )
return true;
else if (idTran=="c8" && (idTarget=="c5" || idTarget=="c7" || idTarget=="c9") )
return true;
else if (idTran=="c9" && (idTarget=="c6" || idTarget=="c8") )
return true;

return false;
}

document.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("p", event.target.id);
});



// By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
document.addEventListener("dragover", function(event) {
  event.preventDefault();
});



document.addEventListener("drop", function(event) {
  event.preventDefault();
  if ( event.target.className == "circle" ) {
    var data = event.dataTransfer.getData("p");
    var x=document.getElementById(data);
    if((data=="1" || data=="2" || data=="3") && count%2==0 && count<=5)
    {x.style.left=event.target.style.left;
    x.style.top=parseInt(event.target.style.top)-16+"px";
      event.target.appendChild(x);
      state[x.parentNode.id]=1;
    count++;}
    else if((data=="4" || data=="5" || data=="6") && count%2!=0 && count<=5)
    {x.style.left=event.target.style.left;
    x.style.top=parseInt(event.target.style.top)-16+"px";
      event.target.appendChild(x);
      state[x.parentNode.id]=2;
    count++;}
    else if (count>=6)
    {   var idTran=x.parentNode.id;
        var idTarget=event.target.id;
        var v=valid(idTran,idTarget);
        if (v)
        {
        if((data=="1" || data=="2" || data=="3") && count%2==0)
        {state[x.parentNode.id]=0;
          x.style.left=event.target.style.left;
        x.style.top=parseInt(event.target.style.top)-16+"px";
          event.target.appendChild(x);
          state[x.parentNode.id]=1;
        count++;}
        else if((data=="4" || data=="5" || data=="6") && count%2!=0)
        {state[x.parentNode.id]=0;
          x.style.left=event.target.style.left;
        x.style.top=parseInt(event.target.style.top)-16+"px";
          event.target.appendChild(x);
          state[x.parentNode.id]=2;
        count++;}
        }
    }

    var win=check_win();
  /*  document.getElementById("win").innerHTML=state["c1"]+","+state["c2"]+","+state["c3"]+","+state["c4"]+","+
    state["c5"]+","+state["c6"]+","+state["c7"]+","+state["c8"]+","+state["c9"]+">>"+win;*/
    if(win==1)
    {
      document.getElementById("win").innerHTML='<p class="win">Green player win</p>';
      setTimeout(new_game,4000);
    }
    else if(win==2)
    { document.getElementById("win").innerHTML='<p class="win">Red player win</p>';
      setTimeout(new_game,4000);
    }
  }
});
