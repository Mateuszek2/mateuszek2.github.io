function sprawdz()
{
var a=document.getElementById("pole").value;
if(a>0) {document.getElementById("wynik").innerHTML = "LICZBA JEST DODATNIA";}
else if(a==0) {document.getElementById("wynik").innerHTML = "ZERO";}
else if(a<0) {document.getElementById("wynik").innerHTML = "LICZBA JEST UJEMNA";}
else {document.getElementById("wynik").innerHTML = "TO NIE JEST LICZBA";}
}
