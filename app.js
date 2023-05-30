const express = require('express');

const app = express ();
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", port);
});

// response.send(status) is now a function that takes the JSON object as argument.
app.get("/status", (request, response) => {
  const status = {
    "Status": "Running"
  };
  response.send(status);
});