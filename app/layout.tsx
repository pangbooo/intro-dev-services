import type { Metadata } from "next";
import { LanguageProvider } from "./i18n/context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Services | 个人开发服务",
  description: "专业软件开发服务，提供 Web 应用、API 开发、技术咨询等一站式解决方案",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
