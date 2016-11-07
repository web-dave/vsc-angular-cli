'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var ngset = vscode.commands.registerCommand('extension.ngSet', () => {
    let param: string[] = ['set']
    vscode.window.showInputBox({ placeHolder: 'name of Param' }).then(
        (name) => {
            // param.push(name);
            vscode.window.showInputBox({ placeHolder: 'value of' + name }).then(
                (val) => {
                    let pair = `${name}=${val}`;
                    param.push(pair);
                    console.log(pair);
                    console.log(param);
                    runNgCommand(param, true);
                }
            )
        }
    )
});