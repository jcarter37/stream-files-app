import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function EditStreamerPage(props) {
  const location = useLocation();

  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState(location.state.streamer);

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleUpdateStreamer(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Edit Puppy</h1>
      <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name (required)</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age </label>
          <input
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Content/Category (required) </label>
          <input
            className="form-control"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Platform (required) </label>
          <input
            className="form-control"
            name="platform"
            value={formData.platform}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Profile Pic </label>
          <input
            className="form-control"
            name="profileImg"
            value={formData.profileImg}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-xs" disabled={invalidForm}>
          SAVE PUPPY
        </button>
        &nbsp;&nbsp;
        <Link to="/">CANCEL</Link>
      </form>
    </>
  );
}
