/*
Esse código recebe um objeto e usa a 
função 'seal' pra impedir que possam 
ser adicionadas novas propriedades ao obj.
*/

function signYourName(obj) {
  
    Object.seal(obj);
    
    obj.yourSignature = "Whatever";
	obj.spouseSignature = "Nice Try"
  return obj;
}