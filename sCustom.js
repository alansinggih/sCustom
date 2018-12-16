
buatKegiatan();
var span = $("<span class='span1'>Tambah Kegiatan</span>");  

$(".sfilter").prepend(span)
function buatKegiatan(){
ouou = $('div[class^=luar]').length + 1;
    /*Bungkus*/
var div = $("<div class='luar' id='luar"+ouou+"'/>");

/*Jam*/
var JamMulai = $("<input class='JamMulai' id='JamMulai"+ouou+"' type='text' maxlength='2' placeholder='Jam'/>");
var MenitMulai = $("<input class='MenitMulai' id='MenitMulai"+ouou+"' type='text' maxlength='2' placeholder='Mnt'/>");
var lab = $("<label id='lb"+ouou+"' class='lb' style='font-size:12px'>Jam Mulai</label>");
var lab1 = $("<label id='lb1"+ouou+"' class='lb1' style='font-size:12px'>Jam Selesai</label>");
var lab2 = $("<label id='lb2"+ouou+"' class='lb2' style='font-size:25px'>"+ouou+"</label>");
var JamSelesai = $("<input class='JamSelesai' id='JamSelesai"+ouou+"' type='text' maxlength='2' placeholder='Jam'/>");
var MenitSelesai = $("<input class='MenitSelesai' id='MenitSelesai"+ouou+"' type='text' maxlength='2' placeholder='Mnt'/>");  
/*kerangka SKP*/
var seleROL = $("<select class='rol' id='rol"+ouou+"'/>")
var txtArea = $("<textarea class='txt' id='txt"+ouou+"' name='keterangan' placeholder='Rincian Kegiatan'/>");
var Jumlah = $("<input class='Jml' id='Jml"+ouou+"' type='text' placeholder='Jml Sls'/>");  
var sat = $("<input class='Sat' id='Sat"+ouou+"' type='text' placeholder='Satuan' value='Kegiatan'/>");  
var btn = $("<button class='Btn' id='Btn"+ouou+"' onclick='hapus()'>x</button>");  
var span = $("<span class='span1'>Tambah Kegiatan</span>");  
    /*Append*/
$(".sfilter").append(div)
$('#luar'+ouou).append(lab2,JamMulai,MenitMulai,lab,JamSelesai,MenitSelesai,lab1,seleROL,txtArea,Jumlah,sat,btn)

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
    $('#lb'+ag+',#lb1'+ag+',#lb2'+ag+',#JamMulai'+ag+',#MenitMulai'+ag+',#JamSelesai'+ag+',#JamSelesai'+ag+',#rol'+ag+',#txt'+ag+',#Jml'+ag+',#Sat'+ag+',#luar'+ag+',#Btn'+ag).remove();
});

/*css*/
$(".luar").css({
    "border-radius":"5px",
    "padding":"10px 5px 7px 5px",
    "position":"relative",
    "border":"solid 1px #cccccc",
    "background":"#eeeeee",
    "margin-right":"10px",
    "margin-bottom":"10px",
    "display": "inline-block",
    "height":"10px",
    "width":"30px",
    "height":"280px",
    "width":"300px",
});


$(".JamMulai,.MenitMulai").css({
    "background-color":"#ffffff",
    "position":"absolute",
    "text-align": "center",
    "width":"10%",
    "margin-top":"24px",
}); 
$(".JamSelesai,.MenitSelesai").css({
    "background-color":"#ffffff",
    "position":"absolute",
    "text-align": "center",
    "width":"10%",
    "margin-top":"9px",
});
$(".lb").css({
    "margin":"0 0 0 18px",
    "width":"45%",
});

$(".lb1").css({
    "margin":"-16px 0 0 147px",
    "width":"45%",
});
$(".lb2").css({
    "position":"absolute",
    "margin": "-11px 0 0 -6px",
    "background-color": "#cccccc",
    "color": "white",
    "width": "29px",
    "border-radius":"5px 0"
});

$(".JamMulai").css({
    "margin-left":"-111px",
}); 
$(".MenitMulai").css({
    "margin-left":"-64px",
}); 
$(".JamSelesai").css({
    "margin-left":"19px",
}); 
$(".MenitSelesai").css({
    "margin-left":"66px",
}); 

$("input[maxlength='2']").css({

});
$(".Jml").css({
"background-color":"#ffffff",
    "position":"absolute",
    "text-align": "center",
    "margin":"220px 0 0 -138px",
    "width":"20%",
});
$(".Sat").css({
    "background-color":"#ffffff",
    "position":"absolute",
    "text-align": "center",
    "margin":"220px 0 0 -58px",
    "width":"32%",
});

$(".Btn").css({
    "position": "absolute",
    "text-align": "center",
    "margin": "-27px 0px 0px 129px",
    "width": "9%",
    "font-size": "13px",
    "border-radius": "0 5px 0 7px",
    "background": "#a00",
    "color": "white",
});
$(".rol").css({ 
    "width":"90%",
    "height": "28px",
    "text-align": "left",
    "position":"absolute",
    "margin":"63px 0 0 -137px",
    "font-size":"0.8em"
});
$(".txt").css({ 
    "position":"absolute",
    "font-size": "12px",
    "max-width":"86%",
    "min-width":"86%",
    "max-height":"105px",
    "min-height":"105px",
    "margin":"97px 5px 0px -138px",
    
});
    
};


$(".pageheader").children().css({
    "position":"relative",
    "margin": "0px 41% 0px 41%",
    "background-color": "#cccccc",
    "color": "white",
    "border-radius":"39px",
    "cursor":"pointer",
    "padding":"10px",
    "font-size":"0.5em",
    "width":"200px",
});

$(".span1").css({
    "margin": "-1% 42% 1% 41%",
    "background-color": "#a00",
    "color": "white",
    "border-radius": "0 0 39px 39px",
    "cursor": "pointer",
    "padding": "6px",
    "font-size": "1em",
    "width":"200px",
});

$(".pageheader").children().text("Tambah Jurnal Harian");
/*Koding Proses*/
function buka(){
  $(document).ready(function(){
     $('#tambah').trigger('click'); 
     });
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
 $(document).ready(function(){
         $('#btnsimpan').trigger('click');
         $('#btnok').trigger('click');
         $('div').removeClass('modal-backdrop');
         }); 
};

function klik(){
var abcd;
var ououq = $('.lb2').length;
for(abcd = 0;abcd<=ououq-1;abcd++){
    var abc = abcd+1
    alert(abc)
buka();
buat($('#JamMulai'+abc).val(),$('#MenitMulai'+abc).val(),
    $('#JamSelesai'+abc).val(),$('#MenitSelesai'+abc).val(),
    $('#rol'+abc).val(),$('#txt'+abc).val(),$('#Jml'+abc).val(),$('#Sat'+abc).val());
tutup()
};
};

$(".pageheader").children().click(function(){
    klik();
});
$(".span1").click(function(){
buatKegiatan();
});