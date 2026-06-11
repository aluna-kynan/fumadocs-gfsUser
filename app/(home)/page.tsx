import Link from 'next/link';

const games = [
  {
    name: 'SpaceQuiz',
    description:
      'Game kuis interaktif bertema luar angkasa. Jawab soal sambil menghindari asteroid dan kumpulkan power-up!',
    href: '/docs/games/spacequiz',
    icon: '🚀',
    color: 'from-violet-500/20 to-blue-500/20',
    border: 'border-violet-500/30 hover:border-violet-400',
  },
  {
    name: 'MemoryQuiz',
    description:
      'Latih daya ingatmu dengan teka-teki memori tingkat tinggi. Cocokkan kartu sebelum waktu habis!',
    href: '/docs/games/memoryquiz',
    icon: '🧠',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30 hover:border-emerald-400',
  },
  {
    name: 'CrazyRace',
    description:
      'Rasakan adrenalin balapan sambil menjawab soal. Kebut rivalmu di lintasan pengetahuan!',
    href: '/docs/games/crazyrace',
    icon: '🏎️',
    color: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/30 hover:border-orange-400',
  },
  {
    name: 'QuizRush',
    description:
      'Jawab secepat kilat di mode rush yang mendebarkan. Siapa tercepat, dialah juaranya!',
    href: '/docs/games/quizrush',
    icon: '⚡',
    color: 'from-yellow-500/20 to-amber-500/20',
    border: 'border-yellow-500/30 hover:border-yellow-400',
  },
  {
    name: 'Axiom',
    description:
      'Tantang logika dan penalaranmu dengan soal-soal berbasis axiom matematika dan sains.',
    href: '/docs/games/axiom',
    icon: '📐',
    color: 'from-cyan-500/20 to-sky-500/20',
    border: 'border-cyan-500/30 hover:border-cyan-400',
  },
  {
    name: 'Zigma',
    description:
      'Petualangan RPG quiz dengan sistem guild dan party. Bangun tim, lawan rival, raih ranking!',
    href: '/docs/games/zigma',
    icon: '⚔️',
    color: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/30 hover:border-pink-400',
  },
  {
    name: 'NitroQuiz',
    description:
      'Aktifkan nitro boost dan jawab soal dalam kecepatan penuh. Mode speed quiz paling brutal!',
    href: '/docs/games/nitroquiz',
    icon: '🔥',
    color: 'from-red-500/20 to-orange-500/20',
    border: 'border-red-500/30 hover:border-red-400',
  },
];

const quickLinks = [
  {
    title: 'Mulai Sekarang',
    description: 'Panduan lengkap mendaftar dan memulai petualangan di GameForSmart.',
    href: '/docs/getting-started',
    icon: '🎯',
  },
  {
    title: 'Kelola Akun',
    description: 'Profil, koin reward, notifikasi, dan pengaturan akunmu.',
    href: '/docs/akun/profil',
    icon: '👤',
  },
  {
    title: 'Tentang Platform',
    description: 'Pelajari fitur utama app.gameforsmart.com dan cara menggunakannya.',
    href: '/docs/app',
    icon: '🖥️',
  },
  {
    title: 'FAQ & Kebijakan',
    description: 'Pertanyaan umum, kebijakan privasi, dan ketentuan layanan.',
    href: '/docs/akun/faq',
    icon: '❓',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-4 py-1.5 text-sm text-fd-muted-foreground mb-6">
          <span className="size-2 rounded-full bg-green-500 animate-pulse" />
          Dokumentasi Resmi · gameforsmart.com
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Selamat Datang di{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            GameForSmart
          </span>{' '}
          Docs
        </h1>

        <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto mb-8">
          Platform quiz gaming interaktif untuk pembelajaran yang lebih seru. Temukan panduan
          lengkap semua game, fitur platform, dan cara memaksimalkan pengalamanmu.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
          >
            🚀 Mulai Belajar
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-5 py-2.5 text-sm font-semibold hover:bg-fd-accent transition-colors"
          >
            📖 Lihat Semua Docs
          </Link>
          <a
            href="https://gameforsmart.com/games"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-5 py-2.5 text-sm font-semibold hover:bg-fd-accent transition-colors"
          >
            🎮 Main Sekarang ↗
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full max-w-5xl px-6 mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '7', label: 'Game Tersedia', emoji: '🎮' },
            { value: '10K+', label: 'Pemain Aktif', emoji: '👥' },
            { value: '50K+', label: 'Soal Bank', emoji: '📚' },
            { value: '30+', label: 'Negara', emoji: '🌍' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-fd-border bg-fd-card p-4 text-center"
            >
              <div className="text-2xl mb-1">{stat.emoji}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-fd-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="w-full max-w-5xl px-6 mb-12">
        <h2 className="text-xl font-bold mb-4">⚡ Panduan Cepat</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group flex items-start gap-4 rounded-xl border border-fd-border bg-fd-card p-5 hover:bg-fd-accent transition-colors"
            >
              <span className="text-2xl">{link.icon}</span>
              <div>
                <div className="font-semibold group-hover:text-fd-primary transition-colors">
                  {link.title}
                </div>
                <div className="text-sm text-fd-muted-foreground mt-0.5">{link.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Game Showcase */}
      <section className="w-full max-w-5xl px-6 mb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">🎮 Dokumentasi Game</h2>
          <a
            href="https://gameforsmart.com/games"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-fd-muted-foreground hover:text-fd-primary transition-colors"
          >
            Lihat Semua →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => (
            <Link
              key={game.name}
              href={game.href}
              className={`group relative rounded-xl border bg-gradient-to-br p-5 transition-all hover:shadow-lg ${game.color} ${game.border}`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{game.icon}</span>
                <span className="text-xs text-fd-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  Baca docs →
                </span>
              </div>
              <h3 className="font-bold text-base mb-1">{game.name}</h3>
              <p className="text-sm text-fd-muted-foreground line-clamp-2">{game.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full max-w-5xl px-6 mb-16">
        <div
          className="rounded-2xl p-8 text-center text-white"
          style={{ background: 'linear-gradient(135deg, #1e1b4b, #4c1d95, #581c87)' }}
        >
          <h2 className="text-2xl font-bold mb-2">Siap Unjuk Kemampuan?</h2>
          <p className="text-purple-200 mb-6">
            Daftar gratis dan mulai perjalananmu di arena cerdas cermat terbesar!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://gameforsmart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-purple-900 px-5 py-2.5 text-sm font-bold hover:bg-purple-50 transition-colors"
            >
              🎯 Kunjungi gameforsmart.com
            </a>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 rounded-lg border border-purple-400 text-white px-5 py-2.5 text-sm font-semibold hover:bg-purple-800/50 transition-colors"
            >
              📖 Baca Getting Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
