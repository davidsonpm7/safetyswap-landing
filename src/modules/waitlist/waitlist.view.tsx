"use client";

import { AlreadyRegisteredCard } from "./components/AlreadyRegisteredCard";
import { FadeIn } from "./components/FadeIn";
import { HowItWorks } from "./components/HowItWorks";
import { InstagramBlock } from "./components/InstagramBlock";
import { ReinforcementPopup } from "./components/ReinforcementPopup";
import { SignupForm } from "./components/SignupForm";
import { SlotsFullCard } from "./components/SlotsFullCard";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import { TrustGrid } from "./components/TrustGrid";
import { WaitlistFAQ } from "./components/WaitlistFAQ";
import { WaitlistFooter } from "./components/WaitlistFooter";
import { WaitlistHeader } from "./components/WaitlistHeader";
import { WaitlistHero } from "./components/WaitlistHero";
import { useWaitlistViewModel } from "./waitlist.viewModel";

export function WaitlistView(props: ReturnType<typeof useWaitlistViewModel>) {
  const {
    count,
    total,
    isFull,
    lead,
    signupRef,
    isSignupVisible,
    scrollToSignup,
    handleSubmit,
    isSubmitting,
    submitError,
    popupOpen,
    closePopup,
  } = props;

  return (
    <div>
      <WaitlistHeader onCtaClick={scrollToSignup} />

      <WaitlistHero count={count} total={total} onCtaClick={scrollToSignup} />

      <section id="cadastro" ref={signupRef} className="py-16">
        <div className="mx-auto max-w-md px-4">
          <FadeIn className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-extrabold text-foreground sm:text-3xl">
              Entre para a lista de fundadores
            </h2>
            <p className="text-sm text-muted-foreground">
              As 10 primeiras pessoas cadastradas ganham taxa zero pra
              sempre.
            </p>
          </FadeIn>

          <FadeIn delayMs={120}>
            {lead ? (
              <AlreadyRegisteredCard lead={lead} />
            ) : isFull ? (
              <SlotsFullCard />
            ) : (
              <SignupForm
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                errorMessage={submitError}
              />
            )}
          </FadeIn>
        </div>
      </section>

      <HowItWorks />

      <TrustGrid />

      <InstagramBlock />

      <WaitlistFAQ />

      <WaitlistFooter />

      <StickyMobileCTA visible={!isSignupVisible} onClick={scrollToSignup} />

      {lead && (
        <ReinforcementPopup lead={lead} open={popupOpen} onClose={closePopup} />
      )}
    </div>
  );
}
