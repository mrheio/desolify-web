const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const containsUppercaseRegex = /[A-Z]/;
const numberRegex = /^[1-9]\d*$/;

export const requiredRule = {
	required: { value: true, message: 'Required field' },
};

export const emailRule = {
	pattern: { value: emailRegex, message: 'Invalid email format' },
};

export const usernameRule = {
	minLength: { value: 3, message: 'At least 3 characters' },
};

export const passwordRule = {
	minLength: { value: 8, message: 'At least 8 characters' },
	pattern: { value: containsUppercaseRegex, message: 'At least 1 uppercase' },
};

export const numberRule = {
	pattern: { value: numberRegex, message: 'Numeric field' },
};

export const gameNameRule = {
	minLength: { value: 3, message: 'At least 3 characters' },
};
