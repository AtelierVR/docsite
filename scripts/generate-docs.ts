import { generateFiles } from 'fumadocs-openapi';
import { openapi, options } from '@/lib/openapi';
import { existsSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';
import * as YAML from 'yaml';

// ---------------------------------------------------------------------------
// Per-tag metadata used when rendering the API groups Cards section.
// Add an entry here whenever a new tag is added to the OpenAPI spec.
// ---------------------------------------------------------------------------
const TAG_META: Record<string, { icon: string; description: string }> = {
    'Auth':           { icon: 'lock-closed',      description: 'Register, log in, and log out. Obtain Bearer tokens.' },
    'Users':          { icon: 'user-circle',       description: 'User profiles, search, follow/unfollow, thumbnail and banner management.' },
    'Avatars':        { icon: 'face-smile',        description: 'Create and manage avatars including asset uploads.' },
    'Worlds':         { icon: 'globe-alt',         description: 'Create and manage virtual worlds including asset uploads.' },
    'Instances':      { icon: 'server-stack',      description: 'Spin up, update, and remove running world instances.' },
    'Activity':       { icon: 'bolt',              description: 'Fetch and manage the activity event log.' },
    'Tables':         { icon: 'table-cells',       description: 'Per-user key/value store for client-side persistent data.' },
    'Storage':        { icon: 'arrow-up-tray',     description: 'Serve stored binary files by asset ID.' },
    'Relay':          { icon: 'signal',            description: 'Admin: relay server management, logs, and commands.' },
    'Server':         { icon: 'cog-6-tooth',       description: 'Admin: server configuration and log access.' },
    'Fediverse':      { icon: 'at-symbol',         description: 'WebFinger, NodeInfo, and host-meta endpoints for federation.' },
    'Relations (S2S)':{ icon: 'arrows-right-left', description: 'Server-to-server federation endpoints.' },
};

function kebabCase(value: string): string {
    return value
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

function cleanMdxFiles(dir: string) {
    if (!existsSync(dir)) return;

    const items = readdirSync(dir);

    for (const item of items) {
        const itemPath = join(dir, item);
        const stat = statSync(itemPath);

        if (stat.isDirectory()) {
            cleanMdxFiles(itemPath);
            // Remove directory if now empty
            if (readdirSync(itemPath).length === 0)
                rmSync(itemPath, { recursive: true, force: true });
        } else if (item.endsWith('.mdx')) {
            rmSync(itemPath, { force: true });
        }
    }
}

function checkInputs(inputs: string[]) {
    if (inputs.length === 0)
        throw new Error('No input files provided.');

    for (const input of inputs)
        if (!existsSync(input))
            throw new Error(`Input file does not exist: ${input}`);
        else console.log(`Found input file: ${input}`);
}

console.log(cwd(), readdirSync(cwd()));
checkInputs(options.input);
cleanMdxFiles(options.output);

// ---------------------------------------------------------------------------
// Process index.template.mdx → index.mdx
// Replaces {/* openapi:tags-cards */} with Cards generated from OpenAPI tags.
// ---------------------------------------------------------------------------
function collectTags(yamlPaths: string[]): string[] {
    const tags = new Set<string>();
    for (const yamlPath of yamlPaths) {
        const doc = YAML.parse(readFileSync(yamlPath, 'utf8'));
        for (const pathItem of Object.values(doc?.paths ?? {})) {
            for (const op of Object.values(pathItem as Record<string, unknown>)) {
                if (op && typeof op === 'object' && 'tags' in op) {
                    for (const t of (op as { tags: string[] }).tags ?? []) tags.add(t);
                }
            }
        }
    }
    return [...tags].sort();
}

function renderTagsCards(tags: string[]): string {
    const cards = tags.map((tag) => {
        const meta = TAG_META[tag] ?? { icon: 'squares-2x2', description: `${tag} endpoints.` };
        const slug = kebabCase(tag);
        return [
            `  <Card`,
            `    icon={getIcon("${meta.icon}")}`,
            `    href="/api/${slug}"`,
            `    title="${tag}"`,
            `    description="${meta.description}"`,
            `  />`,
        ].join('\n');
    });
    return `<Cards>\n${cards.join('\n')}\n</Cards>`;
}

const templatePath = join(cwd(), 'content/api/index.template.mdx');
const indexPath    = join(cwd(), 'content/api/index.mdx');

if (existsSync(templatePath)) {
    const yamlFiles = options.input.map((f) => join(cwd(), f.replace(/^\.\//, '')));
    const tags = collectTags(yamlFiles);
    const cards = renderTagsCards(tags);
    const template = readFileSync(templatePath, 'utf8');
    const rendered = template.replace('{/* openapi:tags-cards */}', cards);
    writeFileSync(indexPath, rendered, 'utf8');
    console.log(`Generated index.mdx with ${tags.length} tag cards: ${tags.join(', ')}`);
} else {
    console.warn('index.template.mdx not found — skipping index.mdx generation.');
}

void generateFiles({
    input: openapi,
    output: options.output,
    includeDescription: true,
    name(output: any, document: any) {
        const operation = document.paths[output.item.path][output.item.method];
        const operationId: string = operation.operationId || '';
        // Strip "XxxController_" prefix — keep only the method name part
        const methodPart = operationId.includes('_')
            ? operationId.split('_').slice(1).join('_')
            : operationId;
        const slug = kebabCase(methodPart || output.item.path.replace(/[^a-zA-Z0-9]/g, '-'));
        const tag = kebabCase(operation.tags[0] || 'miscellaneous');
        return `${tag}/${slug}`;
    },
});
