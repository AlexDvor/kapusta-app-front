import Select from 'react-select';
import { ContainerInputSelect } from './InputSelect.styled';
import { theme } from '../../constants/theme';
import { useState } from 'react';

const data = [
  { value: 'Transport', label: 'Transport' },
  { value: 'Food', label: 'Food' },
  { value: 'Health', label: 'Health' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'House', label: 'House' },
  { value: 'Technics', label: 'Technics' },
  { value: 'Utilities, communic', label: 'Utilities, communic' },
  { value: 'Sports, hobbies', label: 'Sports, hobbies' },
  { value: 'Education', label: 'Education' },
  { value: 'Other', label: 'Other' },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isFocused
      ? theme.color.buttonDarkText.buttonDarkText
      : theme.color.inputPlaceholderColor,
    backgroundColor: state.isFocused
      ? theme.color.inputBorderColorDeskTab
      : theme.color.inputBorderColor,
    fontSize: '12px',
    paddingLeft: '20px',
    height: '33px',
    lineHeight: '14px',
    letterSpacing: '0.02em',
  }),
  container: (provided, state) => ({
    ...provided,
    height: '44px',
    width: '100%',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: '12px',
    color: `${theme.color.inputPlaceholderColor}`,
  }),
  control: (provided, state) => ({
    //весь контейнер инпута селект.
    ...provided,
    // width: '188px',
    border: `2px solid ${theme.color.inputBorderColorDeskTab}`,
    height: '44px',
    borderRadius: '0px',
    boxShadow: 'none',
    width: '100%',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  //   menu: (provided, state) => ({
  //     ...provided,
  //     // height: '365px',
  //   }),
  singleValue: (provided, state) => ({
    //выбранное значение в инпуте.
    ...provided,
    color: theme.color.inputPlaceholderColor,
    fontSize: '12px',
    paddingLeft: '0px',
    lineHeight: '14px',
    letterSpacing: '0.02em',
  }),
  selectContainer: (provided, state) => ({
    ...provided,
    fontSize: '12px',
    lineHeight: '14px',
    letterSpacing: '0.02em',
  }),
};

export default function InputSelect() {
  const [category, setCategory] = useState('');
  const changeCategory = category && {
    label: category.name,
    value: category.value,
  };

  const handleChange = e => {
    console.log({ name: e.label, value: e.value });
    // setCategory(e);
    setCategory({ name: e.label, value: e.value });
  };

  const handleClear = () => {
    setCategory('');
  };
  return (
    <ContainerInputSelect>
      <Select
        name="category"
        styles={customStyles}
        options={data}
        placeholder={'Product category'}
        onChange={handleChange}
        value={changeCategory}
      />
      <button
        type="button"
        style={{ width: '30px', height: '30px' }}
        onClick={handleClear}
      />
    </ContainerInputSelect>
  );
}
