import { generateFiles } from 'fumadocs-openapi';
import { openapi, options } from '@/lib/openapi';
import { existsSync, readdirSync, rmSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';

function kebabCase(value: string): string {
    return value
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .toLowerCase();
}

function cleanMdxFiles(dir: string) {
    if (!existsSync(dir)) return;

    const items = readdirSync(dir);

    for (const item of items) {
        const itemPath = join(dir, item);
        const stat = statSync(itemPath);

        if (!stat.isDirectory()) {
            cleanMdxFiles(itemPath)
        } else if (item.endsWith('.mdx'))
            rmSync(itemPath, { force: true });
    }
}

function checkInputs(inputs: string[]) {
    if (inputs.length === 0)
        throw new Error("No input files provided.");

    for (const input of inputs)
        if (!existsSync(input))
            throw new Error(`Input file does not exist: ${input}`);
        else console.log(`Found input file: ${input}`);
}

console.log(cwd(), readdirSync(cwd()));
checkInputs(options.input);
cleanMdxFiles(options.output);

void generateFiles({
    input: openapi,
    output: options.output,
    includeDescription: true,
    name(output: any, document: any) {
        const operation = document.paths[output.item.path][output.item.method];
        return `(${operation.tags[0] || "miscellaneous"})/${kebabCase(operation.operationId || output.item.path.replace(/[^a-zA-Z0-9]/g, '-'))}`;
    },
});