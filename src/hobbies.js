const ADD_ENTRY = "hobbies/ADD_ENTRY";
const ADDED_ENTRY = "hobbies/ADDED_ENTRY";
const CLEAR_ENTRIES = "hobbies/CLEAR_ENTRIES";

export const getInitialState = ({ demo }) =>
  demo
    ? {
        entries: [
          {
            firstName: "Joe",
            lastName: "Page",
            hobbies: "programming, woodworking",
            addedOn: new Date().valueOf()
          }
        ]
      }
    : { entries: [] };

export const addEntry = () => ({
  type: ADD_ENTRY
});

export const addedEntry = entry => ({
  type: ADDED_ENTRY,
  entry: { ...entry, addedOn: new Date().valueOf() }
});
export const simulatedAddEntry = entry => {
  return dispatch => {
    dispatch(addEntry());
    return new Promise(resolve => {
      setTimeout(resolve, 1700);
    }).then(() => dispatch(addedEntry(entry)));
  };
};

export const clearEntries = () => ({ type: CLEAR_ENTRIES });

const initialState = getInitialState({ demo: true });
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTRY:
      return {
        ...state,
        isSubmitting: true
      };
    case ADDED_ENTRY:
      const { entry } = action;
      entry.addedOn = new Date().valueOf();
      return {
        ...state,
        isSubmitting: false,
        entries: [...state.entries, entry]
      };
    case CLEAR_ENTRIES:
      return { ...getInitialState({ demo: false }) };
    default:
      break;
  }

  return state;
}
