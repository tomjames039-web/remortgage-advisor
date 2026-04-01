"use client";

import { trackPhoneClick } from "@/lib/analytics";

interface TrackablePhoneLinkProps {
  phoneNumber: string;
  children: React.ReactNode;
  className?: string;
}

export default function TrackablePhoneLink({
  phoneNumber,
  children,
  className = "",
}: TrackablePhoneLinkProps) {
  const handleClick = () => {
    trackPhoneClick(phoneNumber);
  };

  const formattedNumber = phoneNumber.replace(/\s/g, "");

  return (
    <a
      href={`tel:${formattedNumber}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
