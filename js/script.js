// Fungsi untuk menghitung BMI berdasarkan berat badan dan tinggi badan
function calculateBMI(weight, height) {
    height = height / 100; // Konversi tinggi badan dari cm ke m
    if (height > 0) { // Mencegah pembagian dengan nol
        return weight / (height * height); // Rumus BMI: berat badan (kg) / (tinggi badan (m) * tinggi badan (m))
    } else {
        return 0;
    }
}

// Fungsi untuk menampilkan hasil BMI dan kategori berat badan
document.addEventListener('DOMContentLoaded', function() { // Menunggu dokumen selesai dimuat
    const form = document.getElementById('form'); // Mengambil elemen form
    const resultBmi = document.getElementById('result-bmi'); // Mengambil elemen result-bmi
    const resultKategori = document.getElementById('result-kategori'); // Mengambil elemen result-kategori
    const resultHeader = document.getElementById('result-header'); // Mengambil elemen result-header
    const infoHasil = document.getElementById('info-hasil'); // Mengambil elemen info-hasil
    const bmiDescription = document.getElementById('bmi-description'); // Mengambil elemen bmi-description

    form.addEventListener('submit', function(event) { // Menambahkan event submit pada form
        event.preventDefault(); // Mencegah pengiriman form secara default (refresh halaman)
        const beratBadan = parseFloat(document.getElementById('input-berat-badan').value); // Mengambil nilai berat badan dari input
        const tinggiBadan = parseFloat(document.getElementById('input-tinggi-badan').value); // Mengambil nilai tinggi badan dari input

        const bmi = calculateBMI(beratBadan, tinggiBadan); // Menghitung BMI
        resultBmi.textContent = bmi.toFixed(2); // Menampilkan hasil BMI dengan 2 angka di belakang koma

        // Menampilkan kategori berat badan berdasarkan hasil BMI
        if (bmi < 18.5) { 
            resultKategori.textContent = 'Kekurangan berat badan';
            resultHeader.textContent = 'Kekurangan berat badan';
            infoHasil.textContent = 'Hasil BMI di antara 0 dan 18.4';
            bmiDescription.innerHTML = 'Anda mungkin memiliki berat badan kurang. Disarankan untuk berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan saran yang tepat. <br>Kekurangan berat badan dapat menyebabkan berbagai masalah kesehatan seperti kekurangan gizi, sistem kekebalan tubuh yang lemah, dan masalah perkembangan pada anak-anak.';
        } else if (bmi < 25) {
            resultKategori.textContent = 'Berat badan normal';
            resultHeader.textContent = 'Berat badan normal';
            infoHasil.textContent = 'Hasil BMI di antara 18.5 dan 24.9';
            bmiDescription.innerHTML = 'Anda memiliki berat badan normal. Pertahankan pola makan dan gaya hidup sehat untuk menjaga berat badan Anda. <br>Memiliki berat badan normal dapat mengurangi risiko berbagai penyakit kronis seperti penyakit jantung, diabetes, dan tekanan darah tinggi.';
        } else if (bmi < 30) {
            resultKategori.textContent = 'Kelebihan berat badan';
            resultHeader.textContent = 'Kelebihan berat badan';
            infoHasil.textContent = 'Hasil BMI di antara 25.0 dan 29.9';
            bmiDescription.innerHTML = 'Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. <br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal. Kelebihan berat badan dapat meningkatkan risiko berbagai masalah kesehatan seperti penyakit jantung, diabetes tipe 2, dan tekanan darah tinggi.';
        } else {
            resultKategori.textContent = 'Obesitas';
            resultHeader.textContent = 'Obesitas';
            infoHasil.textContent = 'Hasil BMI di atas 30.0';
            bmiDescription.innerHTML = 'Anda berada dalam kategori obesitas. Disarankan untuk segera berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan penanganan yang tepat. <br>Obesitas dapat menyebabkan berbagai masalah kesehatan serius seperti penyakit jantung, diabetes tipe 2, tekanan darah tinggi, dan masalah pernapasan. Penurunan berat badan yang sehat dan berkelanjutan dapat membantu mengurangi risiko ini.';
        }
    });

    // Fungsi untuk mereset form dan hasil BMI
    form.querySelector('.bg-black.reset').addEventListener('click', function() { // Menambahkan event click pada tombol reset
        form.reset(); // Mereset form
        // Mengatur ulang hasil BMI dan kategori berat badan sehingga menjadi sesuai dengan default
        resultBmi.textContent = '0';
        resultKategori.textContent = 'Silakan mengisi data dahulu';
        resultHeader.textContent = 'Hasil';
        infoHasil.textContent = 'Informasi Hasil Anda';
        bmiDescription.innerHTML = 'Hasil BMI dapat digunakan untuk menentukan apakah Anda memiliki berat badan ideal atau tidak. Lakukan pengisian data lalu tekan tombol "Hitung BMI". Jika sudah, silahkan lihat hasil BMI Anda di sini. <br>Jika Anda memiliki BMI di bawah 18,5, Anda mungkin memiliki berat badan kurang. Jika Anda memiliki BMI di atas 25, Anda mungkin memiliki berat badan lebih. Jika Anda memiliki BMI di atas 30, Anda mungkin memiliki obesitas.';
    });
});
