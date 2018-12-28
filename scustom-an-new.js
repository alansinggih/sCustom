var sa = $('.fly2').length;
if (sa >0) {

}else{

/*<------mulai kodenya--------->*/
hp()
ctgl()
$('#tambah').click(function(){
rubahbox();
}) 
    $('.logoSimpegSmall').click(function(){
    var xx = $('.lb2').length;
    if (xx >0) {
    alert("Error,\nJangan klik Logo yang kedua kalinya!!!")
    }else{
    eksekusi()
    alert("Berhasill...\n");
    }
});
 /*<------fungsi untuk rubah tanggal--------->*/
function ctgl(){
 $('#tgla').click(function(){
  $('.datepicker').css({
    "width":"98%",
    "height":"98%",
    "top":"0",
    "left":"0",
    "position":"fixed",
    "background": "#063f69",
    "color": "#fff",
    "z-index":"100",
  });
  $('.table-condensed').css({
    "width":"97%",
    "font-size":"1.6em"
  })
    $('.table-condensed thead tr').css({
    "width":"97%",
    "font-size":"1.8em"
  })
   $('.table-condensed thead').css({
    "background":"#477a9f",
  })
  
})
}
 /*<------fungsi untuk rubah diaologbox--------->*/
function rubahDialog(){
$('.icon-remove-circle').click(function(){
$('#ConfirmBox').removeAttr('style');
$('#ConfirmBox').css({
  'position': 'fixed',
  'top': '0',
  'max-height': '100%',
  'min-width': '99%',
  'display': 'block',
  'margin': 'auto',
  'left': '0',
  'font-size': '0.8em'
})
}) 
}
 /*<------fungsi untuk rubah diaologbox--------->*/
function rubahbox(){
$('#editBox').removeAttr('style');
$('#editBox').css({
  'max-height': '100%',
  'min-width': '99%',
  'display': 'block',
  'margin': 'auto',
  'position': 'fixed',
  'top': '0',
  'left': '0',
  'font-size': '0.8em'
});
   
$('fieldset').css({
  'display': 'contents',
});
$('select#skpkgid').css({
  'max-width': '99%',
  'min-width': '99%',
  'height':'40px',
});
$('textarea#keterangan').css({
  'max-width': '99%',
  'min-width': '99%',
  'height':'190px',
  'font-size':'1em'
});
$('#jammulai,#menitmulai,#jamselesai,#menitselesai').css({
  'width':'100%',
  'margin':'auto',
  'height':'40px',
  'text-align':'center'
});
$('#menitmulai').css({
  'margin-bottom':'21px',
});
}
 /*<------fungsi untuk rubah icon dan diaologbox--------->*/
function refer(){
$('.icon-remove-circle').css({
    'font-size': '1.5em',
    'margin': '30px auto 35px 7px',
})
$('.icon-edit').css({
    'font-size': '4em',
    'margin': '6px',
})
$('i.icon-edit').click(function(){
var b = $(".icon-edit").length;
for (var i = 0; i < b; i++) {
 $('.icon-edit:eq('+i+')').attr('id',i);
};

function cariTable(baris,kee){
   return $("#data").find("tbody").find("tr:eq("+baris+")").find("td:eq("+kee+")");
} 
var a = cariTable($(this).attr('id'),7).text();
var b = cariTable($(this).attr('id'),8).text();
jamMasuk = a.substr(0,2);
menitMasuk = a.substr(3,4);
jamSelesai = b.substr(0,2);
menitSelesai = b.substr(3,4);  
$('#jammulai').val(jamMasuk);   
$('#menitmulai').val(menitMasuk);   
$('#jamselesai').val(jamSelesai);   
$('#menitselesai').val(menitSelesai);   
});

}
/*<------end fungsi untuk rubah icon dan diaologbox--------->*/
    
/*<------fungsi untuk fix Android--------->*/
function hp(){
$('.content').css({
    'padding': '0.2em',
    'margin': '0'
})
$('.breadcrumb').css({
    'display': 'none',
})

$('header').css({
    'margin': '0',
    'padding': '0',
    'width': '100%',
    'display': 'inline-flex',
    'height':'100px'
})
$('header h2, header h3').css({
    'font-size': '100%',
    'padding': '0'
})

$('header h2, header h3').css({
    'font-size': '100%',
    'padding': '0'
})
$('header h2').css({'margin': '4% 0 0 0'})
$('header h3').css({'margin': '0 0 4% 0'})
$('table').css({
  "overflow-y":"scroll"
})
$('tbody').css({
    'font-size': '0.8em'
})
$('thead').css({
    'font-size': '0.5em'
})
$('.dataaction>.btn').css({
  'font-size':'0.6em',
  'padding':'5px',
})
$('#data2,#data3').css({
  'display':'none',
})
$('ul.topMenuLink li a').css({
  'font-size':'0px',
    'margin': '0',
});
$('userAccount h3').css({
  'font-size':'10%',
});
$('#data thead th:eq(4)').html('Jmlh')
 $('.modal-header').css({
    'font-size': '1.1em',
    'text-align':'center',
    'background':'#00b7a4',
    'color':'#fff'
})
$('.modal-body').css({
    'background':'#ecfffa',
    'color':'#016c61',
    'max-height': '100%',
})
} 
/*<------end fungsi untuk fix Android--------->*/
 /*<------fungsi untuk auto input waktu--------->*/
 function cariwaktu(inp) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "listwaktu");
      a.setAttribute("class", "ongkone");
      a.setAttribute("style", "position: absolute;width:100%;z-index:99;height:210px;overflow-y:scroll");
      this.parentNode.appendChild(a);
      
      var arr = 	["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60"];
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.setAttribute("style", "padding: 5px;cursor: pointer;background-color: #fff;border-bottom: 1px solid #d4d4d4;color:#6c6c6c");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "listwaktu");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("ongko-aktif");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("ongko-aktif");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("ongkone");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
 /*<------end fungsi untuk auto input waktu--------->*/

function eksekusi() {

buatKegiatan(); 
$("<div class='fly'><i class='icon-plus'></div>").appendTo('.content');
$("<div class='fly2'><i class='icon-plus-sign'></div>").appendTo('.content');
$("<div class='fly3'><i class='icon-wrench'></div>").appendTo('.content');
function buatKegiatan(){
ouou = $('div[class^=luar]').length + 1;
var div = $("<div class='luar' id='luar"+ouou+"'/>");
/*Jam*/
/*var JamMulai = ;
var MenitMulai = ;*/
var lab2 = $("<label id='lb2"+ouou+"' class='lb2' style='font-size:35px'>"+ouou+"</label>");
/*var JamSelesai = $("");
var MenitSelesai = $("");*/
var xutox = $("<div class='xuto' id='xuto"+ouou+"' style='position: relative;'><input class='JamMulai' id='JamMulai"+ouou+"' type='text' maxlength='2' placeholder='Jam Mulai'/><input class='MenitMulai' id='MenitMulai"+ouou+"' type='text' maxlength='2' placeholder='Menit Mulai'/></div>");
var autox1 = $("<div class='auto1' id='auto1"+ouou+"' style='position: relative;'><input class='JamSelesai' id='JamSelesai"+ouou+"' type='text' maxlength='2' placeholder='Jam Selesai'/><input class='MenitSelesai' id='MenitSelesai"+ouou+"' type='text' maxlength='2' placeholder='Menit Selesai'/></div>");
/*kerangka SKP*/
var seleROL = $("<select class='rol' id='rol"+ouou+"'/>")
var txtArea = $("<textarea class='txt' id='txt"+ouou+"' name='keterangan' placeholder='Rincian Kegiatan'/>");
var Jumlah = $("<input class='Jml' id='Jml"+ouou+"' type='text' placeholder='Jml Sls'/>");  
var sat = $("<input class='Sat' id='Sat"+ouou+"' type='text' placeholder='Satuan' value='Kegiatan'/>");  
var btn = $("<button class='Btn' id='Btn"+ouou+"' onclick='hapus()'><i class='icon-remove-sign'/></button>");  

    /*Append*/
$(".sfilter").append(div)
$('#luar'+ouou).append(lab2,xutox,autox1,/*JamMulai,MenitMulai,JamSelesai,MenitSelesai,*/seleROL,txtArea,Jumlah,sat,btn);
/*$('#auto'+ouou).append(JamMulai,MenitMulai);
$('#auto1'+ouou).append(JamSelesai,MenitSelesai);*/

/*isian SKP*/
var idss = $("select[id='skpkgid'] option").attr('value').substring(0,$("select[id='skpkgid'] option").attr('value').length-2);
var a = "01";var b = "02";var c = "03";var d = "04";var e = "05";
var f = "06";var g = "07";var h = "08";var i = "09";var j = "10";
var k = "11";var l = "12";var m = "13";var n = "14";var o = "15";
var p = "16";var q = "17";var r = "18";var s = "19";var t = "20";
var u = "21";var v = "22";var w = "23";var x = "24";var y = "25";
var z = "26";var ln = "lainlain";var tt = "2";var kr = "3";
var a11 = $('#skpkgid option[value="'+ idss + a +'"]').text();
var b11 = $('#skpkgid option[value="'+ idss + b +'"]').text();
var c11 = $('#skpkgid option[value="'+ idss + c +'"]').text();
var d11 = $('#skpkgid option[value="'+ idss + d +'"]').text();
var e11 = $('#skpkgid option[value="'+ idss + e +'"]').text();
var f11 = $('#skpkgid option[value="'+ idss + f +'"]').text();
var g11 = $('#skpkgid option[value="'+ idss + g +'"]').text();
var h11 = $('#skpkgid option[value="'+ idss + h +'"]').text();
var i11 = $('#skpkgid option[value="'+ idss + i +'"]').text();
var j11 = $('#skpkgid option[value="'+ idss + j +'"]').text();
var k11 = $('#skpkgid option[value="'+ idss + k +'"]').text();
var l11 = $('#skpkgid option[value="'+ idss + l +'"]').text();
var m11 = $('#skpkgid option[value="'+ idss + m +'"]').text();
var n11 = $('#skpkgid option[value="'+ idss + n +'"]').text();
var o11 = $('#skpkgid option[value="'+ idss + o +'"]').text();
var p11 = $('#skpkgid option[value="'+ idss + p +'"]').text();
var q11 = $('#skpkgid option[value="'+ idss + q +'"]').text();
var r11 = $('#skpkgid option[value="'+ idss + r +'"]').text();
var s11 = $('#skpkgid option[value="'+ idss + s +'"]').text();
var t11 = $('#skpkgid option[value="'+ idss + t +'"]').text();
var u11 = $('#skpkgid option[value="'+ idss + u +'"]').text();
var v11 = $('#skpkgid option[value="'+ idss + v +'"]').text();
var w11 = $('#skpkgid option[value="'+ idss + w +'"]').text();
var x11 = $('#skpkgid option[value="'+ idss + x +'"]').text();
var y11 = $('#skpkgid option[value="'+ idss + y +'"]').text();
var z11 = $('#skpkgid option[value="'+ idss + z +'"]').text();
pilihan = {"01":a11,"02":b11,"03":c11,"04":d11,"05":e11,"06":f11,"07":g11,"08":h11,"09":i11,"10":j11,
           "11":k11,"12":l11,"13":m11,"14":n11,"15":o11,"16":p11,"17":q11,"18":r11,"19":s11,"20":t11,
           "21":u11,"22":v11,"23":w11,"24":x11,"25":y11,"26":z11,}
$.each(pilihan, function(i, bl) {   
 $('#rol'+ouou).append($("<option></option>").attr("value",idss+i).text(bl)); 
});
$('#rol'+ouou).find('option').filter(function() {
        return !this.value || $.trim(this.value).length == 0 || $.trim(this.text).length == 0;
}).remove();
$('button#Btn'+ouou).click(function(){
   var ag = $('button.Btn').index(this)+1;
    $('#lb2'+ag+',#xuto'+ag+',#auto1'+ag+',#JamMulai'+ag+',#MenitMulai'+ag+',#JamSelesai'+ag+',#JamSelesai'+ag+',#rol'+ag+',#txt'+ag+',#Jml'+ag+',#Sat'+ag+',#luar'+ag+',#Btn'+ag).remove();
});
    
    /*css*/
$(".luar").css({
    "border-radius":"5px",
    "padding":"28px 5px 7px 5px",
    "position":"relative",
    "border":"solid 1px #cccccc",
    "background":"#eeeeee",
    "margin-right":"10px",
    "margin-bottom":"10px",
    "display": "inline-block",
    "height":"10px",
    "width":"30px",
    "height":"347px",
    "width":"97%",
});


$(".JamMulai,.MenitMulai").css({
    "background-color":"#ffffff",
    "text-align": "center",
    "width":"45%",
    "height":"27px",
    "margin-top":"22px"
}); 
$(".JamSelesai,.MenitSelesai").css({
    "background-color":"#ffffff",
    "text-align": "center",
    "width":"45%",
    "height":"27px",
});

$(".MenitMulai,.MenitSelesai,.Jml").css({
    "border-radius":"0 6px 6px 0",
     "border-right": "1px solid #d4d4d4",
     "border-top": "1px solid #d4d4d4",
     "border-bottom": "1px solid #d4d4d4",
     "border-left":"0",
});   
 $(".JamMulai,.JamSelesai,.Sat").css({
    "border-radius":"6px 0 0 6px",
     "border-left": "1px solid #d4d4d4",
     "border-top": "1px solid #d4d4d4",
     "border-bottom": "1px solid #d4d4d4",
     "border-right":"0",
     
}); 
    
$(".lb2").css({
    "position":"absolute",
    "top": "0",
    "left": "0",
    "background-color": "#00bdfb",
    "color": "white",
    "width": "100%",
});
$("#lb21,#lb25,#lb29,#lb213,#lb217,#lb221").css({  
"background":"#00bdfb",
});
$("#lb22,#lb26,#lb210,#lb214,#lb218,#lb222").css({  
"background":"#c900fb",
});
$("#lb23,#lb27,#lb211,#lb215,#lb219,#lb223").css({  
"background":"#00fbbd",
});
$("#lb24,#lb28,#lb212,#lb216,#lb220,#lb224").css({  
"background":"#fb3500",
});
    
    
$(".JamMulai").css({

}); 
$(".MenitMulai").css({

}); 
$(".JamSelesai").css({

}); 
$(".MenitSelesai").css({

}); 

$("input[maxlength='2']").css({

});
$(".Jml").css({
"background-color":"#ffffff",
    "position":"absolute",
    "text-align": "center",
    "bottom":"-5px",
    "right":"3%",
    "width":"20%",
});
$(".Sat").css({
    "background-color":"#ffffff",
    "position":"absolute",
    "text-align": "center",
    "bottom":"-5px",
    "right":"24%",
    "width":"32%",
});

$(".Btn").css({
    "position": "absolute",
    "text-align": "center",
    "width": "9%",
    "font-size": "31px",
    "background": "none",
    "color": "white",
    "border":"0",
    "right":"0",
    "top":"8px",
});
$(".rol").css({ 
    "width":"95%",
    "height": "40px",
    "text-align": "left",
    "position":"absolute",
    "font-size":"0.8em",
    "top":"142px",
    "left":"3%"
    
});
$(".txt").css({ 
    "position":"absolute",
    "font-size": "12px",
    "max-width":"91%",
    "min-width":"91%",
    "max-height":"141px",
    "min-height":"141px",
    "top":"192px",
    "left":"3%",    
});

cariwaktu(document.getElementById("JamMulai"+ouou));
cariwaktu(document.getElementById("MenitMulai"+ouou));
cariwaktu(document.getElementById("JamSelesai"+ouou));
cariwaktu(document.getElementById("MenitSelesai"+ouou));

};
/*-----------end buat kegiatan---------*/

/*-----------end mobile design---------*/
    
$(".fly").css({
    "position":"fixed",
    "border":"solid 2px #ffffff",
    "background-color":"#053a61",
    "margin":"auto",
    "height":"44px",
    "width":"44px",
    "bottom":"20px",
    "right":"20px",
    "border-radius":"100%",
    "font-size": "37px",
    "padding": "2px",
    "color": "#fff",
    "z-index":"99",
    "text-align":"center"
});
$(".fly2").css({
    "position":"fixed",
    "border":"solid 2px #ffffff",
    "background-color":"#aa0000",
    "margin":"auto",
    "height":"35px",
    "width":"35px",
    "bottom":"77px",
    "right":"24px",
    "border-radius":"100%",
    "font-size": "28px",
    "padding": "2px",
    "color": "#fff",
    "z-index":"99",
    "text-align":"center"
});
$(".fly3").css({
    "position":"fixed",
    "border":"solid 2px #ffffff",
    "background-color":"#aa0000",
    "margin":"auto",
    "height":"40px",
    "width":"40px",
    "bottom":"20px",
    "left":"30px",
    "border-radius":"100%",
    "font-size": "27px",
    "padding": "2px",
    "color": "#fff",
    "z-index":"99",
    "text-align":"center"
});
$(".pageheader").children().css({
    "position":"relative",
    "margin": "auto",
    "cursor":"pointer",
    "padding":"10px",
    "font-size":"0.8em",
});


/*Koding Proses*/
function buka(){
    $('#tambah').trigger('click'); 
}; 
function buat(Jm,Mm,Js,Ms,Pil,Rinc,Jml,Sat){    
return $('#jammulai').val(Jm),
         $('#menitmulai').val(Mm),
         $('#jamselesai').val(Js),
         $('#menitselesai').val(Ms),
         $('#skpkgid').val(Pil),
         $('#keterangan').val(Rinc),
         $('#jumlah').val(Jml),
         $('#satuan').val(Sat);
};
function tutup(){
         $('#btnsimpan').trigger('click');
         $('#btnok').trigger('click');
         $('div').removeClass('modal-backdrop');
};
function none(){
$('#editBox').css({
  "display":"none"
})
};
function klik(){
var ououq = $('.lb2').length;
for(var abcd = 0;abcd<=ououq-1;abcd++){
    var abc = abcd+1
if (confirm('Input Kegiatan ke '+ abc + '\n\n' + $('#rol'+abc).children("option:selected").text() +'\n.' )) {
    buka();
    buat($('#JamMulai'+abc).val(),$('#MenitMulai'+abc).val(),
    $('#JamSelesai'+abc).val(),$('#MenitSelesai'+abc).val(),
    $('#rol'+abc).val(),$('#txt'+abc).val(),$('#Jml'+abc).val(),$('#Sat'+abc).val());
    tutup()
    none()
} else {
    $('modal-backdrop').trigger('click');
    none()
}

};
};
$('.fly, .fly2, .fly3').css({
   "cursor":"pointer",
})
  
$(".fly2").click(function(){
buatKegiatan();
});
$('.fly').click(function(){
klik();
});
$('.fly3').click(function(){
rubahbox();
refer();
rubahDialog();
none();
});  
  
}
/*<------end kodenya--------->*/

}
