//------------------START IMPORTS-----------------
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
//Import Local files
import { useCharacters } from "../../hooks";
//------------------END IMPORTS------------------
const CreateCharacterPage = () => {
  const { createCharacter } = useCharacters();
  const navigate = useNavigate();

  //Declare validations for create Character Form
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.height) {
      errors.height = "Required";
    }
    if (!values.mass) {
      errors.mass = "Required";
    }
    if (!values.gender) {
      errors.gender = "Required";
    }
    if (!values.birth_year) {
      errors.birth_year = "Required";
    }
    if (!values.image) {
      errors.image = "Required";
    }

    return errors;
  };

  //Create Formik Form
  const formik = useFormik({
    initialValues: {
      name: "",
      height: "",
      mass: "",
      gender: "",
      birth_year: "",
      image: "",
    },
    validate,
    onSubmit: (values) => {
      createCharacter(values);
      alert("Character cretaed!");
      navigate("/character-list");
    },
  });

  return (
    <div className="create-container">
      <div className="create-container__titleContainer">
        <h1 className="create-container__titleContainer__title">
          Create your Character
        </h1>
      </div>
      <form onSubmit={formik.handleSubmit}  className="create-container__form" >
        <div className="create-container__form__element">
          <label
            className="create-container__form__element__label"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="create-container__form__element__input"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Write Character's name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="create-container__form__element">
          <label
            className="create-container__form__element__label"
            htmlFor="height"
          >
            Height
          </label>
          <input
            className="create-container__form__element__input"
            id="height"
            name="height"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.height}
            placeholder="Write Character's height"
          />
          {formik.touched.height && formik.errors.height ? (
            <div className="error">{formik.errors.height}</div>
          ) : null}
        </div>

        <div className="create-container__form__element">
          <label
            className="create-container__form__element__label"
            htmlFor="mass"
          >
            Mass
          </label>
          <input
            className="create-container__form__element__input"
            id="mass"
            name="mass"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mass}
            placeholder="Choose Character's mass"
          />
          {formik.touched.mass && formik.errors.mass ? (
            <div className="error">{formik.errors.mass}</div>
          ) : null}
        </div>

        <div className="create-container__form__element">
          <label
            className="create-container__form__element__label"
            htmlFor="mass"
          >
            Gender
          </label>
          <input
            className="create-container__form__element__input"
            id="gender"
            name="gender"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
            placeholder="Choose Character's mass"
          />
          {formik.touched.mass && formik.errors.gender ? (
            <div className="error">{formik.errors.gender}</div>
          ) : null}
        </div>

        <div className="create-container__form__element">
          <label
            className="create-container__form__element__label"
            htmlFor="birth_year"
          >
            Birth Year
          </label>
          <input
            className="create-container__form__element__input"
            id="birth_year"
            name="birth_year"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birth_year}
            placeholder="Write Character's Birth Year"
          />
          {formik.touched.birth_year && formik.errors.birth_year ? (
            <div className="error">{formik.errors.birth_year}</div>
          ) : null}
        </div>

        <div className="create-container__form__element">
          <label
            className="create-container__form__element__label"
            htmlFor="image"
          >
            Image
          </label>
          <input
            className="create-container__form__element__input"
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            placeholder="Copy Character's image URL"
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="error">{formik.errors.image}</div>
          ) : null}
        </div>

        <button  type="submit" className="create-container__form__button">
          create character
        </button>
      </form>
    </div>
  );
};

export default CreateCharacterPage;