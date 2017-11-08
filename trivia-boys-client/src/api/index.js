export function fetchWords() {
  var url = "http://localhost:3000/api/v1/words/"
  return fetch(url)
  .then( res => res.json() )
  .then( json => {
    if(json.error) {
      alert("Error")
    } else {
      return json
    }
  })
}
