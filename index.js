import express from 'express';
import cors from 'cors';

// Inisialisasi aplikasi Express
const app = express();
app.use(express.json()); // Middleware untuk membaca body JSON
app.use(cors());

const PORT = process.env.PORT || 3000;

const archetypes = {
    // KELOMPOK UTAMA: SOCIAL (The Helpers)
    S_A_I: {
        title: "Sang Penasihat Humanis",
        description: "Kamu punya empati yang mendalam, senang menganalisis masalah orang lain, dan punya sisi kreatif untuk menemukan solusi. Kamu adalah pendengar yang baik dan pemikir yang mendalam.",
        careers: ["Psikolog", "Konselor Sekolah", "Penulis Fiksi", "Antropolog", "Pekerja Sosial", "Dosen Sastra/Filsafat"],
        figures: ["Najwa Shihab", "Goenawan Mohamad"]
    },
    S_E_C: {
        title: "Sang Koordinator Komunitas",
        description: "Kamu hebat dalam memimpin dan membantu orang lain dalam sebuah sistem yang terorganisir. Kamu suka membuat acara, mengelola tim, dan memastikan semuanya berjalan lancar.",
        careers: ["Event Organizer", "Manajer HRD", "Kepala Sekolah", "Manajer Proyek Sosial", "Politisi"],
        figures: ["Erick Thohir", "Tri Rismaharini"]
    },
    S_R_A: {
        title: "Sang Pelatih Kreatif",
        description: "Kamu suka mengajar atau membantu orang lain dengan cara yang praktis dan kreatif. Kamu bisa mengubah hal-hal rumit menjadi sesuatu yang menyenangkan dan mudah dipahami.",
        careers: ["Guru Seni/Musik", "Chef Profesional", "Pelatih Olahraga", "Terapis Fisik", "Desainer Instruksional"],
        figures: ["Chef Juna Rorimpandey", "Indra Sjafri"]
    },

    // KELOMPOK UTAMA: INVESTIGATIVE (The Thinkers)
    I_R_A: {
        title: "Sang Arsitek Pengetahuan",
        description: "Kamu adalah pemikir analitis yang suka bekerja dengan hal-hal nyata dan punya sentuhan artistik. Kamu senang merancang, menciptakan, dan memecahkan masalah teknis yang kompleks.",
        careers: ["Arsitek", "Insinyur Riset & Pengembangan (R&D)", "Desainer Produk Industri", "Ilmuwan Forensik"],
        figures: ["B.J. Habibie", "Ridwan Kamil"]
    },
    I_A_C: {
        title: "Sang Perancang Sistem",
        description: "Kamu punya pikiran analitis yang tajam, imajinasi kreatif, dan suka pada keteraturan. Kamu hebat dalam merancang sistem yang tidak hanya berfungsi baik tapi juga indah.",
        careers: ["UI/UX Designer", "Analis Sistem", "Game Designer", "Arsitek Perangkat Lunak (Software Architect)"],
        figures: ["Ainun Najib (KawalPemilu)"]
    },
    I_E_R: {
        title: "Sang Inovator Teknologi",
        description: "Kamu adalah pemikir visioner yang suka menganalisis, mengambil inisiatif, dan mewujudkan ide menjadi sesuatu yang nyata. Kamu berani mengambil risiko untuk menciptakan terobosan.",
        careers: ["Pendiri Startup Teknologi", "Ilmuwan Data (Data Scientist)", "Dokter Spesialis", "Konsultan Bisnis Teknologi"],
        figures: ["Nadiem Makarim", "Andrew Darwis (Kaskus)"]
    },
    
    // KELOMPOK UTAMA: ARTISTIC (The Creators)
    A_S_E: {
        title: "Sang Bintang Panggung",
        description: "Kamu sangat kreatif, ekspresif, dan pandai berinteraksi dengan orang lain. Kamu punya pesona untuk memimpin, menghibur, dan meyakinkan banyak orang.",
        careers: ["Aktor/Aktris", "Musisi", "Content Creator", "Sutradara", "Pembawa Acara (MC)", "Public Relations"],
        figures: ["Raditya Dika", "Agnez Mo"]
    },
    A_I_S: { // Alias untuk S_A_I tapi dengan penekanan pada Artistik
        title: "Sang Visioner Kreatif",
        description: "Kamu punya imajinasi yang tak terbatas, suka menganalisis ide-ide mendalam, dan ingin membagikan hasil karyamu untuk mencerahkan orang lain. Kamu adalah seniman yang juga seorang pemikir.",
        careers: ["Sutradara Film Dokumenter", "Jurnalis Investigatif", "Kurator Seni", "Penulis Esai", "Desainer Grafis Konseptual"],
        figures: ["Garin Nugroho", "Dee Lestari"]
    },
    A_R_C: {
        title: "Sang Maestro Karya",
        description: "Kamu adalah seniman yang juga seorang perajin. Kamu suka proses menciptakan sesuatu dari awal sampai akhir dengan tanganmu sendiri, dengan teliti dan terorganisir.",
        careers: ["Desainer Fashion", "Animator Stop-Motion", "Perajin Furnitur", "Restorator Benda Seni", "Pematung"],
        figures: ["Anne Avantie", "I Nyoman Nuarta"]
    },

    // KELOMPOK UTAMA: REALISTIC (The Doers)
    R_C_E: {
        title: "Sang Manajer Lapangan",
        description: "Kamu sangat praktis, terorganisir, dan bisa memimpin sebuah proyek dari awal sampai akhir. Kamu hebat dalam memastikan semua berjalan sesuai rencana, anggaran, dan waktu.",
        careers: ["Manajer Konstruksi", "Kepala Logistik (Supply Chain)", "Manajer Pabrik", "Wirausaha Bidang Manufaktur"],
        figures: ["Basuki Hadimuljono (Menteri PUPR)"]
    },
    R_I_S: {
        title: "Sang Pemecah Masalah Teknis",
        description: "Kamu suka mencari tahu 'kenapa' dan 'bagaimana' sebuah mesin atau sistem bekerja. Kamu senang membantu orang lain dengan cara memperbaiki atau menjelaskan hal-hal teknis.",
        careers: ["Ahli IT Support", "Mekanik Spesialis", "Teknisi Medis", "Quality Control Inspector"],
        figures: ["Pencipta teknologi di level teknisi ahli"]
    },
     R_E_S: {
        title: "Sang Pionir Usaha",
        description: "Kamu suka memulai sesuatu yang nyata dan bisa memimpin orang lain untuk ikut membangunnya. Kamu tidak takut kerja keras dan pandai menjual hasil kerjamu.",
        careers: ["Kontraktor", "Pengusaha Agrobisnis", "Pemilik Restoran", "Pengembang Properti"],
        figures: ["Susi Pudjiastuti", "Bob Sadino"]
    },

    // KELOMPOK UTAMA: ENTERPRISING (The Persuaders)
    E_C_S: {
        title: "Sang Eksekutif Andal",
        description: "Kamu adalah pemimpin alami yang terorganisir dan pandai berkomunikasi. Kamu bisa mengelola sumber daya dan orang lain untuk mencapai target yang jelas dalam sebuah perusahaan.",
        careers: ["Direktur Penjualan (Sales Director)", "Manajer Keuangan", "Administrator Bisnis", "Pengacara Perusahaan"],
        figures: ["Chairul Tanjung", "Dahlan Iskan"]
    },
    E_A_I: {
        title: "Sang Produser Visioner",
        description: "Kamu punya kemampuan untuk melihat potensi sebuah ide kreatif dan mewujudkannya menjadi sebuah bisnis. Kamu bisa memimpin para seniman dan pemikir untuk menciptakan karya besar.",
        careers: ["Produser Film/Musik", "Pemilik Galeri Seni", "Brand Strategist", "Direktur Kreatif Periklanan"],
        figures: ["Mira Lesmana", "Wishnutama"]
    },
    E_S_A: { // Alias untuk A_S_E tapi dengan penekanan pada Enterprising
        title: "Sang Penggerak Massa",
        description: "Kamu pandai berinteraksi dengan orang, punya ide-ide kreatif, dan bisa meyakinkan orang banyak untuk mengikuti visimu. Kamu adalah pusat dari sebuah gerakan atau acara besar.",
        careers: ["Juru Kampanye Politik", "Motivator", "Fundraiser Profesional", "Brand Ambassador"],
        figures: ["Merry Riana", "Helmy Yahya"]
    },

    // KELOMPOK UTAMA: CONVENTIONAL (The Organizers)
    C_S_E: {
        title: "Sang Administrator Publik",
        description: "Kamu suka bekerja dalam sistem yang teratur untuk melayani orang banyak. Kamu teliti, bisa diandalkan, dan mampu mengambil peran kepemimpinan dalam sebuah birokrasi.",
        careers: ["Pegawai Negeri Sipil (PNS) Tingkat Tinggi", "Analis Kebijakan Publik", "Administrator Rumah Sakit", "Manajer Keuangan Publik"],
        figures: ["Sri Mulyani Indrawati", "Abdullah Azwar Anas"]
    },
    C_R_I: {
        title: "Sang Penjaga Data",
        description: "Kamu sangat teliti, suka bekerja dengan data dan hal-hal praktis, serta punya rasa ingin tahu untuk memeriksa keakuratan. Kamu adalah tulang punggung operasional yang berbasis data.",
        careers: ["Analis Laboratorium", "Juru Arsip (Archivist)", "Programmer Database", "Ahli Peta (Cartographer)"],
        figures: ["Para ahli di BMKG atau Badan Pusat Statistik (BPS)"]
    },
    C_I_A: {
        title: "Sang Detektif Informasi",
        description: "Kamu suka keteraturan, senang menganalisis informasi, dan punya imajinasi untuk melihat pola yang tidak dilihat orang lain. Kamu hebat dalam riset yang membutuhkan ketelitian tinggi.",
        careers: ["Akuntan Forensik", "Auditor", "Analis Intelijen", "Pustakawan Riset", "Editor Naskah"],
        figures: ["Ahli pemeriksa fakta (fact-checker)"]
    },

    // Catch-all untuk kombinasi yang sangat langka
    DEFAULT: {
        title: "Sang Pribadi Unik",
        description: "Kombinasi minatmu sangat unik! Ini menunjukkan kamu punya banyak potensi di berbagai bidang. Teruslah eksplorasi hal-hal yang kamu suka untuk menemukan jalanmu sendiri.",
        careers: ["Teruslah belajar dan mencoba hal baru!"],
        figures: ["Jadilah tokoh inspiratif versimu sendiri!"]
    }
};

// =========================================================================================
// PEMETAAN 120 PERMUTASI KE ARCHETYPE
// Ini akan memastikan setiap kemungkinan kode memiliki interpretasi
// =========================================================================================
const interpretations = {
    // Social-led
    SIA: archetypes.S_A_I, SAI: archetypes.S_A_I, SIA: archetypes.S_A_I, ISA: archetypes.S_A_I, AIS: archetypes.S_A_I, ASI: archetypes.S_A_I,
    SEC: archetypes.S_E_C, SCE: archetypes.S_E_C, ESC: archetypes.S_E_C, ECS: archetypes.S_E_C, CSE: archetypes.S_E_C, CES: archetypes.S_E_C,
    SRA: archetypes.S_R_A, SAR: archetypes.S_R_A, RSA: archetypes.S_R_A, RAS: archetypes.S_R_A, ASR: archetypes.S_R_A, ARS: archetypes.S_R_A,
    SIE: archetypes.S_A_I, SEI: archetypes.S_A_I, ISE: archetypes.S_A_I, IES: archetypes.S_A_I, ESI: archetypes.S_A_I, EIS: archetypes.S_A_I,
    SRC: archetypes.S_R_A, SCR: archetypes.S_R_A, RSC: archetypes.S_R_A, RCS: archetypes.S_R_A, CSR: archetypes.S_R_A, CRS: archetypes.S_R_A,
    // Investigative-led
    IRA: archetypes.I_R_A, IAR: archetypes.I_R_A, RIA: archetypes.I_R_A, RAI: archetypes.I_R_A, ARI: archetypes.I_R_A, AIR: archetypes.I_R_A,
    IAC: archetypes.I_A_C, ICA: archetypes.I_A_C, AIC: archetypes.I_A_C, ACI: archetypes.I_A_C, CAI: archetypes.I_A_C, CIA: archetypes.I_A_C,
    IER: archetypes.I_E_R, IRE: archetypes.I_E_R, EIR: archetypes.I_E_R, ERI: archetypes.I_E_R, RIE: archetypes.I_E_R, REI: archetypes.I_E_R,
    ISC: archetypes.S_A_I, ICS: archetypes.S_A_I, SIC: archetypes.S_A_I, SCI: archetypes.S_A_I, CIS: archetypes.S_A_I, CSI: archetypes.S_A_I,
    // Artistic-led
    ASE: archetypes.A_S_E, AES: archetypes.A_S_E, SAE: archetypes.A_S_E, SEA: archetypes.A_S_E, ESA: archetypes.A_S_E, EAS: archetypes.A_S_E,
    ARC: archetypes.A_R_C, ACR: archetypes.A_R_C, RAC: archetypes.A_R_C, RCA: archetypes.A_R_C, CAR: archetypes.A_R_C, CRA: archetypes.A_R_C,
    AEC: archetypes.A_S_E, ACE: archetypes.A_S_E, EAC: archetypes.A_S_E, ECA: archetypes.A_S_E, CAE: archetypes.A_S_E, CEA: archetypes.A_S_E,
    // Realistic-led
    RCE: archetypes.R_C_E, REC: archetypes.R_C_E, CRE: archetypes.R_C_E, CER: archetypes.R_C_E, ECR: archetypes.R_C_E, ERC: archetypes.R_C_E,
    RIS: archetypes.R_I_S, RSI: archetypes.R_I_S, IRS: archetypes.R_I_S, ISR: archetypes.R_I_S, SRI: archetypes.R_I_S, SIR: archetypes.R_I_S,
    RES: archetypes.R_E_S, RSE: archetypes.R_E_S, ERS: archetypes.R_E_S, ESR: archetypes.R_E_S, SER: archetypes.R_E_S, SRE: archetypes.R_E_S,
    // Enterprising-led
    EIA: archetypes.E_A_I, EAI: archetypes.E_A_I, IEA: archetypes.E_A_I, IAE: archetypes.E_A_I, AIE: archetypes.E_A_I, AEI: archetypes.E_A_I,
    // Conventional-led
    CRI: archetypes.C_R_I, CIR: archetypes.C_R_I, RCI: archetypes.C_R_I, RIC: archetypes.C_R_I, ICR: archetypes.C_R_I, IRC: archetypes.C_R_I,

    // Fallback atau default
    default: archetypes.DEFAULT
};

// Definisikan kategori dan pertanyaan terkait
const riasecDomains = {
    R: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8'],
    I: ['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8'],
    A: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'],
    S: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
    E: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8'],
    C: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8']
};

// ROUTE UTAMA YANG DIPERBARUI
app.post('/api/test/submit', (req, res) => {
    const { answers, validation, metadata } = req.body;

    if (!answers || Object.keys(answers).length < 48) {
        return res.status(400).json({ success: false, message: "Jawaban tidak lengkap." });
    }

    if (validation && (validation.VCL6 === 1 || validation.VCL9 === 1 || validation.VCL12 === 1)) {
         return res.status(400).json({ 
            success: false, 
            message: "Terdeteksi jawaban tidak fokus. Coba jawab lebih teliti ya." 
        });
    }

    const rawScores = {};
    for (const domain in riasecDomains) {
        let score = 0;
        riasecDomains[domain].forEach(q => { score += answers[q] || 0; });
        rawScores[domain] = score;
    }
    const normalizedScores = {};
    for (const domain in rawScores) {
        normalizedScores[domain] = parseFloat(((rawScores[domain] - 8) / 32 * 100).toFixed(2));
    }
    const sortedProfile = Object.keys(normalizedScores).map(key => ({ code: key, domain: getDomainName(key), score: normalizedScores[key] })).sort((a, b) => b.score - a.score);
    const hollandCode = sortedProfile.slice(0, 3).map(d => d.code).join('');

    // --- LOGIKA BARU DITAMBAHKAN DI SINI ---
    const interpretation = interpretations[hollandCode] || interpretations["default"];

    // Kirimkan Hasil LENGKAP dengan interpretasi
    res.status(200).json({
        success: true,
        hollandCode: hollandCode,
        scores: { raw: rawScores, normalized: normalizedScores },
        profile: sortedProfile,
        interpretation: interpretation // <-- Tambahkan data interpretasi ke respons
    });
});

function getDomainName(code) {
    const names = {R: "Realistic", I: "Investigative", A: "Artistic", S: "Social", E: "Enterprising", C: "Conventional"};
    return names[code];
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});