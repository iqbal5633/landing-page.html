function wa() {
  let nomor = "6281271617785"; // GANTI NOMOR WA KAMU
  let pesan = "Halo, saya mau bertanya/bikin jasa pembuatan website";
  window.open(`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`, "_blank");
