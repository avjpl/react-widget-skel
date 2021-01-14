const {
  MiniHtmlWebpackPlugin,
  generateAttributes,
  generateCSSReferences,
  generateJSReferences
} = require('mini-html-webpack-plugin');

module.exports = ({ title, mode }) => ({
  plugins: [new MiniHtmlWebpackPlugin({
    context: { title, ...(mode === 'development' ? { body: '<div id="app"></div>' } : {}) },
    ...(
      mode !== 'development'
        ? {
          template: ({
            css,
            js,
            publicPath,
            title,
            htmlAttributes,
            cssAttributes,
            jsAttributes
          }) => {
            const htmlAttrs = generateAttributes(htmlAttributes);

            const cssTags = generateCSSReferences({
              files: css,
              attributes: cssAttributes,
              publicPath
            });

            const jsTags = generateJSReferences({
              files: js,
              attributes: jsAttributes,
              publicPath
            });

            return `<!DOCTYPE html>
            <html${htmlAttrs}>
              <head>
                <meta charset="UTF-8">
                <title>${title}</title>
                ${cssTags}
              </head>
              <body>
                <div id="app"></div>
                ${jsTags}
                <script>
                  const config = {
                    message: 'it working!!',
                    theme: 'ac'
                  };

                  const mode = 'bsr';

                  window.Widget.init(config);
                </script>
              </body>
            </html>`;
          },
        }
      : {}
    )
  })],
});
