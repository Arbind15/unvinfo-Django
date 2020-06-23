var num=20;
function Scrolled() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        // alert("end of page");
        // var last_obj = $('table tr:last');
        // var last_indx=last_obj.getAttribute('th');
        // alert(last_indx);
        // alert(num);

          var xhttp = new XMLHttpRequest();
          tmp=num;
          var url='/chunks?index='+tmp;
          // alert(num);
          num=num+10;
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var lst=(xhttp.responseText);
                // alert(typeof lst);
                var json = JSON.parse(lst);
                // alert(json[0]['value']);

                var table= document.getElementById('mn_table');

                for(i=0;i<json.length;i++){
                    // alert(json[i]['value'][3]);
                    var row =table.insertRow(json[i]['value'][3]);
                    row.classList.add('aos-item');
                    row.setAttribute('data-aos', 'fade-left');
                    // row.setAttribute('data-aos-anchor-placement', 'bottom-top');
                    var sno= row.insertCell(0);
                    var unv= row.insertCell(1);
                    var lnk= row.insertCell(2);

                    var a_hrf= document.createElement('a');
                    var txts = document.createTextNode(json[i]['value'][2]);
                    a_hrf.appendChild(txts);
                    a_hrf.target='_blank';
                    a_hrf.href=json[i]['value'][2];
                    sno.innerHTML=json[i]['value'][3];
                    sno.style='font-weight: bold';
                    unv.innerHTML=json[i]['value'][1];
                    lnk.appendChild(a_hrf);

                }
            }
          };
          xhttp.open("GET", url, true);
          xhttp.send();

        }

}
