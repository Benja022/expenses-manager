import {
  faChampagneGlasses,
  faBriefcase,
  faCommentDollar,
  faSackDollar,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

export const classes = {
  incoming: {
    bgColor: "light-incoming",
    color: "incoming",
  },
  transfer: {
    bgColor: "light-transfer",
    color: "transfer",
  },
  car: {
    bgColor: "light-car",
    color: "car",
  },
  bizum: {
    bgColor: "light-bizum",
    color: "bizum",
  },
  foodDrinks: {
    bgColor: "light-bill",
    color: "bill",
  },
  electricity: {
    bgColor: "light-electricity",
    color: "electricity",
  },
  insurance: {
    bgColor: "light-insurance",
    color: "insurance"
},
};

export const itemsList = [
  {
    icons: [faSquare, faChampagneGlasses],
    classes: classes.bill,
    data: {
      title: "Food & Drinks",
      date: new Date("2022-08-24").toLocaleDateString(),
    },
    money: {
      amount: 20,
      income: false,
    },
  },
  {
    icons: [faSquare, faBriefcase],
    classes: classes.incoming,
    data: {
      title: "Freelancing Work",
      date: new Date("2022-08-31").toLocaleDateString(),
    },
    money: {
      amount: 260,
      income: true,
    },
  },
  {
    icons: [faSquare, faCommentDollar],
    classes: classes.bizum,
    data: {
      title: "Send Bizum to friend",
      date: new Date("2022-09-01").toLocaleDateString(),
    },
    money: {
      amount: 50,
      income: false,
    },
  },
  {
    icons: [faSquare, faSackDollar],
    classes: classes.transfer,
    data: {
      title: "Payroll",
      date: new Date("2022-09-01").toLocaleDateString(),
    },
    money: {
      amount: 2500,
      income: true,
    },
  },
];