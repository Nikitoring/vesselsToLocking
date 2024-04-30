import { defineStore } from 'pinia'
import { useVesselsToLockingStore } from 'src/stores/vesselsPrepareToLocking'

export const useVesselsLocking = defineStore('vesselsLocking', {
  state: (): { vessels: { [key: string]: any[] }; timer: string | null; date: string | null } => ({
    vessels: {},
    timer: null,
    date: null
  }),
  actions: {
    startLocking(lockName: string | undefined) {
      if (!lockName) return
      const currentVessels = useVesselsToLockingStore().vesselsToLocking[lockName]
      if (currentVessels && currentVessels.length) {
        this.vessels[lockName] = currentVessels
        const now = new Date()
        const h = now.getHours()
        const m = now.getMinutes()
        const s = now.getSeconds()
        this.vessels[lockName] = this.vessels[lockName].map(vessel => ({
          ...vessel,
          start: `${h}:${m}:${s}`,
          time: this.timer
        }))
        this.date = now.toLocaleDateString()
      }
    },
    stopLocking(lockName: string | undefined) {
      if (!lockName) return
      this.vessels[lockName] = []
    }
  }
})
