import { strict as assert } from 'node:assert'
import { ALL_PASSAGES, BANKS, nextInUnit } from '../src/data/passages'
import { AREAS, UNITS, TEXT_TYPES } from '../src/lib/vce'
import { AREA_GUIDES, ANALYSIS_CHECKS } from '../src/data/course'
import { METALANGUAGE_ROWS, metalanguageForUnit } from '../src/data/study-design'
import { courseLabel } from '../src/lib/curriculum'
import { loadStudy, saveStudy } from '../src/lib/study'

assert.equal(UNITS.length,4)
assert.equal(AREAS.length,8)
assert.equal(METALANGUAGE_ROWS.length,35)
assert.equal(new Set(METALANGUAGE_ROWS.map(r=>r.subsystem)).size,6)
assert.equal(ANALYSIS_CHECKS.length,5)
const formation=METALANGUAGE_ROWS.find(r=>r.id==='metalanguage-13')!
assert.ok(metalanguageForUnit(formation,2).includes('Word loss'))
assert.ok(!metalanguageForUnit(formation,3).includes('Word loss'))
const switching=METALANGUAGE_ROWS.find(r=>r.id==='metalanguage-21')!
assert.ok(!metalanguageForUnit(switching,1).includes('group membership'))
assert.ok(metalanguageForUnit(switching,4).includes('group membership'))
for(const area of AREAS) {
  assert.ok(AREA_GUIDES[area.id], `Missing guide ${area.id}`)
  assert.equal(AREA_GUIDES[area.id].focus.length,5)
  assert.ok(ALL_PASSAGES.some(p=>p.areaOfStudy===area.id), `No practice for ${area.id}`)
}
for(const p of ALL_PASSAGES) {
  const area=AREAS.find(a=>a.id===p.areaOfStudy)
  assert.ok(area,`Unmapped passage ${p.id}`)
  assert.equal(p.unit,area.unit,`Wrong unit for ${p.id}`)
  assert.ok(TEXT_TYPES.some(t=>t.id===p.textType),`Missing text type ${p.id}`)
  assert.ok(courseLabel(p).includes(area.title))
  const next=ALL_PASSAGES.find(item=>item.id===nextInUnit(p.id))!
  assert.equal(next.unit,p.unit,`${p.id}: next leaves unit`)
  assert.equal(nextInUnit(next.id,-1),p.id)
}
assert.ok(BANKS.some(b=>b.id==='u1-acquisition'))
assert.ok(METALANGUAGE_ROWS.find(r=>r.description.startsWith('Hypocoristic'))?.units.includes(4))
assert.deepEqual(METALANGUAGE_ROWS.find(r=>r.description.startsWith('Morphological over'))?.units,[1])
assert.deepEqual(METALANGUAGE_ROWS.find(r=>r.description.startsWith('Politeness'))?.units,[3,4])
const values=new Map<string,string>()
Object.defineProperty(globalThis,'localStorage',{configurable:true,value:{getItem:(key:string)=>values.get(key)??null,setItem:(key:string,value:string)=>values.set(key,value)}})
assert.equal(loadStudy().unit,3)
const state={unit:4 as const,evidence:[],reviewed:['u4-identity:0'],drafts:{'vce-identity:short':'A supported reading.'},checked:{'vce-identity:short':['evidence']}}
saveStudy(state)
assert.deepEqual(loadStudy(),state)
values.set('metalang.study.v1','invalid json')
assert.equal(loadStudy().unit,3)
values.set('metalang.study.v1',JSON.stringify({unit:99,drafts:{bad:12},reviewed:[null,'ok']}))
assert.deepEqual(loadStudy().drafts,{})
assert.deepEqual(loadStudy().reviewed,['ok'])
console.log(`Curriculum checks passed: 4 units, 8 areas, 35 source rows and ${ALL_PASSAGES.length} aligned texts.`)
