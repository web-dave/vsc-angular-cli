'use strict';

import * as vscode from 'vscode';
import {exec} from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    let child;
    
    let ngnew = vscode.commands.registerCommand('extension.ngNew', () => {
        
        let project = vscode.window.showInputBox({ placeHolder: 'name of your project' }).then(
            (data) => {
                child = exec('ng new ' + data);
                child.stdout.on('data', (data) => {
                    vscode.window.showInformationMessage(data);
                });
            }
        )

    });
    let nginit = vscode.commands.registerCommand('extension.ngInit', () => {
        
        let project = vscode.window.showInputBox({ placeHolder: 'name of your project' }).then(
            (data) => {
                child = exec('ng init ' + data);
                child.stdout.on('data', (data) => {
                    vscode.window.showInformationMessage(data);
                });
            }
        )
        
    });
    
    let ngversion = vscode.commands.registerCommand('extension.ngVersion', () => {
        child = exec('ng version');
        child.stdout.on('data', (data) => {
            vscode.window.showInformationMessage(data);
        });

    });

    context.subscriptions.push(ngnew);
    context.subscriptions.push(nginit);
    context.subscriptions.push(ngversion);
}

// this method is called when your extension is deactivated
export function deactivate() {
}