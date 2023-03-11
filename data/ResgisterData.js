export const RegisterData = [
  {
    id: 1,
    title: "Welcome!",
    subtitle:
      "After registering, you'll be able to enjoy the benefits of not wasting time with bureaucracy.",
    subtitle_2: "Creating an account easy, and afterwards you can enjoy the perks of our app.",
    image: "/assets/register/login_1.png",
    formTitle: "Create Account",
  },
  {
    id: 2,
    title: "Let`s get to know each other!",
    subtitle: "We need some more details in order to set up your account!",
    subtitle_2: "You can choose a subscription type that fits your needs!",
    image: "/assets/register/login_2.png",
    formTitle: "Account Details",
  },
  {
    id: 3,
    title: "You became one of us!",
    subtitle: "We're happy to have you here and we want to extend a warm welcome to our community.",
    subtitle_2: "You are almost there.We can't wait to start working with you!",
    image: "/assets/register/login_3.png",
    formTitle: "Account created!",
  },
];

export const initialValues = {
  UserAccount: {
    email: "",
    password: "",
    confirmPassword: "",
    typeOfUser: "",
  },
  CompanyDetails: {
    entityName: "",
    fiscalCode: "",
    entityAddress: "",
    typeOfSubscription: "",
  },
  UserDetails: {
    entityName: "",
    institutionName: "",
    entityAddress: "",
    typeOfSubscription: "",
  },
};
export const initialValuesErr = {
  UserAccount: {
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
    typeOfUser: undefined,
  },
  CompanyDetails: {
    entityName: undefined,
    fiscalCode: undefined,
    entityAddress: undefined,
    typeOfSubscription: undefined,
  },
  UserDetails: {
    entityName: undefined,
    institutionName: "",
    entityAddress: undefined,
    typeOfSubscription: undefined,
  },
};

export const selectDataTypeOfSubscriptions = {
  id: 1,
  defaultValue: "Choose a type of subsctiption",
  values: [
    {
      id: 0,
      name: "Free",
    },
    {
      id: 1,
      name: "Basic",
    },
    {
      id: 2,
      name: "Pro",
    },
  ],
};
export const selectDataTypeOfUsers = {
  id: 1,
  defaultValue: "Choose a type of account",
  values: [
    {
      id: 0,
      name: "Public Institution",
    },
    {
      id: 1,
      name: "Company",
    },
    {
      id: 2,
      name: "Individual",
    },
  ],
};
