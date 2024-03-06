import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email(),
    isWorking: yup.boolean(),
    favCar: yup.string().required('Select your fav brand car'),
    otherCar: yup.string().when('favCar', (val) => {
        if (val[0] === 'other') {
            return yup.string().required('Please type your fav brand');
        } else {
            return yup.string().notRequired();
        }
    }),
    companyName: yup.string().when("isWorking", (val) => {
        console.log(val);
        console.log(val[0]);

        if (val[0]) {
            return yup.string().required("Please type your company name");
        } else {
            return yup.string().notRequired();
        }
    }),
    companyType: yup.string().when("isWorking", (val) => {
        if (val[0]) {
            return yup.string().required("Please select your company type!");
        } else {
            return yup.string().notRequired();
        }
    }),
    companyNumber: yup.string().when("isWorking", (val) => {
        if (val[0]) {
            return yup.string().required("Please type your company number!");
        } else {
            return yup.string().notRequired();
        }
    }),
})
export default schema;