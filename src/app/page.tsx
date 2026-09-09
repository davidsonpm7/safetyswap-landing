"use client";

import { WaitlistView } from "@/modules/waitlist/waitlist.view";
import { useWaitlistViewModel } from "@/modules/waitlist/waitlist.viewModel";

export default function LandingPage() {
  const props = useWaitlistViewModel();

  return <WaitlistView {...props} />;
}
