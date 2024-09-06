// Currency converter
function convertCurrency() {
    const exchangeRate = 55.92; // Replace with real-time rate

    const usdAmount = parseFloat(document.getElementById("usdAmount").value);

    if (isNaN(usdAmount)) {
        alert("Please enter a valid USD amount.");
        return;
    }

    const phpAmount = usdAmount * exchangeRate;
    document.getElementById("phpAmount").textContent = "PHP " + phpAmount.toFixed(2);
}

// Rate calculator
function calculateRates() {
    const desiredHourlyRate = parseFloat(document.getElementById("desiredHourlyRate").value);
    const workHoursPerWeek = parseFloat(document.getElementById("workHours").value);

    if (isNaN(desiredHourlyRate) || isNaN(workHoursPerWeek)) {
        alert("Please enter valid numbers for hourly rate and work hours.");
        return;
    }

    // Calculate daily, weekly, and monthly rates
    const dailyRate = desiredHourlyRate * workHoursPerWeek / 5;
    const weeklyRate = dailyRate * 5;
    const monthlyRate = weeklyRate * 4;

    // Update the rate results div
    document.getElementById("rateResults").innerHTML = `
        Hourly Rate: PHP ${desiredHourlyRate.toFixed(2)}<br>
        Daily Rate: PHP ${dailyRate.toFixed(2)}<br>
        Weekly Rate: PHP ${weeklyRate.toFixed(2)}<br>
        Monthly Rate: PHP ${monthlyRate.toFixed(2)}<br>
    `;
}

// Job tracker
function addJob() {
    const role = document.getElementById("role").value;
    const dateApplied = document.getElementById("dateApplied").value;
    const link = document.getElementById("link").value;
    const resumeSent = document.getElementById("resumeSent").checked;
    const status = document.getElementById("status").value;
    const remarks = document.getElementById("remarks").value;

    // Validate input fields (e.g., ensure date is valid)

    // Create a new table row and append it to the tbody
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${role}</td>
        <td>${dateApplied}</td>
        <td><a href="${link}">${link}</a></td>
        <td>${resumeSent ? "Yes" : "No"}</td>
        <td>${status}</td>
        <td>${remarks}</td>
    `;
    document.getElementById("jobTableBody").appendChild(newRow);
}
