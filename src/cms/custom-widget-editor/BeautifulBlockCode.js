import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import supportedLanguages from 'react-syntax-highlighter/dist/esm/languages/hljs/supported-languages';
import { renderToString } from 'react-dom/server'

const renderBlockCode = (block) => {
    const { code_string, language } = block;
    const codeString = code_string != undefined ? code_string : '';
    const _language = language.length > 0 ? language[0] : 'javascript'


    return renderToString(
        <SyntaxHighlighter
            language={_language}
            style={monokaiSublime}
        >
            {codeString}
        </SyntaxHighlighter>
    )
}

const BeautifulBlockCode = {
    id: "beautiful_block_code",  // Internal id of the component
    label: "Beautiful Block Code", // Visible label
    fields: [ // Fields the user need to fill out when adding an instance of the component
        {
            name: 'id',
            label: 'Block ID',
            widget: 'hidden'
        },
        {
            name: 'language',
            label: 'Programing Language',
            widget: 'select',
            options: supportedLanguages,
            default: 'javascript'
        },
        {
            name: 'code_string',
            label: 'Code String',
            widget: 'text'
        }
    ],
    pattern: /beautiful_block_code (\S+)\s/, // Pattern to identify a block as being an instance of this component
    fromBlock: function (match) { // Function to extract data elements from the regexp match
        return {
            id: match[0]
        };
    },
    toBlock: function (block) { // Function to create a text block from an instance of this component
        return renderBlockCode(block)

    },
    toPreview: function (block) {  // Preview output for this component. Can either be a string or a React component (component gives better render performance)
        return renderBlockCode(block)
    }
}


export default BeautifulBlockCode;