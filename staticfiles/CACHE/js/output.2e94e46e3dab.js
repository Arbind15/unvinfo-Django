var num=20;function Scrolled(){if((window.innerHeight+window.scrollY)>=document.body.offsetHeight){var xhttp=new XMLHttpRequest();tmp=num;var url='/chunks?index='+tmp;num=num+5;xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var lst=(xhttp.responseText);var json=JSON.parse(lst);var table=document.getElementById('mn_table');for(i=0;i<json.length;i++){var row=table.insertRow(json[i]['value'][3]);var sno=row.insertCell(0);var unv=row.insertCell(1);var lnk=row.insertCell(2);var a_hrf=document.createElement('a');var txts=document.createTextNode(json[i]['value'][2]);a_hrf.appendChild(txts);a_hrf.href=json[i]['value'][2];sno.innerHTML=json[i]['value'][3];sno.style='font-weight: bold';unv.innerHTML=json[i]['value'][1];lnk.innerHTML=a_hrf;}}};xhttp.open("GET",url,true);xhttp.send();}};