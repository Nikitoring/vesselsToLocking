import { defineStore } from 'pinia'
import { IVessel } from 'src/domains/index'

export const useVesselsToLockingStore = defineStore('vesselsToLockings', {
  state: (): { vesselsToLocking: { [key: string]: IVessel[] } } => ({
    vesselsToLocking: {}
  }),
  actions: {
    addToLocking(vessels: IVessel[], lockName: string | undefined) {
      if (!lockName) return
      this.vesselsToLocking[lockName] = vessels
    },
    removeVessel(vessel: IVessel, lockName: string | undefined) {
      if (!lockName) return
      const searchIndex = this.vesselsToLocking[lockName].findIndex(readyVessel => readyVessel.name === vessel.name)
      if (searchIndex !== -1) {
        this.vesselsToLocking[lockName].splice(searchIndex, 1)
      }
    },
    resetVessel(lockName: string | undefined) {
      if (!lockName) return
      this.vesselsToLocking[lockName] = []
    }
  }
})
