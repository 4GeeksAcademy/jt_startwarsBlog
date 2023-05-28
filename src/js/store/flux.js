const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
			character: [],
			planet: [],
			vehicle: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
		
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(response => response.json())
				.then((response)=> {
					console.log(response)
					setStore({characters: response.results})
				})
			},

			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(response => response.json())
				.then((response)=> {
					console.log(response)
					setStore({planets: response.results})
				})
			},

			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(response => response.json())
				.then((response)=> {
					console.log(response)
					setStore({vehicles: response.results})
				})
			},


			getCharacter: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
				.then(response => response.json())
				.then((response)=> {
					console.log(response.result.properties);
					setStore({character: response.result.properties });
				});
			},

			getPlanet: (uid) => {
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
				.then(response => response.json())
				.then((response)=> {
					console.log(response.result.properties);
					setStore({ planet: response.result.properties });
				});
			},

			getVehicle: (uid) => {
				fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
				.then(response => response.json())
				.then((response)=> {
					console.log(response.result.properties);
					setStore({ vehicle: response.result.properties });
				});
			},
		
			
			/*
			setFavorite: (character) => {
				const store = getStore()
				console.log([...store.favorite, character])
				setStore({ favorite: [...store.favorite, character]})
			},

			*/
				//reset the global store
			
			}
		}
	};


export default getState;
