# nextjs-demo

Next.js の学習・デモ用アプリケーション。TypeScript と Tailwind CSS を使用。

## 技術スタック

- Next.js 16 (App Router + Turbopack)
- React 19
- TypeScript 5.4
- Tailwind CSS 3.4
- bun (パッケージマネージャー)
- oxlint / oxfmt (リント・フォーマット)

## セットアップ

```bash
bun install
```

## 開発コマンド

```bash
bun run dev      # 開発サーバー起動 (http://localhost:3000)
bun run build    # 本番ビルド
bun run start    # 本番サーバー起動
bun run lint     # リント実行
bun run format   # コードフォーマット
```

## ディレクトリ構造

```
nextjs-demo/
├── app/               # App Router ページ・レイアウト
│   ├── layout.tsx     # ルートレイアウト
│   ├── page.tsx       # ホームページ
│   └── globals.css    # グローバルスタイル
├── tailwind.config.ts # Tailwind CSS 設定
├── tsconfig.json      # TypeScript 設定
└── package.json       # パッケージ定義
```
