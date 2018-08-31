class Spaceship {
  constructor(name, crewArray=[], phasers, shields) {
    this.name = name
    this.crew = crewArray
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.docked = this.crew.length < 1
    // for each crew member, set currentShip = this
    this.updateCrewMembers(crewArray)
  }
  
  updateCrewMembers(crewArray) {
    for (let crewMember of crewArray) {
      crewMember.currentShip = this
    }
  }
  
  // onboard(crewMember) {
  //   this.crew.push(crewMember)
  //   crewMember.currentShip = this
  // }  
}
