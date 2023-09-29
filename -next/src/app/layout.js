import { Suez_One, Nunito } from "next/font/google";
import c from "clsx";

import "../reset.css";
import "../global.css";

const headingFont = Suez_One({
  variable: "--heading-font",
  subsets: ["latin"],
  weight: ["400"],
});
const textFont = Nunito({ variable: "--text-font", subsets: ["latin"] });

export const metadata = {
  title: "PeloPêlo",
  description: "Adote animais em Campina Grande",
};

export default function RootLayout({ children }) {
  return (
    <html class={c(headingFont.variable, textFont.variable)} lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
