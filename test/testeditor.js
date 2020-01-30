
import ace from '../lib/ace/ace'


import webpackresolver from '../lib/ace/builtplugins/webpack-resolver'

webpackresolver(ace);

import {Mode} from '../lib/ace/mode/javascript.js'
import Theme from '../lib/ace/theme/textmate.js'


var editor = ace.edit(null, {
    maxLines: 50,
    minLines: 10,
    value: "var hello = 'world'" + "\n",
    theme:Theme,
    mode: new Mode(),
    bug: 1
})


document.body.appendChild(editor.container)