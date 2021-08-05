import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function EditStreamerPage( {handleUpdateStreamer} ) {
  const location = useLocation();

  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState(location.state.streamer);

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateStreamer(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
       <h1>Edit Streamer Profile</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Edit Streamer Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Name (required):</th>
              <td>
                <input
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Bio (required):</th>
              <td>
                <input
                  className="form-control"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Content/Category (required):</th>
              <td>
                <input
                  className="form-control"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Platform (required):</th>
              <td>
                <input
                  className="form-control"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Profile Pic:</th>
              <td>
                <input
                  className="form-control"
                  name="profileImg"
                  value={formData.profileImg}
                  onChange={handleChange}
                />
              </td>
            </tr>
        <button type="submit" className="btn" disabled={invalidForm}>
          EDIT STREAMER PROFILE
        </button>
          </tbody>
        </table>
      </form>
        &nbsp;&nbsp;
        <Link to="/streamers">CANCEL</Link>
    </>
  );
}
