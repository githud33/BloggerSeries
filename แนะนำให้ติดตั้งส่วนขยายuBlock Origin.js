// --- ฟังก์ชันหลัก: แสดงข้อความ ---
function setupNotice(id, text, seconds, extraStyle = "") {
    const container = document.getElementById(id);
    if (!container) return;

    const textId = 'text-' + id;
    // นำ extraStyle มาใส่เพิ่ม เพื่อกำหนดสีหรือขนาดตัวอักษร
    container.innerHTML = `<div id="${textId}" style="text-align: center; margin-top: 0px; margin-bottom: 5px; transition: opacity 1s ease; opacity: 1; font-family: sans-serif; ${extraStyle}">${text}</div>`;  // ฟอนต์ตัวหนังสือ font-family: sans-serif; ใส่ต่อท้าย opacity: 1;

    if (seconds > 0) {
        setTimeout(() => {
            const el = document.getElementById(textId);
            if (el) {
                el.style.opacity = '0';
                setTimeout(() => { el.style.display = 'none'; }, 1000);
            }
        }, seconds * 1000);
    }
}

// --- ฟังก์ชันใหม่: รอให้กดปุ่มก่อนค่อยเริ่มทำงาน ---
function bindNoticeToButton(buttonId, containerId, text, seconds, extraStyle = "") {
    const btn = document.getElementById(buttonId);
    if (btn) {
        btn.addEventListener('click', function() {
            setupNotice(containerId, text, seconds, extraStyle);
        }, { once: true }); 
    }
}

window.addEventListener('load', function() {
    // --- ตั้งค่าจุดที่ 1 (ปุ่ม Show1) ---
    bindNoticeToButton(
        'Show1', 
        'video-v1', 
        '⚠️ <b>คำแนะนำ:</b> ตัวเล่นนี้มีโฆษณาเด้งกวนใจ แนะนำให้ติดตั้งส่วนขยาย <b>uBlock Origin</b> เพื่อการรับชมที่ลื่นไหลครับ', 
        20, 
        'color: #ff4d4d; font-size: 15px;' // ใส่สีแดงสดและตัวหนาตรงนี้ ตัวหนา👉 font-weight: bold;
    );

    // --- ถ้ามีปุ่มอื่นๆ เพิ่มเติม ก็ก๊อปปี้บรรทัดล่างนี้ไปวางต่อได้เลยครับ ---
    // bindNoticeToButton('Show2', 'container-id', 'ข้อความ...', 10, 'color: blue;');
});
