var katzDeliLine=[];
function takeANumber(katzDeliLine,newName){
  katzDeliLine.push(newName);
 var pos=katzDeliLine.length+1;
 return `${newName},you are ${pos}th in line`;
  
}
function nowServing(){
  if(katzDeliLine.length===0){
    return "There is nobody watiting to be served";
  }else{
    
  }
}