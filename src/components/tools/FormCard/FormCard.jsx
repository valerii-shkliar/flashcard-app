import InputField from '../InputField/InputField';
import style from './FormCard.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createCard, updateCard } from '../../../store/flashCardsSlice';
import { v4 as uuidv4 } from 'uuid';
import firstStrToUpperCase from '../../../utilities/firstStrToUpperCase';
import { areas } from '../../../constants/data';
import { useEffect } from 'react';
import clsx from 'clsx';

function FormCard({ className, children, currentValues, id, handleEditSubmit, triggerToast }) {
  const formCustomClass = clsx(style.cardForm, className);
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

    if (id) {
      const card = {
        question:
          data.question === currentValues.question
            ? currentValues.question
            : firstStrToUpperCase(data.question),
        answer: data.answer === currentValues.answer ? currentValues.answer : data.answer,
        area: data.area === currentValues.area ? currentValues.area : area,
        id,
      };

      dispatch(updateCard(card));
      handleEditSubmit();
    } else {
      const card = {
        question: firstStrToUpperCase(data.question),
        answer: data.answer,
        area,
        progress: 0,
        id: uuidv4(),
      };
      dispatch(createCard(card));
      triggerToast('created');
    }
  }

  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form className={formCustomClass} onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField
        label="Question"
        register={register}
        error={errors.question}
        defaultValue={currentValues?.question}
        placeholder="e.g., What is the capital of France?"
      />
      <InputField
        label="Answer"
        isTextarea={true}
        register={register}
        error={errors.answer}
        defaultValue={currentValues?.answer}
        placeholder="e.g., Paris"
      />
      <InputField
        label="Category"
        register={register}
        error={errors.category}
        defaultValue={currentValues?.area}
        placeholder="e.g., Geography"
      />
      {children}
    </form>
  );
}

export default FormCard;
