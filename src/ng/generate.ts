'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run';

export var nggenerate = vscode.commands.registerCommand('extension.ngGenerate', () => {
        let param: string[] = ['generate']
        let items = ['component', 'directive', 'route', 'pipe', 'service', 'module'];
        let options = { matchOnDescription: false, placeHolder: "select Type" };
        vscode.window.showQuickPick(items, options).then((data) => {
            param.push(data);
            vscode.window.showInputBox({ placeHolder: 'name of the ' + data }).then(
                (name) => {
                    param.push(name);
                    runNgCommand(param, true);
                }
            )
        })
    });