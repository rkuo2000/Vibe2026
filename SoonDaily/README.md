# 順報 SOON · 台北順起來 2026.10.06（互動版）

`Claude Code` `Opus 5.5`

Interactive single-page HTML rebuilt from the 8 pages of 順報 (`SoonDaily-2026-10-06_p01.webp` ~ `p08.webp`).

## Prompt
```
study *.webp, and make a SoonDaily HTML with interactive contents of each page
```

## HTML : [SoonDaily-2026-10-06.html](SoonDaily-2026-10-06.html)

| 頁面 | 互動內容 |
|---|---|
| 封面 | 動態馬賽克拼貼背景，標題可直接跳到對應章節 |
| 01 走進老故事 | 5 條捷運文化路徑（北投、士林、大同、中正、萬華）：站點介紹、「沿線走一趟」動畫、Google 地圖步行導航、36 站集章；台北城牆冷知識問答 |
| 02 走進山裡 | 走進山林注意事項檢查清單與出發準備度；12 條親山步道依難易度／區域／捷運站或用途篩選，「幫我挑一條」隨機推薦 |
| 03 先動起來 | WHO 每週 150–300 分鐘活動紀錄環 |
| 04 跑者秘境地圖 | 6 條跑步／越野路線互動示意地圖、路線卡片與配速換算 |
| 05 運動驛站 | 驛站服務卡片；兩則漫畫分格播放；下班恢復力（Sonnentag & Fritz 四面向）自我檢測與雷達圖 |
| 06 沈伯洋想做的事 | 「點 → 線 → 面」動畫；三項政策卡片連回本期相關章節 |
| 政見總覽 | 五大面向（HABITAT、EMPOWER、ACCOMPANY、TIME、RESILIENCE）文字雲篩選與「本期相關」標示 |

## Usage
- The page is a flip book: 8 pages, one per original page. Turn pages with ←/→ keys, the ‹ › buttons, the page dots and tabs, a left/right swipe on touch screens, or a horizontal trackpad scroll. A page only scrolls up and down by itself when its content is taller than the screen.
- Original page images load from [rkuo2000/SoonDaily/webp](https://github.com/rkuo2000/SoonDaily/tree/main/webp) (via `raw.githubusercontent.com`), so the HTML works from any folder but needs internet access. Photos, comic panels, signature and LINE QR code are cropped directly from those images.
- Every page has a 「📄 原版」 button to view the original page, with a link to the image on GitHub (←/→ to switch pages, Esc to close).
- Stamps, checklist, weekly minutes and self-check scores are saved in the browser's `localStorage` only.

## Notes
- Short station descriptions on page 01 are general background written for this version; the original only lists station names.
- 政見總覽 categories are grouped by the colours used in the printed layout.
- 本刊物由 2026 台北市長候選人沈伯洋競選團隊製作、發行。
