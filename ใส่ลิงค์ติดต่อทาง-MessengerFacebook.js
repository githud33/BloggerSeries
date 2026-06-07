// เลือกปุ่มด้วย JavaScript
// โค้ดสำหรับปุ่ม Messenger
const messengerButton = document.getElementById('my-messenger');

// เพิ่ม Event Listener เมื่อมีการคลิก
messengerButton.addEventListener('click', () => {
    // สร้างแท็ก <a> ขึ้นมาใหม่
    const messengerLink = document.createElement('a');
    messengerLink.href = 'https://www.messenger.com/t/good.series.397';
    messengerLink.target = '_blank'; // เปิดในแท็บใหม่

    // จำลองการคลิกลิงก์
    messengerLink.click();
});
