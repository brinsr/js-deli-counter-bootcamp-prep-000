var katzDeliLine=[];
function takeANumber(katzDeliLine,newName){
  katzDeliLine.push(newName);
 var pos=katzDeliLine.length;
 return `Welcome, ${newName}. You are number ${pos} in line.`;
  
}
function nowServing(){
  if(katzDeliLine.length===0){
    return "There is nobody watiting to be served";
  }else{
    return katzDeliLine.shift();
  }
}
function currentLine(){
  if(katzDeliLine.length===0){
    
  return "The line is currently empty.";
} else {
   
     for(var i=0;i<katzDeliLine.length;i++){
         var addTo= `${i+1}.${katzDeliLine[i]},`;
        }
  return "The line is currently:"+addTo;
}
}