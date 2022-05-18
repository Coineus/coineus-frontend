const formMaker = (data: Object) => {
  const formData = new FormData();

  for (let [key, value] of Object.entries(data)) {
    value = typeof value === 'string' ? value.trim() : value;
    formData.append(key, value);
  }
  return formData;
};

export default formMaker;
