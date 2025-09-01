"use client";

import { useState } from "react";
import AceEditor from "react-ace";

// Import languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";

// Import themes
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-twilight";

export default function CodeEditor() {
  const [code, setCode] = useState<string>(
    `function helloWorld() {
  console.log("Hello, World! 🚀");
}`
  );

  return (
    <div className="w-full max-w-5xl mx-auto bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <h2 className="text-lg font-semibold">Code Editor</h2>
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-red-400 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-400 rounded-full"></span>
        </div>
      </div>

      {/* Editor */}
      <AceEditor
        mode="javascript"
        theme="github"
        name="code-editor"
        width="100%"
        height="400px"
        fontSize={14}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        value={code}
        onChange={(newValue) => setCode(newValue)}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        className="rounded-b-2xl"
      />
    </div>
  );
}
