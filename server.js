const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./userModel");
const app = express();
app.use(express.json());

mongoose.connect(
    "mongodb://localhost:27017/mydb",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

app.get("/users", async (request, response) => {
    const users = await userModel.find({});

    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/addusers", async (request, response) => {
    const user = new userModel(request.body);
    try {
        await user.save();
        response.send(food);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.patch("/updateuser/:id", async (request, response) => {
    try {
        await userModel.findByIdAndUpdate(request.params.id, request.body);
        await userModel.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.delete("/deleteuser/:id", async (request, response) => {
    try {
        const user = await userModel.findByIdAndDelete(request.params.id);

        if (!user) response.status(404).send("No item found");
        response.status(200).send();
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log("Server is running...");
});