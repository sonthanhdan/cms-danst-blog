// const React = require("react")
const $ = require("jquery")
require('lazysizes')
// const Layout = require("./src/components/layout")
// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  
}
// // Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>
// }
exports.onInitialClientRender = ({ location }) => {
  var App = {};
  App.initialClient = function(){
    console.log('****** initialClient ******');
  }








  $(document).ready(App.initialClient);
}