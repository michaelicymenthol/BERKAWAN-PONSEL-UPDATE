// Cek login dan handle logout
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}

// Data awal
const phones = [
    { brand: "Oppo", stock: 50, sold: 45 },
    { brand: "Vivo", stock: 50, sold: 35 },
    { brand: "Samsung", stock: 35, sold: 20 },
    { brand: "Realme", stock: 60, sold: 45 },
    { brand: "Xiaomi", stock: 60, sold: 50 },
    { brand: "Infinix", stock: 60, sold: 55 }
];


const tableBody = document.getElementById("table-body");

function renderTable() {
    tableBody.innerHTML = "";
    phones.forEach(phone => {
      const sisa = phone.stock - phone.sold;
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${phone.brand}</td>
        <td>${phone.stock}</td>
        <td>${phone.sold}</td>
        <td>${sisa}</td>
     `;

     tableBody.appendChild(row);
   });
}

renderTable();

// Form tambah data
const form = document.getElementById("add-phone-form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const brand = document.getElementById("brand").value;
    const stock = parseInt(document.getElementById("stock").value);
    const sold = parseInt(document.getElementById("sold").value);

    if (!brand || isNaN(stock) || isNaN(sold)) {
        alert("Isi semua data dengan benar.");
        return;
    }

    phones.push({ brand, stock, sold });
    renderTable();
    form.reset();
    });