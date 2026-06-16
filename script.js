// Sample data
const customers = [
    { churned: 0 },
    { churned: 1 },
    { churned: 0 },
    { churned: 1 },
    { churned: 0 },
    { churned: 0 },
    { churned: 1 },
    { churned: 0 }
];

// Calculations
const total = customers.length;
const churned = customers.filter(c => c.churned === 1).length;
const active = total - churned;
const churnRate = ((churned / total) * 100).toFixed(1);

// Display values
document.getElementById("totalCustomers").innerText = total;
document.getElementById("churnedCustomers").innerText = churned;
document.getElementById("activeCustomers").innerText = active;
document.getElementById("churnRate").innerText = churnRate + "%";

// Chart
const ctx = document.getElementById("churnChart").getContext("2d");

new Chart(ctx, {
    type: "pie",
    data: {
        labels: ["Active", "Churned"],
        datasets: [{
            data: [active, churned],
            backgroundColor: ["#2ecc71", "#e74c3c"]
        }]
    }
});
