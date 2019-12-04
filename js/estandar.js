var n3 = document.getElementById('myBtn');
var n2 = document.getElementById('myBtn2');
if (n2) {
   n2.addEventListener('click', display2x2);
}
function display2x2() {
   let p12 = document.getElementById("p12").value
   let p21 = document.getElementById("p1s2").value

   document.getElementById("resultado11").value=N2[0]
   document.getElementById("resultado22").value=N2[1]

   var N2=estadar(p12,p21);
}
if(n3){
  n3.addEventListener('click', display3x3);
}
function display3x3(){
   let p1s1 = document.getElementById("p1s1").value
   let p1s2 = document.getElementById("p1s2").value
   let p1s3 = document.getElementById("p1s3").value
   let p2s1 = document.getElementById("p2s1").value
   let p2s2 = document.getElementById("p2s2").value
   let p2s3 = document.getElementById("p2s3").value

   
    var N3 = estable3N(p1s1,p1s2,p1s3,p2s1,p2s2,p2s3)
   document.getElementById("resultado1").value=N3[0]
   document.getElementById("resultado2").value=N3[1]
   document.getElementById("resultado3").value=N3[2]
   console.log(N3);
   

   
   
}
function estadar(p12,p21){
var pr12=1
//var pr21=1
var fin=0;
var rfin=1; 

// multiplicacion para despues eliminar a un exponente
pr12*=p12;
//var resultado21=pr21*p12
rfin*=p12;

var resultado11=pr12+=p12;
//pr21-=pr21;
var resutaladoFin=rfin+=fin;

var s1=resutaladoFin/resultado11;
var s2=s1-1;

return `S1: ${s1}, S2${s2}`;
}
//test 
 function estable3N(p1s1,p1s2,p1s3,p2s1,p2s2,p2s3){
     //s1 = ps2+ps3=(ps1+ps1)
     //s2 = ps1+ps3=(ps2+ps2)
     //s3 = ps1+ps2=(ps3+ps3)

     //la suma de los dos
     p1s1+=p1s1;
     p2s2+=p2s2;
    //hacer el promebla igual a cero
     p1s1*=-1;
     p2s2*=-1;
     var prs1=1;
     var prs2=1;
     var prs3=1;
     var rfin=1; 
     
    
     //===================================
     //             S1
     //====================================
    //multiplicacion para despues eliminar a un exponente 
     prs3*=p1s2;
     prs2*=p1s2;
     prs1*=p1s2
     rfin=rfin*(p1s2*-1);
     
     //eliminar exponentes
     p1s2-=prs2;
     p1s3-=prs3;
     p1s1-=prs1;
        var s1=rfin/p1s1;

     //===================================
     //             S2
     //====================================
     prs1=1;
     prs2=1;
     prs3=1;
     rfin=1;
     //multiplicacion para eliminar exponentes
     prs3*=p2s1;
     prs2*=p2s1;
     prs1*=p2s1;
     rfin=rfin*(p2s1*-1);
     //eliminar exponentes
     p2s2-=prs2;
     p2s3-=prs3;
     p2s1-=prs1;
    
     var s2=rfin/p2s2;
     var s3=1-(s1+s2);
     console.log(s1);
     console.log(s2);
     console.log(s3);
     
     
     
     var resultado=[s1,s2,s3]
     
     return resultado;
}


