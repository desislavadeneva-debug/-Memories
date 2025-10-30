import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Sparkles } from "lucide-react";

interface Wish {
  id: number;
  name: string;
  message: string;
  role: string;
}

const wishes: Wish[] = [
  {
    name: "Сергей Атанасов",
    id: 1,
    role: "Maintenance",
    message:
      "Успех в квото се захванеш, по-читаво планиране и по-малко лавиране измежду всевъзможни и невъзможни обстоятелства, повече пари и по-малко работа 😄",
  },
  {
    id: 2,
    name: "Сашо Иванов",
    role: "Frontend Developer",
    message:
      `Три години пример, спокойствие и заряд, щитът на отдела и двигателят на идеите.  Ще липсваш като ръководител, но ще останеш като стандарт.`,
  },

  {
    id: 3,
    name: "Цветана Калайкова",
    message:
      "Въпреки че понякога гледахме от различни политически ъгли, винаги съм имала огромно възхищение към ума и идеите ти.  Ти поне знаеше какво говориш! 😄 За мен оставаш един от най-ярките колеги, с които съм работила в Телематик - умен, прям и вдъхновяващ и аз НАИСТИНА те ценя и те харесвам и ще ми липсваш. Успех и късмет в новото поприще!",
    role: "UX designer",
  },
  {
    id: 4,
    name: "Любима Такова",
    role: "Senior Frontend Developer",
    message:
      "След теб остава вдъхновение, след нас – дълбока благодарност. Пожелавам ти смелост да следваш мечтите си, късмет във всяко ново начало и безкрайно вдъхновение по пътя напред!",
  },
  {
    id: 5,
    name: "Любомир Илиев",
    role: "Frontend Developer",
    message:
      "Искам отново да ти благодаря за шанса, който ми даде и за приятната обстановка, в която започнах да работя и да се уча на много нови неща. На всички ще ни липсва хумора ти и цялостното ти присъствие при нас в офиса. Пожелавам ти да имаш много успехи на новото място и да продължаваш да се развиваш.",
  },
  {
    id: 6,
    name: "Антонио Донов",
    role: "Head of Business Development",
    message:
      `В Дубай разбрах, че дори зад най-сериозното лице се крие човек с чувство за хумор.Е, поне така си мисля — още не съм сигурен. 😄 Ерудиран, стриктен и винаги stoneface  🗿 — дори в пустинята на 45 градуса.
      Успех, Олег!
       Ще ни липсваш – и този път няма как да го скриеш с stoneface 🗿.`,
  },
  {
    id: 7,
    name: "Десислава Денева",
    role: "Frontend Developer",
    message:
      "Ти не беше просто лидер, а човекът, който ми даде начало и посока. Благодаря ти, че ме изгради и повярва в мен, когато още не бях готова да повярвам сама. Благодарение на теб днес вървя уверено по пътя си и знам, че мога повече, отколкото вярвах тогава. Остави следа, която ще нося със себе си винаги.",
  },
  {
    id: 8,
    name: "Станислав Омарев",
    role: "Senior Front-End Developer, Team Lead",
    message: `Благодарим ти за вдъхновението, професионализма и страстта, с които водеше екипа!Беше пример за лидер, който не просто ръководи, а изгражда. Пожелаваме ти нови успехи, интересни проекти и хора, с които работата да е удоволствие. Keep coding. Keep growing. 🚀`,
  },
  {
    id:9,
    name:" Роман Димитров",
    role:"Operational Manager for Online International Operations",
    message:`Олег, ах този Олег!
   Дори и като бяхме в странство в командировките, той остана себе си!
   За мен той винаги ще е различен и не на последно място .... 
   Успешен!`
  },
{
   name: "Мартин Костов",
   role: "10X DEVELOPER",
   message: "Радвам се, че имах възможността да работя с теб, беше стабилно и приятно време. Винаги можеше да се разчита, че ще застанеш зад екипа, дори и това понякога да ти се връщаше с часовете. Успех в новата работа и дано да ти е по-чил!",
   id: 10
 },
 {
   name: "Стилияна Байчева",
   role: "Victoria's Secret Model",
   message: "Желая ти от сърце много нови възможности и вдъхновяващи предизвикателства! Нека всеки нов проект ти носи удовлетворение и те води напред. Бъди винаги сред хора, които те обичат, уважават и оценяват – както ние винаги сме го правили.",
   id: 11
 },
 {
   name: "Пламен Ерменков",
   role: "Storybook Developer",
   message: "Благодаря ти за шанса, подкрепата, възможността да се развивам и за страхотната атмосфера, която създаде в екипа. Ще ни липсваш — и като лидер, и като човек. Пожелавам ти от сърце много нови възможности и вдъхновяващи предизвикателства!",
  id: 12
 },

  //   {
  //   id: 8,
  //   name: "Milo Borissov",
  //   role: "Managing partner and group CEO, Telematic Group",
  //   message: `Олег - желая ти занапред много нови лични и професионални успехи !
  // Best regards `,
  // },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % wishes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + wishes.length) % wishes.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              A Fond Farewell
            </h1>
            <Sparkles className="w-8 h-8 text-green-400 animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            To Our Inspiring Tech Development Leader
          </p>
          <div className="flex items-center justify-center gap-1 text-slate-400">
            <Heart className="w-5 h-5 fill-red-400 text-red-400 animate-pulse" />
            <p className="text-sm">From Your Team, With Gratitude</p>
            <Heart className="w-5 h-5 fill-red-400 text-red-400 animate-pulse" />
          </div>
        </div>

        <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-9 min-h-[400px] flex flex-col justify-between">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Wish {currentIndex + 1} of {wishes.length}
          </div>

          <div className="flex-1 flex flex-col justify-center mb-8">
            <div className="relative">
              <div className="absolute -top-4 -left-2 text-6xl text-blue-400/50 font-serif leading-none">
                "
              </div>
              <div className="text-xl md:text-2xl text-white relative z-10 mb-8 text-center md:px-4 pt-4">
                <div className="text-xl md:text-2xl text-white  relative z-10 mb-8 text-center md:px-4">
                  {wishes[currentIndex].message.split("\n").map((line, i) => (
                    <div key={i}>
                      {line}
                      <br />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-12 -right-2 text-6xl text-blue-400/50 font-serif leading-none">
                "
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-400 bg-clip-text text-transparent">
                {wishes[currentIndex].name}
              </p>
              <p className="text-sm text-slate-400 uppercase tracking-wider">
                {wishes[currentIndex].role}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Previous wish"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-cyan-300 transition-colors" />
            </button>

            <div className="flex gap-1">
              {wishes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${index === currentIndex
                      ? "w-12 bg-gradient-to-r from-blue-400 to-cyan-400 h-2.5"
                      : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                    }`}
                  aria-label={`Go to wish ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Next wish"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-cyan-300 transition-colors" />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-lg text-slate-300 italic">
            "Leadership is not about being in charge. It's about taking care of
            those in your charge."
          </p>
          <p className="text-sm text-slate-500">
            Your journey with us may be ending, but your impact will last
            forever
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
