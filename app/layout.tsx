import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '오즈키즈 시즌별 기획제품 대시보드',
  description: '2026 시즌별 기획제품 현황',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
