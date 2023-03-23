import mongoose from 'mongoose'
const Schema = mongoose.Schema

const biomes = { type: String, enum: ['forest', 'aquatic', 'grassland', 'desert', 'tundra'] }

export const PlanetSchema =new Schema({
  name: { type: String, required: true, maxLength: 30 },
  biome: { type: [biomes] },
  atmosphere: { type: Boolean, required: true, default: false},
  galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy'}
}, 
{ timestamps: true, toJSON: {virtuals: true } })