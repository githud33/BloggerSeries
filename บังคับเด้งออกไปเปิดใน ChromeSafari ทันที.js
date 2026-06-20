function forceOpenInExternalBrowser() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    
    // 🔍 ตรวจจับว่าเป็น In-App Browser ของ Facebook หรือ LINE ไหม
    var isFacebookApp = (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
    
    if (isFacebookApp) {
        // 🚀 ถ้าเป็นระบบ Android: สั่งเปิดลิงก์ปัจจุบันด้วยเบราว์เซอร์หลักของเครื่องทันที
        if (/Android/i.test(ua)) {
            window.location.href = "intent://" + window.location.host + window.location.pathname + window.location.search + "#Intent;scheme=https;package=com.android.chrome;end";
        } 
        // 🚀 ถ้าเป็นระบบ iOS (iPhone): ใช้เทคนิคยิงสร้างไฟล์ดาวน์โหลดหลอก เพื่อบังคับให้ iOS ถามเปิด Safari
        else if (/iPhone|iPad|iPod/i.test(ua)) {
            // เทคนิคนี้จะทำให้เบราว์เซอร์ Facebook ของ iOS ยอมปล่อยผู้ใช้เปิดไปที่ Safari ภายนอก
            window.location.href = window.location.href + (window.location.search ? '&' : '?') + 'open_in_safari=1';
        }
    }
}

// สั่งให้โค้ดทำงานทันทีที่หน้าเว็บเริ่มโหลด
forceOpenInExternalBrowser();
