const data = [
  { name: "Empresa A", revenue: "R$ 500,000", employees: 150 },
  { name: "Empresa B", revenue: "R$ 800,000", employees: 200 },
  { name: "Empresa C", revenue: "R$ 300,000", employees: 100 },
];

const MAX_DISPLAYED_COMPANIES = 3;

const companyForm = document.getElementById("companyForm");
const companyCardsContainer = document.querySelector(".company-cards");

companyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const companyName = document.getElementById("companyName").value;
  const companyRevenue = document.getElementById("companyRevenue").value;
  const companyEmployees = parseInt(
    document.getElementById("companyEmployees").value
  );

  const newCompany = {
    name: companyName,
    revenue: companyRevenue,
    employees: companyEmployees,
  };

  data.push(newCompany);

  if (data.length > MAX_DISPLAYED_COMPANIES) {
    data.shift();
  }

  updateCompanyCards();
  companyForm.reset();
});

function updateCompanyCards() {
  companyCardsContainer.innerHTML = "";

  data.forEach((item) => {
    const card = createCard(item);
    companyCardsContainer.appendChild(card);
  });
}

function createCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");

  const name = document.createElement("h2");
  name.textContent = item.name;

  const revenue = document.createElement("p");
  revenue.textContent = `Receita: ${item.revenue}`;

  const employees = document.createElement("p");
  employees.textContent = `Funcionários: ${item.employees}`;

  card.appendChild(name);
  card.appendChild(revenue);
  card.appendChild(employees);

  return card;
}

updateCompanyCards();
