const preprocess = require('svelte-preprocess')

module.exports = {
	preprocess: preprocess({
		postcss: true,
		style: async ({ content, attributes }) => {
      if (attributes.type !== "text/postcss") return
      return new Promise((resolve, reject) => {
        resolve({ code: "", map: "" })
			})
		}
	}),
}