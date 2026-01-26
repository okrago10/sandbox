# nextjs-demo

Next.js の学習・デモ用アプリケーション。TypeScript と Tailwind CSS を使用。

## 技術スタック

- Next.js 16 (App Router + Turbopack)
- React 19
- TypeScript 5.4
- Tailwind CSS 3.4
- shadcn/ui (Radix UI + Tailwind)
- Storybook (コンポーネントドキュメンテーション)
- bun (パッケージマネージャー)
- oxlint / oxfmt (リント・フォーマット)

## セットアップ

```bash
bun install
```

## 開発コマンド

```bash
bun run dev        # 開発サーバー起動 (http://localhost:3000)
bun run build      # 本番ビルド
bun run start      # 本番サーバー起動
bun run lint       # リント実行 (oxlint + ESLint)
bun run format     # コードフォーマット (oxfmt)
bun run storybook  # Storybook 起動 (http://localhost:6006)
```

## ディレクトリ構造

```
nextjs-demo/
├── src/
│   ├── app/                    # App Router ページ・レイアウト
│   │   ├── layout.tsx          # ルートレイアウト
│   │   ├── page.tsx            # ホームページ
│   │   └── globals.css         # グローバルスタイル + CSS変数
│   ├── components/
│   │   ├── ui/                 # shadcn/ui コンポーネント
│   │   │   └── button.tsx
│   │   └── Button/             # カスタムコンポーネント（Storybook付き）
│   │       ├── Button.tsx
│   │       ├── Button.stories.tsx
│   │       └── index.ts
│   └── lib/
│       └── utils.ts            # ユーティリティ関数 (cn ヘルパー)
├── tailwind.config.ts          # Tailwind CSS 設定
├── components.json             # shadcn/ui 設定
├── tsconfig.json               # TypeScript 設定
└── package.json                # パッケージ定義
```

## shadcn/ui コンポーネント

UIコンポーネントは CLI で追加し、`src/components/ui/` に格納されます。

```bash
bunx shadcn@latest add [component]  # 新しいコンポーネントを追加
```

## インポートエイリアス

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

`@/*` は `./src/*` にマッピングされています。

## 設定ファイル

| ファイル             | 用途                                  |
| -------------------- | ------------------------------------- |
| `tsconfig.json`      | TypeScript 設定、パスエイリアス `@/*` |
| `tailwind.config.ts` | Tailwind + shadcn/ui カラートークン   |
| `components.json`    | shadcn/ui 設定                        |
| `eslint.config.mjs`  | ESLint 9 フラット設定                 |
| `.oxlintrc.json`     | Oxlint 設定                           |
| `.oxfmtrc.json`      | Oxfmt 設定                            |
