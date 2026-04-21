function runTask() {
    console.log(`%c=== Running Task 5 ===`, `color: green; font-weight: bold;`);

// ==========================================
// 5. ฟังก์ชัน (Function) และ Arrow Function [cite: 537, 583, 612]
// ==========================================

// แบบปกติ
function addNormal(x, y) {
    return x + y;
}

// Arrow Function แบบเต็ม
const addArrow = (x, y) => { return x + y };

// Arrow Function แบบลดรูป
const addShort = (x, y) => x + y;
const addSingleParam = x => x + 1000;

console.log("Result is", addSingleParam(100));

}
