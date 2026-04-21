// 1. การคำนวณราคา: สร้าง Arrow Function ชื่อ calculatePrice
// กำหนดพารามิเตอร์ price และ vat โดยให้ Default Parameter ของ vat เป็น 0.07
const calculatePrice = (price, vat = 0.07) => {
    // คืนค่าราคาสินค้ารวมภาษีมูลค่าเพิ่ม
    return price + (price * vat);
};

// 2. การจัดการข้อมูล: สร้าง Arrow Function ชื่อ showOrderDetails
const showOrderDetails = () => {

    // สร้างตัวแปรแบบ ค่าคงที่ (const) เก็บข้อมูลชื่อลูกค้าและรายการสินค้า
    const customer = "conan";
    const productItems = ["สินค้าที่1", "สินค้าที่2", "สินค้าที่3"]; // ใส่ของไป 3 ชิ้นเพื่อให้ตรงกับรูปตัวอย่าง

    // สร้างฟังก์ชันซ้อนข้างในชื่อ formatMessage 
    // รับพารามิเตอร์ customerName และ Rest Parameter (...items)
    const formatMessage = (customerName, ...items) => {

        // สมมติราคาสินค้ารวม 1500 บาท
        const totalPrice = 2500;

        // เรียกใช้ฟังก์ชัน calculatePrice เพื่อคำนวณยอดสุทธิ
        const netTotal = calculatePrice(totalPrice);

        // ใช้ Template Literals ในการสร้างข้อความสรุปผล (ใช้เครื่องหมาย Backtick ``)
        // จัดรูปแบบข้อความให้ตรงกับภาพตัวอย่าง
        return `
            เรียนคุณ ${customerName},<br>
            คุณได้ทำการสั่งซื้อสินค้าจำนวนทั้งหมด ${items.length} รายการ<br>
            ยอดชำระสุทธิ (รวมภาษีมูลค่าเพิ่ม 7%) คือ ${netTotal} บาท
        `;
    };

    // 3. การแสดงผล: นำข้อความที่ได้ไปแสดงในหน้าจอ HTML
    // เรียกใช้ formatMessage โดยส่งชื่อและกระจาย Array ของสินค้าเข้าไป
    const finalMessage = formatMessage(customer, ...productItems);

    // ส่งข้อความไปแทรกใน div ที่มี id="output"
    document.getElementById("output").innerHTML = finalMessage;
};