function tambahTugas() {
    const input = document.getElementById('todoInput');
    const list = document.getElementById('todoList');

    if (input.value === "") {
        alert("Isi dulu tugasnya, Tur");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="toggleCheck(this)">${input.value}</span>
        <button class="delete-btn" onclick="hapusTugas(this)">Hapus</button>
    `;

    list.appendChild(li);
    input.value = "";
    simpanData(); // Simpan setiap kali nambah
}

function toggleCheck(elemen) {
    elemen.parentElement.classList.toggle('completed');
    simpanData(); // Simpan setiap kali ceklis
}

function hapusTugas(elemen) {
    elemen.parentElement.remove();
    simpanData(); // Simpan setiap kali hapus
}

// Menangani tombol Enter
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        tambahTugas();
    }
});

// FUNGSI KUNCI: Menyimpan ke memori browser
function simpanData() {
    const list = document.getElementById('todoList');
    localStorage.setItem("dataTugas", list.innerHTML);
}

// FUNGSI KUNCI: Mengambil data saat halaman dibuka
function tampilkanTugas() {
    const list = document.getElementById('todoList');
    const dataTersimpan = localStorage.getItem("dataTugas");
    if (dataTersimpan) {
        list.innerHTML = dataTersimpan;
    }
}

// Jalankan fungsi tampilkanTugas setiap kali halaman di-refresh
tampilkanTugas();