const serverUrl = "http://localhost:9000";

export const getAllContacts = () => {
  let dataurl = `${serverUrl}/contacts`;
  return axios.get(dataurl);
};

export const getContact = (contactId) => {
  let dataurl = `${serverUrl}/contacts/${contactId}`;
  return axios.get(dataurl);
};

export const crateContacts = (contact) => {
  let dataurl = `${serverUrl}/contacts`;
  return axios.post(dataurl, contact);
};

export const updateContacts = (contact, contactId) => {
  let dataurl = `${serverUrl}/contacts/${contactId}`;
  return axios.put(dataurl, contact);
};

export const deleteContacts = (contactId) => {
  let dataurl = `${serverUrl}/contacts/${contactId}`;
  return axios.delete(dataurl);
};

export const getAllgroups = () => {
  let dataurl = `${serverUrl}/groups`;
  return axios.get(dataurl);
};
export const getAgroup = (contact) => {
  const { groupId } = contact;
  let dataurl = `${serverUrl}/groups/${groupId}`;
  return axios.get(dataurl);
};
