import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../Waitlist.constants";
import { FadeIn } from "./FadeIn";
import { InstagramIcon } from "./InstagramIcon";

export function InstagramBlock() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <FadeIn>
          <div className="flex flex-col items-center gap-5 rounded-3xl bg-gradient-to-br from-fuchsia-600 via-pink-600 to-amber-500 p-8 text-center text-white sm:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
              <InstagramIcon size={26} />
            </div>

            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Segue @{INSTAGRAM_HANDLE} pra não perder o lançamento
            </h2>

            <p className="max-w-lg text-sm leading-relaxed text-white/90">
              É lá que a gente anuncia novidades, avisa quando as vagas de
              fundador acabam e publica o post de lançamento — o mesmo que
              você precisa marcar 3 amigos pra travar sua taxa zero pra
              sempre.
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-fuchsia-700 transition-transform hover:scale-105"
            >
              <InstagramIcon size={16} />
              Seguir @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
