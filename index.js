const core = require('@actions/core')
const github = require('@actions/github')

try {
	const key = core.getInput('key');
	console.log(`Access Key: ${key}`);

	const content = "Hello, DMNKX";
	core.setOutput("content", content);

	const payload = JSON.stringify(github.context.payload, undefined, 2);
	console.log(`The event payload: ${payload}`);
} catch (error) {
	core.setFailed(error.message);
}
