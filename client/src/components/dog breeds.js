import React from 'react';
import LazyLoad from 'react-lazyload';

// Sample data for dog breeds in the specified order
const dogBreeds = [
  {
    name: 'Affenpinscher',
    image: '',
    description: 'Affenpinschers are small and playful dogs with a distinct monkey-like face.',
    temperament: 'They are curious, adventurous, and fearless.',
  },
  {
    name: 'Afghan Hound',
//    image: '',
    description: 'Afghan Hounds are elegant and dignified dogs with a long, silky coat.',
    temperament: 'They are independent, aloof, and aristocratic.',
  },
  {
    name: 'Airedale Terrier',
 //   image: '',
    description: 'Airedale Terriers are the largest of all terrier breeds and are versatile and intelligent.',
    temperament: 'They are confident, courageous, and friendly.',
  },
  {
    name: 'Alaskan Malamute',
 //   image: '',
    description: 'Alaskan Malamutes are large and powerful sled dogs with a thick coat.',
    temperament: 'They are friendly, affectionate, and have a strong pack instinct.',
  },
  {
    name: 'American Bully',
 //   image: '',
    description: 'American Bullies are muscular and powerful dogs with a confident stance.',
    temperament: 'They are loyal, outgoing, and have a strong desire to please their owners.',
  },
  {
    name: 'American Eskimo Dog',
 //   image: '',
    description: 'American Eskimo Dogs are small to medium-sized companion dogs with a dense white coat.',
    temperament: 'They are playful, alert, and highly trainable.',
  },
  {
    name: 'American Pit Bull Terrier',
 //   image: '',
    description: 'American Pit Bull Terriers are strong and athletic dogs with a bad reputation.',
    temperament: 'They are loyal, intelligent, and can be wonderful family pets with responsible ownership.',
  },
  {
    name: 'Anatolian Shepherd Dog',
//    image: '',
    description: 'Anatolian Shepherd Dogs are large and powerful livestock guardian dogs.',
    temperament: 'They are calm, protective, and devoted to their family and flock.',
  },
  {
    name: 'Australian Shepherd',
 //   image: '',
    description: 'Australian Shepherds are intelligent and energetic dogs with a beautiful coat.',
    temperament: 'They are loyal, work-oriented, and excel in herding activities.',
  },
  {
    name: 'Basenji',
 //   image: '',
    description: 'Basenjis are small and elegant dogs with a unique yodel-like bark.',
    temperament: 'They are independent, smart, and have a cat-like grooming habit.',
  },
  {
    name: 'Basset Hound',
//    image: '',
    description: 'Basset Hounds are short-legged hounds known for their keen sense of smell.',
    temperament: 'They are mild-mannered, friendly, and great with children.',
  },
  {
    name: 'Bedlington Terrier',
//    image: '',
    description: 'Bedlington Terriers are small dogs with a distinctive lamb-like appearance.',
    temperament: 'They are playful, affectionate, and make loving companions.',
  },
  {
    name: 'Belgian Shepherd',
//    image: 'belgian_shepherd.jpg',
    description: 'Belgian Shepherds are highly intelligent and versatile herding dogs.',
    temperament: 'They are loyal, protective, and excel in obedience training.',
  },
  {
    name: 'Bichon Frise',
 //   image: '',
    description: 'Bichon Frises are small, fluffy dogs with a cheerful and playful disposition.',
    temperament: 'They are gentle, affectionate, and make great family pets.',
  },
  {
    name: 'Black Russian Terrier',
 //   image: '',
    description: 'Black Russian Terriers are large and robust dogs bred for military work.',
    temperament: 'They are confident, brave, and have a strong protective instinct.',
  },
  {
    name: 'Border Collie',
 //   image: '',
    description: 'Border Collies are highly intelligent and energetic dogs known for their herding abilities.',
    temperament: 'They are responsive, alert, and excel in obedience training.',
  },
  {
    name: 'Borzoi',
 //   image: '',
    description: 'Borzois, also known as Russian Wolfhounds, are large and elegant dogs bred for hunting.',
    temperament: 'They are gentle, independent, and have a quiet nature.',
  },
  {
    name: 'Boston Terrier',
 //   image: '',
    description: 'Boston Terriers are small and lively dogs with a tuxedo-like coat pattern.',
    temperament: 'They are friendly, intelligent, and have a gentle disposition.',
  },
  {
    name: 'Brittany',
 //   image: '',
    description: 'Brittanys are medium-sized dogs known for their athleticism and versatility.',
    temperament: 'They are active, agile, and make great hunting companions.',
  },
  {
    name: 'Bulldog',
 //   image: '',
    description: 'Bulldogs are medium-sized dogs known for their loose, wrinkled face and distinctive pushed-in nose.',
    temperament: 'They are docile, willful, and make excellent companions.',
  },
  {
    name: 'Bullmastiff',
 //   image: '',
    description: 'Bullmastiffs are large and powerful dogs bred for guarding.',
    temperament: 'They are docile, affectionate, and make excellent protectors.',
  },
];

const Dogs = () => {
  return (
    <div>
      <h1>Here is a list of dog breeds. Click on an image to see more information about the breed.</h1>
      <div className="dog-cards">
        {dogBreeds.map((breed, index) => (
          <div key={index} className="dog-card">
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
}

export default Dogs;
