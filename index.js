import express from "express";
import { CourierClient } from "@trycourier/courier";

const app = express();
const courier = CourierClient({
  authorizationToken: "pk_test_BAYBTYPX3S4QNTJTJN4R1KEHVN6W"
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get("/send-message", async (req, res) => {
  try {
    const { email, code } = req.query;
    const { requestId } = await courier.send({
        message: {
          to: {
            data: {
              code: code,
            },
            email: email,
          },
          content: {
            title: "One-on-One is just One step away!",
            body: "You have been invited to chat one-on-one.\nCode to join the room is: {{code}}, or simply follow the link from here.",
          },
          routing: {
            method: "single",
            channels: ["email"],
          },
        },
      });
    res.send(`Message sent with request ID: ${requestId}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending message");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});