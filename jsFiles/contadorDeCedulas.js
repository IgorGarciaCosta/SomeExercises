var valor = 503;
var v100, v50, v20, v10, v5, v2, v1 = 0;

var funcao=(valor)=>{
  v100 = parseInt(valor/100);//112
  var v100Decimal = ((valor/100)-v100)*100//57
  
  
  v50 = parseInt(v100Decimal/50);//1
  var v50Decimal = ((v100Decimal/50)-v50)//0.14
  var porcent50 = 50*v50Decimal;//7
  porcent50 = Math.round(porcent50)


  v20 = parseInt(porcent50/20);//0
  var v20Decimal = ((porcent50/20)-v20)//0.35
  var porcent20  = 20*v20Decimal;//7
  porcent20 = Math.round(porcent20)

  
  v10 = parseInt(porcent20/10);//0
  var v10Decimal = ((porcent20/10)-v10)//0.7
  var porcent10  =10*v10Decimal;//7
  porcent10 = Math.round(porcent10)
  
  
  v5 = parseInt(porcent10/5);//1
  var v5Decimal = ((porcent10/5)-v5)//0.4
  var porcent5  =5*v5Decimal;//2
  console.log('porcent5: '+porcent5)
  porcent5 = Math.round(porcent5)
  console.log('porcent5: '+porcent5)
  //if(porcent5>1.9&&porcent5<2) porcent5 = 2;
  
  
  v2 = parseInt(porcent5/2);//1
  console.log('v2: '+v2)
  var v2Decimal = ((porcent5/2)-v2)//0
  var porcent2 =2*v2Decimal;//0
  console.log('porcent2: '+porcent2)
  porcent5 = Math.round(porcent5)
  console.log('porcent2: '+porcent2)
  //porcent2>0.9?porcent2 = 1:porcent2=0;
  
  
  porcent2<1?v1=0:v1=1
  // v1 = parseInt(porcent2/1);//1
  // var v1Decimal = ((porcent2/1)-v1);//
  // var porcent1 =1*v1Decimal;//19
  
  var qntid = []
  qntid = [v100, v50, v20, v10, v5,v2, v1]
  
  var notas = []
  notas = [100,50,20,10,5,2,1];
  
  console.log(valor);
  //console.log(qntid);
  //console.log(notas);
  for(let i=0; i<notas.length; i++){
      console.log(qntid[i] + " nota(s) de R$ " + notas[i] + ",00 ");
  }
  
}

//saida final
console.log(valor);
funcao(valor);