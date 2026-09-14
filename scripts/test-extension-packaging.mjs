import assert from 'node:assert/strict';
import {mkdtempSync, readFileSync, writeFileSync, mkdirSync, rmSync, existsSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';

const guide = readFileSync(new URL('../website/docs/operational-guides/build-an-extension.mdx', import.meta.url), 'utf8');
const example = guide.match(/```sh\n([\s\S]*?)\n```/)[1];
const tmp = mkdtempSync(join(tmpdir(), 'documented-extension-'));
try {
  const source = join(tmp, 'stable source');
  mkdirSync(join(source, 'dist'), {recursive: true});
  writeFileSync(join(source, 'make-tar.sh'), example);
  writeFileSync(join(source, 'icon.png'), 'fixture icon');
  writeFileSync(join(source, 'dist', 'server.py'), 'print("fixture")');
  function run(manifest, cwd, success = true) {
    writeFileSync(join(source, 'manifest.json'), JSON.stringify(manifest));
    const result = spawnSync('sh', [join(source, 'make-tar.sh')], {cwd, encoding: 'utf8'});
    if (!success) { assert.notEqual(result.status, 0); return; }
    assert.equal(result.status, 0, result.stderr);
    const root = `${manifest.nameIdentifier}-${manifest.version}`;
    const check = spawnSync('python3', ['-c', `
import sys, tarfile
from pathlib import Path
source, root = Path(sys.argv[1]), sys.argv[2]
with tarfile.open(source / 'artifacts' / (root + '.tar.bz2')) as tar:
    files = {m.name: m for m in tar.getmembers() if m.isfile()}
    expected = ['manifest.json', 'icon.png', 'dist/server.py']
    assert set(files) == {root + '/' + p for p in expected}
    assert all(m.name == root or m.name.startswith(root + '/') for m in tar.getmembers())
    for path in expected:
        assert tar.extractfile(files[root + '/' + path]).read() == (source / path).read_bytes()
`, source, root], {encoding: 'utf8'});
    assert.equal(check.status, 0, check.stderr);
  }
  run({nameIdentifier: 'my-extension', version: '1.0.0'}, tmp);
  run({nameIdentifier: 'another-extension', version: '2.3.4-beta.1'}, source);
  assert(existsSync(join(source, 'artifacts', 'my-extension-1.0.0.tar.bz2')));
  run({nameIdentifier: '../escape', version: '1.0.0'}, tmp, false);
  run({nameIdentifier: 'my-extension', version: null}, tmp, false);
  rmSync(join(source, 'dist'), {recursive: true});
  run({nameIdentifier: 'my-extension', version: '3.0.0'}, tmp, false);
  console.log('DOCUMENTED PACKAGE CONTRACT VERIFIED');
} finally {
  rmSync(tmp, {recursive: true, force: true});
}
