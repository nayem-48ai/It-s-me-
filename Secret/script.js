const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const modal = document.getElementById("modal");
const modalLeft = document.getElementById("modalLeft");
const modalRight = document.getElementById("modalRight");
const modalClose = document.getElementById("modalClose");

// Load category options
function populateCategories() {
  const categories = Array.from(new Set(cards.map(card => card.category)));
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });
}

// Render cards with filters
function renderCards(filtered) {
  cardContainer.innerHTML = "";
  if (filtered.length === 0) {
    cardContainer.innerHTML = "<p>No cards found.</p>";
    return;
  }

  filtered.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.style.border = "1px solid #ccc";
    div.style.borderRadius = "10px";
    div.style.padding = "15px";
    div.style.marginBottom = "15px";
    div.style.backgroundColor = "#f9f9f9";
    div.style.boxShadow = "0 2px 6px rgba(0,0,0,0.05)";

    div.innerHTML = `
      <h3 style="margin: 0 0 10px;">${card.heading}</h3>
      <p><strong>Card:</strong> ${card.card_number}</p>
      <p><strong>Expiry:</strong> ${card.expiry}</p>
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <p style="margin: 0;"><strong>CVC:</strong> ${card.cvc}</p>
        <img src="${card.logo || ''}" alt="logo" style="width: 60px; height: 40px; object-fit: contain; border-radius: 6px; margin-left: 10px;" />
      </div>
      <p><strong>Country:</strong> ${card.country}</p>
    `;

    div.addEventListener("click", () => showModal(card));
    cardContainer.appendChild(div);
  });
}

// Modal show function with logo
function showModal(card) {
  modalLeft.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
      <img src="${card.logo || ''}" alt="logo" style="width:40px;height:40px;border-radius:8px;">
      <h3 style="margin:0;">${card.heading}</h3>
    </div>
    <p><strong>Card Number:</strong> ${card.card_number}</p>
    <p><strong>Expiry:</strong> ${card.expiry}</p>
    <p><strong>CVC:</strong> ${card.cvc}</p>
    <p><strong>Country:</strong> ${card.country}</p>
  `;
  modalRight.innerHTML = `
    <h4>Additional Info</h4>
    <p>${card.notes || "No notes provided."}</p>
  `;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

// Modal close logic
modalClose.onclick = () => {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto"; // Re-enable scroll
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto"; // Re-enable scroll
  }
};

// Filter Logic
function filterCards() {
  const search = searchInput.value.toLowerCase();
  const selectedCat = categorySelect.value;

  const filtered = cards.filter(card => {
    const matchCat = selectedCat === "all" || card.category === selectedCat;
    const matchSearch =
      card.heading.toLowerCase().includes(search) ||
      card.card_number.includes(search) ||
      card.country.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  renderCards(filtered);
}

// Event Listeners
searchInput.addEventListener("input", filterCards);
categorySelect.addEventListener("change", filterCards);

// Init
populateCategories();
renderCards(cards);