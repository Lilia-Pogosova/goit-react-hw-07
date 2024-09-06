import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import css from "./App.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from "../redux/contactsOps";
import { selectLoading, selectError } from "../redux/contactsSlice";
import Loader from "../Loader/Loader";


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50">
            <path d="M 13 4 C 8.038 4 4 8.037 4 13 L 4 37 C 4 41.963 8.038 46 13 46 L 37 46 C 37.338 46 37.671 45.978406 38 45.941406 L 38 4.0585938 C 37.671 4.0215938 37.338 4 37 4 L 13 4 z M 40 4.5253906 L 40 14 L 46 14 L 46 13 C 46 9.09 43.49 5.7643906 40 4.5253906 z M 22 12 C 29.168 12 35 17.832 35 25 C 35 32.168 29.168 38 22 38 C 14.832 38 9 32.168 9 25 C 9 17.832 14.832 12 22 12 z M 22 14 C 15.935 14 11 18.935 11 25 C 11 27.814 12.071406 30.377219 13.816406 32.324219 C 15.889406 30.225219 18.852 29 22 29 C 25.14 29 28.1135 30.222312 30.1875 32.320312 C 31.9295 30.373313 33 27.812 33 25 C 33 18.935 28.065 14 22 14 z M 40 16 L 40 24 L 46 24 L 46 16 L 40 16 z M 22 18.5 C 24.481 18.5 26.5 20.519 26.5 23 C 26.5 25.481 24.481 27.5 22 27.5 C 19.519 27.5 17.5 25.481 17.5 23 C 17.5 20.519 19.519 18.5 22 18.5 z M 40 26 L 40 34 L 46 34 L 46 26 L 40 26 z M 40 36 L 40 45.474609 C 43.49 44.235609 46 40.91 46 37 L 46 36 L 40 36 z"></path>
        </svg>
        Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader>Request in progress...</Loader>}
      {isError && <p>Oooops😬...Something went wrong</p>}
      <div className={css.wrapper}>
            <ContactList />
      </div>
    </div>
  );
}

export default App;