import { ChevronRight, Clock, User, Camera, Phone, Heart, ArrowRight } from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const churchProgram = [
  { activity: "Opening Prayer", leader: "Lady Linda Neequaye", time: "12:00 - 12:05 pm" },
  { activity: "Processional/Music team", leader: "Music Team", time: "12:05 - 12:15 pm" },
  { activity: "Welcome Address", leader: "Ps Wisdom Akakpo", time: "12:15 - 12:20 pm" },
  { activity: "Praise & Worship/ First Offering", leader: "Music Team", time: "12:20 - 12:30 pm" },
  { activity: "Scripture Reading", leader: "LP Sophia Korkor", time: "12:30 - 12:35 pm" },
  { activity: "Preaching", leader: "Rev. Dr. Ebenezer Okronipa", time: "12:35 - 12:55 pm" },
  { activity: "Charge & Blessings", leader: "Rev. Dr. Ebenezer Okronipa", time: "12:55 - 1:00 pm" },
  { activity: "Marriage Vows", leader: "Rev. Dr. Ebenezer Okronipa", time: "1:00 - 1:10 pm" },
  { activity: "Exchange of Rings", leader: "Rev. Dr. Ebenezer Okronipa", time: "1:10 - 1:15 pm" },
  { activity: "Prayer & Blessing", leader: "Rev. Dr. Ebenezer Okronipa", time: "1:15 - 1:20 pm" },
  { activity: "Communion", leader: "Rev. Dr. Ebenezer Okronipa", time: "1:20 - 1:25 pm" },
  { activity: "Pronouncement of marriage", leader: "Rev. Dr. Ebenezer Okronipa", time: "1:25 - 1:30 pm" },
  { activity: "Signing of Register/ Love Offering", leader: "Ps Wisdom Akakpo", time: "1:30 - 1:40 pm" },
  { activity: "Presentation of Couple/ First dance", leader: "Music Team", time: "1:45 - 1:50 pm" },
  { activity: "Presentation of Couple/ First dance", leader: "Rev. Dr. Ebenezer Okronipa", time: "1:50 - 1:55 pm" },
  { activity: "Announcements", leader: "Rev. Dr. Ebenezer Okronipa", time: "1:55 - 2:00 pm" },
  { activity: "Closing Prayer & Recessional", leader: "Rev. Dr. Ebenezer Okronipa", time: "2:00 - 2:05 pm" },
];

const photoList = [
  "Couple + Clergy/Ministers",
  "Couple",
  "Couple + Bridal Party",
  "Couple + Bride's Parents",
  "Couple + Groom's Parents",
  "Couple + Both Parents",
  "Couple + Bride's Immediate Family",
  "Couple + Groom's Immediate Family",
  "Couple + Office Colleagues",
  "Couple + School Colleagues",
  "Couple + Friends",
  "Couple + Overcomers Nation Church",
  "Couple + Best Man & Maid of Honour",
  "Couple + Special Guests",
  "Couple + All Guests",
  "Couple Exit Photos",
];

// ─── PAGE INDICATOR ──────────────────────────────────────────────────────────

function PageDots({ total, current }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-500 ${
            i === current
              ? 'w-6 h-2 bg-stone-100'
              : 'w-2 h-2 bg-stone-100/40'
          }`}
        />
      ))}
    </div>
  );
}

// ─── PAGE 1: COVER ───────────────────────────────────────────────────────────

function CoverPage() {
  return (
    <div
      id="page-cover"
      className="w-screen h-screen shrink-0 snap-start relative overflow-hidden bg-stone-900 flex flex-col items-center justify-center"
    >
      {/* Video background */}
      <div className="absolute inset-0 scale-110 pointer-events-none opacity-60">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/wjqAR25C540?autoplay=1&mute=1&loop=1&playlist=wjqAR25C540&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          title="Wedding background video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-900/20 to-stone-900/70 pointer-events-none" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 gap-5">
        {/* Decorative ornament */}
        <div className="animate-fade-in flex items-center gap-4 mb-2">
          <div className="h-px w-16 bg-stone-300/60" />
          <Heart className="text-stone-300/80 fill-stone-300/30" size={14} />
          <div className="h-px w-16 bg-stone-300/60" />
        </div>

        {/* Names */}
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-stone-50 tracking-wide leading-tight animate-fade-in-up">
          Samuel Oteng
          <br />
          <span className="text-stone-300/90 text-3xl sm:text-4xl md:text-5xl font-normal italic">&amp;</span>
          <br />
          Rebbeca
        </h1>

        {/* Subtitle */}
        <p className="font-cormorant text-sm sm:text-base tracking-[0.35em] uppercase text-stone-300/80 animate-fade-in-up-delay">
          The Wedding Brochure
        </p>

        {/* Date ornament */}
        <div className="animate-fade-in-up-delay-2 flex items-center gap-4 mt-2">
          <div className="h-px w-12 bg-stone-300/40" />
          <span className="font-inter text-xs text-stone-400/70 tracking-widest uppercase">2026</span>
          <div className="h-px w-12 bg-stone-300/40" />
        </div>
      </div>

      {/* Swipe prompt */}
      <div className="absolute bottom-16 flex flex-col items-center gap-2 animate-fade-in-up-delay-3">
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-stone-300/60">
          Swipe to Open
        </p>
        <div className="animate-pulse-subtle flex items-center gap-1 text-stone-300/50">
          <ChevronRight size={14} />
          <ChevronRight size={14} className="-ml-2" />
          <ChevronRight size={14} className="-ml-2" />
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300/40 to-transparent" />
    </div>
  );
}

// ─── PAGE 2: CHURCH OUTLINE ──────────────────────────────────────────────────

function ChurchPage() {
  return (
    <div
      id="page-church"
      className="w-screen h-screen shrink-0 snap-start flex items-center justify-center px-4 py-8"
      style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 30%, #fbcfe8 60%, #f9a8d4 100%)' }}
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #ec4899, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #f472b6, transparent)' }} />
      <div className="max-w-md w-full h-[90vh] bg-white/80 backdrop-blur-sm border border-pink-200 rounded-2xl shadow-lg shadow-pink-100 overflow-hidden flex flex-col relative">
        {/* Card header */}
        <div className="px-7 pt-8 pb-5 border-b border-pink-100" style={{ background: 'linear-gradient(135deg, #fff0f7, #fce7f3)' }}>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-px flex-1 bg-pink-200" />
            <Heart className="text-pink-400 fill-pink-200" size={12} />
            <div className="h-px flex-1 bg-pink-200" />
          </div>
          <h2 className="font-playfair text-2xl text-rose-900 mt-3 leading-snug">
            Church Wedding
            <br />
            <span className="italic font-normal text-rose-600">Outline</span>
          </h2>
          <p className="font-inter text-xs text-rose-400 mt-2 tracking-wider uppercase">
            MC: Ps Wisdom Akakpo
          </p>
        </div>

        {/* Timeline */}
        <div className="flex-1 overflow-y-auto custom-scroll px-5 py-4 space-y-1">
          {churchProgram.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 py-3 border-b border-pink-50 group hover:bg-pink-50/60 px-2 rounded-lg transition-colors"
            >
              {/* Time column */}
              <div className="flex-none w-[100px] pt-0.5">
                <div className="flex items-center gap-1.5">
                  <Clock size={10} className="text-pink-300 flex-none" />
                  <span className="font-inter text-[10px] text-rose-400 leading-snug">
                    {item.time}
                  </span>
                </div>
              </div>

              {/* Vertical line */}
              <div className="flex-none flex flex-col items-center pt-1">
                <div className="w-[1.5px] h-3 bg-pink-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-pink-300 group-hover:bg-rose-400 transition-colors" />
                <div className="w-[1.5px] flex-1 bg-pink-100" />
              </div>

              {/* Activity column */}
              <div className="flex-1 min-w-0">
                <p className="font-cormorant text-base text-rose-900 font-medium leading-snug">
                  {item.activity}
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <User size={9} className="text-pink-300 flex-none" />
                  <p className="font-inter text-[10px] text-rose-400">
                    {item.leader}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="h-4" />
        </div>
      </div>
    </div>
  );
}

// ─── PAGE 3: PHOTOGRAPHY & CONTACTS ─────────────────────────────────────────

function PhotographyPage() {
  return (
    <div
      id="page-photography"
      className="w-screen h-screen shrink-0 snap-start flex items-center justify-center px-4 py-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 30%, #ddd6fe 60%, #c4b5fd 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-25 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }} />
      <div className="max-w-md w-full h-[90vh] bg-white/80 backdrop-blur-sm border border-violet-200 rounded-2xl shadow-lg shadow-violet-100 overflow-hidden flex flex-col relative">
        {/* Card header */}
        <div className="px-7 pt-8 pb-5 border-b border-violet-100" style={{ background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)' }}>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-px flex-1 bg-violet-200" />
            <Camera className="text-violet-400" size={12} />
            <div className="h-px flex-1 bg-violet-200" />
          </div>
          <h2 className="font-playfair text-2xl text-violet-900 mt-3 leading-snug">
            Photography
            <br />
            <span className="italic font-normal text-violet-600">Order</span>
          </h2>
          <p className="font-inter text-xs text-violet-400 mt-2 tracking-wider uppercase">
            Please follow the sequence
          </p>
        </div>

        {/* Photo list */}
        <div className="flex-1 overflow-y-auto custom-scroll px-6 py-5">
          <ol className="space-y-2.5">
            {photoList.map((item, i) => (
              <li key={i} className="flex items-start gap-3 group">
                {/* Number badge */}
                <span className="flex-none w-6 h-6 rounded-full bg-violet-100 group-hover:bg-violet-600 transition-colors flex items-center justify-center">
                  <span className="font-inter text-[10px] font-medium text-violet-500 group-hover:text-white transition-colors">
                    {i + 1}
                  </span>
                </span>
                <p className="font-inter text-sm text-violet-900 pt-0.5 leading-snug">
                  {item}
                </p>
              </li>
            ))}
          </ol>
          <div className="h-4" />
        </div>

        {/* Contact section */}
        <div className="px-6 py-4 border-t border-violet-100" style={{ background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)' }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-violet-200 flex items-center justify-center flex-none">
              <Phone size={14} className="text-violet-500" />
            </div>
            <div>
              <p className="font-inter text-[10px] text-violet-400 tracking-wider uppercase mb-0.5">
                Contact Person
              </p>
              <p className="font-cormorant text-base text-violet-800 font-medium">
                Mr Michael Ameyaw
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE 4: GROOM'S LETTER ──────────────────────────────────────────────────

function GroomLetterPage() {
  return (
    <div
      id="page-letter"
      className="w-screen h-screen shrink-0 snap-start flex items-center justify-center px-4 py-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 30%, #fde68a 60%, #fcd34d 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-25 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #d97706, transparent)' }} />
      <div className="max-w-md w-full h-[90vh] bg-white/85 backdrop-blur-sm border border-amber-200 rounded-2xl shadow-lg shadow-amber-100 overflow-hidden flex flex-col relative">
        {/* Card header */}
        <div className="px-7 pt-8 pb-5 border-b border-amber-100" style={{ background: 'linear-gradient(135deg, #fffbeb, #fef3c7)' }}>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-px flex-1 bg-amber-200" />
            <Heart className="text-amber-400 fill-amber-200" size={12} />
            <div className="h-px flex-1 bg-amber-200" />
          </div>
          <div className="flex items-center gap-3 mt-4">
            <div>
              <p className="font-inter text-[10px] text-amber-500 tracking-wider uppercase mb-1">
                A Letter From
              </p>
              <p className="font-cormorant text-sm text-amber-700 italic">
                The Groom
              </p>
            </div>
          </div>
        </div>

        {/* Letter body */}
        <div className="flex-1 overflow-y-auto custom-scroll px-7 py-6">
          {/* Greeting */}
          <h2 className="font-playfair text-2xl text-amber-900 italic mb-6">
            My Beloved,
          </h2>

          <p className="font-inter text-sm text-amber-900/70 font-light leading-relaxed mb-5">
            As our wedding day arrives, I cannot help but thank God for the beautiful gift He has given me in you. From the moment He brought our paths together, I knew there was something special about you.
          </p>

          <p className="font-inter text-sm text-amber-900/70 font-light leading-relaxed mb-5">
            I cherish your kindness, your faith, your strength, and the love you have shown me. Today, before God, our family, and our friends, I will make a covenant to love and honor you for the rest of my life.
          </p>

          <p className="font-inter text-sm text-amber-900/70 font-light leading-relaxed mb-8">
            No matter what the future holds, I am confident that with God at the center of our marriage, we will overcome every challenge and celebrate every blessing together. Thank you for choosing me. I love you,
          </p>

          {/* Decorative divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-amber-100" />
            <Heart className="text-amber-300 fill-amber-100" size={10} />
            <div className="h-px flex-1 bg-amber-100" />
          </div>

          {/* Sign-off */}
          <p className="font-playfair text-base text-amber-800 italic text-right leading-relaxed">
            With all my love,
            <br />
            <span className="text-lg text-amber-900 not-italic font-medium">Your Groom</span>
          </p>

          <div className="h-4" />
        </div>

        {/* Footer stamp */}
        <div className="px-6 py-4 border-t border-amber-100 flex items-center justify-between" style={{ background: 'linear-gradient(135deg, #fffbeb, #fef3c7)' }}>
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-amber-300" />
            <span className="font-cormorant text-xs text-amber-600 italic">
              Samuel &amp; Rebbeca
            </span>
            <div className="h-px w-8 bg-amber-300" />
          </div>
          <Heart className="text-amber-400 fill-amber-200" size={14} />
        </div>
      </div>
    </div>
  );
}

// ─── ROOT APP ────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      {/* Page dots indicator */}
      <PageDots total={4} current={0} />

      {/* Main horizontal scroll container */}
      <div className="h-screen w-screen overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory scroll-smooth bg-stone-900 scroll-hide">
        <CoverPage />
        <ChurchPage />
        <PhotographyPage />
        <GroomLetterPage />
      </div>
    </>
  );
}
