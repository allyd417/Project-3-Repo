import { gql } from '@apollo/client';

export const QUERY_PETS = gql`
query getAllPets {
    getAllPets {
      _id
      description
      image
      name
      species
      age
    }
  }`