const joi = require("joi");

const schemaBody = joi.object({
  phone: joi.string().required(),

  template: joi.string().required(),

  parameters: joi
    .string().required(),
});

module.exports = schemaBody;
