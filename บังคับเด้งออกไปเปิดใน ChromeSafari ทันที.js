function forceOpenInExternalBrowser() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    
    // 🔍 ตรวจจับว่าเป็น In-App Browser ของ Facebook หรือ LINE ไหม
    var isFacebookApp = (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
    var isLineApp = (ua.indexOf("Line") > -1);
    
    if (isFacebookApp || isLineApp) {
        // 🤖 1. ระบบ Android: สั่งเด้งเข้า Chrome ทันที โดยที่หน้าเว็บเดิมในแอปจะคาอยู่ปกติ ไม่หาย ไม่เอ๋อ
        if (/Android/i.test(ua)) {
            var scheme = window.location.protocol.replace(":", "");
            var intentUrl = "intent://" + window.location.host + window.location.pathname + window.location.search + "#Intent;scheme=" + scheme + ";package=com.android.chrome;end";
            window.location.href = intentUrl;
        } 
        // 🍏 2. ระบบ iOS (iPhone/iPad): อุดรอยรั่วเรื่องเตือนไวรัส + คาหน้าเดิมไว้ แล้วเปิดกล่องแนะนำแบบมืออาชีพแทน
        else if (/iPhone|iPad|iPod/i.test(ua)) {
            showIosInstruction();
        }
    }
}

// 🎨 ฟังก์ชันสร้างกล่องแนะนำสำหรับ iOS (หน้าตาสวยงาม ดูน่าเชื่อถือ คาหน้าเว็บเดิมไว้ด้านหลัง)
function showIosInstruction() {
    if (document.getElementById("ios-browser-notice")) return;

    var notice = document.createElement("div");
    notice.id = "ios-browser-notice";
    notice.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.88); z-index: 999999; color: white;
        display: flex; flex-direction: column; align-items: center;
        justify-content: center; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
        padding: 20px; box-sizing: border-box; text-align: center;
    `;
    
    notice.innerHTML = `
        <div style="font-size: 22px; font-weight: bold; margin-bottom: 12px; color: #00fff0;">📢 เพื่อการรับชมวิดีโอที่เสถียรที่สุด</div>
        <p style="font-size: 15px; margin-bottom: 25px; line-height: 1.6; color: #e0e0e0;">โปรดเปิดหน้าเว็บนี้ด้วยเบราว์เซอร์หลักของเครื่อง (Safari)</p>
        
        <div style="background: #007aff; color: white; padding: 14px 25px; border-radius: 30px; font-size: 15px; font-weight: bold; box-shadow: 0 4px 15px rgba(0,122,255,0.4); animation: pulseBtn 2s infinite;">
            👉 จิ้มที่ปุ่มสามจุด <span style="font-size: 18px; font-weight: bold;">···</span> (มุมบนขวา) <br>แล้วเลือก "เปิดใน Safari" (Open in Safari)
        </div>
        
        <button onclick="document.getElementById('ios-browser-notice').remove()" style="margin-top: 35px; background: transparent; border: 1px solid #666; color: #aaa; padding: 6px 18px; border-radius: 20px; font-size: 13px; cursor: pointer; transition: 0.3s;">
            ปิดหน้านี้ (ดูผ่าน Facebook ต่อ)
        </button>
        
        <style>
            @keyframes pulseBtn {
                0% { transform: scale(1); }
                50% { transform: scale(1.04); }
                100% { transform: scale(1); }
            }
        </style>
    `;
    document.body.appendChild(notice);
}

// สั่งให้โค้ดทำงานทันทีอย่างปลอดภัย
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", forceOpenInExternalBrowser);
} else {
    forceOpenInExternalBrowser();
}
