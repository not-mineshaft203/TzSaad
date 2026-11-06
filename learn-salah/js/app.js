
async function loadLessons() {
    const container = document.getElementById("salahLessons");

    try {
        const response = await fetch("data/lessons.json");

        if (!response.ok) {
            throw new Error(`Failed to load lessons: ${response.status}`);
        }

        const lessons = await response.json();

        const progress = JSON.parse(
            localStorage.getItem("salahProgress") || "[]"
        );

        lessons.forEach((lesson, index) => {
            const unlocked =
                index === 0 || progress.includes(index - 1);

            const card = document.createElement("a");

            card.className = `lesson-card ${
                unlocked ? "available" : "locked"
            }`;

            if (unlocked) {
                card.href = `${lesson.folder}/index.html`;
            } else {
                card.addEventListener("click", event => {
                    event.preventDefault();
                });
            }

            card.innerHTML = `
                <div>
                    <span class="lesson-number">
                        অধ্যায় ${lesson.id}
                    </span>
                    <h3>${lesson.title}</h3>
                </div>
                <span>${unlocked ? "→" : "🔒"}</span>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("অধ্যায় লোড করা যায়নি:", error);

        container.textContent =
            "অধ্যায়গুলো লোড করা যায়নি। অনুগ্রহ করে পৃষ্ঠাটি আবার চালু করুন।";
    }
}

loadLessons();
