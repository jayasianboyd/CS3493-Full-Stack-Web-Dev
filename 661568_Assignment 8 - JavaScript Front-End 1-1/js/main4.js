function runTask() {
    console.log(`%c=== Running Task 4 ===`, `color: green; font-weight: bold;`);


// ==========================================
// 4. ค่าคงที่ (const) [cite: 399, 448-449, 499-500]
// ==========================================

const price = 500;
// price = 1000; // จะเกิด Error ถ้าเอาคอมเมนต์ออก เพราะ const แก้ไขไม่ได้

// Object แก้ไข property ด้านในได้
const dataObj = { firstname: "AAA", lastname: "BBB" };
dataObj.lastname = "CCC";
console.log("Data is: ", dataObj);

// หากต้องการแช่แข็ง Object ไม่ให้แก้ได้เลย
const dataFreeze = { firstname: "AAA", lastname: "BBB" };
Object.freeze(dataFreeze);
dataFreeze.lastname = "CCC"; // จะไม่มีผล
console.log("Data Freeze is: ", dataFreeze);

}
