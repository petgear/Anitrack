'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-6 border-b bg-white dark:bg-black gap-4">
      <p className="text-xl font-bold text-black dark:text-white">AniTrack</p>

      <nav className="flex gap-72">
        <Link href="/">Главная</Link>
        <Link href="/tracker">Трекер</Link>
        <Link href="/aboutanime">О аниме</Link>
      </nav>

      <div className="flex items-center gap-4">
        <SearchBar />
        <ThemeToggle />
      </div>
    </header>
  );
}
