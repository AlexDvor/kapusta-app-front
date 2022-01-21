import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Input,
  Select,
  Label,
  Form,
  Option,
  InputPrice,
  LabelInputPrice,
  Container,
  ButtonContainer,
  ButtonContainerInline,
} from './ProductForm.styled';

import Button from '../Button/Button';
import { theme } from '../../constants/theme';
import Wallet from '../../components/Wallet/Wallet';
import transOperations from '../../redux/transactions/trans-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import transSelectors from '../../redux/transactions/trans-selectors';


export default function ProductForm() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const token = useSelector(authSelectors.getToken);
  const type= useSelector(transSelectors.getType);
  

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'description':
        return setDescription(value);
      case 'category':
        return setCategory(value);
      case 'amount':
        return setAmount(value);
      default:
        return;
    }
  };

  const handleClearForm = () => {
    setDescription('');
    setCategory('');
    setAmount('');
  };

  const handleSubmitForm = () => {
  console.log(type, amount,category, description, token);
  setDescription(description);
  setCategory(category);
  setAmount(amount);
    dispatch(transOperations.createTransactions(type, amount,category, description, token),[dispatch]);
    // handleClearForm();
    console.log('Send form.');
    console.log('Clear form.');
   };

  return (
    <>
      <Container>
        <Form  name="productForm" autoComplete="on" noValidate>
          <Label>
            <Input
              name="description"
              placeholder="Description product."
              onChange={handleChange}
              value={description}
            />
          </Label>

          <Label>
            <Select
              name="category"
              onChange={handleChange}
              value={category}
            >
              <Option value disabled selected hidden>
                Category product.
              </Option>
              <Option value="Transport">Transport</Option>
              <Option value="Food">Food</Option>
              <Option value="Health">Health</Option>
            </Select>
          </Label>

          <LabelInputPrice>
            <InputPrice
              placeholder="00.00 $"
              name="amount"
              type="number"
              onChange={handleChange}
              value={amount}
            />
            <Wallet />
          </LabelInputPrice>
          </Form>

        <ButtonContainerInline>
          <ButtonContainer>
            <Button
              text={'ADD'}
              type={'button'}
              backgroundColor={theme.color.buttonOrangeBg}
              textColor={theme.color.inputBorderColor}
              marginRight={'15px'}
              onClick={handleSubmitForm}
            />
            <Button text={'CLEAR'} type={'button'} onClick={handleClearForm} />
          </ButtonContainer>
        </ButtonContainerInline>
 
      </Container>
    </>
  );
}
