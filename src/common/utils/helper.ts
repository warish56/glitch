export const extractPhoneOrEmail = (phoneOrEmail: string) => {
  const isEmail = isNaN(Number(phoneOrEmail));
  return {
    email: isEmail ? phoneOrEmail : '',
    phone: isEmail ? '' : phoneOrEmail,
  };
};

export const convertJsonToFormData = (
  formKey: string,
  data: Record<string, unknown>,
) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    const value = data[key];
    // const formVal =
    //   value && !Array.isArray(value) && typeof value === 'object'
    //     ? convertJsonToFormData(value as Record<string, unknown>)
    //     : value;
    formData.append(`${formKey}[${key}]`, value);
  });
  // formData.append(key, data);
  return formData;
};
