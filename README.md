# Todo List

這是一個使用 React、Next.js 和 CSS 實作的簡單待辦清單應用。用戶可以新增、刪除、編輯待辦事項，並切換待辦事項的完成狀態。

## 功能

- **新增待辦事項**：用戶可以新增待辦事項。
- **編輯待辦事項**：用戶可以編輯已新增的待辦事項。
- **刪除待辦事項**：用戶可以刪除待辦事項。
- **切換完成狀態**：用戶可以將待辦事項標記為完成或未完成。
- **排序待辦事項**：可以切換顯示已完成的事項是否排到列表底部。
- **顯示進度條**：根據已完成的事項顯示進度百分比。

## 技術棧

- **React**：用於建構 UI。
- **Next.js**：作為 React 應用的框架，提供了伺服器端渲染 (SSR) 和靜態站點生成 (SSG) 的功能。
- **CSS Modules**：用於樣式管理，確保樣式作用域局部。
- **useState**、**useEffect**、**useRef**：React hooks 用於管理應用狀態和副作用。

## 專案結構

```bash
.
├── app
│   ├── components
│   │   ├── CreateForm.js        # 負責新增待辦事項的表單
│   │   ├── Todo.js              # 顯示單一待辦事項
│   │   ├── TodoWrapper.js       # 負責管理待辦事項列表的邏輯
│   │   ├── EditForm.js          # 用於編輯待辦事項的表單
│   └── pages.js                 # 主頁面，顯示 TodoWrapper
│   └── page.module.css          # 頁面樣式
├── package.json                 # 項目配置文件
├── next.config.mjs              # Next.js 配置文件
└── README.md                    # 專案說明文件

```
## 安裝

**首先，克隆本專案**：git clone https://github.com/yourusername/todo-app.git

**然後安裝依賴：**
cd todo-app
npm install

**啟動開發伺服器**：npm run dev

**開啟瀏覽器並訪問** ：http://localhost:3000 查看應用。