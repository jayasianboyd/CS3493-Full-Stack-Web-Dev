// ==========================================
// 1. พื้นฐาน Array
// ==========================================
function runArrayBasics() {
    console.log("%c=== 1. พื้นฐาน Array ===", "color: blue; font-weight: bold;");

    const data = ["ไก่", "เป็ด", "ปลา"];
    console.log("อาร์เรย์เริ่มต้น:", data);

    data[2] = "กุ้ง";
    console.log("แก้ไขข้อมูลลำดับที่ 2 เป็น 'กุ้ง':", data);

    const result = Array.from("JavaScript");
    console.log("ผลการใช้ Array.from('JavaScript'):", result);

    let data1 = ["ไก่", "เป็ด", "หมู"];
    let data2 = ["หอย", "กุ้ง", "ปลา"];
    let newdata2 = [...data1, ...data2];
    console.log("รวมอาร์เรย์ด้วย ... (Spread Operator):", newdata2);

    console.log("\n");
}

// ==========================================
// 2. ฟังก์ชันจัดการข้อมูลใน Array
// ==========================================
function runArrayFunctions() {
    console.log("%c=== 2. ฟังก์ชันจัดการข้อมูลใน Array ===", "color: blue; font-weight: bold;");

    const data = [
        { fullname: "A", salary: 25000 },
        { fullname: "B", salary: 22000 },
        { fullname: "C", salary: 30000 },
        { fullname: "D", salary: 25000 }
    ];

    const resultFilter = data.filter(item => item.salary >= 25000);
    console.log("การกรองข้อมูลด้วย filter (salary >= 25000):", resultFilter);

    const resultMap = data.map(item => item.fullname);
    console.log("อ่านข้อมูลด้วย map (เฉพาะ fullname):", resultMap);

    console.log("วนลูปอ่านข้อมูลด้วย forEach:");
    data.forEach(item => console.log(item.fullname));

    const resultFind = data.find(item => item.fullname === "B");
    console.log("ค้นหาข้อมูลด้วย find (fullname === 'B'):", resultFind);

    let arrayManipulate = ["A", "B", "C", "D"];
    arrayManipulate.push("E");
    console.log("เพิ่มข้อมูลต่อท้าย (push 'E'):", arrayManipulate);
    arrayManipulate.shift();
    console.log("ถอดข้อมูลลำดับแรกออก (shift):", arrayManipulate);

    console.log("\n");
}

// ==========================================
// 3. คำสั่งตรวจสอบเงื่อนไข
// ==========================================
function runConditions() {
    console.log("%c=== 3. คำสั่งตรวจสอบเงื่อนไข ===", "color: blue; font-weight: bold;");

    let y = 1000;
    let resultElse = "";
    if (y <= 100) {
        resultElse = "This condition is correct!!!";
    } else {
        resultElse = "This condition is invalid!!!";
    }
    console.log("ผลลัพธ์ของ if...else (y=1000, เงื่อนไข <=100):", resultElse);

    let z = 1000;
    let resultSwitch = "";
    switch (z) {
        case 100: resultSwitch = "hundreds"; break;
        case 1000: resultSwitch = "thousands"; break;
        case 10000: resultSwitch = "ten thousand"; break;
        default: resultSwitch = "invalid data"; break;
    }
    console.log("ผลลัพธ์ของ switch (z=1000):", resultSwitch);

    console.log("\n");
}

// ==========================================
// 4. การวนลูป (Looping)
// ==========================================
function runLoops() {
    console.log("%c=== 4. การวนลูป (Looping) ===", "color: blue; font-weight: bold;");

    const dataFor = ["Java", "VC#", "C", "C++", "JavaScript"];
    console.log("ผลลัพธ์การใช้ for loop:");
    for (let i = 0; i < dataFor.length; i++) {
        console.log(dataFor[i]);
    }

    const dataObj = { fullname: "AAA-3A", Address: "BK", age: 25 };
    console.log("ผลลัพธ์การใช้ for...in กับ Object:");
    for (let i in dataObj) {
        console.log(dataObj[i]);
    }

    console.log("ผลลัพธ์การใช้ while loop (รอบที่ 1 ถึง 3):");
    let w = 1;
    while (w <= 3) {
        console.log("Number : " + w);
        w++;
    }

    console.log("\n");
}

// ==========================================
// 5. การเขียนโปรแกรมเชิงวัตถุ (OOP)
// ==========================================
function runOOP() {
    console.log("%c=== 5. การเขียนโปรแกรมเชิงวัตถุ (OOP) ===", "color: blue; font-weight: bold;");

    class Customer {
        constructor(id, fullname) {
            this.id = id;
            this.fullname = fullname;
        }
        walk() {
            console.log(`ลูกค้า ${this.fullname} กำลังเดิน`);
        }
        report() {
            this.#coding();
        }
        #coding() {
            console.log(`ลูกค้า ${this.fullname} เขียนโค้ดได้ (นี่คือ Private Method)`);
        }
    }

    let c1 = new Customer(1001, "สายน้ำ เรืองรัตน์");
    console.log("ข้อมูลลูกค้า (c1):", c1);
    console.log(`ดึงข้อมูล: รหัส: ${c1.id}, ชื่อ-สกุล: ${c1.fullname}`);

    console.log("เรียกใช้ Method:");
    c1.walk();
    c1.report();

    console.log("แปลง Object เป็น Array (Entries):", Object.entries(c1));
    console.log("แปลง Object เป็น Array (Values):", Object.values(c1));

    console.log("\n");
}