// เลือกปุ่มด้วย JavaScript
// โค้ดสำหรับปุ่ม B1
const b1Button = document.getElementById('my-B1');

// เพิ่ม Event Listener เมื่อมีการคลิก
b1Button.addEventListener('click', () => {
    // สร้างแท็ก <a> ขึ้นมาใหม่
    const b1Link = document.createElement('a');
    b1Link.href = 'http://pili.app/gp/2B4oYZWHs';
    b1Link.target = '_blank'; // เปิดในแท็บใหม่

    // จำลองการคลิกลิงก์
    b1Link.click();
});
