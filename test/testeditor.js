
import ace from '../lib/ace/ace'

var editor = ace.edit(null, {
    maxLines: 50,
    minLines: 10,
    value: "var hello = 'world'" + "\n",
    mode: "ace/mode/javascript",
    bug: 1
})


document.body.appendChild(editor.container)