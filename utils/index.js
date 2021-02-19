// find the element by their data-test attribute
export const findByTestAttr = (component, attr) => {
  const element = component.find(`[data-test='${attr}']`);
  return element;
};
