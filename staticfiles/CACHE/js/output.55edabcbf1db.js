var num=20;function Scrolled(){if((window.innerHeight+window.scrollY)>=document.body.offsetHeight){var xhttp=new XMLHttpRequest();tmp=num;var url='/chunks?index='+tmp;num=num+10;xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var lst=(xhttp.responseText);var json=JSON.parse(lst);var table=document.getElementById('mn_table');for(i=0;i<json.length;i++){var row=table.insertRow(json[i]['value'][3]);row.classList.add('aos-item');row.setAttribute('data-aos','fade-left');var sno=row.insertCell(0);var unv=row.insertCell(1);var lnk=row.insertCell(2);var a_hrf=document.createElement('a');var txts=document.createTextNode(json[i]['value'][2]);a_hrf.appendChild(txts);a_hrf.target='_blank';a_hrf.href=json[i]['value'][2];sno.innerHTML=json[i]['value'][3];sno.style='font-weight: bold';unv.innerHTML=json[i]['value'][1];lnk.appendChild(a_hrf);}}};xhttp.open("GET",url,true);xhttp.send();}}
function searchField(){document.getElementById("srch_fld").addEventListener("keyup",function(){document.getElementsByTagName('body')[0].removeAttribute("onscroll");var srch_txt=document.getElementById('srch_fld').value;if(srch_txt==""){var bdy=document.getElementsByTagName('body')[0];var ba=document.createAttribute('onscroll');ba.value="Scrolled()";bdy.setAttributeNode(ba);num=20;var req=new XMLHttpRequest();var url='/reset';req.onreadystatechange=function(){if(this.readyState==4&&this.status==200){document.open();document.write(req.response);document.close();}};req.open("GET",url,true);req.send();}
var xhttp=new XMLHttpRequest();var url='/search?search_txt='+srch_txt;xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var lst=(xhttp.responseText);var json=JSON.parse(lst);var table_body=document.getElementById('table_body');table_body.remove();var table=document.getElementById('mn_table');var tbody=document.createElement('tbody');tbody.id='table_body';table.appendChild(tbody);if(json.length==0){document.getElementById('snackbar').innerText="No match found!";message();}
for(i=0;i<json.length;i++){var row=tbody.insertRow(i);row.classList.add('aos-item');row.setAttribute('data-aos','fade-left');var sno=row.insertCell(0);var unv=row.insertCell(1);var lnk=row.insertCell(2);var a_hrf=document.createElement('a');var txts=document.createTextNode(json[i]['value'][2]);a_hrf.appendChild(txts);a_hrf.target='_blank';a_hrf.href=json[i]['value'][2];sno.innerHTML=json[i]['value'][3];sno.style='font-weight: bold';unv.innerHTML=json[i]['value'][1];lnk.appendChild(a_hrf);var innerHTML=unv.innerHTML;var index=innerHTML.toLowerCase().indexOf(srch_txt.toLowerCase());if(index>=0){innerHTML=innerHTML.substring(0,index)+"<span class='highlight'>"+innerHTML.substring(index,index+srch_txt.length)+"</span>"+innerHTML.substring(index+srch_txt.length);unv.innerHTML=innerHTML;}}}};xhttp.open("GET",url,true);xhttp.send();});}
function Fout(){document.getElementsByTagName('body')[0].removeAttribute("onscroll");}
function message(){var x=document.getElementById("snackbar");x.className="show";setTimeout(function(){x.className=x.className.replace("show","");},3000);}
function FileUp(){var ipt=document.getElementById('up_fl');var file=ipt.files[0];var data=new FormData();data.append('file',file);data.append('usr',"file");var req=new XMLHttpRequest();var url='/save_file';req.onreadystatechange=function(){if(this.readyState==4&&this.status==200){}};req.open("POST",url,true);req.upload.addEventListener('progress',function(e){var percent_complete=(e.loaded/e.total)*100;console.log(percent_complete);});req.addEventListener('load',function(e){console.log(req.status);console.log(req.response);});req.send(data);};