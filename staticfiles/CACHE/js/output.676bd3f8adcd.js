var num=20;function Scrolled(){if((window.innerHeight+window.scrollY)>=document.body.offsetHeight){var xhttp=new XMLHttpRequest();tmp=num;var url='/chunks?index='+tmp;num=num+10;xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var lst=xhttp.responseText;alert(lst)}};xhttp.open("GET",url,true);xhttp.send();}};