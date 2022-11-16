export const generateId = () =>
  Math.floor(Math.random() * Date.now()).toString(16);

export const onboardingSteps = [
  {
    id: generateId(),
    title: "Your Details",
    description: "Please provide your name and email",
    completed: false,
  },
  {
    id: generateId(),
    title: "Set Password",
    description: "Choose a secure password",
    completed: false,
  },
  {
    id: generateId(),
    title: "Company details",
    description: "Please provide your company details",
    completed: false,
  },
  {
    id: generateId(),
    title: "Add Document",
    description: "Attach your company CAC document",
    completed: false,
  },
];

