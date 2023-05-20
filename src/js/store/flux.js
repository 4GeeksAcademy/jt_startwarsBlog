const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: [],
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
