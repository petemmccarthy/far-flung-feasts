export default function() {
  this.namespace = '/api';

  let countries = [{
      type: 'countries',
      id: 'India',
        attributes: {
          name: 'India',
          capital: 'New Delhi',
          description: 'India description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Italy',
        attributes: {
          name: 'Italy',
          capital: 'Rome',
          description: 'Italy description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Japan',
        attributes: {
          name: 'Japan',
          capital: 'Tokyo',
          description: 'Japan description goes here!'
        }
      }, {
      type: 'countries',
      id: 'France',
        attributes: {
          name: 'France',
          capital: 'Paris',
          description: 'France description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Spain',
        attributes: {
          name: 'Spain',
          capital: 'Madrid',
          description: 'Spain description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Germany',
        attributes: {
          name: 'Germany',
          capital: 'Berlin',
          description: 'Germany description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Thailand',
        attributes: {
          name: 'Thailand',
          capital: 'Bangkok',
          description: 'Thailand description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Vietnam',
        attributes: {
          name: 'Vietnam',
          capital: 'Hanoi',
          description: 'Vietnam description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Argentina',
        attributes: {
          name: 'Argentina',
          capital: 'Buenos Aires',
          description: 'Argentina description goes here!'
        }
      }, {
      type: 'countries',
      id: 'USA',
        attributes: {
          name: 'USA',
          capital: 'Washington',
          description: 'USA description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Portugal',
        attributes: {
          name: 'Portugal',
          capital: 'Lisbon',
          description: 'Portugal description goes here!'
        }
      }, {
      type: 'countries',
      id: 'Greece',
        attributes: {
          name: 'Greece',
          capital: 'Athens',
          description: 'Greece description goes here!'
        }
      }
  ];

  this.get('/countries', function(db, request) {
    if (request.queryParams.name !== undefined) {
      let filteredCountry = countries.filter(function(i) {
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      return { data: filteredCountry };
    } else {
      return { data: countries };
    }
  });

  this.get('/countries/:id', function (db, request) {
    return { data: countries.find((country) => request.params.id === country.id) };
  });

}
