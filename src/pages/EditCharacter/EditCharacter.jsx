//------------------START IMPORTS-----------------
import { useFormik } from "formik";
import { Routes, useNavigate, useLocation } from "react-router-dom";
//Import Local files
import { useCharacters } from "../../hooks";
//------------------END IMPORTS------------------
const EditCharacter = () => {
  
    //const { id, name, mass, height, birth_year, gender, image, home_world, films } = character;

    const navigate = useNavigate();
    const { state } = useLocation();
    const { currentCharacter } = state;
    const {editCharacter} = useCharacters();
    //console.log(currentCharacter);
    const { _id, name, mass, height, birth_year, gender, image, home_world, films } = currentCharacter;

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
        errors.gender= "Required";
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
          name: name,
          height: height,
          mass: mass,
          gender: gender,
          birth_year: birth_year,
          image: image,
        },        
        validate,
        onSubmit: (values) => {
            console.log(values);          
            editCharacter(_id, values);
            alert("Character updated!")
            navigate("/character-list");
        },
      });
    
    
    return (
        <div className="register-container">
            <h1>edit character</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder={name}
                />
                {formik.touched.name && formik.errors.name ? (
                <div className="">{formik.errors.name}</div>
                ) : null}

                <label htmlFor="height">Height</label>
                <input
                id="height"
                name="height"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.height}
                placeholder={height}

                />
                {formik.touched.height && formik.errors.height ? (
                <div className="error">{formik.errors.height}</div>
                ) : null}

                <label htmlFor="mass">Mass</label>
                <input
                id="mass"
                name="mass"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mass}
                placeholder={mass}
                />
                {formik.touched.mass && formik.errors.mass ? (
                <div className="error">{formik.errors.mass}</div>
                ) : null}

                <label htmlFor="gender">Gender</label>
                <input
                id="gender"
                name="gender"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
                placeholder={gender}
                
                />
                {formik.touched.genderd && formik.errors.gender ? (
                <div className="error">{formik.errors.gender}</div>
                ) : null}

                <label htmlFor="birth_year">Birth Year</label>
                <input
                id="birth_year"
                name="birth_year"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.birth_year}
                placeholder={birth_year}
                
                />
                {formik.touched.birth_year && formik.errors.birth_year ? (
                <div className="error">{formik.errors.birth_year}</div>
                ) : null}

                <label htmlFor="image">Image</label>
                <input
                id="image"
                name="image"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
                placeholder={image}
                
                />
                {formik.touched.image && formik.errors.image ? (
                <div className="error">{formik.errors.image}</div>
                ) : null}       

                <button type="submit">edit character</button>
            </form>
        </div>
    )
}

export default EditCharacter;