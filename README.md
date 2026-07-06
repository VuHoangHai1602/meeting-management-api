# Meeting Management API

## Technologies

- Node.js
- Express.js
- MySQL

## Install

```bash
npm install
```

## Run

```bash
node src/server.js
```

## APIs

| Method | Endpoint | Chức năng |
|--------|----------|-----------|
| GET | /api/meetings | Lấy danh sách |
| POST | /api/meetings | Tạo cuộc họp |
| PUT | /api/meetings/:id | Cập nhật |
| PATCH | /api/meetings/:id/cancel | Hủy cuộc họp |

## Database

Database: meeting_db

Table: meetings
