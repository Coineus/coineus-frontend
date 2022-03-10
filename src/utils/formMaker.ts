const formMaker = (data: Object) => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  return formData;
};

export default formMaker;
