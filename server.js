const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// เปิดให้หน้าบ้านดึงข้อมูลได้ (CORS)
app.use(cors());
app.use(express.json());

// ฐานข้อมูลจำลอง (Mock Database)
const products = [
    {
        id: 1,
        name: "ซอสผัดกะเพราสูตรเข้มข้น",
        description: "ไม่ต้องปรุงเพิ่ม แค่ผัดกับเนื้อสัตว์ก็อร่อยเหมือนเชฟมาทำให้",
        price: 89,
        image: "https://images.unsplash.com/photo-1596649281358-154dd9d96c46?auto=format&fit=crop&w=400&q=80",
        lineMessage: "สนใจสั่งซื้อ ซอสผัดกะเพราสูตรเข้มข้น จำนวน 1 ขวด ครับ/ค่ะ"
    },
    {
        id: 2,
        name: "น้ำจิ้มสุกี้โบราณ dpAlLL",
        description: "รสชาติกลมกล่อม หอมงาเตะจมูก ทานกับอะไรก็เข้ากัน",
        price: 99,
        image: "https://images.unsplash.com/photo-1604328471151-b52226907017?auto=format&fit=crop&w=400&q=80",
        lineMessage: "สนใจสั่งซื้อ น้ำจิ้มสุกี้โบราณ จำนวน 1 ขวด ครับ/ค่ะ"
    },
    {
        id: 3,
        name: "ข้าวไก่กระเทียม (พร้อมทาน)",
        description: "อาหารสำเร็จรูปพรีเมียม อุ่นไมโครเวฟ 2 นาที พร้อมทานทันที",
        price: 55,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80",
        lineMessage: "สนใจสั่งซื้อ ข้าวไก่กระเทียม (พร้อมทาน) จำนวน 1 กล่อง ครับ/ค่ะ"
    }
];

// API สำหรับดึงข้อมูลสินค้าทั้งหมด
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
