import "./globals.css";

export const metadata = {
  title: "SUNG WOO's NEXT Web Site",
  description:
    "한가지 사이트를 다양한 프레임워크를 통해 만들어 보는 사이트입니다.",
  keywords: ["포트폴리오", "넥스트"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="imge/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
