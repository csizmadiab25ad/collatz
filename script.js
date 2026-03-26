async function inditCollatz() {
    const inputField = document.getElementById("szam");
    let n = Math.abs(parseInt(inputField.value));
    const resultsDiv = document.getElementById("results");
    const stepDisplay = document.getElementById("step-display");
    const statusMsg = document.getElementById("status-message");

    if (isNaN(n) || n < 1) {
        statusMsg.innerHTML = "❌ Kérlek, adj meg egy 0-nál nagyobb számot!";
        return;
    }

    resultsDiv.innerHTML = "";
    statusMsg.innerHTML = "⏳ Számítás folyamatban...";
    let lepesek = 0;

    while (n !== 1) {
        let regiN = n;
        let muvelet = "";

        if (n % 2 === 0) {
            n = n / 2;
            muvelet = `<span class="math-highlight">${regiN} / 2</span> = ${n}`;
        } else {
            n = 3 * n + 1;
            muvelet = `<span class="math-highlight">3 * ${regiN} + 1</span> = ${n}`;
        }

        lepesek++;

        stepDisplay.style.opacity = 0;
        await new Promise(r => setTimeout(r, 200));
        
        stepDisplay.innerHTML = muvelet;
        stepDisplay.style.opacity = 1;

        const logItem = document.createElement("div");
        logItem.className = "log-item";
        logItem.innerHTML = `Lépés ${lepesek}: ${muvelet}`;
        resultsDiv.prepend(logItem); 

        await new Promise(r => setTimeout(r, 600)); 
    }

    statusMsg.innerHTML = `✅ Kész! <b>${lepesek}</b> lépés alatt értük el az 1-et.`;
    stepDisplay.innerHTML = "🎉 Megérkeztünk: 1";
}