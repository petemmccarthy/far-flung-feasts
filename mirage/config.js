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
      id: 'France',
        attributes: {
          name: 'France',
          capital: 'Paris',
          description: 'France description goes here!'
        }
      }
  ];

  this.get('/countries', function() {
    return { data: countries };
  });

  this.get('/countries/:id', function (db, request) {
    return { data: countries.find((country) => request.params.id === country.id) };
  });

}
