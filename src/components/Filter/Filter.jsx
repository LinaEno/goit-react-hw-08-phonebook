import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const filterContact = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filterContact}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </Label>
  );
};

export default Filter;
