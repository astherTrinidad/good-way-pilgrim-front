export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const validateEmail = email => EMAIL_REGEX.test(email);

export const PASSWORD_REGEX = /^(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
export const validatePassword = password => PASSWORD_REGEX.test(password);
