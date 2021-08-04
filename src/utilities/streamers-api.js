import sendRequest from './send-request';
const BASE_URL = '/api/streamers';

export function getAll() {
    return sendRequest(BASE_URL)
}

export function create(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
  }

  export function update(updatedStreamer) {
    return sendRequest(`${BASE_URL}/${updatedStreamer._id}`, 'PUT', updatedStreamer); 
   }
  
  export function deleteOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
  }