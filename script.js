function zakatpayment(){
  let a = document.getElementById("revenue").value;
  let b = document.getElementById("expenses").value;

  let netProfit = a-b;
  var totalNetProfit = netProfit.toFixed(2); //two decimal number
  document.getElementById("profit").value = totalNetProfit;

  if (netProfit >= 15762){
    let zakat = (netProfit*2.5)/100;
    var totalZakat = zakat.toFixed(2); //two decimal number
    document.getElementById("pay").value = totalZakat;
  }
}

document.getElementById("calculate").addEventListener("click", zakatpayment);
