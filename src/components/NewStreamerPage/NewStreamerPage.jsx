import { useState, useRef, useEffect } from "react";

export default function NewStreamerPage( {handleNewStreamer} ) {
    const [invalidForm, setValidForm] = useState(true);
    const [formData, setFormData] = useState({
      name: "",
      age: "21",
      content: "Gaming",
      platform: "Twitch",
      profileImg: ""
    });
  
    const formRef = useRef();
  
    useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
    }, [formData]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleNewStreamer(formData);
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    return (
      <>
        <h1>Add Streamer Profile</h1>
        <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
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
          <button type="submit" className="btn" disabled={invalidForm}>
            ADD STREAMER PROFILE
          </button>
        </form>
      </>
    );
  }