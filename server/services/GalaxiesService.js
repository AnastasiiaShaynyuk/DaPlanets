import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"


class GalaxiesService {

  async getGalaxies(query) {
    const galaxies = await dbContext.Galaxies.find(query)
    return (galaxies)
  }

    async getGalaxyById(galaxyId) {
      const galaxy =await dbContext.Galaxies.findById(galaxyId)
      if (!galaxy) {
        throw new BadRequest('Invalid galaxy id')
      }
      return galaxy
    }

  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxies.create(galaxyData)
    return galaxy
    }

}

export const galaxiesService = new GalaxiesService()