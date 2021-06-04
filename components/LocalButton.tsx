import React from "react";

export interface ButtonProps {
  locale: string;
}

/**
 * Primary UI component for user interaction
 */
export default function Button({ locale }: ButtonProps) {
  return (
    <button type="button">
      {locale === "cn" ? "切换语言" : "change language"}
    </button>
  );
}
