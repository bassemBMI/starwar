export interface StarshipType {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: string[];
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: PilotType[] | string[];
  starship_class: string;
  url: string;
  image?: string;
}

export const emptyStarship: StarshipType = {
  MGLT: '',
  cargo_capacity: '',
  consumables: '',
  cost_in_credits: '',
  created: '',
  crew: '',
  edited: '',
  films: [],
  hyperdrive_rating: '',
  length: '',
  manufacturer: '',
  max_atmosphering_speed: '',
  model: '',
  name: '',
  passengers: '',
  pilots: [],
  starship_class: '',
  url: '',
}

export interface PilotType {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string;
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface DataType {
  count: number;
  next: string;
  pervious: string;
  results: StarshipType[];
  pilots: PilotType[];
}

export const loadStarshipList = async () => {
  const starshipData  = await fetch('https://swapi.dev/api/starships');
  const response: DataType = await starshipData.json();
  const results = response.results;
  const pilotList: PilotType[] = [];

  const resultsWithPilots = await Promise.all(
    results.map(async (starship) => {
      const fetchPhoto = await fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&query=starwars ${starship.name}&per_page=1`);
      const photo = await fetchPhoto.json();
      const image = photo.results.length ? photo.results[0].urls?.regular : null;

      const pilots = await getPilotList(starship.pilots as string[]);
      if (pilots.length) {
        pilotList.push(...pilots);
      }
      return {...starship, pilots, image};
    })
  )
  return { ...response, results: resultsWithPilots, pilots: pilotList }
}

const getPilotList = async (pilots: string[]) => {
  let pDetails: PilotType[] = [];
  await Promise.all(
    pilots.map(async (p: string) => {
      const pilot = await fetchPilotDetails(p as string);
      pDetails.push(pilot);
      Promise.resolve();
    })
  );
  return pDetails;
}
const fetchPilotDetails = async (p: string) => {
  const data = await fetch(p);
  const res = await data.json();
  return res as PilotType;
}