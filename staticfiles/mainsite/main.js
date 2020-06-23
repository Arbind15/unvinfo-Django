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


function searchField() {

    document.getElementById("srch_fld").addEventListener("keyup", function () {

        document.getElementsByTagName('body')[0].removeAttribute("onscroll");
        var srch_txt=document.getElementById('srch_fld').value;
        // console.log(srch_txt);
        if(srch_txt==""){

            var bdy=document.getElementsByTagName('body')[0];
            var ba = document.createAttribute('onscroll');
            ba.value="Scrolled()";
            bdy.setAttributeNode(ba);
            num=20;

            var req = new XMLHttpRequest();
            var url='/reset';
            req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.open();
                document.write(req.response);
                document.close();
            }
        };
        req.open("GET", url, true);
        req.send();

        }

        var xhttp = new XMLHttpRequest();
        var url='/search?search_txt='+srch_txt;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var lst=(xhttp.responseText);
                var json = JSON.parse(lst);
                // console.log(json[0]['value']);

                var table_body= document.getElementById('table_body');
                table_body.remove();
                var table= document.getElementById('mn_table');
                var tbody=document.createElement('tbody');
                tbody.id='table_body';
                table.appendChild(tbody);

                if(json.length==0){

                    // var card=document.createElement('div');
                    // card.className='card bg-danger mb-3';
                    // card.innerHTML="No match found!";
                    // var b=document.getElementsByTagName('body')[0];
                    // b.appendChild(card);

                    document.getElementById('snackbar').innerText="No match found!";
                    message();

                }

                for(i=0;i<json.length;i++){
                    var row =tbody.insertRow(i);
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

                    // for highlighting
                    var innerHTML = unv.innerHTML;
                    var index = innerHTML.toLowerCase().indexOf(srch_txt.toLowerCase());
                    if (index >= 0) {
                       innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+srch_txt.length) + "</span>" + innerHTML.substring(index + srch_txt.length);
                       unv.innerHTML = innerHTML;
                      }
                }


            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();

    });

}

function Fout() {
    document.getElementsByTagName('body')[0].removeAttribute("onscroll");
}

function message() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}