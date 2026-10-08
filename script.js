document.addEventListener('DOMContentLoaded', () => {
    const teamCards = document.querySelectorAll('.team-card');

    teamCards.forEach(card => {
        const header = card.querySelector('.ranking-item');
        const expandable = card.querySelector('.team-expandable');

        header.addEventListener('click', () => {
            const isOpen = card.classList.contains('open');

            // Закрываем все открытые карточки
            teamCards.forEach(c => {
                c.classList.remove('open');
                c.querySelector('.team-expandable').style.maxHeight = null;
            });

            // Если кликнутая карточка была закрыта — открываем ее
            if (!isOpen) {
                card.classList.add('open');
                expandable.style.maxHeight = expandable.scrollHeight + "px";
            }
        });
    });
});