import { defineStore } from 'pinia'
import { IVessel } from 'src/domains/index'

export const useVesselsToLockingsStore = defineStore('vesselsToLockings', {
  state: (): { vesselsToLocking: IVessel[] } => ({
    vesselsToLocking: []
  }),
  actions: {
    addToLocking(vessels: IVessel[]) {
      this.vesselsToLocking = vessels
    },
    removeVessel(vessel: IVessel) {
      const searchIndex = this.vesselsToLocking.findIndex(readyVessel => readyVessel.name === vessel.name)
      if (searchIndex !== -1) {
        this.vesselsToLocking.splice(searchIndex, 1)
      }
    },
    resetVessel() {
      this.vesselsToLocking = []
    }
  }
})
