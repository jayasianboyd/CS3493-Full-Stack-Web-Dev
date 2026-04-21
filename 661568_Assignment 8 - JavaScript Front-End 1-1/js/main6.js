function runTask() {
    console.log(`%c=== Running Task 6 ===`, `color: green; font-weight: bold;`);


// ==========================================
// 6. พารามิเตอร์แบบกำหนดค่าเริ่มต้น (Default) [cite: 689, 775-778]
// ==========================================

const Person = (firstname, lastname, age = 0) => {
    return firstname + " " + lastname + " Age: " + age;
}
console.log("Result1 is: " + Person("AAA", "3A", "20"));
console.log("Result2 is: " + Person("BBB", "B3")); // age จะเป็น 0 ตามค่า Default

const CalculatePrice = (price, vat = 0.07) => {
    return price + (price * vat);
}
console.log(CalculatePrice(1000, 0.1));
console.log(CalculatePrice(1000));

}
