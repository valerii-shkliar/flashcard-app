import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import style from './FormCard.module.scss';
import PlusIcon from '../../../assets/icons/plus.svg?react';
import { BTN_TYPES } from '../../../constants/data';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createCard } from '../../../store/flashCardsSlice';
import { v4 as uuidv4 } from 'uuid';
import firstStrToUpperCase from '../../../utilities/firstStrToUpperCase';
import { areas } from '../../../constants/data';
import { useEffect } from 'react';

function FormCard() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  function handleFormSubmit(data) {
    const area = firstStrToUpperCase(data.category);

    if (!areas.includes(area)) {
      areas.push(area);
    }

    const newCard = {
      question: firstStrToUpperCase(data.question),
      answer: data.answer,
      area,
      progress: 0,
      id: uuidv4(),
    };
    dispatch(createCard(newCard));
  }

  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form className={style.cardForm} onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField
        label="Question"
        placeholder="e.g., What is the capital of France?"
        register={register}
        error={errors.question}
      />
      <InputField
        label="Answer"
        placeholder="e.g., Paris"
        isTextarea={true}
        register={register}
        error={errors.answer}
      />
      <InputField
        label="Category"
        placeholder="e.g., Geography"
        register={register}
        error={errors.category}
      />
      <Button type="submit" kind={BTN_TYPES.PRIMARY}>
        <PlusIcon className={style.icon} />
        Create Card
      </Button>
    </form>
  );
}

export default FormCard;
