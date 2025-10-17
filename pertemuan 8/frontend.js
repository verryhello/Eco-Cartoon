// kalkulator
function calculateValue() {
  const cartonPrice = 500;
  const carton = document.getElementById("kartoninput").value;
  const total = carton * cartonPrice;

  if (carton > 0) {
    document.getElementById(
      "resultText"
    ).innerText = `${carton} karton = Rp ${total.toLocaleString("id-ID")}`;
  } else {
    document.getElementById("resultText").innerText =
      "Masukkan jumlah karton dengan benar!";
  }
}
