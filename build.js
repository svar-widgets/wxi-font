var glob = require("glob");
var fs = require("fs");

glob("./icons/**/*.svg", {}, function(er, files){
    const data = fs.readFileSync("./dist/index.html", "utf-8");
    const start = data.indexOf("-->")+3;
    const end = data.indexOf("<!--", start);

    files = files.map(a => {
        const name = a.replace("./icons/","").replace(/\//g, "-").replace(".svg", "");
        return `\n<div><i class="wxi-${name}"></i><span>${name}</span></div>`;
    });
    fs.writeFileSync("./dist/index.html", data.substr(0, start)+files.join("\n")+data.substr(end))
});

const css = fs.readFileSync("./dist/wx-icons.css", "utf-8").replace("line-height: 1;", "");
custom = `

.wxi-spin {
    -webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite
}
`;
fs.writeFileSync("./dist/wx-icons.css", css+custom);