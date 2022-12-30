# ecea-client
___


### Setup
* Configure .vscode/settings.json
    ```
   {
    "eslint.format.enable": true,
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll.stylelint": true
    },
    "files.eol": "\n",
    "[javascript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "eslint.alwaysShowStatus": true,
    "eslint.debug": true,
    "eslint.lintTask.enable": true,
    "eslint.probe": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "json.format.enable": true,
    }
    ```

* #### Enable githooks
    ```sh
    git config core.hooksPath .githooks
    ```

* #### Install Dependencies
    ```sh
    npm i
    ``` 
* #### Run
    ``` sh
    npm run dev
    ```
* #### Lint
 
    ``` sh
    npm run lintfix
    ```  