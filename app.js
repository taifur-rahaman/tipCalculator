const billAmount = document.getElementById("billAmount");
const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  bill = billAmount.value;
  if (bill >= 50 && bill <= 300) {
    tipAmount.value = "15%";
    totalBill = Number(bill) + 0.15 * bill;
    totalAmount.value = totalBill;
  } else if (bill < 50 || bill > 300) {
    tipAmount.value = "20%";
    totalBill = Number(bill) + 0.2 * bill;
    totalAmount.value = totalBill;
  }
});
