// theme.js

// ธีมปัจจุบัน
let isDarkMode = false;

// เปลี่ยนธีมและบันทึกลง localStorage
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const html = document.documentElement;
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    if (isDarkMode) {
        html.classList.add('dark');
        sunIcon?.classList.add('hidden');
        moonIcon?.classList.remove('hidden');
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.remove('dark');
        sunIcon?.classList.remove('hidden');
        moonIcon?.classList.add('hidden');
        localStorage.setItem('theme', 'light');
    }
}

// โหลดธีมที่เคยตั้งไว้
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    if (savedTheme === 'dark') {
        html.classList.add('dark');
        sunIcon?.classList.add('hidden');
        moonIcon?.classList.remove('hidden');
        isDarkMode = true;
    } else {
        html.classList.remove('dark');
        sunIcon?.classList.remove('hidden');
        moonIcon?.classList.add('hidden');
        isDarkMode = false;
    }

    // ตั้งค่า Event ให้ปุ่ม toggle ถ้ามี
    const toggleButton = document.getElementById('darkModeToggle');
    toggleButton?.addEventListener('click', toggleDarkMode);
});
