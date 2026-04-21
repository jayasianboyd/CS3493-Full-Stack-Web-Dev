function runTask() {
    console.log(`%c=== Running Task 8 ===`, `color: green; font-weight: bold;`);

// ==========================================
// 8. พารามิเตอร์รับหลายค่า (Rest Parameters) [cite: 966-969, 1009-1010]
// ==========================================

const userLanguage = (fullname, ...language) => {
    // language จะกลายเป็น Array
    // ใช้ .map() เพื่อวนลูปอ่านค่า
    return language.map(l => fullname + " ชอบภาษา : " + l);
}
console.log(userLanguage("AAA 3A", "Java", "C++", "C#"));

}
