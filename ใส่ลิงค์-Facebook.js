// เลือกปุ่มด้วย JavaScript (โค้ดดั้งเดิมของพี่)
const b1Button = document.getElementById('my-B1');

// เพิ่ม Event Listener เมื่อมีการคลิก
b1Button.addEventListener('click', () => {
    
    // ข้อมูลกลุ่มของพี่
    const groupId = "475691490283036"; 
    const webUrl = "https://www.facebook.com/groups/goodseries/";
    const appUrl = "fb://group/" + groupId;

    // ตรวจสอบเครื่องผู้ใช้งาน
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isMobile = isAndroid || isIOS;

    const b1Link = document.createElement('a');
    
    if (isMobile) {
        // 📱 ฝั่งมือถือ: สั่งเปิดแอป Facebook ทันที
        b1Link.href = appUrl;
        b1Link.click();

        // ⏱️ เช็กระบบ (รอ 1.5 วินาที): ถ้าไม่มีแอปในเครื่อง หน้าจอจะไม่ขยับ โค้ดนี้จะทำงานทันที
        setTimeout(() => {
            // ดักจับถ้าหน้าจอยังอยู่ที่เดิม แปลว่าไม่มีแอป ให้ดีดไปหน้าดาวน์โหลดแอป
            if (isAndroid) {
                // ถ้าเป็น Android ➡️ พาไป Google Play Store หน้าแอป Facebook
                window.location.href = "market://details?id=com.facebook.katana";
            } else if (isIOS) {
                // ถ้าเป็น iPhone/iPad ➡️ พาไป App Store หน้าแอป Facebook
                window.location.href = "https://apps.apple.com/th/app/facebook/id284882215";
            }
        }, 1500);

    } else {
        // 🖥️ ฝั่งคอมพิวเตอร์: เปิดหน้าเว็บปกติในแท็บใหม่เหมือนเดิม ไม่เอ๋อชัวร์
        b1Link.href = webUrl;
        b1Link.target = '_blank'; 
        b1Link.click();
    }
});
