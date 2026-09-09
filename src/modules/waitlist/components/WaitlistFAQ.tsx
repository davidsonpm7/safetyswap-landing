import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/Accordion";

import { INSTAGRAM_HANDLE } from "../Waitlist.constants";
import { FadeIn } from "./FadeIn";

const FAQS = [
  {
    question: "Como funciona a garantia de custódia?",
    answer:
      "Quando você compra um ingresso, o pagamento fica retido numa conta segura do SafetySwap. O vendedor só recebe o dinheiro depois que você confirmar que recebeu o ingresso certo.",
  },
  {
    question: "O que acontece se o vendedor não entregar o ingresso?",
    answer:
      "Você não confirma o recebimento e o pagamento não é liberado. Se a entrega não acontecer, nosso suporte entra na disputa e o dinheiro pode ser devolvido pra você.",
  },
  {
    question: "Só as 10 primeiras pessoas ganham taxa zero pra sempre?",
    answer:
      "Sim. As 10 vagas de fundador dão taxa zero pra sempre, desde que a pessoa siga @" +
      INSTAGRAM_HANDLE +
      " e marque 3 amigos no post de lançamento. Depois da 10ª vaga, o cadastro fecha até o lançamento oficial pra todo mundo.",
  },
  {
    question: "O SafetySwap é o canal oficial de algum evento ou festival?",
    answer:
      "Não. O SafetySwap é uma plataforma independente de intermediação segura entre compradores e vendedores de ingressos — não temos vínculo com nenhum evento, festival, banda ou produtora.",
  },
];

export function WaitlistFAQ() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-2xl px-4">
        <FadeIn className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-extrabold text-foreground sm:text-3xl">
            Perguntas frequentes
          </h2>
        </FadeIn>

        <FadeIn>
          <Accordion>
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
