
//create across environments
const fetch = require("fetch");
const baseUrl = 'https://api.split.io/internal/api/v2/';

const getBasePostOptions = (body) => ({
  method: 'POST',
  mode: 'cors',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': 'Bearer ADMIN_API_KEY'
  },
  body: JSON.stringify(body)
})

const createSplit = async (workspaceId, splitName, description, trafficType) => {

  const body = {name: splitName};
  if (description) {
    body.description = description
  }
  const options = getBasePostOptions();
  options.body= JSON.stringify(body)
  const url = baseUrl + `/splits/ws/${workspaceId}/trafficTypes/${trafficType}`
  const response = await fetch(url, options);
  return response;
}

const addDefinition = async (workspaceId, splitName, environmentName) => {
  const body = {
    treatments: [
      {name:"on"},
      {name:"off"}
    ],
    defaultTreatment:"off"
  }
  const options = getBasePostOptions();
  options.body= JSON.stringify(body)
  const url = baseUrl +`/splits/ws/${workspaceId}/${splitName}/environments/${environmentName}`;
  const response = await fetch(url, options);
  return response;
}

const getWorkspaces = () => {
  // curl -v -X GET \
  // -H 'Content-Type:application/json' \
  // -H 'Authorization: Bearer ADMIN_API_KEY' \
  // https://api.split.io/internal/api/v2/workspaces
}

const getEnvironments = () => {
  // curl -v -X GET \
  // -H 'Content-Type:application/json' \
  // -H 'Authorization: Bearer ADMIN_API_KEY' \
  // https://api.split.io/internal/api/v2/environments/ws/<WORKSPACE_ID>
}

module.exports = {
  createSplit,
  createSplitFull,
}