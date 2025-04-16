const soNgauNhien = Math.floor(Math.random() * 10) + 1;
function doanSo() {
  const nhap = parseInt(document.getElementById("nguoiDoan").value);
  const thongBao = document.getElementById("thongBao");
  if (isNaN(nhap) || nhap < 1 || nhap > 10) {
    thongBao.innerHTML = "Vui lòng nhập số từ 1 đến 10!";
    return;
  }
  if (nhap === soNgauNhien) {
    thongBao.innerHTML = `Chính xác! Bạn đã đoán đúng số <strong>${soNgauNhien}</strong>`;
    document.getElementById("nguoiDoan").disabled = true;
  } else {
    thongBao.innerHTML = "Sai rồi! Thử lại nhé!";
  }
}
