import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeleteProfile = profileId => {
    const action = deleteContact(profileId);
    dispatch(action);
  };

  return (
    <div className={css.contactContainer}>
      <div>
        <p>🦸‍♂️ {name}</p>
        <p>📱{number}</p>
      </div>
      <button
        type="button"
        className={css.contactBtn}
        onClick={() => onDeleteProfile(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
