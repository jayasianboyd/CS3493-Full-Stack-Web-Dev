function runTask() {
    console.log(`%c=== Running Task 7 ===`, `color: green; font-weight: bold;`);

// ==========================================
// 7. Template Literals (การต่อข้อความแบบใหม่) [cite: 896, 931-932]
// ==========================================

const ShowData = (firstname, lastname) => {
    return `Mr.${firstname} ${lastname}`; // ใช้ Backtick (``)
}
console.log("Data is : " + ShowData("AAA", "3A"));

const ProcessData = (num1, num2) => {
    return `Summation is: ${num1 + num2}`;
}
console.log("Result is: ", ProcessData(100, 200));


}
