export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border-t bg-white dark:bg-black text-sm text-gray-700 dark:text-gray-700">
      <p>AniTrack — сервис составления списков аниме © 2025. Все права защищены</p>
      <div className="flex flex-wrap gap-4">
        <a href="#" className="hover:text-blue-500 transition-colors">Политика конфиденциальности</a>
        <a href="#" className="hover:text-blue-500 transition-colors">Пользовательское соглашение</a>
        <a href="#" className="hover:text-blue-500 transition-colors">Связаться с нами</a>
        <a href="#" className="hover:text-blue-500 transition-colors">Вакансии</a>
      </div>
    </footer>
  );
}