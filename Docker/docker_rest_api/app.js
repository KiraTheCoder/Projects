const express = require("express");
const connectDB = require("./db");
const User = require("./user");

const app = express();
app.use(express.json());

connectDB();

// Create a new User
app.post("/users", async (req, res) => {
    try {
        const { name, role } = req.body;
        const user = new User({ name, role });
        await user.save();
        res.json({ success: true });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Retrieves all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Update a user
app.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!user) throw new Error("User not found");
        res.json({ success: true });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Delete a user
app.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) throw new Error("User not found");
        res.json({ success: true });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const port = 5000;

app.listen(port, () => {
    console.log("API server started on port 5000");
});