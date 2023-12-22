import ivm from "isolated-vm";

export class CodeProcessor {

    public constructor() {
        const code = `(function() { return "Hello, Isolate!"; })()`;

        const isolate = new ivm.Isolate({ memoryLimit: 8 });

        const script = isolate.compileScriptSync(code);

        const context = isolate.createContextSync();

        console.log(script.runSync(context));
    }


}