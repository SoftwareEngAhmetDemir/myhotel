function tarih()
{var gt = document.getElementById("gt").value;
    var ct = document.getElementById("ct").value;
    
    var tarih = '';
    var d = new Date();

var gta = gt.split("-"); // convert date into array giris date
var cta = ct.split("-");

//giris tarihi bugun tarihine gore geri olup olmadigini kontrol etme

if(gta[0]<d.getFullYear())
{
alert("Bu tarih gecti Yil olarak !!!!")
}
else
if(gta[0]>=d.getFullYear()&&gta[1]<d.getMonth())
{
    alert("Bu tarih gecti  Ay Olarak!!!!")
}
else
if(gta[0]>=d.getFullYear()&&gta[1]>=d.getMonth()&&
gta[2]<d.getDay())
{
    alert("Bu tarih gecti Gun olarak !!!!")

}

else{
    alert("Dogru Bir tarih Sectiniz");
}




// cikis tarihi bugun tarihine kontrol etme  



if(cta[0]<d.getFullYear())
{
alert("Bu tarih gecti Yil olarak !!!!")
}
else
if(cta[0]>=d.getFullYear()&&cta[1]<d.getMonth())
{
    alert("Bu tarih gecti  Ay Olarak!!!!")
}
else
if(cta[0]>=d.getFullYear()&&cta[1]>=d.getMonth()&&
gta[2]<d.getDay())
{
    alert("Bu tarih gecti Gun olarak !!!!")

}

else{
    alert("Dogru Bir tarih Sectiniz");
}



// 







}


function Send() // Her Hangi bir alan bos ise uyari 
{
    var add = document.getElementById("add").value;
    var eposta = document.getElementById("eposta").value;
    var tel  = document.getElementById("telfon").value;
    var gt = document.getElementById("gt").value;
    var ct = document.getElementById("ct").value;
    
   
    
if(add===''||eposta===''||Number(tel)===0||gt===''||ct==='')
{
    alert("boş bir Alan Bırkamazsınız !!!!");
}
else{
    alert("Mesajınız gönderildi !!!!");
}


}