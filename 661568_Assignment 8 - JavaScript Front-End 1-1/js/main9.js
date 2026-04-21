function runTask() {
    console.log(`%c=== Running Task 9 ===`, `color: green; font-weight: bold;`);

// ==========================================
// 9. การแทรก HTML ด้วย JavaScript (DOM) [cite: 1074-1084]
// ==========================================

let div = document.createElement("div");
div.textContent = "Hello JavaScript";
div.style.color = "white";
div.style.backgroundColor = "gray";
div.id = "id";
// แทรกเข้าไปใน body
document.body.appendChild(div);

}
