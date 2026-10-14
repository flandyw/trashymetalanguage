import { analyse } from '../src/lib/tagger'
import { feature } from '../src/lib/taxonomy'

const text = "The crowd's on its feet as Daicos gathers the sherrin on the wing. He's absolutely roosting it from outside fifty, and it sails through. Gee, the Pies are on fire tonight — the Blues can't buy a touch."
const a = analyse(text)
for (const [i, tags] of a.tags) {
  const t = a.tok.tokens[i]
  console.log(t.text.padEnd(12), tags.map((x) => `${x.feature}(${x.confidence[0]})`).join(' '))
}
console.log('\n--- groups ---')
for (const g of a.groups) {
  console.log(g.feature.padEnd(24), g.confidence.padEnd(7), g.tokens.map((t) => a.tok.tokens[t].text).join(' '))
}
console.log('\n--- unknown feature ids? ---')
const known = new Set<string>()
for (const t of a.tags.values()) for (const x of t) known.add(x.feature)
for (const g of a.groups) known.add(g.feature)
for (const f of known) if (!feature(f)) console.log('MISSING FROM TAXONOMY:', f)
console.log('features found:', [...known].sort().join(', '))
