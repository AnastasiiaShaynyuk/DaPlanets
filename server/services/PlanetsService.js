import { dbContext } from "../db/DbContext.js"



class PlanetService {
  async createPlanet(planetData) {
    const planet = await dbContext.Planets.create(planetData)
    return planet
  }

}

export const planetsService = new PlanetService()