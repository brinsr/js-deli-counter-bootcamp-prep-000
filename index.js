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
    var personNowServing=katzDeliLine.shift();
    return `Currently serving ${personNowServing}`;
  }
}
function currentLine(katzDeliLine){lea
  if(katzDeliLine.length===0){
    
  return "The line is currently empty.";
} else {
     var addTo="";
     for(var i=0;i<katzDeliLine.length-1;i++){
          addTo+= `${i+1}. ${katzDeliLine[i]}, `;
        }
        addTo+=`${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`;
  return "The line is currently: "+addTo;
}
}