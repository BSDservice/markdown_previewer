import {ButtonGroup, Button, AppBar, InputLabel, Select, MenuItem, Grid} from '@material-ui/core';

const langChoice = ['abap', 'abnf', 'actionscript', 'ada', 'agda', 'al', 'antlr4', 'apacheconf', 'apl', 'applescript', 'aql', 'arduino', 'arff', 'asciidoc', 'asm6502', 'aspnet', 'autohotkey', 'autoit', 'bash', 'basic', 'batch', 'bbcode', 'birb', 'bison', 'bnf', 'brainfuck', 'brightscript', 'bro', 'bsl', 'c', 'cil', 'clike', 'clojure', 'cmake', 'coffeescript', 'concurnas', 'cpp', 'crystal', 'csharp', 'csp', 'cssExtras (css-extras)', 'css', 'cypher', 'd', 'dart', 'dax', 'dhall', 'diff', 'django', 'dnsZoneFile (dns-zone-file)', 'docker', 'ebnf', 'editorconfig', 'eiffel', 'ejs', 'elixir', 'elm', 'erb', 'erlang', 'etlua', 'excelFormula (excel-formula)', 'factor', 'firestoreSecurityRules (firestore-security-rules)', 'flow', 'fortran', 'fsharp', 'ftl', 'gcode', 'gdscript', 'gedcom', 'gherkin', 'git', 'glsl', 'gml', 'go', 'graphql', 'groovy', 'haml', 'handlebars', 'haskell', 'haxe', 'hcl', 'hlsl', 'hpkp', 'hsts', 'http', 'ichigojam', 'icon', 'iecst', 'ignore', 'inform7', 'ini', 'io', 'j', 'java', 'javadoc', 'javadoclike', 'javascript', 'javastacktrace', 'jolie', 'jq', 'jsExtras (js-extras)', 'jsTemplates (js-templates)', 'jsdoc', 'json', 'json5', 'jsonp', 'jsstacktrace', 'jsx', 'julia', 'keyman', 'kotlin', 'latex', 'latte', 'less', 'lilypond', 'liquid', 'lisp', 'livescript', 'llvm', 'lolcode', 'lua', 'makefile', 'markdown', 'markupTemplating (markup-templating)', 'markup', 'matlab', 'mel', 'mizar', 'mongodb', 'monkey', 'moonscript', 'n1ql', 'n4js', 'nand2tetrisHdl (nand2tetris-hdl)', 'naniscript', 'nasm', 'neon', 'nginx', 'nim', 'nix', 'nsis', 'objectivec', 'ocaml', 'opencl', 'oz', 'parigp', 'parser', 'pascal', 'pascaligo', 'pcaxis', 'peoplecode', 'perl', 'phpExtras (php-extras)', 'php', 'phpdoc', 'plsql', 'powerquery', 'powershell', 'processing', 'prolog', 'properties', 'protobuf', 'pug', 'puppet', 'pure', 'purebasic', 'purescript', 'python', 'q', 'qml', 'qore', 'r', 'racket', 'reason', 'regex', 'renpy', 'rest', 'rip', 'roboconf', 'robotframework', 'ruby', 'rust', 'sas', 'sass', 'scala', 'scheme', 'scss', 'shellSession (shell-session)', 'smali', 'smalltalk', 'smarty', 'sml', 'solidity', 'solutionFile (solution-file)', 'soy', 'sparql', 'splunkSpl (splunk-spl)', 'sqf', 'sql', 'stan', 'stylus', 'swift', 't4Cs (t4-cs)', 't4Templating (t4-templating)', 't4Vb (t4-vb)', 'tap', 'tcl', 'textile', 'toml', 'tsx', 'tt2', 'turtle', 'twig', 'typescript', 'typoscript', 'unrealscript', 'vala', 'vbnet', 'velocity', 'verilog', 'vhdl', 'vim', 'visualBasic (visual-basic)', 'warpscript', 'wasm', 'wiki', 'xeora', 'xmlDoc (xml-doc)', 'xojo', 'xquery', 'yaml', 'yang', 'zig']

export default function AppNav(props){
    return (
    <AppBar position="absolute" color='transparent'>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spaicing={10}>
            <Grid item>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button>Editor</Button>
                    <Button>Viewer</Button>
                </ButtonGroup>
            </Grid>
            <Grid item style={{padding:'0.5rem'}}>
                    <InputLabel id="demo-simple-select-autowidth-label">Programming languge</InputLabel>
                    <Select 
                    style={{width:'100%'}}
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    /*value={age}*/
                    onChange={props.handleChange}
                    autoWidth
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {langChoice.map((lang) => (
                        <MenuItem value={lang} id={langChoice.findIndex(lang)}>{lang}</MenuItem>
                    ))}
                    </Select>
            </Grid>
        </Grid>
        
  </AppBar>
)
}