import React from 'react';
import LazyLoad from 'react-lazyload';

// Sample data for cat breeds in the specified order
const catBreeds = [
  {
    name: 'Abyssinian',
    image: 'abyssinian.jpg',
    description: 'Abyssinians are intelligent and playful cats with a short, ticked coat.',
    temperament: 'They are active, social, and love interactive play.',
  },
  {
    name: 'American Bobtail',
    image: 'american_bobtail.jpg',
    description: 'American Bobtails are medium-sized cats known for their short, bobbed tail.',
    temperament: 'They are friendly, intelligent, and have a playful nature.',
  },
  {
    name: 'Bengal',
    image: 'bengal.jpg',
    description: 'Bengals are sleek and muscular cats with distinctive spotted or marbled coat patterns.',
    temperament: 'They are active, alert, and have a strong hunting instinct.',
  },
  {
    name: 'British Shorthair',
    image: 'british_shorthair.jpg',
    description: 'British Shorthairs are sturdy and easygoing cats with a dense coat.',
    temperament: 'They are gentle, calm, and get along well with children and other pets.',
  },
  {
    name: 'Chartreux',
    image: 'chartreux.jpg',
    description: 'Chartreux cats are robust and medium-sized with distinctive blue-gray fur.',
    temperament: 'They are intelligent, quiet, and enjoy human companionship.',
  },
  {
    name: 'Cornish Rex',
    image: 'cornish_rex.jpg',
    description: 'Cornish Rex cats have soft, wavy coats and a slender, elegant appearance.',
    temperament: 'They are active, affectionate, and love to play.',
  },
  {
    name: 'Devon Rex',
    image: 'devon_rex.jpg',
    description: 'Devon Rex cats have curly coats and large ears, giving them an elf-like appearance.',
    temperament: 'They are mischievous, social, and enjoy being the center of attention.',
  },
  {
    name: 'Egyptian Mau',
    image: 'egyptian_mau.jpg',
    description: 'Egyptian Maus are medium-sized cats known for their spotted coat and striking green eyes.',
    temperament: 'They are loyal, energetic, and often bond closely with one person.',
  },
  {
    name: 'Himalayan',
    image: 'himalayan.jpg',
    description: 'Himalayans are a cross between Persians and Siamese, known for their luxurious coat.',
    temperament: 'They are gentle, sweet, and enjoy a peaceful environment.',
  },
  {
    name: 'Maine Coon',
    image: 'maine_coon.jpg',
    description: 'Maine Coons are large, long-haired cats with tufted ears and bushy tails.',
    temperament: 'They are friendly, sociable, and often referred to as "gentle giants."',
  },
  
  {
    name: 'Norwegian Forest Cat',
    image: 'norwegian_forest_cat.jpg',
    description: 'Norwegian Forest Cats are large, strong cats with a dense, water-repellent coat.',
    temperament: 'They are friendly, intelligent, and have excellent climbing abilities.',
  },
  {
    name: 'Oriental Shorthair',
    image: 'oriental_shorthair.jpg',
    description: 'Oriental Shorthairs are slender and elegant cats with large, expressive ears.',
    temperament: 'They are curious, vocal, and form strong bonds with their owners.',
  },
  {
    name: 'Persian',
    image: 'persian.jpg',
    description: 'Persians are known for their long, luxurious coats and flat, round faces.',
    temperament: 'They are gentle, calm, and prefer a peaceful and predictable environment.',
  },
  {
    name: 'Ragdoll',
    image: 'ragdoll.jpg',
    description: 'Ragdolls are large, affectionate cats known for their relaxed and floppy demeanor.',
    temperament: 'They are gentle, friendly, and often enjoy being carried like a "ragdoll."',
  },
  {
    name: 'Russian Blue',
    image: 'russian_blue.jpg',
    description: 'Russian Blue cats have a short, dense coat and striking green eyes.',
    temperament: 'They are reserved, shy with strangers, and form strong bonds with their family.',
  },
  {
    name: 'Scottish Fold',
    image: 'scottish_fold.jpg',
    description: 'Scottish Folds are known for their unique folded ears and round faces.',
    temperament: 'They are affectionate, easygoing, and adapt well to different environments.',
  },
  {
    name: 'Siamese',
    image: 'siamese.jpg',
    description: 'Siamese cats have striking blue almond-shaped eyes and short coats.',
    temperament: 'They are vocal, social, and form strong bonds with their human companions.',
  },
  {
    name: 'Sphynx',
    image: 'sphynx.jpg',
    description: 'Sphynx cats are hairless with a wrinkled skin and large ears.',
    temperament: 'They are affectionate, extroverted, and often seek warmth from their owners.',
  },
  {
    name: 'Tonkinese',
    image: 'tonkinese.jpg',
    description: 'Tonkinese cats are a cross between Siamese and Burmese breeds.',
    temperament: 'They are affectionate, playful, and enjoy interactive play with their humans.',
  },
  {
    name: 'Turkish Van',
    image: 'turkish_van.jpg',
    description: 'Turkish Van cats have a unique color pattern and enjoy swimming.',
    temperament: 'They are active, intelligent, and may have a fascination with water.',
  },
  {
    name: 'Siberian',
    image: 'siberian.jpg',
    description: 'Siberian cats have a dense, water-resistant triple coat and are known for their hypoallergenic properties.',
    temperament: 'They are affectionate, playful, and often get along well with other pets.',
  },
];

const Cats = () => {
  return (
    <div>
      <h1>Here is a list of cat breeds. Click on an image to see more information about the breed.</h1>
      <div className="cat-cards">
        {catBreeds.map((breed, index) => (
          <div key={index} className="cat-card">
            <h2>{breed.name}</h2>
            {/* Wrap the img tag with LazyLoad */}
            <LazyLoad height={200} offset={100}>
              <img src={breed.image} alt={breed.name} />
            </LazyLoad>
            <p>{breed.description}</p>
            <p>Temperament: {breed.temperament}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cats;