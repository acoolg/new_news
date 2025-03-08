
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyA8orpGg3z9EOp_zGfNTPjRrLzgxi1_YxA",
    authDomain: "ctne-e70cb.firebaseapp.com",
    databaseURL: "https://ctne-e70cb-default-rtdb.firebaseio.com",
    projectId: "ctne-e70cb",
    storageBucket: "ctne-e70cb.appspot.com",
    messagingSenderId: "899093189231",
    appId: "1:899093189231:web:e16e6c299a3a07a2d1739a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

const markdown = `### 說明：
- **標題與段落**：展示基本的標題和段落文字。
- **清單**：展示了無序清單和有序清單。
- **代碼區塊**：展示了行內代碼、多行代碼區塊、可折疊代碼區塊的使用。
- **圖片與徽章**：展示了如何插入圖片、加上說明文字、並使用 GitHub 徽章。
- **數學公式**：展示了行內公式與顯示公式。
- **表格**：一個簡單的表格顯示。
- **影片與音頻**：展示了嵌入 YouTube 影片和音頻文件的方式。
- **文字強調**：展示了加粗、斜體和加粗斜體的文字格式。
- **引用**：展示了如何使用引用來標註文字。
- **自定義標籤與拼音**：展示了如何使用自定義標籤和拼音輸入標註。
- **表情符號**：示範了如何嵌入表情符號。
- **行內區塊元素**：展示了如何插入帶有圖片的行內區塊元素。
`;
const html = marked.parse(markdown);

console.log(html);

async function getIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}


console.log(await getIP());
