let selectedPlayer = 1;

function selectPlayer(p) {
    selectedPlayer = p;
    document.querySelectorAll('.life-box').forEach(el => el.classList.remove('active'));
    document.getElementById('p' + p).classList.add('active');
}

function modifyLife(amount) {
    let el = document.getElementById('life' + selectedPlayer);
    el.innerText = parseInt(el.innerText) + amount;
}

function modifyCustom(multiplier) {
    let val = parseInt(document.getElementById('customVal').value) || 0;
    modifyLife(val * multiplier);
}

function openCalc() {
    let expr = prompt("Digite o cálculo:");
    if (expr) {
        try {
            let res = eval(expr);
            if(confirm("Aplicar " + res + " na vida?")) modifyLife(res);
        } catch (e) { alert("Cálculo inválido!"); }
    }
}