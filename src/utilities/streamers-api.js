const BASE_URL = '/api/streamers';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(streamer) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(streamer)
    }).then(res => res.json());
  }

  export function update(updatedStreamerData) {
    return fetch(`${BASE_URL}/${updatedStreamerData._id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedStreamerData),
    }).then(res => res.json());
  }
  
  export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    }).then(res => res.json());
  }