const MonstersController = {};
const URL = 'http://localhost:5173/data/monsters.json'

//TODO
MonstersController.findAll = async () => await fetch(URL, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}).then(response => response.json()).then(result => (result)).catch(console.log);

export default MonstersController