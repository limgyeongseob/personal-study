let Link = {
  setColor : function(color){
   let alist = document.querySelectorAll('a');
   let i = 0;
   while(i < alist.length){
     alist[i].style.color = color;
     i = i + 1;
     }
 
  }
}


let Body = {
  setColor : function(color){
   document.querySelector('body').style.color = color; 
  
  },
  setBackgroundColor : function(color){
   document.querySelector('body').style.backgroundColor = color;
  
  }
}


function nightDay(self){
  let target = document.querySelector('body');
  if(self.value === '야간'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = '주간';

    Link.setColor('powderblue');
   
}
  else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = '야간';

    Link.setColor('blue');

  }
}