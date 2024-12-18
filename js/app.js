let $ = document;
let benefits = $.querySelector(".benefits");
let numb = $.querySelectorAll(".num");

console.log(benefits.offsetTop);
console.log(window.scrollY);

// تابع برای افزایش اعداد
function setNumber(element, targetValue) {
    let currentValue = 0;
    const interval = setInterval(() => {
        // چک کردن اگر به مقدار هدف رسید
        if (currentValue >= targetValue) {
            clearInterval(interval); // توقف انیمیشن
            console.log("انیمیشن تمام شد");
        } else {
            currentValue++; // افزایش مقدار
            element.innerHTML = currentValue; // نمایش مقدار جدید
        }
    }, 0.1); // سرعت انیمیشن (هر 10 میلی‌ثانیه یک واحد افزایش می‌دهد)
}

// اجرای انیمیشن بعد از اسکرول
window.addEventListener("scroll", () => {
    if (window.scrollY >= benefits.offsetTop) {
        numb.forEach((element) => {
            const targetValue = element.getAttribute("add"); // مقدار هدف از ویژگی "add"
            
            console.log(targetValue);
            
            
            if (!element.classList.contains("animated")) { // جلوگیری از اجرای دوباره انیمیشن
                element.classList.add("animated"); // اضافه کردن کلاس برای جلوگیری از اجرای مجدد
                setNumber(element, targetValue); // شروع انیمیشن
            }
        });
    }
});
