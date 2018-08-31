class CrewMember {
  constructor(position, currentShip="Looking for a Rig", specialAbility=null) {
    this.position = position
    this.currentShip = currentShip
    this.specialAbility = specialAbility
    // this.currentShip.crew.push(this)
  }
  
    engageWarpDrive(){
      if (this.position === "Pilot" && this.currentShip !== "Looking for a Rig") {
        console.log("Bam")
      } else {
        return "had no effect"
      }
    }
    
    setsInvisibility(){
      if (this.position === "Defender" && this.currentShip !== "Looking for a Rig") {
        console.log("Woosh")
        this.currentShip.cloaked = true
    } else {
      return "had no effect"
    }
  }
    
    chargePhasers(){
      if (this.position === "Gunner" && this.currentShip !== "Looking for a Rig") {
        console.log("Zing")
    } else {
      return "had no effect"
    }
  }  
}
