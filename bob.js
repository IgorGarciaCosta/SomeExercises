

//var message = 'sss?'

const isUpperCase=(str)=>{//returna true ou false
  var msg = [];
  msg = str.split('');
  return (/^[^a-z]*$/).test(msg);
}

const isAQuestion=(str)=>{
  var msg = [];
  msg = str.split('');
  for(let i=0; i<msg.length;i++){
    if(msg[i]==='?') return true
  }
  return false;
}

const questionUpperCase=(str)=>{
  var msg = [];
  msg = str.split('');

  if((/^[^a-z]*$/).test(msg)){
    for(let i=0; i<msg.length;i++){
      if(msg[i]==='?') return true
    }
    return false;
  }
}

var initialQuestion=()=>{
  var digitedText =document.getElementById("frm").value;
  document.getElementById("resposta").innerHTML = hey(digitedText);
  //alert(hey(digitedText))
}


hey = (message) => {
  if(message=='') return 'De boa então.'

  if(questionUpperCase(message)) return 'Calma que eu sei o que faço.'


  if(isUpperCase(message)){//checa se está tudo maiúsculo
    let mens = []
    mens = message.split('');
    if(!mens.some(isNaN)){//se houver apenas números
      
    }
    return 'Calma aí, meu bom';
  }


  if(isAQuestion(message)){//checa se há interrogação
    return 'Claro.'
  }


  else return 'Tanto faz.'
  
};


