var num=20;function Scrolled(){if((window.innerHeight+window.scrollY)>=document.body.offsetHeight){var xhttp=new XMLHttpRequest();var url='/chunks?index='+num;alert(num)
xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){}};xhttp.open("GET",url,true);xhttp.send();}
num=num+10;};