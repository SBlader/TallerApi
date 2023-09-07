module.exports = {
  default: `
            --require-module ts-node/register 
            --require 'features/**/*.steps.ts'
            --require 'features/**/*.config.ts'
            `,
};

/*
module.exports ? {
  default: `cucumber-js --format @serenity-js/cucumber \
    --require ./features/support/setup.js \
    --require ./features/step_definitions/sample.steps.js `
}
*/
