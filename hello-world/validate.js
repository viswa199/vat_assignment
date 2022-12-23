const validate = require('validate-vat');
const util = require('util')

const validateVat = util.promisify(validate)

module.exports= {validateVat};