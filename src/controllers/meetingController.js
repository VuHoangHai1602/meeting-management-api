const db = require("../config/db");

// GET /api/meetings
exports.getMeetings = async (req, res) => {
    try {
        const [rows] = await db.execute("SELECT * FROM meetings");
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Database Error"
        });
    }
};

// POST /api/meetings
exports.createMeeting = async (req, res) => {
    try {
        const {
            title,
            description,
            meeting_date,
            start_time,
            end_time,
            location
        } = req.body;

        const sql = `
            INSERT INTO meetings
            (title, description, meeting_date, start_time, end_time, location)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        await db.execute(sql, [
            title,
            description,
            meeting_date,
            start_time,
            end_time,
            location
        ]);

        res.status(201).json({
            message: "Meeting created successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });
    }
};

// PUT /api/meetings/:id
exports.updateMeeting = async (req, res) => {

    try {

        const id = req.params.id;

        const {
            title,
            description,
            meeting_date,
            start_time,
            end_time,
            location
        } = req.body;

        await db.execute(
            `UPDATE meetings
             SET title=?,
                 description=?,
                 meeting_date=?,
                 start_time=?,
                 end_time=?,
                 location=?
             WHERE id=?`,
            [
                title,
                description,
                meeting_date,
                start_time,
                end_time,
                location,
                id
            ]
        );

        res.json({
            message: "Meeting updated successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Database Error"
        });

    }

};

// PATCH /api/meetings/:id/cancel
exports.cancelMeeting = async (req, res) => {

    try {

        const id = req.params.id;

        await db.execute(
            "UPDATE meetings SET status='cancelled' WHERE id=?",
            [id]
        );

        res.json({
            message: "Meeting cancelled"
        });

    } catch (error) {

        res.status(500).json({
            message: "Database Error"
        });

    }

};