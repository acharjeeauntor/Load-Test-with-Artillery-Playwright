Clone the repo and enter "npm install" to setup project <br>
Execute the following script to run the test: <br>
    "test": "artillery run functional-artillery.yml", <br>
    "apitest": "artillery run api-artillery.yml", <br>
    "generateJson": "artillery run functional-artillery.yml --output results.json", <br>
    "report": "artillery run functional-artillery.yml --output results.json && artillery report results.json", <br>
    "dashboard": "artillery run functional-artillery.yml --record --key a9_FGcPQzaiFuRPEROfYLtw5hZZTN5X", <br>
    "apireport": "artillery run api-artillery.yml --output results.json && artillery report results.json" <br>

    Example:
    Execute command from the current working directory: npm run test
