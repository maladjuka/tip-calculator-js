

function Percent(x){

    let bill=parseFloat(document.getElementById('bill').value);
    let amt=parseFloat((x/100)*bill);
  
  let pplNo=document.getElementById('pplNo');
  
  let ttp=document.getElementById('t-p-p');
  
  let ttp1=parseFloat(amt/pplNo.value);
    
    ttp.innerHTML=("$"+ttp1.toFixed(2));
    let totalPP=document.getElementById('total-p-p');
    totalPP1=((bill+amt)/pplNo.value);
  
    console.log(totalPP1)
    totalPP.innerHTML=('$'+ totalPP1.toFixed(2))
  
  
    if(pplNo.value==0|| pplNo.value==null){
  
      pplNo.style.border="1px solid red";
      document.getElementById('ErrMsg').style.display='inline';
      ttp.innerHTML=("$ 0.00");
      totalPP.innerHTML=('$ 0.00')
    }else{
      pplNo.style.border="none";
      document.getElementById('ErrMsg').style.display='none';
    }
      }
  
      function Reset(){
        location.reload();
  
      }
  
      
    
  
  