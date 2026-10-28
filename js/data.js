const PORTFOLIO_DATA = {
  analysis: {
    // ... (BIARKAN BAGIAN PRODUK, MATERI, MEDIA, INSTRUMEN TETAP SAMA SEPERTI SEBELUMNYA) ...
    // (Salin ulang bagian analysis produk, materi, media, instrumen dari kode Anda sebelumnya)
    
    produk: {
      icon: "fa-cubes-stacked",
      title: "Analisis Produk Rancangan Pembelajaran (Modul Ajar)",
      intro: [
        "Pada pertemuan kedua, saya merancang modul ajar <strong>Instalasi Sistem Operasi Linux (Ubuntu) di Virtual Machine</strong> untuk kelas X (4 JP / 180 menit). Saya memakai model <strong>Discovery Learning</strong> dengan pendekatan <strong>Deep Learning, Saintifik, dan Experiential Learning</strong>.",
        "Dimensi profil lulusan yang saya kembangkan adalah <strong>kolaborasi, kemandirian, dan penalaran kritis</strong>. Berbeda dari pertemuan pertama yang berfokus pada konsep, pertemuan ini berbasis praktik mandiri dan dikaitkan dengan proyek \"Agensi Game\" lewat studi kasus <strong>PixelPlay Studio</strong>."
      ],
      pros: [
        "Tujuan pembelajaran, langkah LKPD, kuis, dan asesmen saling selaras.",
        "Enam sintaks Discovery Learning terlihat jelas, dengan waktu per tahap yang rinci.",
        "Praktik mandiri berbasis 14 langkah dengan kotak centang melatih kemandirian dan memudahkan guru memantau kemajuan.",
        "Studi kasus membuat materi terasa kontekstual karena dikaitkan dengan kebutuhan developer.",
        "Kendala umum (misalnya \"VT-x is not available\") sudah diantisipasi."
      ],
      cons: [
        "Identitas modul belum konsisten. Mata pelajaran tertulis \"Dasar Kompetensi Keahlian Sistem Operasi\", sedangkan pertemuan pertama memakai \"Dasar-dasar PPLG\". Lembar instrumen juga masih menyebut \"Pertemuan I\".",
        "Waktu instalasi sangat bergantung pada spesifikasi laptop dan kecepatan unduh ISO, sehingga rawan molor.",
        "Belum ada skenario cadangan jika laptop peserta didik tidak mendukung virtualisasi.",
        "Esai dikerjakan sebagai tugas di luar kelas, sehingga pemahaman hari itu belum sepenuhnya terukur."
      ],
      reflection: "Dari modul ini saya belajar bahwa merancang praktik berarti memikirkan hal teknis sejak awal, seperti spesifikasi perangkat, file instalasi, dan kemungkinan error. Ke depan saya akan menyiapkan rencana cadangan, misalnya kerja berpasangan, serta memeriksa konsistensi identitas dokumen sebelum dipakai.",
      artefacts: [
        { name: "Modul Ajar Pertemuan 2 Instalasi Linux Ubuntu & VM.pdf", type: "pdf", size: "2.4 MB", desc: "Dokumen modul ajar lengkap" }
      ]
    },
    materi: {
      icon: "fa-book",
      title: "Analisis Materi Pembelajaran",
      intro: [
        "Materi mencakup <strong>virtualisasi</strong> (host, guest, hypervisor), alasan developer memakai Linux, <strong>Ubuntu LTS</strong>, langkah instalasi di VirtualBox, verifikasi terminal, dan <strong>Snapshot</strong>.",
        "Urutannya runtut, dari konsep, persiapan, praktik, verifikasi, sampai penerapan lewat studi kasus. Saya juga menyertakan <strong>tabel konfigurasi VM</strong> dan <strong>tips mengatasi kendala</strong> agar peserta didik bisa belajar mandiri."
      ],
      pros: [
        "Materi aplikatif, bahasanya sederhana, dan langsung dipraktikkan.",
        "Peserta didik mengalami sendiri proses instalasi sehingga pemahaman lebih mendalam.",
        "Dilengkapi tabel konfigurasi VM dan tips troubleshooting untuk belajar mandiri."
      ],
      cons: [
        "Penjelasan konsep Linux masih singkat.",
        "Ukuran ISO tidak konsisten: tertulis 4–5 GB di satu dokumen dan 5–6 GB di dokumen lain.",
        "Zona waktu di LKPD tertulis Jakarta (WIB), padahal Banjarmasin berada di WITA seperti tertulis di PPT.",
        "RAM VM di LKPD minimal 2048 MB (ideal 4096 MB), sedangkan PPT menampilkan 4 GB."
      ],
      reflection: "Saya perlu mengecek ulang seluruh perangkat ajar agar datanya seragam dan tidak membingungkan peserta didik.",
      artefacts: [
        { name: "Bahan Ajar_Instalasi Linux Ubuntu_VM.pdf", type: "pdf", size: "3.1 MB", desc: "Materi lengkap virtualisasi & Ubuntu" }
      ]
    },
    media: {
      icon: "fa-photo-film",
      title: "Analisis Media Pembelajaran",
      intro: [
        "<strong>PPT (22 slide)</strong> memiliki desain konsisten, bernuansa teknologi, dan satu slide hanya memuat satu gagasan. Alurnya mengikuti sintaks pembelajaran: tujuan, apersepsi, konsep, persiapan, langkah instalasi, verifikasi, kendala umum, Snapshot, studi kasus, dan kuis.",
        "<strong>Diagram arsitektur Host–VirtualBox–Guest</strong> membantu memvisualisasikan konsep yang abstrak. Slide verifikasi memperluas perintah terminal (<code>uname -r</code>, <code>free -h</code>, <code>df -h</code>) di luar yang tertulis di LKPD.",
        "<strong>LKPD</strong> berisi panduan 14 langkah dengan kotak centang, tips kendala, studi kasus, kuis, dan lembar refleksi. Formatnya mendorong kemandirian dan memudahkan pemantauan."
      ],
      pros: [
        "Desain PPT konsisten, satu slide satu gagasan, bernuansa teknologi.",
        "Diagram arsitektur Host–VirtualBox–Guest memvisualisasikan konsep abstrak.",
        "Slide verifikasi memperluas perintah terminal di luar LKPD.",
        "LKPD mendorong kemandirian dan memudahkan guru memantau kemajuan."
      ],
      cons: [
        "Belum ada tangkapan layar nyata proses instalasi, sehingga peserta didik masih harus membayangkan tampilan tiap langkah.",
        "Belum ada unsur interaktif pada media.",
        "LKPD ukurannya cukup panjang dan kolom bukti (tangkapan layar) belum disediakan khusus."
      ],
      reflection: "Media sudah mendukung pembelajaran, tetapi perlu ditambah visual nyata dan variasi interaktif seperti kuis daring.",
      artefacts: [
        { name: "PPT Instalasi Ubuntu VirtualBox.pdf", type: "pdf", size: "8.2 MB", desc: "Media presentasi utama" },
        { name: "LKPD Pertemuan 2.pdf", type: "pdf", size: "1.9 MB", desc: "Lembar kerja peserta didik" }
      ]
    },
    instrumen: {
      icon: "fa-clipboard-list",
      title: "Instrumen Penilaian dan Analisisnya",
      intro: [
        "Saya menyusun <strong>lima instrumen</strong>: lembar observasi proses, lembar penilaian hasil praktik, rubrik studi kasus, kuis beserta kisi-kisi dan pedoman skor, serta lembar rekapitulasi.",
        "Ada <strong>lima aspek (A1–A5)</strong> berskala <strong>1–4</strong>. Nilai akhir dihitung dari <strong>proses 30%</strong> dan <strong>produk 70%</strong>, lengkap dengan contoh perhitungan, predikat (A–D), dan tindak lanjut berupa pengayaan atau remedial."
      ],
      pros: [
        "Kriteria jelas dan terukur, dengan rubrik berjenjang dan deskriptor di setiap skor.",
        "Menilai pengetahuan, keterampilan, dan sikap sekaligus.",
        "Kisi-kisi kuis memetakan tujuan pembelajaran dan level kognitif (C1–C4).",
        "Ada tindak lanjut yang konkret untuk peserta didik di tiap predikat."
      ],
      cons: [
        "Nilai kuis dan studi kasus terhitung dua kali, yaitu lewat konversi A4 dan lewat Nilai Produk, sehingga bobotnya berpotensi tumpang tindih.",
        "Lembar hasil praktik per peserta didik cukup panjang, sehingga sulit diisi untuk kelas yang besar dalam waktu singkat.",
        "Batas ketuntasan belum diisi (masih menunggu ketentuan sekolah).",
        "Aspek sikap belum dilengkapi catatan perkembangan antar-pertemuan."
      ],
      reflection: "Instrumen ini melatih saya menilai secara objektif. Ke depan saya akan menyederhanakan rumus agar tidak tumpang tindih dan menyiapkan versi ringkas lembar observasi agar lebih praktis dipakai di kelas.",
      artefacts: [
        { name: "Instrumen Penilaian Pertemuan 2 Instalasi Linux.pdf", type: "pdf", size: "1.6 MB", desc: "Instrumen penilaian lengkap" }
      ]
    }
  },

  // ==========================================
  // UPDATE BAGIAN GALERI DOKUMENTASI
  // ==========================================
  gallery: [
    {
      category: "Pembelajaran",
      title: "Pembelajaran 1",
      img: "assets/images/dokumentasi/doc-1.jpeg",
    },
    {
      category: "Pembelajaran",
      title: "Pembelajaran 2",
      img: "assets/images/dokumentasi/doc-2.jpeg",
    },
    {
      category: "Pembelajaran",
      title: "Pembelajaran 3",
      img: "assets/images/dokumentasi/doc-3.jpeg",
    },
    {
      category: "Pembelajaran",
      title: "Pembelajaran 4",
      img: "assets/images/dokumentasi/doc-4.jpeg",
    },
    // Ganti "media" menjadi "hasil-kerja" dan tambahkan array pdfs
    {
      category: "hasil-kerja",
      title: "Kumpulan Hasil Kerja Murid (LKPD)",
      isPdfGallery: true, // Penanda khusus untuk JS
      pdfs: [
        "assets/files/LKPD_Murid_1.pdf",
        "assets/files/LKPD_Murid_2.pdf",
        "assets/files/LKPD_Murid_3.pdf"
      ]
    }
  ]
};