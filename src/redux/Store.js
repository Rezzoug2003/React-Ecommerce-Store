import { createStore } from "redux";
import { hendlerCarde } from "./reducer/hendlerCard";

const store = createStore(hendlerCarde);

export default store;
