// ============================================================================
// KONFIGURASI 3 LEVEL TEMA ISLAMI
// ============================================================================
const LEVEL_CONFIGS = {
    1: {
        level: 1,
        title: "Level 1: Taman Pesantren As-Salam",
        floorKey: "floor_level_1",
        propKey: "prop_level_1",
        npcPrefixPutra: "Santri",
        npcPrefixPutri: "Santriwati",
        quizPrefixPutra: "Ustadz",
        quizPrefixPutri: "Ustadzah"
    },
    2: {
        level: 2,
        title: "Level 2: Pelataran Masjid Agung",
        floorKey: "floor_level_2",
        propKey: "prop_level_2",
        npcPrefixPutra: "Jamaah",
        npcPrefixPutri: "Ukhti",
        quizPrefixPutra: "Ustadz",
        quizPrefixPutri: "Ustadzah"
    },
    3: {
        level: 3,
        title: "Level 3: Oasis Kafilah Ilmu",
        floorKey: "floor_level_3",
        propKey: "prop_level_3",
        npcPrefixPutra: "Musafir",
        npcPrefixPutri: "Sahabat",
        quizPrefixPutra: "Syekh",
        quizPrefixPutri: "Ustadzah"
    }
};

// ============================================================================
// DATA CADANGAN (FALLBACK) 30 SOAL PAI (10 SOAL PER LEVEL)
// ============================================================================
const FALLBACK_SOAL = [
    // --- LEVEL 1: RUKUN ISLAM, RUKUN IMAN & WUDHU (1-10) ---
    { level: 1, pertanyaan: "Rukun Islam seluruhnya berjumlah...", pilihan: ["4 Perkara", "5 Perkara", "6 Perkara", "7 Perkara"], jawaban: 1 },
    { level: 1, pertanyaan: "Ibadah salat wajib yang dilaksanakan umat Islam dalam sehari semalam berjumlah...", pilihan: ["3 Waktu", "4 Waktu", "5 Waktu", "6 Waktu"], jawaban: 2 },
    { level: 1, pertanyaan: "Sebelum melaksanakan ibadah salat, kita diwajibkan bersuci dengan cara...", pilihan: ["Berwudhu", "Mandi hujan", "Mencuci baju", "Minum air"], jawaban: 0 },
    { level: 1, pertanyaan: "Apabila tidak ditemukan air atau sedang sakit, bersuci pengganti wudhu menggunakan debu suci disebut...", pilihan: ["Istinja", "Tayamum", "Mandi besar", "Tahallul"], jawaban: 1 },
    { level: 1, pertanyaan: "Kitab suci Al-Qur'an diturunkan kepada Nabi Muhammad SAW melalui perantaraan Malaikat...", pilihan: ["Mikail", "Israfil", "Jibril", "Izrail"], jawaban: 2 },
    { level: 1, pertanyaan: "Surah pertama yang terletak di bagian paling awal dalam Al-Qur'an adalah surah...", pilihan: ["Al-Ikhlas", "Al-Fatihah", "An-Nas", "Al-Baqarah"], jawaban: 1 },
    { level: 1, pertanyaan: "Malaikat yang bertugas membagikan rezeki kepada seluruh makhluk Allah SWT adalah...", pilihan: ["Malaikat Mikail", "Malaikat Ridwan", "Malaikat Malik", "Malaikat Raqib"], jawaban: 0 },
    { level: 1, pertanyaan: "Ketika hendak memulai suatu pekerjaan yang baik, kita disunnahkan membaca...", pilihan: ["Hamdalah", "Basmalah", "Takbir", "Istighfar"], jawaban: 1 },
    { level: 1, pertanyaan: "Jumlah rakaat pada salat wajib Maghrib adalah...", pilihan: ["2 Rakaat", "3 Rakaat", "4 Rakaat", "1 Rakaat"], jawaban: 1 },
    { level: 1, pertanyaan: "Beriman kepada Hari Akhir (Hari Kiamat) merupakan rukun iman yang ke...", pilihan: ["Tiga", "Empat", "Lima", "Enam"], jawaban: 2 },

    // --- LEVEL 2: AKHLAK TERPUJI, ADAB & IBADAH (11-20) ---
    { level: 2, pertanyaan: "Ketika bertemu dengan sesama muslim, kita dianjurkan mengucapkan salam yaitu...", pilihan: ["Assalamu'alaikum", "Selamat malam", "Sampai jumpa", "Permisi lewat"], jawaban: 0 },
    { level: 2, pertanyaan: "Adab makan dan minum yang diajarkan oleh Rasulullah SAW adalah menggunakan tangan...", pilihan: ["Kiri", "Kanan", "Kedua kaki", "Bebas saja"], jawaban: 1 },
    { level: 2, pertanyaan: "Nabi Muhammad SAW sejak muda terkenal sangat jujur dan dapat dipercaya sehingga diberi gelar...", pilihan: ["Al-Faruq", "Al-Amin", "Dzun Nurain", "Asadullah"], jawaban: 1 },
    { level: 2, pertanyaan: "Perbuatan menyekutukan Allah SWT dengan selain-Nya merupakan dosa besar yang disebut...", pilihan: ["Syirik", "Nifak", "Takabur", "Riya"], jawaban: 0 },
    { level: 2, pertanyaan: "Ibadah puasa wajib satu bulan penuh dilaksanakan oleh umat Islam pada bulan...", pilihan: ["Syawal", "Muharram", "Ramadhan", "Rajab"], jawaban: 2 },
    { level: 2, pertanyaan: "Zakat yang wajib dikeluarkan oleh setiap muslim menjelang Hari Raya Idul Fitri disebut zakat...", pilihan: ["Zakat Mal", "Zakat Fitrah", "Zakat Profesi", "Sedekah"], jawaban: 1 },
    { level: 2, pertanyaan: "Sikap rendah hati dan tidak sombong kepada sesama manusia dalam Islam disebut...", pilihan: ["Tawadhu", "Takabur", "Tawakal", "Tasamuh"], jawaban: 0 },
    { level: 2, pertanyaan: "Ketika memasuki masjid, kita disunnahkan melangkahkan kaki bagian...", pilihan: ["Kaki kiri dahulu", "Kaki kanan dahulu", "Melompat", "Berlari cepat"], jawaban: 1 },
    { level: 2, pertanyaan: "Setelah selesai makan dan mendapat nikmat dari Allah SWT, kita mengucapkan...", pilihan: ["Subhanallah", "Astaghfirullah", "Alhamdulillah", "Allahu Akbar"], jawaban: 2 },
    { level: 2, pertanyaan: "Menghormati, menyayangi, dan patuh kepada ayah serta ibu merupakan ciri anak yang...", pilihan: ["Berbakti (Birrul Walidain)", "Durhaka", "Pemalas", "Sombong"], jawaban: 0 },

    // --- LEVEL 3: SEJARAH ISLAM & NABI (21-30) ---
    { level: 3, pertanyaan: "Nabi pertama sekaligus manusia pertama yang diciptakan oleh Allah SWT adalah...", pilihan: ["Nabi Nuh AS", "Nabi Adam AS", "Nabi Ibrahim AS", "Nabi Isa AS"], jawaban: 1 },
    { level: 3, pertanyaan: "Nabi dan Rasul yang wajib kita imani dan tercantum di dalam Al-Qur'an berjumlah...", pilihan: ["10 Nabi", "20 Nabi", "25 Nabi", "99 Nabi"], jawaban: 2 },
    { level: 3, pertanyaan: "Nabi yang diberi mukjizat mampu membuat kapal besar untuk menyelamatkan umat beriman dari banjir besar adalah...", pilihan: ["Nabi Musa AS", "Nabi Nuh AS", "Nabi Sulaiman AS", "Nabi Yunus AS"], jawaban: 1 },
    { level: 3, pertanyaan: "Nabi yang memiliki mukjizat tidak terbakar ketika dilemparkan ke dalam kobaran api Raja Namrud adalah...", pilihan: ["Nabi Ibrahim AS", "Nabi Ismail AS", "Nabi Daud AS", "Nabi Yusuf AS"], jawaban: 0 },
    { level: 3, pertanyaan: "Sahabat Nabi Muhammad SAW yang pertama kali mengumandangkan adzan dengan suara merdu adalah...", pilihan: ["Abu Bakar Ash-Shiddiq", "Umar bin Khattab", "Bilal bin Rabah", "Ali bin Abi Thalib"], jawaban: 2 },
    { level: 3, pertanyaan: "Peristiwa perjalanan malam Nabi Muhammad SAW dari Masjidil Haram ke Masjidil Aqsha lalu naik ke Sidratul Muntaha disebut...", pilihan: ["Hijrah", "Isra Mi'raj", "Fathu Makkah", "Haji Wada"], jawaban: 1 },
    { level: 3, pertanyaan: "Kota tujuan hijrah Nabi Muhammad SAW bersama para sahabat dari kota Makkah adalah...", pilihan: ["Madinah (Yatsrib)", "Mesir", "Baghdad", "Yaman"], jawaban: 0 },
    { level: 3, pertanyaan: "Kitab suci Taurat diturunkan oleh Allah SWT kepada...", pilihan: ["Nabi Daud AS", "Nabi Musa AS", "Nabi Isa AS", "Nabi Muhammad SAW"], jawaban: 1 },
    { level: 3, pertanyaan: "Khalifah pertama dari Khulafaur Rasyidin yang menggantikan kepemimpinan umat setelah Rasulullah SAW wafat adalah...", pilihan: ["Abu Bakar Ash-Shiddiq", "Utsman bin Affan", "Umar bin Khattab", "Ali bin Abi Thalib"], jawaban: 0 },
    { level: 3, pertanyaan: "Surah Al-Ikhlas di dalam Al-Qur'an terdiri atas...", pilihan: ["3 Ayat", "4 Ayat", "5 Ayat", "6 Ayat"], jawaban: 1 }
];

// 30 Nama Islami (15 Putra & 15 Putri diselang-seling)
const ISLAMIC_NAMES = [
    { name: "Ahmad", gender: "putra" }, { name: "Fatimah", gender: "putri" },
    { name: "Zaid", gender: "putra" }, { name: "Aisyah", gender: "putri" },
    { name: "Bilal", gender: "putra" }, { name: "Khadijah", gender: "putri" },
    { name: "Umar", gender: "putra" }, { name: "Zainab", gender: "putri" },
    { name: "Ali", gender: "putra" }, { name: "Maryam", gender: "putri" },
    { name: "Hamzah", gender: "putra" }, { name: "Ruqayyah", gender: "putri" },
    { name: "Salman", gender: "putra" }, { name: "Hafshah", gender: "putri" },
    { name: "Ammar", gender: "putra" }, { name: "Asma", gender: "putri" },
    { name: "Hasan", gender: "putra" }, { name: "Ummu Kultsum", gender: "putri" },
    { name: "Husain", gender: "putra" }, { name: "Shafiyyah", gender: "putri" },
    { name: "Ibrahim", gender: "putra" }, { name: "Halimah", gender: "putri" },
    { name: "Yusuf", gender: "putra" }, { name: "Salsabila", gender: "putri" },
    { name: "Ismail", gender: "putra" }, { name: "Nabila", gender: "putri" },
    { name: "Farhan", gender: "putra" }, { name: "Zahra", gender: "putri" },
    { name: "Rizwan", gender: "putra" }, { name: "Syifa", gender: "putri" }
];

// 20 Dialog Keseharian Santri (Menanyakan Kabar & Remeh-temeh Islami)
const SANTRI_CASUAL_DIALOGS = [
    "Assalamu'alaikum! Bagaimana kabarmu hari ini? Semoga Allah mudahkan langkahmu menuntut ilmu ya!",
    "Wa'alaikumussalam warahmatullah! Alhamdulillah hari ini udara cerah sekali, bikin semangat muraja'ah hafalan.",
    "Tadi pagi aku baru selesai menyetor hafalan Surah An-Naba kepada Ustadz, rasanya lega sekali!",
    "Jangan lupa cari 10 Ustadz dan Ustadzah yang ada tanda [?] di atas kepalanya ya, mereka punya pertanyaan seru!",
    "Peci dan baju koko yang kamu pakai rapi sekali! Memang kebersihan itu sebagian dari iman.",
    "Sebentar lagi waktu salat berjamaah tiba, pastikan wudhu kita sempurna sampai ke sela-sela jari ya.",
    "Tadi waktu sarapan di dapur pesantren, aku ingat untuk membaca Bismillah dan makan dengan tangan kanan.",
    "Kalau semua 10 soal di tempat ini selesai kamu jawab, Gerbang Cahaya di tengah lapangan akan terbuka ke level berikutnya!",
    "Senyum kepada saudaramu itu sedekah lho. Makanya aku senang menyapa setiap santri yang lewat.",
    "Alhamdulillah, tadi sehabis belajar aku membantu membersihkan halaman agar tidak ada daun kering berserakan.",
    "Apa kabar sahabatku? Sudahkah kamu mendoakan kedua orang tuamu hari ini?",
    "Kalau berjalan jangan tergesa-gesa ya, Rasulullah mengajarkan kita berjalan dengan tenang dan sopan.",
    "Aku sedang menghafal doa masuk dan keluar masjid, ternyata pendek dan mudah sekali diingat!",
    "Segar sekali rasanya sehabis mengambil air wudhu, rasa kantuk langsung hilang seketika.",
    "Kata Ustadzah, menuntut ilmu itu wajib bagi setiap muslim, jadi kita tidak boleh mudah menyerah!",
    "Kemarin aku berbagi bekal kurma dan buah melon dengan teman sekamarku, rasanya jadi berkali lipat lebih nikmat.",
    "Senang bertemu denganmu! Kalau melewati jalan ini lagi, jangan sungkan mengucap salam ya.",
    "Aku suka sekali suasana di sini, semuanya saling menyapa dengan ramah dan penuh persaudaraan.",
    "Jangan lupa ucapkan Alhamdulillah atas kesehatan yang Allah berikan kepada kita hari ini!",
    "Masya Allah, semangat sekali kamu berkeliling! Semoga kamu berhasil menyelesaikan seluruh level di game ini ya!"
];

// ============================================================================
// GENERATOR VEKTOR CHIBI ISLAMI (SANTRI PUTRA BERPECI & PUTRI BERHIJAB)
// ============================================================================
function generateIslamicChibiSheet(scene, key, cfg) {
    const fw = 96, fh = 96;
    const cols = 8;
    const rows = 4; // 0: Bawah, 1: Kiri, 2: Kanan, 3: Atas

    const canvas = document.createElement('canvas');
    canvas.width = fw * cols;
    canvas.height = fh * rows;
    const ctx = canvas.getContext('2d');

    for (let dir = 0; dir < rows; dir++) {
        for (let f = 0; f < cols; f++) {
            const phase = (f / cols) * Math.PI * 2;
            const isIdle = (f === 0 || f === 4);
            drawIslamicChibiFrame(ctx, f * fw, dir * fh, dir, phase, isIdle, cfg);
        }
    }

    scene.textures.addSpriteSheet(key, canvas, { frameWidth: fw, frameHeight: fh });
}

function drawIslamicChibiFrame(ctx, ox, oy, dir, phase, isIdle, cfg) {
    ctx.save();
    ctx.translate(ox + 48, oy + 52);

    const swing = isIdle ? 0 : Math.sin(phase);
    const bob = isIdle ? 0 : Math.abs(Math.cos(phase)) * -3.0;

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    const strokeOutline = (w = 2.8) => {
        ctx.strokeStyle = '#18181b';
        ctx.lineWidth = w;
        ctx.stroke();
    };

    // 1. Bayangan Lantai
    const shadowGrad = ctx.createRadialGradient(0, 32, 2, 0, 32, 18);
    shadowGrad.addColorStop(0, 'rgba(0,0,0,0.4)');
    shadowGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = shadowGrad;
    ctx.beginPath();
    ctx.ellipse(0, 32, 16, 5.5, 0, 0, Math.PI * 2);
    ctx.fill();

    if (dir === 2) ctx.scale(-1, 1);

    // 2. Sepatu / Sandal Santri
    const drawFoot = (x, y, rot) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);
        ctx.fillStyle = '#3f2e21';
        ctx.beginPath();
        ctx.ellipse(0, 0, 5.8, 7.5, 0, 0, Math.PI * 2);
        ctx.fill(); strokeOutline(2.5);
        ctx.restore();
    };

    if (dir === 0 || dir === 3) {
        drawFoot(-6.5, 23 + swing * 3.8, swing * 0.12);
        drawFoot(6.5, 23 - swing * 3.8, -swing * 0.12);
    } else {
        drawFoot(-swing * 7, 22 - Math.abs(swing) * 1.5, -swing * 0.3);
    }

    // Tangan Belakang (Tampak Samping)
    if (dir === 1 || dir === 2) {
        ctx.save();
        ctx.translate(swing * 6, 5 + bob);
        ctx.rotate(swing * 0.35);
        ctx.fillStyle = cfg.shirtDark;
        ctx.beginPath(); ctx.ellipse(0, 5, 4.6, 7.5, 0, 0, Math.PI * 2); ctx.fill(); strokeOutline(2.5);
        ctx.fillStyle = '#fed7aa';
        ctx.beginPath(); ctx.arc(0, 11.5, 3.8, 0, Math.PI * 2); ctx.fill(); strokeOutline(2.3);
        ctx.restore();
    }

    // 3. Badan: Baju Koko / Gamis Santri
    const bodyGrad = ctx.createLinearGradient(0, -4 + bob, 0, 22 + bob);
    bodyGrad.addColorStop(0, cfg.shirtLight);
    bodyGrad.addColorStop(1, cfg.shirtDark);
    ctx.fillStyle = bodyGrad;

    const bw = (dir === 1 || dir === 2) ? 11 : 14;
    ctx.beginPath();
    ctx.moveTo(-bw + 3, -3 + bob);
    ctx.quadraticCurveTo(-bw - 2, 12 + bob, -bw, 21 + bob);
    ctx.quadraticCurveTo(0, 24.5 + bob, bw, 21 + bob);
    ctx.quadraticCurveTo(bw + 2, 12 + bob, bw - 3, -3 + bob);
    ctx.closePath();
    ctx.fill(); strokeOutline();

    // Detail Kerah Baju Koko & Kancing (Khusus Putra Tampak Depan)
    if (!cfg.isFemale && dir === 0) {
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0 + bob);
        ctx.lineTo(0, 10 + bob);
        ctx.stroke();

        // Selempang Sorban di Bahu (Khusus Karakter Utama)
        if (cfg.hasSorban) {
            ctx.fillStyle = '#059669';
            ctx.beginPath();
            ctx.moveTo(-11, -1 + bob);
            ctx.quadraticCurveTo(-5, 10 + bob, -8, 19 + bob);
            ctx.lineTo(-3, 19 + bob);
            ctx.quadraticCurveTo(0, 9 + bob, -6, -2 + bob);
            ctx.closePath();
            ctx.fill(); strokeOutline(2);
        }
    }

    // Kaki Depan (Samping)
    if (dir === 1 || dir === 2) {
        drawFoot(swing * 7, 23, swing * 0.3);
    }

    // 4. Lengan Baju Panjang
    const drawArm = (x, y, rot) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);
        ctx.fillStyle = cfg.shirtLight;
        ctx.beginPath(); ctx.ellipse(0, 5, 4.6, 7.5, 0, 0, Math.PI * 2); ctx.fill(); strokeOutline(2.5);
        ctx.fillStyle = '#fed7aa';
        ctx.beginPath(); ctx.arc(0, 11.5, 3.8, 0, Math.PI * 2); ctx.fill(); strokeOutline(2.3);
        ctx.restore();
    };

    if (dir === 0) {
        drawArm(-14.5, 2 + bob - swing * 2, swing * 0.3);
        drawArm(14.5, 2 + bob + swing * 2, -swing * 0.3);
    } else if (dir === 3) {
        drawArm(-14.5, 2 + bob + swing * 2, -swing * 0.3);
        drawArm(14.5, 2 + bob - swing * 2, swing * 0.3);
    } else {
        drawArm(-swing * 6, 3 + bob, -swing * 0.35);
    }

    // ========================================================================
    // 5. KEPALA: HIJAB (PUTRI) ATAU PECI/KOPIAH (PUTRA)
    // ========================================================================
    ctx.save();
    ctx.translate(0, -16 + bob);

    if (cfg.isFemale) {
        // --- MODEL SANTRIWATI BERHIJAB LUWES ---
        const hijabGrad = ctx.createLinearGradient(0, -20, 0, 24);
        hijabGrad.addColorStop(0, cfg.hijabLight);
        hijabGrad.addColorStop(1, cfg.hijabDark);

        if (dir === 0) {
            // Kerudung Menutup Dada (Depan)
            ctx.fillStyle = hijabGrad;
            ctx.beginPath();
            ctx.moveTo(-20, -2);
            ctx.quadraticCurveTo(-21, -20, 0, -21);
            ctx.quadraticCurveTo(21, -20, 20, -2);
            ctx.quadraticCurveTo(22, 16, 14, 22);
            ctx.quadraticCurveTo(0, 27, -14, 22);
            ctx.quadraticCurveTo(-22, 16, -20, -2);
            ctx.closePath();
            ctx.fill(); strokeOutline(2.8);

            // Wajah Oval di Dalam Hijab
            ctx.fillStyle = '#ffedd5';
            ctx.beginPath();
            ctx.ellipse(0, 1, 14.5, 13, 0, 0, Math.PI * 2);
            ctx.fill(); strokeOutline(2.4);

            // Mata & Senyum
            ctx.fillStyle = 'rgba(244, 63, 94, 0.3)';
            ctx.beginPath(); ctx.ellipse(-8, 4.5, 2.8, 1.6, 0, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(8, 4.5, 2.8, 1.6, 0, 0, Math.PI * 2); ctx.fill();

            [-6, 6].forEach(ex => {
                ctx.fillStyle = '#1e1b2e';
                ctx.beginPath(); ctx.ellipse(ex, 1, 2.6, 3.8, 0, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#ffffff';
                ctx.beginPath(); ctx.arc(ex - 0.8, -0.8, 1.2, 0, Math.PI * 2); ctx.fill();
            });
            ctx.strokeStyle = '#9a3412'; ctx.lineWidth = 1.8;
            ctx.beginPath(); ctx.arc(0, 4.5, 2.5, 0.2, Math.PI - 0.2); ctx.stroke();

        } else if (dir === 3) {
            // Hijab Tampak Belakang Penuh
            ctx.fillStyle = hijabGrad;
            ctx.beginPath();
            ctx.moveTo(-20, -2);
            ctx.quadraticCurveTo(-21, -20, 0, -21);
            ctx.quadraticCurveTo(21, -20, 20, -2);
            ctx.quadraticCurveTo(22, 18, 15, 24);
            ctx.quadraticCurveTo(0, 29, -15, 24);
            ctx.quadraticCurveTo(-22, 18, -20, -2);
            ctx.closePath();
            ctx.fill(); strokeOutline(2.8);

        } else {
            // Hijab Tampak Samping
            ctx.fillStyle = hijabGrad;
            ctx.beginPath();
            ctx.moveTo(-17, -6);
            ctx.quadraticCurveTo(-15, -20, 2, -20);
            ctx.quadraticCurveTo(21, -18, 20, 2);
            ctx.quadraticCurveTo(21, 18, 11, 23);
            ctx.quadraticCurveTo(-4, 25, -13, 18);
            ctx.quadraticCurveTo(-16, 10, -17, -6);
            ctx.closePath();
            ctx.fill(); strokeOutline(2.8);

            // Wajah Samping
            ctx.fillStyle = '#ffedd5';
            ctx.beginPath();
            ctx.ellipse(-5, 1, 11, 12.5, 0, 0, Math.PI * 2);
            ctx.fill(); strokeOutline(2.4);

            ctx.fillStyle = '#1e1b2e';
            ctx.beginPath(); ctx.ellipse(-9, 1, 2.4, 3.6, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.arc(-9.8, -0.8, 1.1, 0, Math.PI * 2); ctx.fill();
        }

    } else {
        // --- MODEL SANTRI PUTRA BERPECI / KOPIAH ---
        const skinGrad = ctx.createRadialGradient(-3, -3, 2, 0, 0, 20);
        skinGrad.addColorStop(0, '#ffedd5');
        skinGrad.addColorStop(1, '#fdba74');
        ctx.fillStyle = skinGrad;
        ctx.beginPath();
        ctx.ellipse(0, 0, 18, 16, 0, 0, Math.PI * 2);
        ctx.fill(); strokeOutline(2.8);

        if (dir === 0) {
            [-6.8, 6.8].forEach(ex => {
                ctx.fillStyle = '#1e1b2e';
                ctx.beginPath(); ctx.ellipse(ex, 1.5, 2.8, 4, 0, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#ffffff';
                ctx.beginPath(); ctx.arc(ex - 1, -0.5, 1.3, 0, Math.PI * 2); ctx.fill();
            });
            ctx.strokeStyle = '#9a3412'; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.arc(0, 5.2, 2.8, 0.2, Math.PI - 0.2); ctx.stroke();
        } else if (dir === 1 || dir === 2) {
            ctx.fillStyle = '#1e1b2e';
            ctx.beginPath(); ctx.ellipse(-9.5, 1.5, 2.5, 3.8, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.arc(-10.3, -0.5, 1.2, 0, Math.PI * 2); ctx.fill();
        }

        // Rambut Tengkuk/Cambang Sedikit di Bawah Peci
        ctx.fillStyle = '#27272a';
        if (dir === 3) {
            ctx.beginPath();
            ctx.ellipse(0, -2, 18, 12, 0, 0, Math.PI);
            ctx.fill(); strokeOutline(2.4);
        } else if (dir === 1 || dir === 2) {
            ctx.beginPath();
            ctx.arc(8, -2, 10, -0.5, 1.8);
            ctx.fill();
        }

        // PECI / KOPIAH SANTRI MELENGKUNG RAPI
        ctx.fillStyle = cfg.peciColor || '#18181b';
        ctx.beginPath();
        ctx.moveTo(-17.5, -5);
        ctx.quadraticCurveTo(-18, -19, 0, -20);
        ctx.quadraticCurveTo(18, -19, 17.5, -5);
        ctx.quadraticCurveTo(0, -2.5, -17.5, -5);
        ctx.closePath();
        ctx.fill(); strokeOutline(2.8);

        // Lis Pita Emas pada Peci
        ctx.strokeStyle = cfg.peciTrim || '#fbbf24';
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(-16.5, -7.5);
        ctx.quadraticCurveTo(0, -5, 16.5, -7.5);
        ctx.stroke();
    }

    ctx.restore();
    ctx.restore();
}

// ============================================================================
// SCENE UTAMA PHASER 3 (MULTI-LEVEL ISLAMI)
// ============================================================================
class IslamicRPGScene extends Phaser.Scene {
    constructor() {
        super('IslamicRPGScene');
    }

    init(data) {
        this.currentLevel = data.level || 1;
        this.totalScore = data.score || 0;
    }

    preload() {
        this.load.json('data_soal', 'soal.json');

        // Hanya generate tekstur sekali saja agar perpindahan level instan
        if (!this.textures.exists('hero_santri')) {
            // 1. Karakter Utama: Santri Putra Berbaju Koko Putih, Peci Hitam Emas & Sorban Hijau
            generateIslamicChibiSheet(this, 'hero_santri', {
                isFemale: false,
                shirtLight: '#f8fafc', shirtDark: '#cbd5e1',
                peciColor: '#18181b', peciTrim: '#fbbf24',
                hasSorban: true
            });

            // 2. Variasi NPC Santri Putra (Berpeci) & Santriwati (Berhijab)
            const npcTemplates = [
                { key: 'npc_putra_0', isFemale: false, shirtLight: '#10b981', shirtDark: '#047857', peciColor: '#18181b', peciTrim: '#34d399' },
                { key: 'npc_putri_1', isFemale: true, shirtLight: '#f472b6', shirtDark: '#db2777', hijabLight: '#fbcfe8', hijabDark: '#f472b6' },
                { key: 'npc_putra_2', isFemale: false, shirtLight: '#38bdf8', shirtDark: '#0284c7', peciColor: '#f8fafc', peciTrim: '#38bdf8' },
                { key: 'npc_putri_3', isFemale: true, shirtLight: '#a78bfa', shirtDark: '#7c3aed', hijabLight: '#ddd6fe', hijabDark: '#8b5cf6' },
                { key: 'npc_putra_4', isFemale: false, shirtLight: '#fbbf24', shirtDark: '#d97706', peciColor: '#18181b', peciTrim: '#fbbf24' },
                { key: 'npc_putri_5', isFemale: true, shirtLight: '#2dd4bf', shirtDark: '#0d9488', hijabLight: '#99f6e4', hijabDark: '#14b8a6' }
            ];

            npcTemplates.forEach(t => generateIslamicChibiSheet(this, t.key, t));

            // 3. Buat Aset Lingkungan untuk Ketiga Level
            this.generateAllLevelEnvironments();
        }
    }

    generateAllLevelEnvironments() {
        // --- LEVEL 1: Rumput Taman Pesantren & Pohon Rindang ---
        const g1 = this.textures.createCanvas('floor_level_1', 128, 128);
        const ctx1 = g1.context;
        ctx1.fillStyle = '#3f6212'; ctx1.fillRect(0, 0, 128, 128);
        ctx1.strokeStyle = '#4d7c0f'; ctx1.lineWidth = 3; ctx1.lineCap = 'round';
        [[20, 30], [85, 65], [45, 105], [105, 25]].forEach(([x, y]) => {
            ctx1.beginPath(); ctx1.moveTo(x, y); ctx1.quadraticCurveTo(x - 4, y - 8, x - 7, y - 10); ctx1.stroke();
            ctx1.beginPath(); ctx1.moveTo(x, y); ctx1.quadraticCurveTo(x + 4, y - 9, x + 6, y - 12); ctx1.stroke();
        });
        g1.refresh();

        const p1 = this.textures.createCanvas('prop_level_1', 120, 140);
        const pctx1 = p1.context;
        pctx1.lineJoin = 'round'; pctx1.lineCap = 'round';
        pctx1.fillStyle = 'rgba(0,0,0,0.3)'; pctx1.beginPath(); pctx1.ellipse(60, 125, 34, 11, 0, 0, Math.PI * 2); pctx1.fill();
        pctx1.fillStyle = '#78350f'; pctx1.strokeStyle = '#1e1b2e'; pctx1.lineWidth = 4;
        pctx1.beginPath(); pctx1.moveTo(46, 124); pctx1.quadraticCurveTo(52, 95, 48, 70); pctx1.lineTo(72, 70); pctx1.quadraticCurveTo(68, 95, 74, 124); pctx1.closePath(); pctx1.fill(); pctx1.stroke();
        [[60, 62, 38, '#15803d'], [38, 52, 26, '#16a34a'], [82, 52, 26, '#16a34a'], [60, 36, 30, '#22c55e']].forEach(([x, y, r, col]) => {
            pctx1.fillStyle = col; pctx1.beginPath(); pctx1.arc(x, y, r, 0, Math.PI * 2); pctx1.fill(); pctx1.stroke();
        });
        p1.refresh();

        // --- LEVEL 2: Lantai Marmer Pelataran Masjid & Pilar Kubah Emas ---
        const g2 = this.textures.createCanvas('floor_level_2', 128, 128);
        const ctx2 = g2.context;
        ctx2.fillStyle = '#e2e8f0'; ctx2.fillRect(0, 0, 128, 128);
        ctx2.strokeStyle = '#cbd5e1'; ctx2.lineWidth = 2;
        ctx2.strokeRect(2, 2, 60, 60); ctx2.strokeRect(66, 66, 60, 60);
        ctx2.strokeRect(66, 2, 60, 60); ctx2.strokeRect(2, 66, 60, 60);
        // Ornamen Geometris Islami di Tengah Ubin
        ctx2.fillStyle = '#94a3b8';
        ctx2.beginPath(); ctx2.arc(64, 64, 6, 0, Math.PI * 2); ctx2.fill();
        g2.refresh();

        const p2 = this.textures.createCanvas('prop_level_2', 120, 140);
        const pctx2 = p2.context;
        pctx2.fillStyle = 'rgba(0,0,0,0.25)'; pctx2.beginPath(); pctx2.ellipse(60, 126, 32, 10, 0, 0, Math.PI * 2); pctx2.fill();
        // Tiang Marmer
        pctx2.fillStyle = '#f8fafc'; pctx2.strokeStyle = '#1e293b'; pctx2.lineWidth = 3.5;
        pctx2.fillRect(42, 48, 36, 76); pctx2.strokeRect(42, 48, 36, 76);
        // Sabuk Kaligrafi Emas
        pctx2.fillStyle = '#059669'; pctx2.fillRect(40, 62, 40, 14); pctx2.strokeRect(40, 62, 40, 14);
        // Kubah Emas di Atas Pilar
        pctx2.fillStyle = '#fbbf24';
        pctx2.beginPath(); pctx2.arc(60, 48, 26, Math.PI, 0); pctx2.closePath(); pctx2.fill(); pctx2.stroke();
        // Bulan Sabit di Puncak Kubah
        pctx2.strokeStyle = '#f59e0b'; pctx2.lineWidth = 3;
        pctx2.beginPath(); pctx2.arc(60, 14, 6, 0.4, Math.PI * 1.6); pctx2.stroke();
        p2.refresh();

        // --- LEVEL 3: Pasir Oasis Keemasan & Pohon Kurma ---
        const g3 = this.textures.createCanvas('floor_level_3', 128, 128);
        const ctx3 = g3.context;
        ctx3.fillStyle = '#d97706'; ctx3.fillRect(0, 0, 128, 128);
        ctx3.strokeStyle = '#b45309'; ctx3.lineWidth = 3;
        ctx3.beginPath(); ctx3.moveTo(15, 40); ctx3.quadraticCurveTo(40, 32, 65, 40); ctx3.stroke();
        ctx3.beginPath(); ctx3.moveTo(60, 95); ctx3.quadraticCurveTo(85, 87, 110, 95); ctx3.stroke();
        g3.refresh();

        const p3 = this.textures.createCanvas('prop_level_3', 120, 140);
        const pctx3 = p3.context;
        pctx3.fillStyle = 'rgba(0,0,0,0.3)'; pctx3.beginPath(); pctx3.ellipse(60, 126, 30, 9, 0, 0, Math.PI * 2); pctx3.fill();
        // Batang Pohon Kurma Melengkung
        pctx3.strokeStyle = '#1e1b2e'; pctx3.lineWidth = 3.5; pctx3.fillStyle = '#78350f';
        pctx3.beginPath(); pctx3.moveTo(50, 125); pctx3.quadraticCurveTo(58, 85, 53, 45); pctx3.lineTo(67, 45); pctx3.quadraticCurveTo(72, 85, 70, 125); pctx3.closePath(); pctx3.fill(); pctx3.stroke();
        // Pelepah Daun Kurma Melengkung
        pctx3.fillStyle = '#15803d';
        [[-38, -5], [38, -5], [-32, 18], [32, 18], [0, -22]].forEach(([dx, dy]) => {
            pctx3.beginPath(); pctx3.moveTo(60, 45); pctx3.quadraticCurveTo(60 + dx * 0.6, 30 + dy * 0.3, 60 + dx, 48 + dy); pctx3.quadraticCurveTo(60 + dx * 0.4, 48 + dy * 0.6, 60, 45); pctx3.fill(); pctx3.stroke();
        });
        // Buah Kurma Cokelat Keemasan
        pctx3.fillStyle = '#b45309';
        pctx3.beginPath(); pctx3.arc(54, 52, 5, 0, Math.PI * 2); pctx3.arc(66, 52, 5, 0, Math.PI * 2); pctx3.fill();
        p3.refresh();

        // --- GERBANG PORTAL CAHAYA LEVEL ---
        const portal = this.textures.createCanvas('portal_gate', 96, 96);
        const ptx = portal.context;
        const grad = ptx.createRadialGradient(48, 48, 8, 48, 48, 44);
        grad.addColorStop(0, '#fef08a');
        grad.addColorStop(0.6, '#f59e0b');
        grad.addColorStop(1, 'rgba(245, 158, 11, 0)');
        ptx.fillStyle = grad;
        ptx.beginPath(); ptx.arc(48, 48, 44, 0, Math.PI * 2); ptx.fill();
        ptx.strokeStyle = '#ffffff'; ptx.lineWidth = 3;
        ptx.beginPath(); ptx.arc(48, 48, 28, 0, Math.PI * 2); ptx.stroke();
        portal.refresh();
    }

    create() {
        const WORLD_SIZE = 2400;
        const lvlCfg = LEVEL_CONFIGS[this.currentLevel] || LEVEL_CONFIGS[1];

        // Update Judul Level & HUD di HTML
        document.getElementById('ui-level-name').textContent = lvlCfg.title;
        document.getElementById('ui-score').textContent = this.totalScore;
        document.getElementById('ui-quest').textContent = `0 / 10`;
        document.getElementById('portal-banner').style.display = 'none';

        this.physics.world.setBounds(0, 0, WORLD_SIZE, WORLD_SIZE);
        this.add.tileSprite(WORLD_SIZE / 2, WORLD_SIZE / 2, WORLD_SIZE, WORLD_SIZE, lvlCfg.floorKey);

        // Filter soal berdasarkan level aktif
        let rawQuestions = this.cache.json.get('data_soal');
        if (!Array.isArray(rawQuestions) || rawQuestions.length === 0) {
            rawQuestions = FALLBACK_SOAL;
        }
        let levelQuestions = rawQuestions.filter(q => !q.level || q.level === this.currentLevel);
        if (levelQuestions.length === 0) levelQuestions = FALLBACK_SOAL.filter(q => q.level === this.currentLevel);

        // Registrasi Animasi Jalan (Jika belum terdaftar)
        const allSheetKeys = ['hero_santri', 'npc_putra_0', 'npc_putri_1', 'npc_putra_2', 'npc_putri_3', 'npc_putra_4', 'npc_putri_5'];
        const dirs = ['down', 'left', 'right', 'up'];
        allSheetKeys.forEach(sheetKey => {
            dirs.forEach((d, dirIdx) => {
                const animKey = `${sheetKey}_walk_${d}`;
                if (!this.anims.exists(animKey)) {
                    this.anims.create({
                        key: animKey,
                        frames: this.anims.generateFrameNumbers(sheetKey, { start: dirIdx * 8, end: (dirIdx * 8) + 7 }),
                        frameRate: 13,
                        repeat: -1
                    });
                }
            });
        });

        // Buat Objek Lingkungan (Pohon / Pilar Masjid / Pohon Kurma)
        this.propsGroup = this.physics.add.staticGroup();
        for (let i = 0; i < 42; i++) {
            const tx = Phaser.Math.Between(140, WORLD_SIZE - 140);
            const ty = Phaser.Math.Between(140, WORLD_SIZE - 140);
            if (Phaser.Math.Distance.Between(tx, ty, WORLD_SIZE / 2, WORLD_SIZE / 2) < 240) continue;

            const prop = this.propsGroup.create(tx, ty, lvlCfg.propKey);
            prop.body.setSize(38, 24);
            prop.body.setOffset(41, 104);
            prop.setDepth(ty);
        }

        // Gerbang Portal Level (Muncul di tengah peta saat 10 soal terjawab)
        this.portalGate = this.physics.add.staticSprite(WORLD_SIZE / 2, (WORLD_SIZE / 2) - 110, 'portal_gate');
        this.portalGate.setVisible(false);
        this.portalGate.body.enable = false;
        this.portalLabel = this.add.text(WORLD_SIZE / 2, (WORLD_SIZE / 2) - 165, 'GERBANG LEVEL BERIKUTNYA', {
            fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '13px', fontStyle: 'bold',
            color: '#18181b', backgroundColor: '#fde047', padding: { x: 10, y: 4 }
        }).setOrigin(0.5).setVisible(false).setDepth(9000);

        // Karakter Utama (Protagonis Santri)
        this.player = this.physics.add.sprite(WORLD_SIZE / 2, WORLD_SIZE / 2, 'hero_santri', 0);
        this.player.setCollideWorldBounds(true);
        this.player.body.setSize(32, 22);
        this.player.body.setOffset(32, 62);
        this.playerLastDir = 'down';

        this.cameras.main.setBounds(0, 0, WORLD_SIZE, WORLD_SIZE);
        this.cameras.main.startFollow(this.player, true, 0.1, 0.1);

        // ====================================================================
        // SPAWN 30 NPC SANTRI PUTRA & PUTRI
        // ====================================================================
        const npcKeys = ['npc_putra_0', 'npc_putri_1', 'npc_putra_2', 'npc_putri_3', 'npc_putra_4', 'npc_putri_5'];
        this.npcs = this.physics.add.group();
        this.npcList = [];

        for (let i = 0; i < 30; i++) {
            const isQuizNPC = i < 10;
            const person = ISLAMIC_NAMES[i];
            const isFemale = person.gender === 'putri';

            // Pilih spritesheet sesuai gender (indeks genap = putra, indeks ganjil = putri)
            const sheetKey = isFemale
                ? npcKeys[1 + ((i % 3) * 2)]
                : npcKeys[(i % 3) * 2];

            const titlePrefix = isQuizNPC
                ? (isFemale ? lvlCfg.quizPrefixPutri : lvlCfg.quizPrefixPutra)
                : (isFemale ? lvlCfg.npcPrefixPutri : lvlCfg.npcPrefixPutra);

            const fullName = `${titlePrefix} ${person.name}`;

            const angle = (i / 30) * Math.PI * 2;
            const dist = Phaser.Math.Between(240, 1020);
            const nx = Phaser.Math.Clamp(Math.round((WORLD_SIZE / 2) + Math.cos(angle) * dist), 130, WORLD_SIZE - 130);
            const ny = Phaser.Math.Clamp(Math.round((WORLD_SIZE / 2) + Math.sin(angle) * dist), 130, WORLD_SIZE - 130);

            const npc = this.npcs.create(nx, ny, sheetKey, 0);
            npc.setCollideWorldBounds(true);
            npc.body.setSize(32, 22);
            npc.body.setOffset(32, 62);
            npc.setImmovable(true);

            npc.npcId = i;
            npc.npcName = fullName;
            npc.sheetKey = sheetKey;
            npc.isQuiz = isQuizNPC;
            npc.answered = false;
            npc.quizData = isQuizNPC ? levelQuestions[i % levelQuestions.length] : null;
            npc.casualText = !isQuizNPC ? SANTRI_CASUAL_DIALOGS[(i - 10) % SANTRI_CASUAL_DIALOGS.length] : null;

            npc.moveState = 'walk';
            npc.facing = Phaser.Utils.Array.GetRandom(dirs);
            npc.aiTimer = Phaser.Math.Between(800, 2600);

            const badgeText = isQuizNPC ? `[?] ${fullName}` : fullName;
            const badgeBg = isQuizNPC ? '#b45309ee' : '#064e3bcc';
            const badgeColor = isQuizNPC ? '#fef08a' : '#ecfdf5';

            npc.nameTag = this.add.text(nx, ny - 54, badgeText, {
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '12px',
                fontStyle: 'bold',
                color: badgeColor,
                backgroundColor: badgeBg,
                padding: { x: 8, y: 3 }
            }).setOrigin(0.5);

            this.npcList.push(npc);
        }

        // Collider Fisika
        this.physics.add.collider(this.player, this.propsGroup);
        this.physics.add.collider(this.npcs, this.propsGroup);
        this.physics.add.collider(this.player, this.npcs);
        this.physics.add.collider(this.npcs, this.npcs);

        // Overlap dengan Portal Level Berikutnya
        this.physics.add.overlap(this.player, this.portalGate, () => {
            if (this.portalGate.visible) {
                const nextLvl = this.currentLevel < 3 ? this.currentLevel + 1 : 1;
                this.scene.restart({ level: nextLvl, score: this.totalScore });
            }
        });

        this.cursors = this.input.keyboard.createCursorKeys();
        this.keysWASD = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE
        });

        this.isDialogOpen = false;
        this.closestNPC = null;
        this.solvedInLevel = 0;

        window.triggerNPCInteraction = () => {
            if (this.isDialogOpen) {
                window.closeNPCDialog();
            } else if (this.closestNPC) {
                this.openInteractionModal(this.closestNPC);
            }
        };

        window.closeNPCDialog = () => {
            document.getElementById('dialog-overlay').style.display = 'none';
            this.isDialogOpen = false;
        };

        window.changeGameLevel = (targetLevel) => {
            window.closeNPCDialog();
            this.scene.restart({ level: targetLevel, score: this.totalScore });
        };
    }

    update(time, delta) {
        if (Phaser.Input.Keyboard.JustDown(this.keysWASD.space)) {
            window.triggerNPCInteraction();
        }

        if (this.isDialogOpen) {
            this.player.setVelocity(0);
            this.setIdleFrame(this.player, this.playerLastDir);
            return;
        }

        this.handlePlayerMovement();
        this.handleNPCBehavior(delta);
    }

    handlePlayerMovement() {
        const speed = 215;
        let vx = 0, vy = 0;

        const left = this.cursors.left.isDown || this.keysWASD.left.isDown || window.touchDir === 'left';
        const right = this.cursors.right.isDown || this.keysWASD.right.isDown || window.touchDir === 'right';
        const up = this.cursors.up.isDown || this.keysWASD.up.isDown || window.touchDir === 'up';
        const down = this.cursors.down.isDown || this.keysWASD.down.isDown || window.touchDir === 'down';

        if (left) vx = -1;
        else if (right) vx = 1;
        if (up) vy = -1;
        else if (down) vy = 1;

        if (vx !== 0 || vy !== 0) {
            this.player.setVelocity(vx * speed, vy * speed);
            this.player.body.velocity.normalize().scale(speed);

            if (vy > 0) {
                this.player.anims.play('hero_santri_walk_down', true);
                this.playerLastDir = 'down';
            } else if (vy < 0) {
                this.player.anims.play('hero_santri_walk_up', true);
                this.playerLastDir = 'up';
            } else if (vx < 0) {
                this.player.anims.play('hero_santri_walk_left', true);
                this.playerLastDir = 'left';
            } else if (vx > 0) {
                this.player.anims.play('hero_santri_walk_right', true);
                this.playerLastDir = 'right';
            }
        } else {
            this.player.setVelocity(0);
            this.setIdleFrame(this.player, this.playerLastDir);
        }

        this.player.setDepth(this.player.y);
    }

    handleNPCBehavior(delta) {
        let nearest = null;
        const minDistance = 95;

        this.npcList.forEach(npc => {
            const dist = Phaser.Math.Distance.Between(this.player.x, this.player.y, npc.x, npc.y);

            // Jika Player mendekat: NPC Berhenti & Menghadap ke arah Player
            if (dist < minDistance) {
                npc.setVelocity(0);

                const dx = this.player.x - npc.x;
                const dy = this.player.y - npc.y;
                if (Math.abs(dx) > Math.abs(dy)) {
                    npc.facing = dx > 0 ? 'right' : 'left';
                } else {
                    npc.facing = dy > 0 ? 'down' : 'up';
                }

                this.setIdleFrame(npc, npc.facing);

                if (!nearest || dist < Phaser.Math.Distance.Between(this.player.x, this.player.y, nearest.x, nearest.y)) {
                    nearest = npc;
                }
            } else {
                // Jika Player jauh: NPC Berjalan Otomatis (Wander)
                npc.aiTimer -= delta;
                if (npc.aiTimer <= 0) {
                    if (npc.moveState === 'walk' && Phaser.Math.Between(0, 100) < 35) {
                        npc.moveState = 'idle';
                        npc.aiTimer = Phaser.Math.Between(900, 1800);
                    } else {
                        npc.moveState = 'walk';
                        npc.facing = Phaser.Utils.Array.GetRandom(['down', 'left', 'right', 'up']);
                        npc.aiTimer = Phaser.Math.Between(1400, 3200);
                    }
                }

                if (npc.moveState === 'walk') {
                    const npcSpeed = 75;
                    const velMap = { down: [0, npcSpeed], up: [0, -npcSpeed], left: [-npcSpeed, 0], right: [npcSpeed, 0] };
                    const [vx, vy] = velMap[npc.facing];
                    npc.setVelocity(vx, vy);
                    npc.anims.play(`${npc.sheetKey}_walk_${npc.facing}`, true);
                } else {
                    npc.setVelocity(0);
                    this.setIdleFrame(npc, npc.facing);
                }
            }

            npc.nameTag.setPosition(npc.x, npc.y - 52);
            npc.nameTag.setDepth(npc.y + 10);
            npc.setDepth(npc.y);
        });

        this.closestNPC = nearest;
        const promptEl = document.getElementById('interact-prompt');
        if (this.closestNPC && !this.isDialogOpen) {
            document.getElementById('prompt-npc-name').textContent = this.closestNPC.npcName;
            promptEl.style.display = 'block';
        } else {
            promptEl.style.display = 'none';
        }
    }

    setIdleFrame(sprite, dir) {
        sprite.anims.stop();
        const idleFrameIndex = { down: 0, left: 8, right: 16, up: 24 };
        sprite.setFrame(idleFrameIndex[dir] ?? 0);
    }

    openInteractionModal(npc) {
        this.isDialogOpen = true;
        document.getElementById('interact-prompt').style.display = 'none';

        const overlay = document.getElementById('dialog-overlay');
        const nameEl = document.getElementById('dialog-npc-name');
        const typeTag = document.getElementById('dialog-type-tag');
        const badgeEl = document.getElementById('dialog-badge');
        const textEl = document.getElementById('dialog-text');
        const optionsBox = document.getElementById('quiz-options');
        const feedbackBox = document.getElementById('quiz-feedback');

        nameEl.textContent = npc.npcName;
        feedbackBox.style.display = 'none';
        optionsBox.innerHTML = '';

        if (npc.isQuiz) {
            badgeEl.className = 'npc-badge bg-warning text-dark';
            typeTag.className = 'badge bg-warning text-dark';
            typeTag.textContent = npc.answered ? 'Soal Selesai' : `Ujian Ilmu Level ${this.currentLevel}`;

            if (npc.answered) {
                textEl.textContent = `"Alhamdulillah, بارك الله فيك (Barakallahu fiik)! Kamu sudah menjawab pertanyaanku dengan benar. Silakan temui Ustadz dan Ustadzah lainnya ya!"`;
                optionsBox.style.setProperty('display', 'none', 'important');
            } else {
                textEl.textContent = `Assalamu'alaikum! Mari kita uji pemahamanmu: ${npc.quizData.pertanyaan}`;
                optionsBox.style.setProperty('display', 'grid', 'important');

                npc.quizData.pilihan.forEach((opsiText, idx) => {
                    const btn = document.createElement('button');
                    btn.className = 'option-btn';
                    btn.textContent = opsiText;
                    btn.onclick = () => this.verifyQuizAnswer(npc, idx, btn, optionsBox, feedbackBox);
                    optionsBox.appendChild(btn);
                });
            }
        } else {
            badgeEl.className = 'npc-badge bg-success text-white';
            typeTag.className = 'badge bg-info text-dark';
            typeTag.textContent = 'Silaturahmi Santri';
            textEl.textContent = `"${npc.casualText}"`;
            optionsBox.style.setProperty('display', 'none', 'important');
        }

        overlay.style.display = 'flex';
    }

    verifyQuizAnswer(npc, selectedIdx, clickedBtn, optionsBox, feedbackBox) {
        const allBtns = optionsBox.querySelectorAll('button');
        allBtns.forEach(b => b.disabled = true);

        const isCorrect = (selectedIdx === npc.quizData.jawaban);
        feedbackBox.style.display = 'block';

        if (isCorrect) {
            clickedBtn.classList.add('correct');
            feedbackBox.className = 'alert alert-success py-2 px-3 fw-bold mb-3';
            feedbackBox.innerHTML = '<i class="fa-solid fa-circle-check me-2"></i>Alhamdulillah, Masya Allah jawabanmu tepat! (+10 Poin)';

            npc.answered = true;
            this.totalScore += 10;
            this.solvedInLevel += 1;

            npc.nameTag.setText(`[✓] ${npc.npcName}`);
            npc.nameTag.setStyle({ backgroundColor: '#15803dee', color: '#bbf7d0' });

            document.getElementById('ui-score').textContent = this.totalScore;
            document.getElementById('ui-quest').textContent = `${this.solvedInLevel} / 10`;

            // Jika seluruh 10 soal di level ini selesai, buka Gerbang Portal
            if (this.solvedInLevel >= 10) {
                this.portalGate.setVisible(true);
                this.portalGate.body.enable = true;
                this.portalLabel.setVisible(true);
                document.getElementById('portal-banner').style.display = 'block';
            }
        } else {
            clickedBtn.classList.add('wrong');
            allBtns[npc.quizData.jawaban].classList.add('correct');
            feedbackBox.className = 'alert alert-danger py-2 px-3 fw-bold mb-3';
            feedbackBox.innerHTML = '<i class="fa-solid fa-circle-xmark me-2"></i> belum tepat! Jangan putus asa, coba sapa kembali untuk mengulang.';
        }
    }
}

// ============================================================================
// INISIALISASI GAME & D-PAD SENTUH
// ============================================================================
window.touchDir = null;
document.querySelectorAll('.dpad-btn').forEach(btn => {
    const dir = btn.getAttribute('data-dir');
    const setDir = (e) => { e.preventDefault(); window.touchDir = dir; };
    const clearDir = (e) => { e.preventDefault(); if (window.touchDir === dir) window.touchDir = null; };

    btn.addEventListener('mousedown', setDir);
    btn.addEventListener('touchstart', setDir, { passive: false });
    btn.addEventListener('mouseup', clearDir);
    btn.addEventListener('mouseleave', clearDir);
    btn.addEventListener('touchend', clearDir);
});

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 }, debug: false }
    },
    scene: [IslamicRPGScene]
};

new Phaser.Game(config);