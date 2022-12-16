async function openai() {
	const { Configuration, OpenAIApi } = require("openai");

	const configuration = new Configuration({
		apiKey: "OPENAI_API_KEY",
	});
	const openai = new OpenAIApi(configuration);

	const completion = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: "Suggest a name for a golden retriever",
	});
	return completion.data.choices[0].text.trim();
}

openai().then(response => {
	console.log(response);
});
