export default function() {
  this.namespace = '/api';

  let countries = [{
      type: 'countries',
      id: 'India',
        attributes: {
          name: 'India',
          capital: 'New Delhi',
          food: 'Biryani, Dosa & Pakora!',
          description: 'India description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Italy',
        attributes: {
          name: 'Italy',
          capital: 'Rome',
          food: 'Pizza, Pasta & Spicy Meatballs!',
          description: 'Italy description goes here!'
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
          description: 'France description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Spain',
        attributes: {
          name: 'Spain',
          capital: 'Madrid',
          food: 'Paella, Tapas & Pisto!',
          description: 'Spain description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Germany',
        attributes: {
          name: 'Germany',
          capital: 'Berlin',
          food: 'Schnitzel, Bratwurst & Frankfurter!',
          description: 'Germany description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Thailand',
        attributes: {
          name: 'Thailand',
          capital: 'Bangkok',
          food: 'Gaeng Daeng, Tom Yum Goong & Pad Thai!',
          description: 'Thailand description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Vietnam',
        attributes: {
          name: 'Vietnam',
          capital: 'Hanoi',
          food: 'Pak Choi, Banh Mi & Pho!',
          description: 'Vietnam description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Argentina',
        attributes: {
          name: 'Argentina',
          capital: 'Buenos Aires',
          food: 'Steak, Asado & Empanadas!',
          description: 'Argentina description goes here!'
        }
      }, {
      type: 'countries',
      id: 'USA',
        attributes: {
          name: 'USA',
          capital: 'Washington',
          food: 'Burgers, Bagels & Deep-Dish Pizza!',
          description: 'USA description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Portugal',
        attributes: {
          name: 'Portugal',
          capital: 'Lisbon',
          food: 'Bacalhau, Francesinha & Porco Preto!',
          description: 'Portugal description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Greece',
        attributes: {
          name: 'Greece',
          capital: 'Athens',
          food: 'Feta, Olives & Mousaka',
          description: 'Greece description goes here!'
        }
      }
  ];

  this.get('/countries', function(db, request) {
    if (request.queryParams.name !== undefined) {
      let filteredCountries = countries.filter(function(i) {
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
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
