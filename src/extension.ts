// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const twitter = require('twitter-text');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	function getSelection(){
    	const activeEditor = vscode.window.activeTextEditor;
    	if (activeEditor) {
        	return(activeEditor.document.getText(activeEditor.selection));
    	}
	}
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tweetvalidator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('tweetvalidator.validateTweet', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user

		// let tweet = vscode.window.activeTextEditor.selection
		let parsed = twitter.parseTweet(getSelection());

		vscode.window.showInformationMessage('Tweet length:' + parsed.weightedLength + '; Valid: ' + String(parsed.valid));
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
