"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

export function YandexMetrika() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathName}?${searchParams}`;

    const handleYandexHit = () => {
      if (typeof ym !== "undefined") {
        ym(98319042, "hit", url);
      }
    };

    window.addEventListener("ym-load", handleYandexHit);

    if (typeof ym !== "undefined") {
      handleYandexHit();
    }

    return () => {
      window.removeEventListener("ym-load", handleYandexHit);
    };
  }, [pathName, searchParams]);

  return (
    <Script
      id="yandex-metrika"
      strategy="afterInteractive"
      onLoad={() => {
        window.dispatchEvent(new Event("ym-load"));
      }}
    >
      {`
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(98319042, "init", {
          defer: true,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true
        });
      `}
    </Script>
  );
}
