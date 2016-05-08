'use strict';

import * as vscode from 'vscode';
import * as cp from 'child_process';
import { runInTerminal } from 'run-in-terminal';

let outputChannel: vscode.OutputChannel;

export function activate(context: vscode.ExtensionContext) {
    registerCommands(context);
    outputChannel = vscode.window.createOutputChannel('ng');
    context.subscriptions.push(outputChannel);
}

function registerCommands(context: vscode.ExtensionContext) {
    let child;

    let ngnew = vscode.commands.registerCommand('extension.ngNew', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'name of your project' }).then(
            (data) => {
                runNgCommand(['new', data], true);
            }
        )
    });

    let nginit = vscode.commands.registerCommand('extension.ngInit', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'name of your project' }).then(
            (data) => {
                runNgCommand(['init', data], true);
            }
        )
    });

    let ngversion = vscode.commands.registerCommand('extension.ngVersion', () => {
        child = cp.exec('ng version');
        child.stdout.on('data', (data) => {
            console.log(data);
        });
    });

    let ngserve = vscode.commands.registerCommand('extension.ngServe', () => {
        runNgCommand(['serve'], true);
    });

    let ngdoc = vscode.commands.registerCommand('extension.ngDoc', () => {
        vscode.window.showInputBox({ placeHolder: 'search for' }).then(
            (data) => {
                runNgCommand(['doc', data], false);
            }
        )
    });

    let nglint = vscode.commands.registerCommand('extension.ngLint', () => {
        runNgCommand(['lint'], true);
    });

    let ngcompletion = vscode.commands.registerCommand('extension.ngCompletion', () => {
        runNgCommand(['completion'], false);
    });

    let nge2e = vscode.commands.registerCommand('extension.ngE2e', () => {
        runNgCommand(['e2e'], true);
    });

    let ngformat = vscode.commands.registerCommand('extension.ngFormat', () => {
        runNgCommand(['format'], true);
    });

    // let nggenerate = vscode.commands.registerCommand('extension.ngGenerate', () => {
    //     child = cp.exec('ng generate');
    //     child.stdout.on('data', (data) => {
    //         vscode.window.showInformationMessage(data);
    //     });
    // });

    // let ngget = vscode.commands.registerCommand('extension.ngGet', () => {
    //     child = cp.exec('ng get');
    //     child.stdout.on('data', (data) => {
    //         vscode.window.showInformationMessage(data);
    //     });
    // });

    // let ngset = vscode.commands.registerCommand('extension.ngSet', () => {
    //     child = cp.exec('ng set');
    //     child.stdout.on('data', (data) => {
    //         vscode.window.showInformationMessage(data);
    //     });
    // });

    // let ngdeploy = vscode.commands.registerCommand('extension.ngDeploy', () => {
    //     child = cp.exec('ng github-pages:deploy');
    //     child.stdout.on('data', (data) => {
    //         vscode.window.showInformationMessage(data);
    //     });
    // });


    // let ngtest = vscode.commands.registerCommand('extension.ngTest', () => {
    //     child = cp.exec('ng test');
    //     child.stdout.on('data', (data) => {
    //         vscode.window.showInformationMessage(data);
    //     });
    // });

    context.subscriptions.push(ngnew);
    context.subscriptions.push(nginit);
    context.subscriptions.push(ngversion);
    context.subscriptions.push(ngserve);
    context.subscriptions.push(ngdoc);
    context.subscriptions.push(nglint);
    context.subscriptions.push(ngformat);
    context.subscriptions.push(nge2e);
    context.subscriptions.push(ngcompletion);

    //     context.subscriptions.push(nggenerate);
    //     context.subscriptions.push(ngget);
    //     context.subscriptions.push(ngset);
    //     context.subscriptions.push(ngdeploy);
    //     context.subscriptions.push(ngtest);


    function runCommandInOutputWindow(args: string[], cwd: string) {
        let cmd = 'ng ' + args.join(' ');
        let p = cp.exec(cmd, { cwd: cwd, env: process.env });
        p.stderr.on('data', (data: string) => {
            outputChannel.append(data);
        });
        p.stdout.on('data', (data: string) => {
            outputChannel.append(data);
        });
        showOutput();
    }

    function showOutput(): void {
        outputChannel.show(vscode.ViewColumn.Three);
    }

    function runNgCommand(args: string[], useTerminal?: boolean): void {

        let cwd = vscode.workspace.rootPath;

        if (useTerminal) {
            runCommandInTerminal(args, cwd);
        } else {
            runCommandInOutputWindow(args, cwd);
        }
    }
    function runCommandInTerminal(args: string[], cwd: string): void {
        runInTerminal('ng', args, { cwd: cwd, env: process.env });
    }

}

// this method is called when your extension is deactivated
export function deactivate() {
}