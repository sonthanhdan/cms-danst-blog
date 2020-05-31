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

    $("div.react-pdf__Document, .page-controls-pdf").exists(function () {
      this.mouseenter(function() {
        $('.page-controls-pdf').css({opacity: 1})
      }).mouseleave(function() {
        $('.page-controls-pdf').css({opacity: 0})
      });
    })


  }

  $.fn.exists = function(callback) {
    var args = [].slice.call(arguments, 1);

    if (this.length) {
      callback.call(this, args);
    }

    return this;
  };
  $(document).ready(App.initialClient);
}