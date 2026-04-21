function runTask() {
    console.log(`%c=== Running Task 3 ===`, `color: green; font-weight: bold;`);


// ==========================================
// 3. ตัวแปร var และ let [cite: 224, 342-348]
// ==========================================
// การใช้ var (Global Scope)
var product = 300;
console.log("value is:", product);

// การใช้ let (Block Scope - แนะนำให้ใช้ตัวนี้)
let dataLet = "JS";
let point = 10;
if (point === 10) {
    let dataLet = "C++";
    console.log("Internal : " + dataLet);
}
console.log("External : " + dataLet);

}
