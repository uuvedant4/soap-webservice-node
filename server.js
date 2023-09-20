const soap = require("soap");
const express = require("express");
const app = express();

const service = {
  BMI_Service: {
    BMI_Port: {
      calculateBMI(args) {
        const n = args.weight / (args.height * args.height);
        return { bmi: n };
      },
    },
  },
};

const xml = require("fs").readFileSync("./bmicalculator.wsdl", "utf8");

const server = app.listen(3030, function () {
  const host = "127.0.0.1";
  const port = server.address().port;
  console.log(`Server running at http://localhost:${port}/`);
});

soap.listen(server, "/bmicalculator", service, xml);
