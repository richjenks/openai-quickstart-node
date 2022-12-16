# openai-quickstart-node

Absolute bare bones (but working) starter code for OpenAI in Node.js

## Usage

1. Run `npm i`
1. Get an API key from https://beta.openai.com/account/api-keys
1. Edit `app.js` and replace `OPENAI_API_KEY` with your key
1. Edit the value for `prompt` on line 11 to any input you like
1. Run `node app`

## Why this exists

The code samples in the [OpenAI Documentation](https://beta.openai.com/docs) use bare `await` functions. Which is mostly ok, I guess, because 99.9% of proper developers (i.e. not myself) know you have to wrap them in an `async` function. But why not just add a couple of lines so code samples work when copypasted?

As for the ["quickstart" example app](https://github.com/openai/openai-quickstart-node), it uses React, which is just bonkers. You shouldn't have to trawl through several files to find the one bit of code you actually care about — nor extricate it from a React app into your own code.

Why the barriers to entry? No idea. But this repo will just work with as few assumptions as possible.
