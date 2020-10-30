// This file was automatically added by xdn deploy.
// You should commit this file to source control.

const { Router } = require('@xdn/core/router')
const { gatsbyRoutes } = require('@xdn/gatsby')

module.exports = new Router().use(gatsbyRoutes)
