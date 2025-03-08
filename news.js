import { marked } from '  https://cdn.jsdelivr.net/npm/showdown@<version tag>/dist/showdown.min.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

var converter = new showdown.Converter(),
    text = converter.makeHtml("# Hello World\n\nThis is a **markdown** example.");

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

const markdown = `# Hello World\n\nThis is a **markdown** example.`;
const html = marked.parse(markdown);

console.log(html);

