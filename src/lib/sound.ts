/**
 * Tiny Web Audio blips. No assets, no library, no autoplay problems because
 * every sound is triggered by a click.
 */

let ctx: AudioContext | null = null
let enabled = true

export function setSoundEnabled(on: boolean): void {
  enabled = on
}

export function soundEnabled(): boolean {
  return enabled
}

function context(): AudioContext | null {
  if (!enabled) return null
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return null
    ctx = new Ctor()
  }
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

function blip(freq: number, duration: number, delay: number, gain: number, type: OscillatorType) {
  const audio = context()
  if (!audio) return
  const start = audio.currentTime + delay
  const osc = audio.createOscillator()
  const vol = audio.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, start)
  vol.gain.setValueAtTime(0.0001, start)
  vol.gain.exponentialRampToValueAtTime(gain, start + 0.012)
  vol.gain.exponentialRampToValueAtTime(0.0001, start + duration)
  osc.connect(vol)
  vol.connect(audio.destination)
  osc.start(start)
  osc.stop(start + duration + 0.02)
}

/** Rising two-note chime; pitch climbs with the combo. */
export function playHit(combo: number): void {
  const lift = Math.min(combo, 10) * 22
  blip(520 + lift, 0.09, 0, 0.05, 'triangle')
  blip(780 + lift, 0.13, 0.07, 0.04, 'triangle')
}

export function playMiss(): void {
  blip(190, 0.16, 0, 0.045, 'sawtooth')
  blip(140, 0.2, 0.06, 0.035, 'sawtooth')
}

export function playBadge(): void {
  blip(660, 0.12, 0, 0.05, 'sine')
  blip(880, 0.12, 0.1, 0.05, 'sine')
  blip(1180, 0.22, 0.2, 0.05, 'sine')
}

export function playClick(): void {
  blip(420, 0.05, 0, 0.02, 'square')
}
