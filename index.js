var katzDeliLine=[];
function takeANumber(katzDeliLine,newName){
  katzDeliLine.push(newName);
 var pos=katzDeliLine.length;
 return `Welcome, ${newName}. You are number ${pos} in line.`;
  
}
function nowServing(){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!";
  }else{
    return `Currently serving ${katzDeliLine[0]}`;
  }
}
function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    
  return "The line is currently empty.";
} else {
     var addTo="";
     for(var i=0;i<katzDeliLine.length;i++){
          addTo+= `${i+1}.${katzDeliLine[i]},`;
        }
  return "The line is currently:"+addTo;
}
}