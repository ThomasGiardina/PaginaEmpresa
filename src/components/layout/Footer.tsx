"use client";

import { useLocale } from "@/i18n/context";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer>
      <p>{t("footer.copyright")}</p>
    </footer>
  );
}
