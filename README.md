Penjelasan Kode:

Kode ini menggunakan objek regexMap untuk mencocokkan setiap kata dalam pesan dengan pola ekspedisi yang sesuai.

Jika nomor resi ditemukan, informasi ekspedisi (nama kurir dan nomor resi) disimpan dalam objek trackingInfo.

Kode keluar dari kedua loop setelah menemukan nomor resi, sehingga tidak perlu mencari lebih lanjut.

Mengembalikan objek JSON yang berisi informasi resi dan ekspedisi, serta API dan isi pesan.
