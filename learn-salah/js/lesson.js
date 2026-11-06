
const page = document.body.dataset;

document.getElementById("lessonTitle").textContent =
    page.title || "অধ্যায়";

document.getElementById("lessonDescription").textContent =
    page.description || "এই অধ্যায়টি প্রস্তুত হচ্ছে। ইনশাআল্লাহ, শিগগিরই এখানে পাঠ যুক্ত করা হবে।";

const chapterNumber = document.getElementById("chapterNumber");

if (page.chapter) {
    chapterNumber.textContent = `অধ্যায় ${page.chapter}`;
} else {
    chapterNumber.remove();
}
