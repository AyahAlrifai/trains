function select_mode()
{
  var s1=document.getElementById("1").checked;
  var s2=document.getElementById("2").checked;
  document.write(s1);
  if(s1)
  {
    location.replace("/home/ayah/Desktop/trains/1player.html")
  }
  if(s2)
  {
    location.replace("/home/ayah/Desktop/trains/2players.html")
  }

}
