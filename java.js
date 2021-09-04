  function fun(){
let card=[
    {belgi:'&spades;', raqam:'A'},
    //{belgi:'&spades;', raqam:'2'},
    //{belgi:'&spades;', raqam:'3'},
    //{belgi:'&spades;', raqam:'4'},
    //{belgi:'&spades;', raqam:'5'},
    {belgi:'&spades;', raqam:'6'},
    {belgi:'&spades;', raqam:'7'},
    {belgi:'&spades;', raqam:'8'},
    {belgi:'&spades;', raqam:'9'},
    {belgi:'&spades;', raqam:'10'},
    {belgi:'&spades;', raqam:'J'},
    {belgi:'&spades;', raqam:'Q'},
    {belgi:'&spades;', raqam:'K'},
    {belgi:'&clubs;', raqam:'A'},
    //{belgi:'&clubs;', raqam:'2'},
    //{belgi:'&clubs;', raqam:'3'},
    //{belgi:'&clubs;', raqam:'4'},
    //{belgi:'&clubs;', raqam:'5'},
    {belgi:'&clubs;', raqam:'6'},
    {belgi:'&clubs;', raqam:'7'},
    {belgi:'&clubs;', raqam:'8'},
    {belgi:'&clubs;', raqam:'9'},
    {belgi:'&clubs;', raqam:'10'},
    {belgi:'&clubs;', raqam:'J'},
    {belgi:'&clubs;', raqam:'Q'},
    {belgi:'&clubs;', raqam:'K'},
    {belgi:'<span style=color:red>&hearts;</span>', raqam:'A'},
    //{belgi:'<span style=color:red>&hearts;</span>', raqam:'2'},
    //{belgi:'<span style=color:red>&hearts;</span>', raqam:'3'},
    //{belgi:'<span style=color:red>&hearts;</span>', raqam:'4'},
    //{belgi:'<span style=color:red>&hearts;</span>', raqam:'5'},
    {belgi:'<span style=color:red>&hearts;</span>', raqam:'6'},
    {belgi:'<span style=color:red>&hearts;</span>', raqam:'7'},
    {belgi:'<span style=color:red>&hearts;</span>', raqam:'8'},
    {belgi:'<span style=color:red>&hearts;</span>', raqam:'9'},
    {belgi:'<span style=color:red>&hearts;</span>', raqam:'10'},
    {belgi:'<span style=color:red>&hearts;</span>', raqam:'J'},
    {belgi:'<span style=color:red>&hearts;</span>', raqam:'Q'},
    {belgi:'<span style=color:red>&hearts;</span>', raqam:'K'},
    {belgi:'<span style=color:red>&diams;</span>', raqam:'A'},
    //{belgi:'<span style=color:red>&diams;</span>', raqam:'2'},
    //{belgi:'<span style=color:red>&diams;</span>', raqam:'3'},
    //{belgi:'<span style=color:red>&diams;</span>', raqam:'4'},
    //{belgi:'<span style=color:red>&diams;</span>', raqam:'5'},
    {belgi:'<span style=color:red>&diams;</span>', raqam:'6'},
    {belgi:'<span style=color:red>&diams;</span>', raqam:'7'},
    {belgi:'<span style=color:red>&diams;</span>', raqam:'8'},
    {belgi:'<span style=color:red>&diams;</span>', raqam:'9'},
    {belgi:'<span style=color:red>&diams;</span>', raqam:'10'},
    {belgi:'<span style=color:red>&diams;</span>', raqam:'J'},
    {belgi:'<span style=color:red>&diams;</span>', raqam:'Q'},
    {belgi:'<span style=color:red>&diams;</span>', raqam:'K'}
    ]
    
    //document.write("<div class='card'>")
    //document.write("<div class='tepa'>"+card[5].raqam+"<br>"+card[5].belgi+"</div>")
    //document.write("<div class='orta'>"+card[5].belgi+"</div>")
    //document.write("<div class='past'>"+card[5].raqam+"<br>"+card[5].belgi+"</div>")
    //document.write("</div>")
  {
    var a1=Math.round(Math.random()*35);  
    var a2=Math.round(Math.random()*35); 
    var a3=Math.round(Math.random()*35); 
      if(a1==a2 || a2==a3 || a1==a3){
          fun();
      } else {
            document.querySelector('.card1 .tepa').innerHTML=card[a1].raqam+"<br>"+card[a1].belgi;
            document.querySelector('.card1 .orta').innerHTML=card[a1].belgi;
            document.querySelector('.card1 .past').innerHTML=card[a1].raqam+"<br>"+card[a1].belgi;

            document.querySelector('.card2 .tepa').innerHTML=card[a2].raqam+"<br>"+card[a2].belgi;
            document.querySelector('.card2 .orta').innerHTML=card[a2].belgi;
            document.querySelector('.card2 .past').innerHTML=card[a2].raqam+"<br>"+card[a2].belgi;

            document.querySelector('.card3 .tepa').innerHTML=card[a3].raqam+"<br>"+card[a3].belgi;
            document.querySelector('.card3 .orta').innerHTML=card[a3].belgi;
            document.querySelector('.card3 .past').innerHTML=card[a3].raqam+"<br>"+card[a3].belgi;
       var r1=a1;
       var r2=a1;
       var r3=a3;
       hisob(r1,r2,r3);
   }
 }
}

function hisob(r1,r2,r3){
    let card=[
        {belgi:'&spades;', raqam:'10'},
        //{belgi:'&spades;', raqam:'2'},
        //{belgi:'&spades;', raqam:'3'},
        //{belgi:'&spades;', raqam:'4'},
        //{belgi:'&spades;', raqam:'5'},
        {belgi:'&spades;', raqam:'6'},
        {belgi:'&spades;', raqam:'7'},
        {belgi:'&spades;', raqam:'8'},
        {belgi:'&spades;', raqam:'9'},
        {belgi:'&spades;', raqam:'10'},
        {belgi:'&spades;', raqam:'10'},
        {belgi:'&spades;', raqam:'10'},
        {belgi:'&spades;', raqam:'10'},
        {belgi:'&clubs;', raqam:'11'},
        //{belgi:'&clubs;', raqam:'2'},
        //{belgi:'&clubs;', raqam:'3'},
        //{belgi:'&clubs;', raqam:'4'},
        //{belgi:'&clubs;', raqam:'5'},
        {belgi:'&clubs;', raqam:'6'},
        {belgi:'&clubs;', raqam:'7'},
        {belgi:'&clubs;', raqam:'8'},
        {belgi:'&clubs;', raqam:'9'},
        {belgi:'&clubs;', raqam:'10'},
        {belgi:'&clubs;', raqam:'10'},
        {belgi:'&clubs;', raqam:'10'},
        {belgi:'&clubs;', raqam:'10'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'11'},
        //{belgi:'<span style=color:red>&hearts;</span>', raqam:'2'},
        //{belgi:'<span style=color:red>&hearts;</span>', raqam:'3'},
        //{belgi:'<span style=color:red>&hearts;</span>', raqam:'4'},
        //{belgi:'<span style=color:red>&hearts;</span>', raqam:'5'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'6'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'7'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'8'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'9'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'11'},
        //{belgi:'<span style=color:red>&diams;</span>', raqam:'2'},
        //{belgi:'<span style=color:red>&diams;</span>', raqam:'3'},
        //{belgi:'<span style=color:red>&diams;</span>', raqam:'4'},
        //{belgi:'<span style=color:red>&diams;</span>', raqam:'5'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'6'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'7'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'8'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'9'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'10'}
        ]
        let qarga=0, gisht=0, yurak=0, chilim=0;
       let aa=[r1,r2,r3];
       {
        for(var j=0; j<3; j++){
          for(var i=0; i<=35; i++){
              if(aa[j]==i){
                if('&spades;'==card[i].belgi){
                  qarga=qarga+Number(card[i].raqam);
                } else if('&clubs;'==card[i].belgi){
                  gisht=gisht+Number(card[i].raqam);
                } else if('<span style=color:red>&hearts;</span>'==card[i].belgi){
                  yurak=yurak+Number(card[i].raqam);
                }
                else if('<span style=color:red>&diams;</span>'==card[i].belgi){
                  chilim=chilim+Number(card[i].raqam);
                }
              }
          }  
      }
      var ttt=0,uuu=0;
      if(qarga>gisht) {
        ttt=qarga;
      } else {
        ttt=gisht;
      }

      if(yurak>chilim){
        uuu=yurak;
      } else {
        uuu=chilim;
      }

      if(ttt>uuu){
        document.getElementById('res').innerHTML=ttt;
      } else {
        document.getElementById('res').innerHTML=uuu;
      }
        
      }
}

function fun1(){
    let card=[
        {belgi:'&spades;', raqam:'A'},
        //{belgi:'&spades;', raqam:'2'},
        //{belgi:'&spades;', raqam:'3'},
        //{belgi:'&spades;', raqam:'4'},
        //{belgi:'&spades;', raqam:'5'},
        {belgi:'&spades;', raqam:'6'},
        {belgi:'&spades;', raqam:'7'},
        {belgi:'&spades;', raqam:'8'},
        {belgi:'&spades;', raqam:'9'},
        {belgi:'&spades;', raqam:'10'},
        {belgi:'&spades;', raqam:'J'},
        {belgi:'&spades;', raqam:'Q'},
        {belgi:'&spades;', raqam:'K'},
        {belgi:'&clubs;', raqam:'A'},
        //{belgi:'&clubs;', raqam:'2'},
        //{belgi:'&clubs;', raqam:'3'},
        //{belgi:'&clubs;', raqam:'4'},
        //{belgi:'&clubs;', raqam:'5'},
        {belgi:'&clubs;', raqam:'6'},
        {belgi:'&clubs;', raqam:'7'},
        {belgi:'&clubs;', raqam:'8'},
        {belgi:'&clubs;', raqam:'9'},
        {belgi:'&clubs;', raqam:'10'},
        {belgi:'&clubs;', raqam:'J'},
        {belgi:'&clubs;', raqam:'Q'},
        {belgi:'&clubs;', raqam:'K'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'A'},
        //{belgi:'<span style=color:red>&hearts;</span>', raqam:'2'},
        //{belgi:'<span style=color:red>&hearts;</span>', raqam:'3'},
        //{belgi:'<span style=color:red>&hearts;</span>', raqam:'4'},
        //{belgi:'<span style=color:red>&hearts;</span>', raqam:'5'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'6'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'7'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'8'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'9'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'J'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'Q'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'K'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'A'},
        //{belgi:'<span style=color:red>&diams;</span>', raqam:'2'},
        //{belgi:'<span style=color:red>&diams;</span>', raqam:'3'},
        //{belgi:'<span style=color:red>&diams;</span>', raqam:'4'},
        //{belgi:'<span style=color:red>&diams;</span>', raqam:'5'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'6'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'7'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'8'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'9'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'J'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'Q'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'K'}
        ]
{
    var a4=Math.round(Math.random()*35);  
    var a5=Math.round(Math.random()*35); 
    var a6=Math.round(Math.random()*35); 
      if(a4==a5 || a5==a6 || a4==a6){
          fun();
      } else {
            document.querySelector('.card4 .tepa').innerHTML=card[a4].raqam+"<br>"+card[a4].belgi;
            document.querySelector('.card4 .orta').innerHTML=card[a4].belgi;
            document.querySelector('.card4 .past').innerHTML=card[a4].raqam+"<br>"+card[a4].belgi;

            document.querySelector('.card5 .tepa').innerHTML=card[a5].raqam+"<br>"+card[a5].belgi;
            document.querySelector('.card5 .orta').innerHTML=card[a5].belgi;
            document.querySelector('.card5 .past').innerHTML=card[a5].raqam+"<br>"+card[a5].belgi;

            document.querySelector('.card6 .tepa').innerHTML=card[a6].raqam+"<br>"+card[a6].belgi;
            document.querySelector('.card6 .orta').innerHTML=card[a6].belgi;
            document.querySelector('.card6 .past').innerHTML=card[a6].raqam+"<br>"+card[a6].belgi;
            var r4=a4;
            var r5=a5;
            var r6=a6;
            hisob1(r4,r5,r6);
   }
 }
}
function hisob1(r4,r5,r6){
    let card=[
        {belgi:'&spades;', raqam:'10'},
        //{belgi:'&spades;', raqam:'2'},
        //{belgi:'&spades;', raqam:'3'},
        //{belgi:'&spades;', raqam:'4'},
        //{belgi:'&spades;', raqam:'5'},
        {belgi:'&spades;', raqam:'6'},
        {belgi:'&spades;', raqam:'7'},
        {belgi:'&spades;', raqam:'8'},
        {belgi:'&spades;', raqam:'9'},
        {belgi:'&spades;', raqam:'10'},
        {belgi:'&spades;', raqam:'10'},
        {belgi:'&spades;', raqam:'10'},
        {belgi:'&spades;', raqam:'10'},
        {belgi:'&clubs;', raqam:'11'},
        //{belgi:'&clubs;', raqam:'2'},
        //{belgi:'&clubs;', raqam:'3'},
        //{belgi:'&clubs;', raqam:'4'},
        //{belgi:'&clubs;', raqam:'5'},
        {belgi:'&clubs;', raqam:'6'},
        {belgi:'&clubs;', raqam:'7'},
        {belgi:'&clubs;', raqam:'8'},
        {belgi:'&clubs;', raqam:'9'},
        {belgi:'&clubs;', raqam:'10'},
        {belgi:'&clubs;', raqam:'10'},
        {belgi:'&clubs;', raqam:'10'},
        {belgi:'&clubs;', raqam:'10'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'11'},
        //{belgi:'<span style=color:red>&hearts;</span>', raqam:'2'},
        //{belgi:'<span style=color:red>&hearts;</span>', raqam:'3'},
        //{belgi:'<span style=color:red>&hearts;</span>', raqam:'4'},
        //{belgi:'<span style=color:red>&hearts;</span>', raqam:'5'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'6'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'7'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'8'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'9'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&hearts;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'11'},
        //{belgi:'<span style=color:red>&diams;</span>', raqam:'2'},
        //{belgi:'<span style=color:red>&diams;</span>', raqam:'3'},
        //{belgi:'<span style=color:red>&diams;</span>', raqam:'4'},
        //{belgi:'<span style=color:red>&diams;</span>', raqam:'5'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'6'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'7'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'8'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'9'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'10'},
        {belgi:'<span style=color:red>&diams;</span>', raqam:'10'}
        ]
        var qarga=0, gisht=0, yurak=0, chilim=0;
       var aa=[r4,r5,r6];
       {
        for(var j=0; j<3; j++){
          for(var i=0; i<=35; i++){
              if(aa[j]==i){
                if('&spades;'==card[i].belgi){
                  qarga=qarga+Number(card[i].raqam);
                } else if('&clubs;'==card[i].belgi){
                  gisht=gisht+Number(card[i].raqam);
                } else if('<span style=color:red>&hearts;</span>'==card[i].belgi){
                  yurak=yurak+Number(card[i].raqam);
                }
                else if('<span style=color:red>&diams;</span>'==card[i].belgi){
                  chilim=chilim+Number(card[i].raqam);
                }
              }
          }  
      }
      var ttt=0,uuu=0;
      if(qarga>gisht) {
        ttt=qarga;
      } else {
        ttt=gisht;
      }

      if(yurak>chilim){
        uuu=yurak;
      } else {
        uuu=chilim;
      }

      if(ttt>uuu){
        document.getElementById('res1').innerHTML=ttt;
      } else {
        document.getElementById('res1').innerHTML=uuu;
      }
        
      }
}
function natija(){
    let a=document.getElementById('res').innerHTML;
    let b=document.getElementById('res1').innerHTML;
    Number(a),Number(b);
    if(Number(a)=='-' || Number(b)=='-'){

    }else if(Number(a)>Number(b)){
        document.getElementById('natija').innerHTML=" Shoxrux win";

    }else if(Number(a)<Number(b)){
        document.getElementById('natija').innerHTML=" Computer win";
    }else if(Number(a)==Number(b)){
        document.getElementById('natija').innerHTML=" Draw";
    }
}