function addExpense() {
  const expense = {
    amount: document.getElementById("amount").value,
    category: document.getElementById("category").value,
    date: document.getElementById("date").value,
    description: document.getElementById("description").value
  };

  fetch("http://localhost:3000/add-expense", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense)
  }).then(() => loadExpenses());

  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
}

// Delete expense
function deleteExpense(id) {
  fetch(`http://localhost:3000/delete-expense/${id}`, {
    method: "DELETE"
  }).then(() => loadExpenses());
}

// Load expenses and update list
function loadExpenses() {
  fetch("http://localhost:3000/expenses")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("list");
      const totalSpan = document.getElementById("total");
      list.innerHTML = "";
      let total = 0;

      data.forEach(exp => {
        total += parseFloat(exp.amount);
        const li = document.createElement("li");
        li.innerHTML = `
          <span class="amount">$${exp.amount}</span>
          <span class="category">${exp.category}</span>
          <button class="delete-btn" onclick="deleteExpense('${exp.id}')">Delete</button>
        `;
        list.appendChild(li);
      });

      totalSpan.innerText = `$${total.toFixed(2)}`;
    });
}

loadExpenses();