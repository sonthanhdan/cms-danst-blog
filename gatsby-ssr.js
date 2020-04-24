const React = require("react")

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <script 
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" 
      integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" 
      crossorigin="anonymous">
    </script>
  ])
}