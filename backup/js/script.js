// Course Data
const coursesData = {
    beginner: {
        title: "Dasar C++",
        lessons: [
            {
                id: 1,
                title: "Pengenalan C++",
                content: `
                    <h3>Apa itu C++?</h3>
                    <p>C++ adalah bahasa pemrograman yang sangat populer dan powerful! Bayangkan C++ seperti bahasa yang digunakan komputer untuk memahami perintah kita.</p>
                    
                    <h4>Mengapa belajar C++?</h4>
                    <ul>
                        <li>🎮 Digunakan untuk membuat game seperti Minecraft dan Fortnite</li>
                        <li>💻 Digunakan untuk membuat aplikasi seperti Microsoft Office</li>
                        <li>🤖 Digunakan untuk robot dan teknologi canggih</li>
                        <li>📱 Digunakan untuk aplikasi mobile</li>
                    </ul>
                    
                    <h4>Program C++ Pertama</h4>
                    <p>Mari kita lihat program C++ yang paling sederhana:</p>
                    <pre><code>#include &lt;iostream&gt;
int main() {
    std::cout &lt;&lt; "Hello World!";
    return 0;
}</code></pre>
                    
                    <p>Program ini akan menampilkan "Hello World!" di layar. Mudah kan? 😊</p>
                `,
                quiz: {
                    type: "multiple-choice",
                    question: "Apa fungsi utama dari `std::cout` dalam C++?",
                    options: [
                        "Menerima input dari pengguna",
                        "Menampilkan output ke layar",
                        "Menyimpan data dalam variabel",
                        "Melakukan operasi matematika"
                    ],
                    answer: 1 // Index dari jawaban yang benar (dimulai dari 0)
                }
            },
            {
                id: 2,
                title: "Variabel dan Tipe Data",
                content: `
                    <h3>Variabel - Kotak Penyimpanan</h3>
                    <p>Variabel seperti kotak penyimpanan yang bisa menampung berbagai jenis data. Bayangkan kamu punya kotak mainan yang berbeda ukuran untuk mainan yang berbeda!</p>
                    
                    <h4>Jenis-jenis Variabel:</h4>
                    <ul>
                        <li><strong>int</strong> - untuk menyimpan angka bulat (1, 2, 3, 100)</li>
                        <li><strong>float</strong> - untuk menyimpan angka desimal (3.14, 2.5)</li>
                        <li><strong>string</strong> - untuk menyimpan teks ("Hello", "Nama saya")</li>
                        <li><strong>char</strong> - untuk menyimpan satu huruf ('A', 'B')</li>
                    </ul>
                    
                    <h4>Contoh Penggunaan Variabel:</h4>
                    <pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;

int main() {
    int umur = 12;
    float tinggi = 150.5;
    string nama = "Ahmad";
    
    std::cout &lt;&lt; "Nama: " &lt;&lt; nama &lt;&lt; std::endl;
    std::cout &lt;&lt; "Umur: " &lt;&lt; umur &lt;&lt; " tahun" &lt;&lt; std::endl;
    std::cout &lt;&lt; "Tinggi: " &lt;&lt; tinggi &lt;&lt; " cm" &lt;&lt; std::endl;
    
    return 0;
}</code></pre>
                    
                    <p>Program ini akan menampilkan nama, umur, dan tinggi seseorang! 🎯</p>
                `,
                quiz: {
                    type: "multiple-choice",
                    question: "Tipe data apa yang paling cocok untuk menyimpan angka desimal seperti 3.14?",
                    options: [
                        "int",
                        "char",
                        "float",
                        "string"
                    ],
                    answer: 2
                },
                codingChallenge: {
                    title: "Tantangan Coding: Deklarasi Variabel",
                    description: "Buatlah program C++ yang mendeklarasikan sebuah variabel `int` bernama `angkaFavorit` dan berikan nilai 7. Kemudian, tampilkan nilai variabel tersebut ke layar.",
                    initialCode: `#include <iostream>

int main() {
    // Deklarasikan variabel angkaFavorit di sini
    
    // Tampilkan nilai angkaFavorit ke layar
    
    return 0;
}`,
                    expectedOutput: "7" // Output yang diharapkan dari kode pengguna
                }
            },
            {
                id: 3,
                title: "Input dan Output",
                content: `
                    <h3>Berbicara dengan Komputer</h3>
                    <p>Input adalah cara kita memberikan data kepada komputer, seperti mengetik di keyboard. Output adalah cara komputer memberikan jawaban kepada kita, seperti menampilkan teks di layar.</p>
                    
                    <h4>Output dengan std::cout</h4>
                    <p>Untuk menampilkan sesuatu di layar, kita menggunakan <code>std::cout</code>:</p>
                    <pre><code>std::cout &lt;&lt; "Halo, nama saya Ahmad!" &lt;&lt; std::endl;</code></pre>
                    
                    <h4>Input dengan std::cin</h4>
                    <p>Untuk menerima input dari user, kita menggunakan <code>std::cin</code>:</p>
                    <pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;

int main() {
    string nama;
    int umur;
    
    std::cout &lt;&lt; "Masukkan nama kamu: ";
    std::cin &gt;&gt; nama;
    
    std::cout &lt;&lt; "Masukkan umur kamu: ";
    std::cin &gt;&gt; umur;
    
    std::cout &lt;&lt; "Halo " &lt;&lt; nama &lt;&lt; "! Kamu berumur " &lt;&lt; umur &lt;&lt; " tahun." &lt;&lt; std::endl;
    
    return 0;
}</code></pre>
                    
                    <p>Program ini akan meminta nama dan umur, lalu menampilkan salam yang personal! 👋</p>
                `,
                quiz: {
                    type: "multiple-choice",
                    question: "Operator apa yang digunakan untuk menerima input dari pengguna dengan `std::cin`?",
                    options: [
                        "<<",
                        ">>",
                        "==",
                        "!="
                    ],
                    answer: 1
                },
                codingChallenge: {
                    title: "Tantangan Coding: Input Nama",
                    description: "Buatlah program C++ yang meminta pengguna memasukkan namanya, lalu tampilkan pesan 'Halo, [Nama Pengguna]!'",
                    initialCode: `#include <iostream>
#include <string>

int main() {
    std::string nama;
    // Minta input nama dari pengguna
    
    // Tampilkan pesan sapaan
    
    return 0;
}`,
                    // Untuk input/output interaktif, kita bisa menggunakan fungsi simulasi atau mencocokkan pola
                    // Untuk contoh ini, kita akan asumsikan input 'Budi' dan output 'Halo, Budi!'
                    simulatedInput: "Budi",
                    expectedOutput: "Halo, Budi!"
                }
            },
            {
                id: 4,
                title: "Operasi Matematika",
                content: `
                    <h3>Matematika dalam C++</h3>
                    <p>C++ bisa melakukan operasi matematika seperti kalkulator! Kita bisa melakukan penjumlahan, pengurangan, perkalian, dan pembagian.</p>
                    
                    <h4>Operator Matematika:</h4>
                    <ul>
                        <li><strong>+</strong> - Penjumlahan</li>
                        <li><strong>-</strong> - Pengurangan</li>
                        <li><strong>*</strong> - Perkalian</li>
                        <li><strong>/</strong> - Pembagian</li>
                        <li><strong>%</strong> - Sisa bagi (modulus)</li>
                    </ul>
                    
                    <h4>Contoh Kalkulator Sederhana:</h4>
                    <pre><code>#include &lt;iostream&gt;

int main() {
    int angka1, angka2;
    int hasil;
    
    std::cout &lt;&lt; "Masukkan angka pertama: ";
    std::cin &gt;&gt; angka1;
    
    std::cout &lt;&lt; "Masukkan angka kedua: ";
    std;&lt;&lt; angka2;
    
    // Penjumlahan
    hasil = angka1 + angka2;
    std::cout &lt;&lt; angka1 &lt;&lt; " + " &lt;&lt; angka2 &lt;&lt; " = " &lt;&lt; hasil &lt;&lt; std::endl;
    
    // Pengurangan
    hasil = angka1 - angka2;
    std::cout &lt;&lt; angka1 &lt;&lt; " - " &lt;&lt; angka2 &lt;&lt; " = " &lt;&lt; hasil &lt;&lt; std::endl;
    
    // Perkalian
    hasil = angka1 * angka2;
    std::cout &lt;&lt; angka1 &lt;&lt; " * " &lt;&lt; angka2 &lt;&lt; " = " &lt;&lt; hasil &lt;&lt; std::endl;
    
    // Pembagian
    hasil = angka1 / angka2;
    std::cout &lt;&lt; angka1 &lt;&lt; " / " &lt;&lt; angka2 &lt;&lt; " = " &lt;&lt; hasil &lt;&lt; std::endl;
    
    return 0;
}</code></pre>
                    
                    <p>Sekarang kamu punya kalkulator sendiri! 🧮</p>
                `,
                quiz: {
                    type: "multiple-choice",
                    question: "Operator apa yang digunakan untuk mendapatkan sisa hasil bagi (modulus) dalam C++?",
                    options: [
                        "/",
                        "*",
                        "%",
                        "+"
                    ],
                    answer: 2
                },
                codingChallenge: {
                    title: "Tantangan Coding: Penjumlahan Dua Angka",
                    description: "Buatlah program C++ yang meminta dua angka bulat dari pengguna, lalu tampilkan hasil penjumlahannya.",
                    initialCode: `#include <iostream>

int main() {
    int num1, num2;
    // Minta input dua angka
    
    // Hitung dan tampilkan hasil penjumlahan
    
    return 0;
}`,
                    simulatedInput: "5\n10", // Input simulasi untuk num1 dan num2
                    expectedOutput: "15" // Output yang diharapkan
                }
            }
        ]
    },
    intermediate: {
        title: "C++ Menengah",
        lessons: [
            {
                id: 1,
                title: "Kondisi If-Else",
                content: `
                    <h3>Membuat Keputusan</h3>
                    <p>If-Else seperti membuat keputusan dalam kehidupan sehari-hari. Misalnya: "Jika hujan, pakai payung. Jika tidak hujan, tidak perlu payung."</p>
                    
                    <h4>Syntax If-Else:</h4>
                    <pre><code>if (kondisi) {
    // Lakukan ini jika kondisi benar
} else {
    // Lakukan ini jika kondisi salah
}</code></pre>
                    
                    <h4>Contoh: Cek Nilai</h4>
                    <pre><code>#include &lt;iostream&gt;

int main() {
    int nilai;
    
    std::cout &lt;&lt; "Masukkan nilai ujian (0-100): ";
    std::cin &gt;&gt; nilai;
    
    if (nilai >= 80) {
        std::cout &lt;&lt; "Selamat! Kamu mendapat nilai A!" &lt;&lt; std::endl;
    } else if (nilai >= 70) {
        std::cout &lt;&lt; "Bagus! Kamu mendapat nilai B!" &lt;&lt; std::endl;
    } else if (nilai >= 60) {
        std::cout &lt;&lt; "Cukup baik! Kamu mendapat nilai C!" &lt;&lt; std::endl;
    } else {
        std::cout &lt;&lt; "Perlu belajar lebih giat lagi!" &lt;&lt; std::endl;
    }
    
    return 0;
}</code></pre>
                    
                    <p>Program ini akan memberikan komentar berdasarkan nilai yang kamu masukkan! 📚</p>
                `,
                quiz: {
                    type: "multiple-choice",
                    question: "Apa yang akan terjadi jika kondisi dalam `if` bernilai `false`?",
                    options: [
                        "Kode di dalam `if` akan dieksekusi",
                        "Kode di dalam `else` akan dieksekusi",
                        "Program akan berhenti",
                        "Terjadi error kompilasi"
                    ],
                    answer: 1
                },
                codingChallenge: {
                    title: "Tantangan Coding: Cek Angka Positif",
                    description: "Buatlah program C++ yang meminta pengguna memasukkan sebuah angka. Jika angka tersebut positif, tampilkan 'Angka positif!'. Jika tidak, tampilkan 'Angka bukan positif.'.",
                    initialCode: `#include <iostream>

int main() {
    int angka;
    std::cout << "Masukkan sebuah angka: ";
    std::cin >> angka;
    
    // Tambahkan kondisi if-else di sini
    
    return 0;
}`,
                    testCases: [ // Multiple test cases for more robust checking
                        { input: "5", expectedOutput: "Angka positif!" },
                        { input: "-3", expectedOutput: "Angka bukan positif." },
                        { input: "0", expectedOutput: "Angka bukan positif." }
                    ]
                }
            },
            {
                id: 2,
                title: "Loop For dan While",
                content: `
                    <h3>Mengulang Tugas</h3>
                    <p>Loop seperti mengulang tugas yang sama berkali-kali. Bayangkan kamu harus menghitung dari 1 sampai 10 - loop akan melakukannya dengan cepat!</p>
                    
                    <h4>Loop For</h4>
                    <pre><code>for (inisialisasi; kondisi; update) {
    // Kode yang akan diulang
}</code></pre>
                    
                    <h4>Contoh: Menghitung 1 sampai 10</h4>
                    <pre><code>#include &lt;iostream&gt;

int main() {
    std::cout &lt;&lt; "Menghitung dari 1 sampai 10:" &lt;&lt; std::endl;
    
    for (int i = 1; i <= 10; i++) {
        std::cout &lt;&lt; i &lt;&lt; " ";
    }
    
    std::cout &lt;&lt; std::endl;
    
    return 0;
}</code></pre>
                    
                    <h4>Loop While</h4>
                    <pre><code>while (kondisi) {
    // Kode yang akan diulang selama kondisi benar
}</code></pre>
                    
                    <h4>Contoh: Game Tebak Angka</h4>
                    <pre><code>#include &lt;iostream&gt;

int main() {
    int angkaRahasia = 7;
    int tebakan;
    
    std::cout &lt;&lt; "Tebak angka dari 1-10!" &lt;&lt; std::endl;
    
    while (true) {
        std::cout &lt;&lt; "Masukkan tebakan kamu: ";
        std::cin &gt;&gt; tebakan;
        
        if (tebakan == angkaRahasia) {
            std::cout &lt;&lt; "Selamat! Kamu benar! 🎉" &lt;&lt; std::endl;
            break; // Keluar dari loop
        } else if (tebakan < angkaRahasia) {
            std::cout &lt;&lt; "Terlalu kecil! Coba lagi." &lt;&lt; std::endl;
        } else {
            std::cout &lt;&lt; "Terlalu besar! Coba lagi." &lt;&lt; std::endl;
        }
    }
    
    return 0;
}</code></pre>
                    
                    <p>Sekarang kamu bisa membuat game sederhana! 🎮</p>
                `,
                quiz: {
                    type: "multiple-choice",
                    question: "Berapa kali loop `for (int i = 0; i < 5; i++)` akan dieksekusi?",
                    options: [
                        "4 kali",
                        "5 kali",
                        "6 kali",
                        "Tidak terbatas"
                    ],
                    answer: 1
                },
                codingChallenge: {
                    title: "Tantangan Coding: Hitung Mundur",
                    description: "Buatlah program C++ yang menggunakan loop `for` untuk menghitung mundur dari 5 sampai 1, lalu tampilkan 'GO!'",
                    initialCode: `#include <iostream>

int main() {
    // Gunakan loop for untuk menghitung mundur
    
    std::cout << "GO!" << std::endl;
    
    return 0;
}`,
                    expectedOutput: "5\n4\n3\n2\n1\nGO!"
                }
            },
            {
                id: 3,
                title: "Fungsi dan Parameter",
                content: `
                    <h3>Membuat Fungsi Sendiri</h3>
                    <p>Fungsi seperti resep masakan yang bisa digunakan berkali-kali. Kita buat sekali, bisa dipakai untuk banyak hal!</p>
                    
                    <h4>Membuat Fungsi:</h4>
                    <pre><code>tipeData namaFungsi(parameter) {
    // Kode fungsi
    return nilai;
}</code></pre>
                    
                    <h4>Contoh: Fungsi Penjumlahan</h4>
                    <pre><code>#include &lt;iostream&gt;

// Fungsi untuk menjumlahkan dua angka
int tambah(int a, int b) {
    return a + b;
}

// Fungsi untuk mengecek angka genap atau ganjil
bool apakahGenap(int angka) {
    if (angka % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

int main() {
    int x, y;
    
    std::cout &lt;&lt; "Masukkan angka pertama: ";
    std::cin &gt;&gt; x;
    
    std::cout &lt;&lt; "Masukkan angka kedua: ";
    std::cin &gt;&gt; y;
    
    int hasil = tambah(x, y);
    std::cout &lt;&lt; x &lt;&lt; " + " &lt;&lt; y &lt;&lt; " = " &lt;&lt; hasil &lt;&lt; std::endl;
    
    if (apakahGenap(hasil)) {
        std::cout &lt;&lt; "Hasilnya adalah angka genap!" &lt;&lt; std::endl;
    } else {
        std::cout &lt;&lt; "Hasilnya adalah angka ganjil!" &lt;&lt; std::endl;
    }
    
    return 0;
}</code></pre>
                    
                    <p>Dengan fungsi, kode kita jadi lebih rapi dan bisa digunakan berkali-kali! 🔧</p>
                `,
                quiz: {
                    type: "multiple-choice",
                    question: "Apa tujuan utama dari menggunakan fungsi dalam pemrograman?",
                    options: [
                        "Membuat program lebih lambat",
                        "Mengurangi keterbacaan kode",
                        "Mengorganisir kode dan menghindari pengulangan",
                        "Menyebabkan error kompilasi"
                    ],
                    answer: 2
                },
                codingChallenge: {
                    title: "Tantangan Coding: Fungsi Perkalian",
                    description: "Buatlah sebuah fungsi bernama `kali` yang menerima dua parameter `int` dan mengembalikan hasil perkalian kedua angka tersebut. Panggil fungsi ini di `main` dengan angka 4 dan 5, lalu tampilkan hasilnya.",
                    initialCode: `#include <iostream>

// Buat fungsi kali di sini

int main() {
    // Panggil fungsi kali dan tampilkan hasilnya
    
    return 0;
}`,
                    expectedOutput: "20"
                }
            },
            {
                id: 4,
                title: "Array Dasar",
                content: `
                    <h3>Array - Kotak Penyimpanan Banyak</h3>
                    <p>Array seperti rak buku yang punya banyak slot. Setiap slot punya nomor urut dan bisa menyimpan data!</p>
                    
                    <h4>Membuat Array:</h4>
                    <pre><code>tipeData namaArray[ukuran];</code></pre>
                    
                    <h4>Contoh: Array Nama Teman</h4>
                    <pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;

int main() {
    // Array untuk menyimpan nama teman
    string teman[5] = {"Ahmad", "Siti", "Budi", "Lina", "Doni"};
    
    std::cout &lt;&lt; "Daftar nama teman:" &lt;&lt; std::endl;
    
    // Menampilkan semua nama
    for (int i = 0; i < 5; i++) {
        std::cout &lt;&lt; (i + 1) &lt;&lt; ". " &lt;&lt; teman[i] &lt;&lt; std::endl;
    }
    
    return 0;
}</code></pre>
                    
                    <h4>Array untuk Menyimpan Nilai</h4>
                    <pre><code>#include &lt;iostream&gt;

int main() {
    int nilai[5];
    int total = 0;
    
    std::cout &lt;&lt; "Masukkan 5 nilai ujian:" &lt;&lt; std::endl;
    
    // Input nilai
    for (int i = 0; i < 5; i++) {
        std::cout &lt;&lt; "Nilai ke-" &lt;&lt; (i + 1) &lt;&lt; ": ";
        std::cin &gt;&gt; nilai[i];
        total += nilai[i];
    }
    
    // Hitung rata-rata
    float rataRata = total / 5.0;
    
    std::cout &lt;&lt; "\\nNilai yang kamu masukkan:" &lt;&lt; std::endl;
    for (int i = 0; i < 5; i++) {
        std::cout &lt;&lt; "Nilai ke-" &lt;&lt; (i + 1) &lt;&lt; ": " &lt;&lt; nilai[i] &lt;&lt; std::endl;
    }
    
    std::cout &lt;&lt; "Total nilai: " &lt;&lt; total &lt;&lt; std::endl;
    std::cout &lt;&lt; "Rata-rata: " &lt;&lt; rataRata &lt;&lt; std::endl;
    
    return 0;
}</code></pre>
                    
                    <p>Array sangat berguna untuk menyimpan banyak data yang sejenis! 📚</p>
                `,
                quiz: {
                    type: "multiple-choice",
                    question: "Bagaimana cara mengakses elemen pertama dari sebuah array bernama `myArray`?",
                    options: [
                        "myArray[1]",
                        "myArray[0]",
                        "myArray.first()",
                        "myArray.get(0)"
                    ],
                    answer: 1
                },
                codingChallenge: {
                    title: "Tantangan Coding: Tampilkan Elemen Array",
                    description: "Buatlah sebuah array `string` bernama `buah` dengan 3 elemen: 'Apel', 'Jeruk', dan 'Mangga'. Tampilkan semua elemen array tersebut ke layar, masing-masing di baris baru.",
                    initialCode: `#include <iostream>
#include <string>

int main() {
    // Deklarasikan dan inisialisasi array buah di sini
    
    // Tampilkan elemen array
    
    return 0;
}`,
                    expectedOutput: "Apel\nJeruk\nMangga"
                }
            }
        ]
    },
    advanced: {
        title: "C++ Lanjutan",
        lessons: [
            {
                id: 1,
                title: "Pointer dan Memory",
                content: `
                    <h3>Pointer - Alamat Rumah</h3>
                    <p>Pointer seperti alamat rumah. Alamat memberitahu kita di mana rumah itu berada, tapi bukan rumah itu sendiri!</p>
                    
                    <h4>Membuat Pointer:</h4>
                    <pre><code>tipeData* namaPointer;</code></pre>
                    
                    <h4>Contoh Sederhana Pointer:</h4>
                    <pre><code>#include &lt;iostream&gt;

int main() {
    int angka = 42;
    int* pointerAngka = &angka; // & adalah operator alamat
    
    std::cout &lt;&lt; "Nilai angka: " &lt;&lt; angka &lt;&lt; std::endl;
    std::cout &lt;&lt; "Alamat angka: " &lt;&lt; pointerAngka &lt;&lt; std::endl;
    std::cout &lt;&lt; "Nilai melalui pointer: " &lt;&lt; *pointerAngka &lt;&lt; std::endl;
    
    // Mengubah nilai melalui pointer
    *pointerAngka = 100;
    std::cout &lt;&lt; "Nilai angka setelah diubah: " &lt;&lt; angka &lt;&lt; std::endl;
    
    return 0;
}</code></pre>
                    
                    <h4>Pointer dengan Array:</h4>
                    <pre><code>#include &lt;iostream&gt;

int main() {
    int angka[] = {10, 20, 30, 40, 50};
    int* ptr = angka; // Pointer menunjuk ke elemen pertama
    
    std::cout &lt;&lt; "Mengakses array dengan pointer:" &lt;&lt; std::endl;
    
    for (int i = 0; i < 5; i++) {
        std::cout &lt;&lt; "angka[" &lt;&lt; i &lt;&lt; "] = " &lt;&lt; *(ptr + i) &lt;&lt; std::endl;
    }
    
    return 0;
}</code></pre>
                    
                    <p>Pointer memungkinkan kita bekerja dengan memory secara langsung! 🧠</p>
                `,
                quiz: {
                    type: "multiple-choice",
                    question: "Operator apa yang digunakan untuk mendapatkan alamat memori dari sebuah variabel?",
                    options: [
                        "*",
                        "&",
                        "->",
                        "."
                    ],
                    answer: 1
                },
                codingChallenge: {
                    title: "Tantangan Coding: Pointer ke Variabel",
                    description: "Deklarasikan sebuah variabel `int` bernama `nilai` dengan nilai 25. Buatlah sebuah pointer `int*` bernama `ptrNilai` yang menunjuk ke `nilai`. Kemudian, gunakan `ptrNilai` untuk mengubah nilai `nilai` menjadi 50. Tampilkan nilai `nilai` setelah diubah.",
                    initialCode: `#include <iostream>

int main() {
    int nilai = 25;
    // Deklarasikan pointer dan tunjuk ke nilai
    
    // Ubah nilai melalui pointer
    
    std::cout << nilai << std::endl;
    
    return 0;
}`,
                    expectedOutput: "50"
                }
            },
            {
                id: 2,
                title: "Class dan Object",
                content: `
                    <h3>Object-Oriented Programming</h3>
                    <p>Class seperti cetakan kue, dan object adalah kue yang dibuat dari cetakan itu. Setiap kue punya bentuk yang sama tapi bisa berbeda rasa!</p>
                    
                    <h4>Membuat Class:</h4>
                    <pre><code>class NamaClass {
public:
    // Data dan fungsi yang bisa diakses dari luar
private:
    // Data yang hanya bisa diakses dari dalam class
};</code></pre>
                    
                    <h4>Contoh: Class Mobil</h4>
                    <pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;

class Mobil {
public:
    string merek;
    string warna;
    int kecepatan;
    
    // Constructor - dipanggil saat object dibuat
    Mobil(string m, string w) {
        merek = m;
        warna = w;
        kecepatan = 0;
    }
    
    // Fungsi untuk menambah kecepatan
    void gas() {
        kecepatan += 10;
        std::cout &lt;&lt; "Mobil " &lt;&lt; merek &lt;&lt; " sekarang berkecepatan " &lt;&lt; kecepatan &lt;&lt; " km/h" &lt;&lt; std::endl;
    }
    
    // Fungsi untuk mengurangi kecepatan
    void rem() {
        if (kecepatan > 0) {
            kecepatan -= 10;
            std::cout &lt;&lt; "Mobil " &lt;&lt; merek &lt;&lt; " sekarang berkecepatan " &lt;&lt; kecepatan &lt;&lt; " km/h" &lt;&lt; std::endl;
        }
    }
    
    // Fungsi untuk menampilkan info mobil
    void info() {
        std::cout &lt;&lt; "Mobil: " &lt;&lt; merek &lt;&lt; ", Warna: " &lt;&lt; warna &lt;&lt; ", Kecepatan: " &lt;&lt; kecepatan &lt;&lt; " km/h" &lt;&lt; std::endl;
    }
};

int main() {
    // Membuat object mobil
    Mobil mobil1("Toyota", "Merah");
    Mobil mobil2("Honda", "Biru");
    
    std::cout &lt;&lt; "=== Mobil 1 ===" &lt;&lt; std::endl;
    mobil1.info();
    mobil1.gas();
    mobil1.gas();
    mobil1.rem();
    
    std::cout &lt;&lt; "\\n=== Mobil 2 ===" &lt;&lt; std::endl;
    mobil2.info();
    mobil2.gas();
    mobil2.gas();
    mobil2.gas();
    
    return 0;
}</code></pre>
                    
                    <p>Dengan class, kita bisa membuat program yang lebih terorganisir dan mudah dipahami! 🚗</p>
                `,
                quiz: {
                    type: "multiple-choice",
                    question: "Apa perbedaan utama antara `class` dan `object`?",
                    options: [
                        "`class` adalah instance dari `object`",
                        "`object` adalah blueprint untuk `class`",
                        "`class` adalah blueprint, `object` adalah instance dari `class`",
                        "Tidak ada perbedaan, keduanya sama"
                    ],
                    answer: 2
                },
                codingChallenge: {
                    title: "Tantangan Coding: Class Hewan",
                    description: "Buatlah sebuah `class` bernama `Hewan` dengan properti `string nama` dan `void suara()` yang menampilkan 'Hewan bersuara'. Buat sebuah `object` dari `Hewan` dengan nama 'Kucing' dan panggil fungsi `suara()`-nya.",
                    initialCode: `#include <iostream>
#include <string>

// Buat class Hewan di sini

int main() {
    // Buat object Hewan dan panggil suara()
    
    return 0;
}`,
                    expectedOutput: "Hewan bersuara"
                }
            },
            {
                id: 3,
                title: "Inheritance",
                content: `
                    <h3>Pewarisan - Seperti Keluarga</h3>
                    <p>Inheritance seperti sifat yang diturunkan dari orang tua ke anak. Anak mendapat sifat dari orang tua, tapi juga bisa punya sifat sendiri!</p>
                    
                    <h4>Syntax Inheritance:</h4>
                    <pre><code>class AnakClass : public ParentClass {
    // Kode tambahan untuk anak class
};</code></pre>
                    
                    <h4>Contoh: Keluarga Hewan</h4>
                    <pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;

// Parent class (Kelas induk)
class Hewan {
public:
    string nama;
    int umur;
    
    Hewan(string n, int u) {
        nama = n;
        umur = u;
    }
    
    void makan() {
        std::cout &lt;&lt; nama &lt;&lt; " sedang makan..." &lt;&lt; std::endl;
    }
    
    void tidur() {
        std::cout &lt;&lt; nama &lt;&lt; " sedang tidur..." &lt;&lt; std::endl;
    }
    
    void info() {
        std::cout &lt;&lt; "Nama: " &lt;&lt; nama &lt;&lt; ", Umur: " &lt;&lt; umur &lt;&lt; " tahun" &lt;&lt; std::endl;
    }
};

// Child class (Kelas anak) - Kucing
class Kucing : public Hewan {
public:
    string warna;
    
    Kucing(string n, int u, string w) : Hewan(n, u) {
        warna = w;
    }
    
    void meong() {
        std::cout &lt;&lt; nama &lt;&lt; " berkata: Meong! Meong!" &lt;&lt; std::endl;
    }
    
    void infoKucing() {
        info(); // Memanggil fungsi dari parent class
        std::cout &lt;&lt; "Warna: " &lt;&lt; warna &lt;&lt; std::endl;
    }
};

// Child class (Kelas anak) - Anjing
class Anjing : public Hewan {
public:
    string ras;
    
    Anjing(string n, int u, string r) : Hewan(n, u) {
        ras = r;
    }
    
    void gonggong() {
        std::cout &lt;&lt; nama &lt;&lt; " berkata: Woof! Woof!" &lt;&lt; std::endl;
    }
    
    void infoAnjing() {
        info(); // Memanggil fungsi dari parent class
        std::cout &lt;&lt; "Ras: " &lt;&lt; ras &lt;&lt; std::endl;
    }
};

int main() {
    // Membuat object kucing dan anjing
    Kucing kucing1("Mimi", 3, "Orange");
    Anjing anjing1("Bobby", 5, "Golden Retriever");
    
    std::cout &lt;&lt; "=== Kucing ===" &lt;&lt; std::endl;
    kucing1.infoKucing();
    kucing1.makan(); // Fungsi dari parent class
    kucing1.meong(); // Fungsi khusus kucing
    
    std::cout &lt;&lt; "\\n=== Anjing ===" &lt;&lt; std::endl;
    anjing1.infoAnjing();
    anjing1.tidur(); // Fungsi dari parent class
    anjing1.gonggong(); // Fungsi khusus anjing
    
    return 0;
}</code></pre>
                    
                    <p>Inheritance membuat kode kita lebih efisien karena kita bisa menggunakan kode yang sudah ada! 🐱🐶</p>
                `,
                quiz: {
                    type: "multiple-choice",
                    question: "Dalam inheritance, kelas yang mewarisi disebut apa?",
                    options: [
                        "Parent class",
                        "Base class",
                        "Derived class",
                        "Super class"
                    ],
                    answer: 2
                },
                codingChallenge: {
                    title: "Tantangan Coding: Inheritance Bentuk",
                    description: "Buatlah `class` `Bentuk` dengan properti `string nama` dan fungsi `void gambar()` yang menampilkan 'Menggambar [nama]'. Kemudian, buat `class` `Lingkaran` yang mewarisi `Bentuk` dan memiliki properti tambahan `double radius`. Di `main`, buat `object` `Lingkaran` dengan nama 'Lingkaran Kecil' dan radius 5, lalu panggil fungsi `gambar()`-nya.",
                    initialCode: `#include <iostream>
#include <string>

// Buat class Bentuk di sini

// Buat class Lingkaran yang mewarisi Bentuk di sini

int main() {
    // Buat object Lingkaran dan panggil gambar()
    
    return 0;
}`,
                    expectedOutput: "Menggambar Lingkaran Kecil"
                }
            },
            {
                id: 4,
                title: "File Handling",
                content: `
                    <h3>Menyimpan dan Membaca File</h3>
                    <p>File handling seperti menyimpan catatan di buku tulis dan membaca catatan yang sudah kita tulis sebelumnya!</p>
                    
                    <h4>Menulis ke File:</h4>
                    <pre><code>#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;

int main() {
    std::ofstream file("catatan.txt"); // Membuat file baru
    
    if (file.is_open()) {
        file &lt;&lt; "Halo! Ini adalah catatan saya." &lt;&lt; std::endl;
        file &lt;&lt; "Hari ini saya belajar C++!" &lt;&lt; std::endl;
        file &lt;&lt; "C++ sangat menyenangkan untuk dipelajari." &lt;&lt; std::endl;
        
        file.close();
        std::cout &lt;&lt; "Catatan berhasil disimpan ke file!" &lt;&lt; std::endl;
    } else {
        std::cout &lt;&lt; "Gagal membuat file!" &lt;&lt; std::endl;
    }
    
    return 0;
}</code></pre>
                    
                    <h4>Membaca dari File:</h4>
                    <pre><code>#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;

int main() {
    std::ifstream file("catatan.txt"); // Membuka file untuk dibaca
    
    if (file.is_open()) {
        std::string baris;
        
        std::cout &lt;&lt; "Isi file catatan.txt:" &lt;&lt; std::endl;
        std::cout &lt;&lt; "====================" &lt;&lt; std::endl;
        
        while (getline(file, baris)) {
            std::cout &lt;&lt; baris &lt;&lt; std::endl;
        }
        
        file.close();
    } else {
        std::cout &lt;&lt; "File tidak ditemukan!" &lt;&lt; std::endl;
    }
    
    return 0;
}</code></pre>
                    
                    <h4>Contoh: Program Catatan Harian</h4>
                    <pre><code>#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;

int main() {
    std::string pilihan;
    
    std::cout &lt;&lt; "=== Program Catatan Harian ===" &lt;&lt; std::endl;
    std::cout &lt;&lt; "1. Tulis catatan baru" &lt;&lt; std::endl;
    std::cout &lt;&lt; "2. Baca catatan lama" &lt;&lt; std::endl;
    std::cout &lt;&lt; "Pilih (1/2): ";
    std::cin &gt;&gt; pilihan;
    
    if (pilihan == "1") {
        // Menulis catatan
        std::ofstream file("catatan_harian.txt", std::ios::app); // append mode
        
        if (file.is_open()) {
            std::string catatan;
            std::cout &lt;&lt; "Masukkan catatan kamu: ";
            std::cin.ignore();
            getline(std::cin, catatan);
            
            file &lt;&lt; catatan &lt;&lt; std::endl;
            file.close();
            
            std::cout &lt;&lt; "Catatan berhasil disimpan!" &lt;&lt; std::endl;
        }
    } else if (pilihan == "2") {
        // Membaca catatan
        std::ifstream file("catatan_harian.txt");
        
        if (file.is_open()) {
            std::string baris;
            std::cout &lt;&lt; "\\n=== Catatan Harian ===" &lt;&lt; std::endl;
            
            while (getline(file, baris)) {
                std::cout &lt;&lt; baris &lt;&lt; std::endl;
            }
            
            file.close();
        } else {
            std::cout &lt;&lt; "Belum ada catatan!" &lt;&lt; std::endl;
        }
    }
    
    return 0;
}</code></pre>
                    
                    <p>Sekarang kamu bisa membuat program yang menyimpan data secara permanen! 📝</p>
                `,
                quiz: {
                    type: "multiple-choice",
                    question: "Objek apa yang digunakan untuk menulis data ke dalam file di C++?",
                    options: [
                        "std::cin",
                        "std::cout",
                        "std::ifstream",
                        "std::ofstream"
                    ],
                    answer: 3
                },
                codingChallenge: {
                    title: "Tantangan Coding: Menulis ke File",
                    description: "Buatlah program C++ yang menulis teks 'Halo dari C++ Learning!' ke dalam sebuah file bernama `pesan.txt`.",
                    initialCode: `#include <iostream>
#include <fstream>
#include <string>

int main() {
    // Buka file 'pesan.txt' untuk ditulis
    
    // Tulis teks ke file
    
    // Tutup file
    
    return 0;
}`,
                    // Untuk tantangan file handling, kita perlu simulasi yang lebih kompleks
                    // Untuk saat ini, kita akan asumsikan keberhasilan penulisan
                    expectedOutput: "File berhasil ditulis!" // Ini akan menjadi output simulasi
                }
            }
        ]
    }
};

// Global variables
let currentCourse = null;
let currentLessonIndex = 0;
let progress = {
    beginner: 0,
    intermediate: 0,
    advanced: 0
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadProgress();
    updateProgressBars();
});

// Navigation functions
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Course functions
function startCourse(level) {
    currentCourse = level;
    currentLessonIndex = 0;
    
    // Hide courses section and show learning interface
    document.getElementById('courses').style.display = 'none';
    document.getElementById('learning').style.display = 'block';
    document.getElementById('learning-title').textContent = coursesData[level].title;
    
    // Populate lesson list
    populateLessonList(level);
    
    // Load first lesson
    loadLesson(level, 0);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function populateLessonList(level) {
    const lessonList = document.getElementById('lesson-list');
    lessonList.innerHTML = '';
    
    coursesData[level].lessons.forEach((lesson, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${lesson.title}`;
        li.addEventListener('click', () => {
            currentLessonIndex = index;
            loadLesson(level, index);
        });
        
        if (index === currentLessonIndex) {
            li.classList.add('active');
        }
        
        lessonList.appendChild(li);
    });
}

function loadLesson(level, lessonIndex) {
    const lesson = coursesData[level].lessons[lessonIndex];
    const lessonContentDiv = document.getElementById('lesson-content');
    const lessonCounter = document.getElementById('lesson-counter');
    
    // Clear previous content
    lessonContentDiv.innerHTML = '';

    // Add lesson content
    lessonContentDiv.innerHTML += lesson.content;

    // Add Quiz if available
    if (lesson.quiz) {
        lessonContentDiv.innerHTML += `
            <div class="quiz-section">
                <h3>Soal Interaktif: ${lesson.title}</h3>
                <p>${lesson.quiz.question}</p>
                <div class="quiz-options">
                    ${lesson.quiz.options.map((option, idx) => `
                        <label>
                            <input type="radio" name="quiz-option" value="${idx}">
                            ${option}
                        </label>
                    `).join('')}
                </div>
                <button class="btn btn-primary" onclick="checkQuizAnswer(${lesson.quiz.answer})">Cek Jawaban</button>
                <div id="quiz-feedback" class="quiz-feedback"></div>
            </div>
        `;
    }

    // Add Coding Challenge if available
    if (lesson.codingChallenge) {
        lessonContentDiv.innerHTML += `
            <div class="coding-challenge-section">
                <h3>${lesson.codingChallenge.title}</h3>
                <p>${lesson.codingChallenge.description}</p>
                <div class="code-editor-container">
                    <div class="editor-header">
                        <span>main.cpp</span>
                        <button class="btn btn-run" onclick="runCode()">
                            <i class="fas fa-play"></i> Run
                        </button>
                    </div>
                    <div id="code-editor" class="code-editor"></div>
                    <div class="editor-output">
                        <h4>Output:</h4>
                        <pre id="code-output"></pre>
                        <div id="challenge-feedback" class="challenge-feedback"></div>
                    </div>
                </div>
            </div>
        `;
        // Initialize CodeMirror after the div is added to DOM
        setTimeout(() => {
            initializeCodeEditor(lesson.codingChallenge.initialCode);
        }, 0);
    }
    
    // Update lesson counter
    lessonCounter.textContent = `Pelajaran ${lessonIndex + 1} dari ${coursesData[level].lessons.length}`;
    
    // Update active lesson in sidebar
    document.querySelectorAll('#lesson-list li').forEach((li, index) => {
        li.classList.toggle('active', index === lessonIndex);
    });
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = lessonIndex === 0;
    nextBtn.disabled = lessonIndex === coursesData[level].lessons.length - 1;
    
    // Update next button text
    if (lessonIndex === coursesData[level].lessons.length - 1) {
        nextBtn.innerHTML = '<i class="fas fa-check"></i> Selesai';
    } else {
        nextBtn.innerHTML = 'Selanjutnya <i class="fas fa-chevron-right"></i>';
    }

    // Re-animate code blocks in the lesson content
    setTimeout(animateCodeBlocks, 100);
}

// Quiz functions
function checkQuizAnswer(correctAnswerIndex) {
    const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
    const feedbackDiv = document.getElementById('quiz-feedback');
    
    if (!selectedOption) {
        feedbackDiv.innerHTML = '<p class="feedback-warning">Pilih salah satu jawaban terlebih dahulu!</p>';
        return;
    }
    
    if (parseInt(selectedOption.value) === correctAnswerIndex) {
        feedbackDiv.innerHTML = '<p class="feedback-success">🎉 Jawabanmu benar! Selamat!</p>';
    } else {
        feedbackDiv.innerHTML = '<p class="feedback-error">Oops, jawabanmu salah. Coba lagi!</p>';
    }
}

// Code Editor (CodeMirror)
let editor;

function initializeCodeEditor(initialCode) {
    const codeEditorDiv = document.getElementById('code-editor');
    if (codeEditorDiv) {
        // Clear previous editor instance if any
        if (editor) {
            editor.toTextArea(); // Convert CodeMirror back to textarea
            codeEditorDiv.innerHTML = ''; // Clear the div
        }

        // Create a textarea element for CodeMirror
        const textarea = document.createElement('textarea');
        textarea.value = initialCode;
        codeEditorDiv.appendChild(textarea);

        editor = CodeMirror.fromTextArea(textarea, {
            lineNumbers: true,
            mode: "text/x-c++src",
            theme: "dracula", // Or any other dark theme
            indentUnit: 4,
            tabSize: 4,
            indentWithTabs: false,
            autoCloseBrackets: true,
            matchBrackets: true,
            extraKeys: {
                "Ctrl-Space": "autocomplete"
            }
        });
        editor.setSize("100%", "300px"); // Set editor size
    }
}

// Simulate code execution (frontend only)
function runCode() {
    const userCode = editor.getValue();
    const outputDiv = document.getElementById('code-output');
    const challengeFeedbackDiv = document.getElementById('challenge-feedback');
    const currentLesson = coursesData[currentCourse].lessons[currentLessonIndex];
    const codingChallenge = currentLesson.codingChallenge;

    outputDiv.textContent = 'Running code...';
    challengeFeedbackDiv.innerHTML = '';

    // Simulate compilation and execution
    // In a real application, you would send this code to a backend server
    // that compiles and runs C++ code (e.g., using Docker, Judge0, etc.)
    // For this frontend-only example, we'll simulate output and check against expected.

    setTimeout(() => {
        let simulatedOutput = '';
        let isCorrect = false;

        // Basic simulation logic (very limited)
        if (codingChallenge.simulatedInput) {
            // If simulated input is provided, we can try to mimic basic cin/cout
            // This is a very naive simulation and won't handle complex logic
            simulatedOutput = simulateCppExecution(userCode, codingChallenge.simulatedInput);
        } else {
            // For challenges without specific input, we just look for expected output
            // This is also very basic and assumes direct output.
            // A real compiler/runner would be needed for actual execution.
            simulatedOutput = "Simulated output based on code structure (requires backend for actual C++ execution)";
            // For simple cases, we can try to extract std::cout strings
            const coutMatches = userCode.match(/std::cout\s*<<\s*"(.*?)"/g);
            if (coutMatches) {
                simulatedOutput = coutMatches.map(match => {
                    const text = match.match(/std::cout\s*<<\s*"(.*?)"/)[1];
                    return text.replace(/\\n/g, '\n'); // Handle newline characters
                }).join('');
            }
        }
        
        outputDiv.textContent = simulatedOutput;

        // Check if the simulated output matches the expected output
        if (codingChallenge.testCases) {
            isCorrect = codingChallenge.testCases.every(testCase => {
                const testOutput = simulateCppExecution(userCode, testCase.input);
                return testOutput.trim() === testCase.expectedOutput.trim();
            });
        } else if (codingChallenge.expectedOutput) {
            isCorrect = simulatedOutput.trim() === codingChallenge.expectedOutput.trim();
        } else {
            // If no expected output, just say it ran
            isCorrect = true; // Assume correct if no specific check
        }

        if (isCorrect) {
            challengeFeedbackDiv.innerHTML = '<p class="feedback-success">🎉 Kode Anda berjalan dengan benar! Selamat!</p>';
        } else {
            challengeFeedbackDiv.innerHTML = '<p class="feedback-error">Kode Anda berjalan, tetapi output tidak sesuai harapan. Coba lagi!</p>';
        }

    }, 1500); // Simulate a delay for compilation/execution
}

// Very basic C++ execution simulator (frontend only)
// This is extremely limited and only handles simple std::cout and std::cin for int/string
function simulateCppExecution(code, input = "") {
    let output = "";
    let inputLines = input.split('\n');
    let inputIndex = 0;

    // Replace std::cout with a function that appends to output
    let modifiedCode = code.replace(/std::cout\s*<<\s*(.*?)(?:std::endl|;)/g, (match, p1) => {
        // Try to evaluate simple string literals or variable names
        let value = p1.trim();
        if (value.startsWith('"') && value.endsWith('"')) {
            value = value.substring(1, value.length - 1);
        } else if (value.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)) {
            // This is where a real interpreter would evaluate variable values
            // For now, we'll just output the variable name as a placeholder
            value = `[${value}]`; 
        } else if (value.match(/^\d+$/)) { // Simple integer
            value = parseInt(value);
        }
        return `_simulate_cout_("${value}\\n");`;
    });

    // Replace std::cin with a function that reads from simulated input
    modifiedCode = modifiedCode.replace(/std::cin\s*>>\s*(.*?);/g, (match, p1) => {
        const varName = p1.trim();
        return `${varName} = _simulate_cin_();`;
    });

    // Define simulation functions
    const _simulate_cout_ = (val) => { output += val; };
    const _simulate_cin_ = () => {
        if (inputIndex < inputLines.length) {
            return inputLines[inputIndex++];
        }
        return ""; // No more input
    };

    // Attempt to "execute" the modified code using eval (DANGEROUS in real apps, but for simulation)
    // This is NOT a real C++ execution. It's a very crude JS simulation.
    try {
        // We need to parse the C++ code to extract variable declarations and assignments
        // This is beyond a simple regex and would require a full parser or a backend.
        // For now, we'll just try to capture simple cases.

        // Example: int x = 5;
        const intVars = {};
        const stringVars = {};

        // Simple variable declaration/assignment simulation
        modifiedCode = modifiedCode.replace(/int\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(\d+);/g, (match, varName, value) => {
            intVars[varName] = parseInt(value);
            return `// int ${varName} = ${value}; (simulated)`;
        });
        modifiedCode = modifiedCode.replace(/std::string\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*"(.*?)";/g, (match, varName, value) => {
            stringVars[varName] = value;
            return `// std::string ${varName} = "${value}"; (simulated)`;
        });

        // Simple assignment simulation
        modifiedCode = modifiedCode.replace(/([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(\d+);/g, (match, varName, value) => {
            if (intVars.hasOwnProperty(varName)) {
                intVars[varName] = parseInt(value);
            }
            return `// ${varName} = ${value}; (simulated)`;
        });

        // Simple arithmetic simulation (very limited)
        modifiedCode = modifiedCode.replace(/([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\+\s*([a-zA-Z_][a-zA-Z0-9_]*);/g, (match, resultVar, var1, var2) => {
            if (intVars.hasOwnProperty(var1) && intVars.hasOwnProperty(var2)) {
                intVars[resultVar] = intVars[var1] + intVars[var2];
            }
            return `// ${resultVar} = ${var1} + ${var2}; (simulated)`;
        });

        // Now, try to execute the modified code with the simulation functions
        // This is still highly experimental and will break with complex C++
        // A better approach is to use a WebAssembly C++ compiler or a backend.
        // For the purpose of this demo, it gives a basic idea.
        
        // We need to make the simulated variables available to the _simulate_cout_
        // This is tricky with simple eval. A more structured approach is needed.
        // For now, let's just focus on direct string outputs.

        // A more robust simulation would involve parsing the C++ code into an AST
        // and then interpreting that AST in JavaScript. This is a significant project.
        // For a simple demo, we'll rely on direct string matching for expected output.

        // For the purpose of this demo, we'll just return the output captured by _simulate_cout_
        // and assume the user's code will produce the expected output if it's correct.
        // The actual "execution" of the C++ logic is not happening here.
        
        // Let's refine the simulated output for simple cases
        const lines = userCode.split('\n');
        for (const line of lines) {
            const coutMatch = line.match(/std::cout\s*<<\s*"(.*?)"/);
            if (coutMatch) {
                output += coutMatch[1].replace(/\\n/g, '\n') + '\n';
            }
            const cinMatch = line.match(/std::cin\s*>>\s*([a-zA-Z_][a-zA-Z0-9_]*)/);
            if (cinMatch && inputIndex < inputLines.length) {
                // Simulate reading input
                const varName = cinMatch[1];
                // In a real scenario, this input would be assigned to the variable
                // For now, we just consume the input line.
                inputIndex++;
            }
        }
        // Remove trailing newline if any
        if (output.endsWith('\n')) {
            output = output.slice(0, -1);
        }

    } catch (e) {
        output = `Error during simulation: ${e.message}\nThis is a frontend simulation and cannot fully execute C++ code.`;
    }
    return output;
}


function previousLesson() {
    if (currentLessonIndex > 0) {
        currentLessonIndex--;
        loadLesson(currentCourse, currentLessonIndex);
    }
}

function nextLesson() {
    const currentLesson = coursesData[currentCourse].lessons[currentLessonIndex];
    let canProceed = true;

    // Check if quiz is answered correctly
    if (currentLesson.quiz) {
        const selectedOption = document.querySelector('input[name="quiz-option"]:checked');
        if (!selectedOption || parseInt(selectedOption.value) !== currentLesson.quiz.answer) {
            alert("Harap selesaikan kuis dengan benar sebelum melanjutkan!");
            canProceed = false;
        }
    }

    // Check if coding challenge is completed (simulated)
    if (currentLesson.codingChallenge) {
        // For a real app, you'd have a flag set by the backend after successful submission
        // For this demo, we'll assume it's completed if the user has run it and it matched
        // This is a placeholder and needs actual logic for checking challenge completion.
        const challengeFeedbackDiv = document.getElementById('challenge-feedback');
        if (!challengeFeedbackDiv || !challengeFeedbackDiv.innerHTML.includes('feedback-success')) {
             alert("Harap selesaikan tantangan coding dengan benar sebelum melanjutkan!");
             canProceed = false;
        }
    }

    if (canProceed) {
        if (currentLessonIndex < coursesData[currentCourse].lessons.length - 1) {
            currentLessonIndex++;
            loadLesson(currentCourse, currentLessonIndex);
        } else {
            // Course completed
            completeCourse(currentCourse);
        }
    }
}

function completeCourse(level) {
    // Update progress
    progress[level] = 100;
    saveProgress();
    updateProgressBars();
    
    // Show completion message
    alert(`Selamat! Kamu telah menyelesaikan course ${coursesData[level].title}! 🎉`);
    
    // Go back to courses
    backToCourses();
}

function backToCourses() {
    document.getElementById('learning').style.display = 'none';
    document.getElementById('courses').style.display = 'block';
    
    // Scroll to courses section
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
}

// Progress tracking
function loadProgress() {
    const savedProgress = localStorage.getItem('cpp-learning-progress');
    if (savedProgress) {
        progress = JSON.parse(savedProgress);
    }
}

function saveProgress() {
    localStorage.setItem('cpp-learning-progress', JSON.stringify(progress));
}

function updateProgressBars() {
    Object.keys(progress).forEach(level => {
        const progressFill = document.querySelector(`[data-level="${level}"] .progress-fill`);
        const progressText = document.querySelector(`[data-level="${level}"] .progress-text`);
        
        if (progressFill && progressText) {
            progressFill.style.width = `${progress[level]}%`;
            progressText.textContent = `${progress[level]}% Complete`;
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.disabled) {
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        }
    });
});

// Add hover effects to course cards
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Keyboard navigation for lessons
document.addEventListener('keydown', function(e) {
    if (document.getElementById('learning').style.display !== 'none') {
        if (e.key === 'ArrowLeft') {
            previousLesson();
        } else if (e.key === 'ArrowRight') {
            nextLesson();
        }
    }
});

// Add animation to code blocks
function animateCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            block.style.transition = 'all 0.5s ease';
            block.style.opacity = '1';
            block.style.transform = 'translateY(0)';
        }, 100);
    });
}

// Call animation when lesson content is loaded
const originalLoadLesson = loadLesson;
loadLesson = function(level, lessonIndex) {
    originalLoadLesson(level, lessonIndex);
    setTimeout(animateCodeBlocks, 100);
    // ... (kode yang sudah ada) ...

function loadLesson(level, lessonIndex) {
    const lesson = coursesData[level].lessons[lessonIndex];
    const lessonContentDiv = document.getElementById('lesson-content');
    const lessonCounter = document.getElementById('lesson-counter');
    
    // Clear previous content
    lessonContentDiv.innerHTML = '';

    // Create a temporary div to hold content before animating
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = lesson.content;

    // Apply animations to elements within the lesson content
    let delayCounter = 0;
    Array.from(tempDiv.children).forEach(child => {
        if (child.tagName === 'H3' || child.tagName === 'H4' || child.tagName === 'P') {
            child.classList.add('animated-text', `delay-${delayCounter++}`);
        } else if (child.tagName === 'UL') {
            Array.from(child.children).forEach((li, liIndex) => {
                li.classList.add('animated-list-item');
                li.style.animationDelay = `${0.3 + liIndex * 0.1}s`; // Staggered animation for list items
            });
            child.classList.add('animated-text', `delay-${delayCounter++}`); // Animate the ul itself
        } else if (child.tagName === 'PRE') {
            child.classList.add('animated-code-block', `delay-${delayCounter++}`);
        }
    });

    lessonContentDiv.appendChild(tempDiv);

    // Add Quiz if available
    if (lesson.quiz) {
        const quizSection = document.createElement('div');
        quizSection.classList.add('quiz-section', 'animated-section');
        quizSection.style.animationDelay = `${0.5 + delayCounter * 0.1}s`; // Delay after main content
        quizSection.innerHTML = `
            <h3>Soal Interaktif: ${lesson.title}</h3>
            <p>${lesson.quiz.question}</p>
            <div class="quiz-options">
                ${lesson.quiz.options.map((option, idx) => `
                    <label>
                        <input type="radio" name="quiz-option" value="${idx}">
                        ${option}
                    </label>
                `).join('')}
            </div>
            <button class="btn btn-primary" onclick="checkQuizAnswer(${lesson.quiz.answer})">Cek Jawaban</button>
            <div id="quiz-feedback" class="quiz-feedback"></div>
        `;
        lessonContentDiv.appendChild(quizSection);
    }

    // Add Coding Challenge if available
    if (lesson.codingChallenge) {
        const codingChallengeSection = document.createElement('div');
        codingChallengeSection.classList.add('coding-challenge-section', 'animated-section');
        codingChallengeSection.style.animationDelay = `${0.7 + delayCounter * 0.1}s`; // Delay after quiz/main content
        codingChallengeSection.innerHTML = `
            <h3>${lesson.codingChallenge.title}</h3>
            <p>${lesson.codingChallenge.description}</p>
            <div class="code-editor-container">
                <div class="editor-header">
                    <span>main.cpp</span>
                    <button class="btn btn-run" onclick="runCode()">
                        <i class="fas fa-play"></i> Run
                    </button>
                </div>
                <div id="code-editor" class="code-editor"></div>
                <div class="editor-output">
                    <h4>Output:</h4>
                    <pre id="code-output"></pre>
                    <div id="challenge-feedback" class="challenge-feedback"></div>
                </div>
            </div>
        `;
        lessonContentDiv.appendChild(codingChallengeSection);

        // Initialize CodeMirror after the div is added to DOM
        setTimeout(() => {
            initializeCodeEditor(lesson.codingChallenge.initialCode);
        }, 1000 + delayCounter * 100); // Give some time for other animations to finish
    }
    
    // Update lesson counter
    lessonCounter.textContent = `Pelajaran ${lessonIndex + 1} dari ${coursesData[level].lessons.length}`;
    
    // Update active lesson in sidebar
    document.querySelectorAll('#lesson-list li').forEach((li, index) => {
        li.classList.toggle('active', index === lessonIndex);
    });
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = lessonIndex === 0;
    nextBtn.disabled = lessonIndex === coursesData[level].lessons.length - 1;
    
    // Update next button text
    if (lessonIndex === coursesData[level].lessons.length - 1) {
        nextBtn.innerHTML = '<i class="fas fa-check"></i> Selesai';
    } else {
        nextBtn.innerHTML = 'Selanjutnya <i class="fas fa-chevron-right"></i>';
    }

    // No need for animateCodeBlocks here anymore as it's handled inline
}

// ... (fungsi checkQuizAnswer, initializeCodeEditor, runCode, simulateCppExecution, previousLesson, nextLesson, completeCourse, backToCourses, loadProgress, saveProgress, updateProgressBars, initializeNavigation, scrollToSection) ...

// Remove the original animateCodeBlocks function and its call in loadLesson
// The animation is now applied directly within loadLesson.
// So, delete these lines:
/*
function animateCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            block.style.transition = 'all 0.5s ease';
            block.style.opacity = '1';
            block.style.transform = 'translateY(0)';
        }, 100);
    });
}

const originalLoadLesson = loadLesson;
loadLesson = function(level, lessonIndex) {
    originalLoadLesson(level, lessonIndex);
    setTimeout(animateCodeBlocks, 100);
};
*/
};

