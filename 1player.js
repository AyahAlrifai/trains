var count=0;
var initial_node=[] ;
initial_node["state"]={"c1":0,"c2":0,"c3":0,"c4":0,"c5":0,"c6":0,"c7":0,"c8":0,"c9":0};
initial_node["id"]={"c1":0,"c2":0,"c3":0,"c4":0,"c5":0,"c6":0,"c7":0,"c8":0,"c9":0};
initial_node["actionto"]=0;
initial_node["actionid"]=0;
initial_node["cost"]=0;
var depth=4;
function back()
{
  location.assign("/home/ayah/Desktop/trains/base.html")
}
function new_game()
{
document.body.innerHTML=
'<img src="/home/ayah/Desktop/trains/arrow.png" alt="back" onclick="back()" width="100px" height="70px">'+
'<div id="win"></div>'+
'<div class="h" style="top:50px"></div>'+
'<div class="h" style="top:350px"></div>'+
'<div class="h" style="top:650px"></div>'+
'<div class="v" style="left:290px"></div>'+
'<div class="v" style="left:590px"></div>'+
'<div class="v" style="left:890px"></div>'+
'<div class="circle" style="left:265px;top:25px;" id="c1"></div>'+
'<div class="circle" style="left:265px;top:325px;" id="c4"></div>'+
'<div class="circle" style="left:265px;top:625px;" id="c7"></div>'+
'<div class="circle" style="left:567px;top:25px;;" id="c2"></div>'+
'<div class="circle" style="left:567px;top:325px;" id="c5"></div>'+
'<div class="circle" style="left:567px;top:625px;" id="c8"></div>'+
'<div class="circle" style="left:867px;top:25px;" id="c3"></div>'+
'<div class="circle" style="left:867px;top:325px;" id="c6"></div>'+
'<div class="circle" style="left:867px;top:625px;" id="c9"></div>'+
'<p draggable="true" class="stone1" style="left:120px;top:325px;" id="1"></p>'+
'<p draggable="true" class="stone1" style="left:120px;top:325px;" id="2"></p>'+
'<p draggable="true" class="stone1" style="left:120px;top:325px;" id="3"></p>'+
'<p draggable="true" class="stone2" style="left:1035px;top:325px;" id="4"></p>'+
'<p draggable="true" class="stone2" style="left:1035px;top:325px;" id="5"></p>'+
'<p draggable="true" class="stone2" style="left:1035px;top:325px;" id="6"></p>';
initial_node.state={"c1":0,"c2":0,"c3":0,"c4":0,"c5":0,"c6":0,"c7":0,"c8":0,"c9":0};
initial_node.id={"c1":0,"c2":0,"c3":0,"c4":0,"c5":0,"c6":0,"c7":0,"c8":0,"c9":0};
initial_node["actionto"]=0;
initial_node["cost"]=0;
initial_node["actionid"]=0;
count=0;
computer_play();

}
function check_win(state)
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
//from idTran to idTarget
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
function terminal_test(n)
{
var win=check_win(n.state);
if (win==1 || win==2 || n.cost==depth)
return true;
return false;
}
function win_counter(s,char0,char1)
{
//s:state
var c=0;
if ((char0==s["c1"] || char0==s["c2"] || char0==s["c3"]) && (char1!=s["c1"] && char1!=s["c2"] && char1!=s["c3"]))
c+=1;
if ((char0==s["c4"] || char0==s["c5"] || char0==s["c6"]) && (char1!=s["c4"] && char1!=s["c5"] && char1!=s["c6"]))
c+=1;
if ((char0==s["c7"] || char0==s["c8"] || char0==s["c9"]) && (char1!=s["c7"] && char1!=s["c8"] && char1!=s["c9"]))
c+=1;
if ((char0==s["c1"] || char0==s["c4"] || char0==s["c7"]) && (char1!=s["c1"] && char1!=s["c4"] && char1!=s["c7"]))
c+=1;
if ((char0==s["c2"] || char0==s["c5"] || char0==s["c8"]) && (char1!=s["c2"] && char1!=s["c5"] && char1!=s["c8"]))
c+=1;
if ((char0==s["c3"] || char0==s["c6"] || char0==s["c9"]) && (char1!=s["c3"] && char1!=s["c6"] && char1!=s["c9"]))
c+=1;
if ((char0==s["c1"] || char0==s["c5"] || char0==s["c9"]) && (char1!=s["c1"] && char1!=s["c5"] && char1!=s["c9"]))
c+=1;
if ((char0==s["c3"] || char0==s["c5"] || char0==s["c7"]) && (char1!=s["c3"] && char1!=s["c5"] && char1!=s["c7"]))
c+=1;
return c;
}
function Evaluation(state)
{
if(check_win(state)==1)
return 100;
else if(check_win(state)==2)
return -100;
else
{
var X_value=win_counter(state,1,2);
var O_value=win_counter(state,2,1);
return X_value-O_value;
}
}
function MinMax_Decision(n)
{
var [newn,v]=MaxValue(n);
return newn;
}
function MaxValue(n)
{
if (terminal_test(n))
{return [n,Evaluation(n.state)];}
var v=-1000;
var select_node=n;
var nodes=Successors(n,1);
var len=nodes.length;
for (var i=0;i<len;i++)
{
var n0=nodes[i];
var [node,max]=MinValue(n0)
if (max>v)
{
select_node=n0;
v=max;}
}
return [select_node,v];
}
function MinValue(n)
{
if (terminal_test(n))
return [n,Evaluation(n.state)];
var v=1000;
var select_node=n;
var nodes=Successors(n,2);
var len=nodes.length;
for (var i=0;i<len;i++)
{
var n0=nodes[i];
var [node,min]=MaxValue(n0);
if (min<v)
{
select_node=n0;
v=min;}
}
return [select_node,v];
}
function Successors(n,c)
{
var child=[];
if(n.cost+count<=5)
{
id=(n.cost+count)/2+1;
if(n.state["c1"]==0)
{child.push(copy(n,"c1","c0",id,c));}
if(n.state["c2"]==0)
{child.push(copy(n,"c2","c0",id,c));}
if(n.state["c3"]==0)
{child.push(copy(n,"c3","c0",id,c));}
if(n.state["c4"]==0)
{child.push(copy(n,"c4","c0",id,c));}
if(n.state["c5"]==0)
{child.push(copy(n,"c5","c0",id,c));}
if(n.state["c6"]==0)
{child.push(copy(n,"c6","c0",id,c));}
if(n.state["c7"]==0)
{child.push(copy(n,"c7","c0",id,c));}
if(n.state["c8"]==0)
{child.push(copy(n,"c8","c0",id,c));}
if(n.state["c9"]==0)
{child.push(copy(n,"c9","c0",id,c));}
}
else
{
if(n.state["c1"]==c)
{
var id=initial_node.id["c1"];
if(n.state["c2"]==0)
child.push(copy(n,"c2","c1",id,c));
if (n.state["c4"]==0)
child.push(copy(n,"c4","c1",id,c));
}
if(n.state["c2"]==c)
{
var id=initial_node.id["c2"];
if(n.state["c1"]==0)
child.push(copy(n,"c1","c2",id,c));
if (n.state["c3"]==0)
child.push(copy(n,"c3","c2",id,c));
if (n.state["c5"]==0)
child.push(copy(n,"c5","c2",id,c));
}
if(n.state["c3"]==c)
{
var id=initial_node.id["c3"];
if(n.state["c2"]==0)
child.push(copy(n,"c2","c3",id,c));
if (n.state["c6"]==0)
child.push(copy(n,"c6","c3",id,c));
}
if(n.state["c4"]==c)
{
var id=initial_node.id["c4"];
if(n.state["c1"]==0)
child.push(copy(n,"c1","c4",id,c));
if (n.state["c5"]==0)
child.push(copy(n,"c5","c4",id,c));
if (n.state["c7"]==0)
child.push(copy(n,"c7","c4",id,c));
}
if(n.state["c5"]==c)
{
var id=initial_node.id["c5"];
if(n.state["c2"]==0)
child.push(copy(n,"c2","c5",id,c));
if (n.state["c4"]==0)
child.push(copy(n,"c4","c5",id,c));
if (n.state["c6"]==0)
child.push(copy(n,"c6","c5",id,c));
if (n.state["c8"]==0)
child.push(copy(n,"c8","c5",id,c));
}
if(n.state["c6"]==c)
{
var id=initial_node.id["c6"];
if(n.state["c3"]==0)
child.push(copy(n,"c3","c6",id,c));
if (n.state["c5"]==0)
child.push(copy(n,"c5","c6",id,c));
if (n.state["c9"]==0)
child.push(copy(n,"c9","c6",id,c));
}
if(n.state["c7"]==c)
{
  var id=initial_node.id["c7"];
if(n.state["c4"]==0)
child.push(copy(n,"c4","c7",id,c));
if (n.state["c8"]==0)
child.push(copy(n,"c8","c7",id,c));
}
if(n.state["c8"]==c)
{
  var id=initial_node.id["c8"];
if(n.state["c7"]==0)
child.push(copy(n,"c7","c8",id,c));
if (n.state["c9"]==0)
child.push(copy(n,"c9","c8",id,c));
if (n.state["c5"]==0)
child.push(copy(n,"c5","c8",id,c));
}
if(n.state["c9"]==c)
{
  var id=initial_node.id["c9"];
if(n.state["c6"]==0)
child.push(copy(n,"c6","c9",id,c));
if (n.state["c8"]==0)
child.push(copy(n,"c8","c9",id,c));
}
}
return child;
}
function copy(n,actionTo,actionFrom,id,c)
{
var new_state=[];
var new_id=[];
new_state["c1"]=n.state["c1"];
new_state["c2"]=n.state["c2"];
new_state["c3"]=n.state["c3"];
new_state["c4"]=n.state["c4"];
new_state["c5"]=n.state["c5"];
new_state["c6"]=n.state["c6"];
new_state["c7"]=n.state["c7"];
new_state["c8"]=n.state["c8"];
new_state["c9"]=n.state["c9"];

new_id["c1"]=n.id["c1"];
new_id["c2"]=n.id["c2"];
new_id["c3"]=n.id["c3"];
new_id["c4"]=n.id["c4"];
new_id["c5"]=n.id["c5"];
new_id["c6"]=n.id["c6"];
new_id["c7"]=n.id["c7"];
new_id["c8"]=n.id["c8"];
new_id["c9"]=n.id["c9"];

var n0=[];
n0.actionto=actionTo;
n0.actionid=id;

new_state[actionTo]=c;
new_id[actionTo]=id;
if(actionFrom!="c0")
{
new_state[actionFrom]=0;
new_id[actionFrom]=0;
}
n0["id"]=new_id;
n0["cost"]=n.cost+1;
n0["state"]=new_state;
return n0;
}
function computer_play()
{
var action,id;
var node=MinMax_Decision(initial_node);
action=node.actionto;
id=node.actionid;
initial_node.cost=0;
var stone=document.getElementById(id);
var actionto=document.getElementById(action);
if(count%2==0)
{
stone.style.left=actionto.style.left;
stone.style.top=parseInt(actionto.style.top)-16+"px";
actionto.appendChild(stone);
initial_node.state=node.state;
initial_node.id=node.id;
count++;
}

}
document.addEventListener("dragstart", function(event) {
event.dataTransfer.setData("p", event.target.id);

});
document.addEventListener("dragover", function(event) {
event.preventDefault();
});
document.addEventListener("drop", function(event) {
event.preventDefault();
if ( event.target.className == "circle" )
{
var data = event.dataTransfer.getData("p");
var x=document.getElementById(data);
if((data=="4" || data=="5" || data=="6") && count%2!=0 && count<=5)
{
x.style.left=event.target.style.left;
x.style.top=parseInt(event.target.style.top)-16+"px";
event.target.appendChild(x);
initial_node.state[x.parentNode.id]=2;
initial_node.id[x.parentNode.id]=parseInt(data);
count++;
}
else if (count>=6)
{
var idTran=x.parentNode.id;
var idTarget=event.target.id;
var v=valid(idTran,idTarget);
if (v)
{
if((data=="4" || data=="5" || data=="6") && count%2!=0)
{
initial_node.state[x.parentNode.id]=0;
initial_node.id[x.parentNode.id]=0;
x.style.left=event.target.style.left;
x.style.top=parseInt(event.target.style.top)-16+"px";
event.target.appendChild(x);
initial_node.state[x.parentNode.id]=2;
initial_node.id[x.parentNode.id]=parseInt(data);
count++;}
}
}
var win=check_win(initial_node.state);
if(win==1)
{
document.getElementById("win").innerHTML='<p class="win">Green player win</p>';
setTimeout(new_game,2000);
}
else if(win==2)
{
document.getElementById("win").innerHTML='<p class="win">Red player win</p>';
setTimeout(new_game,2000);
}
computer_play();

var win=check_win(initial_node.state);
if(win==1)
{
document.getElementById("win").innerHTML='<p class="win">Green player win</p>';
setTimeout(new_game,2000);
}
else if(win==2)
{
document.getElementById("win").innerHTML='<p class="win">Red player win</p>';
setTimeout(new_game,2000);
}
}
});
computer_play();
