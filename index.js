const express = require('express');
const { CourierClient } = require('@trycourier/courier');

const app = express();
const courier = CourierClient({
  authorizationToken: "pk_test_BAYBTYPX3S4QNTJTJN4R1KEHVN6W"
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get("/send-message", async (req, res) => {
  try {
    const { email, signature } = req.query;
    const { requestId } = await courier.send({
        message: {
          to: {
            data: {
              signature: signature,
            },
            email: email,
          },
          content: {
            title: "Check out your own customized Prosign!",
            body: "Holy cow! Check this out - your personal professional e-mail signature is here.\n\n\n{{signature}}",
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