const db = require("./src/config/db");

async function test() {
    try {
        const connection = await db.getConnection();
        console.log("✅ Kết nối MySQL thành công!");
        connection.release();
    } catch (err) {
        console.log("❌ Lỗi:", err.message);
    }
}

test();