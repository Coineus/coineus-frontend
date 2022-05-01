const formMaker = (data: Object) => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value.trim());
  }
  return formData;
};

export default formMaker;
