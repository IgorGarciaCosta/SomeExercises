var valor = 89;
var v100, v50, v20, v10, v5, v2, v1 = 0;

var funcao=(valor)=>{
  v100 = parseInt(valor/100);
  var v100Decimal = ((valor/100)-v100)*100
  
  
  v50 = parseInt(v100Decimal/50);
  var v50Decimal = ((v100Decimal/50)-v50)//0.78
  var porcent50 = 50*v50Decimal;//39


  v20 = parseInt(porcent50/20);
  var v20Decimal = ((porcent50/20)-v20)//0.95
  var porcent20  = 20*v20Decimal;//19

  
  v10 = parseInt(porcent20/10);
  var v10Decimal = ((porcent20/10)-v10)//0.95
  var porcent10  =10*v10Decimal;//19
  
  
  v5 = parseInt(porcent10/5);
  var v5Decimal = ((porcent10/5)-v5)//0.9
  var porcent5  =5*v5Decimal;//4.5
  
  
  v2 = parseInt(porcent5/2);
  var v2Decimal = ((porcent5/2)-v2)//0.25
  var porcent2 =2*v2Decimal;//0.5
  
  
  v1 = parseInt(porcent2/1);
  var v1Decimal = ((porcent2/1)-v1);//0.95
  var porcent1 =1*v1Decimal;//19
  
  console.log(v100+' nota(s) de R$100,00');
  console.log(v50+' nota(s) de R$50,00');
  console.log(v20+' nota(s) de R$20,00');
  console.log(v10+' nota(s) de R$10,00');
  console.log(v5+' nota(s) de R$5,00');
  console.log(v2+' nota(s) de R$2,00');
  console.log(v1+' nota(s) de R$1,00');
  
}

//saida final
console.log(valor);
funcao(valor);