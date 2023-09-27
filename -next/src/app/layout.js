import "./reset.css";
import "./global.css";

export const metadata = {
  title: "PeloPêlo",
  description: "Adote animais em Campina Grande",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
