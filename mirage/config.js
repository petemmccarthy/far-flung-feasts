export default function() {
  this.namespace = '/api';

  let countries = [{
      type: 'countries',
      id: 'India',
        attributes: {
          name: 'India',
          capital: 'New Delhi',
          food: 'Biryani, Dosa & Pakora!',
          dish: 'Spaghetti Bolognese',
          ingredients: ['olive oil', 'pasta', 'tomatoes'],
          recipe: 'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
        }
      }, {
      type: 'countries',
      id: 'Italy',
        attributes: {
          name: 'Italy',
          capital: 'Rome',
          food: 'Pizza, Pasta & Spicy Meatballs!',
          dish: 'Spaghetti Bolognese',
          ingredients: ['olive oil', 'pasta', 'tomatoes'],
          recipe: 'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
        }
      }, {
      type: 'countries',
      id: 'Japan',
        attributes: {
          name: 'Japan',
          capital: 'Tokyo',
          food: 'Katsu, Sushi & Tempura!',
          description: 'Japan description goes here!'
        }
      }, {
      type: 'countries',
      id: 'France',
        attributes: {
          name: 'France',
          capital: 'Paris',
          food: 'Snails, Frogs Legs & Garlic!',
          dish: 'Spaghetti Bolognese',
          ingredients: ['olive oil', 'pasta', 'tomatoes'],
          recipe: 'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
        }
      }, {
      type: 'countries',
      id: 'Spain',
        attributes: {
          name: 'Spain',
          capital: 'Madrid',
          food: 'Paella, Tapas & Pisto!',
          dish: 'Spaghetti Bolognese',
          ingredients: ['olive oil', 'pasta', 'tomatoes'],
          recipe: 'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
        }
      }, {
      type: 'countries',
      id: 'Germany',
        attributes: {
          name: 'Germany',
          capital: 'Berlin',
          food: 'Schnitzel, Bratwurst & Frankfurter!',
          dish: 'Spaghetti Bolognese',
          ingredients: ['olive oil', 'pasta', 'tomatoes'],
          recipe: 'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
        }
      }, {
      type: 'countries',
      id: 'Thailand',
        attributes: {
          name: 'Thailand',
          capital: 'Bangkok',
          food: 'Gaeng Daeng, Tom Yum Goong & Pad Thai!',
          dish: 'Spaghetti Bolognese',
          ingredients: ['olive oil', 'pasta', 'tomatoes'],
          recipe: 'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
        }
      }, {
      type: 'countries',
      id: 'Vietnam',
        attributes: {
          name: 'Vietnam',
          capital: 'Hanoi',
          food: 'Pak Choi, Banh Mi & Pho!',
          dish: 'Spaghetti Bolognese',
          ingredients: ['olive oil', 'pasta', 'tomatoes'],
          recipe: 'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
        }
      }, {
      type: 'countries',
      id: 'Argentina',
        attributes: {
          name: 'Argentina',
          capital: 'Buenos Aires',
          food: 'Steak, Asado & Empanadas!',
          dish: 'Spaghetti Bolognese',
          ingredients: ['olive oil', 'pasta', 'tomatoes'],
          recipe: 'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
        }
      }, {
      type: 'countries',
      id: 'USA',
        attributes: {
          name: 'USA',
          capital: 'Washington',
          food: 'Burgers, Bagels & Deep-Dish Pizza!',
          dish: 'Spaghetti Bolognese',
          ingredients: ['olive oil', 'pasta', 'tomatoes'],
          recipe: 'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
        }
      }, {
      type: 'countries',
      id: 'Portugal',
        attributes: {
          name: 'Portugal',
          capital: 'Lisbon',
          food: 'Bacalhau, Francesinha & Porco Preto!',
          dish: 'Spaghetti Bolognese',
          ingredients: ['olive oil', 'pasta', 'tomatoes'],
          recipe: 'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
        }
      }, {
      type: 'countries',
      id: 'Greece',
        attributes: {
          name: 'Greece',
          capital: 'Athens',
          food: 'Feta, Olives & Mousaka',
          dish: 'Spaghetti Bolognese',
          ingredients: ['olive oil', 'pasta', 'tomatoes'],
          recipe: 'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins. Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins. Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
        }
      }
  ];

  this.get('/countries', function(db, request) {
    if (request.queryParams.name !== undefined) {
      let filteredCountries = countries.filter(function(i) {
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) === 0;
      });
      return { data: filteredCountries };
    } else {
      return { data: countries };
    }
  });

  this.get('/countries/:id', function (db, request) {
    return { data: countries.find((country) => request.params.id === country.id) };
  });

}
