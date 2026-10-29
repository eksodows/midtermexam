import { useState } from 'react'

const FULL_NAME = 'JOHN EXODUS HERNANDEZ'
const SECTION = 'BSIT-WMD3A'
const SUBJECT_CODE = 'C-PCIT9'

const TITLE = '10 Things That Require Zero Talent'

const PHRASES = {
  1: 'Being On Time',
  2: 'Making An Effort',
  3: 'Being High Energy',
  4: 'Having A Positive Attitude',
  5: 'Being Passionate',
  6: 'Using Good Body Language',
  7: 'Being Coachable',
  8: 'Doing A Little Extra',
  9: 'Being Prepared',
  0: 'Having A Strong Work Ethic',
}

const KEYS = [
  { id: '1' }, { id: '2' }, { id: '3' },
  { id: '4' }, { id: '5' }, { id: '6' },
  { id: '7' }, { id: '8' }, { id: '9' },
  { id: 'NAME', kind: 'info' }, { id: '0' }, { id: 'SUBJ', kind: 'info' },
]

export default function App() {
  const [display, setDisplay] = useState(TITLE)

  const press = (id) => {
    if (id === 'NAME') return setDisplay(FULL_NAME.toUpperCase())
    if (id === 'SUBJ') return setDisplay(SUBJECT_CODE.toUpperCase())
    setDisplay(PHRASES[id])
  }

  const isTitle = display === TITLE

  return (
    <main className="page">
      <header className="owner">
        {FULL_NAME.toUpperCase()} - {SECTION.toUpperCase()}
      </header>

      <section className="calc" aria-label="Zero Talent calculator">
        <div className="screen" role="status" aria-live="polite">
          <p className={`screen-text ${isTitle ? 'is-title' : ''} ${display.length > 20 ? 'is-long' : ''}`}>
            {display}
          </p>
        </div>

        <div className="pad">
          {KEYS.map((k) => (
            <button
              key={k.id}
              type="button"
              className={`key ${k.kind === 'info' ? 'key-info' : ''}`}
              onClick={() => press(k.id)}
            >
              {k.id}
            </button>
          ))}
        </div>

        <button type="button" className="reset" onClick={() => setDisplay(TITLE)}>
          Clear
        </button>
      </section>
    </main>
  )
}
