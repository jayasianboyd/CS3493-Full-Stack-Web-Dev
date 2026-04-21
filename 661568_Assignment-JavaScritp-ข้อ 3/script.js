// ==========================================
// ข้อที่ 1: ระบบตัดเกรด
// ==========================================
function runTask1() {
    let Student = {
        name: "John Doe",
        scores: [80, 65, 90],
        calculateAverage: function () {
            let sum = 0;
            for (let i = 0; i < this.scores.length; i++) {
                sum += this.scores[i];
            }
            return sum / this.scores.length;
        },
        getGrade: function () {
            let avg = this.calculateAverage();
            if (avg >= 80) { return "A"; }
            else if (avg >= 70) { return "B"; }
            else if (avg >= 60) { return "C"; }
            else if (avg >= 50) { return "D"; }
            else { return "F"; }
        }
    };
    console.log(`--- ผลลัพธ์ข้อ 1 ---`);
    console.log(`นักเรียน: ${Student.name}`);
    console.log(`คะแนนเฉลี่ย: ${Student.calculateAverage().toFixed(2)}`);
    console.log(`เกรดที่ได้: ${Student.getGrade()}`);
    alert("ประมวลผลข้อ 1 เสร็จสิ้น กรุณากด F12 เพื่อดูผลลัพธ์ใน Console");
}

// ==========================================
// ข้อที่ 2: ปริมาตรของทรงกลม
// ==========================================
function runTask2() {
    function sphereCalculator(radius) {
        let volume = (4 / 3) * Math.PI * (radius ** 3);
        let fixedVolume = Number.parseFloat(volume.toFixed(2));
        return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(fixedVolume);
    }
    console.log(`--- ผลลัพธ์ข้อ 2 ---`);
    console.log(`ปริมาตรทรงกลม (รัศมี 10): ${sphereCalculator(10)}`);
    alert("ประมวลผลข้อ 2 เสร็จสิ้น กรุณากด F12 เพื่อดูผลลัพธ์ใน Console");
}

// ==========================================
// ข้อที่ 3: ระบบจัดการสต็อกสินค้า
// ==========================================
function runTask3() {
    let warehouse = {
        products: [
            { name: "Monitor", price: 30000, stock: 5 },
            { name: "Mouse", price: 500, stock: 20 }
        ],
        addItem: function (itemName, amount) {
            let found = false;
            for (let item of this.products) {
                if (item.name === itemName) {
                    item.stock += amount;
                    found = true;
                    console.log(`เพิ่ม ${itemName} จำนวน ${amount} ชิ้น สำเร็จ`);
                    break;
                }
            }
            if (!found) alert("ไม่พบสินค้า");
        },
        sellItem: function (itemName, amount) {
            for (let item of this.products) {
                if (item.name === itemName) {
                    if (amount > item.stock) {
                        alert("สินค้าไม่พอ");
                    } else {
                        item.stock -= amount;
                        console.log(`ขาย ${itemName} จำนวน ${amount} ชิ้น สำเร็จ`);
                    }
                    return;
                }
            }
            alert("ไม่พบสินค้า");
        },
        getTotalValue: function () {
            let total = 0;
            for (let item of this.products) {
                total += (item.price * item.stock);
            }
            return new Intl.NumberFormat().format(total);
        }
    };

    console.log(`--- ผลลัพธ์ข้อ 3 ---`);
    warehouse.addItem("Monitor", 99);
    warehouse.sellItem("Mouse", 99);
    console.log(`มูลค่ารวมในคลัง: ${warehouse.getTotalValue()} บาท`);
    alert("ประมวลผลข้อ 3 เสร็จสิ้น กรุณากด F12 เพื่อดูผลลัพธ์ใน Console");
}

// ==========================================
// ข้อที่ 4: ระบบคำนวณเบี้ยปรับการคืนหนังสือ
// ==========================================
function runTask4() {
    function calculateFine(dueDateStr) {
        let dueDate = new Date(dueDateStr);
        let currentDate = new Date();
        let timeDiff = currentDate.getTime() - dueDate.getTime();

        if (timeDiff <= 0) {
            console.log("ไม่ต้องเสียค่าปรับ");
            return;
        }

        let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        let fine = dayDiff * 5;
        console.log(`เลยกำหนดมาแล้ว ${dayDiff} วัน ค่าปรับรวม ${fine} บาท`);
    }

    console.log(`--- ผลลัพธ์ข้อ 4 ---`);
    calculateFine("2023-01-01");
    alert("ประมวลผลข้อ 4 เสร็จสิ้น กรุณากด F12 เพื่อดูผลลัพธ์ใน Console");
}

// ==========================================
// ข้อที่ 5: ระบบตรวจคนเข้า
// ==========================================
function entrySystem() {
    let ageStr = prompt("กรุณากรอกอายุของคุณ:");
    if (!ageStr) return;

    let age = Number.parseInt(ageStr);
    if (age < 20) {
        alert("อายุไม่ถึงเกณฑ์");
        return;
    }

    let hasIDCard = confirm("พกบัตรประชาชนมาด้วยใช่หรือไม่?");
    if (hasIDCard) {
        alert("เชิญเข้างานได้");
    } else {
        alert("ไม่อนุญาตให้เข้าหากไม่มีบัตร");
    }
}

// ==========================================
// ข้อที่ 6: โปรแกรมคำนวณราคาสุทธิพร้อมภาษี
// ==========================================
function calculateNetPrice() {
    let price;
    while (true) {
        let priceStr = prompt("กรุณากรอกราคาสินค้า:");
        if (priceStr === null) return; // ผู้ใช้กดยกเลิก (Cancel)

        if (priceStr.trim() !== "") {
            price = Number(priceStr);
            if (!Number.isNaN(price) && price >= 0) {
                break; // ข้อมูลถูกต้อง ออกจากลูปไปทำต่อ
            }
        }
        alert("ข้อผิดพลาด: กรุณากรอกราคาสินค้าเป็นตัวเลขเท่านั้น (และห้ามติดลบ)\nกรุณาลองใหม่อีกครั้ง");
    }
    let hasDiscount = confirm("คุณมีคูปองส่วนลด 100 บาท ใช่หรือไม่?");

    let discount = hasDiscount ? 100 : 0;
    let priceAfterDiscount = price - discount;
    if (priceAfterDiscount < 0) priceAfterDiscount = 0;

    let vat = priceAfterDiscount * 0.07;
    let netPrice = priceAfterDiscount + vat;

    alert(`ราคาก่อน VAT (หลังหักส่วนลด): ${priceAfterDiscount} บาท\nราคาสุทธิ (รวม VAT 7%): ${netPrice.toFixed(2)} บาท`);
}

// ==========================================
// ข้อที่ 7: ระบบสั่งกาแฟ
// ==========================================
function coffeeOrder() {
    let rawMenu = prompt("กรุณาพิมพ์เมนูที่ต้องการ: 'Latte' หรือ 'Espresso'");
    if (!rawMenu) return;

    // normalize input: trim whitespace and capitalize first letter
    let menuLower = rawMenu.trim().toLowerCase();
    let menu = menuLower.charAt(0).toUpperCase() + menuLower.slice(1);

    if (menu !== "Latte" && menu !== "Espresso") {
        alert("ขออภัย เราไม่มีเมนูนั้น");
        return;
    }

    let isIced = confirm("รับแบบเย็น (+10 บาท) หรือไม่?");
    let basePrice = (menu === "Latte") ? 60 : 50;
    let netPrice = isIced ? basePrice + 10 : basePrice;
    let type = isIced ? "เย็น" : "ร้อน";

    alert(`สรุปรายการ: ${menu} ${type}\nราคาสุทธิ: ${netPrice} บาท`);
}