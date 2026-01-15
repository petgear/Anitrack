

type HeaderProps = {
  children?: React.ReactNode;
}

export default function Header({children}: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-6 border-b bg-white dark:bg-black gap-4">
      <p className="text-xl font-bold text-black dark:text-white">AniTrack</p>

        <div className="flex items-center gap-4">
          {children}
        </div>
        
    </header>
  );
}