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
                    console.log(data);
                });
            }
        )
    });

    let nginit = vscode.commands.registerCommand('extension.ngInit', () => {
        let project = vscode.window.showInputBox({ placeHolder: 'name of your project' }).then(
            (data) => {
                child = exec('ng init ' + data);
                child.stdout.on('data', (data) => {
                    console.log(data);
                });
            }
        )
    });

    let ngversion = vscode.commands.registerCommand('extension.ngVersion', () => {
        child = exec('ng version');
        child.stdout.on('data', (data) => {
            console.log(data);
        });
    });

    let ngserve = vscode.commands.registerCommand('extension.ngServe', () => {
        child = exec('ng serve');
        child.stdout.on('data', (data) => {
            console.log(data);
        });
        child.stderr.on('data', function (data) {
            console.error(data);
        });
    });

    let ngdoc = vscode.commands.registerCommand('extension.ngDoc', () => {
        vscode.window.showInputBox({ placeHolder: 'name of your project' }).then(
            (data) => {
                child = exec('ng doc ' + data);
                child.stdout.on('data', (data) => {
                    console.log(data);
                });
            }
        )
    });

    let nglint = vscode.commands.registerCommand('extension.ngLint', () => {
        child = exec('ng lint');
        child.stdout.on('data', (data) => {
            console.log(data);
        });
    });

    let ngcompletion = vscode.commands.registerCommand('extension.ngCompletion', () => {
        child = exec('ng completion');
        child.stdout.on('data', (data) => {
            vscode.window.showInformationMessage(data);
        });
    });

    let nge2e = vscode.commands.registerCommand('extension.ngE2e', () => {
        child = exec('ng e2e');
        child.stdout.on('data', (data) => {
            vscode.window.showInformationMessage(data);
        });
    });

    let ngformat = vscode.commands.registerCommand('extension.ngFormat', () => {
        child = exec('ng format');
        child.stdout.on('data', (data) => {
            vscode.window.showInformationMessage(data);
        });
    });

    // let nggenerate = vscode.commands.registerCommand('extension.ngGenerate', () => {
    //     child = exec('ng generate');
    //     child.stdout.on('data', (data) => {
    //         vscode.window.showInformationMessage(data);
    //     });
    // });

    // let ngget = vscode.commands.registerCommand('extension.ngGet', () => {
    //     child = exec('ng get');
    //     child.stdout.on('data', (data) => {
    //         vscode.window.showInformationMessage(data);
    //     });
    // });

    // let ngset = vscode.commands.registerCommand('extension.ngSet', () => {
    //     child = exec('ng set');
    //     child.stdout.on('data', (data) => {
    //         vscode.window.showInformationMessage(data);
    //     });
    // });

    // let ngdeploy = vscode.commands.registerCommand('extension.ngDeploy', () => {
    //     child = exec('ng github-pages:deploy');
    //     child.stdout.on('data', (data) => {
    //         vscode.window.showInformationMessage(data);
    //     });
    // });


    // let ngtest = vscode.commands.registerCommand('extension.ngTest', () => {
    //     child = exec('ng test');
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

    // context.subscriptions.push(ngcompletion);
    // context.subscriptions.push(nge2e);
    // context.subscriptions.push(ngformat);
    //     context.subscriptions.push(nggenerate);
    //     context.subscriptions.push(ngget);
    //     context.subscriptions.push(ngset);
    //     context.subscriptions.push(ngdeploy);
    //     context.subscriptions.push(ngtest);

}

// this method is called when your extension is deactivated
export function deactivate() {
}